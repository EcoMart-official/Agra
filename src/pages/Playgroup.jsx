import React from 'react';
import PageHero from '../components/PageHero';
import { Check } from 'lucide-react';

export default function Playgroup() {
  return (
    <div>
      <PageHero 
        title="Playgroup" 
        subtitle="Age: 1.5 - 2.5 Years. A gentle transition from home to school."
        image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&auto=format&fit=crop"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FDB813] mb-6">About the Program</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans">
            Our Playgroup program is designed to help children transition smoothly from the comfort of their homes to a structured environment. At this tender age, children are curious and energetic. We channel their energy through play-based activities that enhance their sensory and motor skills.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Sensory development and exploration",
              "Developing hand-eye coordination",
              "Encouraging peer interaction",
              "Basic language and vocabulary",
              "Music, movement, and rhythm",
              "Safe and nurturing environment"
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
