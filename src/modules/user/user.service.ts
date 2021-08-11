import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MapperService } from '../../shared/mapper.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repositry';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _mapperService: MapperService,
  ) {}

  async get(id: number): Promise<UserDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const user = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!user) {
      throw new NotFoundException('User doesnt exist');
    }

    return this._mapperService.map<User, UserDto>(user, new UserDto());
  }

  async getAll(): Promise<UserDto[]> {
    const users = await this._userRepository.find({
      where: { status: 'ACTIVE' },
    });

    if (!users) {
      throw new NotFoundException('User doesnt exist');
    }

    return this._mapperService.mapCollection<User, UserDto>(
      users,
      new UserDto(),
    );
  }

  async create(user: User): Promise<UserDto> {
    const savedUser: User = await this._userRepository.save(user);
    return this._mapperService.map<User, UserDto>(savedUser, new UserDto());
  }

  async update(id: number, user: User): Promise<void> {
    await this._userRepository.update(id, user);
  }

  async delete(id: number): Promise<void> {
    const userToDelete = await this._userRepository.findOne(id, {
      where: { stauts: 'ACTIVE' },
    });
    if (!userToDelete) throw new NotFoundException('user doesnt exist');
    await this._userRepository.update(id, { status: 'INACTIVE' });
  }
}
