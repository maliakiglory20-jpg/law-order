import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../../../common/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) return true;

    const { user } = context.switchToHttp().getRequest();
    if (!user) return false;

    const roleHierarchy: Record<Role, number> = {
      SUPER_ADMIN: 4,
      ADMIN: 3,
      REVIEWER: 2,
      STUDENT: 1,
    };

    const userLevel = roleHierarchy[user.role as Role] || 0;
    return requiredRoles.some((role) => userLevel >= roleHierarchy[role]);
  }
}
