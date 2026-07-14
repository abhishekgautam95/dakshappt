import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { slideVariants } from './utils/animations';
import { ChevronLeft, ChevronRight, MonitorPlay } from 'lucide-react';

import { Slide0 } from './slides/Slide0';
import { Slide1, Slide2, Slide3 } from './slides/Slide1To3';
import { Slide4, Slide5, Slide6 } from './slides/Slide4To6';
import { Slide7, Slide8, Slide9 } from './slides/Slide7To9';

const slides = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];

export default function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage(([currentPage]) => {
      const nextPage = currentPage + newDirection;
      if (nextPage >= 0 && nextPage < slides.length) {
        return [nextPage, newDirection];
      }
      return [currentPage, 0];
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keydown if user is typing in an input field (like Presenter Name)
      if (e.target instanceof HTMLInputElement) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const CurrentSlide = slides[page];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-50 flex items-center justify-center selection:bg-blue-200">
      
      {/* Slide Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center w-full h-full p-4 md:p-8"
        >
          {/* 16:9 Aspect Ratio constrained inner wrapper for typical presentation feel */}
          <div 
            className="w-full h-full max-w-[1400px] max-h-[850px] relative bg-white text-slate-900 rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100"
            style={{background: "radial-gradient(circle at top right, #DBEAFE, transparent 40%), radial-gradient(circle at bottom left, #EFF6FF, transparent 40%), #ffffff"}}
          >
             <CurrentSlide />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Presentation UI & Navigation */}
      <div className="absolute top-10 left-12 flex items-center gap-3 text-blue-900 z-50">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
          <MonitorPlay size={20} className="text-white" />
        </div>
        <span className="text-sm font-bold tracking-widest uppercase text-blue-900">Live Presentation</span>
      </div>

      <div className="absolute top-10 right-12 flex items-center z-50">
        <div className="text-xs font-medium text-slate-400 tracking-widest uppercase bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-100">
          Slide {String(page + 1).padStart(2, '0')} <span className="mx-2 opacity-30">/</span> {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-50">
        <button 
          onClick={() => paginate(-1)} 
          disabled={page === 0} 
          className="p-3 rounded-full bg-white text-slate-400 hover:text-blue-600 shadow-xl shadow-blue-900/5 border border-slate-100 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg shadow-blue-900/5 border border-slate-100">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className="group py-1 flex items-center"
            >
              <div className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? 'bg-blue-600 w-8' : 'bg-slate-200 w-2 group-hover:bg-blue-400'
              }`} />
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => paginate(1)} 
          disabled={page === slides.length - 1} 
          className="p-3 rounded-full bg-white text-slate-400 hover:text-blue-600 shadow-xl shadow-blue-900/5 border border-slate-100 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
