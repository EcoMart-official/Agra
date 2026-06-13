import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProgramPreview() {
  const programs = [
    {
      title: "Playgroup",
      age: "1.5 - 2.5 Years",
      desc: "Setting the foundation for a lifelong love of learning through exploration.",
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop",
      link: "/programs/playgroup",
      bgColor: "bg-[#FDB813]/5"
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 Years",
      desc: "Developing vocabulary, social skills, and creative intelligence seamlessly.",
      img: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=600&auto=format&fit=crop",
      link: "/programs/nursery",
      bgColor: "bg-[#FDB813]/10"
    },
    {
      title: "Junior KG",
      age: "3.5 - 4.5 Years",
      desc: "Enhancing cognitive abilities and problem-solving through play-based tasks.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
      link: "/programs/junior-kg",
      bgColor: "bg-[#FDB813]/5"
    },
    {
      title: "Senior KG",
      age: "4.5 - 5.5 Years",
      desc: "Preparing for formal schooling with advanced early literacy and math.",
      img: "https://images.unsplash.com/photo-1606092195728-328dff12a27e?q=80&w=600&auto=format&fit=crop",
      link: "/programs/senior-kg",
      bgColor: "bg-[#FDB813]/10"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#FDB813] font-bold tracking-wider uppercase text-sm mb-4">Our Programs</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
              Age-Appropriate Learning Journeys
            </h3>
          </div>
          <Link to="/programs" className="group flex items-center text-[#FDB813] font-semibold hover:text-[#e5a910] transition-colors">
            View All Programs 
            <span className="bg-[#FDB813]/10 p-2 rounded-full ml-3 group-hover:bg-[#FDB813]/20 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-[2rem] overflow-hidden group border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 ${prog.bgColor}`}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#1E1E1E]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={prog.img} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-[#FDB813] px-3 py-1 rounded-full text-xs font-bold text-[#1E1E1E]">
                  {prog.age}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{prog.title}</h4>
                <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-200/60 leading-relaxed">
                  {prog.desc}
                </p>
                <Link to={prog.link} className="inline-flex items-center text-[#FDB813] font-semibold hover:text-[#e5a910]">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
