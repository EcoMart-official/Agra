import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "About", 
    path: "/about",
    dropdown: [
      { name: "About Kidzee", path: "/about-kidzee" },
      { name: "About Kidzee Egra", path: "/about-kidzee-egra" },
      { name: "Péntemind Pedagogy", path: "/pentemind-pedagogy" },
    ]
  },
  { 
    name: "Programs", 
    path: "/programs",
    dropdown: [
      { name: "All Programs", path: "/programs" },
      { name: "Playgroup", path: "/programs/playgroup" },
      { name: "Nursery", path: "/programs/nursery" },
      { name: "Junior KG", path: "/programs/junior-kg" },
      { name: "Senior KG", path: "/programs/senior-kg" },
      { name: "Daycare", path: "/programs/daycare" },
    ]
  },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-1.5" : "bg-white/95 backdrop-blur-md py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 z-50">
            <img src="https://i.ibb.co/35pG18YG/Screenshot-20260613-193516.png" alt="Kidzee Logo" className="h-10 w-10 rounded-full object-cover shadow-sm border border-gray-100 bg-white" />
            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>Kidzee Egra</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <div 
                key={idx} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#FDB813] transition-colors py-2">
                    {link.name} <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === link.path ? "text-[#FDB813]" : "text-gray-700 hover:text-[#FDB813]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {link.dropdown.map((dropLink, dIdx) => (
                            <Link
                              key={dIdx}
                              to={dropLink.path}
                              className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#FDB813] hover:bg-gray-50 transition-colors"
                            >
                              {dropLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link 
              to="/admissions"
              className="bg-[#FDB813] text-[#1E1E1E] px-6 py-2.5 rounded-full font-bold hover:bg-[#e6a611] transition-colors shadow-lg shadow-[#FDB813]/30"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 lg:hidden z-50 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white pt-20 pb-6 px-4 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                        className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                      >
                        {link.name}
                        <motion.div animate={{ rotate: activeDropdown === idx ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 pl-4 pt-3">
                              {link.dropdown.map((dropLink, dIdx) => (
                                <Link
                                  key={dIdx}
                                  to={dropLink.path}
                                  className="text-gray-600 py-1"
                                >
                                  {dropLink.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      className="block text-lg font-medium text-gray-800"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/admissions"
                className="mt-4 w-full bg-[#FDB813] text-[#1E1E1E] text-center py-3.5 rounded-full font-bold"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
