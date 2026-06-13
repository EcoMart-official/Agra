import SEO from '../components/SEO';
import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Classroom', 'Events', 'Playtime'];

  const images = [
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600", category: "Classroom" },
    { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600", category: "Playtime" },
    { src: "https://images.unsplash.com/photo-1606092195728-328dff12a27e?q=80&w=600", category: "Events" },
    { src: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=600", category: "Classroom" },
    { src: "https://images.unsplash.com/photo-1576080356611-6652da00c3cd?q=80&w=600", category: "Playtime" },
    { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600", category: "Events" }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div>
      <SEO title="allery" url="/gallery" />
      <PageHero 
        title="Our Gallery" 
        subtitle="Moments of joy, learning, and growth."
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === cat ? 'bg-[#FDB813] text-[#1E1E1E]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
               >
                 {cat}
               </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={idx}
                  className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img src={img.src} alt="Gallery item" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold">
                    View
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-[#1E1E1E] transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
