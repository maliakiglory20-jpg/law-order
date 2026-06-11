'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface LineDataPoint { label: string; value: number; }
interface BarDataPoint { label: string; value: number; color?: string; }

export function QuizScoreLineChart({ data }: { data?: LineDataPoint[] }) {
  const chartData = data || [
    { label: 'Week 1', value: 65 }, { label: 'Week 2', value: 72 },
    { label: 'Week 3', value: 68 }, { label: 'Week 4', value: 80 },
    { label: 'Week 5', value: 85 }, { label: 'Week 6', value: 88 },
    { label: 'Week 7', value: 91 }, { label: 'Week 8', value: 89 },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="#94a3b8" />
        <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#94a3b8" />
        <Tooltip formatter={(v) => [`${v}%`, 'Score']} />
        <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b', r: 4 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CasesByTypeChart({ data }: { data?: BarDataPoint[] }) {
  const chartData = data || [
    { label: 'Civil', value: 12 }, { label: 'Criminal', value: 8 },
    { label: 'IP', value: 6 }, { label: 'Employment', value: 5 },
    { label: 'Commercial', value: 9 }, { label: 'Constitutional', value: 4 },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={chartData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94a3b8" />
        <YAxis type="category" dataKey="label" width={100} tick={{ fontSize: 12 }} stroke="#94a3b8" />
        <Tooltip formatter={(v) => [v, 'Cases']} />
        <Bar dataKey="value" fill="#0f172a" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
