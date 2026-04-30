/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Movement from './pages/Movement';
import LipedemaTest from './pages/LipedemaTest';
import DailyPlans from './pages/DailyPlans';
import LipedemaInfo from './pages/LipedemaInfo';
import { motion, AnimatePresence } from 'motion/react';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-velora-bg flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/movement" element={<Movement />} />
              <Route path="/lipedema-info" element={<LipedemaInfo />} />
              <Route path="/daily-plans" element={<DailyPlans />} />
              <Route path="/test" element={<LipedemaTest />} />
            </Routes>
          </PageTransition>
        </main>
        
        <footer className="bg-velora-blue-dark border-t border-velora-blue-dark py-16 text-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[11px] tracking-wider uppercase font-semibold">
            <div className="flex gap-10 mb-6 md:mb-0">
              <span className="text-velora-accent font-bold">Espacio Seguro</span>
              <span>Basado en Evidencia</span>
              <span>Soporte Tranquilo</span>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-3">© 2026 VELORA WELLNESS. EMPODERANDO TU VIAJE.</p>
              <div className="flex justify-center md:justify-end">
                <span className="text-velora-accent font-bold">Made By Noa González</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

