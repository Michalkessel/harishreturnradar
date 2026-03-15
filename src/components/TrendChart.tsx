import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { time: '12:00', risk: 30 },
  { time: '15:00', risk: 45 },
  { time: '18:00', risk: 40 },
  { time: '21:00', risk: 60 },
  { time: '00:00', risk: 55 },
  { time: '03:00', risk: 70 },
  { time: '06:00', risk: 80 },
  { time: '09:00', risk: 75 },
];

export const TrendChart: React.FC = () => {
  return (
    <div className="h-64 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
      <h3 className="text-sm font-medium text-zinc-400 mb-4">24 Hour Risk Trend</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
          <XAxis dataKey="time" stroke="#71717a" fontSize={12} />
          <YAxis stroke="#71717a" fontSize={12} />
          <Line type="monotone" dataKey="risk" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
