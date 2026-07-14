import { motion } from 'motion/react';
import { fadeUp, staggerContainer, zoomIn } from '../utils/animations';
import { Globe2, Users, GraduationCap, Laptop, MessageCircle, Languages, Handshake, PartyPopper, Utensils, Plane, Music, Shirt } from 'lucide-react';

export const Slide4 = () => {
  const cards = [
    { icon: Globe2, title: "International Comm.", desc: "Speak with anyone anywhere.", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Users, title: "Make Friends", desc: "Build global relationships.", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: GraduationCap, title: "Education", desc: "Access the world's best resources.", color: "text-orange-600", bg: "bg-orange-100" },
    { icon: Laptop, title: "Business & Tech", desc: "The language of modern industry.", color: "text-blue-600", bg: "bg-blue-100" },
  ];

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8 relative">
      <motion.div variants={fadeUp} className="text-center mb-16">
         <h2 className="text-[56px] md:text-[72px] font-extrabold tracking-tight text-slate-900">Benefits of English</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 flex items-center gap-8 cursor-pointer border border-slate-50 transition-all hover:shadow-2xl hover:shadow-blue-900/10"
          >
            <div className={`w-20 h-20 shrink-0 rounded-[24px] flex items-center justify-center ${card.bg}`}>
              <card.icon size={36} className={card.color} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-lg font-light leading-snug">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export const Slide5 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8 relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#2563EB05_0%,_transparent_50%)] z-0 pointer-events-none" />
    <motion.div variants={fadeUp} className="text-center mb-24 z-10">
      <h2 className="text-[56px] md:text-[72px] font-extrabold tracking-tight text-slate-900">Breaking Language Barriers</h2>
    </motion.div>
    <div className="flex flex-col items-center gap-16 w-full max-w-4xl z-10">
      <motion.div variants={zoomIn} className="flex justify-between items-center w-full relative px-10">
         {/* Bridge / Connection Line */}
         <div className="absolute top-1/2 left-20 right-20 h-0.5 bg-slate-200 -z-10" />
         
         <div className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-900/10 border border-slate-50 hover:scale-105 transition-transform rotate-[-6deg]">
           <MessageCircle size={64} className="text-blue-600" strokeWidth={1.5} />
         </div>
         <div className="bg-blue-600 p-10 rounded-[40px] shadow-2xl shadow-blue-600/30 hover:scale-105 transition-transform text-white">
           <Handshake size={80} strokeWidth={1.5} />
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-900/10 border border-slate-50 hover:scale-105 transition-transform rotate-[4deg]">
           <Languages size={64} className="text-purple-600" strokeWidth={1.5} />
         </div>
      </motion.div>
      <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-3xl w-full text-center shadow-sm">
         <p className="text-2xl font-light leading-relaxed text-slate-600">
           English removes communication barriers and encourages <span className="font-bold text-slate-900">understanding</span> among different cultures.
         </p>
      </motion.div>
    </div>
  </motion.div>
);

export const Slide6 = () => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col items-center justify-center p-8">
    <motion.div variants={fadeUp} className="text-center mb-16">
      <h2 className="text-[56px] md:text-[72px] font-extrabold tracking-tight text-slate-900">Cultural Exchange</h2>
      <p className="text-2xl text-slate-500 mt-4 font-light">Discovering traditions through a common language.</p>
    </motion.div>
    <div className="grid grid-cols-3 gap-6 max-w-4xl w-full">
       {[
         { icon: PartyPopper, label: "Festivals", color: "text-pink-600", bg: "bg-pink-100", col: "col-span-2", h: "h-48" },
         { icon: Utensils, label: "Food", color: "text-orange-600", bg: "bg-orange-100", col: "col-span-1", h: "h-48" },
         { icon: Plane, label: "Travel", color: "text-blue-600", bg: "bg-blue-100", col: "col-span-1", h: "h-48" },
         { icon: Music, label: "Music", color: "text-purple-600", bg: "bg-purple-100", col: "col-span-1", h: "h-48" },
         { icon: Shirt, label: "Clothes", color: "text-blue-700", bg: "bg-blue-50", col: "col-span-1", h: "h-48" },
       ].map((item, i) => (
         <motion.div key={i} variants={zoomIn} className={`p-8 rounded-3xl ${item.bg} ${item.col} ${item.h} flex flex-col items-center justify-center gap-4 shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-all border border-white`}>
           <item.icon size={48} className={item.color} strokeWidth={1.5} />
           <span className={`text-xl font-bold tracking-tight ${item.color}`}>{item.label}</span>
         </motion.div>
       ))}
    </div>
  </motion.div>
);
