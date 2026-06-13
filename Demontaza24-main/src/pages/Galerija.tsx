import { useState } from "react";
import { Maximize2, MapPin, Calendar, ClipboardList, Clock, ArrowRight, Layers } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import Lightbox from "../components/Lightbox";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface Gallery {
  id: string;
  isTemplate: boolean;
  title: string;
  location: string;
  volume: string;
  duration: string;
  details: string;
  images: GalleryImage[];
}

interface Section {
  id: number;
  name: string;
  tag: string;
  galleries: Gallery[];
}

const SECTIONS_DATA: Section[] = [
  {
    id: 1,
    name: "Daudzdzīvokļu ēku demontāža",
    tag: "DAUDZDZĪVOKĻU ÉKU DEMONTĀŽA",
    galleries: [
      {
        id: "eku-1",
        isTemplate: false,
        title: "Daudzdzīvokļu dzīvojamās ēkas demontāža",
        location: "Rīga",
        volume: "2500 m²",
        duration: "3 nedēļas",
        details: "Izvesti 850 m³ betona un jaukto būvgružu, droša procesa norise pilsētvidē.",
        images: [
          { id: 1, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600", alt: "ēku-demontāža-rīga-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600", alt: "ēku-demontāža-rīga-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600", alt: "ēku-demontāža-rīga-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=600", alt: "ēku-demontāža-rīga-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600", alt: "ēku-demontāža-rīga-5" }
        ]
      },
      { id: "eku-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "eku-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  },
  {
    id: 2,
    name: "Privātmāju demontāža",
    tag: "PRIVĀTMĀJU DEMONTĀŽA",
    galleries: [
      {
        id: "priv-1",
        isTemplate: false,
        title: "Koka un mūra privātmājas demontāža",
        location: "Jūrmala",
        volume: "320 m²",
        duration: "5 dienas",
        details: "Pilnīga teritorijas nolīdzināšana, pamatu izrakšana un laukuma sakopšana.",
        images: [
          { id: 1, url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600", alt: "privātmāju-nojaukšana-jūrmala-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600", alt: "privātmāju-nojaukšana-jūrmala-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1513828729020-041400e47fe5?q=80&w=600", alt: "privātmāju-nojaukšana-jūrmala-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600", alt: "privātmāju-nojaukšana-jūrmala-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600", alt: "privātmāju-nojaukšana-jūrmala-5" }
        ]
      },
      { id: "priv-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "priv-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  },
  {
    id: 3,
    name: "Šķūņu demontāža",
    tag: "ŠĶŪŅU DEMONTĀŽA",
    galleries: [
      {
        id: "skun-1",
        isTemplate: false,
        title: "Nolietotas palīgbūves un vecā šķūņa demontāža",
        location: "Kuldīga",
        volume: "95 m²",
        duration: "2 dienas",
        details: "Koka konstrukciju nojaukšana, materiālu šķirošana un teritorijas sakopšana.",
        images: [
          { id: 1, url: "https://images.unsplash.com/photo-1513828729020-041400e47fe5?q=80&w=600", alt: "skunu-demontāža-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600", alt: "skunu-demontāža-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600", alt: "skunu-demontāža-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600", alt: "skunu-demontāža-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600", alt: "skunu-demontāža-5" }
        ]
      },
      { id: "skun-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "skun-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  },
  {
    id: 4,
    name: "Angāru demontāža",
    tag: "ANGĀRU DEMONTĀŽA",
    galleries: [
      {
        id: "ang-1",
        isTemplate: false,
        title: "Metāla karkasa angāra demontāža",
        location: "Olaine",
        volume: "1200 m²",
        duration: "1 nedēļa",
        details: "Angāra metāla karkasa nojaukšana un materiālu nodošana otrreizējai pārstrādei.",
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_1.webp", alt: "angāru-demontāža-olaine-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600", alt: "angāru-demontāža-olaine-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=600", alt: "angāru-demontāža-olaine-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600", alt: "angāru-demontāža-olaine-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600", alt: "angāru-demontāža-olaine-5" }
        ]
      },
      { id: "ang-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "ang-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  },
  {
    id: 5,
    name: "Industriālo objektu demontāža",
    tag: "INDUSTRIĀLĀ DEMONTĀŽA",
    galleries: [
      {
        id: "ind-1",
        isTemplate: false,
        title: "Ražošanas un noliktavas ēkas demontāža",
        location: "Daugavpils",
        volume: "8400 m³",
        duration: "4 nedēļas",
        details: "Nojaukta ēka, kas bija būvēta no gāzbetona un metāla konstrukcijām, pilnībā attīrot teritoriju.",
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp", alt: "industriālo-objektu-demontāža-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1590348697109-ae9ce0f0111f?q=80&w=600", alt: "industriālo-objektu-demontāža-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600", alt: "industriālo-objektu-demontāža-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600", alt: "industriālo-objektu-demontāža-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600", alt: "industriālo-objektu-demontāža-5" }
        ]
      },
      { id: "ind-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "ind-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  },
  {
    id: 6,
    name: "Būvgružu izvešana",
    tag: "BŪVGRUŽU IZVEŠANA",
    galleries: [
      {
        id: "gruz-1",
        isTemplate: false,
        title: "Būvniecības gružu un sārņu utilizēšana",
        location: "Mārupe",
        volume: "450 m³",
        duration: "3 dienas",
        details: "Šķiroto atkritumu iekraušana un izvešana uz licencēto reģionālo atkritumu poligonu.",
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_4.webp", alt: "buvgruzu-izvesana-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1605712771501-c889a74fb12f?q=80&w=600", alt: "buvgruzu-izvesana-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=600", alt: "buvgruzu-izvesana-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600", alt: "buvgruzu-izvesana-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600", alt: "buvgruzu-izvesana-5" }
        ]
      },
      { id: "gruz-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "gruz-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  },
  {
    id: 7,
    name: "Teritorijas sakārtošana",
    tag: "TERITORIJAS SAKĀRTOŠANA",
    galleries: [
      {
        id: "ter-1",
        isTemplate: false,
        title: "Būvlaukuma planēšana un sagatavošana",
        location: "Sigulda",
        volume: "4800 m²",
        duration: "4 dienas",
        details: "Teritorijas attīrīšana, koku sakņu izrakšana un laukuma sagatavošana turpmākiem darbiem.",
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp", alt: "teritorijas-sakartosana-sigulda-1" },
          { id: 2, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600", alt: "teritorijas-sakartosana-sigulda-2" },
          { id: 3, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600", alt: "teritorijas-sakartosana-sigulda-3" },
          { id: 4, url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600", alt: "teritorijas-sakartosana-sigulda-4" },
          { id: 5, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600", alt: "teritorijas-sakartosana-sigulda-5" }
        ]
      },
      { id: "ter-2", isTemplate: true, title: "Plānotais objekts #2", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] },
      { id: "ter-3", isTemplate: true, title: "Plānotais objekts #3", location: "Tiks precizēts", volume: "-", duration: "-", details: "Informācija sekos", images: [] }
    ]
  }
];

export default function Galerija() {
  const [activeTab, setActiveTab] = useState<string>(SECTIONS_DATA[0].name);
  const [activeSecId, setActiveSecId] = useState<number | null>(null);
  const [activeGalIdx, setActiveGalIdx] = useState<number | null>(null);
  const [activeImgIdx, setActiveImgIdx] = useState<number | null>(null);
  const [selectedImgMap, setSelectedImgMap] = useState<Record<string, number>>({});

  const activeSection = SECTIONS_DATA.find((sec) => sec.name === activeTab) || SECTIONS_DATA[0];

  const openLightbox = (secId: number, galIdx: number, imgIdx: number) => {
    setActiveSecId(secId);
    setActiveGalIdx(galIdx);
    setActiveImgIdx(imgIdx);
  };

  const closeLightbox = () => {
    setActiveSecId(null);
    setActiveGalIdx(null);
    setActiveImgIdx(null);
  };

  const getActiveImagesArray = (): GalleryImage[] => {
    if (activeSecId === null || activeGalIdx === null) return [];
    const sec = SECTIONS_DATA.find((s) => s.id === activeSecId);
    if (!sec) return [];
    return sec.galleries[activeGalIdx].images || [];
  };

  const handlePrev = () => {
    if (activeSecId === null || activeGalIdx === null || activeImgIdx === null) return;
    const imgs = getActiveImagesArray();
    if (!imgs.length) return;
    setActiveImgIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : imgs.length - 1));
  };

  const handleNext = () => {
    if (activeSecId === null || activeGalIdx === null || activeImgIdx === null) return;
    const imgs = getActiveImagesArray();
    if (!imgs.length) return;
    setActiveImgIdx((prev) => (prev !== null && prev < imgs.length - 1 ? prev + 1 : 0));
  };

  return (
    <main className="w-full bg-white text-zinc-900 border-none">
      
      {/* Top-left corner navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Īstenotie projekti</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            MŪSU DARBU PORTFOLIO
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Dynamic 7 Buttons Selector Component */}
      <section className="bg-[#FAF9F6] border-b border-zinc-200 py-6" aria-label="Galerijas navigācijas pogas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {SECTIONS_DATA.map((sec) => {
              const isActive = sec.name === activeTab;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.name)}
                  className={`cursor-pointer px-4 md:px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] outline-none border text-center whitespace-nowrap select-none ${
                    isActive 
                      ? "bg-[#FBBF24] text-zinc-950 border-[#FBBF24] shadow-sm" 
                      : "bg-white text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 border-zinc-200"
                  }`}
                  aria-label={`Skatīt kategoriju: ${sec.name}`}
                >
                  {sec.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Redesigned Gallery Grid displaying only the Active Content */}
      <section className="py-16" aria-label="Īstenoto projektu saraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            
            {/* Category Title Header - no black base box */}
            <div className="text-left border-l-4 border-[#FBBF24] pl-4">
              <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase font-mono">Izvēlētā sadaļa</span>
              <h2 className="text-zinc-950 text-xl sm:text-2.5xl font-black tracking-tight uppercase mt-0.5">
                {activeSection.name}
              </h2>
            </div>

            {/* Display galleries as full-width vertical stacked rows */}
            <div className="space-y-12 max-w-3xl mx-auto font-sans">
              {activeSection.galleries.map((gallery, gIdx) => {
                if (gallery.isTemplate) {
                  return (
                    <div 
                      key={gallery.id}
                      className="bg-zinc-50/40 border border-dashed border-zinc-300 p-5 sm:p-6 flex flex-col justify-center items-center rounded-[2px] min-h-[160px] text-center"
                    >
                      <Layers className="h-5.5 w-5.5 text-zinc-400 mb-2.5 animate-pulse" />
                      <p className="text-zinc-650 text-[12px] sm:text-xs font-black uppercase tracking-wider font-sans">
                        Informācija ir izstrādes stadijā
                      </p>
                    </div>
                  );
                }

                const activeImgIdx = selectedImgMap[gallery.id] ?? 0;
                const coverImg = gallery.images[activeImgIdx] || gallery.images[0] || { url: "", alt: "" };

                return (
                  <article 
                    key={gallery.id} 
                    className="bg-zinc-50 border border-zinc-200 p-4 sm:p-6 rounded-[2px] transition-all duration-200 hover:border-zinc-350 hover:shadow-md"
                    aria-label={gallery.title}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      
                      {/* Left Side: Images */}
                      <div className="md:col-span-6 space-y-3">
                        {/* 1. Large Cover Photo (aspect ratio close to square, slightly wider) */}
                        <div 
                          onClick={() => openLightbox(activeSection.id, gIdx, activeImgIdx)}
                          className="relative aspect-[1.25/1] w-full overflow-hidden group border border-zinc-200 cursor-pointer rounded-[2px] bg-zinc-100"
                        >
                          <img
                            src={coverImg.url}
                            alt={coverImg.alt}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                            <Maximize2 className="h-6 w-6 text-[#FBBF24] scale-90 group-hover:scale-100 transition-transform duration-200" />
                          </div>
                        </div>

                        {/* 2. Smaller Thumbnails - exactly 5 items, first is index 0 */}
                        <div className="grid grid-cols-5 gap-2">
                          {gallery.images.map((thumb, tIdx) => {
                            const isSelected = tIdx === activeImgIdx;
                            return (
                              <div
                                key={thumb.id}
                                onClick={() => {
                                  setSelectedImgMap(prev => ({ ...prev, [gallery.id]: tIdx }));
                                }}
                                className={`relative aspect-[1.25/1] w-full overflow-hidden group border cursor-pointer rounded-[2px] transition-all duration-150 ${
                                  isSelected ? "border-[#FBBF24] ring-2 ring-[#FBBF24]" : "border-zinc-200 hover:border-zinc-350"
                                }`}
                              >
                                <img
                                  src={thumb.url}
                                  alt={thumb.alt}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Side: Text details */}
                      <div className="md:col-span-6 flex flex-col justify-between h-full space-y-4 text-left">
                        <div>
                          {/* Title block */}
                          <div className="border-b border-zinc-200 pb-3 mb-4">
                            <span className="text-[10px] text-[#FBBF24] font-black uppercase tracking-widest font-mono">
                              {activeSection.tag}
                            </span>
                            <h3 className="text-zinc-950 text-base sm:text-lg font-black tracking-tight uppercase leading-tight mt-1">
                              {gallery.title}
                            </h3>
                          </div>

                          {/* Parameters details */}
                          <div className="space-y-2.5 text-xs text-zinc-650 font-sans">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-[#FBBF24] flex-shrink-0" />
                              <span className="font-semibold text-zinc-500 w-16">Vieta:</span>
                              <span className="text-zinc-900 font-bold">{gallery.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ClipboardList className="h-4 w-4 text-[#FBBF24] flex-shrink-0" />
                              <span className="font-semibold text-zinc-500 w-16">Apjoms:</span>
                              <span className="text-zinc-900 font-bold">{gallery.volume}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-[#FBBF24] flex-shrink-0" />
                              <span className="font-semibold text-zinc-500 w-16">Termiņš:</span>
                              <span className="text-zinc-900 font-bold">{gallery.duration}</span>
                            </div>
                          </div>

                          {/* Description Text */}
                          <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans border-t border-zinc-150 pt-3">
                            {gallery.details}
                          </p>
                        </div>

                        {/* Status Stamp */}
                        <div className="border-t border-zinc-200/50 pt-4 mt-4 flex items-center justify-between text-[11px] text-zinc-400 font-bold font-sans uppercase tracking-wider">
                          <span className="font-semibold text-zinc-500">Projekta statuss</span>
                          <span className="text-zinc-900 font-black tracking-widest bg-[#FBBF24] px-4 py-1.5 rounded-[1px] text-[10px]">
                            PABEIGTS
                          </span>
                        </div>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox for Active Project and Selected Index */}
      {activeSecId !== null && activeGalIdx !== null && activeImgIdx !== null && (
        <Lightbox
          images={getActiveImagesArray()}
          currentIndex={activeImgIdx}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Global Bottom Nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
