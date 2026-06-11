import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: { litigationTypeId?: string; caseId?: string; page?: number; limit?: number }) {
    const { litigationTypeId, caseId, page = 1, limit = 20 } = params;
    const skip = (page - 1) * limit;

    const where: any = { isPublished: true };
    if (litigationTypeId) where.litigationTypeId = litigationTypeId;
    if (caseId) where.caseId = caseId;

    const [quizzes, total] = await this.prisma.$transaction([
      this.prisma.quiz.findMany({
        where,
        skip,
        take: limit,
        include: {
          litigationType: { select: { name: true, slug: true } },
          case: { select: { name: true } },
          _count: { select: { questions: true, attempts: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.quiz.count({ where }),
    ]);

    return { quizzes, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: { orderBy: { orderIndex: 'asc' } },
        litigationType: { select: { name: true, slug: true } },
        case: { select: { name: true, id: true } },
        _count: { select: { attempts: true } },
      },
    });
    if (!quiz) throw new NotFoundException('Quiz not found');
    return quiz;
  }

  async create(data: any, userId: string) {
    const { questions, ...quizData } = data;
    return this.prisma.quiz.create({
      data: {
        ...quizData,
        createdBy: userId,
        questions: questions ? { create: questions } : undefined,
      },
      include: { questions: true },
    });
  }

  async update(id: string, data: any) {
    const { questions, ...quizData } = data;
    return this.prisma.quiz.update({
      where: { id },
      data: quizData,
    });
  }

  async delete(id: string) {
    return this.prisma.quiz.delete({ where: { id } });
  }

  async submitAttempt(quizId: string, userId: string, answers: { questionId: string; selectedAnswer: string }[], timeTaken?: number) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: { questions: true },
    });
    if (!quiz) throw new NotFoundException('Quiz not found');

    const processedAnswers = answers.map((answer) => {
      const question = quiz.questions.find((q) => q.id === answer.questionId);
      if (!question) return { ...answer, isCorrect: false, points: 0 };

      const isCorrect = question.correctAnswer === answer.selectedAnswer;
      return {
        ...answer,
        isCorrect,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        points: isCorrect ? question.points : 0,
      };
    });

    const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
    const earnedPoints = processedAnswers.reduce((sum, a) => sum + (a as any).points, 0);
    const score = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    const passed = score >= quiz.passingScore;

    const attempt = await this.prisma.quizAttempt.create({
      data: {
        quizId,
        userId,
        score,
        passed,
        answers: processedAnswers as any,
        timeTaken,
      },
    });

    // Update user progress
    if (quiz.litigationTypeId) {
      const existingProgress = await this.prisma.userProgress.findUnique({
        where: { userId_litigationTypeId: { userId, litigationTypeId: quiz.litigationTypeId } },
      });

      if (existingProgress) {
        const newAvg = ((existingProgress.avgScore * existingProgress.quizzesCompleted) + score) / (existingProgress.quizzesCompleted + 1);
        await this.prisma.userProgress.update({
          where: { id: existingProgress.id },
          data: {
            quizzesCompleted: { increment: 1 },
            avgScore: newAvg,
            lastActivity: new Date(),
          },
        });
      } else {
        await this.prisma.userProgress.create({
          data: {
            userId,
            litigationTypeId: quiz.litigationTypeId,
            quizzesCompleted: 1,
            avgScore: score,
          },
        });
      }
    }

    return { attempt, score, passed, processedAnswers };
  }

  async getUserAttempts(userId: string, quizId?: string) {
    return this.prisma.quizAttempt.findMany({
      where: { userId, ...(quizId && { quizId }) },
      include: { quiz: { select: { title: true, type: true } } },
      orderBy: { completedAt: 'desc' },
    });
  }
}
