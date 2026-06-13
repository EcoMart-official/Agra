import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Heart, Star, Users, Brain, BookOpen } from 'lucide-react';

export default function WhyChooseKidzee() {
  const reasons = [
    {
      title: "Interactive Learning",
      desc: "Our curriculum ensures that learning is a joyful experience through play and exploration.",
      icon: Sparkles,
      color: "bg-[#FDB813]/10 text-[#FDB813]"
    },
    {
      title: "Child Safety First",
      desc: "100% CCTV monitored premises with background-verified staff.",
      icon: Shield,
      color: "bg-[#FDB813]/10 text-[#FDB813]"
    },
    {
      title: "Holistic Development",
      desc: "We focus on cognitive, emotional, social, and physical milestones.",
      icon: Brain,
      color: "bg-[#FDB813]/10 text-[#FDB813]"
    },
    {
      title: "Passionate Educators",
      desc: "Highly trained teachers who nurture every child's unique potential.",
      icon: Heart,
      color: "bg-[#FDB813]/10 text-[#FDB813]"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FDB813] font-bold tracking-wider uppercase text-sm mb-4"
          >
            Why Choose Kidzee Egra
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading"
          >
            A Place Where Potential Blossoms
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We don't just teach; we guide, inspire, and nurture. Discover why hundreds of parents trust us with their child's early education.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(253,184,19,0.15)] transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed font-sans">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
