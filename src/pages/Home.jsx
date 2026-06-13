import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Shield, Music, BookOpen, Users, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import WhyChooseKidzee from "../components/home/WhyChooseKidzee";
import PentemindPedagogy from "../components/home/PentemindPedagogy";
import ProgramPreview from "../components/home/ProgramPreview";
import GalleryPreview from "../components/home/GalleryPreview";

export default function Home() {

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#F8F9FC] pt-20 lg:pt-0">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FDB813\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start pt-10 lg:pt-0"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-white text-[#FDB813] font-semibold text-sm mb-6 shadow-sm border border-[#FDB813]/20">
                <Sparkles className="w-4 h-4 inline-block mr-2" />
                Admission Open 2024-25
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900" style={{ fontFamily: 'Poppins' }}>
                Where Kids <span className="text-[#FDB813]">Love to Learn</span> & Grow.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-sans">
                Every child is unique, every child matters. Provide your child with a strong foundation today for a successful tomorrow at Kidzee Egra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/admissions" className="bg-[#FDB813] text-[#1E1E1E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e6a611] transition-all transform hover:scale-105 shadow-xl shadow-[#FDB813]/30 flex items-center justify-center">
                  Enroll Your Child <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919091908900" className="bg-white text-[#1E1E1E] border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-[#FDB813] hover:text-[#FDB813] transition-all flex items-center justify-center shadow-sm">
                  <PlayCircle className="mr-2 w-5 h-5" /> Book a Tour
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-12 lg:mt-0 pb-12 lg:pb-0"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#FDB813] rounded-[3rem] rotate-6 opacity-20 blur-2xl"></div>
                
                <div className="relative rounded-[3rem] w-full h-full z-10 shadow-2xl border-8 border-white overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop" 
                    alt="Happy preschool children learning" 
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block">
                  <Star className="w-10 h-10 text-[#FDB813] fill-[#FDB813]" />
                </motion.div>

                <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute -bottom-6 -right-2 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E1E1E]/5 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E1E1E] fill-[#1E1E1E]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl text-gray-900 leading-tight">100%</div>
                    <div className="text-xs sm:text-sm text-gray-500">Child Safety</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Floating Statistics */}
      <section className="py-12 bg-white border-b border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
