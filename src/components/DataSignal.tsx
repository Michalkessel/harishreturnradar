import React from 'react';
import { Tooltip } from './Tooltip';
import { Info } from 'lucide-react';

interface DataSignalProps {
  title: string;
  value: string | number;
  status: 'LIVE' | 'STALE' | 'CLOSED';
  tooltip: string;
}

export const DataSignal: React.FC<DataSignalProps> = ({ title, value, status, tooltip }) => {
  const statusColors = {
    LIVE: 'bg-emerald-500/20 text-emerald-400',
    STALE: 'bg-yellow-500/20 text-yellow-400',
    CLOSED: 'bg-zinc-500/20 text-zinc-400',
  };

  return (
    <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800">
      <div className="flex items-center gap-3">
        <Tooltip text={tooltip}>
          <Info size={16} className="text-zinc-500 cursor-help" />
        </Tooltip>
        <div>
          <h4 className="text-sm font-medium text-zinc-200">{title}</h4>
          <span className={`text-[10px] px-1.5 py-0.5 rounded ${statusColors[status]}`}>{status}</span>
        </div>
      </div>
      <div className="text-lg font-mono font-bold text-zinc-100">{value}</div>
    </div>
  );
};
