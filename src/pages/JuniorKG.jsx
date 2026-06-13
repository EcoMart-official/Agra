import React from 'react';
import PageHero from '../components/PageHero';
import { Check } from 'lucide-react';

export default function JuniorKG() {
  return (
    <div>
      <PageHero 
        title="Junior KG" 
        subtitle="Age: 3.5 - 4.5 Years. Building cognitive and social foundations."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&auto=format&fit=crop"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FDB813] mb-6">About the Program</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans">
            Junior KG acts as a stepping stone towards formal education. Here, the focus shifts slightly towards structured learning while maintaining a play-based approach. We introduce complex interactive sessions that enhance their logical and reasoning skills.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Alphabets and phonics",
              "Numerical concepts and counting",
              "Logical reasoning and puzzles",
              "Understanding the environment",
              "Advanced motor skills development",
              "Moral and social values"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FDB813]/10 flex items-center justify-center text-[#FDB813]">
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
