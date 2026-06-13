import React from "react";
import { useNavigate } from "react-router-dom";
import { Truck, Cpu, PenTool as Tool, Layers, ShieldCheck, HelpCircle, HardHat, Calendar } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";

interface TechItem {
  id: number;
  title: string;
  specs: string[];
  units: string;
  price: string;
  imageUrl: string;
  description: string;
  badge: string;
}

const TECH_DATA: TechItem[] = [
  {
    id: 1,
    title: "Ekskavators",
    description: "Kāpurķēžu ekskavators aprīkots ar hidrauliskajām demontāžas šķērēm, betona drupinātāju un rakšanas kausiem. Augsta efektivitāte un stabilitāte bīstamu konstrukciju demontāžai un lielgabarīta zemes darbiem.",
    specs: [
      "Jauda: 210 kW / Kraušanas augstums līdz 12m",
      "Aprīkojums: Demontāžas šķēres, drupinātāji, kausi",
      "Pielietojums: Konstrukciju graušana, pamatu laušana"
    ],
    units: "5 gab.",
    price: "45.00 EUR / stundā (ar licencētu operatoru un degvielu)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_1.webp",
    badge: "Nominālais smagais segments"
  },
  {
    id: 2,
    title: "Mini ekskavators",
    description: "Kompakts, manevrētspējīgs mini ekskavators darbiem ierobežotā telpā, iekštelpās vai labiekārtotās teritorijās. Ideāls komunikāciju tranšeju, pamatu bedru izstrādei.",
    specs: [
      "Svars: 1.8 - 3.5 tonnas",
      "Sliežu platums: maināms, saudzē zālienu",
      "Aprīkojums: dažāda izmēra rakšanas un planēšanas kausi"
    ],
    units: "4 gab.",
    price: "25.00 EUR / stundā vai no 120.00 EUR / dienā",
    imageUrl: "https://images.unsplash.com/photo-1579616710405-4300e12a455a?q=80&w=800",
    badge: "Manevrētspējīgs un kompakts"
  },
  {
    id: 3,
    title: "Kravas automašīnas",
    description: "Jaudīgi trīsasu un četrasu pašizgāzēji ar paaugstinātu kravnesību beramo materiālu, būvgružu un demontāžas blakusproduktu transportēšanai.",
    specs: [
      "Kravnesība: līdz 20-30 tonnām",
      "Tilpums: 16m³ - 22m³",
      "Papildus: aprīkoti ar automātisko kravas pārsegu"
    ],
    units: "6 gab.",
    price: "35.00 EUR / stundā vai pēc tāmētā reisu skaita",
    imageUrl: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800",
    badge: "Smagie pašizgāzēji"
  },
  {
    id: 4,
    title: "Būvgružu konteineri",
    description: "Masīvi dzelzs konteineri visu veidu nojaukšanas un būvniecības gružu un lielgabarīta atkritumu uzglabāšanai un pārvadāšanai uz licencētiem poligoniem.",
    specs: [
      "Pieejamie tilpumi: 8m³, 10m³, 12m³, 15m³, 20m³, 30m³",
      "Piegāde: 24 stundu laikā no pasūtījuma saņemšanas",
      "Uzglabāšana: iekļautas līdz 3 uzglabāšanas dienas objektā"
    ],
    units: "50+ gab.",
    price: "no 150.00 EUR / reiss (iekļaujot utilizācijas poligonu nodevas)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_4.webp",
    badge: "Plašs tilpumu spektrs"
  }
];

