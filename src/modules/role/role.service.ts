import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly _roleRepository: RoleRepository) {}

  async getAll(): Promise<Role[]> {
    return this._roleRepository.find();
  }

  async get(id: number): Promise<Role> {
    if (!id) throw new NotFoundException('id must be sent');
    const role = this._roleRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!role) throw new NotFoundException('role does not exist');
    return role;
  }

  async create(role: Role): Promise<Role> {
    if (!role) throw new NotFoundException('role must be sent');
    return this._roleRepository.save(role);
  }

  async update(id: number, role: Role) {
    if (!role) throw new NotFoundException('role must be sent');
    if (!id) throw new NotFoundException('id must be sent');
    await this._roleRepository.update(id, role);
  }
}
