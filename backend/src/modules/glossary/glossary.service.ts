import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class GlossaryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: { search?: string; category?: string; letter?: string; page?: number; limit?: number }) {
    const { search, category, letter } = params;
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 50;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (category && category !== 'All') where.category = category;
    if (letter) where.term = { startsWith: letter, mode: 'insensitive' };
    if (search) {
      where.OR = [
        { term: { contains: search, mode: 'insensitive' } },
        { definition: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [terms, total] = await this.prisma.$transaction([
      this.prisma.glossaryTerm.findMany({
        where,
        skip,
        take: limit,
        orderBy: { term: 'asc' },
      }),
      this.prisma.glossaryTerm.count({ where }),
    ]);

    return { terms, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async getCategories() {
    const grouped = await this.prisma.glossaryTerm.groupBy({
      by: ['category'],
      _count: { _all: true },
      orderBy: { category: 'asc' },
    });
    const total = grouped.reduce((sum, g) => sum + g._count._all, 0);
    return {
      total,
      categories: grouped.map((g) => ({ name: g.category, count: g._count._all })),
    };
  }

  async findBySlug(slug: string) {
    const term = await this.prisma.glossaryTerm.findUnique({ where: { slug } });
    if (!term) throw new NotFoundException('Glossary term not found');
    return term;
  }
}
