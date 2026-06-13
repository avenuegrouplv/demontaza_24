import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Phone, Mail, Clock } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"LV" | "RU">(() => {
    const saved = localStorage.getItem("demontaza_lang");
    return (saved as "LV" | "RU") || "LV";
  });

  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangChange = (lang: "LV" | "RU") => {
    setCurrentLang(lang);
    localStorage.setItem("demontaza_lang", lang);
    setLangDropdownOpen(false);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [location]);

  const handleSazinatiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const contactSec = document.getElementById("contact-section-home");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/kontakti");
      }
    } else {
      navigate("/kontakti");
    }
    setMobileMenuOpen(false);
  };

  const navLinks = currentLang === "LV" ? [
    { name: "SĀKUMS", path: "/" },
    { name: "PAKALPOJUMI", path: "/pakalpojumi" },
    { name: "MŪSU TEHNIKA", path: "/musu-tehnika" },
    { name: "BUJ", path: "/buj" },
    { name: "GALERIJA", path: "/galerija" },
    { name: "KONTAKTI", path: "/kontakti" },
  ] : [
    { name: "ГЛАВНАЯ", path: "/" },
    { name: "УСЛУГИ", path: "/pakalpojumi" },
    { name: "НАША ТЕХНИКА", path: "/musu-tehnika" },
    { name: "BUJ (В&О)", path: "/buj" },
    { name: "ГАЛЕРЕЯ", path: "/galerija" },
    { name: "КОНТАКТЫ", path: "/kontakti" },
  ];

  const isHome = location.pathname === "/";
  // The header is visual active white state if it's on subpages OR scrolled OR hovered on home page.
  const isWhiteHeader = !isHome || scrolled || hovered;

  // Responsive sticky/fixed header depending on home scroll
  const headerClass = isHome
    ? (isWhiteHeader
        ? "fixed top-0 left-0 right-0 z-50 w-full bg-white/98 shadow-md transition-all duration-150"
        : "absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/95 via-black/25 to-transparent transition-all duration-150")
    : "sticky top-0 z-50 w-full bg-white/98 shadow-md transition-all duration-150";

  return (
    <header 
      className={headerClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8 transition-all duration-150">
        
        {/* Logo Left */}
        <Link to="/" className="flex items-center animate-fadeIn" aria-label="Uz sākumu">
          <img
            src="https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/Logo.webp"
            alt="SIA “Demontāža 24/7” Logo"
            className="h-[52px] sm:h-[64px] lg:h-[74px] my-0.5 w-auto object-contain transition-all duration-150 mix-blend-multiply bg-transparent"
            onError={(e) => {
              // Fail-safe text representation if resource breaks
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const textFallback = document.createElement("span");
                textFallback.className = "text-xl font-bold tracking-wider " + (isWhiteHeader ? "text-zinc-900" : "text-white");
                textFallback.innerText = "DEMONTĀŽA 24/7";
                parent.appendChild(textFallback);
              }
            }}
          />
        </Link>

        {/* Right Section / Desktop */}
        <div className="hidden items-center gap-6 md:flex translate-y-[4px]">
          {/* Nav menu aligned right with bold-proportional look */}
          <nav aria-label="Galvenā navigācija" className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 text-[13px] tracking-widest transition-colors duration-200 font-bold ${
                    isActive
                      ? "text-[#FBBF24]"
                      : isWhiteHeader
                      ? "text-zinc-800 hover:text-[#FBBF24]"
                      : "text-zinc-100 hover:text-[#FBBF24]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#FBBF24]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sazināties yellow sharp button */}
          <button
            onClick={handleSazinatiesClick}
            className="cursor-pointer bg-[#FBBF24] hover:bg-zinc-900 hover:text-[#FBBF24] text-[#111827] px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-sm border border-transparent hover:scale-[1.02] active:scale-[0.98]"
            style={{ borderRadius: "2px" }}
            aria-label="Sazināties ar mums"
          >
            Sazināties
          </button>

          {/* Language selection dropdown with flags instead of Globe */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-sm font-black transition-all duration-150 ${
                isWhiteHeader ? "text-zinc-800 hover:bg-zinc-100" : "text-white hover:bg-white/10"
              }`}
              style={{ transform: "scale(1.3)", transformOrigin: "right center" }}
              aria-label="Pārslēgt valodu"
              aria-expanded={langDropdownOpen}
            >
              <span className="text-sm select-none">{currentLang === "LV" ? "🇱🇻" : "🇷🇺"}</span>
              <span className="text-[11px] font-black tracking-wider leading-none">{currentLang}</span>
              <ChevronDown className="h-2.5 w-2.5 transition-transform duration-200" style={{ transform: langDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-28 bg-white border border-zinc-200 shadow-lg rounded-[2px] py-1 z-50 animate-fadeIn">
                <button
                  type="button"
                  onClick={() => handleLangChange("LV")}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-zinc-100 ${
                    currentLang === "LV" ? "font-bold text-[#FBBF24] bg-zinc-50" : "text-zinc-700"
                  }`}
                >
                  <span className="inline-block w-4 text-center">🇱🇻</span>
                  Latviešu (LV)
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange("RU")}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-zinc-100 ${
                    currentLang === "RU" ? "font-bold text-[#FBBF24] bg-zinc-50" : "text-zinc-700"
                  }`}
                >
                  <span className="inline-block w-4 text-center">🇷🇺</span>
                  Русский (RU)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburguer & Tools */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Lang Selector for Mobile screen */}
          <div className="relative">
            <button
               onClick={() => setLangDropdownOpen(!langDropdownOpen)}
               className={`flex items-center gap-2 p-2.5 rounded text-sm font-black ${
                 isWhiteHeader ? "bg-zinc-100 text-zinc-800" : "bg-black/40 text-white border border-white/10"
               }`}
               aria-label="Mainīt valodu"
            >
              <span className="text-base select-none">{currentLang === "LV" ? "🇱🇻" : "🇷🇺"}</span>
              <span className="text-xs font-black tracking-wider">{currentLang}</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-24 bg-white border border-zinc-200 shadow-md rounded-[2px] py-1 z-50">
                <button
                  onClick={() => handleLangChange("LV")}
                  className="w-full px-2 py-2 text-xs text-left hover:bg-zinc-100 flex items-center gap-1.5"
                >
                  <span>🇱🇻</span> LV
                </button>
                <button
                  onClick={() => handleLangChange("RU")}
                  className="w-full px-2 py-2 text-xs text-left hover:bg-zinc-100 flex items-center gap-1.5"
                >
                  <span>🇷🇺</span> RU
                </button>
              </div>
            )}
          </div>

          {/* Hamburger trigger with white/zinc state */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center border rounded-[2px] transition-colors ${
              isWhiteHeader ? "text-zinc-900 border-zinc-200 hover:bg-zinc-50" : "text-white border-white/20 hover:bg-white/10"
            }`}
            aria-label="Atvērt izvēlni"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t px-4 py-4 shadow-inner space-y-3 animate-slideIn ${
          isHome ? "bg-zinc-950 border-zinc-850 text-white" : "bg-white border-zinc-200 text-[#111827]"
        }`}>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-[2px] text-sm font-bold tracking-wider transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? "bg-[#FBBF24] text-[#111827]"
                      : isHome
                      ? "text-zinc-200 hover:bg-zinc-900 hover:text-white"
                      : "text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-2">
            <button
              onClick={handleSazinatiesClick}
              className="w-full bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#111827] py-3 text-sm font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center min-h-[44px]"
              style={{ borderRadius: "2px" }}
              aria-label="Sazināties ar mums"
            >
              Sazināties
            </button>
          </div>

          {/* Quick interactive contact shortcuts in mobile drawer */}
          <div className="pt-4 border-t border-zinc-800/10 space-y-2.5 text-center">
            <a href="tel:26739899" className="block text-[#FBBF24] text-xs font-bold uppercase tracking-widest py-1.5 hover:underline decoration-[#FBBF24]">
              📞 +371 26739899
            </a>
            <a href="mailto:info@demontaza24.eu" className="block text-zinc-400 text-xs py-1 hover:underline transition-colors">
              ✉️ info@demontaza24.eu
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
