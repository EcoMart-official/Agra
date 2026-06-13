import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutKidzee from "./pages/AboutKidzee";
import AboutKidzeeEgra from "./pages/AboutKidzeeEgra";
import Programs from "./pages/Programs";
import Playgroup from "./pages/Playgroup";
import Nursery from "./pages/Nursery";
import JuniorKG from "./pages/JuniorKG";
import SeniorKG from "./pages/SeniorKG";
import Daycare from "./pages/Daycare";
import PentemindPedagogy from "./pages/PentemindPedagogy";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Admissions from "./pages/Admissions";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-kidzee" element={<AboutKidzee />} />
            <Route path="/about-kidzee-egra" element={<AboutKidzeeEgra />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/playgroup" element={<Playgroup />} />
            <Route path="/programs/nursery" element={<Nursery />} />
            <Route path="/programs/junior-kg" element={<JuniorKG />} />
            <Route path="/programs/senior-kg" element={<SeniorKG />} />
            <Route path="/programs/daycare" element={<Daycare />} />
            <Route path="/pentemind-pedagogy" element={<PentemindPedagogy />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
