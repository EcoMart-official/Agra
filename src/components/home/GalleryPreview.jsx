import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1576080356611-6652da00c3cd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606092195728-328dff12a27e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-[#F8F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#FDB813] font-bold tracking-wider uppercase text-sm mb-4">Glimpses of Joy</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Life at Kidzee Egra
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl overflow-hidden relative group ${idx === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}
            >
              <img src={img} alt="Kidzee Activity" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery" className="inline-block bg-[#FDB813] text-[#1E1E1E] px-8 py-3 rounded-full font-bold hover:bg-[#e6a611] transition-all shadow-xl shadow-[#FDB813]/30">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
