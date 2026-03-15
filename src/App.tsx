/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gauge } from './components/Gauge';
import { TrendChart } from './components/TrendChart';
import { DataSignal } from './components/DataSignal';
import { Zap, Users, HelpCircle } from 'lucide-react';

export default function App() {
  const metrics = [
    { title: 'Strikes in Iran', value: 2, status: 'LIVE', tooltip: 'Number of strikes in the past 24 hours' },
    { title: 'Alarms in TLV', value: 5, status: 'LIVE', tooltip: 'Number of alarms in Tel Aviv in the past 24 hours' },
    { title: 'Pentagon Vegan Pizza Meter', value: 8, status: 'LIVE', tooltip: 'Number of vegan pizza slices consumed' },
    { title: 'Cuteness Meter', value: 12, status: 'LIVE', tooltip: 'Number of videos of Oz shared in family group' },
    { title: 'Annoyance Meter', value: 3, status: 'STALE', tooltip: 'Number of annoying people in their bomb shelter' },
  ];

  const probability = 75;

  return (
    <div className="min-h-screen bg-black text-zinc-100 p-4">
      <main className="max-w-xl mx-auto grid grid-cols-1 gap-4">
        {/* Header */}
        <header className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Zap className="text-emerald-500" size={24} />
            <h1 className="text-xl font-bold">HarishReturnRadar</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Live</span>
            <button className="bg-zinc-800 px-3 py-1 rounded text-xs font-medium">Contact</button>
            <button className="bg-zinc-800 p-1.5 rounded"><HelpCircle size={16} /></button>
          </div>
        </header>

        {/* Update Info */}
        <div className="flex justify-between bg-zinc-900 p-3 rounded-lg text-xs text-zinc-400">
          <span>Updated <strong>Just now</strong> Harish</span>
          <span>Next update in 13:12</span>
        </div>

        {/* Help Banner */}
        <div className="bg-amber-950/30 border border-amber-900/50 text-amber-500 p-3 rounded-lg text-center text-sm font-medium">
          Help us improve HarishReturnRadar — even $1 helps →
        </div>

        {/* Main Probability Section */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-center mb-4">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Ayelet & Yahel Return Probability</h2>
            <p className="text-xs text-zinc-500">Tactical Alert Level</p>
          </div>
          <Gauge probability={probability} />
        </div>

        {/* Watching Stats */}
        <div className="flex justify-center gap-6 bg-zinc-900 p-3 rounded-lg text-sm text-zinc-400">
          <span>👁️ 32 watching</span>
          <span className="text-emerald-500">🇿🇦 -16%</span>
          <span className="text-red-500">🇮🇱 +2455%</span>
        </div>

        <TrendChart />
        
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-lg font-bold mb-4">Data Signals</h3>
          <div className="grid grid-cols-1 gap-3">
            {metrics.map((m) => (
              <DataSignal key={m.title} {...(m as any)} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
