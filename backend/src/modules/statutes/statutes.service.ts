import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StatutesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: {
    search?: string;
    category?: string;
    jurisdiction?: string;
    litigation?: string;
    page?: number;
    limit?: number;
  }) {
    const { search, category, jurisdiction, litigation } = params;
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 100;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (category && category !== 'All') where.category = category;
    if (jurisdiction && jurisdiction !== 'All') where.jurisdiction = jurisdiction;
    if (litigation) where.relatedLitigation = { has: litigation };
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { shortName: { contains: search, mode: 'insensitive' } },
        { citation: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [statutes, total] = await this.prisma.$transaction([
      this.prisma.statute.findMany({ where, skip, take: limit, orderBy: { name: 'asc' } }),
      this.prisma.statute.count({ where }),
    ]);

    return { statutes, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async getCategories() {
    const grouped = await this.prisma.statute.groupBy({
      by: ['category'],
      _count: { _all: true },
      orderBy: { category: 'asc' },
    });
    const total = grouped.reduce((sum, g) => sum + g._count._all, 0);
    return { total, categories: grouped.map((g) => ({ name: g.category, count: g._count._all })) };
  }

  async findBySlug(slug: string) {
    const statute = await this.prisma.statute.findUnique({ where: { slug } });
    if (!statute) throw new NotFoundException('Statute not found');
    return statute;
  }
}
