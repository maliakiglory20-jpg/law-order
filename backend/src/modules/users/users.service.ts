import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: { page?: number; limit?: number; search?: string; role?: string }) {
    const { page = 1, limit = 20, search, role } = params;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (role) where.role = role;

    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          isActive: true,
          lastLogin: true,
          organization: true,
          jobTitle: true,
          createdAt: true,
          _count: {
            select: { quizAttempts: true, bookmarks: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    return { users, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        lastLogin: true,
        organization: true,
        jobTitle: true,
        avatarUrl: true,
        createdAt: true,
        mfaEnabled: true,
        _count: {
          select: { quizAttempts: true, bookmarks: true, notes: true },
        },
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateProfile(id: string, data: { name?: string; organization?: string; jobTitle?: string; avatarUrl?: string }) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        organization: true,
        jobTitle: true,
        avatarUrl: true,
      },
    });
  }

  async changePassword(id: string, currentPassword: string, newPassword: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) throw new ForbiddenException('Current password is incorrect');

    const hashed = await bcrypt.hash(newPassword, 12);
    await this.prisma.user.update({ where: { id }, data: { password: hashed } });
  }

  async updateRole(id: string, role: string, requestingUserRole: string): Promise<any> {
    if (requestingUserRole !== 'SUPER_ADMIN' && requestingUserRole !== 'ADMIN') {
      throw new ForbiddenException('Insufficient permissions');
    }
    if (role === 'SUPER_ADMIN' && requestingUserRole !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Only super admins can assign super admin role');
    }

    return this.prisma.user.update({
      where: { id },
      data: { role: role as any },
      select: { id: true, email: true, name: true, role: true },
    });
  }

  async toggleActive(id: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    return this.prisma.user.update({
      where: { id },
      data: { isActive: !user.isActive },
      select: { id: true, email: true, isActive: true },
    });
  }

  async getUserStats(id: string) {
    const [progress, attempts, bookmarks] = await this.prisma.$transaction([
      this.prisma.userProgress.findMany({
        where: { userId: id },
        include: { litigationType: { select: { name: true, slug: true } } },
      }),
      this.prisma.quizAttempt.findMany({
        where: { userId: id },
        orderBy: { completedAt: 'desc' },
        take: 10,
        include: { quiz: { select: { title: true } } },
      }),
      this.prisma.bookmark.count({ where: { userId: id } }),
    ]);

    const avgScore = attempts.length > 0
      ? attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length
      : 0;

    return {
      progress,
      recentAttempts: attempts,
      bookmarksCount: bookmarks,
      avgScore: Math.round(avgScore),
      quizzesCompleted: attempts.length,
    };
  }
}
