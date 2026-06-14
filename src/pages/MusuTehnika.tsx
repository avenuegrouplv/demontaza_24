import React from "react";
import { useNavigate } from "react-router-dom";
import { Truck, Cpu, PenTool as Tool, Layers, ShieldCheck, HelpCircle, HardHat, Calendar } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { useLanguage } from "../context/LanguageContext";

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

const TECH_DATA_LV: TechItem[] = [
  {
    id: 1,
    title: "Ekskavators Komatsu PC210",
    description: "Kāpurķēžu ekskavators aprīkots ar hidrauliskajām demontāžas šķērēm, betona drupinātāju un rakšanas kausiem. Augsta efektivitāte un stabilitāte bīstamu konstrukciju demontāžai un lielgabarīta zemes darbiem.",
    specs: [
      "Jauda: 210 kW / Kraušanas augstums līdz 12m",
      "Aprīkojums: Demontāžas šķēres, drupinātāji, kausi",
      "Pielietojums: Konstrukciju graušana, pamatu laušana"
    ],
    units: "5 gab.",
    price: "120.00 EUR + PVN / stundā (kopā ar profesionālu operatoru un degvielu)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/liela-ekskavatora-Komatsu-noma.webp",
    badge: "Nominālais smagais segments"
  },
  {
    id: 2,
    title: "Ekskavators Volvo ECR35D",
    description: "Kompakts, manevrētspējīgs mini ekskavators darbiem ierobežotā telpā, iekštelpās vai labiekārtotās teritorijās. Ideāls komunikāciju tranšeju, pamatu bedru izstrādei.",
    specs: [
      "Svars: 1.8 - 3.5 tonnas",
      "Sliežu platums: maināms, saudzē zālienu",
      "Aprīkojums: dažāda izmēra rakšanas un planēšanas kausi"
    ],
    units: "4 gab.",
    price: "70.00 EUR + PVN / stundā (kopā ar profesionālu operatoru un degvielu)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/maza-ekskavatora-Volvo-noma.webp",
    badge: "Manevrētspējīgs un kompakts"
  },
  {
    id: 3,
    title: "Kravas automašīna MAN",
    description: "Jaudīgi trīsasu un četrasu pašizgāzēji ar paaugstinātu kravnesību beramo materiālu, būvgružu un demontāžas blakusproduktu transportēšanai.",
    specs: [
      "Kravnesība: līdz 20-30 tonnām",
      "Tilpums: 16m³ - 22m³",
      "Papildus: aprīkoti ar automātisko kravas pārsegu"
    ],
    units: "6 gab.",
    price: "70.00 EUR + PVN / stundā vai pēc tāmētā reisu skaita",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/smago-automasinu-MAN-noma.webp",
    badge: "Smagie pašizgāzēji"
  },
  {
    id: 4,
    title: "Būvgružu konteineri",
    description: "Masīvi dzelzs konteineri visu veidu nojaukšanas un būvniecības gružu un lielgabarīta atkritumu uzglabāšanai un pārvadāšanai uz licencētiem poligoniem. Pieejamie izmēri: 8m³, 10m³, 12m³, 15m³, 20m³, 30m³.",
    specs: [
      "Iespējamie izmēri: 8m³, 10m³, 12m³, 15m³, 20m³, 30m³ (tilpumi)",
      "Piegāde: 24 stundu laikā no pasūtījuma saņemšanas",
      "Uzglabāšana: iekļautas līdz 3 uzglabāšanas dienas objektā"
    ],
    units: "50+ gab.",
    price: "no 150.00 EUR / reiss (iekļaujot utilizācijas poligonu nodevas)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-konteineru-VOLVO-noma.webp",
    badge: "Izmēri: 8m³, 10m³, 12m³, 15m³, 20m³, 30m³"
  },
  {
    id: 5,
    title: "Frontālais iekrāvējs Libherr 564",
    description: "Augstas veiktspējas frontālais iekrāvējs beramo un bērto materiālu ātrai pārvietošanai, iekraušanai pašizgāzējos un teritorijas operatīvajiem līdzināšanas darbiem.",
    specs: [
      "Kausa tilpums: no 2.5 m³ līdz 4.0 m³",
      "Celtspēja: līdz 5 tonnām",
      "Darba svars: 12 - 15 tonnas"
    ],
    units: "3 gab.",
    price: "55.00 EUR + PVN / stundā (kopā ar profesionālu operatoru un degvielu)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/frontala-iekraveja-noma.webp",
    badge: "Augsta ražība un jauda"
  },
  {
    id: 6,
    title: "Riteņu ekskavators Volvo EW160E",
    description: "Jaudīgs un ātrs riteņu ekskavators ar izcilu mobilitāti, lieliski piemērots precīziem zemes darbiem pilsētas vidē, ceļu būvniecībai un demontāžas palīgdarbiem.",
    specs: [
      "Svars: 16.5 - 18.2 tonnas",
      "Maksimālais dziļums: līdz 5.7 metriem",
      "Darbības rādiuss: izcila mobilitāte būvlaukumos"
    ],
    units: "2 gab.",
    price: "80.00 EUR + PVN / stundā (kopā ar profesionālu operatoru un degvielu)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/ritenu-ekskavatora-volvo-noma.webp",
    badge: "Kompakts riteņu segments"
  }
];

