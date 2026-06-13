import React from 'react';
import PageHero from '../components/PageHero';

export default function AboutKidzee() {
  return (
    <div>
      <PageHero 
        title="About Kidzee" 
        subtitle="Asia's largest network of preschools."
      />
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-gray-600 leading-relaxed font-sans">
        <h2 className="text-3xl font-bold text-[#FDB813] mb-6">A Pioneer in Early Childhood Education</h2>
        <p className="mb-6">
          With over 2000+ centers in more than 750+ cities, Kidzee is the largest preschool network in Asia. We are pioneers in early childhood education, having touched the lives of more than 1.5 million children in India.
        </p>
        <p className="mb-6">
          At Kidzee, we believe that every child is an individual with unique potential. Our proprietary 'iLLUME' and 'Péntemind' pedagogies have set new benchmarks in early childhood education.
        </p>
      </section>
    </div>
  );
}
