
import React from 'react';
import { Waves, Heart, Zap, Footprints, ArrowRight, Info } from 'lucide-react';
import { MOVEMENT_PRINCIPLES } from '../constants';

export default function Movement() {
  return (
    <div className="py-20 bg-velora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16 px-4 border-l-4 border-velora-accent">
          <span className="text-velora-accent font-bold uppercase tracking-widest text-[10px]">Movement Strategy</span>
          <h1 className="text-5xl font-serif italic mt-4 mb-6">{MOVEMENT_PRINCIPLES.title}</h1>
          <p className="text-xl text-velora-muted leading-relaxed italic">
            {MOVEMENT_PRINCIPLES.intro}
          </p>
        </header>

        {/* CORE ACTIVITIES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {MOVEMENT_PRINCIPLES.activities.map((activity, i) => (
            <div key={i} className="bg-white/5 rounded-3xl p-8 group hover:bg-velora-accent border border-white/5 transition-all">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-velora-accent mb-6 group-hover:bg-white transition-all">
                {activity.name.includes('Walking') && <Footprints size={24} />}
                {activity.name.includes('Water') && <Waves size={24} />}
                {activity.name.includes('Rebounding') && <Zap size={24} />}
                {activity.name.includes('Strength') && <Heart size={24} />}
              </div>
              <h3 className="text-xl font-serif italic mb-2 group-hover:text-velora-bg transition-all">{activity.name}</h3>
              <p className="text-velora-accent font-mono text-[10px] uppercase tracking-widest mb-4 group-hover:text-velora-bg/60 transition-all">{activity.frequency}</p>
              <p className="text-velora-muted text-sm group-hover:text-velora-bg/80 transition-all leading-relaxed">{activity.purpose}</p>
            </div>
          ))}
        </div>

        {/* GUIDELINES */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-white/5 p-12 rounded-[40px] border border-white/5 backdrop-blur-sm">
            <h2 className="text-3xl font-serif italic mb-8">Movement Principles</h2>
            <div className="space-y-6">
              {[
                { title: "Flow over Strain", text: "Avoid high-impact running or heavy straining which can increase inflammation in Lipedema tissue." },
                { title: "Consistency is King", text: "Small, daily movements are better than one massive weekend session." },
                { title: "Compression First", text: "Always wear your prescribed compression garments when performing upright activities." },
                { title: "Listen to the Ache", text: "If the tissue starts to throb, it's time to elevate and rest." }
              ].map((p, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-velora-accent flex items-center justify-center text-velora-bg text-[10px] font-bold">{i+1}</div>
                  <div>
                    <h4 className="font-bold text-velora-accent mb-1">{p.title}</h4>
                    <p className="text-xs text-velora-muted leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 shadow-sm">
              <h3 className="text-xl font-serif italic mb-6">Sample Weekly Routine</h3>
              <div className="space-y-4">
                {[
                  { days: "Mon-Sun", activity: "20 min Morning Walk + Elevation" },
                  { days: "Tue / Thu", activity: "Swimming or Water Aerobics" },
                  { days: "Wed / Sat", activity: "Full body fascia release / Yoga" },
                  { days: "Daily", activity: "10 min Rebounding + Lymphatic Drain" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-velora-accent">{item.days}</span>
                    <span className="text-sm text-velora-text/80">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 bg-velora-accent rounded-3xl text-velora-bg relative overflow-hidden group">
               <div className="relative z-10">
                <h3 className="text-2xl font-serif italic mb-4 leading-tight">Ready for a structured plan?</h3>
                <p className="mb-8 text-velora-bg/70 text-sm italic">Our 'Velocity Move' program gives you week-by-week follow-along videos.</p>
                <button className="flex items-center space-x-2 font-bold uppercase tracking-widest text-[10px] group">
                  <span>Explore the Program</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
