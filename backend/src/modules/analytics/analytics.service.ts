import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserDashboard(userId: string) {
    const [progress, recentAttempts, bookmarksCount, casesViewed] = await this.prisma.$transaction([
      this.prisma.userProgress.findMany({
        where: { userId },
        include: { litigationType: { select: { name: true, slug: true, color: true, icon: true } } },
        orderBy: { lastActivity: 'desc' },
      }),
      this.prisma.quizAttempt.findMany({
        where: { userId },
        take: 5,
        orderBy: { completedAt: 'desc' },
        include: { quiz: { select: { title: true, type: true } } },
      }),
      this.prisma.bookmark.count({ where: { userId } }),
      this.prisma.userProgress.aggregate({
        where: { userId },
        _sum: { casesViewed: true },
      }),
    ]);

    const allAttempts = await this.prisma.quizAttempt.findMany({ where: { userId } });
    const avgScore = allAttempts.length > 0
      ? Math.round(allAttempts.reduce((sum, a) => sum + a.score, 0) / allAttempts.length)
      : 0;

    const passedCount = allAttempts.filter((a) => a.passed).length;

    // Calculate study streak
    const streak = await this.calculateStreak(userId);

    return {
      stats: {
        casesStudied: casesViewed._sum.casesViewed || 0,
        quizzesCompleted: allAttempts.length,
        avgScore,
        passedQuizzes: passedCount,
        bookmarks: bookmarksCount,
        studyStreak: streak,
      },
      progress,
      recentActivity: recentAttempts,
    };
  }

  async getAdminDashboard() {
    const [userCount, caseCount, quizCount, attemptCount, activeUsers] = await this.prisma.$transaction([
      this.prisma.user.count(),
      this.prisma.case.count(),
      this.prisma.quiz.count(),
      this.prisma.quizAttempt.count(),
      this.prisma.user.count({
        where: {
          lastLogin: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
        },
      }),
    ]);

    const recentUsers = await this.prisma.user.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, role: true, createdAt: true, lastLogin: true },
    });

    const topCases = await this.prisma.case.findMany({
      take: 5,
      orderBy: { viewCount: 'desc' },
      select: { id: true, name: true, viewCount: true, litigationType: { select: { name: true } } },
    });

    const scoreDistribution = await this.prisma.quizAttempt.groupBy({
      by: ['passed'],
      _count: true,
    });

    return {
      overview: { userCount, caseCount, quizCount, attemptCount, activeUsers },
      recentUsers,
      topCases,
      scoreDistribution,
    };
  }

  async getUserProgressReport(userId: string) {
    const progress = await this.prisma.userProgress.findMany({
      where: { userId },
      include: { litigationType: true },
    });

    const attempts = await this.prisma.quizAttempt.findMany({
      where: { userId },
      include: { quiz: { include: { litigationType: { select: { name: true } } } } },
      orderBy: { completedAt: 'asc' },
    });

    // Group attempts by week for trend
    const weeklyData = this.groupByWeek(attempts);

    return { progress, attempts, weeklyData };
  }

  async getLeaderboard(limit = 20) {
    const topUsers = await this.prisma.quizAttempt.groupBy({
      by: ['userId'],
      _avg: { score: true },
      _count: { id: true },
      orderBy: { _avg: { score: 'desc' } },
      take: limit,
    });

    const userIds = topUsers.map((u) => u.userId);
    const users = await this.prisma.user.findMany({
      where: { id: { in: userIds } },
      select: { id: true, name: true, avatarUrl: true, organization: true },
    });

    return topUsers.map((entry, index) => {
      const user = users.find((u) => u.id === entry.userId);
      return {
        rank: index + 1,
        user,
        avgScore: Math.round(entry._avg.score || 0),
        quizzesCompleted: entry._count.id,
      };
    });
  }

  private async calculateStreak(userId: string): Promise<number> {
    const attempts = await this.prisma.quizAttempt.findMany({
      where: { userId },
      select: { completedAt: true },
      orderBy: { completedAt: 'desc' },
    });

    if (attempts.length === 0) return 0;

    let streak = 1;
    let currentDate = new Date(attempts[0].completedAt);
    currentDate.setHours(0, 0, 0, 0);

    for (let i = 1; i < attempts.length; i++) {
      const attemptDate = new Date(attempts[i].completedAt);
      attemptDate.setHours(0, 0, 0, 0);
      const dayDiff = (currentDate.getTime() - attemptDate.getTime()) / (1000 * 60 * 60 * 24);

      if (dayDiff === 1) {
        streak++;
        currentDate = attemptDate;
      } else if (dayDiff > 1) {
        break;
      }
    }

    return streak;
  }

  private groupByWeek(attempts: any[]) {
    const weeks: Record<string, { count: number; avgScore: number; scores: number[] }> = {};

    attempts.forEach((attempt) => {
      const date = new Date(attempt.completedAt);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay());
      const weekKey = weekStart.toISOString().split('T')[0];

      if (!weeks[weekKey]) {
        weeks[weekKey] = { count: 0, avgScore: 0, scores: [] };
      }
      weeks[weekKey].count++;
      weeks[weekKey].scores.push(attempt.score);
    });

    return Object.entries(weeks).map(([week, data]) => ({
      week,
      count: data.count,
      avgScore: Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length),
    }));
  }
}
