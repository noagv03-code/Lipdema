
import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, AlertTriangle, Coffee, Fish, Beef, Leaf, Flame } from 'lucide-react';
import { NUTRITION_PHILOSOPHY } from '../constants';

export default function Nutrition() {
  return (
    <div className="py-20 bg-velora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16">
          <span className="text-velora-accent font-bold uppercase tracking-widest text-[10px]">Nutrition Guide</span>
          <h1 className="text-5xl font-serif italic mt-4 mb-6">{NUTRITION_PHILOSOPHY.title}</h1>
          <p className="text-xl text-velora-muted leading-relaxed italic">
            {NUTRITION_PHILOSOPHY.intro}
          </p>
        </header>

        {/* FOOD GROUPS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {NUTRITION_PHILOSOPHY.allowedFoods.map((group, i) => (
            <div key={i} className="bg-white/5 rounded-3xl p-8 border border-white/5 hover:bg-white/10 transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-velora-accent/10 rounded-lg flex items-center justify-center text-velora-accent">
                  {group.category === 'Meats' && <Beef size={20} />}
                  {group.category === 'Fish' && <Fish size={20} />}
                  {group.category === 'Healthy Fats' && <Coffee size={20} />}
                  {group.category === 'Anti-Inflammatory Veg' && <Leaf size={20} />}
                </div>
                <h3 className="text-2xl font-serif italic">{group.category}</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-center space-x-3 text-velora-text/80 text-sm">
                    <Check size={14} className="text-velora-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 mt-auto">
                <p className="text-[10px] font-bold text-velora-accent uppercase tracking-widest mb-1">Impact</p>
                <p className="text-velora-muted italic text-xs leading-relaxed">{group.benefits}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FOODS TO AVOID */}
        <div className="bg-white/5 rounded-3xl p-12 border border-white/5 mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <AlertTriangle className="text-velora-accent" />
            <h2 className="text-3xl font-serif italic">What to Limit or Avoid</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NUTRITION_PHILOSOPHY.avoidFoods.map((food, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl text-velora-text/60 text-xs font-medium border border-white/5">
                <span className="w-1.5 h-1.5 bg-velora-accent rounded-full" />
                <span>{food}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DAILY STRUCTURE */}
        <div className="bg-white/5 rounded-3xl p-12 text-velora-text border border-white/5">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif italic mb-10">Sample Daily Structure</h2>
            <div className="space-y-8">
              {[
                { time: "Morning", action: "Warm lemon water + Hydration with minerals" },
                { time: "Meal 1", action: "Pasture-raised eggs with avocado and fermented vegetables" },
                { time: "Afternoon", action: "Bone broth or wild-caught sardine snack" },
                { time: "Meal 2", action: "Grilled salmon or grass-fed steak with steamed cruciferous veg" },
                { time: "Evening", action: "Magnesium-rich tea + wind-down routine" }
              ].map((step, i) => (
                <div key={i} className="flex space-x-6 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                  <span className="text-velora-accent font-bold uppercase tracking-widest text-[10px] w-20 pt-1">{step.time}</span>
                  <p className="text-lg text-velora-muted">{step.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-velora-accent text-velora-bg px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            Download the Full Nutrition Protocol
          </button>
        </div>
      </div>
    </div>
  );
}
