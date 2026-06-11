'use client';
import { useState, useEffect, useCallback } from 'react';
import { casesApi } from '@/lib/api';
import { Case } from '@/types';

interface UseCasesParams {
  litigationTypeId?: string;
  search?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
}

export function useCases(params?: UseCasesParams) {
  const [cases, setCases] = useState<Case[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  const fetchCases = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await casesApi.getAll(params);
      const data = response.data;
      setCases(data.data ?? data.cases ?? []);
      setTotal(data.total ?? 0);
      setPages(data.pages ?? 0);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch cases');
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  // Load bookmarks from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('bookmarks');
      if (stored) setBookmarks(new Set(JSON.parse(stored)));
    } catch { /* ignore */ }
  }, []);

  const toggleBookmark = useCallback((caseId: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(caseId)) next.delete(caseId);
      else next.add(caseId);
      try { localStorage.setItem('bookmarks', JSON.stringify(Array.from(next))); } catch { /* ignore */ }
      return next;
    });
    // Optionally call API
    try {
      casesApi.toggleBookmark(caseId);
    } catch { /* ignore */ }
  }, []);

  const getCaseById = useCallback((id: string): Case | undefined => {
    return cases.find((c) => c.id === id);
  }, [cases]);

  return { cases, total, pages, isLoading, loading: isLoading, error, refetch: fetchCases, bookmarks, toggleBookmark, getCaseById };
}

export function useCase(id: string) {
  const [caseItem, setCaseItem] = useState<Case | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    casesApi
      .getOne(id)
      .then((res) => setCaseItem(res.data))
      .catch((err) => setError(err.response?.data?.message || 'Failed to fetch case'))
      .finally(() => setLoading(false));
  }, [id]);

  return { caseItem, loading, error };
}
