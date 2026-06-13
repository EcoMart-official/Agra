import React from 'react';
import PageHero from '../components/PageHero';
import { Shield, Camera, LayoutGrid, Users, Heart, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Facilities() {
  const facilities = [
    { title: "Safe Environment", icon: Shield, desc: "A totally child-proof infrastructure with soft flooring and rounded corners." },
    { title: "CCTV Monitoring", icon: Camera, desc: "100% camera coverage ensuring complete visibility and safety." },
    { title: "Activity Rooms", icon: LayoutGrid, desc: "Dedicated rooms for cognitive puzzles, music, and art." },
    { title: "Learning Spaces", icon: Users, desc: "Bright, airy classrooms designed for collaborative learning." },
    { title: "Clean Environment", icon: Heart, desc: "Strict hygiene protocols to keep your little ones healthy." },
    { title: "Play Areas", icon: Palette, desc: "Indoor and outdoor safe play zones for physical development." }
  ];

  return (
    <div>
      <PageHero 
        title="Our Facilities" 
        subtitle="A world-class infrastructure designed for safety and learning."
        image="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F8F9FC] rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FDB813]/10 text-[#FDB813] flex items-center justify-center mb-6">
                  <fac.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{fac.title}</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{fac.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
