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
import Programs from './pages/Programs';
import StrategyDashboard from './pages/StrategyDashboard';
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
              <Route path="/programs" element={<Programs />} />
              <Route path="/strategy" element={<StrategyDashboard />} />
            </Routes>
          </PageTransition>
        </main>
        
        <footer className="bg-velora-bg border-t border-white/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase opacity-40 font-medium">
            <div className="flex gap-8 mb-4 md:mb-0">
              <span className="text-velora-accent font-bold">Science-Backed</span>
              <span>Supportive</span>
              <span>Empowering</span>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">© 2026 VELORA LIFESTYLE. NON-MEDICAL ADVICE.</p>
              <div className="flex justify-center md:justify-end gap-6">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Youtube</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

