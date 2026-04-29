
import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, AlertTriangle, Coffee, Fish, Beef, Leaf, Flame, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { NUTRITION_PHILOSOPHY } from '../constants';

export default function Nutrition() {
  return (
    <div className="py-24 bg-velora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-20 px-4">
          <span className="text-velora-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Plano de Estilo de Vida</span>
          <h1 className="text-6xl font-display font-black text-velora-text mb-8 leading-tight tracking-tight">
            {NUTRITION_PHILOSOPHY.title}
          </h1>
          <p className="text-xl text-velora-muted leading-relaxed font-medium mb-12 max-w-2xl">
            {NUTRITION_PHILOSOPHY.intro}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {NUTRITION_PHILOSOPHY.principles.map((p, i) => (
              <div key={i} className="flex items-center space-x-4 text-[13px] font-bold uppercase tracking-wider text-velora-text/60">
                <ShieldCheck size={18} className="text-velora-accent" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </header>

        {/* FOOD GROUPS */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {NUTRITION_PHILOSOPHY.allowedFoods.map((group, i) => (
            <div key={i} className="bg-white rounded-[40px] p-12 border border-velora-border hover:shadow-xl transition-all flex flex-col group">
              <div className="flex items-center space-x-5 mb-10">
                <div className="w-16 h-16 bg-velora-accent/10 rounded-2xl flex items-center justify-center text-velora-accent group-hover:bg-velora-accent group-hover:text-white transition-all shadow-inner">
                  {group.category.includes('Carnes') && <Beef size={28} />}
                  {group.category.includes('Pescado') && <Fish size={28} />}
                  {group.category.includes('Grasas') && <Coffee size={28} />}
                  {group.category.includes('Vegetales') && <Leaf size={28} />}
                </div>
                <h3 className="text-3xl font-display font-bold tracking-tight">{group.category}</h3>
              </div>

              <div className="flex-grow space-y-10">
                {group.subcategories ? (
                  group.subcategories.map((sub, j) => (
                    <div key={j}>
                      <h4 className="text-[11px] uppercase tracking-[0.2em] text-velora-accent font-black mb-4">{sub.name}</h4>
                      <div className="flex flex-wrap gap-3">
                        {sub.items.map((item, k) => (
                          <span key={k} className="bg-velora-bg px-4 py-2 rounded-xl text-sm font-semibold text-velora-text border border-velora-border">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <ul className="grid grid-cols-1 gap-4">
                    {group.items?.map((item, j) => (
                      <li key={j} className="flex items-center space-x-4 text-velora-text/80 text-sm font-medium">
                        <div className="w-5 h-5 rounded-lg bg-velora-accent/10 flex items-center justify-center">
                          <Check size={12} className="text-velora-accent" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-12 pt-10 border-t border-velora-border space-y-6">
                <div>
                  <p className="text-[10px] font-black text-velora-accent uppercase tracking-[0.2em] mb-2 flex items-center">
                    <Target size={14} className="mr-2" /> Propósito Principal
                  </p>
                  <p className="text-velora-muted font-medium text-sm leading-relaxed">{group.benefits}</p>
                </div>
                {group.guidelines && (
                  <div>
                    <p className="text-[10px] font-black text-velora-muted uppercase tracking-[0.2em] mb-2">Consejo Práctico</p>
                    <p className="text-velora-text/60 italic text-xs leading-relaxed font-serif">{group.guidelines}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FOODS TO AVOID */}
        <div className="bg-velora-text rounded-[48px] p-16 text-white mb-24 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
            <AlertTriangle size={200} />
          </div>
          <div className="flex items-center space-x-4 mb-12 relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="text-velora-accent" size={24} />
            </div>
            <h2 className="text-4xl font-display font-bold tracking-tight">La Lista Inflamatoria</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {NUTRITION_PHILOSOPHY.avoidFoods.map((food, i) => (
              <div key={i} className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                <div className="w-2 h-2 bg-velora-accent rounded-full" />
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">{food}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DAILY MEAL STRUCTURE */}
        <div className="bg-velora-accent rounded-[56px] p-16 md:p-24 text-velora-text shadow-xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-12 opacity-10">
             <Leaf size={300} />
          </div>
          <div className="max-w-4xl relative z-10">
            <h2 className="text-5xl font-display font-black mb-16 tracking-tighter">Tu Flujo Diario</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                {NUTRITION_PHILOSOPHY.sampleMeals.slice(0, 2).map((step, i) => (
                  <div key={i} className="space-y-6">
                    <span className="text-[12px] font-black uppercase tracking-[0.3em] text-velora-text/40 flex items-center">
                      <span className="w-10 h-px bg-velora-text/20 mr-4"></span>
                      Amanecer - {step.time}
                    </span>
                    <div className="space-y-4 pl-14">
                      {step.options.map((opt, j) => (
                        <p key={j} className="text-2xl font-display font-bold leading-tight tracking-tight">"{opt}"</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-12">
                {NUTRITION_PHILOSOPHY.sampleMeals.slice(2).map((step, i) => (
                  <div key={i} className="space-y-6">
                    <span className="text-[12px] font-black uppercase tracking-[0.3em] text-velora-text/40 flex items-center">
                      <span className="w-10 h-px bg-velora-text/20 mr-4"></span>
                      Atardecer - {step.time}
                    </span>
                    <div className="space-y-4 pl-14">
                      {step.options.map((opt, j) => (
                        <p key={j} className="text-2xl font-display font-bold leading-tight tracking-tight">"{opt}"</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

