import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get()
  async getRol(): Promise<Role[]> {
    return this._roleService.getAll();
  }

  @Get(':id')
  async getRoles(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    return this._roleService.get(id);
  }

  @Post()
  async create(@Body() role: Role) {
    return this._roleService.create(role);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() role: Role) {
    return this._roleService.update(id, role);
  }
}
