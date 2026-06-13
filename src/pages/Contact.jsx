import SEO from '../components/SEO';
import React from 'react';
import PageHero from '../components/PageHero';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <SEO title="ontact" url="/contact" />
      <PageHero 
        title="Contact Us" 
        subtitle="We would love to hear from you."
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins' }}>Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#FDB813]/10 text-[#FDB813] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 font-sans">
                      RBC Road, Ward No-2, Bastiya,<br/>
                      Near Egra Super Speciality Hospital,<br/>
                      Opposite Side Sebayan Nursing Home,<br/>
                      Egra, Purba Medinipur – 721429
                    </p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#FFDA2]/10 text-[#1E1E1E] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600 font-sans">+91 9091908900</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#FDB813]/20 text-[#1E1E1E] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 font-sans">kidzee7545@kidzee.com</p>
                 </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://wa.me/919091908900" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20BE5A] transition-colors shadow-md">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href="https://www.instagram.com/kidzeeegra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-6 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-opacity">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
            </div>
          </div>
          
          <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-gray-100 h-[500px] overflow-hidden relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4 font-heading text-center">Visit Campus</h3>
            <div className="absolute inset-0 top-20 bg-gray-200">
               {/* Embed Google Map placeholder */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14781.080182601721!2d87.52550186977537!3d21.89069150000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d13b4c10f8ba9%3A0x6bba8c6d4825d19c!2sEgra%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1717382020295!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Maps"
                 className="grayscale opacity-90 contrast-125"
               ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
