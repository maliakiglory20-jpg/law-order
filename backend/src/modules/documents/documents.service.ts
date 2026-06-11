import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByCaseId(caseId: string) {
    return this.prisma.document.findMany({
      where: { caseId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const doc = await this.prisma.document.findUnique({ where: { id } });
    if (!doc) throw new NotFoundException('Document not found');
    return doc;
  }

  async create(data: { caseId: string; name: string; type: any; description?: string; fileUrl?: string; fileSize?: number; mimeType?: string; uploadedBy?: string }) {
    return this.prisma.document.create({ data });
  }

  async delete(id: string) {
    const doc = await this.findOne(id);
    return this.prisma.document.delete({ where: { id } });
  }
}
