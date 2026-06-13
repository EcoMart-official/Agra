import React from 'react';
import { motion } from 'framer-motion';

export default function PentemindPedagogy() {
  const pillars = [
    { name: "Being Smart", desc: "Understanding oneself and one’s emotions." },
    { name: "Word Smart", desc: "Language and reading development." },
    { name: "Number Smart", desc: "Logical reasoning and math logic." },
    { name: "Design Smart", desc: "Visual, spatial learning and creativity." },
    { name: "Nature Smart", desc: "Connecting with the environment." }
  ];

  return (
    <section className="py-24 bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-[#FDB813]/30 text-[#FDB813] text-sm font-semibold mb-6">
            Exclusive to Kidzee
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pt-2 leading-tight" style={{ fontFamily: 'Poppins' }}>
            The <span className="text-[#FDB813]">Péntemind</span> Pedagogy
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed font-sans">
            "Every Child is Unique, Every Child Matters."
            Our pedagogy is designed to nurture the diverse intelligences in children. We don't just teach subjects; we develop the whole mind.
          </p>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#FDB813] flex items-center justify-center shrink-0 text-[#FDB813] font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{pillar.name}</h4>
                  <p className="text-gray-400 text-sm">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="relative w-full aspect-square bg-[#FDB813]/10 rounded-full flex items-center justify-center overflow-hidden border border-[#FDB813]/30">
             <div className="absolute inset-4 rounded-full border border-dashed border-[#FDB813]/50 animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute inset-12 rounded-full border border-[#FDB813]/20 animate-[spin_40s_linear_infinite_reverse]"></div>
             <img 
               src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" 
               alt="Creative learning" 
               className="w-3/4 h-3/4 object-cover rounded-full z-10 opacity-90 hover:opacity-100 transition-opacity blur-[1px] hover:blur-none"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
