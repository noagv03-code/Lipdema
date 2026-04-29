
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
    <div className="py-24 bg-velora-bg min-h-screen text-velora-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO HEADER */}
        <header className="max-w-4xl mb-24 px-4">
          <span className="text-velora-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Protocolo de Apoyo Activo</span>
          <h1 className="text-6xl font-display font-black mb-8 leading-tight tracking-tight">{MOVEMENT_PRINCIPLES.title}</h1>
          <p className="text-xl text-velora-muted leading-relaxed font-medium mb-12 max-w-2xl">
            {MOVEMENT_PRINCIPLES.intro}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {MOVEMENT_PRINCIPLES.philosophy.map((item, i) => (
              <div key={i} className="flex items-center space-x-3 text-[11px] uppercase tracking-widest font-black text-velora-text/40">
                <ShieldCheck size={16} className="text-velora-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </header>

        {/* DAILY RULES */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {MOVEMENT_PRINCIPLES.dailyRules.map((rule, i) => (
            <div key={i} className="bg-white border border-velora-border p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-velora-accent font-display font-black text-3xl mb-6 opacity-20">0{i + 1}</div>
              <h3 className="text-xl font-display font-bold mb-3 tracking-tight">{rule.title}</h3>
              <p className="text-sm text-velora-muted leading-relaxed font-medium">{rule.text}</p>
            </div>
          ))}
        </div>

        {/* BEST SPORTS CATEGORIES */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display font-black mb-6 tracking-tight">Las Modalidades Óptimas</h2>
              <p className="text-velora-muted font-medium italic">Actividades específicas seleccionadas por su impacto único en la arquitectura linfática y la eficiencia circulatoria.</p>
            </div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest text-velora-accent bg-white px-5 py-2.5 rounded-full border border-velora-border shadow-sm">
              <CheckCircle2 size={14} />
              <span>Aprobado para Bajo Impacto</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {MOVEMENT_PRINCIPLES.categories.map((cat, i) => (
              <div key={i} className="group cursor-default">
                <div className="bg-white border border-velora-border rounded-[32px] p-8 h-full hover:bg-velora-accent-light/20 transition-all hover:-translate-y-2 shadow-sm">
                  <div className="w-14 h-14 bg-velora-bg rounded-2xl flex items-center justify-center text-velora-accent mb-8 group-hover:scale-110 transition-transform shadow-inner">
                    {cat.name.includes('Caminar') && <Footprints size={28} />}
                    {cat.name.includes('Acuático') && <Waves size={28} />}
                    {cat.name.includes('Fuerza') && <Dumbbell size={28} />}
                    {cat.name.includes('Rebounding') && <Zap size={28} />}
                    {cat.name.includes('Cardio') && <Bike size={28} />}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">{cat.name}</h3>
                  <p className="text-[10px] text-velora-accent font-black uppercase tracking-widest mb-4 opacity-60">Impacto</p>
                  <p className="text-xs text-velora-muted italic leading-relaxed mb-8 font-medium">{cat.why}</p>
                  
                  <div className="pt-8 border-t border-velora-border">
                    <p className="text-[10px] uppercase tracking-wider text-velora-text/30 font-black mb-3">Protocolo</p>
                    <p className="text-[11px] leading-relaxed text-velora-text/50 font-bold">{cat.implementation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIMITS & HABITS COMBINED */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* TO AVOID */}
          <div className="bg-red-500/5 border border-red-500/10 rounded-[48px] p-16">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-red-400/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-red-400" size={28} />
              </div>
              <h2 className="text-3xl font-display font-black tracking-tight text-velora-text">Qué Limitar</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {MOVEMENT_PRINCIPLES.toAvoid.map((item, i) => (
                <div key={i} className="bg-white/40 p-5 rounded-2xl border border-red-500/5 text-[13px] text-velora-text font-bold italic shadow-sm">
                  — {item}
                </div>
              ))}
            </div>
            <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-red-400 opacity-60 font-black">Nota: Escucha a tu cuerpo. Si un entrenamiento te hace sentir más pesada, modifícalo.</p>
          </div>

          {/* MICRO HABITS */}
          <div className="bg-velora-accent rounded-[48px] p-16 text-velora-text relative overflow-hidden shadow-xl">
             <div className="absolute top-0 right-0 p-12 opacity-10">
              <Sparkles size={160} />
            </div>
            <h2 className="text-3xl font-display font-black mb-12 relative z-10 tracking-tight">Micro-Hábitos Diarios</h2>
            <div className="space-y-6 relative z-10">
              {MOVEMENT_PRINCIPLES.microHabits.map((habit, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                    {i + 1}
                  </div>
                  <p className="text-xl font-bold leading-tight tracking-tight">{habit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WEEKLY ROUTINE SECTION */}
        <section className="bg-white border border-velora-border rounded-[56px] p-12 md:p-24 mb-32 shadow-sm">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-display font-black mb-8 leading-[1.1] tracking-tighter">Sistema Semanal Estructurado</h2>
              <p className="text-velora-muted font-medium italic mb-12 leading-relaxed">Un plan realista utilizado por nuestros mejores especialistas para equilibrar el drenaje con el fortalecimiento muscular.</p>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-velora-accent mb-6">Expectativas del Paciente</h4>
                  <div className="space-y-4">
                    {MOVEMENT_PRINCIPLES.expectations.map((exp, i) => (
                      <div key={i} className="flex items-center space-x-3 text-xs text-velora-muted font-bold">
                        <Target size={16} className="text-velora-accent/40" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-velora-bg rounded-[32px] overflow-hidden border border-velora-border shadow-inner">
                <div className="bg-white px-10 py-5 border-b border-velora-border flex justify-between items-center">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-40">Fase 01: Flujo para Principiantes</span>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-velora-accent shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-velora-border"></div>
                  </div>
                </div>
                <div className="divide-y divide-velora-border">
                  {MOVEMENT_PRINCIPLES.routines.beginner.map((row, i) => (
                    <div key={i} className="px-10 py-6 flex items-center justify-between group hover:bg-white transition-all">
                      <div className="flex items-center space-x-8">
                        <span className="font-mono text-[12px] font-black text-velora-accent w-14 tracking-tighter">{row.day}</span>
                        <span className="text-lg font-bold text-velora-text group-hover:translate-x-2 transition-transform tracking-tight">{row.activity}</span>
                      </div>
                      <Clock size={16} className="opacity-0 group-hover:opacity-20 transition-opacity text-velora-text" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
