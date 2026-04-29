
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Nutrición', path: '/nutrition' },
    { label: 'Movimiento', path: '/movement' },
    { label: 'Planes Diarios', path: '/daily-plans' },
    { label: 'Guía de Estrategia', path: '/strategy', highlight: true }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-velora-nav/80 backdrop-blur-md border-b border-velora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-velora-accent rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 shadow-sm">
              <div className="w-5 h-5 border-2 border-white rounded-lg"></div>
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-velora-text">VELORA</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `transition-all hover:text-velora-accent ${
                    isActive ? 'text-velora-accent' : 'text-velora-muted'
                  } ${link.highlight ? 'bg-velora-accent text-white px-6 py-2.5 rounded-lg font-bold hover:bg-velora-text shadow-sm' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-velora-accent" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-velora-nav border-b border-velora-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-velora-muted hover:text-velora-accent"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
