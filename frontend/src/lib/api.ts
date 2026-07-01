import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const api: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor - attach auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor - handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/api/v1/auth/refresh`, {
            refreshToken,
          });

          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken);

          if (originalRequest.headers) {
            (originalRequest.headers as any).Authorization = `Bearer ${accessToken}`;
          }
          return api(originalRequest);
        }
      } catch {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
    }

    return Promise.reject(error);
  },
);

// Auth API
export const authApi = {
  register: (data: { email: string; password: string; name: string; organization?: string; jobTitle?: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string; mfaToken?: string }) =>
    api.post('/auth/login', data),
  logout: (refreshToken?: string) =>
    api.post('/auth/logout', { refreshToken }),
  refreshToken: (refreshToken: string) =>
    api.post('/auth/refresh', { refreshToken }),
  getMe: () => api.get('/auth/me'),
  setupMfa: () => api.post('/auth/mfa/setup'),
  verifyMfa: (token: string) => api.post('/auth/mfa/verify', { token }),
  disableMfa: (token: string) => api.post('/auth/mfa/disable', { token }),
};

// Users API
export const usersApi = {
  getAll: (params?: { page?: number; limit?: number; search?: string; role?: string }) =>
    api.get('/users', { params }),
  getOne: (id: string) => api.get(`/users/${id}`),
  getMyStats: () => api.get('/users/me/stats'),
  updateProfile: (data: { name?: string; organization?: string; jobTitle?: string; avatarUrl?: string }) =>
    api.put('/users/profile', data),
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put('/users/password', data),
  updateRole: (id: string, role: string) => api.patch(`/users/${id}/role`, { role }),
  toggleActive: (id: string) => api.patch(`/users/${id}/toggle-active`),
};

// Litigation API
export const litigationApi = {
  getAll: (params?: { category?: string; search?: string; page?: number; limit?: number }) =>
    api.get('/litigation', { params }),
  getCategories: () => api.get('/litigation/categories'),
  getBySlug: (slug: string) => api.get(`/litigation/${slug}`),
  create: (data: any) => api.post('/litigation', data),
  update: (id: string, data: any) => api.put(`/litigation/${id}`, data),
  delete: (id: string) => api.delete(`/litigation/${id}`),
};

// Cases API
export const casesApi = {
  getAll: (params?: any) => api.get('/cases', { params }),
  getFeatured: (limit?: number) => api.get('/cases/featured', { params: { limit } }),
  getOne: (id: string) => api.get(`/cases/${id}`),
  create: (data: any) => api.post('/cases', data),
  update: (id: string, data: any) => api.put(`/cases/${id}`, data),
  delete: (id: string) => api.delete(`/cases/${id}`),
  toggleBookmark: (id: string) => api.post(`/cases/${id}/bookmark`),
  getBookmarks: (params?: { page?: number; limit?: number }) =>
    api.get('/cases/bookmarks', { params }),
  saveNote: (id: string, content: string) => api.post(`/cases/${id}/notes`, { content }),
};

// Quiz API
export const quizApi = {
  getAll: (params?: any) => api.get('/quizzes', { params }),
  getOne: (id: string) => api.get(`/quizzes/${id}`),
  create: (data: any) => api.post('/quizzes', data),
  update: (id: string, data: any) => api.put(`/quizzes/${id}`, data),
  delete: (id: string) => api.delete(`/quizzes/${id}`),
  submit: (id: string, answers: any[], timeTaken?: number) =>
    api.post(`/quizzes/${id}/submit`, { answers, timeTaken }),
  getMyAttempts: (quizId?: string) =>
    api.get('/quizzes/attempts/me', { params: { quizId } }),
};

// Analytics API
export const analyticsApi = {
  getDashboard: () => api.get('/analytics/dashboard'),
  getAdminDashboard: () => api.get('/analytics/admin'),
  getProgressReport: () => api.get('/analytics/progress'),
  getLeaderboard: (limit?: number) => api.get('/analytics/leaderboard', { params: { limit } }),
};

// Search API
export const searchApi = {
  search: (q: string, filters?: any) => api.get('/search', { params: { q, ...filters } }),
  suggest: (q: string) => api.get('/search/suggest', { params: { q } }),
};

// AI API
export const aiApi = {
  summarizeCase: (caseId: string) => api.post(`/ai/cases/${caseId}/summarize`),
  explainRuling: (caseId: string, question?: string) =>
    api.post(`/ai/cases/${caseId}/explain-ruling`, { question }),
  analyzeEvidence: (caseId: string) => api.post(`/ai/cases/${caseId}/analyze-evidence`),
  chat: (caseId: string, message: string, history?: any[]) =>
    api.post(`/ai/cases/${caseId}/chat`, { message, history }),
  generateQuiz: (params: { litigationTypeId?: string; caseId?: string; count?: number; difficulty?: string }) =>
    api.post('/ai/generate-quiz', params),
};

// Statutes (Statute Library) API
export const statutesApi = {
  getAll: (params?: { search?: string; category?: string; jurisdiction?: string; litigation?: string; page?: number; limit?: number }) =>
    api.get('/statutes', { params }),
  getCategories: () => api.get('/statutes/categories'),
  getBySlug: (slug: string) => api.get(`/statutes/${slug}`),
};

// Glossary (Legal Dictionary) API
export const glossaryApi = {
  getAll: (params?: { search?: string; category?: string; letter?: string; difficulty?: string; essential?: boolean; page?: number; limit?: number }) =>
    api.get('/glossary', { params }),
  getCategories: () => api.get('/glossary/categories'),
  getBySlug: (slug: string) => api.get(`/glossary/${slug}`),
};

export default api;
