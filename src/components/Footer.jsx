import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="https://i.ibb.co/35pG18YG/Screenshot-20260613-193516.png" alt="Kidzee Logo" className="h-16 w-16 rounded-full object-cover bg-white p-1" />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>Kidzi Egra</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-sans">
              Every Child is Unique, Every Child Matters. A Strong Foundation Today For A Successful Tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/kidzee.egra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FDB813] hover:text-[#1E1E1E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kidzeeegra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FDB813] hover:text-[#1E1E1E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-4 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about-kidzee-egra" className="hover:text-[#FDB813] transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-[#FDB813] transition-colors">Our Programs</Link></li>
              <li><Link to="/facilities" className="hover:text-[#FDB813] transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FDB813] transition-colors">Gallery</Link></li>
              <li><Link to="/admissions" className="hover:text-[#FDB813] transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-4 inline-block">Programs</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/programs/playgroup" className="hover:text-[#FDB813] transition-colors">Playgroup</Link></li>
              <li><Link to="/programs/nursery" className="hover:text-[#FDB813] transition-colors">Nursery</Link></li>
              <li><Link to="/programs/junior-kg" className="hover:text-[#FDB813] transition-colors">Junior KG</Link></li>
              <li><Link to="/programs/senior-kg" className="hover:text-[#FDB813] transition-colors">Senior KG</Link></li>
              <li><Link to="/programs/daycare" className="hover:text-[#FDB813] transition-colors">Daycare</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-4 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#FDB813] mt-1 shrink-0" />
                <span>RBC Road, Ward No-2, Bastiya, Near Egra Super Speciality Hospital, Opposite Side Sebayan Nursing Home, Egra, Purba Medinipur – 721429</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#FDB813] shrink-0" />
                <span>+91 9091908900</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#FDB813] shrink-0" />
                <span>kidzee7545@kidzee.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kidzee Egra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
