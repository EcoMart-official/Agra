import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    { q: "What is the admission process at Kidzee Egra?", a: "The admission process involves an initial inquiry, campus tour, registration with document submission, and fee payment for enrollment." },
    { q: "What are the school timings?", a: "School timings vary by program. Please contact the administration office for specific timings for your child's age group." },
    { q: "Do you provide transport facilities?", a: "Yes, safe and trusted transport facilities may be available. Please check with the front desk regarding routes." },
    { q: "Is the campus CCTV monitored?", a: "Yes, our entire campus is under 100% CCTV surveillance to ensure the utmost safety of the children." },
    { q: "What is the teacher-to-student ratio?", a: "We maintain a low teacher-to-student ratio to ensure personalized attention for every child." }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div>
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common inquiries below." />
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                  {openIdx === idx ? <ChevronUp className="w-5 h-5 text-[#FDB813]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-[#F8F9FC]"
                    >
                      <div className="p-6 text-gray-600 font-sans leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
