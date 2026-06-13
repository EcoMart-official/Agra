import React from 'react';
import PageHero from '../components/PageHero';
import ProgramPreview from '../components/home/ProgramPreview';

export default function Programs() {
  return (
    <div>
      <PageHero 
        title="Our Programs" 
        subtitle="Explore our age-appropriate learning journeys from Playgroup to Senior KG."
      />
      <div className="py-12">
        <ProgramPreview />
      </div>
    </div>
  );
}