export default function MusuTehnika() {
  const navigate = useNavigate();

  const handlePiezvanit = () => {
    navigate("/kontakti");
  };

  return (
    <main className="w-full bg-white text-zinc-900 font-sans" id="musu-tehnika-page">
      
      {/* Top navigation helper */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Mūsdienīgs tehnikas parks</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            MŪSU TEHNIKA UN NOMAS PAKALPOJUMI
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Grid displays */}
      <section className="py-20" aria-label="Tehnikas parks">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-zinc-950 text-base sm:text-lg font-bold uppercase tracking-tight mb-4">
              Augstas veiktspējas aprīkojums jebkuras sarežģītības projektiem
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Mēs piedāvājam tirgus cenai atbilstošas nomas maksas specializētajai demontāžas, zemes darbu un transportēšanas tehnikai. Visa mūsu tehnika ir uzturēta teicamā tehniskajā kārtībā, atbilst ekoloģiskajiem standartiem un ir pieejama tūlītējai nomai ar saistošām licencēta operatora pakalpojumu likmēm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TECH_DATA.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-zinc-200 rounded-[2px] overflow-hidden hover:border-[#FBBF24] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                id={`tech-item-${item.id}`}
              >
                <div>
                  {/* Photo ratio styled with relative wrap - highly compact height */}
                  <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden bg-zinc-900 border-b border-zinc-100">
                    <img 
                      src={item.imageUrl} 
                      alt={`SIA Demontāža 24/7 - ${item.title}`} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-zinc-950/90 text-[#FBBF24] border border-[#FBBF24]/30 text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-[2px] z-10 font-bold">
                      {item.badge}
                    </div>
                  </div>

                  {/* Information Details block - compact padding and spacing */}
                  <div className="p-4 sm:p-5 space-y-3.5">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5">
                      <h3 className="text-zinc-950 text-base sm:text-[17px] font-black uppercase group-hover:text-[#FBBF24] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-right">
                        <span className="text-[9px] text-zinc-400 block font-bold uppercase tracking-widest leading-none">Pieejamība</span>
                        <span className="text-zinc-900 text-xs sm:text-sm font-black">{item.units}</span>
                      </div>
                    </div>

                    <p className="text-zinc-600 text-xs leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Specifications table - compact */}
                    <div className="bg-zinc-50 border border-zinc-150 p-3 rounded-[2px] space-y-1.55">
                      <h4 className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider font-mono">Tehniskā veiktspēja</h4>
                      <ul className="text-xs text-zinc-700 space-y-1 font-sans">
                        {item.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-[#FBBF24] font-black select-none">✓</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing box - compact */}
                    <div className="bg-[#FBBF24]/5 border border-[#FBBF24]/40 p-3 rounded-[2px]">
                      <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest font-mono block leading-none">Nomas maksa</span>
                      <p className="text-zinc-900 text-[12px] sm:text-xs font-black mt-1 font-sans">
                        {item.price}
                      </p>
                      <span className="text-[9.5px] text-zinc-400 uppercase tracking-wider block mt-1 font-sans leading-tight">
                        * Noma pieejama ar profesionāla operatora pakalpojumiem.
                      </span>
                    </div>

                  </div>
                </div>

                {/* Call to action at card bottom - compact */}
                <div className="p-4 sm:p-5 pt-0 border-t border-zinc-100 mt-1">
                  <button 
                    onClick={handlePiezvanit}
                    className="w-full bg-[#FBBF24] hover:bg-zinc-900 hover:text-white text-zinc-950 py-2.5 px-4 text-xs font-black uppercase tracking-widest border border-[#FBBF24] hover:border-zinc-900 transition-all duration-150 text-center rounded-[2px] select-none cursor-pointer shadow-sm"
                    aria-label={`Rezervēt vai pieteikt nomu - ${item.title}`}
                  >
                    Pieteikt nomas rezervāciju
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Quick FAQ info block */}
          <div className="mt-16 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 max-w-4xl mx-auto rounded-[2px]">
            <h3 className="text-zinc-900 text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-3">
              <HardHat className="h-5 w-5 text-[#FBBF24]" /> Operatīvs atbalsts un piegāde visā Latvijā
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
              Mēs paši nogādājam nepieciešamo tehniku un konteinerus uz jebkuru vietu Latvijā, Lietuvā un Igaunijā. Tehnikas noma ietver regulāru tehnisko apkopi un nepieciešamības gadījumā ātru vienības nomaiņu, lai nepieļautu dīkstāvi Jūsu būvlaukumā.
            </p>
          </div>

        </div>
      </section>

      {/* Quick bottom nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
