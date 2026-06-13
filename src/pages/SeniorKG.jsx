import React from 'react';
import PageHero from '../components/PageHero';
import { Check } from 'lucide-react';

export default function SeniorKG() {
  return (
    <div>
      <PageHero 
        title="Senior KG" 
        subtitle="Age: 4.5 - 5.5 Years. School readiness and structured learning."
        image="https://images.unsplash.com/photo-1606092195728-328dff12a27e?q=80&auto=format&fit=crop"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FDB813] mb-6">About the Program</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans">
            Our Senior KG program thoroughly prepares children for formal schooling. We ensure they master the foundational concepts of language, math, and general awareness, instilling a sense of confidence and independence before they enter Grade 1.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reading and writing simple sentences",
              "Advanced pre-math concepts",
              "General knowledge and awareness",
              "Public speaking and confidence",
              "Critical thinking challenges",
              "Smooth transition to formal schooling"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E5A910]/10 flex items-center justify-center text-[#E5A910]">
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
