import React from 'react';
import PageHero from '../components/PageHero';
import { FileText, UserPlus, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Admissions() {
  const steps = [
    { icon: Phone, title: "1. Inquiry", desc: "Contact us via phone, email, or visit our center for a counseling session." },
    { icon: UserPlus, title: "2. Campus Tour", desc: "Take a tour of our child-friendly campus to experience our safe environment." },
    { icon: FileText, title: "3. Registration", desc: "Fill out the admission form and submit the required documents." },
    { icon: Calendar, title: "4. Enrollment", desc: "Pay the fees to secure your child's seat for the upcoming academic session." }
  ];

  return (
    <div>
      <PageHero 
        title="Admissions" 
        subtitle="Embark on a joyful learning journey with Kidzee Egra."
      />
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#FDB813] mb-8">Admission Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#FDB813] before:to-[#1E1E1E]">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#FDB813] text-[#1E1E1E] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 font-sans">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[#F8F9FC] p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h3>
              <ul className="space-y-3 text-gray-600 font-sans list-disc list-inside">
                <li>Photocopy of child's birth certificate</li>
                <li>Passport size photographs of child and parents</li>
                <li>Photocopy of child's immunization record</li>
                <li>Proof of residence (Aadhaar/Voter ID)</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Inquiry Form</h3>
                <p className="text-gray-500 font-sans">Fill in the details below and we will get back to you shortly.</p>
              </div>
              
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Parent's Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813] transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Contact Number *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813] transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813] transition-colors" placeholder="johndoe@example.com" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Child's Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813] transition-colors" placeholder="Child's Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Child's Age *</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813] transition-colors">
                      <option>Select Age</option>
                      <option>1.5 - 2.5 Years (Playgroup)</option>
                      <option>2.5 - 3.5 Years (Nursery)</option>
                      <option>3.5 - 4.5 Years (Junior KG)</option>
                      <option>4.5 - 5.5 Years (Senior KG)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Additional Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813] transition-colors" placeholder="Any specific questions?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#FDB813] text-[#1E1E1E] py-4 rounded-xl font-bold text-lg hover:bg-[#e6a611] transition-colors shadow-lg shadow-[#FDB813]/20">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
