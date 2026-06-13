import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Pickaxe, 
  HardHat, 
  Truck, 
  Boxes,
  FileCheck,
  Leaf,
  Wrench,
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
  Construction,
  Check,
  Mountain
} from "lucide-react";
import { CarouselSlide, ServiceCard, FaqItem, GalleryItem } from "../types";
import Lightbox from "../components/Lightbox";

function CurledCorner() {
  return (
    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none z-20" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Real-world volumetric golden curl gradient */}
          <linearGradient id="curlGold" x1="12" y1="0" x2="48" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B45309" /> {/* Deep dark bronze base */}
            <stop offset="30%" stopColor="#FBBF24" /> {/* Vibrant sunny yellow */}
            <stop offset="55%" stopColor="#FCD34D" /> {/* Bright cream highlights */}
            <stop offset="85%" stopColor="#FBBF24" /> {/* Standard gold body */}
            <stop offset="100%" stopColor="#92400E" /> {/* Warm ambient shade */}
          </linearGradient>
          
          {/* Dark high-contrast inner hole cut gradient */}
          <linearGradient id="interiorHole" x1="12" y1="0" x2="48" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#18181B" />  {/* Zinc-900 back dark */}
            <stop offset="40%" stopColor="#27272A" /> {/* Zinc-800 middle gradient */}
            <stop offset="75%" stopColor="#3F3F46" /> {/* Zinc-700 transition */}
            <stop offset="100%" stopColor="#52525B" />{/* Zinc-600 soft edge bleed */}
          </linearGradient>

          {/* Real soft ambient shadowing underneath the leaf flare */}
          <radialGradient id="softFloorDrop" cx="12" cy="0" r="40" fx="12" fy="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Under-shadow representation for the physical leaf lift */}
        <path d="M 12 0 C 18 16, 26 26, 48 34 C 36 28, 22 14, 12 0 Z" fill="url(#softFloorDrop)" opacity="0.8" />
        
        {/* Dark page interior background representing the realistic peeled under-layer slit */}
        <path d="M 12 0 C 18 12, 32 26, 48 34 L 48 0 Z" fill="url(#interiorHole)" />
        
        {/* The organic curled page element - beautifully asymmetrical and curved Bezier lines */}
        <path d="M 12 0 C 18 16, 28 26, 48 34 C 33 24, 20 10, 12 0 Z" fill="url(#curlGold)" />
        
        {/* A fine, gleaming highlight stroke along the curled fold border for realistic depth */}
        <path d="M 12 0 C 18 16, 28 26, 48 34" stroke="#FEF08A" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
        
        {/* Additional 3D shadow blend inside the curl flap's inner face */}
        <path d="M 12 0 C 18 16, 26 26, 48 34" stroke="#78350F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      </svg>
    </div>
  );
}

// Hero Images
const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_1.webp",
    title: "Demontāžas pakalpojumi",
    subtitle: "Precīzi plānoti un droši demontāžas darbi pirms renovācijas uzsākšanas",
    alt: "ekskavators-veic-buves-nojauksanu-1"
  },
  {
    id: 2,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp",
    title: "Industriālo ēku nojaukšana",
    subtitle: "Sarežģītu, bīstamu un nolietotu ēku nojaukšana visā Latvijā",
    alt: "ekskavators-veic-buves-nojauksanu-2"
  },
  {
    id: 3,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp",
    title: "Būvgružu izvešana",
    subtitle: "Būvgružu šķirošana, izvešana un licencēta nodošana otrreizējai pārstrādei",
    alt: "ekskavators-veic-buves-nojauksanu-3"
  },
  {
    id: 4,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_4.webp",
    title: "Mūsu darba struktūra",
    subtitle: "No saskaņošanas būvvaldē līdz teritorijas pilnīgai nodošanai ekspluatācijā",
    alt: "ekskavators-veic-buves-nojauksanu-4"
  }
];

// FAQs for Sākums
const FAQS_HOME: FaqItem[] = [
  {
    id: 1,
    question: "Cik maksā mājas nojaukšana Latvijā un kā veidojas tāme?",
    answer: "Nojaukšanas izmaksas ir atkarīgas no ēkas apjoma kubikmetros, materiālu tipa (koks, ķieģelis, dzelzbetons), atrašanās vietas, piekļuves iespējām un nepieciešamās tehnikas. Katram projektam sagatavojam individuālu tāmi bez maksas."
  },
  {
    id: 2,
    question: "Kādi dokumenti un saskaņojumi ir nepieciešami pirms ēkas demontāžas sākšanas?",
    answer: "Saskaņā ar Latvijas būvnormatīviem pirms darbu uzsākšanas vietējā Būvvaldē ir jāiesniedz nojaukšanas būvprojekts vai apliecinājuma karte un jāsaņem būvatļauja ar nosacījumiem demontāžas darbiem."
  },
  {
    id: 3,
    question: "Vai jūs nodrošināt oficiālus dokumentus par būvgružu pareizu utilizāciju?",
    answer: "Jā, mēs esam licencēts atkritumu apsaimniekošanas partneris. Katram klientam pēc darbu pabeigšanas izsniedzam oficiālu utilizācijas aktu un nodošanas deklarāciju iesniegšanai Būvvaldē objekta nodošanai ekspluatācijā."
  }
];

