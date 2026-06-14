import React from "react";
import { useNavigate } from "react-router-dom";
import { Pickaxe, HardHat, Truck, Trash2, ChevronRight, Wrench, Mountain } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { useLanguage } from "../context/LanguageContext";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  imageUrl: string;
  icon: React.ReactNode;
}

export default function Pakalpojumi() {
  const navigate = useNavigate();
  const { currentLang } = useLanguage();

  const handlePieteiktClick = () => {
    navigate("/kontakti");
  };

  const SERVICES_DATA_LV: ServiceItem[] = [
    {
      id: 1,
      title: "Demontāžas darbi",
      description: "Mēs nodrošinām augstākās kvalitātes demontāžas pakalpojumus visdažādākā tipa ēkās un konstrukcijās. Mēs izmantojam modernu un mūsdienīgu tehniku, lai garantētu drošību demontāžas laikā un saudzētu blakus esošos objektus.",
      bullets: [
        "Metāla konstrukciju nojaukšana un demontēšana",
        "Betona un dzelzsbetona pamatu frēzēšana un kalšana",
        "Koka siju, grīdu un jumta kopņu demontāža",
        "Iekštelpu starpsienu un šķērssienu nojaukšana pirms remonta sākšanas"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp",
      icon: <Pickaxe className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Ēku un būvju nojaukšana",
      description: "Sarežģītu un paaugstinātas bīstamības objektu nojaukšana. Mēs saskaņosim ar Būvvaldi visus ar darba izpildi saistītos apstākļus, garantējot normatīvajiem aktiem atbilstošu procesu.",
      bullets: [
        "Nolietotu un bīstamu graustu likvidēšana pilsētvidē",
        "Bīstamu avārijas stāvoklī esošu konstrukciju demontāža",
        "Industriālo complexes un angāru jaukšana, izmantojot smago tehniku",
        "Izstrādāts detalizēts darbu veikšanas projekts (DVP)"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp",
      icon: <HardHat className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Būvgružu izvešana",
      description: "Ātra būvniecības un nojaukšanas atkritumu šķirošana, iekraušana, utilizācija un licencēta utilizācijas dokumentu sagatavošana. Mēs nodrošinām efektīvu būvgružu savākšanu.",
      bullets: [
        "Metāla, koka un jaukto būvniecības gružu izvešana",
        "Mehāniskā un manuālā būvgružu šķirošana un iekraušana",
        "Konteineri no 8m³ līdz 30m³ tilpumiem jebkuram apjomam",
        "Uzskatāma un oficiāla utilizācijas dokumentu sagatavošana iesniegšanai"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp",
      icon: <Truck className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Zemes ierīcības darbi un šķembas",
      description: "Mēs veicam dažāda apjoma un sarežģītības zemes ierīcības un planēšanas darbus, ceļu būvniecību, kā arī piedāvājam iegādei dažādas frakcijas šķembas un citus bērtos materiālus ar piegādi.",
      bullets: [
        "Teritoriju līmeņošana, sagatavošana būvniecībai un augsnes izstrāde",
        "Iegādei un piegādei pieejamas dažādas frakcijas šķembas",
        "Smilts, grants, šķembu un melnzemes piegāde un operatīva iestrāde",
        "Grāvju attīrīšana, dīķu rakšana un drenāžas vai komunikāciju izbūve"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/teritorijas-sakopsana.webp",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Būvgružu konteineru noma",
      description: "Mēs piedāvājam dažāda izmēra dzelzs būvgružu konteineru piegādi un nomu. Strādājam ātri – piegāde parasti notiek 24 stundu laikā no pasūtījuma saņemšanas.",
      bullets: [
        "Pieejami konteineri no 8m³ līdz 30m³ tilpumiem",
        "Ātra piegāde uz Jūsu izvēlēto objektu",
        "Elastīgi nomas termiņi gan fiziskām, gan juridiskām personām",
        "Profesionāla utilizācija un nogāde uz licencētiem poligoniem"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-konteineru-noma.webp",
      icon: <Trash2 className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Tehnikas noma",
      description: "Mēs piedāvājam uzticamu un modernu demontāžas, zemes rakšanas un kravas pārvadājumu tehnikas vienību nomu ar un bez sertificētu operatoru piesaistes.",
      bullets: [
        "Kāpurķēžu ekskavatori ar demontāžas šķērēm",
        "Manevrētspējīgi mini ekskavatori un iekrāvēji",
        "Trijasu un četrasu kravas pašizgāzēji lieliem tilpumiem",
        "Tehnikas operatīva transportēšana visā Baltijā"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24-6.webp",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      id: 7,
      title: "Šķembas un zeme",
      description: "Nodrošinām kvalitatīvu šķembu, grants, smilts un augstvērtīgas melnzemes piegādi jebkurā apjomā. Šie materiāli ir ideāli piemēroti plašam būvniecības un labiekārtošanas darbu klāstam.",
      bullets: [
        "Zemes ierīcības, planēšanas un teritorijas uzbēršanas darbiem",
        "Ēku un būvju pamatu izbūvei un drošai nostiprināšanai",
        "Ceļu būvei, piebraucamo ceļu un laukumu izveidei",
        "Auglīgas dārza melnzemes un tīras bērtās smilts piegāde"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/skembas.webp",
      icon: <Mountain className="h-6 w-6" />
    }
  ];

  const SERVICES_DATA_RU: ServiceItem[] = [
    {
      id: 1,
      title: "Демонтажные работы",
      description: "Мы предоставляем услуги по демонтажу высочайшего качества в самых разных типах зданий и конструкций. Мы используем современное оборудование, чтобы гарантировать безопасность в процессе работы и уберечь соседние объекты от повреждений.",
      bullets: [
        "Снос и аккуратный демонтаж любых металлоконструкций",
        "Фрезерование и долбление бетонных и железобетонных фундаментов",
        "Демонтаж деревянных балок, полов и сложных стропильных систем",
        "Снос межкомнатных перегородок и стен перед началом реновации или ремонта"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp",
      icon: <Pickaxe className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Снос зданий и сооружений",
      description: "Снос сложных и представляющих повышенную опасность объектов. Мы согласуем со Строительным управлением все связанные с выполнением работ вопросы, гарантируя процесс, полностью соответствующий законам.",
      bullets: [
        "Ликвидация изношенных и аварийных зданий и опасных построек в городской среде",
        "Демонтаж конструкций повышенной опасности, находящихся в аварийном состоянии",
        "Снос промышленных комплексов, фабрик и ангаров с использованием тяжелой техники",
        "Разработка детального и согласованного проекта производства работ (ППР)"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp",
      icon: <HardHat className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Вывоз строительного мусора",
      description: "Быстрая сортировка, погрузка и утилизация строительного мусора и отходов сноса, а также подготовка официальных актов об утилизации. Мы гарантируем быструю очистку объекта.",
      bullets: [
        "Профессиональный вывоз металлического, деревянного и смешанного строительного мусора",
        "Механическая и ручная сортировка и качественная погрузка накопившихся отходов",
        "Предоставление контейнеров объемом от 8м³ до 30м³ для любых масштабов работ",
        "Подготовка прозрачной официальной документации об утилизации для отчетных органов"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp",
      icon: <Truck className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Земляные работы и щебень",
      description: "Мы выполняем земляные и планировочные работы различного масштаба и сложности, строим дороги, а также предлагаем к приобретению щебень различных фракций и другие сыпучие материалы с доставкой.",
      bullets: [
        "Выравнивание территорий, подготовка площадок под застройку и разработка грунтов",
        "Широкий выбор фракций щебня, доступных к оперативной доставке на Ваш объект",
        "Быстрая доставка песка, гравия, щебня и чернозема с последующей качественной укладкой",
        "Очистка канав, профессиональная копка прудов, прокладка дренажа и систем коммуникаций"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/teritorijas-sakopsana.webp",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Аренда контейнеров для мусора",
      description: "Мы предлагаем доставку и аренду металлических контейнеров различного размера для строительного мусора. Работаем оперативно — доставка обычно выполняется в течение 24 часов с момента заказа.",
      bullets: [
        "В наличии контейнеры объемом от 8м³ до 30м³ под любые объемы",
        "Молниеносная доставка контейнера на выбранный Вами объект",
        "Гибкие условия аренды как для частных лиц, так и для крупных компаний",
        "Профессиональная утилизация и вывоз на сертифицированные латвийские полигоны"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-konteineru-noma.webp",
      icon: <Trash2 className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Аренда спецтехники",
      description: "Мы предлагаем надежную и современную технику для демонтажа, земляных работ и грузоперевозок в аренду с привлечением сертифицированных операторов или без них.",
      bullets: [
        "Гусеничные спец-экскаваторы с гидроножницами для демонтажа",
        "Сверхманевренные компактные мини-экскаваторы и современные погрузчики",
        "Трехосные и четырехосные надежные самосвалы под большие объемы перевозок",
        "Быстрая и оперативная транспортировка техники в любую точку Балтии"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24-6.webp",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      id: 7,
      title: "Щебень и грунт",
      description: "Обеспечиваем качественную доставку щебня, гравия, песка и высокосортного чернозема в любых количествах. Эти материалы идеально подходят для широкого спектра строительных и благоустроительных работ.",
      bullets: [
        "Для любых земляных работ, планировки неровных участков и оперативной обратной засыпки",
        "Для обустройства фундаментов зданий и их долговечного, качественного укрепления",
        "Для дорожного строительства, оперативного обустройства подъездных путей и площадок",
        "Доставка плодородного темного чернозема и чистого насыпного песка отличного качества"
      ],
      imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/skembas.webp",
      icon: <Mountain className="h-6 w-6" />
    }
  ];

  const servicesData = currentLang === "LV" ? SERVICES_DATA_LV : SERVICES_DATA_RU;

  const t = {
    LV: {
      meta: "Pakalpojumu apraksts",
      headerTitle: "Profesionāli demontāžas pakalpojumi",
      actionEstimate: "Pieteikt tāmēšanu",
      actionRent: "Pieteikties nomai"
    },
    RU: {
      meta: "Описание наших услуг",
      headerTitle: "Профессиональные демонтажные услуги",
      actionEstimate: "Заказать расчет сметы",
      actionRent: "Заказать аренду техники"
    }
  }[currentLang];

  return (
    <main className="w-full bg-white text-zinc-900">
      
      {/* Dynamic top-left corner 'Uz sākumu' navigations helper */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">{t.meta}</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            {t.headerTitle}
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Symmetrical list of detailed services stacked vertically */}
      <section className="py-12" aria-label="Pakalpojumu detaļas">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {servicesData.map((service) => (
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
                    alt={`Demontāža 24/7 - ${service.title}`}
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
                    service.id === 5 || service.id === 6 ? t.actionRent : t.actionEstimate
                  } - ${service.title}`}
                >
                  <span>{service.id === 5 || service.id === 6 ? t.actionRent : t.actionEstimate}</span>
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
