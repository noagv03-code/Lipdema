
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, Heart, Zap, Waves, Users, X } from 'lucide-react';
import StrategySection from '../components/StrategySection';
import { HOMEPAGE_STRATEGY } from '../constants';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <StrategySection {...HOMEPAGE_STRATEGY.hero}>
        <div className="relative h-[85vh] flex items-center overflow-hidden bg-[#A2C4D9]">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#A2C4D9] via-[#A2C4D9]/80 to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-1.5 bg-velora-blue-dark border border-velora-blue-dark/20 rounded-full text-[10px] uppercase tracking-widest font-bold text-white mb-6 shadow-sm">
                Plano de Bienestar • Etapas 1-3
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black text-velora-text mb-6 leading-[1.05] tracking-tight">
                El Lipedema no es tu <span className="text-velora-accent">culpa.</span> <br/>
                <span className="italic font-serif font-normal text-velora-muted">Manejarlo</span> es tu poder.
              </h1>
              <p className="text-lg text-velora-muted mb-10 leading-relaxed max-w-lg font-medium">
                Un enfoque tranquilo y basado en la evidencia para la mujer moderna. Recupera tu ligereza a través de la nutrición respaldada por la ciencia y el movimiento intencional.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => navigate('/nutrition')}
                  className="px-8 py-5 bg-velora-accent text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-velora-text transition-all group shadow-lg shadow-velora-accent/20"
                >
                  Ver Nutrición
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/movement')}
                  className="px-8 py-5 bg-white border border-velora-border rounded-xl font-bold hover:bg-velora-bg transition-all text-[14px]"
                >
                  Ver Movimiento
                </button>
              </div>
              <div className="mt-12 flex items-center gap-4 opacity-70">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white"></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-velora-muted">Únete a más de 14,200 mujeres en el camino al alivio</span>
              </div>
            </motion.div>
          </div>
        </div>
      </StrategySection>

      {/* PROBLEM AWARENESS */}
      <StrategySection {...HOMEPAGE_STRATEGY.problem}>
        <div className="py-24 bg-velora-bg border-y border-velora-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl font-display font-black mb-8 leading-tight tracking-tight">
                  ¿Cansada de consejos que <br/> <span className="italic font-serif font-normal text-velora-accent">no encajan?</span>
                </h2>
                <p className="text-lg text-velora-muted mb-8 leading-relaxed font-medium">
                  El Lipedema no se trata de 'comer menos y moverse más'. Los consejos tradicionales de fitness a menudo ignoran las necesidades únicas de nuestro sistema linfático, lo que genera más dolor y agotamiento.
                </p>
                <ul className="space-y-5">
                  {[
                    "Pérdida de peso que solo ocurre 'arriba'",
                    "Dolor y hematomas que los médicos descartan",
                    "La sensación de que tu cuerpo es un extraño"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 group text-[13px] font-bold uppercase tracking-wide">
                      <div className="w-6 h-6 rounded-full bg-velora-accent/10 flex items-center justify-center text-velora-accent text-[10px]">
                        {i+1}
                      </div>
                      <span className="text-velora-text group-hover:text-velora-accent transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-velora-bg/50 border border-velora-border rounded-[40px] p-12 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-velora-accent">
                  <Heart size={120} />
                </div>
                <h3 className="text-2xl font-display font-bold text-velora-accent mb-6">Te escuchamos.</h3>
                <p className="text-velora-muted leading-relaxed italic text-lg mb-8 font-serif">
                  "Me dijeron que solo era obesidad. Hice dieta hasta el agotamiento, pero mis piernas seguían igual. No fue hasta que encontré Velora que me di cuenta de que no lo estaba haciendo mal, simplemente tenía el mapa equivocado."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-velora-accent/10 flex items-center justify-center">
                    <Users size={24} className="text-velora-accent" />
                  </div>
                  <div>
                    <p className="font-black text-velora-text tracking-widest text-[10px] uppercase">SARAH • SOBREVIVIENTE ETAPA 2</p>
                    <p className="text-[10px] font-bold text-velora-accent uppercase tracking-[0.2em]">Defensora del Paciente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StrategySection>

      {/* SOLUTION / PILLARS */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <span className="text-velora-accent font-bold uppercase tracking-[0.3em] text-[10px]">El Plano Velora</span>
          <h2 className="text-5xl font-display font-black mt-4 tracking-tight">Pilares de <span className="italic font-serif font-normal">Ligereza</span></h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            { id: '01', icon: <Heart />, title: "Nutrición Tranquila", desc: "Alimentación antiinflamatoria diseñada para reducir la carga linfática mientras se desarrolla el metabolismo. Sin restricciones, solo intención." },
            { id: '02', icon: <Waves />, title: "Movimiento Suave", desc: "Rutinas diarias de bajo impacto que priorizan el drenaje y la movilidad sobre el sudor y el esfuerzo." },
            { id: '03', icon: <Users />, title: "Cuidado Experto", desc: "Un entorno de apoyo arraigado en la ciencia y la empatía, conectándote con los mejores especialistas." }
          ].map((item, i) => (
            <div key={i} className="p-12 rounded-[32px] border border-velora-border bg-velora-blue-mid/40 hover:bg-velora-accent-light transition-all group relative overflow-hidden shadow-sm">
              <span className="absolute -top-4 -right-2 text-velora-accent/10 font-display font-black text-9xl group-hover:text-velora-accent/20 transition-all">{item.id}</span>
              <div className="w-16 h-16 bg-velora-bg rounded-2xl flex items-center justify-center text-velora-accent mb-10 group-hover:bg-velora-accent group-hover:text-white transition-all shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-velora-muted leading-relaxed text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