// Bento-style Gallery images for Sākumlapa (different from Hero)
const GALLERY_HOME: GalleryItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    alt: "ekskavators-veic-buves-nojauksanu-riga"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1513828729020-041400e47fe5?q=80&w=800",
    alt: "būvlaukums-demontāžas-akts-latvija"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
    alt: "konstrukciju-sarežģīta-demontāža-drošība"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800",
    alt: "būvdarbu-organizācija-un-tehnika"
  },
  {
    id: 5,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_4.webp",
    alt: "atkritumu-konteiners-būvgružu-izvešana"
  }
];

const PORTFOLIO_HOME = [
  {
    id: 1,
    title: "Daudzdzīvokļu dzīvojamās ēkas demontāža",
    tag: "DAUDZDZĪVOKĻU ĒKU DEMONTĀŽA",
    sectionName: "Daudzdzīvokļu ēku demontāža",
    location: "Rīga",
    year: "2026",
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600",
    alt: "daudzdzivoklu-eku-demontaza"
  },
  {
    id: 2,
    title: "Koka un mūra privātmājas demontāža",
    tag: "PRIVĀTMĀJU DEMONTĀŽA",
    sectionName: "Privātmāju demontāža",
    location: "Jūrmala",
    year: "2025",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600",
    alt: "privatmaju-demontaza"
  },
  {
    id: 3,
    title: "Nolietotas palīgbūves un vecā šķūņa demontāža",
    tag: "ŠĶŪŅU DEMONTĀŽA",
    sectionName: "Šķūņu demontāža",
    location: "Kuldīga",
    year: "2026",
    url: "https://images.unsplash.com/photo-1513828729020-041400e47fe5?q=80&w=600",
    alt: "vecā-šķūņa-demontāža"
  },
  {
    id: 4,
    title: "Ražošanas un noliktavas ēkas demontāža",
    tag: "INDUSTRIĀLO OBJEKTU DEMONTĀŽA",
    sectionName: "Industriālo objektu demontāža",
    location: "Daugavpils",
    year: "2025",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp",
    alt: "razosanas-noliktavas-eku-demontaza"
  },
  {
    id: 5,
    title: "Būvniecības gružu un sārņu utilizēšana",
    tag: "BŪVGRUŽU IZVEŠANA",
    sectionName: "Būvgružu izvešana",
    location: "Mārupe",
    year: "2026",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_4.webp",
    alt: "būvniecības-gružu-utilizācija"
  },
  {
    id: 6,
    title: "Būvlaukuma planēšana un sakopšana",
    tag: "TERITORIJAS SAKOPŠANA",
    sectionName: "Teritorijas sakopšana",
    location: "Sigulda",
    year: "2026",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp",
    alt: "būvlaukuma-planēšana-sagatavošana"
  }
];

