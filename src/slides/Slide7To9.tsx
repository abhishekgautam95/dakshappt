import { motion } from 'motion/react';
import { fadeUp, staggerContainer, zoomIn } from '../utils/animations';
import { GraduationCap, Building2, Laptop, Users2, Quote, Smile, PartyPopper } from 'lucide-react';

export const Slide7 = () => {
  const steps = [
    { icon: GraduationCap, title: "Students", desc: "Studying abroad", color: "bg-blue-600", shadow: "shadow-blue-600/30" },
    { icon: Building2, title: "Companies", desc: "International business", color: "bg-purple-600", shadow: "shadow-purple-600/30" },
    { icon: Laptop, title: "Learning", desc: "Online education", color: "bg-orange-500", shadow: "shadow-orange-500/30" },
    { icon: Users2, title: "Teamwork", desc: "Global collaboration", color: "bg-blue-800", shadow: "shadow-blue-900/30" }
  ];
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8 relative">
      <motion.div variants={fadeUp} className="text-center mb-24">
        <h2 className="text-[56px] md:text-[72px] font-extrabold tracking-tight text-slate-900">Real-Life Examples</h2>
      </motion.div>
      <div className="flex justify-between items-start w-full max-w-5xl relative">
         <div className="absolute top-10 left-16 right-16 h-0.5 bg-slate-200 -z-10" />
         {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center w-56 relative group">
               <div className={`w-20 h-20 rounded-3xl text-white ${step.color} flex items-center justify-center shadow-xl ${step.shadow} mb-8 transition-transform group-hover:-translate-y-2`}>
                 <step.icon size={32} strokeWidth={2} />
               </div>
               <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">{step.title}</h3>
               <p className="text-slate-500 text-lg font-light leading-snug">{step.desc}</p>
            </motion.div>
         ))}
      </div>
    </motion.div>
  );
}

export const Slide8 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-30 -z-10 pointer-events-none">
      <div className="w-[800px] h-[800px] border-[0.5px] border-blue-300 rounded-full absolute" />
      <div className="w-[600px] h-[600px] border-[0.5px] border-purple-300 rounded-full absolute" />
    </div>

    <motion.div variants={zoomIn} className="bg-white p-20 rounded-[48px] shadow-2xl shadow-blue-900/10 border border-slate-50 max-w-4xl w-full relative z-10">
      <Quote size={80} className="text-blue-100 absolute top-12 left-12 -z-10 rotate-180" />
      <h2 className="text-sm font-bold text-blue-600 mb-10 text-center tracking-widest uppercase font-sans">Conclusion</h2>
      <p className="text-3xl md:text-4xl text-slate-800 leading-relaxed text-center font-light">
        English is more than just a language. <br/><br/>
        It is a <span className="font-bold text-slate-900">bridge</span> that connects people,
        promotes understanding, encourages friendship, and <span className="font-bold text-slate-900">celebrates diversity</span>.
      </p>
    </motion.div>
  </motion.div>
);

export const Slide9 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8 relative">
    <motion.div variants={zoomIn} className="text-center">
      <h1 className="text-[120px] font-extrabold tracking-tight text-slate-900 mb-2">
        Thank You!
      </h1>
      <p className="text-xl text-slate-400 font-bold tracking-[0.3em] uppercase mb-16 font-sans">
        Jai Swaminarayan
      </p>
      <div className="flex items-center justify-center gap-8">
        <motion.div whileHover={{ scale: 1.1, rotate: 6 }} className="bg-white border border-slate-100 p-8 rounded-3xl text-orange-500 shadow-xl shadow-blue-900/5 cursor-pointer">
          <Smile size={64} strokeWidth={1.5} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1, rotate: -6 }} className="bg-white border border-slate-100 p-8 rounded-3xl text-blue-600 shadow-xl shadow-blue-900/5 cursor-pointer">
          <PartyPopper size={64} strokeWidth={1.5} />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);
