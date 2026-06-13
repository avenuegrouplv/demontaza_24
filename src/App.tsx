import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEOManager from "./components/SEOManager";

// Pages
import Home from "./pages/Home";
import Pakalpojumi from "./pages/Pakalpojumi";
import BUJ from "./pages/BUJ";
import Galerija from "./pages/Galerija";
import Kontakti from "./pages/Kontakti";
import MusuTehnika from "./pages/MusuTehnika";

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Scroll Position Reset */}
      <ScrollToTop />

      {/* Dynamic SEO & Open Graph / JSON-LD structured schema metadata engine */}
      <SEOManager />

      {/* Flexible wrap to push footer to the bottom */}
      <div className="flex min-h-screen flex-col bg-white">
        
        {/* Sticky Global Navigation header bar */}
        <Header />

        {/* Semantic central body layout */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pakalpojumi" element={<Pakalpojumi />} />
            <Route path="/musu-tehnika" element={<MusuTehnika />} />
            <Route path="/buj" element={<BUJ />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/kontakti" element={<Kontakti />} />
            
            {/* Fail-safe redirection for missing links to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Four-Column interactive Footer */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
