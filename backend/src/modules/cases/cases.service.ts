import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CasesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: {
    litigationTypeId?: string;
    search?: string;
    jurisdiction?: string;
    year?: number;
    page?: number;
    limit?: number;
    sortBy?: string;
  }) {
    const { litigationTypeId, search, jurisdiction, year, sortBy = 'createdAt' } = params;
    // Query params arrive as strings; coerce to numbers for Prisma take/skip.
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 20;
    const skip = (page - 1) * limit;

    const where: any = { isPublished: true };
    if (litigationTypeId) where.litigationTypeId = litigationTypeId;
    if (jurisdiction) where.jurisdiction = { contains: jurisdiction, mode: 'insensitive' };
    if (year) where.year = Number(year);
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { facts: { contains: search, mode: 'insensitive' } },
        { finalDecision: { contains: search, mode: 'insensitive' } },
      ];
    }

    const orderBy: any = {};
    if (sortBy === 'viewCount') orderBy.viewCount = 'desc';
    else if (sortBy === 'year') orderBy.year = 'desc';
    else orderBy.createdAt = 'desc';

    const [cases, total] = await this.prisma.$transaction([
      this.prisma.case.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          litigationType: { select: { name: true, slug: true, color: true, icon: true } },
          parties: { select: { name: true, role: true } },
          _count: { select: { documents: true, bookmarks: true } },
        },
      }),
      this.prisma.case.count({ where }),
    ]);

    return { cases, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string, userId?: string) {
    const caseItem = await this.prisma.case.findUnique({
      where: { id },
      include: {
        litigationType: true,
        parties: true,
        documents: true,
        _count: { select: { bookmarks: true } },
        ...(userId && {
          bookmarks: { where: { userId }, select: { id: true } },
          notes: { where: { userId }, select: { id: true, content: true, updatedAt: true } },
        }),
      },
    });

    if (!caseItem) throw new NotFoundException('Case not found');

    // Increment view count
    await this.prisma.case.update({
      where: { id },
      data: { viewCount: { increment: 1 } },
    });

    return caseItem;
  }

  async create(data: any) {
    return this.prisma.case.create({
      data: {
        ...data,
        parties: data.parties ? { create: data.parties } : undefined,
      },
      include: { litigationType: true, parties: true },
    });
  }

  async update(id: string, data: any) {
    const { parties, ...caseData } = data;
    return this.prisma.case.update({
      where: { id },
      data: caseData,
      include: { litigationType: true, parties: true },
    });
  }

  async delete(id: string) {
    return this.prisma.case.delete({ where: { id } });
  }

  async toggleBookmark(userId: string, caseId: string): Promise<{ bookmarked: boolean }> {
    const existing = await this.prisma.bookmark.findUnique({
      where: { userId_caseId: { userId, caseId } },
    });

    if (existing) {
      await this.prisma.bookmark.delete({ where: { id: existing.id } });
      return { bookmarked: false };
    } else {
      await this.prisma.bookmark.create({ data: { userId, caseId } });
      return { bookmarked: true };
    }
  }

  async getUserBookmarks(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [bookmarks, total] = await this.prisma.$transaction([
      this.prisma.bookmark.findMany({
        where: { userId },
        skip,
        take: limit,
        include: {
          case: {
            include: {
              litigationType: { select: { name: true, slug: true, color: true } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.bookmark.count({ where: { userId } }),
    ]);

    return { bookmarks, total, page, limit };
  }

  async saveNote(userId: string, caseId: string, content: string) {
    const existing = await this.prisma.note.findFirst({ where: { userId, caseId } });
    if (existing) {
      return this.prisma.note.update({ where: { id: existing.id }, data: { content } });
    }
    return this.prisma.note.create({ data: { userId, caseId, content } });
  }

  async getFeaturedCases(limit = 6) {
    return this.prisma.case.findMany({
      where: { isFeatured: true, isPublished: true },
      take: limit,
      include: {
        litigationType: { select: { name: true, slug: true, color: true, icon: true } },
      },
      orderBy: { viewCount: 'desc' },
    });
  }
}
