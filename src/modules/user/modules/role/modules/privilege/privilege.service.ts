import { Inject, Injectable } from '@nestjs/common';
import {
  IUserRolePrivilege,
  Privilege,
} from 'src/shared/domain/interfaces/user-role-privilege.interface';
import { DeleteRolePrivilegeResponseDto } from './dtos/delete-privilege.dto';
import { IUserRolePrivilegeRepository } from './interfaces/privilege-repository.interface';

@Injectable()
export class UserRolePrivilegeService {
  constructor(
    @Inject('IUserRolePrivilegeRepository')
    private readonly _rolePrivilegeRepository: IUserRolePrivilegeRepository,
  ) {}

  public async getByIdOrNull(id: string): Promise<IUserRolePrivilege> {
    const privilege = await this._rolePrivilegeRepository.getById(id);
    return privilege;
  }

  public async createRolePrivilegeOrNull(
    roleId: string,
    privilege: Privilege,
  ): Promise<IUserRolePrivilege> {
    const rolePrivilege =
      await this._rolePrivilegeRepository.createRolePrivilege(
        roleId,
        privilege,
      );
    return rolePrivilege;
  }

  public async deleteRolePrivilege(
    privilegeId: string,
  ): Promise<DeleteRolePrivilegeResponseDto> {
    const isDeleted = await this._rolePrivilegeRepository.deleteRolePrivilege(
      privilegeId,
    );
    return { isDeleted };
  }
}
