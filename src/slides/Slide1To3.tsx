import { motion } from 'motion/react';
import { fadeUp, staggerContainer, zoomIn } from '../utils/animations';
import { Globe, Mic, Plane, User, Globe2 } from 'lucide-react';

export const Slide1 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563EB08_0%,_transparent_70%)] z-0" />
    <motion.div variants={zoomIn} className="absolute -right-20 -top-20 text-blue-100 opacity-40 z-0 pointer-events-none">
      <Globe size={600} strokeWidth={0.5} />
    </motion.div>
    <motion.div variants={fadeUp} className="text-center z-10 relative">
       <h1 className="text-[64px] md:text-[96px] font-extrabold leading-[0.9] tracking-tight text-slate-900 mb-6">
        English as a <span className="text-blue-600">Bridge</span>
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-8">
        Between Cultures
      </h2>
      <p className="text-xl md:text-3xl text-slate-500 font-light mb-16 max-w-xl mx-auto leading-relaxed">
        How One Language Connects the World
      </p>
      <input
        type="text"
        placeholder="Enter Presenter Name"
        className="text-center font-bold text-lg md:text-xl text-slate-800 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none w-[350px] py-4 shadow-xl shadow-blue-900/5 transition-all hover:bg-white"
      />
    </motion.div>
  </motion.div>
);

export const Slide2 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex items-center justify-center relative p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center">
      <motion.div variants={fadeUp} className="flex justify-center relative">
        <div className="w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-purple-50 rounded-[64px] flex items-center justify-center relative shadow-2xl shadow-blue-900/10 rotate-[-4deg]">
          <User size={160} className="text-blue-600" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -right-6 top-16 bg-white p-5 rounded-3xl shadow-xl shadow-blue-900/10 rotate-[12deg]"
          >
            <Mic size={40} className="text-purple-600" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div variants={zoomIn} className="bg-white p-14 rounded-[48px] shadow-2xl shadow-blue-900/10 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_#7C3AED15_0%,_transparent_70%)] rounded-bl-full -z-10" />
        <h3 className="text-[40px] font-extrabold tracking-tight text-slate-900 mb-8">Introduction</h3>
        <p className="text-2xl text-slate-500 leading-relaxed font-light">
          Good morning everyone. <br/><br/>
          Today I'd like to talk about <span className="font-bold text-blue-600">English as a bridge</span> between cultures.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

export const Slide3 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8 relative">
    <motion.div variants={fadeUp} className="text-center mb-16 z-10">
      <h2 className="text-[56px] md:text-[72px] font-extrabold tracking-tight text-slate-900 mb-6">English Connects the World</h2>
      <p className="text-2xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
        English is spoken in many countries. It helps people communicate even if they speak different native languages.
      </p>
    </motion.div>

    <motion.div variants={zoomIn} className="relative w-[600px] h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563EB20_0%,_transparent_70%)] rounded-full blur-3xl" />
      <div className="bg-white p-8 rounded-full shadow-2xl shadow-blue-900/10 relative z-10 border border-slate-50">
        <Globe2 size={200} className="text-blue-600" strokeWidth={1} />
      </div>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute inset-0">
         <div className="absolute top-4 left-1/4 bg-white p-4 rounded-3xl shadow-xl shadow-orange-500/10 border border-slate-100 rotate-[20deg]">
            <Plane size={32} className="text-orange-500" strokeWidth={1.5} />
         </div>
         <div className="absolute bottom-4 right-1/4 bg-white p-4 rounded-3xl shadow-xl shadow-purple-500/10 border border-slate-100 -rotate-[40deg]">
            <Plane size={32} className="text-purple-600" strokeWidth={1.5} />
         </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
