
import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, Heart, Zap, Waves, Users, X } from 'lucide-react';
import StrategySection from '../components/StrategySection';
import { HOMEPAGE_STRATEGY, PROGRAMS } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <StrategySection {...HOMEPAGE_STRATEGY.hero}>
        <div className="relative h-[85vh] flex items-center overflow-hidden bg-velora-bg">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-velora-bg via-velora-bg/80 to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block px-3 py-1 border border-velora-sage/30 rounded-full text-[10px] uppercase tracking-widest text-velora-sage mb-6">
                Lifestyle Management • Stages 1-3
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-velora-text mb-6 leading-[1.1]">
                Lipedema isn't your fault. <br/>
                <span className="italic text-velora-accent tracking-tight">Managing it</span> is your power.
              </h1>
              <p className="text-lg text-velora-muted mb-10 leading-relaxed max-w-lg">
                A holistic blueprint for the modern woman. Reclaim your mobility through science-backed nutrition and intentional lymphatic flow.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-4 bg-white text-velora-bg font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-velora-accent transition-all group">
                  Start Your Program
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition-all text-[14px]">
                  View Success Stories
                </button>
              </div>
              <div className="mt-12 flex items-center gap-4 opacity-50">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-velora-bg"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-velora-bg"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-velora-bg"></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-medium">Join 14,200+ women on the journey</span>
              </div>
            </motion.div>
          </div>
        </div>
      </StrategySection>

      {/* PROBLEM AWARENESS */}
      <StrategySection {...HOMEPAGE_STRATEGY.problem}>
        <div className="py-24 bg-velora-nav border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-serif mb-8 italic leading-tight">
                  Tired of advice that <br/> doesn't fit?
                </h2>
                <p className="text-lg text-velora-muted mb-8 leading-relaxed">
                  Lipedema isn't about 'eating less and moving more.' High-impact training and extreme restriction can actually trigger more inflammation.
                </p>
                <ul className="space-y-4">
                  {[
                    "Weight loss that only happens 'up top'",
                    "Pain and bruising that doctors dismiss",
                    "The feeling that your body is a stranger"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 group text-sm">
                      <span className="text-velora-accent font-mono text-xs">0{i+1}</span>
                      <span className="text-velora-text/80 group-hover:text-velora-accent transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden backdrop-blur-sm group hover:border-velora-accent/30 transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Heart size={120} />
                </div>
                <h3 className="text-2xl font-serif text-velora-accent mb-6 italic">We hear you.</h3>
                <p className="text-velora-muted leading-relaxed italic text-lg mb-8">
                  "I was told it was just obesity. I dieted until I was exhausted, but my legs stayed the same. It wasn't until I found Velora that I realized I wasn't doing it wrong—I just had the wrong map."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-velora-accent/20 flex items-center justify-center">
                    <Users size={20} className="text-velora-accent" />
                  </div>
                  <p className="font-semibold text-velora-text tracking-widest text-xs">SARAH, STAGE 2 • FOUNDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StrategySection>

      {/* SOLUTION / PILLARS */}
      <div className="py-24 bg-velora-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-velora-accent font-bold uppercase tracking-widest text-[10px]">The Velora Blueprint</span>
          <h2 className="text-5xl font-serif italic mt-4">Pillars of Lightness</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { id: '01', icon: <Heart />, title: "Anti-Inflammatory Nutrition", desc: "Eating to reduce lymphatic load, not just calories. Focus on high-quality proteins and wild-caught fats." },
            { id: '02', icon: <Waves />, title: "Lymph-Flow Movement", desc: "Sustainable daily routines including rebounding and swimming designed for efficient fluid drainage." },
            { id: '03', icon: <Users />, title: "Expert Support", desc: "Science-backed advice from specialized therapists and a global community that knows the struggle." }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group relative overflow-hidden">
              <span className="absolute top-6 right-8 text-white/5 font-serif text-6xl group-hover:text-velora-accent/10 transition-all">{item.id}</span>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-velora-accent mb-8 group-hover:bg-velora-accent group-hover:text-velora-bg transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 italic">{item.title}</h3>
              <p className="text-velora-muted leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LEAD MAGNET */}
      <div className="py-24 bg-velora-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-velora-sand italic mb-6">Start Your Journey for Free</h2>
            <p className="text-xl text-velora-sand/70 mb-10">
              Get the "Lipedema Food & Movement Starter Plan" and see the difference in 7 days.
            </p>
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-velora-sand placeholder:text-velora-sand/40 focus:outline-none focus:ring-2 focus:ring-velora-blush"
              />
              <button className="bg-velora-blush text-velora-forest font-bold px-8 py-4 rounded-full hover:bg-velora-blush/90 transition-all">
                Send My Guide
              </button>
            </form>
            <p className="mt-6 text-velora-sand/40 text-sm italic">Join 12,000+ women already thriving.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
