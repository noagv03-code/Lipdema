
import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Eye, PenTool, Search, TrendingUp } from 'lucide-react';
import { BRAND } from '../constants';

export default function StrategyDashboard() {
  return (
    <div className="py-24 bg-velora-bg text-velora-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-velora-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-velora-accent/30">
              <TrendingUp size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-display font-black text-velora-text tracking-tight uppercase">Plano de Estrategia de Marca</h1>
              <p className="text-velora-accent font-black text-[10px] uppercase tracking-[0.4em] mt-1">Fundación Operativa</p>
            </div>
          </div>
          <p className="text-velora-muted text-xl max-w-4xl font-medium leading-relaxed">
            Este espacio de trabajo describe la base estratégica de <strong>{BRAND.name}</strong>. 
            Todas las decisiones visuales y de redacción fluyen de estos pilares fundamentales, reforzando la estética tranquila y basada en la confianza.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* CORE IDENTITY */}
          <div className="bg-white border border-velora-border rounded-[48px] p-12 shadow-sm">
            <h2 className="text-2xl font-display font-black mb-10 flex items-center space-x-4 text-velora-text">
              <div className="w-8 h-8 bg-velora-accent/10 rounded-lg flex items-center justify-center text-velora-accent">
                <Target size={20} />
              </div>
              <span>Identidad Fundamental</span>
            </h2>
            <div className="space-y-10">
              <div>
                <p className="text-[11px] uppercase font-black text-velora-accent tracking-[0.2em] mb-3">Propósito / Misión</p>
                <p className="text-xl italic font-serif text-velora-text leading-relaxed">{BRAND.mission}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase font-black text-velora-muted tracking-[0.2em] mb-3">Visión a Largo Plazo</p>
                <p className="text-velora-muted font-medium">{BRAND.vision}</p>
              </div>
              <div className="flex space-x-10">
                <div>
                  <p className="text-[11px] uppercase font-black text-velora-muted tracking-[0.2em] mb-3">Valores de Marca</p>
                  <div className="flex flex-wrap gap-2">
                    {BRAND.values.map(v => (
                      <span key={v} className="bg-velora-accent/10 text-velora-accent px-4 py-1.5 rounded-xl text-[10px] uppercase tracking-[0.1em] font-black border border-velora-accent/10">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TARGET AUDIENCE */}
          <div className="bg-white border border-velora-border rounded-[48px] p-12 shadow-sm">
            <h2 className="text-2xl font-display font-black mb-10 flex items-center space-x-4 text-velora-text">
              <div className="w-8 h-8 bg-velora-accent/10 rounded-lg flex items-center justify-center text-velora-accent">
                <Heart size={20} />
              </div>
              <span>El Cliente Ideal</span>
            </h2>
            <div className="space-y-10">
              <div>
                <p className="text-[11px] uppercase font-black text-velora-accent tracking-[0.2em] mb-3">El Avatar</p>
                <p className="text-velora-text font-medium leading-relaxed">{BRAND.audience}</p>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-[11px] uppercase font-black text-red-500 tracking-[0.2em] mb-3">Puntos de Dolor</p>
                  <ul className="text-[13px] text-velora-muted font-bold space-y-3">
                    {BRAND.emotionalDrivers.painPoints.map(p => <li key={p} className="flex items-start"><span className="text-red-400 mr-2">•</span> {p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase font-black text-velora-accent tracking-[0.2em] mb-3">Deseos Fundamentales</p>
                  <ul className="text-[13px] text-velora-muted font-bold space-y-3">
                    {BRAND.emotionalDrivers.desires.map(d => <li key={d} className="flex items-start"><span className="text-velora-accent mr-2">•</span> {d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL & COPY DIRECTION */}
        <div className="grid md:grid-cols-3 gap-10">
           <div className="bg-white border border-velora-border rounded-[40px] p-10 shadow-sm">
            <h3 className="text-[11px] font-black text-velora-accent uppercase tracking-[0.3em] mb-8 flex items-center">
              <PenTool size={16} className="mr-3" /> Voz y Tono
            </h3>
            <p className="text-[15px] text-velora-muted leading-relaxed font-serif italic">
              Empática pero fuerte. Consciente de la ciencia pero no clínica. Orientación clara y sencilla que brinda alivio emocional y acción práctica.
            </p>
          </div>
          <div className="bg-white border border-velora-border rounded-[40px] p-10 shadow-sm">
            <h3 className="text-[11px] font-black text-velora-accent uppercase tracking-[0.3em] mb-8 flex items-center">
              <Eye size={16} className="mr-3" /> Estética
            </h3>
            <p className="text-[15px] text-velora-muted leading-relaxed font-serif italic">
              Estética Azul Claro. Azules suaves basados en la confianza, texto en azul marino de alto contraste, esquinas redondeadas limpias y fotografía de estilo de vida auténtica.
            </p>
          </div>
          <div className="bg-white border border-velora-border rounded-[40px] p-10 shadow-sm">
            <h3 className="text-[11px] font-black text-velora-accent uppercase tracking-[0.3em] mb-8 flex items-center">
              <Search size={16} className="mr-3" /> Pilar SEO
            </h3>
            <p className="text-[15px] text-velora-muted leading-relaxed font-serif italic">
              Dominando términos como 'gestión de etapas de Lipedema', 'soporte de Lipedema basado en la confianza' y 'protocolos de estilo de vida linfático'.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
