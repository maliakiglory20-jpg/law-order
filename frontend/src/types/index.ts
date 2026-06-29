export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'REVIEWER' | 'STUDENT';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  isActive: boolean;
  mfaEnabled: boolean;
  avatarUrl?: string;
  organization?: string;
  jobTitle?: string;
  lastLogin?: string;
  createdAt?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface LitigationType {
  id: string;
  name: string;
  slug: string;
  description: string;
  purpose: string;
  typicalIssues: string[];
  commonEvidence: string[];
  courtProcess: string;
  keyPrinciples: string[];
  practicalExamples: string[];
  icon: string;
  color: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  estimatedStudyHours: number;
  createdAt: string;
  updatedAt: string;
  _count?: {
    cases: number;
    quizzes: number;
  };
  cases?: Case[];
}

export interface Party {
  id: string;
  name: string;
  role: 'PLAINTIFF' | 'DEFENDANT' | 'THIRD_PARTY' | 'INTERVENOR' | 'AMICUS_CURIAE';
  counsel?: string;
  description?: string;
}

export interface Document {
  id: string;
  caseId: string;
  name: string;
  type: DocumentType;
  description?: string;
  fileUrl?: string;
  fileSize?: number;
  mimeType?: string;
  isPublic: boolean;
  createdAt: string;
}

export type DocumentType =
  | 'COMPLAINT'
  | 'ANSWER'
  | 'MOTION'
  | 'BRIEF'
  | 'DEPOSITION'
  | 'EXHIBIT'
  | 'EXPERT_REPORT'
  | 'COURT_ORDER'
  | 'PROTOCOL'
  | 'NEWS_ARTICLE'
  | 'NEWSLETTER'
  | 'EMAIL'
  | 'CONTRACT'
  | 'FINANCIAL_RECORD';

export interface Case {
  id: string;
  litigationTypeId: string;
  litigationType?: LitigationType;
  name: string;
  citation?: string;
  jurisdiction: string;
  court: string;
  filingDate?: string;
  decisionDate?: string;
  year?: number;
  facts: string;
  keyLegalIssues: string[];
  plaintiffArguments: string;
  defendantArguments: string;
  proceduralHistory: string;
  finalDecision: string;
  judicialReasoning: string;
  legalStandards: string[];
  keyPrecedents: string[];
  evidenceAnalysis: string;
  alternativeOutcomes: string;
  lessonsLearned: string[];
  bestPractices: string[];
  significance: string;
  outcome: string;
  isFeatured: boolean;
  isPublished: boolean;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  parties?: Party[];
  documents?: Document[];
  bookmarks?: Array<{ id: string }>;
  notes?: Array<{ id: string; content: string; updatedAt: string }>;
  _count?: {
    documents: number;
    bookmarks: number;
  };
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  quizId: string;
  text: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  points: number;
  orderIndex: number;
}

export type QuizType = 'MULTIPLE_CHOICE' | 'TRUE_FALSE' | 'SCENARIO' | 'EVIDENCE_IDENTIFICATION' | 'RULING_ANALYSIS';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  litigationTypeId?: string;
  litigationType?: { name: string; slug: string };
  caseId?: string;
  case?: { name: string; id: string };
  type: QuizType;
  isAiGenerated: boolean;
  timeLimit?: number;
  passingScore: number;
  isPublished: boolean;
  createdAt: string;
  questions?: Question[];
  _count?: {
    questions: number;
    attempts: number;
  };
}

export interface QuizAttemptAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  quiz?: { title: string; type: QuizType };
  userId: string;
  score: number;
  passed: boolean;
  answers: QuizAttemptAnswer[];
  completedAt: string;
  timeTaken?: number;
}

export interface UserProgress {
  id: string;
  userId: string;
  litigationTypeId: string;
  litigationType?: LitigationType;
  casesViewed: number;
  quizzesCompleted: number;
  avgScore: number;
  studyTimeMinutes: number;
  lastActivity: string;
}

export interface DashboardStats {
  casesStudied: number;
  quizzesCompleted: number;
  avgScore: number;
  passedQuizzes: number;
  bookmarks: number;
  studyStreak: number;
}

export interface PaginatedResponse<T> {
  data?: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface SearchResults {
  query: string;
  results: {
    cases: Array<Case & { resultType: 'case' }>;
    litigationTypes: Array<LitigationType & { resultType: 'litigation_type' }>;
    quizzes: Array<Quiz & { resultType: 'quiz' }>;
  };
  total: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  definition: string;
  category: string;
  example?: string | null;
  relatedTerms: string[];
  createdAt: string;
  updatedAt: string;
}