export default function Home() {
  const navigate = useNavigate();

  // 1. Hero slides carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. FAQs states (no item open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 3. Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 4. Contact Form submit state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // 5. Portfolio horizontal scroll ref & handler
  const scrollRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<any>(null);

  const scrollContainer = (direction: number) => {
    if (scrollRef.current) {
      isProgrammaticScroll.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const el = scrollRef.current;
      const cardElement = el.firstElementChild as HTMLElement;
      if (!cardElement) {
        isProgrammaticScroll.current = false;
        return;
      }

      const itemWidth = cardElement.offsetWidth + 24; // Width + gap-6
      const copyWidth = itemWidth * 6; // Width of one full copy of 6 items
      const scrollAmount = itemWidth;
      const currentScroll = el.scrollLeft;

      if (direction === 1) {
        // If the click is about to go beyond copyWidth * 2, wrap instantly to start of middle copy first
        if (currentScroll + scrollAmount >= copyWidth * 2 - 5) {
          el.scrollLeft = currentScroll - copyWidth;
        }
        el.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      } else {
        // If the click is about to go below copyWidth, wrap instantly to end of middle copy first
        if (currentScroll - scrollAmount < copyWidth - 5) {
          el.scrollLeft = currentScroll + copyWidth;
        }
        el.scrollBy({
          left: -scrollAmount,
          behavior: "smooth"
        });
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  };

  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardElement = el.firstElementChild as HTMLElement;
      if (!cardElement) return;

      const itemWidth = cardElement.offsetWidth + 24;
      const copyWidth = itemWidth * 6;

      // Real-time automatic stabilization for manual swipes or edge cases
      if (el.scrollLeft >= copyWidth * 2 - 5) {
        el.scrollLeft -= copyWidth;
      } else if (el.scrollLeft <= copyWidth - itemWidth + 5) {
        el.scrollLeft += copyWidth;
      }
    }
  };

  // Center the portfolio on initial render/load
  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardElement = el.firstElementChild as HTMLElement;
      if (cardElement) {
        const itemWidth = cardElement.offsetWidth + 24;
        el.scrollLeft = itemWidth * 6;
      } else {
        const timer = setTimeout(() => {
          if (scrollRef.current) {
            const first = scrollRef.current.firstElementChild as HTMLElement;
            if (first) {
              const itemWidth = first.offsetWidth + 24;
              scrollRef.current.scrollLeft = itemWidth * 6;
            }
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Auto carousel slide timer (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Vārds vai Uzņēmuma nosaukums ir obligāts lauks.";
    }
    if (!formData.email.trim()) {
      errors.email = "E-pasts saziņai ir obligāts lauks.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Lūdzu, ievadiet pareizu e-pasta formātu.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Tālruņa numurs ir obligāts lauks.";
    }
    if (!formData.message.trim()) {
      errors.message = "Ziņa vai objekta detaļas ir obligāts lauks.";
    }
    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormSubmitted(true);
    }
  };

  // Scroll callback
  const scrollToContact = () => {
    const el = document.getElementById("contact-section-home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Static numbers to tick/highlight
  const stats = [
    { value: "20+", label: "Gadu pieredze" },
    { value: "480+", label: "Pabeigtie projekti" },
    { value: "150k+", label: "Pārstrādātās tonnas" },
    { value: "100%", label: "Vides drošības garantija" }
  ];

  return (
    <main className="w-full bg-white text-zinc-900">
      
      {/* 1. HERO Carousel Section */}
      <section className="relative h-[92vh] w-full overflow-hidden bg-zinc-950" aria-label="Slīdrāde">
        {CAROUSEL_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Overlay with high contrast gradient for ultimate text pop */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-20" />
              
              <img
                src={slide.url}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />

              {/* Slider Content */}
              <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6">
                <div className="text-center max-w-4xl pb-16 sm:pb-24">
                  <h1 className="text-white text-2xl sm:text-3.5xl lg:text-5xl font-extrabold tracking-tight mb-4 uppercase drop-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-zinc-200 text-sm sm:text-lg font-medium tracking-wide mb-8 drop-shadow-sm max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
              </div>

            </div>
          );
        })}

        {/* Two solid CTA buttons - static/stationary relative to the background slides, positioned lower */}
        <div className="absolute bottom-20 sm:bottom-28 left-0 right-0 z-30 flex flex-wrap items-center justify-center gap-4 px-4 select-none">
          <button
            onClick={scrollToContact}
            className="cursor-pointer bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#111827] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 shadow-md border border-transparent rounded-[2px]"
            aria-label="Saņemt tāmi"
          >
            Saņemt tāmi
          </button>
          <Link
            to="/pakalpojumi"
            className="inline-flex cursor-pointer bg-black/45 backdrop-blur-sm hover:bg-zinc-900/80 text-[#FBBF24] border border-[#FBBF24] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-lg"
            aria-label="Mūsu pakalpojumi"
          >
            Mūsu pakalpojumi
          </Link>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-[2px] ${
                idx === currentSlide ? "w-8 bg-[#FBBF24]" : "w-2 bg-white/40"
              }`}
              aria-label={`Rādīt slaidu ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2.1. PAR MUMS SECTION */}
      <section className="pt-16 pb-8 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]" aria-label="Par mums">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Texts */}
            <div className="space-y-6">
              <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest block font-mono">Par mums</span>
              <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight border-l-4 border-[#FBBF24] pl-4 leading-normal uppercase">
                Jūsu uzticamais partneris demontāžas nozarē jau vairāk nekā 20 gadus
              </h2>
              <div className="space-y-4 text-zinc-650 text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  Mēs savu darbību uzsākām ar mērķi nodrošināt saviem klientiem augstākās kvalitātes un drošības standartiem atbilstošus demontāžas pakalpojumus. Divu gadu desmitu laikā esam veiksmīgi likvidējuši gan nelielas privātmājas, gan komplicētus industriālos kompleksus. Esam sadarbojušies gan ar privātīpašniekiem, kā arī uzņēmumiem un valsts pārvaldes iestādēm. Mēs savā darbā stingri sekojam vides aizsardzības noteikumiem, nodrošinot pilnu materiālu otrreizējo pārstrādi un teritorijas sakopšanu.
                </p>
                <p>
                  Mūsu labā reputācija ilgtermiņā balstās uz nevainojamu drošības standartu ievērošanu un abpusēju uzticību. Katrā projektā un darbā ar mūsu klientiem mēs apvienojam gadu desmitos uzkrātās zināšanas, kas garantē augstāko uzticamības un drošības līmeni, un savlaicīgu apņemšanos izpildīt darbu bez liekiem kavējumiem.
                </p>
              </div>
            </div>

            {/* Right Images (Stacked vertically to match the height of the left text column) */}
            <div className="flex flex-col gap-4.5 lg:h-full lg:justify-between lg:pl-4">
              <div className="overflow-hidden shadow-sm group border border-zinc-200 rounded-[2px] h-[200px] sm:h-[240px] lg:h-[210px]">
                <img
                  src="https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_1.webp"
                  alt="nojaukšanas-tehnika-darbā"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="overflow-hidden shadow-sm group border border-zinc-200 rounded-[2px] h-[200px] sm:h-[240px] lg:h-[210px]">
                <img
                  src="https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp"
                  alt="ekskavators-veic-drikst-nojaukt"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.2. MŪSU PAKALPOJUMI */}
      <section className="py-10 border-t border-b border-zinc-200/60 bg-[#F8F7F4]" aria-label="Pakalpojumi mājā">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">Ko mēs piedāvājam</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">Mūsu pakalpojumi</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          {/* Symmetrical columns for 6 cards: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-sans">
            
            {/* Card 1 */}
            <div className="relative bg-white border border-zinc-200 p-6 pb-8 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 group rounded-[2px] overflow-hidden min-h-[300px]" id="home-service-1">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
              
              {/* Dog-ear folded corner page accent */}
              <CurledCorner />

              <div className="z-10 relative">
                <div className="relative p-3 bg-amber-50 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] inline-block mb-4">
                  <div className="relative z-10 text-[#FBBF24]">
                    <Pickaxe className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 mb-2 uppercase tracking-wide">Demontāžas darbi</h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  Pilna un daļēja iekštelpu un nesošo konstrukciju demontāža pirms renovācijas darbiem. Strādājam ātri, saudzīgi un precīzi.
                </p>
              </div>
              <Link
                to="/pakalpojumi"
                className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2.5 px-4 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn"
              >
                <span>Uzzināt vairāk</span>
                <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border border-zinc-200 p-6 pb-8 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 group rounded-[2px] overflow-hidden min-h-[300px]" id="home-service-2">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
              
              {/* Dog-ear folded corner page accent */}
              <CurledCorner />

              <div className="z-10 relative">
                <div className="relative p-3 bg-amber-50 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] inline-block mb-4">
                  <div className="relative z-10 text-[#FBBF24]">
                    <HardHat className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 mb-2 uppercase tracking-wide">Ēku un būvju nojaukšana</h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  Sarežģītu, bīstamu vai nolietotu ēku nojaukšana, izmantojot mūsu specializēto tehniku, nodrošinot augstāko drošības līmeni un darba kvalitāti.
                </p>
              </div>
              <Link
                to="/pakalpojumi"
                className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2.5 px-4 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn"
              >
                <span>Uzzināt vairāk</span>
                <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border border-zinc-200 p-6 pb-8 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 group rounded-[2px] overflow-hidden min-h-[300px]" id="home-service-3">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
              
              {/* Dog-ear folded corner page accent */}
              <CurledCorner />

              <div className="z-10 relative">
                <div className="relative p-3 bg-amber-50 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] inline-block mb-4">
                  <div className="relative z-10 text-[#FBBF24]">
                    <Truck className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 mb-2 uppercase tracking-wide">Būvgružu izvešana</h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  Ātra būvniecības un nojaukšanas atkritumu šķirošana, iekraušana, utilizācija un licencēta utilizācijas dokumentu sagatavošana.
                </p>
              </div>
              <Link
                to="/pakalpojumi"
                className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2.5 px-4 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn"
              >
                <span>Uzzināt vairāk</span>
                <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
              </Link>
            </div>

            {/* Card 4 - Zemes ierīcības darbi */}
            <div className="relative bg-white border border-zinc-200 p-6 pb-8 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 group rounded-[2px] overflow-hidden min-h-[300px]" id="home-service-zemes-iericiba">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
              
              {/* Dog-ear folded corner page accent */}
              <CurledCorner />

              <div className="z-10 relative">
                <div className="relative p-3 bg-amber-50 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] inline-block mb-4">
                  <div className="relative z-10 text-[#FBBF24]">
                    <Mountain className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 mb-2 uppercase tracking-wide">Zemes ierīcības darbi</h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  Kvalitatīvi teritoriju planēšanas, līmeņošanas, grāvju un gultņu rakšanas darbi, ceļu būvniecības un grunts materiālu (smilts, šķembas) piegādes pakalpojumi.
                </p>
              </div>
              <Link
                to="/pakalpojumi"
                className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2.5 px-4 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn"
              >
                <span>Uzzināt vairāk</span>
                <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="relative bg-white border border-zinc-200 p-6 pb-8 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 group rounded-[2px] overflow-hidden min-h-[300px]" id="home-service-4">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
              
              {/* Dog-ear folded corner page accent */}
              <CurledCorner />

              <div className="z-10 relative">
                <div className="relative p-3 bg-amber-50 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] inline-block mb-4">
                  <div className="relative z-10 text-[#FBBF24]">
                    <Boxes className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 mb-2 uppercase tracking-wide">Būvgružu konteineru noma</h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  Būvgružu konteineru piegāde un noma būvniecības atkritumu un lielgabarīta būvgružu nogādāšanai uz licencētiem poligoniem.
                </p>
              </div>
              <Link
                to="/pakalpojumi"
                className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2.5 px-4 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn"
              >
                <span>Uzzināt vairāk</span>
                <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
              </Link>
            </div>

            {/* Card 6 */}
            <div className="relative bg-white border border-zinc-200 p-6 pb-8 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 group rounded-[2px] overflow-hidden min-h-[300px]" id="home-service-5">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
              
              {/* Dog-ear folded corner page accent */}
              <CurledCorner />

              <div className="z-10 relative">
                <div className="relative p-3 bg-amber-50 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] inline-block mb-4">
                  <div className="relative z-10 text-[#FBBF24]">
                    <Construction className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 mb-2 uppercase tracking-wide">Tehnikas noma</h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  Uzņēmuma vadošā transporta parka noma ar profesionālu licencētu operatoru atbalstu vai bez tā.
                </p>
              </div>
              <Link
                to="/musu-tehnika"
                className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2.5 px-4 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn"
              >
                <span>Uzzināt vairāk</span>
                <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Kāpēc izvēlēties mūs block */}
      <section className="py-10 bg-white border-b border-zinc-200/50" id="kapec-izveleties-mus">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">Klientu prioritātes</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1 text-center">Kāpēc izvēlēties mūs</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {[
              { title: "20+ gadu pieredze", desc: "Mūsu gadu gaitā uzkrātā pieredze garantē katra, pat vissarežģītākā, objekta kvalitatīvu un precīzu realizāciju." },
              { title: "Profesionāla tehnika", desc: "Pašu tehnikas parks – no speciāliem ekskavatoriem līdz smagajai kāpurķēžu tehnikai katram uzdevumam." },
              { title: "Licencēta būvgružu utilizācija", desc: "Nodrošinām likumīgu būvniecības atkritumu šķirošanu un oficiālu utilizācijas dokumentu sagatavošanu iesniegšanai Būvvaldē." },
              { title: "Darbs visā Baltijā", desc: "Pateicoties mūsu gadu gaitā pārbaudītajai vadības sistēmai, mēs varam operatīvi ierasties jebkurā objektā visā Baltijas teritorijā." },
              { title: "Bezmaksas objekta apskate", desc: "Mūsu inženieri dodas uz mūs klientu objektiem, lai klātienē izvērtētu stāvokli, veiktu mērījumus un aprēķinus bez maksas." },
              { title: "Operatīva tāme", desc: "Sagatavojam detalizētu darbu izmaksu tāmi bez jebkādām slēptām izmaksām 24 stundu laikā pēc vizītes objektā." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative bg-zinc-50/50 border border-zinc-200 p-5 pb-6 flex flex-col justify-between hover:border-[#FBBF24]/60 hover:shadow-md transition-colors duration-200 group rounded-[2px] min-h-[240px]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FBBF24]/10 group-hover:bg-[#FBBF24] transition-colors" />
                <div className="flex flex-col items-center h-full justify-between w-full">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center mx-auto h-11 w-11 rounded-full border-2 border-[#FBBF24] text-[#FBBF24] bg-white group-hover:bg-[#FBBF24]/5 transition-colors duration-200 mb-4 shadow-sm" aria-hidden="true">
                      <Check className="h-5 w-5 stroke-[3]" />
                    </div>
                    <h3 className="text-zinc-900 font-extrabold text-xs sm:text-sm mb-2 uppercase tracking-wide text-center">{item.title}</h3>
                  </div>
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed text-center font-sans mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Darba process block with 7 step cards - balanced in logical grid layout to avoid squishing */}
      <section className="py-10 bg-[#F4F3EF] border-b border-zinc-200/50" id="darba-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">Soli pa solim</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">Darba process</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Objekta apskate",
                desc: "Mūsu inženiera vizīte klienta objektā, lai precīzi novērtētu ēkas stāvokli, fiziskos izmērus un blakusbūvju riskus.",
                img: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?q=80&w=400"
              },
              {
                title: "Tāmes sastādīšana",
                desc: "Sagatavojam detalizētu darbu izmaksu tāmi ar fiksētu cenu 24 stundu laikā pēc mūsu inženiera vizītes klienta objektā.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400"
              },
              {
                title: "Saskaņošana BIS",
                desc: "Sagatavojam nepieciešamos dokumentus, nojaukšanas būvprojektu un kārtojam atļaujas BIS sistēmā.",
                img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=400"
              },
              {
                title: "Demontāžas darbi",
                desc: "Profesionāla un prasmīgi kontrolēta objekta demontāža, izmantojot mūsu specializēto demontāžas tehniku.",
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_1.webp"
              },
              {
                title: "Būvgružu izvešana",
                desc: "Operatīva atkritumu iekraušana konteineros un nodošana licencētiem pārstrādātājiem ar utilizācijas aktiem.",
                img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=400"
              },
              {
                title: "Teritorijas sakopšana",
                desc: "Teritorijas sakopšana pēc demontāžas darbu beigšanas, tostarp bedru aizbēršana un augsnes nolīdzināšana.",
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp"
              },
              {
                title: "Objekta nodošana",
                desc: "Demontētās būves dzēšana no VZD kadastra, dokumentu iesniegšana Būvvaldē un objekta nodošana ekspluatācijā.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400"
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="bg-white border border-zinc-200 p-5 flex flex-col justify-between hover:border-[#FBBF24]/60 hover:shadow-md transition-all duration-200 rounded-[2px]"
                id={`process-step-${index}`}
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-900 rounded-[1px] mb-4 border border-zinc-100">
                    <img 
                      src={process.img} 
                      alt={`Demontāža - ${process.title}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-zinc-900 font-extrabold text-sm uppercase tracking-wider mb-2 leading-snug">
                    {process.title}
                  </h3>
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sertifikāti un atļaujas block with 4 items - uniform and concise descriptions */}
      <section className="py-10 bg-white border-b border-zinc-200/50" id="sertifikati-un-atlaujas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">Oficiāls statuss</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">Sertifikāti un atļaujas</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Būvkomersanta reģistrācija",
                desc: "Oficiāli reģistrēts būvkomersants, kas reģistrēts LR Būvkomersantu reģistrā. Tas apliecina mūsu uzņēmuma pilnas tiesības vadīt, noformēt un droši izpildīt ēku demontāžas darbus.",
                icon: <Building className="h-5 w-5 text-amber-600" />
              },
              {
                title: "Atkritumu atļaujas",
                desc: "Valsts vides dienesta (VVD) izsniegtā atkritumu apsaimniekošanas atļauja. Būvgruži tiek šķiroti un nodoti sertificētos poligonos, sagatavojot oficiālus utilizācijas aktus.",
                icon: <FileCheck className="h-5 w-5 text-amber-600" />
              },
              {
                title: "Darba drošības sertifikāti",
                desc: "Mūsu personālam ir profesionālās darba drošības licences un sertifikāti. Tas garantē pilnīgu atbilstību un drošību visos paaugstinātas bīstamības apstākļos.",
                icon: <ShieldCheck className="h-5 w-5 text-amber-600" />
              },
              {
                title: "Vides aizsardzības atļaujas",
                desc: "Stingra vides normatīvu un prasību ievērošana katrā darbu izpildes posmā. Nodrošinām putekļu un trokšņu samazināšanu pilsētvidē un drošu materiālu šķirošanu.",
                icon: <Leaf className="h-5 w-5 text-amber-600" />
              }
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#FAF9F6] to-white border border-zinc-200 p-5 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-colors duration-200 rounded-[2px]"
              >
                <div>
                  <div className="flex items-center justify-center h-9 w-9 bg-amber-50 border border-amber-200 rounded-[2px] mb-3 shadow-sm">
                    {cert.icon}
                  </div>
                  <h3 className="text-zinc-900 font-extrabold text-[13px] sm:text-sm uppercase tracking-wider mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-650 text-xs leading-relaxed font-sans">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 2.5 STATISTIKAS BLOKS (Moved immediately below the Portfolio) */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat text-white border-t border-zinc-900 overflow-hidden" 
               style={{ backgroundImage: `url('https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp')` }}
               aria-label="Statistikas skaitītāji">
        {/* Dark overlay for maximum text readability and visual safety */}
        <div className="absolute inset-0 bg-black/85 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-black/45 backdrop-blur-sm border border-[#FBBF24] rounded-[2px] shadow-lg hover:bg-zinc-950/80 transition-all duration-155">
                <div className="text-3xl sm:text-4.5xl font-extrabold text-[#FBBF24] font-mono tracking-tight mb-2">
                  {stat.value}
                </div>
                <p className="text-zinc-300 text-xs font-semibold tracking-wide uppercase font-black">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.3. BIEŽĀK UZDOTIE JAUTĀJUMI (Accordion style with tighter spacing) */}
      <section className="py-16 bg-gradient-to-b from-[#FDFDFD] via-[#FAF9F6] to-white border-t border-b border-zinc-150" aria-label="BUJ sākumā">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          <div className="text-center mb-10">
            <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Jautājumi un atbildes</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">Biežāk uzdotie jautājumi</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="space-y-4">
            {FAQS_HOME.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border border-zinc-200 rounded-[2px] bg-white overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4.5 text-left text-zinc-900 font-bold hover:bg-zinc-50 transition-colors gap-4"
                    aria-label={`Atvērt jautājumu: ${faq.question}`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className="text-[#FBBF24] flex-shrink-0">
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4.5 bg-zinc-50 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-150 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sniegt visiem link */}
          <div className="mt-8 text-center">
            <Link
              to="/buj"
              className="inline-flex cursor-pointer bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 border border-zinc-250 px-7 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-sm"
              aria-label="Skatīt visus jautājumus"
            >
              Skatīt visus jautājumus
            </Link>
          </div>

        </div>
      </section>

      {/* SADARBĪBAS PARTNERI */}
      <section className="py-16 bg-white border-b border-zinc-150" aria-label="Sadarbības partneri">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">Mūsu sadarbības partneri</h3>
            <p className="text-zinc-400 text-xs mt-1.5 font-sans">(Informācija tiks pievienota)</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[
              { icon: <Building className="h-6 w-6" /> },
              { icon: <ShieldCheck className="h-6 w-6" /> },
              { icon: <Truck className="h-6 w-6" /> },
              { icon: <Wrench className="h-6 w-6" /> },
              { icon: <Leaf className="h-6 w-6" /> },
              { icon: <Boxes className="h-6 w-6" /> }
            ].map((partner, index) => (
              <div 
                key={index}
                className="p-5 border border-zinc-100 hover:border-[#FBBF24] bg-zinc-50 hover:bg-white transition-all duration-200 flex items-center justify-center py-8 shadow-sm rounded-[2px] text-zinc-400 hover:text-[#111827]"
              >
                {partner.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4. MŪSU DARBA PORTFOLIO SECTION (Horizontal scroll layout with 7 beautiful cards & navigation buttons) */}
      <section className="py-10 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]" aria-label="Mūsu darba portfolio sākumā">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
            <div className="text-center sm:text-left">
              <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Īstenotie projekti</span>
              <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">Mūsu darba portfolio</h2>
              <div className="h-1 w-12 bg-[#FBBF24] mx-auto sm:mx-0 mt-3" />
            </div>
            
            <div className="flex justify-center gap-2">
              <button 
                onClick={() => scrollContainer(-1)} 
                className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-[#FBBF24] hover:text-zinc-950 hover:border-[#FBBF24] text-zinc-700 transition-all cursor-pointer focus:outline-none shadow-sm"
                aria-label="Iepriekšējais projekts"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollContainer(1)} 
                className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-[#FBBF24] hover:text-zinc-950 hover:border-[#FBBF24] text-zinc-700 transition-all cursor-pointer focus:outline-none shadow-sm"
                aria-label="Nākamais projekts"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-4 px-1 scrollbar-none [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...PORTFOLIO_HOME, ...PORTFOLIO_HOME, ...PORTFOLIO_HOME].map((project, idx) => (
                <div 
                  key={`${project.id}-${idx}`}
                  onClick={() => navigate("/galerija", { state: { activeTab: project.sectionName } })}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[350px] flex-shrink-0 bg-zinc-50 border border-zinc-200 p-4 rounded-[2px] hover:border-zinc-300 cursor-pointer flex flex-col justify-between group transition-all duration-205 hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden border border-zinc-200/60 rounded-[2px] mb-4 bg-zinc-950">
                      <img 
                        src={project.url}
                        alt={project.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-[#FBBF24] text-[#111827] text-[9px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-[2px] border border-[#FBBF24]/35 shadow">
                        {project.tag}
                      </div>
                    </div>
                    <h3 className="text-zinc-900 text-[13px] sm:text-sm font-black tracking-tight group-hover:text-[#FBBF24] transition-colors uppercase leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-[11px] font-sans font-semibold mt-2 flex items-center gap-1.5 pt-2">
                      <span>📍 {project.location}</span>
                      <span className="text-zinc-300">|</span>
                      <span>📅 {project.year}. g.</span>
                    </p>
                  </div>
                  <div className="border-t border-zinc-200/60 pt-3 mt-4 text-[10px] font-bold text-[#FBBF24] uppercase tracking-widest flex items-center justify-between group-hover:text-[#FBBF24] transition-colors">
                    <span>Skatīt galeriju</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/galerija"
              className="inline-flex cursor-pointer bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 border border-zinc-250 px-8 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-sm"
              aria-label="Atvērt pilno projektu galeriju"
            >
              Skatīt visu portfolio
            </Link>
          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION (Durable and clean backdrop frame with beautiful border accents) */}
      <section id="contact-section-home" className="py-12 bg-zinc-200 border-t border-zinc-300" aria-label="Sazināties formā">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="bg-[#27272a] border border-zinc-800 p-6 sm:px-10 sm:py-9 rounded-[2px] shadow-2xl">
            
            <div className="text-center mb-10">
              <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest block font-mono">Sazinieties ar mums</span>
              <h2 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">Piesakiet bezmaksas tāmi</h2>
              <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center border border-[#FBBF24]/50 bg-[#18181b] rounded-[2px] animate-fadeIn transition-all">
                <span className="inline-block p-4 bg-[#FBBF24] text-zinc-950 mb-4 rounded-full">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <p className="text-white font-bold text-lg mb-2">Paldies!</p>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-lg mx-auto">
                  Jūsu pieteikums ir saņemts. Mūsu speciālists sazināsies ar Jums tuvāko stundu laikā.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
                
                <div className="text-zinc-200 text-xs sm:text-sm text-center leading-relaxed font-sans pb-4 border-b border-zinc-800 font-medium font-semibold">
                  Aizpildiet zemāk esošo formu un piesakiet bezmaksas tāmi sava objekta demontāžas darbiem vai tehnikas nomai. Pirms darbu sākšanas sniegsim pilnvērtīgu konsultāciju un palīdzēsim ar Būvvaldes dokumentācijas saskaņošanu.
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Jūsu Vārds / Uzņēmums <span className="text-[#FBBF24]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3 text-sm focus:outline-none rounded-[2px] transition-colors"
                      placeholder=""
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email & Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      E-pasts saziņai <span className="text-[#FBBF24]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#A1A1AA]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3 text-sm focus:outline-none rounded-[2px] transition-colors"
                        placeholder=""
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Tālruņa numurs <span className="text-[#FBBF24]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#A1A1AA]">
                        <Phone className="h-4 w-4" />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3 text-sm focus:outline-none rounded-[2px] transition-colors"
                        placeholder=""
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Ziņa / Objekta detaļas <span className="text-[#FBBF24]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3 text-[#A1A1AA] font-bold select-none">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3 text-sm focus:outline-none rounded-[2px] transition-colors"
                      placeholder="Lūdzu aprakstiet sev nepieciešamo pakalpojumu."
                    />
                  </div>
                  {formErrors.message && (
                    <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Subtle legal disclaimer note */}
                <p className="text-zinc-400 text-[11px] sm:text-xs">
                  Nospiežot 'Sūtīt pieteikumu', Jūs piekrītat mūsu Privātuma politikai un personas datu apstrādei, lai sagatavotu bezmaksas tāmi.
                </p>

                {/* Submit triggers inline */}
                <div className="text-left pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#FBBF24] hover:bg-yellow-400 text-[#111827] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-md hover:scale-[1.02] border border-transparent rounded-[2px]"
                    style={{ borderRadius: "2px" }}
                    aria-label="Sūtīt kontaktu pieteikumu"
                  >
                    Sūtīt pieteikumu
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Trigger Overlay */}
      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_HOME}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_HOME.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev !== null && prev < GALLERY_HOME.length - 1 ? prev + 1 : 0))}
        />
      )}

    </main>
  );
}
