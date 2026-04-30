
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Info, 
  Layers, 
  Thermometer, 
  Stethoscope, 
  AlertTriangle, 
  History, 
  Baby, 
  GitCompare, 
  BookOpen, 
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Search,
  ClipboardCheck,
  Zap,
  RotateCcw
} from 'lucide-react';
import { LIPEDEMA_INFO } from '../constants';

export default function LipedemaInfo() {
  const navigate = useNavigate();
  const { 
    hero, 
    definitions, 
    gradesAndTypes, 
    symptoms, 
    treatments, 
    associated, 
    origin, 
    evolution, 
    childhood, 
    differential, 
    studies, 
    cta,
    diagnosis,
    test,
    finalCta 
  } = LIPEDEMA_INFO;

  const [testAnswers, setTestAnswers] = useState<(boolean | null)[]>(new Array(test.questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

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
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#D9EAF3]">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D9EAF3] via-[#D9EAF3]/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black text-velora-text mb-6 leading-tight tracking-tight">
              {hero.headline}
            </h1>
            <p className="text-xl text-velora-muted mb-10 leading-relaxed font-medium">
              {hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DEFINITION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-velora-accent/10 px-4 py-2 rounded-full text-velora-accent mb-6">
                <Info size={18} />
                <span className="text-xs font-black uppercase tracking-widest text-[#2E4A66]">Definición</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-velora-text mb-8 leading-tight tracking-tight">
                {definitions.title}
              </h2>
              <p className="text-xl text-velora-muted mb-10 leading-relaxed">
                {definitions.description}
              </p>
              
              <div className="space-y-6">
                {definitions.keyPoints.map((point, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="w-6 h-6 rounded-full bg-velora-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-velora-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-velora-text">{point.title}</h4>
                      <p className="text-sm text-velora-muted">{point.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-velora-bg p-6 rounded-2xl border-l-4 border-velora-accent">
                <p className="text-velora-text font-bold italic">
                  "{definitions.importantNote}"
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                alt="Mujer real"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GRADES AND TYPES */}
      <section className="py-24 bg-[#F8FBFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-velora-text mb-6">
              {gradesAndTypes.title}
            </h2>
            <p className="text-lg text-velora-muted">
              El lipedema se clasifica por su progresión visual (grados) y las zonas del cuerpo que afecta (tipos).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {gradesAndTypes.grades.map((grade, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-velora-border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-velora-accent text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-velora-accent/20">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-black text-velora-text mb-6">{grade.title}</h3>
                <ul className="space-y-4">
                  {grade.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3 text-sm text-velora-muted">
                      <CheckCircle2 size={16} className="text-velora-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-velora-blue-dark rounded-[40px] p-12 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-black mb-8">Tipos de Lipedema</h3>
                <div className="space-y-4">
                  {gradesAndTypes.types.map((type, i) => (
                    <div key={i} className="flex items-center space-x-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-velora-accent font-black text-sm shrink-0 w-16">{type.id}</span>
                      <span className="text-sm font-medium text-white/80">{type.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block text-center">
                <div className="inline-block p-8 rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
                   <Layers size={80} className="text-velora-accent mx-auto mb-6 opacity-50" />
                   <p className="text-sm text-white/60 max-w-xs mx-auto">
                    Es común presentar una combinación de varios tipos simultáneamente.
                   </p>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-velora-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2"
            >
              <div className="inline-flex items-center space-x-2 bg-velora-accent/10 px-4 py-2 rounded-full text-velora-accent mb-6 text-[#2E4A66]">
                <Thermometer size={18} />
                <span className="text-xs font-black uppercase tracking-widest">Señales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-velora-text mb-8 leading-tight tracking-tight">
                Síntomas Comunes
              </h2>
              <div className="grid gap-4">
                {symptoms.map((symptom, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 p-5 rounded-2xl bg-velora-bg/30 border border-transparent hover:border-velora-accent/20 transition-all"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-velora-accent shrink-0">
                      <AlertTriangle size={18} />
                    </div>
                    <span className="font-bold text-velora-text">{symptom}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                 <div className="h-64 bg-velora-bg rounded-[40px] relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Lipedema support" referrerPolicy="no-referrer" />
                 </div>
                 <div className="h-48 bg-velora-blue-dark rounded-[40px] flex items-center justify-center p-8 text-center text-white">
                    <p className="text-sm font-bold leading-relaxed">
                      El dolor no es solo físico, también hay una carga emocional importante.
                    </p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="h-48 bg-velora-accent rounded-[40px] flex items-center justify-center p-8 text-center text-white">
                   <p className="text-sm font-bold leading-relaxed">
                      Detectar los síntomas a tiempo es el primer paso para el manejo.
                    </p>
                 </div>
                 <div className="h-64 bg-velora-bg rounded-[40px] relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Lipedema awareness" referrerPolicy="no-referrer" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS SECTION */}
      <section className="py-24 bg-velora-text text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              {treatments.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              {treatments.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 border border-white/10 p-12 rounded-[40px] backdrop-blur-sm"
            >
               <h3 className="text-2xl font-black mb-8 flex items-center space-x-4">
                 <div className="w-10 h-10 bg-velora-accent rounded-xl flex items-center justify-center">
                    <History size={20} />
                 </div>
                 <span>{treatments.conservative.title}</span>
               </h3>
               <ul className="space-y-6">
                 {treatments.conservative.items.map((item, i) => (
                   <li key={i} className="flex items-start space-x-4">
                     <CheckCircle2 className="text-velora-accent shrink-0 mt-1" size={20} />
                     <span className="text-white/80 leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white/5 border border-white/10 p-12 rounded-[40px] backdrop-blur-sm"
            >
               <h3 className="text-2xl font-black mb-8 flex items-center space-x-4">
                 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Stethoscope size={20} />
                 </div>
                 <span>{treatments.medical.title}</span>
               </h3>
               <ul className="space-y-6">
                 {treatments.medical.items.map((item, i) => (
                   <li key={i} className="flex items-start space-x-4">
                     <CheckCircle2 className="text-white/40 shrink-0 mt-1" size={20} />
                     <span className="text-white/80 leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="mt-12 p-6 rounded-2xl bg-white/10 text-sm font-bold italic text-white/60">
                 {treatments.goal}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ORIGIN & EVOLUTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 mb-24">
             <div className="space-y-12">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-3xl font-display font-black text-velora-text mb-8">{origin.title}</h2>
                 <div className="space-y-6">
                   {origin.points.map((point, i) => (
                     <div key={i} className="flex items-start space-x-4">
                       <CheckCircle2 className="text-velora-accent shrink-0 mt-1" size={18} />
                       <span className="text-velora-muted leading-relaxed font-medium">{point}</span>
                     </div>
                   ))}
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-velora-bg/30 p-10 rounded-[40px]"
               >
                 <h2 className="text-2xl font-display font-black text-velora-text mb-6">Evolución y Desarrollo</h2>
                 <ul className="space-y-4">
                   {evolution.map((text, i) => (
                     <li key={i} className="flex items-start space-x-3 text-sm text-velora-muted">
                       <div className="w-1.5 h-1.5 rounded-full bg-velora-accent shrink-0 mt-1.5" />
                       <p className="font-medium">{text}</p>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             </div>

             <div className="space-y-12">
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-velora-blue-dark text-white p-12 rounded-[40px] relative overflow-hidden"
               >
                 <Baby size={120} className="absolute -bottom-10 -right-10 text-white/5 transform -rotate-12" />
                 <div className="relative z-10">
                    <h2 className="text-3xl font-display font-black mb-8">{childhood.title}</h2>
                    <p className="text-lg text-white/80 leading-relaxed font-medium">
                      {childhood.content}
                    </p>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="p-10 border-2 border-velora-border rounded-[40px]"
               >
                 <h2 className="text-2xl font-display font-black text-velora-text mb-6">Condiciones Asociadas</h2>
                 <div className="grid gap-4">
                   {associated.map((text, i) => (
                     <div key={i} className="flex items-center space-x-3 text-sm text-velora-text font-bold">
                       <ShieldAlert size={18} className="text-velora-accent" />
                       <span>{text}</span>
                     </div>
                   ))}
                 </div>
               </motion.div>
             </div>
           </div>

           {/* DIFFERENTIAL DIAGNOSIS */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[#F8FBFE] p-16 rounded-[60px] border border-velora-border"
           >
             <div className="text-center mb-16">
               <div className="inline-flex items-center space-x-2 bg-velora-accent/10 px-4 py-2 rounded-full text-velora-accent mb-6 text-[#2E4A66]">
                 <GitCompare size={18} />
                 <span className="text-xs font-black uppercase tracking-widest">Diferenciación</span>
               </div>
               <h2 className="text-4xl font-display font-black text-velora-text mb-6">
                 {differential.title}
               </h2>
               <p className="text-lg text-velora-muted max-w-3xl mx-auto">
                 {differential.intro}
               </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
               {differential.comparisons.map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-velora-border hover:shadow-md transition-shadow">
                   <h4 className="text-xl font-black text-velora-accent mb-4">{item.condition}</h4>
                   <p className="text-sm text-velora-text leading-relaxed font-medium">
                     {item.difference}
                   </p>
                 </div>
               ))}
             </div>

             <div className="mt-12 flex flex-wrap justify-center gap-6">
                {differential.keys.map((key, i) => (
                  <div key={i} className="flex items-center space-x-2 border-l-2 border-velora-accent pl-4">
                    <span className="text-xs font-black text-velora-text uppercase tracking-widest">{key}</span>
                  </div>
                ))}
             </div>
           </motion.div>
        </div>
      </section>

      {/* STUDIES SECTION */}
      <section className="py-24 bg-velora-bg/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center space-x-2 bg-velora-accent/10 px-4 py-2 rounded-full text-velora-accent mb-6 text-[#2E4A66]">
                 <BookOpen size={18} />
                 <span className="text-xs font-black uppercase tracking-widest">Investigación</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-black text-velora-text mb-8">
                 {studies.title}
               </h2>
               <div className="space-y-6 mb-10">
                 {studies.points.map((point, i) => (
                   <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
                     <CheckCircle2 className="text-velora-accent shrink-0 mt-1" size={20} />
                     <p className="text-velora-muted font-medium italic">{point}</p>
                   </div>
                 ))}
               </div>
               <p className="text-lg font-bold text-velora-text border-l-4 border-velora-blue-dark pl-6">
                 {studies.message}
               </p>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover" 
                    alt="Lipedema studies"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="absolute -bottom-8 -left-8 bg-velora-accent text-white p-8 rounded-[30px] shadow-2xl max-w-xs">
                 <p className="text-sm font-black uppercase tracking-widest mb-2">Compromiso</p>
                 <p className="font-medium text-white/90">
                    Trabajamos para llevar la ciencia más reciente a tu día a día.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-velora-accent/10 px-4 py-2 rounded-full text-velora-accent mb-6 text-[#2E4A66]">
                <Search size={18} />
                <span className="text-xs font-black uppercase tracking-widest">Detección</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-velora-text mb-8">
                {diagnosis.title}
              </h2>
              
              <div className="bg-velora-bg/30 p-8 rounded-[40px] mb-12">
                <h4 className="text-sm font-black uppercase tracking-widest text-velora-accent mb-6">Señales clave</h4>
                <div className="space-y-4">
                  {diagnosis.signals.map((signal, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-velora-accent shrink-0 mt-2" />
                      <p className="font-bold text-velora-text leading-tight">{signal}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg text-velora-muted font-medium mb-12">
                <p>{diagnosis.content}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-velora-blue-dark">El especialista:</h4>
                  {diagnosis.specialistRole.map((role, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-velora-muted">
                      <CheckCircle2 size={16} className="text-velora-accent" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-velora-blue-dark">Condiciones asociadas:</h4>
                  {diagnosis.associatedConditions.map((cond, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-velora-muted">
                      <div className="w-1 h-1 rounded-full bg-velora-muted/30" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 border-l-4 border-velora-accent bg-velora-bg/10 italic text-velora-muted font-medium">
                {diagnosis.note}
              </div>
            </div>

            <div className="lg:w-1/2 w-full sticky top-24">
              {/* TEST COMPONENT */}
              <div id="test" className="bg-[#102131] rounded-[60px] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  {!showResult ? (
                    <>
                      <div className="flex items-center justify-between mb-12">
                        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-velora-accent">
                          <ClipboardCheck size={18} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">Autoevaluación</span>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
                          Pregunta {testAnswers.filter(a => a !== null).length} de {test.questions.length}
                        </div>
                      </div>

                      <h3 className="text-3xl font-display font-black mb-4">{test.title}</h3>
                      <p className="text-white/60 text-sm mb-12">{test.subtitle}</p>

                      <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar mb-12">
                        {test.questions.map((q, i) => (
                          <div key={i} className="space-y-4 pb-8 border-b border-white/10 last:border-0">
                            <p className="text-lg font-medium leading-tight">{i + 1}. {q}</p>
                            <div className="flex gap-4">
                              <button 
                                onClick={() => handleAnswer(i, true)}
                                className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${
                                  testAnswers[i] === true 
                                  ? 'bg-velora-accent border-velora-accent text-white shadow-lg shadow-velora-accent/20' 
                                  : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                              >
                                Sí
                              </button>
                              <button 
                                onClick={() => handleAnswer(i, false)}
                                className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${
                                  testAnswers[i] === false 
                                  ? 'bg-white border-white text-velora-blue-dark shadow-lg shadow-white/10' 
                                  : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-6">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-velora-accent"
                            initial={{ width: 0 }}
                            animate={{ width: `${(testAnswers.filter(a => a !== null).length / test.questions.length) * 100}%` }}
                          />
                        </div>
                        <button 
                          disabled={!isTestComplete}
                          onClick={() => setShowResult(true)}
                          className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                            isTestComplete 
                            ? 'bg-velora-accent text-white hover:bg-white hover:text-velora-accent shadow-xl active:scale-[0.98]' 
                            : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'
                          }`}
                        >
                          Ver mi resultado
                        </button>
                      </div>
                    </>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-24 h-24 bg-velora-accent/20 rounded-full flex items-center justify-center mx-auto mb-10">
                        <Zap className="text-velora-accent" size={48} />
                      </div>
                      <p className="text-velora-accent font-black uppercase tracking-[0.3em] text-xs mb-4">Tu Resultado</p>
                      <h3 className="text-5xl font-display font-black mb-6">{calculateResult().label}</h3>
                      <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-sm mx-auto">
                        {calculateResult().description}
                      </p>
                      
                      <div className="bg-white/5 rounded-3xl p-6 mb-12 border border-white/10">
                        <p className="text-sm text-white/50 italic">
                          {test.disclaimer}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <button 
                          onClick={() => navigate('/nutrition')}
                          className="w-full bg-white text-velora-blue-dark py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-velora-accent hover:text-white transition-all flex items-center justify-center space-x-3"
                        >
                          <span>Empezar programa</span>
                          <ArrowRight size={18} />
                        </button>
                        <button 
                          onClick={resetTest}
                          className="w-full border border-white/20 text-white/60 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:text-white transition-all flex items-center justify-center space-x-2"
                        >
                          <RotateCcw size={16} />
                          <span>Repetir test</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
                {/* Decoration */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-velora-accent/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-velora-blue-dark relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-12 leading-tight tracking-tight">
            {finalCta.headline}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
             {finalCta.options.map((option, i) => (
               <button 
                key={i}
                onClick={() => navigate(option.link)}
                className={`px-10 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center space-x-3 group ${
                  i === 0 
                  ? 'bg-velora-accent text-white hover:bg-white hover:text-velora-accent' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <span>{option.text}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
             ))}
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-velora-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-velora-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      </section>
    </div>
  );
}
