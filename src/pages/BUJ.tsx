import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { useLanguage } from "../context/LanguageContext";
import { FaqItem } from "../types";

const FAQS_LV: FaqItem[] = [
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
  },
  {
    id: 4,
    question: "Kādos reģionos mēs strādājam?",
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
    answer: "Mūsu rīcībā is pilns tehnikas parks: no specializētiem rokas pneimatiskajiem instrumentiem līdz smagajiem kāpurķēžu ekskavatoriem, kas aprīkoti ar betona šķērēm, hidrauliskajiem āmuriem un drupinātājiem."
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
    answer: "Jā, mēs piedāvājam modernu kāpurķēžu ekskavatoru, mini ekskavatoru, kravas pašizgāzēju un būvgružu konteineru nomu. Noma ir pieejama gan uz stundām, gan uz ilgākiem termiņiem, komplektācijā ar mūsu pieredzējušiem un licencētiem operatoriem – lai nodrošinātu maksimālu drošību un efektivitāti Jūsu objektā."
  }
];

const FAQS_RU: FaqItem[] = [
  {
    id: 1,
    question: "Сколько стоит снос дома в Латвии и как составляется смета?",
    answer: "Стоимость сноса зависит от объема здания в кубических метрах, типа материалов (дерево, кирпич, железобетон), местоположения, возможностей подъезда спецтехники и требуемого оборудования. Для каждого проекта мы бесплатно составляем индивидуальную смету."
  },
  {
    id: 2,
    question: "Какие документы и согласования необходимы перед началом демонтажа здания?",
    answer: "Согласно латвийским строительным нормативам, перед началом работ необходимо подать проект сноса или карту подтверждения в местное Строительное управление и получить разрешение на производство демонтажных работ."
  },
  {
    id: 3,
    question: "Предоставляете ли вы официальные документы о надлежащей утилизации строительного мусора?",
    answer: "Да, мы являемся сертифицированным партнером по управлению отходами. Каждому клиенту по окончании работ выдается официальный акт об утилизации и декларация о приеме для предоставления в Стройуправу при сдаче объекта в эксплуатацию."
  },
  {
    id: 4,
    question: "В каких регионах вы предоставляете свои услуги?",
    answer: "Мы обеспечиваем услуги по демонтажу, сносу зданий и вывозу строительного мусора на всей территории Латвии, концентрируясь на Риге, Рижском районе, Земгале, Курземе и Видземе."
  },
  {
    id: 5,
    question: "Как быстро после заключения договора Вы готовы начать работу?",
    answer: "После подписания договора и получения всех необходимых разрешений от Строительного управления мы обычно приступаем к выполнению работ на Вашем объекте в течение 5-7 рабочих дней."
  },
  {
    id: 6,
    question: "Как обеспечивается безопасность труда на сложных подконтрольных объектах?",
    answer: "Все наши сотрудники обладают требуемой профессиональной квалификацией и сертификатами безопасности. Для каждого объекта заранее пишется индивидуальный детальный проект производства работ (ППР) со строгим соблюдением государственных законов по охране труда."
  },
  {
    id: 7,
    question: "Можно ли сохранить ценные материалы (например, старинные кирпичи или балки) при сносе?",
    answer: "Да, мы предлагаем селективный ручной демонтаж, в ходе которого наши специалисты аккуратно отделяют и сохраняют любые представляющие ценность материалы для их повторного использования по Вашему указанию."
  },
  {
    id: 8,
    question: "Какую строительную технику вы применяете на своих объектах сноса?",
    answer: "Мы обладаем собственным полным автопарком спецтехники: от профессиональных ручных пневматических инструментов до мощных гусеничных экскаваторов, оборудованных бетоноломами, гидроножницами и измельчителями."
  },
  {
    id: 9,
    question: "Каковы размеры контейнеров для строительного мусора и какой объем выбрать?",
    answer: "В нашем распоряжении прочные стальные контейнеры объемом от 8м³ до 30м³. Для небольшого ремонта (например, ремонт квартиры) достаточно объема 8м³-12м³, а для масштабных демонтажей используются контейнеры объемом от 20м³ до 30м³."
  },
  {
    id: 10,
    question: "В каких случаях для размещения мусорных контейнеров требуется официальное разрешение?",
    answer: "Если контейнер будет находиться на Вашей частной территории, специальное разрешение не требуется. Если контейнер планируется установить на проезжей части общего пользования, тротуаре или газоне, необходимо согласовать занятие площади в местном самоуправлении."
  },
  {
    id: 11,
    question: "Предоставляете ли вы в аренду строительную и демонтажную технику?",
    answer: "Да, мы сдаем в аренду современные гусеничные и колесные экскаваторы, мини-экскаваторы, самосвалы и контейнеры. Аренда техники доступна как с почасовой оплатой, так и на длительные сроки, обязательно в комплекте с опытными лицензированными операторами для наилучшей производительности на Вашем объекте."
  }
];

export default function BUJ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { currentLang } = useLanguage();

  const faqs = currentLang === "LV" ? FAQS_LV : FAQS_RU;

  const t = {
    LV: {
      meta: "Jautājumi un atbildes",
      title: "Biežāk uzdotie jautājumi",
      infoHeading: "Uzziniet visu par demontāžas darbu gaitu, cenām un normatīvajiem aktiem",
      infoDesc: "Zemāk apkopotas meklētājā populārākās atbildes par māju un ražošanas būvju nojaukšanu, saskaņošanas procesiem un nepieciešamajiem būvgružu apsaimniekošanas dokumentiem. Ja neatradāt atbildi uz savu jautājumu, nekautrējieties sazināties ar mūsu speciālistiem.",
      ariaBtn: "Atvērt jautājumu"
    },
    RU: {
      meta: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      infoHeading: "Узнайте всё о ходе демонтажных работ, стоимости и регулирующих актах",
      infoDesc: "Ниже собраны самые популярные ответы на вопросы о сносе жилых и промышленных зданий, процессах согласования и необходимых документах утилизации строительного мусора. Если Вы не нашли ответ на свой вопрос, не стесняйтесь обращаться к нашим специалистам за бесплатной консультацией.",
      ariaBtn: "Открыть вопрос"
    }
  }[currentLang];

  return (
    <main className="w-full bg-white text-zinc-900">
      
      {/* Top-left corner navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">{t.meta}</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            {t.title}
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Modern Intro & Dynamic accordions */}
      <section className="py-20" aria-label="Visi jautājumi">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-[2px] mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-zinc-900 text-sm sm:text-base font-bold tracking-tight mb-2.5">
              {t.infoHeading}
            </h2>
            <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans">
              {t.infoDesc}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="border border-zinc-200 rounded-[2px] bg-white overflow-hidden hover:border-[#FBBF24] transition-colors duration-150"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4.5 sm:p-5 text-left text-zinc-900 font-bold hover:bg-zinc-50 transition-colors gap-4"
                    aria-label={`${t.ariaBtn}: ${faq.question}`}
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
                    <div className="p-5 bg-zinc-50 text-zinc-650 text-xs sm:text-sm leading-relaxed border-t border-zinc-150 animate-fadeIn font-sans">
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
