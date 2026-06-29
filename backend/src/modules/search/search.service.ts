import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async search(query: string, filters?: { type?: string; jurisdiction?: string; year?: number }, page: number = 1, limit: number = 20) {
    // Query params arrive as strings; coerce for Prisma take/skip and Int filters.
    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 20;
    const yearNum = filters?.year ? Number(filters.year) : undefined;
    const skip = (pageNum - 1) * limitNum;
    const searchLower = query.toLowerCase();

    const [cases, litigationTypes, quizzes] = await this.prisma.$transaction([
      // Search cases
      this.prisma.case.findMany({
        where: {
          isPublished: true,
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { facts: { contains: query, mode: 'insensitive' } },
            { judicialReasoning: { contains: query, mode: 'insensitive' } },
            { finalDecision: { contains: query, mode: 'insensitive' } },
            { jurisdiction: { contains: query, mode: 'insensitive' } },
          ],
          ...(filters?.jurisdiction && { jurisdiction: { contains: filters.jurisdiction, mode: 'insensitive' } }),
          ...(yearNum && { year: yearNum }),
        },
        take: Math.min(limitNum, 10),
        skip,
        include: {
          litigationType: { select: { name: true, slug: true, color: true } },
        },
      }),
      // Search litigation types
      this.prisma.litigationType.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { purpose: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: 5,
      }),
      // Search quizzes
      this.prisma.quiz.findMany({
        where: {
          isPublished: true,
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: 5,
        include: { litigationType: { select: { name: true } } },
      }),
    ]);

    return {
      query,
      results: {
        cases: cases.map((c) => ({ ...c, resultType: 'case' })),
        litigationTypes: litigationTypes.map((l) => ({ ...l, resultType: 'litigation_type' })),
        quizzes: quizzes.map((q) => ({ ...q, resultType: 'quiz' })),
      },
      total: cases.length + litigationTypes.length + quizzes.length,
    };
  }

  async suggest(query: string): Promise<{ suggestions: string[] }> {
    const cases = await this.prisma.case.findMany({
      where: { name: { contains: query, mode: 'insensitive' } },
      select: { name: true },
      take: 5,
    });

    const types = await this.prisma.litigationType.findMany({
      where: { name: { contains: query, mode: 'insensitive' } },
      select: { name: true },
      take: 3,
    });

    const suggestions = [
      ...cases.map((c) => c.name),
      ...types.map((t) => t.name),
    ];

    return { suggestions };
  }
}
