'use client';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

/**
 * Renders a litigation-type icon. The backend stores icons as lucide-react
 * icon names (e.g. "Scale", "Landmark"). If the name resolves to a lucide
 * icon we render it; otherwise we fall back to rendering the raw string
 * (so legacy emoji values still display).
 */
export function TypeIcon({ name, className }: { name?: string; className?: string }) {
  const Cmp = name
    ? ((Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name])
    : undefined;

  if (Cmp) return <Cmp className={className} />;
  if (name) return <span className={className}>{name}</span>;

  const Fallback = Icons.Scale;
  return <Fallback className={className} />;
}
