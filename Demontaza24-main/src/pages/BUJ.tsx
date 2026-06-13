import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { FaqItem } from "../types";

const ALL_FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Cik maksā mājas nojaukšana Latvijā un kā veidojas tāme?",
    answer: "Nojaukšanas izmaksas ir atkarīgas no ēkas apjoma kubikmetros, materiālu tipa (koks, ķieģelis, dzelzbetons), atrašanās vietas, piekļuves iespējām un nepieciešamās tehnikas. Katram projektam SIA 'Demontāža 24/7' sagatavo individuālu tāmi bez maksas."
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
  },
  {
    id: 4,
    question: "Kādos reģionos strādā SIA 'Demontāža 24/7'?",
    answer: "Mēs nodrošinām demontāžas, jaukšanas un būvgružu izvešanas pakalpojumus visā Latvijas teritorijā, koncentrējoties uz Rīgu, Pierīgu, Zemgali, Kurzemi un Vidzemi."
  },
  {
    id: 5,
    question: "Cik ātri var tikt sagatavota pirmā testa versija vai uzsākti darbi objektā?",
    answer: "Pēc līguma parakstīšanas un visu Būvvaldes atļauju saņemšanas darbus objektā parasti spējam uzsākt 5-7 darba dienu laikā."
  },
  {
    id: 6,
    question: "Kā tiek kontrolēta darba drošība sarežģītos objektos?",
    answer: "Mūsu darbiniekiem is visas nepieciešamās profesionālās kvalifikācijas un sertifikāti. Katram objektam tiek izstrādāts individuāls darbu veikšanas projekts (DVP), stingri ievērojot valsts ugunsdrošības un darba aizsardzības likumdošanu."
  },
  {
    id: 7,
    question: "Vai ir iespējams saglabāt vērtīgus materiālus (piemēram, vēsturiskos ķieģeļus vai sijas) nojaukšanas procesā?",
    answer: "Jā, mēs piedāvājam selektīvo demontāžu, kuras laikā manuāli un rūpīgi atdalām un saglabājam vērtīgos materiālus otrreizējai izmantošanai pēc klienta pieprasījuma."
  },
  {
    id: 8,
    question: "Kāda mēroga tehniku jūs izmantojat nojaukšanas projektos?",
    answer: "Mūsu rīcībā ir pilns tehnikas parks: no specializētiem rokas pneimatiskajiem instrumentiem līdz smagajiem kāpurķēžu ekskavatoriem, kas aprīkoti ar betona šķērēm, hidrauliskajiem āmuriem un drupinātājiem."
  },
  {
    id: 9,
    question: "Kādi ir būvgružu konteineru izmēri un kurš piemērotākais manam objektam?",
    answer: "Mūsu klāstā ir dzelzs konteineri no 8m³ līdz 30m³. Nelieliem remontdarbiem (piem. dzīvokļa renovācija) pietiks ar 8m³-12m³, savukārt masīviem ēku jaukšanas darbiem izvēlas 20m³ līdz 30m³ tilpumus."
  },
  {
    id: 10,
    question: "Kādos gadījumos būvgružu konteineru novietošanai ir vajadzīga pašvaldības atļauja?",
    answer: "Ja konteiners tiks novietots privātā teritorijā, atļauja nav vajadzīga. Ja konteineru plānots novietot uz koplietošanas ceļa, ietves vai zaļajā zonā, ir jāsaskaņo ielas aizņemšana ar vietējo pašvaldību."
  },
  {
    id: 11,
    question: "Vai piedāvājat būvniecības un demontāžas tehnikas nomu?",
    answer: "Jā, SIA 'Demontāža 24/7' piedāvā modernu kāpurķēžu ekskavatoru, mini ekskavatoru, kravas pašizgāzēju un būvgružu konteineru nomu. Noma ir pieejama gan uz stundām, gan uz ilgākiem termiņiem, komplektācijā ar mūsu pieredzējušiem un licencētiem operatoriem – lai nodrošinātu maksimālu drošību un efektivitāti Jūsu objektā."
  }
];

export default function BUJ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="w-full bg-white text-zinc-900">
      
      {/* Top-left corner navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Jautājumi un atbildes</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            Biežāk uzdotie jautājumi
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Modern Intro & Dynamic accordions */}
      <section className="py-20" aria-label="Visi jautājumi">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-[2px] mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-zinc-900 text-sm sm:text-base font-bold tracking-tight mb-2.5">
              Uzziniet visu par demontāžas darbu gaitu, cenām un normatīvajiem aktiem
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
              Zemāk apkopotas meklētājā populārākās atbildes par māju un ražošanas būvju nojaukšanu, saskaņošanas procesiem un nepieciešamajiem būvgružu apsaimniekošanas dokumentiem. Ja neatradāt atbildi uz savu jautājumu, nekautrējieties sazināties ar mūsu speciālistiem.
            </p>
          </div>

          <div className="space-y-4">
            {ALL_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="border border-zinc-200 rounded-[2px] bg-white overflow-hidden hover:border-[#FBBF24] transition-colors duration-150"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4.5 sm:p-5 text-left text-zinc-900 font-bold hover:bg-zinc-50 transition-colors gap-4"
                    aria-label={`Atvērt jautājumu: ${faq.question}`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm md:text-base inline-flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <span className="text-[#FBBF24] flex-shrink-0">
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-zinc-50 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-150 animate-fadeIn font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Global Bottom Nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
