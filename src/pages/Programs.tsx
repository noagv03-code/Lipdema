
import React from 'react';
import { Check, ArrowRight, Star, ShieldCheck, Zap, Heart } from 'lucide-react';
import { PROGRAMS } from '../constants';

export default function Programs() {
  return (
    <div className="py-24 bg-velora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-velora-accent font-bold uppercase tracking-widest text-[10px]">Our Offers</span>
          <h1 className="text-5xl font-serif italic mt-4 mb-6">Choose Your Path</h1>
          <p className="text-xl text-velora-muted italic leading-relaxed">
            From free resources to high-touch coaching, we have a solution for every stage of your Lipedema journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program) => (
            <div 
              key={program.id} 
              className={`relative bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col h-full hover:bg-white/10 transition-all ${program.id === 'core' ? 'ring-2 ring-velora-accent border-transparent scale-105 z-10' : ''}`}
            >
              {program.id === 'core' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-velora-accent text-velora-bg text-[10px] uppercase font-bold px-4 py-1.5 rounded-full tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <p className="text-velora-accent font-mono text-[10px] uppercase tracking-widest mb-2">{program.target}</p>
                <h3 className="text-2xl font-serif italic mb-4">{program.name}</h3>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-4xl font-serif font-bold italic">{program.price}</span>
                  {program.price !== 'Free' && <span className="text-velora-muted text-xs tracking-widest uppercase ml-2">one-time</span>}
                </div>
                <p className="text-velora-muted text-xs italic leading-relaxed">{program.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Features</p>
                {program.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Check size={14} className="text-velora-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-velora-text/70">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                program.id === 'core' 
                  ? 'bg-white text-velora-bg hover:bg-velora-accent' 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                {program.cta}
              </button>
            </div>
          ))}
        </div>

        {/* SATISFACTION GUARANTEE */}
        <div className="mt-24 p-12 bg-white/5 rounded-[40px] border border-white/5 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-velora-accent/10 rounded-full text-velora-accent mb-8">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-serif italic mb-4">Our Commitment</h2>
          <p className="text-velora-muted text-lg mb-8 italic leading-relaxed">
            "We believe so deeply in the Velora Method that we offer a 30-day contentment guarantee. If our lifestyle strategies don't bring more lightness to your life within the first month, we'll provide a full refund corner-to-corner."
          </p>
          <div className="flex items-center justify-center space-x-2 text-velora-accent mb-6 opacity-60">
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Trusted by over 12,000 women globally</p>
        </div>
      </div>
    </div>
  );
}
