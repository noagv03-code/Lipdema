
import React from 'react';
import { Info, Target, Eye, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StrategyProps {
  headline: string;
  subheadline: string;
  keyMessage: string;
  cta?: string;
  visualDirection: string;
  children: React.ReactNode;
}

export default function StrategySection({ 
  headline, 
  subheadline, 
  keyMessage, 
  cta, 
  visualDirection, 
  children 
}: StrategyProps) {
  const [showStrategy, setShowStrategy] = React.useState(false);

  return (
    <section className="relative group">
      {/* Strategy Toggle Button (Visible on Hover or for Strategy Mode) */}
      <div className="absolute top-4 right-4 z-40">
        <button 
          onClick={() => setShowStrategy(!showStrategy)}
          className="flex items-center space-x-2 bg-velora-accent/10 hover:bg-velora-accent/20 text-velora-accent px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold backdrop-blur-sm transition-all"
        >
          <Info size={14} />
          <span>{showStrategy ? 'Hide Blueprint' : 'View Blueprint'}</span>
        </button>
      </div>

      {/* Strategy Overlay */}
      <AnimatePresence>
        {showStrategy && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-16 right-4 z-50 w-80 bg-velora-nav/95 border border-white/10 shadow-2xl rounded-2xl p-6 backdrop-blur-md"
          >
            <h4 className="text-velora-accent font-bold mb-4 flex items-center space-x-2 text-xs uppercase tracking-widest">
              <Target size={18} />
              <span>Conversion Strategy</span>
            </h4>
            
            <div className="space-y-4 text-[11px] leading-relaxed">
              <div>
                <p className="font-bold text-velora-muted uppercase tracking-[0.2em] mb-1">Headline Strategy</p>
                <p className="text-velora-text italic">"{headline}"</p>
              </div>
              <div>
                <p className="font-bold text-velora-muted uppercase tracking-[0.2em] mb-1">Subheadline</p>
                <p className="text-velora-text/80">"{subheadline}"</p>
              </div>
              <div className="bg-velora-accent/5 p-3 rounded-lg border border-velora-accent/10">
                <p className="font-bold text-velora-accent uppercase tracking-widest mb-1 flex items-center">
                  <MessageSquare size={12} className="mr-1" /> Key Message
                </p>
                <p className="text-velora-text/90 italic">{keyMessage}</p>
              </div>
              {cta && (
                <div>
                  <p className="font-bold text-velora-muted uppercase tracking-[0.2em] mb-1">Call to Action</p>
                  <p className="text-velora-accent font-medium">{cta}</p>
                </div>
              )}
              <div>
                <p className="font-bold text-velora-muted uppercase tracking-[0.2em] mb-1 flex items-center">
                  <Eye size={12} className="mr-1" /> Visual Direction
                </p>
                <p className="text-velora-muted italic">{visualDirection}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Content */}
      <div className={showStrategy ? 'opacity-30 transition-opacity' : 'transition-opacity'}>
        {children}
      </div>
    </section>
  );
}
