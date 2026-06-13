import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Shield, Music, BookOpen, Users, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import WhyChooseKidzee from "../components/home/WhyChooseKidzee";
import PentemindPedagogy from "../components/home/PentemindPedagogy";
import ProgramPreview from "../components/home/ProgramPreview";
import GalleryPreview from "../components/home/GalleryPreview";

const bgImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606092195728-328dff12a27e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2000&auto=format&fit=crop"
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1E1E1E]">
        {bgImages.map((img, idx) => (
           <div
             key={idx}
             className={`absolute inset-0 z-0 transition-opacity duration-1000 ${bgIndex === idx ? 'opacity-100' : 'opacity-0'}`}
             style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
           >
             <div className="absolute inset-0 bg-[#1E1E1E]/60"></div>
           </div>
        ))}
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 text-center w-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#FDB813] font-semibold text-sm mb-6 shadow-sm border border-white/20">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              Admission Open 2024-25
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white" style={{ fontFamily: 'Poppins' }}>
              Where Kids <span className="text-[#FDB813]">Love to Learn</span> & Grow.
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
              Every child is unique, every child matters. Provide your child with a strong foundation today for a successful tomorrow at Kidzee Egra.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <Link to="/admissions" className="bg-[#FDB813] text-[#1E1E1E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e6a611] transition-all transform hover:scale-105 shadow-xl shadow-[#FDB813]/30 flex items-center justify-center">
                Enroll Your Child <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+919091908900" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1E1E1E] transition-all flex items-center justify-center">
                <PlayCircle className="mr-2 w-5 h-5" /> Book a Tour
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Floating Statistics */}
      <section className="py-12 bg-white relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-t-[3rem] shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { value: "500+", label: "Happy Kids" },
            { value: "15+", label: "Expert Teachers" },
            { value: "10+", label: "Learning Zones" },
            { value: "4.9", label: "Parent Rating", icon: <Star className="inline w-4 h-4 mb-1 text-[#FDB813] fill-[#FDB813]" /> }
          ].map((stat, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="text-center"
             >
                <div className="text-3xl md:text-4xl font-bold text-[#FDB813] mb-2 flex items-center justify-center gap-1">{stat.value} {stat.icon && stat.icon}</div>
                <div className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Welcome To Kidzee Egra */}
      <section className="py-24 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#FDB813] font-bold tracking-wider uppercase text-sm mb-4">Welcome to Kidzee Egra</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>A Foundation Crafted for Brilliance</h3>
            <p className="text-lg text-gray-600">
              We provide a safe, nurturing and engaging environment where children from Playgroup to Senior KG develop fundamental skills through activity-based learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nurturing Care", desc: "A home away from home with trained professionals.", icon: Heart, color: "bg-[#FDB813]/10 text-[#FDB813]" },
              { title: "Péntemind Pedagogy", desc: "India's only university-verified preschool curriculum.", icon: BookOpen, color: "bg-[#FDB813]/10 text-[#FDB813]" },
              { title: "Safe Campus", desc: "CCTV monitored, child-friendly spaces ensuring complete safety.", icon: Shield, color: "bg-[#FDB813]/10 text-[#FDB813]" }
            ].map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-50"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed font-sans">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseKidzee />
      <PentemindPedagogy />
      <ProgramPreview />
      <GalleryPreview />

      {/* CTA Section */}
      <section className="py-24 bg-[#FDB813] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-[#1E1E1E]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>Give Your Child the Best Start!</h2>
            <p className="text-xl text-[#1E1E1E]/80 mb-10 font-sans max-w-2xl mx-auto">
              Admissions are now open for the upcoming session. Secure your child's spot at Kidzee Egra today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/admissions" className="bg-[#1E1E1E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                Apply for Admission
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-[#1E1E1E] text-[#1E1E1E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1E1E1E]/10 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
