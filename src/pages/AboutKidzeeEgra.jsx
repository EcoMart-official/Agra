import SEO from '../components/SEO';
import React from 'react';
import PageHero from '../components/PageHero';

export default function AboutKidzeeEgra() {
  return (
    <div>
      <SEO title="About Kidzee Egra" url="/aboutkidzeeegra" />
      <PageHero 
        title="About Kidzee Egra" 
        subtitle="Bringing world-class preschool education to Purba Medinipur."
      />
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-gray-600 leading-relaxed font-sans">
        <h2 className="text-3xl font-bold text-[#FDB813] mb-6">Our Local Commitment</h2>
        <p className="mb-6">
          Located in the heart of Egra at RBC Road, Kidzee Egra is committed to providing a safe, nurturing, and highly engaging environment for the children of our community.
        </p>
        <p className="mb-6">
          Our state-of-the-art campus features modern amenities, 100% CCTV surveillance, and carefully crafted learning zones designed to spark creativity and joy in every child.
        </p>
      </section>
    </div>
  );
}
