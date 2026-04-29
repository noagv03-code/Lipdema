
import React from 'react';
import { motion } from 'motion/react';
import { 
  Waves, 
  Zap, 
  Footprints, 
  ArrowRight, 
  Dumbbell, 
  Bike, 
  AlertTriangle, 
  CheckCircle2, 
  Target, 
  ShieldCheck,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';
import { MOVEMENT_PRINCIPLES } from '../constants';

export default function Movement() {
  return (
    <div className="py-20 bg-velora-bg min-h-screen text-velora-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO HEADER */}
        <header className="max-w-4xl mb-24 px-4">
          <span className="text-velora-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Active Support Protocol</span>
          <h1 className="text-6xl font-serif italic mb-8 leading-tight">{MOVEMENT_PRINCIPLES.title}</h1>
          <p className="text-xl text-velora-muted leading-relaxed italic mb-12 max-w-2xl">
            {MOVEMENT_PRINCIPLES.intro}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {MOVEMENT_PRINCIPLES.philosophy.map((item, i) => (
              <div key={i} className="flex items-center space-x-3 text-[11px] uppercase tracking-widest font-bold text-velora-accent/60">
                <ShieldCheck size={14} className="text-velora-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </header>

        {/* DAILY RULES */}
        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {MOVEMENT_PRINCIPLES.dailyRules.map((rule, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
              <div className="text-velora-accent font-mono text-2xl mb-4 opacity-20">0{i + 1}</div>
              <h3 className="text-lg font-serif italic mb-2">{rule.title}</h3>
              <p className="text-xs text-velora-muted leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>

        {/* BEST SPORTS CATEGORIES */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif italic mb-6">The Optimal Modalities</h2>
              <p className="text-velora-muted italic">Specific activities selected for their unique impact on lymphatic architecture and circulatory efficiency.</p>
            </div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-velora-accent bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <CheckCircle2 size={12} />
              <span>Low-Impact Approved</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {MOVEMENT_PRINCIPLES.categories.map((cat, i) => (
              <div key={i} className="group cursor-default">
                <div className="bg-white/5 border border-white/5 rounded-3xl p-8 h-full hover:bg-white/10 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-velora-accent/10 rounded-2xl flex items-center justify-center text-velora-accent mb-8 group-hover:scale-110 transition-transform">
                    {cat.name.includes('Walking') && <Footprints size={24} />}
                    {cat.name.includes('Water') && <Waves size={24} />}
                    {cat.name.includes('Strength') && <Dumbbell size={24} />}
                    {cat.name.includes('Rebounding') && <Zap size={24} />}
                    {cat.name.includes('Cycling') && <Bike size={24} />}
                  </div>
                  <h3 className="text-xl font-serif italic mb-4">{cat.name}</h3>
                  <p className="text-xs text-velora-accent font-bold uppercase tracking-widest mb-4 opacity-60">Impact</p>
                  <p className="text-xs text-velora-muted italic leading-relaxed mb-6">{cat.why}</p>
                  
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-white/30 font-bold mb-2">Protocol</p>
                    <p className="text-[11px] leading-relaxed text-white/50">{cat.implementation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIMITS & HABITS COMBINED */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* TO AVOID */}
          <div className="bg-red-500/5 border border-red-500/10 rounded-[40px] p-12">
            <div className="flex items-center space-x-3 mb-10">
              <AlertTriangle className="text-red-400" size={32} />
              <h2 className="text-3xl font-serif italic">What to Limit</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {MOVEMENT_PRINCIPLES.toAvoid.map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-xs text-velora-text/60 italic">
                  — {item}
                </div>
              ))}
            </div>
            <p className="mt-10 text-[10px] uppercase tracking-widest text-red-400/40 font-bold">Note: Listen to your body. If a workout leaves you feeling heavier, modify it.</p>
          </div>

          {/* MICRO HABITS */}
          <div className="bg-velora-accent rounded-[40px] p-12 text-velora-bg relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} />
            </div>
            <h2 className="text-3xl font-serif italic mb-10 relative z-10">Daily Micro-Habits</h2>
            <div className="space-y-6 relative z-10">
              {MOVEMENT_PRINCIPLES.microHabits.map((habit, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-velora-bg/10 rounded-xl flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-lg font-medium leading-tight">{habit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WEEKLY ROUTINE SECTION */}
        <section className="bg-white/5 border border-white/5 rounded-[40px] p-12 md:p-20 mb-32">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-serif italic mb-6">Structured Weekly System</h2>
              <p className="text-velora-muted italic mb-10 leading-relaxed">A realistic blueprint used by our top practitioners to balance drainage with strength building.</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-velora-accent mb-4">Expectations</h4>
                  <div className="space-y-3">
                    {MOVEMENT_PRINCIPLES.expectations.map((exp, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-velora-muted">
                        <Target size={14} className="text-velora-accent/40" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/5">
                <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Phase 01: Beginner Flow</span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-velora-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  </div>
                </div>
                <div className="divide-y divide-white/5">
                  {MOVEMENT_PRINCIPLES.routines.beginner.map((row, i) => (
                    <div key={i} className="px-8 py-5 flex items-center justify-between group hover:bg-white/5 transition-colors">
                      <div className="flex items-center space-x-6">
                        <span className="font-mono text-[11px] text-velora-accent w-12">{row.day}</span>
                        <span className="text-sm font-medium">{row.activity}</span>
                      </div>
                      <Clock size={14} className="opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="text-center pb-24">
          <h2 className="text-4xl font-serif italic mb-8">Ready for a structured, follow-along plan?</h2>
          <div className="flex flex-col items-center">
            <button className="bg-white text-velora-bg px-12 py-6 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-velora-accent transition-all shadow-2xl flex items-center space-x-4 mb-6">
              <span>Follow the Complete Movement Plan</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-velora-muted text-[10px] uppercase tracking-[0.4em] opacity-40">Start your daily lifestyle system today.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
