import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class LitigationService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: { category?: string; search?: string; page?: number; limit?: number }) {
    const { category, search } = params;
    // Query params arrive as strings; coerce to numbers for Prisma take/skip.
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 50;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [types, total] = await this.prisma.$transaction([
      this.prisma.litigationType.findMany({
        where,
        skip,
        take: limit,
        include: {
          _count: { select: { cases: true, quizzes: true } },
        },
        orderBy: { name: 'asc' },
      }),
      this.prisma.litigationType.count({ where }),
    ]);

    return { types, total, page, limit };
  }

  async findBySlug(slug: string) {
    const type = await this.prisma.litigationType.findUnique({
      where: { slug },
      include: {
        _count: { select: { cases: true, quizzes: true } },
        cases: {
          take: 10,
          orderBy: { viewCount: 'desc' },
          select: {
            id: true,
            name: true,
            court: true,
            jurisdiction: true,
            year: true,
            outcome: true,
            isFeatured: true,
          },
        },
      },
    });

    if (!type) throw new NotFoundException('Litigation type not found');
    return type;
  }

  async findById(id: string) {
    const type = await this.prisma.litigationType.findUnique({
      where: { id },
      include: {
        _count: { select: { cases: true, quizzes: true } },
      },
    });
    if (!type) throw new NotFoundException('Litigation type not found');
    return type;
  }

  async create(data: any) {
    return this.prisma.litigationType.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.litigationType.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.litigationType.delete({ where: { id } });
  }

  async getCategories(): Promise<string[]> {
    const types = await this.prisma.litigationType.findMany({
      select: { category: true },
      distinct: ['category'],
    });
    return types.map((t) => t.category);
  }
}
