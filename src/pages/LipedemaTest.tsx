
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Zap, 
  RotateCcw, 
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCircle2
} from 'lucide-react';
import { LIPEDEMA_INFO } from '../constants';

export default function LipedemaTest() {
  const navigate = useNavigate();
  const { test, diagnosis, finalCta } = LIPEDEMA_INFO;

  const [testAnswers, setTestAnswers] = useState<(boolean | null)[]>(new Array(test.questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswer = (index: number, answer: boolean) => {
    const newAnswers = [...testAnswers];
    newAnswers[index] = answer;
    setTestAnswers(newAnswers);
  };

  const calculateResult = () => {
    const yesCount = testAnswers.filter(a => a === true).length;
    const percentage = (yesCount / test.questions.length) * 100;
    
    return test.results.find(r => percentage >= r.range[0] && percentage <= r.range[1]) || test.results[0];
  };

  const resetTest = () => {
    setTestAnswers(new Array(test.questions.length).fill(null));
    setShowResult(false);
  };

  const isTestComplete = testAnswers.every(a => a !== null);

  return (
    <div className="min-h-screen bg-velora-bg/30">
      {/* HERO SECTION FOR TEST */}
      <section className="bg-velora-blue-dark py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 bg-velora-accent/20 px-4 py-2 rounded-full text-velora-accent mb-6">
              <ClipboardCheck size={18} />
              <span className="text-xs font-black uppercase tracking-widest text-white">Herramienta de Diagnóstico</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight tracking-tight text-white">
              {test.title}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
              Realiza nuestro test orientativo diseñado para ayudarte a identificar posibles señales de lipedema en tu cuerpo.
            </p>
          </motion.div>
        </div>
        
        {/* Background Decos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-velora-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-velora-accent/5 rounded-full blur-[80px] -ml-32 -mb-32" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* INSTRUCTIONS & CONTEXT */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[48px] p-10 shadow-xl border border-velora-border"
            >
              <h3 className="text-xl font-black text-velora-text mb-8 flex items-center space-x-3">
                <ShieldCheck className="text-velora-accent" size={24} />
                <span>Instrucciones</span>
              </h3>
              <div className="space-y-6">
                {test.instructions.map((inst, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-velora-bg flex items-center justify-center shrink-0 text-[10px] font-black text-velora-accent mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm font-bold text-velora-muted leading-tight">{inst}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-velora-accent rounded-[48px] p-10 text-white shadow-xl"
            >
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-60 italic">Importante</h4>
              <p className="text-lg font-bold leading-relaxed mb-8">
                El diagnóstico definitivo es clínico. Este test es un primer paso para entender tus síntomas.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Search className="text-white" size={24} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-80">
                  Consulta siempre con un especialista
                </div>
              </div>
            </motion.div>
          </div>

          {/* THE TEST FORM */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[60px] p-8 md:p-16 shadow-2xl relative overflow-hidden min-h-[600px]"
            >
              {!showResult ? (
                <>
                  <div className="flex items-center justify-between mb-12">
                    <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-velora-accent flex items-center">
                      <span className="w-10 h-px bg-velora-accent/30 mr-4"></span>
                      Evaluación Clínica Orientativa
                    </h2>
                    <div className="text-[10px] font-black uppercase tracking-widest text-velora-muted">
                      Pregunta {testAnswers.filter(a => a !== null).length} de {test.questions.length}
                    </div>
                  </div>

                  <div className="space-y-12 mb-16 h-[500px] overflow-y-auto pr-6 custom-scrollbar">
                    {test.questions.map((q, i) => (
                      <div key={i} className="space-y-6 pb-12 border-b border-velora-border last:border-0">
                        <p className="text-2xl font-display font-black text-velora-text leading-tight">
                          <span className="text-velora-accent/40 mr-4">0{i + 1}</span>
                          {q}
                        </p>
                        <div className="flex gap-4">
                          <button 
                            onClick={() => handleAnswer(i, true)}
                            className={`flex-1 py-5 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all border-2 ${
                              testAnswers[i] === true 
                              ? 'bg-velora-accent border-velora-accent text-white shadow-xl shadow-velora-accent/30' 
                              : 'bg-white border-velora-border text-velora-muted hover:border-velora-accent/40'
                            }`}
                          >
                            Sí
                          </button>
                          <button 
                            onClick={() => handleAnswer(i, false)}
                            className={`flex-1 py-5 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all border-2 ${
                              testAnswers[i] === false 
                              ? 'bg-velora-blue-dark border-velora-blue-dark text-white shadow-xl shadow-velora-blue-dark/20' 
                              : 'bg-white border-velora-border text-velora-muted hover:border-velora-accent/40'
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 bg-white pt-6 border-t border-velora-border">
                    <div className="flex flex-col gap-6">
                      <div className="h-2.5 bg-velora-bg rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-velora-accent"
                          initial={{ width: 0 }}
                          animate={{ width: `${(testAnswers.filter(a => a !== null).length / test.questions.length) * 100}%` }}
                        />
                      </div>
                      <button 
                        disabled={!isTestComplete}
                        onClick={() => setShowResult(true)}
                        className={`w-full py-6 rounded-[28px] font-black text-xs uppercase tracking-[0.2em] transition-all ${
                          isTestComplete 
                          ? 'bg-velora-accent text-white hover:bg-velora-blue-dark shadow-2xl active:scale-[0.98]' 
                          : 'bg-velora-bg text-velora-muted cursor-not-allowed border border-velora-border'
                        }`}
                      >
                        Generar mi diagnóstico orientativo
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-velora-accent rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-velora-accent/30 rotate-12">
                    <Zap className="text-white" size={48} />
                  </div>
                  <p className="text-velora-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4">Resultado de Evaluación</p>
                  <h3 className="text-6xl font-display font-black text-velora-text mb-8 leading-tight">
                    {calculateResult().label}
                  </h3>
                  <p className="text-xl text-velora-muted mb-12 leading-relaxed max-w-lg mx-auto font-medium">
                    {calculateResult().description}
                  </p>
                  
                  <div className="bg-velora-bg/40 rounded-[40px] p-8 mb-12 border border-velora-border border-dashed">
                    <p className="text-sm text-velora-muted italic font-bold">
                      {test.disclaimer}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 max-w-md mx-auto">
                    <button 
                      onClick={() => navigate('/nutrition')}
                      className="flex-1 bg-velora-accent text-white py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-velora-blue-dark transition-all flex items-center justify-center space-x-3 shadow-xl"
                    >
                      <span>Plan de Acción</span>
                      <ArrowRight size={18} />
                    </button>
                    <button 
                      onClick={resetTest}
                      className="flex-1 border-2 border-velora-border text-velora-muted py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-velora-accent hover:border-velora-accent transition-all flex items-center justify-center space-x-3"
                    >
                      <RotateCcw size={18} />
                      <span>Repetir</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ADDITIONAL INFO - SIGNALS COPIED FROM DIAGNOSIS CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-4xl font-display font-black text-velora-text mb-8">{diagnosis.title}</h2>
               <p className="text-xl text-velora-muted font-medium leading-relaxed mb-12">
                 {diagnosis.content}
               </p>
               <div className="grid sm:grid-cols-2 gap-8">
                 <div className="bg-velora-bg/20 p-8 rounded-[40px] border border-velora-border">
                    <h4 className="text-xs font-black uppercase tracking-widest text-velora-accent mb-6">El Especialista</h4>
                    <div className="space-y-4">
                      {diagnosis.specialistRole.map((role, i) => (
                        <div key={i} className="flex items-center space-x-3 text-sm text-velora-muted font-bold">
                           <CheckCircle2 size={16} className="text-velora-accent" />
                           <span>{role}</span>
                        </div>
                      ))}
                    </div>
                 </div>
                 <div className="bg-velora-blue-dark p-8 rounded-[40px] text-white shadow-xl">
                    <h4 className="text-xs font-black uppercase tracking-widest text-velora-accent mb-6">Relacionado con</h4>
                    <div className="space-y-4">
                      {diagnosis.associatedConditions.map((cond, i) => (
                        <div key={i} className="flex items-center space-x-3 text-sm text-white/80 font-bold">
                           <div className="w-1 h-1 rounded-full bg-velora-accent" />
                           <span>{cond}</span>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
             </div>
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                  className="rounded-[60px] shadow-2xl h-[500px] w-full object-cover" 
                  alt="Relational view"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[48px] shadow-2xl max-w-xs border border-velora-border">
                  <p className="text-velora-text font-serif italic text-lg leading-relaxed">
                    "{diagnosis.note}"
                  </p>
                </div>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
