import SEO from '../components/SEO';
import React from 'react';
import PageHero from '../components/PageHero';
import { Check } from 'lucide-react';

export default function Daycare() {
  return (
    <div>
      <SEO title="aycare" url="/programs/daycare" />
      <PageHero 
        title="Daycare" 
        subtitle="A safe, nurturing home away from home."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&auto=format&fit=crop"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FDB813] mb-6">About the Program</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans">
            Our Daycare facility is designed to offer working parents peace of mind. We provide a hygienic, safe, and engaging environment where children are cared for by trained professionals. Our routines include a healthy balance of rest, play, and learning.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Hygienic and safe environment",
              "100% CCTV surveillance",
              "Nutritious meals & rest routines",
              "After-school engagements",
              "Trained and affectionate caregivers",
              "Open communication with parents"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FDB813]/20 flex items-center justify-center text-[#1E1E1E]">
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
