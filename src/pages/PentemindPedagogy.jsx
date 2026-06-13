import React from 'react';
import PageHero from '../components/PageHero';
import PentemindPedagogyComponent from '../components/home/PentemindPedagogy';

export default function PentemindPedagogy() {
  return (
    <div>
      <PageHero 
        title="Péntemind Pedagogy" 
        subtitle="India's only university-verified preschool curriculum."
      />
      <div className="py-12">
        <PentemindPedagogyComponent />
      </div>
    </div>
  );
}
