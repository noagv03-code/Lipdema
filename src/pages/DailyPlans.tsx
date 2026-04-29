
import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Utensils, Moon, Apple, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { DAILY_PLANS, DAILY_PLANS_STRATEGY } from '../constants';

export default function DailyPlans() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#BBD6E4]">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#BBD6E4] via-[#BBD6E4]/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black text-velora-text mb-6 leading-tight tracking-tight">
              {DAILY_PLANS_STRATEGY.headline}
            </h1>
            <p className="text-xl text-velora-muted mb-10 leading-relaxed font-medium">
              {DAILY_PLANS_STRATEGY.subheadline}
            </p>
            <button className="bg-velora-accent text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-velora-text transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              {DAILY_PLANS_STRATEGY.cta}
            </button>
          </motion.div>
        </div>
      </section>

      {/* INSTRUCTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
           <div className="inline-block p-1 bg-velora-accent/10 rounded-full mb-8">
            <div className="px-6 py-2 bg-white rounded-full text-velora-accent font-black text-[10px] uppercase tracking-widest shadow-sm">
                Cómo usar esta guía
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle className="text-velora-accent" />, text: "Elige un día y síguelo completo" },
              { icon: <CheckCircle className="text-velora-accent" />, text: "Puedes repetir tus favoritos" },
              { icon: <CheckCircle className="text-velora-accent" />, text: "Busca consistencia, no perfección" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <p className="text-sm font-bold text-velora-text tracking-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY CARDS */}
      <section className="py-24 bg-[#E6F0F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {DAILY_PLANS.map((plan, i) => (
              <motion.div 
                key={plan.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-lg border border-velora-border hover:shadow-2xl transition-all group"
              >
                {/* Day Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={`Día ${plan.day}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-velora-accent text-white rounded-2xl flex flex-col items-center justify-center shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-tighter leading-none opacity-80">Día</span>
                    <span className="text-2xl font-display font-black leading-none">{plan.day}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-lg">
                       <span className="text-[10px] font-black text-velora-accent uppercase tracking-widest">{plan.focus}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-velora-bg rounded-lg flex items-center justify-center text-velora-accent shrink-0">
                        <Coffee size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-velora-muted uppercase tracking-widest mb-1">Desayuno</h4>
                        <p className="text-sm font-bold text-velora-text">{plan.breakfast}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-velora-bg rounded-lg flex items-center justify-center text-velora-accent shrink-0">
                        <Utensils size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-velora-muted uppercase tracking-widest mb-1">Comida</h4>
                        <p className="text-sm font-bold text-velora-text">{plan.lunch}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-velora-bg rounded-lg flex items-center justify-center text-velora-accent shrink-0">
                        <Moon size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-velora-muted uppercase tracking-widest mb-1">Cena</h4>
                        <p className="text-sm font-bold text-velora-text">{plan.dinner}</p>
                      </div>
                    </div>

                    {plan.snack && (
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-velora-bg rounded-lg flex items-center justify-center text-velora-accent shrink-0">
                          <Apple size={18} />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black text-velora-muted uppercase tracking-widest mb-1">Snack</h4>
                          <p className="text-sm font-bold text-velora-text">{plan.snack}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-velora-border">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 bg-velora-accent/10 rounded-full flex items-center justify-center text-velora-accent">
                        <Activity size={20} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-velora-muted uppercase tracking-widest mb-1">Movimiento</h4>
                        <p className="text-sm font-bold text-velora-text leading-tight">{plan.movement}</p>
                      </div>
                    </div>
                    <div className="bg-velora-bg/50 p-4 rounded-2xl">
                       <p className="text-[11px] text-velora-accent font-black tracking-tight italic">
                        Beneficio: {plan.benefit}
                       </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-velora-blue-dark relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight tracking-tight">
            ¿Quieres todo organizado para ti?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Obtén planes de 12 semanas, listas de compras dinámicas y guías de preparación de comidas en nuestro programa premium.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="bg-velora-accent text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-velora-accent transition-all shadow-xl flex items-center space-x-3 group">
              <span>Acceder al Programa Completo</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-velora-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-velora-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      </section>
    </div>
  );
}
