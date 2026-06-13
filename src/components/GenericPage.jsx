import React from 'react';
import PageHero from '../components/PageHero';

export default function GenericPage({ title, subtitle }) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} />
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 font-sans">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Content Coming Soon</h2>
        <p>We are currently updating this section. Please check back later or contact us directly for more information.</p>
      </section>
    </div>
  );
}
