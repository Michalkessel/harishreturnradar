import React from 'react';
import { motion } from 'motion/react';

interface GaugeProps {
  probability: number;
}

export const Gauge: React.FC<GaugeProps> = ({ probability }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
      <h2 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Return Probability</h2>
      <div className="relative w-48 h-24 overflow-hidden">
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: -90 + (probability * 1.8) }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 w-1 h-20 bg-emerald-500 origin-bottom"
        />
        <div className="absolute bottom-0 left-0 w-48 h-24 rounded-t-full border-t-8 border-l-8 border-r-8 border-zinc-700" />
      </div>
      <div className="text-5xl font-bold text-white mt-4">{probability.toFixed(0)}%</div>
      <p className="text-zinc-500 text-sm mt-1">Projected Risk: Next 24 Hours</p>
    </div>
  );
};
