
import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Eye, PenTool, Layout, Search, TrendingUp, ShieldAlert } from 'lucide-react';
import { BRAND, PROGRAMS } from '../constants';

export default function StrategyDashboard() {
  return (
    <div className="py-24 bg-velora-bg text-velora-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-velora-accent rounded-xl flex items-center justify-center text-velora-bg">
              <TrendingUp size={24} />
            </div>
            <h1 className="text-3xl font-display font-medium text-white tracking-widest uppercase">Brand Velocity Blueprint</h1>
          </div>
          <p className="text-velora-muted text-xl max-w-3xl">
            This workspace outlines the strategic foundation for <strong>{BRAND.name}</strong>. 
            All visual and copy decisions flow from these core pillars.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* CORE IDENTITY */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
            <h2 className="text-xl font-bold mb-8 flex items-center space-x-3 text-velora-accent">
              <Target size={20} />
              <span>Core Identity</span>
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase font-bold text-velora-muted tracking-widest mb-2">Purpose / Mission</p>
                <p className="text-lg italic text-white/90">{BRAND.mission}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-velora-muted tracking-widest mb-2">Long-term Vision</p>
                <p className="text-white/70">{BRAND.vision}</p>
              </div>
              <div className="flex space-x-8">
                <div>
                  <p className="text-[10px] uppercase font-bold text-velora-muted tracking-widest mb-2">Core Values</p>
                  <div className="flex flex-wrap gap-2">
                    {BRAND.values.map(v => (
                      <span key={v} className="bg-velora-accent/20 text-velora-accent px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border border-velora-accent/20">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TARGET AUDIENCE */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
            <h2 className="text-xl font-bold mb-8 flex items-center space-x-3 text-velora-accent">
              <Heart size={20} />
              <span>The Ideal Client</span>
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase font-bold text-velora-muted tracking-widest mb-2">Who she is</p>
                <p className="text-white/90">{BRAND.audience}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] uppercase font-bold text-red-300 tracking-widest mb-2">Pain Points</p>
                  <ul className="text-xs text-white/60 space-y-2">
                    {BRAND.emotionalDrivers.painPoints.map(p => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-velora-accent tracking-widest mb-2">Desires</p>
                  <ul className="text-xs text-white/60 space-y-2">
                    {BRAND.emotionalDrivers.desires.map(d => <li key={d}>• {d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL & COPY DIRECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
           <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xs font-bold text-velora-accent uppercase tracking-widest mb-6 flex items-center">
              <PenTool size={16} className="mr-2" /> Voice & Tone
            </h3>
            <p className="text-sm text-white/80 leading-relaxed italic">
              Empathetic but strong. Science-aware but not clinical. Clear, simple, and motivational without being exaggerated.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xs font-bold text-velora-accent uppercase tracking-widest mb-6 flex items-center">
              <Eye size={16} className="mr-2" /> Aesthetic
            </h3>
            <p className="text-sm text-white/80 leading-relaxed italic">
              Sophisticated Dark. Forest greens, warm bronze accents, authentic photography, and minimal interface borders.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xs font-bold text-velora-accent uppercase tracking-widest mb-6 flex items-center">
              <Search size={16} className="mr-2" /> SEO Strategy
            </h3>
            <p className="text-sm text-white/80 leading-relaxed italic">
              Targeting 'Stage 1-3 Lipedema management', 'Anti-inflammatory diet for Lipedema', and 'lymphatic movement routines'.
            </p>
          </div>
        </div>

        {/* PRODUCT LADDER */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12">
            <h2 className="text-xl font-bold mb-10 flex items-center space-x-3 text-velora-accent">
              <Layout size={20} />
              <span>The Product Ladder (Conversion Funnel)</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {PROGRAMS.map((p, i) => (
                <div key={p.id} className="p-6 bg-white/5 border border-white/10 rounded-2xl relative">
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-velora-accent rounded-lg flex items-center justify-center text-xs font-bold text-velora-bg">{i+1}</span>
                  <h4 className="font-bold text-sm mb-2">{p.name}</h4>
                  <p className="text-[10px] text-velora-muted mb-4">{p.target}</p>
                  <p className="text-xs text-white/40 mb-4 line-clamp-2">{p.description}</p>
                  <div className="text-velora-accent font-bold text-sm">{p.price}</div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