const TECH_DATA_RU: TechItem[] = [
  {
    id: 1,
    title: "Экскаватор Komatsu PC210",
    description: "Гусеничный экскаватор, оснащенный гидравлическими демонтажными ножницами, измельчителем бетона и ковшами для земляных работ. Высокая эффективность и стабильность при демонтаже опасных старых конструкций и крупномасштабных земляных работах.",
    specs: [
      "Мощность: 210 кВт / Высота погрузки до 12м",
      "Оборудование: Демонтажные ножницы, измельчители ковша",
      "Применение: Снос конструкций, взлом фундаментов"
    ],
    units: "5 шт.",
    price: "120.00 EUR + НДС / час (вместе с профессиональным оператором и топливом)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/liela-ekskavatora-Komatsu-noma.webp",
    badge: "Номинальный тяжелый сегмент"
  },
  {
    id: 2,
    title: "Экскаватор Volvo ECR35D",
    description: "Компактный и исключительно маневренный мини-экскаватор для работы в ограниченных пространствах, внутренних помещениях или на благоустроенных участках. Идеален для копки траншей коммуникаций и фундаментных ям.",
    specs: [
      "Вес: 1.8 - 3.5 тонн",
      "Ширина колеи: регулируемая, бережная колея, которая щадит газон",
      "Оборудование: ковши различного размера для копки и планировки"
    ],
    units: "4 шт.",
    price: "70.00 EUR + НДС / час (вместе с профессиональным оператором и топливом)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/maza-ekskavatora-Volvo-noma.webp",
    badge: "Маневренный и компактный"
  },
  {
    id: 3,
    title: "Грузовой автомобиль MAN",
    description: "Мощные трехосные и четырехосные самосвалы с повышенной грузоподъемностью для транспортировки любых сыпучих строительных материалов, крупных строительных отходов и побочных продуктов демонтажа.",
    specs: [
      "Грузоподъемность: до 20-30 тонн",
      "Объем: 16м³ - 22м³",
      "Дополнительно: оборудованы автоматическим тентом для груза"
    ],
    units: "6 шт.",
    price: "70.00 EUR + НДС / час или по смете за количество рейсов",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/smago-automasinu-MAN-noma.webp",
    badge: "Тяжелые самосвалы"
  },
  {
    id: 4,
    title: "Контейнеры для строительного мусора",
    description: "Массивные стальные контейнеры для временного сбора и транспортировки любых видов строительных отходов, мусора после сноса построек и крупногабаритного мусора на специализированные лицензированные полигоны. Размеры: 8м³, 10м³, 12м³, 15м³, 20м³, 30м³.",
    specs: [
      "Доступные объемы: 8м³, 10м³, 12м³, 15м³, 20м³, 30м³",
      "Доставка: в течение 24 часов с момента подтверждения заказа",
      "Хранение: включает до 3 дней нахождения на объекте"
    ],
    units: "50+ шт.",
    price: "от 150.00 EUR / рейс (включая все пошлины полигона утилизации)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-konteineru-VOLVO-noma.webp",
    badge: "Размеры: 8м³, 10m³, 12m³, 15m³, 20m³, 30m³"
  },
  {
    id: 5,
    title: "Фронтальный погрузчик Libherr 564",
    description: "Высокопроизводительный фронтальный погрузчик для быстрого перемещения любых сыпучих материалов, оперативной погрузки самосвалов и качественных планировочных работ на Вашей территории.",
    specs: [
      "Объем ковша: от 2.5 м³ до 4.0 м³",
      "Грузоподъемность: до 5 тонн",
      "Рабочий вес: 12 - 15 тонн"
    ],
    units: "3 шт.",
    price: "55.00 EUR + НДС / час (вместе с профессиональным оператором и топливом)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/frontala-iekraveja-noma.webp",
    badge: "Высокая производительность"
  },
  {
    id: 6,
    title: "Колесный экскаватор Volvo EW160E",
    description: "Мощный и быстроходный колесный экскаватор с отличной маневренностью. Незаменим при проведении точечных земляных и вспомогательных демонтажных работ в городских условиях.",
    specs: [
      "Вес: 16.5 - 18.2 тонн",
      "Глубина копания: до 5.7 метров",
      "Радиус действия: выдающаяся мобильность на стройплощадке"
    ],
    units: "2 шт.",
    price: "80.00 EUR + НДС / час (вместе с профессиональным оператором и топливом)",
    imageUrl: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/ritenu-ekskavatora-volvo-noma.webp",
    badge: "Компактный колесный экскаватор"
  }
];

