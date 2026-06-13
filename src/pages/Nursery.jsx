import SEO from '../components/SEO';
import React from 'react';
import PageHero from '../components/PageHero';
import { Check } from 'lucide-react';

export default function Nursery() {
  return (
    <div>
      <SEO title="ursery" url="/programs/nursery" />
      <PageHero 
        title="Nursery" 
        subtitle="Age: 2.5 - 3.5 Years. Fostering independence and expression."
        image="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&auto=format&fit=crop"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FDB813] mb-6">About the Program</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans">
            The Nursery program focuses on independent learning and self-expression. At this stage, cognitive and language skills are developing rapidly. We provide a rich environment where children can express themselves, understand concepts, and interact with peers confidently.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Enhanced vocabulary formulation",
              "Pre-math and pre-reading skills",
              "Creative thinking and arts",
              "Independence in daily habits",
              "Expressive language development",
              "Teamwork and collaboration"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E]/10 flex items-center justify-center text-[#1E1E1E]">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
