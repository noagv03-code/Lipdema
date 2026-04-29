
import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, AlertTriangle, Coffee, Fish, Beef, Leaf, Flame, ShieldCheck, Target } from 'lucide-react';
import { NUTRITION_PHILOSOPHY } from '../constants';

export default function Nutrition() {
  return (
    <div className="py-20 bg-velora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16 px-4">
          <span className="text-velora-accent font-bold uppercase tracking-widest text-[10px]">Lifestyle Blueprint</span>
          <h1 className="text-5xl font-serif italic mt-4 mb-6">{NUTRITION_PHILOSOPHY.title}</h1>
          <p className="text-xl text-velora-muted leading-relaxed italic mb-10">
            {NUTRITION_PHILOSOPHY.intro}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {NUTRITION_PHILOSOPHY.principles.map((p, i) => (
              <div key={i} className="flex items-center space-x-3 text-sm text-velora-text/70">
                <ShieldCheck size={16} className="text-velora-accent" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </header>

        {/* FOOD GROUPS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {NUTRITION_PHILOSOPHY.allowedFoods.map((group, i) => (
            <div key={i} className="bg-white/5 rounded-3xl p-10 border border-white/5 hover:bg-white/10 transition-all flex flex-col">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-velora-accent/10 rounded-xl flex items-center justify-center text-velora-accent">
                  {group.category.includes('Meats') && <Beef size={24} />}
                  {group.category.includes('Fish') && <Fish size={24} />}
                  {group.category.includes('Healthy Fats') && <Coffee size={24} />}
                  {group.category.includes('Veg') && <Leaf size={24} />}
                </div>
                <h3 className="text-3xl font-serif italic">{group.category}</h3>
              </div>

              <div className="flex-grow space-y-8">
                {group.subcategories ? (
                  group.subcategories.map((sub, j) => (
                    <div key={j}>
                      <h4 className="text-[10px] uppercase tracking-widest text-velora-accent font-bold mb-3">{sub.name}</h4>
                      <div className="flex flex-wrap gap-2 text-sm text-velora-text/80">
                        {sub.items.map((item, k) => (
                          <span key={k} className="bg-white/5 px-3 py-1 rounded-full border border-white/5">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <ul className="grid grid-cols-2 gap-3">
                    {group.items?.map((item, j) => (
                      <li key={j} className="flex items-center space-x-3 text-velora-text/80 text-sm italic">
                        <Check size={14} className="text-velora-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-velora-accent uppercase tracking-widest mb-1 flex items-center">
                    <Target size={12} className="mr-1" /> Core Benefits
                  </p>
                  <p className="text-velora-muted italic text-xs leading-relaxed">{group.benefits}</p>
                </div>
                {group.guidelines && (
                  <div>
                    <p className="text-[10px] font-bold text-velora-muted uppercase tracking-widest mb-1">Practical Guide</p>
                    <p className="text-white/40 italic text-xs leading-relaxed">{group.guidelines}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FOODS TO AVOID */}
        <div className="bg-white/5 rounded-3xl p-12 border border-white/5 shadow-2xl mb-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <AlertTriangle size={120} />
          </div>
          <div className="flex items-center space-x-3 mb-10">
            <AlertTriangle className="text-velora-accent" />
            <h2 className="text-3xl font-serif italic text-white">The Inflammatory List</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {NUTRITION_PHILOSOPHY.avoidFoods.map((food, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl text-velora-text/50 text-[11px] font-medium border border-white/5 hover:bg-red-500/5 hover:text-red-300 transition-all">
                <span className="w-1.5 h-1.5 bg-velora-accent rounded-full" />
                <span>{food}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DAILY MEAL STRUCTURE */}
        <div className="bg-velora-accent rounded-[40px] p-12 md:p-16 text-velora-bg shadow-2xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-serif italic mb-12">Sample Daily Meal Structure</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-10">
                {NUTRITION_PHILOSOPHY.sampleMeals.slice(0, 2).map((step, i) => (
                  <div key={i} className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 flex items-center">
                      <span className="w-8 h-px bg-velora-bg/30 mr-3"></span>
                      {step.time}
                    </span>
                    <div className="space-y-2 pl-11">
                      {step.options.map((opt, j) => (
                        <p key={j} className="text-xl font-medium leading-tight">"{opt}"</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-10">
                {NUTRITION_PHILOSOPHY.sampleMeals.slice(2).map((step, i) => (
                  <div key={i} className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 flex items-center">
                      <span className="w-8 h-px bg-velora-bg/30 mr-3"></span>
                      {step.time}
                    </span>
                    <div className="space-y-2 pl-11">
                      {step.options.map((opt, j) => (
                        <p key={j} className="text-xl font-medium leading-tight">"{opt}"</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-24 text-center pb-24">
          <h2 className="text-3xl font-serif italic mb-8">Ready for your personalized routine?</h2>
          <button className="bg-white text-velora-bg px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-[0.2em] hover:bg-velora-accent transition-all shadow-xl group">
            Get the full Lipedema Nutrition Plan
          </button>
          <p className="mt-6 text-velora-muted text-xs tracking-widest uppercase opacity-40">Download the full food list + weekly plan today.</p>
        </div>
      </div>
    </div>
  );
}