export default function MusuTehnika() {
  const navigate = useNavigate();
  const { currentLang } = useLanguage();

  const handlePiezvanit = () => {
    navigate("/kontakti");
  };

  const techData = currentLang === "LV" ? TECH_DATA_LV : TECH_DATA_RU;

  const t = {
    LV: {
      meta: "Mūsdienīgs tehnikas parks",
      title: "TEHNIKAS NOMA",
      heading: "Augstas veiktspējas smagā tehnikas jebkuras sarežģītības projektiem",
      subheading: "Mēs piedāvājam tirgus cenai atbilstošas nomas maksas specializētajajai demontāžas, zemes darbu un transportēšanas tehnikai. Visa mūsu tehnika ir uzturēta teicamā tehniskajā kārtībā, atbilst ekoloģiskajiem standartiem un ir pieejama tūlītējai nomai kopā ar profesionālu operatoru.",
      priceLabel: "Nomas maksa",
      operatorNotice: "* Noma pieejama kopā ar profesionālu operatoru.",
      submitBtn: "Pieteikt nomas rezervāciju",
      deliveryTitle: "Operatīvs atbalsts un piegāde visā Latvijā",
      deliveryDesc: "Mēs paši nogādājam nepieciešamo tehniku un konteinerus uz jebkuru vietu Latvijā, Lietuvā un Igaunijā. Tehnikas noma ietver regulāru tehnisko apkopi un nepieciešamības gadījumā ātru vienības nomaiņu, lai nepieļautu dīkstāvi mūsu klientu būvlaukumā."
    },
    RU: {
      meta: "Современный автопарк техники",
      title: "АРЕНДА ТЕХНИКИ",
      heading: "Высокопроизводительная тяжелая техника для проектов любой сложности",
      subheading: "Мы предлагаем конкурентоспособные на рынке арендные ставки на специализированную технику для демонтажа, земляных работ и грузоперевозок. Вся техника находится в отличном техническом состоянии, соответствует экологическим нормам и доступна для работы в сопровождении опытного оператора.",
      priceLabel: "Стоимость аренды",
      operatorNotice: "* Аренда предоставляется вместе с квалифицированным оператором.",
      submitBtn: "Заказать аренду техники",
      deliveryTitle: "Быстрая доставка и поддержка по всей Балтии",
      deliveryDesc: "Мы самостоятельно организуем логистику и доставку техники и контейнеров в любую точку Латвии, Литвы и Эстонии. Аренда включает в себя плановое техническое обслуживание и оперативную замену единицы оборудования при первой необходимости, чтобы свести к минимуму простои на Вашем объекте."
    }
  }[currentLang];

  return (
    <main className="w-full bg-white text-zinc-900 font-sans" id="musu-tehnika-page">
      
      {/* Top navigation helper */}
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

      {/* Grid displays */}
      <section className="py-20" aria-label="Tehnikas parks">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-zinc-950 text-base sm:text-lg font-bold uppercase tracking-tight mb-4">
              {t.heading}
            </h2>
            <p className="text-zinc-650 text-sm leading-relaxed">
              {t.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
            {techData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-zinc-200 rounded-[2px] overflow-hidden hover:border-[#FBBF24] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group text-xs h-full"
                id={`tech-item-${item.id}`}
              >
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Photo ratio styled with relative wrap - scaled down height, preserve exact landscape view */}
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-50 border-b border-zinc-100">
                      <img 
                        src={item.imageUrl} 
                        alt={`Tehnika - ${item.title}`} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Information Details block - more compact */}
                    <div className="p-3.5 space-y-2">
                      <div className="border-b border-zinc-100 pb-1.5">
                        <h3 className="text-zinc-950 text-sm font-bold uppercase group-hover:text-[#FBBF24] transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-zinc-650 text-[11px] leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Render Specifications List */}
                      <ul className="space-y-1 mt-2 border-t border-zinc-100 pt-2 text-zinc-500 text-[10.5px]">
                        {item.specs.map((spec, sidx) => (
                          <li key={sidx} className="flex items-start gap-1">
                            <span className="text-[#FBBF24] font-black">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing box - compact */}
                  <div className="px-3.5 pb-3">
                    <div className="bg-[#FBBF24]/5 border border-[#FBBF24]/30 p-2 rounded-[2px]">
                      <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest font-mono block leading-none">{t.priceLabel}</span>
                      <p className="text-zinc-900 text-[10.5px] font-bold mt-1 font-sans">
                        {item.price}
                      </p>
                      <span className="text-[8px] text-zinc-400 uppercase tracking-wider block mt-0.5 font-sans leading-tight">
                        {t.operatorNotice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Call to action at card bottom - compact */}
                <div className="p-3.5 pt-0 border-t border-zinc-100 mt-1">
                  <button 
                    onClick={handlePiezvanit}
                    className="w-full bg-[#FBBF24] hover:bg-zinc-900 hover:text-white text-zinc-950 py-2 px-3 text-[10px] font-black uppercase tracking-widest border border-[#FBBF24] hover:border-zinc-900 transition-all duration-150 text-center rounded-[2px] select-none cursor-pointer shadow-sm"
                    aria-label={`Rezervēt vai pieteikt nomu - ${item.title}`}
                  >
                    {t.submitBtn}
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Quick FAQ info block */}
          <div className="mt-16 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 max-w-4xl mx-auto rounded-[2px] text-center flex flex-col items-center">
            <h3 className="text-zinc-900 text-sm font-bold uppercase tracking-tight flex items-center justify-center gap-2 mb-3">
              <HardHat className="h-5 w-5 text-[#FBBF24]" /> {t.deliveryTitle}
            </h3>
            <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans text-center max-w-2xl">
              {t.deliveryDesc}
            </p>
          </div>

        </div>
      </section>

      {/* Quick bottom nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
