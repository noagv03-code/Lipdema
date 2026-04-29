
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
          <span>{showStrategy ? 'Ocultar Plano' : 'Ver Plano'}</span>
        </button>
      </div>

      {/* Strategy Overlay */}
      <AnimatePresence>
        {showStrategy && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-16 right-4 z-50 w-80 bg-white border border-velora-border shadow-2xl rounded-[32px] p-8"
          >
            <h4 className="text-velora-accent font-black mb-6 flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em]">
              <Target size={18} />
              <span>Plano</span>
            </h4>
            
            <div className="space-y-6 text-[12px] leading-relaxed">
              <div>
                <p className="font-black text-velora-muted uppercase tracking-[0.2em] mb-1">Encabezado</p>
                <p className="text-velora-text italic font-serif">"{headline}"</p>
              </div>
              <div className="bg-velora-accent/10 p-4 rounded-2xl border border-velora-accent/10">
                <p className="font-black text-velora-accent uppercase tracking-widest mb-1 flex items-center">
                  <MessageSquare size={12} className="mr-2" /> Mensaje Clave
                </p>
                <p className="text-velora-text font-medium leading-relaxed italic">"{keyMessage}"</p>
              </div>
              <div>
                <p className="font-black text-velora-muted uppercase tracking-[0.2em] mb-1 flex items-center">
                  <Eye size={12} className="mr-2" /> Dirección Visual
                </p>
                <p className="text-velora-muted font-bold italic">{visualDirection}</p>
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
