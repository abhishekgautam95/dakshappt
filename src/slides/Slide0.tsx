import { motion } from 'motion/react';
import { fadeUp, staggerContainer, zoomIn } from '../utils/animations';
import { Sparkles } from 'lucide-react';

export const Slide0 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F59E0B08_0%,_transparent_70%)] z-0" />
    
    <motion.div variants={zoomIn} className="absolute inset-0 flex items-center justify-center opacity-30 -z-10 pointer-events-none">
      <div className="w-[800px] h-[800px] border-[0.5px] border-orange-300 rounded-full absolute" />
      <div className="w-[600px] h-[600px] border-[0.5px] border-blue-300 rounded-full absolute" />
    </motion.div>

    <motion.div variants={fadeUp} className="text-center z-10 relative flex flex-col items-center">
      <div className="bg-white p-6 rounded-3xl shadow-xl shadow-orange-500/10 border border-slate-50 mb-10 rotate-[-4deg] hover:scale-105 transition-transform">
        <Sparkles size={48} className="text-orange-500" strokeWidth={1.5} />
      </div>
      <h1 className="text-[80px] md:text-[120px] font-extrabold leading-[1] tracking-tight text-slate-900 mb-8">
        Jai <br/><span className="text-orange-500">Swaminarayan</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.2em]">
        Welcome to the Presentation
      </p>
    </motion.div>
  </motion.div>
);
