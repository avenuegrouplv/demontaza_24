import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Maximize2, MapPin, Calendar, ClipboardList, Clock, ArrowRight, Layers } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import Lightbox from "../components/Lightbox";
import { useLanguage } from "../context/LanguageContext";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface Gallery {
  id: string;
  isTemplate: boolean;
  title: Record<"LV" | "RU", string>;
  location: Record<"LV" | "RU", string>;
  volume: Record<"LV" | "RU", string>;
  duration: Record<"LV" | "RU", string>;
  details: Record<"LV" | "RU", string>;
  images: GalleryImage[];
}

interface Section {
  id: number;
  name: string; // Used as key/id
  nameTranslated: Record<"LV" | "RU", string>;
  tag: Record<"LV" | "RU", string>;
  galleries: Gallery[];
}

const SECTIONS_DATA: Section[] = [
  {
    id: 1,
    name: "Daudzdzīvokļu ēku demontāža",
    nameTranslated: {
      LV: "Daudzdzīvokļu ēku demontāža",
      RU: "Демонтаж многоквартирных домов"
    },
    tag: {
      LV: "DAUDZDZĪVOKĻU ĒKU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ МНОГОКВАРТИРНЫХ ДОМОВ"
    },
    galleries: [
      {
        id: "eku-1",
        isTemplate: false,
        title: {
          LV: "Dzīvojamās ēkas demontāža Rīgā",
          RU: "Демонтаж жилого дома в Риге"
        },
        location: { LV: "Rīga", RU: "Рига" },
        volume: { LV: "2500 m²", RU: "2500 м²" },
        duration: { LV: "3 nedēļas", RU: "3 недели" },
        details: {
          LV: "Izvesti 850 m³ betona un jaukto būvgružu, droša procesa norise pilsētvidē. Informācija sekos.",
          RU: "Вывезено 850 м³ бетона и смешанного строительного мусора, безопасное ведение процесса в городской среде. Информация последует."
        },
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp", alt: "ēku-demontāža-rīga-1" }
        ]
      },
      {
        id: "eku-2",
        isTemplate: true,
        title: { LV: "Objekts #2", RU: "Объект #2" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      },
      {
        id: "eku-3",
        isTemplate: true,
        title: { LV: "Objekts #3", RU: "Объект #3" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      }
    ]
  },
  {
    id: 2,
    name: "Privātmāju demontāža",
    nameTranslated: {
      LV: "Privātmāju demontāža",
      RU: "Демонтаж частных домов"
    },
    tag: {
      LV: "PRIVĀTMĀJU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ ЧАСТНЫХ ДОМОВ"
    },
    galleries: [
      {
        id: "priv-1",
        isTemplate: false,
        title: {
          LV: "Divstāvu mūra privātmājas demontāža Jūrmalā",
          RU: "Демонтаж двухэтажного каменного частного дома в Юрмале"
        },
        location: { LV: "Jūrmala", RU: "Юрмала" },
        volume: { LV: "320 m²", RU: "320 м²" },
        duration: { LV: "5 dienas", RU: "5 дней" },
        details: {
          LV: "Pilnīga teritorijas nolīdzināšana, pamatu izrakšana un laukuma sakopšana. Informācija sekos.",
          RU: "Полное выравнивание территории, раскопка фундамента и качественная уборка площадки. Информация последует."
        },
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/privatmaju-demontaza.webp", alt: "privātmāju-nojaukšana-jūrmala-1" }
        ]
      },
      {
        id: "priv-2",
        isTemplate: true,
        title: { LV: "Objekts #2", RU: "Объект #2" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      },
      {
        id: "priv-3",
        isTemplate: true,
        title: { LV: "Objekts #3", RU: "Объект #3" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      }
    ]
  },
  {
    id: 3,
    name: "Palīgēku demontāža",
    nameTranslated: {
      LV: "Palīgēku demontāža",
      RU: "Демонтаж хозпостроек"
    },
    tag: {
      LV: "PALĪGĒKU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ ВСПОМОГАТЕЛЬНЫХ СТРОЕНИЙ"
    },
    galleries: [
      {
        id: "skun-1",
        isTemplate: false,
        title: {
          LV: "Gāzbetona palīgēkas demontāža Kuldīgā",
          RU: "Демонтаж газобетонной хозяйственной постройки в Кулдиге"
        },
        location: { LV: "Kuldīga", RU: "Кулдига" },
        volume: { LV: "95 m²", RU: "95 м²" },
        duration: { LV: "2 dienas", RU: "2 дня" },
        details: {
          LV: "Koka konstrukciju nojaukšana, materiālu šķirošana un teritorijas sakopšana. Informācija sekos.",
          RU: "Снос старых деревянных конструкций, сортировка стройматериалов и уборка территории. Информация последует."
        },
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/paligekas-demontaza.webp", alt: "paligekas-demontaza" }
        ]
      },
      {
        id: "skun-2",
        isTemplate: true,
        title: { LV: "Objekts #2", RU: "Объект #2" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      },
      {
        id: "skun-3",
        isTemplate: true,
        title: { LV: "Objekts #3", RU: "Объект #3" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      }
    ]
  },
  {
    id: 5,
    name: "Industriālo objektu demontāža",
    nameTranslated: {
      LV: "Industriālo objektu demontāža",
      RU: "Демонтаж пром-объектов"
    },
    tag: {
      LV: "INDUSTRIĀLO OBJEKTU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ ПРОМЫШЛЕННЫХ ОБЪЕКТОВ"
    },
    galleries: [
      {
        id: "ind-1",
        isTemplate: false,
        title: {
          LV: "Dzelzbetona ražošanas ceha demontāža Daugavpilī",
          RU: "Демонтаж железобетонного производственного цеха в Даугавпилсе"
        },
        location: { LV: "Daugavpils", RU: "Даугавпилс" },
        volume: { LV: "8400 m³", RU: "8400 м³" },
        duration: { LV: "4 nedēļas", RU: "4 недели" },
        details: {
          LV: "Nojaukta ēka, kas bija būvēta no gāzbetona un metāla konstrukcijām, pilnībā attīrot teritoriju. Informācija sekos.",
          RU: "Снесено здание, построенное из газобетона и металлоконструкций, с полной очисткой территории. Информация последует."
        },
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/industriala-objekta-demontaza.webp", alt: "industriālo-objektu-demontāža-1" }
        ]
      },
      {
        id: "ind-2",
        isTemplate: true,
        title: { LV: "Objekts #2", RU: "Объект #2" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      },
      {
        id: "ind-3",
        isTemplate: true,
        title: { LV: "Objekts #3", RU: "Объект #3" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      }
    ]
  },
  {
    id: 6,
    name: "Būvgružu izvešana",
    nameTranslated: {
      LV: "Būvgružu izvešana",
      RU: "Вывоз строительного мусора"
    },
    tag: {
      LV: "BŪVGRUŽU IZVEŠANA",
      RU: "ВЫВОЗ СТРОИТЕЛЬНОГО МУСОРА"
    },
    galleries: [
      {
        id: "gruz-1",
        isTemplate: false,
        title: {
          LV: "Būvgružu šķirošana un izvešana no objekta Mārupē",
          RU: "Сортировка и вывоз строительного мусора с объекта в Марупе"
        },
        location: { LV: "Mārupe", RU: "Марупе" },
        volume: { LV: "450 m³", RU: "450 м³" },
        duration: { LV: "3 dienas", RU: "3 дня" },
        details: {
          LV: "Šķiroto atkritumu iekraušana un izvešana uz licencēto reģionālo atkritumu poligonu. Informācija sekos.",
          RU: "Погрузка отсортированных отходов и организованный вывоз на лицензированный региональный полигон. Информация последует."
        },
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp", alt: "buvgruzu-izvesana-1" }
        ]
      },
      {
        id: "gruz-2",
        isTemplate: true,
        title: { LV: "Objekts #2", RU: "Объект #2" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      },
      {
        id: "gruz-3",
        isTemplate: true,
        title: { LV: "Objekts #3", RU: "Объект #3" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      }
    ]
  },
  {
    id: 7,
    name: "Teritorijas sakopšana",
    nameTranslated: {
      LV: "Teritorijas sakopšana",
      RU: "Уборка территорий"
    },
    tag: {
      LV: "TERITORIJAS SAKOPŠANA",
      RU: "ОЧИСТКА И УБОРКА ТЕРРИТОРИИ"
    },
    galleries: [
      {
        id: "ter-1",
        isTemplate: false,
        title: {
          LV: "Zemes līdzināšana demontāžas objektā Siguldā",
          RU: "Выравнивание земли на демонтажном объекте в Сигулде"
        },
        location: { LV: "Sigulda", RU: "Сигулда" },
        volume: { LV: "4800 m²", RU: "4800 м²" },
        duration: { LV: "4 dienas", RU: "4 дня" },
        details: {
          LV: "Teritorijas attīrīšana, koku sakņu izrakšana un laukuma sagatavošana turpmākiem darbiem. Informācija sekos.",
          RU: "Очистка территории, корчевание корней деревьев и подготовка площадки для последующих этапов строительства. Информация последует."
        },
        images: [
          { id: 1, url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/teritorijas-sakopsana.webp", alt: "teritorijas-sakartosana-sigulda-1" }
        ]
      },
      {
        id: "ter-2",
        isTemplate: true,
        title: { LV: "Objekts #2", RU: "Объект #2" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      },
      {
        id: "ter-3",
        isTemplate: true,
        title: { LV: "Objekts #3", RU: "Объект #3" },
        location: { LV: "-", RU: "-" },
        volume: { LV: "-", RU: "-" },
        duration: { LV: "-", RU: "-" },
        details: { LV: "Informācija sekos", RU: "Информация последует" },
        images: []
      }
    ]
  }
];

export default function Galerija() {
  const locationState = useLocation();
  const stateActiveTab = locationState.state?.activeTab;
  const { currentLang } = useLanguage();

  const [activeTab, setActiveTab ] = useState<string>(() => {
    if (stateActiveTab && SECTIONS_DATA.some((s) => s.name === stateActiveTab)) {
      return stateActiveTab;
    }
    return SECTIONS_DATA[0].name;
  });

  useEffect(() => {
    if (stateActiveTab && SECTIONS_DATA.some((s) => s.name === stateActiveTab)) {
      setActiveTab(stateActiveTab);
    }
  }, [stateActiveTab]);

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

  const t = {
    LV: {
      meta: "Īstenotie projekti",
      title: "MŪSU DARBU PORTFOLIO",
      selectedSection: "Izvēlētā sadaļa",
      noImages: "Nav attēlu",
      descTitle: "Projekta apraksts",
      paramPlace: "Vieta:",
      paramVol: "Apjoms:",
      paramLimit: "Termiņš:",
      statusTitle: "Projekta statuss",
      statusCompleted: "PABEIGTS",
      statusPending: "SAGATAVOŠANĀ",
      soonTip: "Papildu attēli būs pieejami drīzumā"
    },
    RU: {
      meta: "Выполненные работы",
      title: "ПОРТФОЛИО НАШИХ РАБОТ",
      selectedSection: "Выбранный раздел",
      noImages: "Нет изображений",
      descTitle: "Описание проекта",
      paramPlace: "Место:",
      paramVol: "Объем:",
      paramLimit: "Срок:",
      statusTitle: "Статус проекта",
      statusCompleted: "ЗАВЕРШЕН",
      statusPending: "В ПОДГОТОВКЕ",
      soonTip: "Дополнительные изображения появятся в ближайшее время"
    }
  }[currentLang];

  return (
    <main className="w-full bg-white text-zinc-900 border-none">
      
      {/* Top-left corner navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">{t.meta}</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            {t.title}
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Dynamic Selector Buttons Component */}
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
                  aria-label={`Skatīt kategoriju: ${sec.nameTranslated[currentLang]}`}
                >
                  {sec.nameTranslated[currentLang]}
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
            
            {/* Category Title Header */}
            <div className="text-left border-l-4 border-[#FBBF24] pl-4">
              <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase font-mono">{t.selectedSection}</span>
              <h2 className="text-zinc-950 text-xl sm:text-2.5xl font-black tracking-tight uppercase mt-0.5">
                {activeSection.nameTranslated[currentLang]}
              </h2>
            </div>

            {/* Display galleries as full-width vertical stacked rows */}
            <div className="space-y-8 max-w-2xl mx-auto font-sans">
              {activeSection.galleries.map((gallery, gIdx) => {
                if (gallery.isTemplate) {
                  return (
                    <article 
                      key={gallery.id} 
                      className="bg-zinc-50/50 border border-dashed border-zinc-300 p-4 sm:p-5 rounded-[2px] opacity-75 relative overflow-hidden"
                      aria-label={gallery.title[currentLang]}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start select-none">
                        
                        {/* Left Side: Empty/Skeleton Image */}
                        <div className="md:col-span-6 space-y-2">
                          {/* Large Cover Placeholder */}
                          <div className="relative aspect-[3/2] w-full overflow-hidden border border-zinc-200 rounded-[2px] bg-zinc-200/50 flex flex-col items-center justify-center p-4">
                            <Layers className="h-7 w-7 text-zinc-400 mb-1.5 animate-pulse" />
                            <span className="text-[10px] text-zinc-400 font-sans italic">{t.noImages}</span>
                          </div>

                          {/* 5 Empty template thumbnails */}
                          <div className="grid grid-cols-5 gap-1.5">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <div
                                key={num}
                                className="relative aspect-[3/2] w-full border border-dashed border-zinc-250 rounded-[2px] bg-zinc-200/20 flex items-center justify-center"
                              >
                                <span className="text-zinc-300 font-mono text-[7.5px]">#{num}</span>
                              </div>
                            ))}
                          </div>
                        </div>
  
                        {/* Right Side: Skeleton text details */}
                        <div className="md:col-span-6 flex flex-col justify-between h-full space-y-3.5 text-left">
                          <div>
                            {/* Title block */}
                            <div className="border-b border-zinc-200 pb-2 mb-3">
                              <span className="text-[9px] text-zinc-400 font-black uppercase tracking-widest font-mono">
                                {t.descTitle}
                              </span>
                              <h3 className="text-zinc-500 text-sm font-black tracking-tight uppercase leading-tight mt-0.5">
                                {gallery.title[currentLang]}
                              </h3>
                            </div>
  
                            {/* Parameters details */}
                            <div className="space-y-2 text-[11px] text-zinc-500 font-sans">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5 text-zinc-300 flex-shrink-0" />
                                <span className="font-semibold text-zinc-400 w-14">{t.paramPlace}</span>
                                <span className="text-zinc-500">{gallery.location[currentLang]}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <ClipboardList className="h-3.5 w-3.5 text-zinc-300 flex-shrink-0" />
                                <span className="font-semibold text-zinc-400 w-14">{t.paramVol}</span>
                                <span className="text-zinc-500">{gallery.volume[currentLang]}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-3.5 w-3.5 text-zinc-300 flex-shrink-0" />
                                <span className="font-semibold text-zinc-400 w-14">{t.paramLimit}</span>
                                <span className="text-zinc-500">{gallery.duration[currentLang]}</span>
                              </div>
                            </div>
  
                            {/* Description Text */}
                            <p className="mt-3 text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-sans border-t border-zinc-150 pt-2 italic">
                              {gallery.details[currentLang]}
                            </p>
                          </div>
  
                          {/* Status Stamp */}
                          <div className="border-t border-zinc-200/50 pt-3 mt-3 flex items-center justify-between text-[10px] text-zinc-400 font-bold font-sans uppercase tracking-wider">
                            <span className="font-semibold text-zinc-400">{t.statusTitle}</span>
                            <span className="text-zinc-500 font-black tracking-widest bg-zinc-200 px-3 py-1 rounded-[1px] text-[9.5px]">
                              {t.statusPending}
                            </span>
                          </div>
                        </div>
  
                      </div>
                    </article>
                  );
                }

                const currentCoverIdx = selectedImgMap[gallery.id] ?? 0;
                const coverImg = gallery.images[currentCoverIdx] || gallery.images[0] || { url: "", alt: "" };

                return (
                  <article 
                    key={gallery.id} 
                    className="bg-zinc-50 border border-zinc-200 p-4 sm:p-5 rounded-[2px] transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
                    aria-label={gallery.title[currentLang]}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      
                      {/* Left Side: Cover Image with 5 Thumbnails */}
                      <div className="md:col-span-6 space-y-2">
                        {/* Large Cover Photo */}
                        <div 
                          onClick={() => openLightbox(activeSection.id, gIdx, currentCoverIdx)}
                          className="relative aspect-[3/2] w-full overflow-hidden group border border-zinc-200 cursor-pointer rounded-[2px] bg-zinc-100"
                        >
                          <img
                            src={coverImg.url}
                            alt={coverImg.alt}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                            <Maximize2 className="h-5 w-5 text-[#FBBF24] scale-90 group-hover:scale-100 transition-transform duration-200" />
                          </div>
                        </div>

                        {/* 5 Thumbnails: 1st is the main cover image, other 4 are empty visual slots */}
                        <div className="grid grid-cols-5 gap-1.5">
                          {/* 1st thumbnail (actual image) */}
                          <div
                            onClick={() => setSelectedImgMap(prev => ({ ...prev, [gallery.id]: 0 }))}
                            className={`relative aspect-[3/2] w-full overflow-hidden group border cursor-pointer rounded-[2px] transition-all duration-150 ${
                              currentCoverIdx === 0 ? "border-[#FBBF24] ring-1.5 ring-[#FBBF24]" : "border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            <img
                              src={gallery.images[0]?.url || ""}
                              alt={gallery.images[0]?.alt || ""}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                          </div>

                          {/* 4 empty placeholders to make standard 5 slots total */}
                          {[2, 3, 4, 5].map((num) => (
                            <div
                              key={num}
                              className="relative aspect-[3/2] w-full border border-dashed border-zinc-200 rounded-[2px] bg-zinc-100 flex items-center justify-center"
                              title={t.soonTip}
                            >
                              <span className="text-zinc-300 font-mono text-[7.5px]">#{num}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Text details */}
                      <div className="md:col-span-6 flex flex-col justify-between h-full space-y-3.5 text-left">
                        <div>
                          {/* Title block */}
                          <div className="border-b border-zinc-200 pb-2 mb-3">
                            <span className="text-[9px] text-[#FBBF24] font-black uppercase tracking-widest font-mono">
                              {activeSection.tag[currentLang]}
                            </span>
                            <h3 className="text-zinc-950 text-sm font-black tracking-tight uppercase leading-tight mt-0.5">
                              {gallery.title[currentLang]}
                            </h3>
                          </div>

                          {/* Parameters details */}
                          <div className="space-y-2 text-[11px] text-zinc-650 font-sans">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3.5 w-3.5 text-[#FBBF24] flex-shrink-0" />
                              <span className="font-semibold text-zinc-500 w-14">{t.paramPlace}</span>
                              <span className="text-zinc-900 font-bold">{gallery.location[currentLang]}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ClipboardList className="h-3.5 w-3.5 text-[#FBBF24] flex-shrink-0" />
                              <span className="font-semibold text-zinc-500 w-14">{t.paramVol}</span>
                              <span className="text-zinc-900 font-bold">{gallery.volume[currentLang]}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5 text-[#FBBF24] flex-shrink-0" />
                              <span className="font-semibold text-zinc-500 w-14">{t.paramLimit}</span>
                              <span className="text-zinc-900 font-bold">{gallery.duration[currentLang]}</span>
                            </div>
                          </div>

                          {/* Description Text */}
                          <p className="mt-3 text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-sans border-t border-zinc-150 pt-2">
                            {gallery.details[currentLang]}
                          </p>
                        </div>

                        {/* Status Stamp */}
                        <div className="border-t border-zinc-200/50 pt-3 mt-3 flex items-center justify-between text-[10px] text-zinc-400 font-bold font-sans uppercase tracking-wider">
                          <span className="font-semibold text-zinc-500">{t.statusTitle}</span>
                          <span className="text-zinc-900 font-black tracking-widest bg-[#FBBF24] px-3 py-1 rounded-[1px] text-[9.5px]">
                            {t.statusCompleted}
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
