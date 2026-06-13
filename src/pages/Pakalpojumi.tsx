import React from "react";
import { useNavigate } from "react-router-dom";
import { Pickaxe, HardHat, Truck, Trash2, ChevronRight, Wrench, Mountain } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  imageUrl: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: "Demontāžas darbi",
    description: "SIA 'Demontāža 24/7' nodrošina visaugstākās precizitātes demontāžas darbu visdažādākā tipa ēkās un konstrukcijās. Mēs izmantojam modernus rīkus, lai garantētu pilnīgu kontroles sajūtu, saudzējot blakus esošās sienas un nesošos mezglus.",
    bullets: [
      "Metāla konstrukciju nojaukšana un demontēšana",
      "Betona un dzelzsbetona pamatu frēzēšana un kalšana",
      "Koka siju, grīdu un jumta kopņu demontāža",
      "Iekštelpu starpsienu un šķērssienu nojaukšana pirms remonta sākšanas"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    icon: <Pickaxe className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Ēku un būvju nojaukšana",
    description: "Sarežģītu un paaugstinātas bīstamības objektu pilnīga mehāniska nojaukšana. Mēs saskaņosim visus darba izpildes apstākļus ar Būvvaldi, garantējot mierīgu procesa nodrošināšanu.",
    bullets: [
      "Nolietotu un bīstamu graustu likvidēšana pilsētvidē",
      "Bīstamu avārijas stāvoklī esošu konstrukciju demontāža",
      "Industriālo kompleksu un angāru jaukšana, izmantojot smago tehniku",
      "Izstrādāts detalizēts darbu veikšanas projekts (DVP)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
    icon: <HardHat className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Būvgružu izvešana",
    description: "Efektīva un operatīva nojaukšanas atkritumu un lielgabarīta gružu iekraušana, šķirošana un nogādāšana uz licencētiem reģionālajiem poligoniem.",
    bullets: [
      "Metāla, koka un jaukto būvniecības gružu izvešana",
      "Mehāniskā un manuālā būvgružu šķirošana un iekraušana",
      "Konteineri no 8m³ līdz 30m³ tilpumiem jebkuram apjomam",
      "Uzskatāma un oficiāla utilizācijas dokumentu sagatavošana iesniegšanai"
    ],
    imageUrl: "https://images.unsplash.com/photo-1605712771501-c889a74fb12f?q=80&w=800",
    icon: <Truck className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Zemes ierīcības darbi",
    description: "SIA 'Demontāža 24/7' veic dažāda apjoma un sarežģītības zemes ierīcības un planēšanas darbus. Mēs piedāvājam jaudīgas tehnikas atbalstu rakšanas, kā arī materiālu izvešanas vai atvešanas darbos.",
    bullets: [
      "Teritoriju līmeņošana, sagatavošana būvniecībai un augsnes izstrāde",
      "Rievsienu un pamatu bedru izbūve, racējdarbi un blīvēšana",
      "Smilts, grants, šķembu un melnzemes piegāde un operatīva iestrāde",
      "Grāvju attīrīšana, dīķu rakšana un drenāžas vai komunikāciju izbūve"
    ],
    imageUrl: "https://images.unsplash.com/photo-1579829364409-7428b615b13a?q=80&w=800",
    icon: <Mountain className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Būvgružu konteineru noma",
    description: "Mēs piedāvājam jebkāda mēroga dzelzs būvgružu konteineru piegādi un nomu. Strādājam ātri – piegāde 24 stundu laikā no pasūtījuma saņemšanas.",
    bullets: [
      "Pieejami konteineri no 8m³ līdz 30m³ tilpumiem",
      "Ātra piegāde uz Jūsu izvēlēto objektu",
      "Elastīgi nomas termiņi gan fiziskām, gan juridiskām personām",
      "Profesionāla utilizācija un nogāde uz licencētiem poligoniem"
    ],
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800",
    icon: <Trash2 className="h-6 w-6" />
  },
  {
    id: 6,
    title: "Tehnikas noma",
    description: "SIA 'Demontāža 24/7' piedāvā uzticamu un modernu demontāžas, zemes rakšanas un kravas pārvadājumu tehnikas vienību parku ar un bez sertificētu operatoru piesaistes.",
    bullets: [
      "Kāpurķēžu ekskavatori ar demontāžas šķērēm",
      "Manevrētspējīgi mini ekskavatori un iekrāvēji",
      "Trijasu un četrasu kravas pašizgāzēji lieliem tilpumiem",
      "Tehnikas operatīva transportēšana visā Baltijā"
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    icon: <Wrench className="h-6 w-6" />
  }
];

export default function Pakalpojumi() {
  const navigate = useNavigate();

  const handlePieteiktClick = () => {
    navigate("/kontakti");
  };

  return (
    <main className="w-full bg-white text-zinc-900">
      
      {/* Dynamic top-left corner 'Uz sākumu' navigations helper */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Pakalpojumu apraksts</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            Profesionāli demontāžas pakalpojumi
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Symmetrical list of 4 detailed services stacked vertically */}
      <section className="py-12" aria-label="Pakalpojumu detaļas">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {SERVICES_DATA.map((service) => (
            <article 
              key={service.id} 
              className="bg-white border border-zinc-200 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch transition-all hover:border-[#FBBF24] hover:shadow-lg rounded-[2px] group"
              aria-label={service.title}
            >
              
              {/* Left Column: Image with CTA button directly below */}
              <div className="w-full lg:w-[35%] flex flex-col gap-3 flex-shrink-0">
                <div className="overflow-hidden border border-zinc-150 h-48 sm:h-56 lg:h-44 xl:h-48 rounded-[2px]">
                  <img
                    src={service.imageUrl}
                    alt={`SIA Demontāža 24/7 - ${service.title}`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Contact CTA Button placed directly under the image */}
                <button
                  onClick={handlePieteiktClick}
                  className="cursor-pointer inline-flex items-center justify-center bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 hover:text-zinc-950 border border-zinc-250 px-5 py-3 text-[11px] font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-sm gap-2 w-full"
                  aria-label={`${
                    service.id === 5 || service.id === 6 ? "Pieteikties nomai" : "Pieteikt tāmēšanu"
                  } - ${service.title}`}
                >
                  <span>{service.id === 5 || service.id === 6 ? "Pieteikties nomai" : "Pieteikt tāmēšanu"}</span>
                  <span className="text-sm font-black">→</span>
                </button>
              </div>

              {/* Right Column: Detailed Text info */}
              <div className="w-full lg:w-[65%] flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative p-2.5 bg-zinc-950 text-[#FBBF24] border border-[#FBBF24]/30 rounded-[2px] shadow-sm transition-all duration-300 group-hover:border-[#FBBF24] flex-shrink-0">
                      <div className="absolute -inset-0.5 bg-[#FBBF24]/5 rounded-[2px] blur opacity-40" />
                      <div className="relative z-10 text-[#FBBF24] group-hover:scale-105 transition-transform duration-200">
                        {service.icon}
                      </div>
                    </div>
                    <h2 className="text-zinc-950 text-base sm:text-lg font-bold tracking-tight uppercase group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Bullet points for mobile & desktop */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-500 font-sans text-xs pt-3 border-t border-zinc-100">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-1.5 leading-snug">
                        <ChevronRight className="h-4 w-4 text-[#FBBF24] flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* Global Quick Bottom Nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
