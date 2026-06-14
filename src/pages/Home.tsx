import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Building,
  ShieldCheck,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  Boxes,
  Truck,
  Wrench,
  Leaf,
  FileCheck
} from "lucide-react";
import Lightbox from "../components/Lightbox";
import { useLanguage } from "../context/LanguageContext";

interface CarouselSlide {
  id: number;
  url: string;
  title: Record<"LV" | "RU", string>;
  subtitle: Record<"LV" | "RU", string>;
  alt: string;
}

interface FaqItem {
  id: number;
  question: Record<"LV" | "RU", string>;
  answer: Record<"LV" | "RU", string>;
}

interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}

// Hero Images & Translations
const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24-5.webp",
    title: {
      LV: "Demontāžas pakalpojumi",
      RU: "Демонтажные услуги"
    },
    subtitle: {
      LV: "Precīzi plānoti un droši demontāžas darbi pirms renovācijas uzsākšanas",
      RU: "Точно спланированные и безопасные демонтажные работы перед реновацией"
    },
    alt: "ekskavators-veic-buves-nojauksanu-1"
  },
  {
    id: 2,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp",
    title: {
      LV: "Industriālo ēku nojaukšana",
      RU: "Снос промышленных зданий"
    },
    subtitle: {
      LV: "Sarežģītu, bīstamu un nolietotu ēku nojaukšana visā Latvijā",
      RU: "Снос технически сложных, опасных и ветхих зданий по всей Латвии"
    },
    alt: "ekskavators-veic-buves-nojauksanu-2"
  },
  {
    id: 3,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp",
    title: {
      LV: "Būvgružu izvešana",
      RU: "Вывоз строительного мусора"
    },
    subtitle: {
      LV: "Būvgružu šķirošana, izvešana un licencēta nodošana otrreizējai pārstrādei",
      RU: "Сортировка, вывоз и лицензированная сдача отходов на вторичную переработку"
    },
    alt: "ekskavators-veic-buves-nojauksanu-3"
  },
  {
    id: 4,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_4.webp",
    title: {
      LV: "Darba plānošana un struktūra",
      RU: "Планирование и организация работ"
    },
    subtitle: {
      LV: "No saskaņošanas būvvaldē līdz teritorijas pilnīgai nodošanai ekspluatācijā",
      RU: "От согласования проектов в Стройуправе до сдачи территории в эксплуатацию"
    },
    alt: "ekskavators-veic-buves-nojauksanu-4"
  },
  {
    id: 5,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24-6.webp",
    title: {
      LV: "Teritorijas sakopšana un labiekārtošana",
      RU: "Итоговая уборка и благоустройство"
    },
    subtitle: {
      LV: "Pilnīga zemes planēšana un sagatavošana jaunajai būvniecībai",
      RU: "Полная нивелировка поверхности грунта под будущую новую застройку"
    },
    alt: "ekskavators-veic-buves-nojauksanu-5"
  },
  {
    id: 6,
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/Par-mums-2.webp",
    title: {
      LV: "Profesionāls tehnikas parks",
      RU: "Профессиональный парк техники"
    },
    subtitle: {
      LV: "Uzticama un jaudīga tehnika jebkuras sarežģītības darbiem",
      RU: "Надежная и высокоэффективная техника для проектов любой сложности"
    },
    alt: "ekskavators-veic-buves-nojauksanu-6"
  }
];

// FAQs for Sākums
const FAQS_HOME: FaqItem[] = [
  {
    id: 1,
    question: {
      LV: "Cik maksā mājas nojaukšana Latvijā un kā veidojas tāme?",
      RU: "Сколько стоит снос дома в Латвии и из чего складывается смета?"
    },
    answer: {
      LV: "Nojaukšanas izmaksas ir atkarīgas no ēkas apjoma kubikmetros, materiālu tipa (koks, ķieģelis, dzelzbetons), atrašanās vietas, piekļuves iespējām un nepieciešamās tehnikas. Katram projektam sagatavojam individuālu tāmi bez maksas.",
      RU: "Стоимость сноса зависит от строительного объема здания в кубометрах, типов материалов (дерево, кирпич, железобетон), местоположения, удобства подъездных путей и необходимого парка машин. Для каждого объекта мы бесплатно готовим детальную индивидуальную смету."
    }
  },
  {
    id: 2,
    question: {
      LV: "Kādi dokumenti un saskaņojumi ir nepieciešami pirms ēkas demontāžas sākšanas?",
      RU: "Какие документы и согласования необходимы до начала демонтажа здания?"
    },
    answer: {
      LV: "Saskaņā ar Latvijas būvnormatīviem pirms darbu uzsākšanas vietējā Būvvaldē ir jāiesniedz nojaukšanas būvprojekts vai apliecinājuma karte un jāsaņem būvatļauja ar nosacījumiem demontāžas darbiem.",
      RU: "Согласно латвийским строительным нормативам, до начала активной фазы работ в местную Стройуправу необходимо подать проект сноса или карту подтверждения, получив официальное разрешение на ведение демонтажных работ."
    }
  },
  {
    id: 3,
    question: {
      LV: "Vai jūs nodrošināt oficiālus dokumentus par būvgružu pareizu utilizāciju?",
      RU: "Предоставляете ли вы официальные акты о правильной утилизации мусора?"
    },
    answer: {
      LV: "Jā, mēs esam licencēts atkritumu apsaimniekošanas partneris. Katram klientam pēc darbu pabeigšanas izsniedzam oficiālu utilizācijas aktu un nodošanas deklarāciju iesniegšanai Būvvaldē objekta nodošanai ekspluatācijā.",
      RU: "Да, мы являемся лицензированным партнером по обращению с отходами. По завершении работ каждому клиенту выдается официальный акт об утилизации и сопроводительная декларация для подачи в Стройуправу с целью последующей сдачи объекта."
    }
  }
];

// Bento-style Gallery images for Sākumlapa
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
    title: {
      LV: "Dzīvojamās ēkas demontāža Rīgā",
      RU: "Демонтаж жилого дома в Риге"
    },
    tag: {
      LV: "DAUDZDZĪVOKĻU ĒKU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ МНОГОКВАРТИРНЫХ ДОМОВ"
    },
    sectionName: "Daudzdzīvokļu ēku demontāža",
    location: { LV: "Rīga", RU: "Рига" },
    year: "2026",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp",
    alt: "daudzdzivoklu-eku-demontaza"
  },
  {
    id: 2,
    title: {
      LV: "Divstāvu mūra privātmājas demontāža Jūrmalā",
      RU: "Демонтаж двухэтажного каменного жилого дома в Юрмале"
    },
    tag: {
      LV: "PRIVĀTMĀJU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ ЧАСТНЫХ ДОМОВ"
    },
    sectionName: "Privātmāju demontāža",
    location: { LV: "Jūrmala", RU: "Юрмала" },
    year: "2025",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/privatmaju-demontaza.webp",
    alt: "privatmaju-demontaza"
  },
  {
    id: 3,
    title: {
      LV: "Gāzbetona palīgēkas demontāža Kuldīgā",
      RU: "Демонтаж газобетонной хозяйственной постройки в Кулдиге"
    },
    tag: {
      LV: "PALĪGĒKU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ ВСПОМОГАТЕЛЬНЫХ СТРОЕНИЙ"
    },
    sectionName: "Palīgēku demontāža",
    location: { LV: "Kuldīga", RU: "Кулдига" },
    year: "2026",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/paligekas-demontaza.webp",
    alt: "vecā-šķūņa-demontāža"
  },
  {
    id: 4,
    title: {
      LV: "Dzelzbetona ražošanas ceha demontāža Daugavpilī",
      RU: "Демонтаж железобетонного производственного цеха в Даугавпилсе"
    },
    tag: {
      LV: "INDUSTRIĀLO OBJEKTU DEMONTĀŽA",
      RU: "ДЕМОНТАЖ ПРОМЫШЛЕННЫХ ОБЪЕКТОВ"
    },
    sectionName: "Industriālo objektu demontāža",
    location: { LV: "Daugavpils", RU: "Даугавпилс" },
    year: "2025",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/industriala-objekta-demontaza.webp",
    alt: "razosanas-noliktavas-eku-demontaza"
  },
  {
    id: 5,
    title: {
      LV: "Būvgružu šķirošana un izvešana no objekta Mārupē",
      RU: "Сортировка и вывоз строительного мусора в Марупе"
    },
    tag: {
      LV: "BŪVGRUŽU IZVEŠANA",
      RU: "ВЫВОЗ СТРОИТЕЛЬНОГО МУСОРА"
    },
    sectionName: "Būvgružu izvešana",
    location: { LV: "Mārupe", RU: "Марупе" },
    year: "2026",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp",
    alt: "būvniecības-gružu-utilizācija"
  },
  {
    id: 6,
    title: {
      LV: "Zemes līdzināšana demontāžas objektā Siguldā",
      RU: "Выравнивание земли на демонтажном объекте в Сигулде"
    },
    tag: {
      LV: "TERITORIJAS SAKOPŠANA",
      RU: "УБОРКА И БЛАГОУСТРОЙСТВО ТЕРРИТОРИИ"
    },
    sectionName: "Teritorijas sakopšana",
    location: { LV: "Sigulda", RU: "Сигулда" },
    year: "2026",
    url: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/teritorijas-sakopsana.webp",
    alt: "būvlaukuma-planēšana-sagatavošana"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const { currentLang } = useLanguage();

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
        if (currentScroll + scrollAmount >= copyWidth * 2 - 5) {
          el.scrollLeft = currentScroll - copyWidth;
        }
        el.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      } else {
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
    if (currentLang === "LV") {
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
    } else {
      if (!formData.name.trim()) {
        errors.name = "Поле Имя или Название компании обязательно для заполнения.";
      }
      if (!formData.email.trim()) {
        errors.email = "Электронная почта обязательна для заполнения.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Пожалуйста, введите корректный адрес почты.";
      }
      if (!formData.phone.trim()) {
        errors.phone = "Номер телефона обязателен для заполнения.";
      }
      if (!formData.message.trim()) {
        errors.message = "Сообщение или детали объекта обязательны для заполнения.";
      }
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

  const scrollToContact = () => {
    const el = document.getElementById("contact-section-home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Static numbers with unnoticeable, small un-bold font precisely as requested
  const stats = [
    { value: "Informācija sekos", valueRu: "Информация последует", label: { LV: "Gadu pieredze", RU: "Лет опыта" } },
    { value: "Informācija sekos", valueRu: "Информация последует", label: { LV: "Pabeigtie projekti", RU: "Выполненные проекты" } },
    { value: "Informācija sekos", valueRu: "Информация последует", label: { LV: "Pārstrādātās tonnas", RU: "Переработано тонн" } },
    { value: "Informācija sekos", valueRu: "Информация последует", label: { LV: "Vides drošības garantija", RU: "Эко-безопасность" } }
  ];

  const t = {
    LV: {
      ctaCalc: "Saņemt tāmi",
      ctaServices: "Mūsu pakalpojumi",
      servicesMeta: "Ko mēs piedāvājam",
      servicesTitle: "Mūsu pakalpojumi",
      cardMoreBtn: "Uzzināt vairāk",
      whyMeta: "Klientu prioritātes",
      whyTitle: "Kāpēc izvēlēties mūs",
      whyItems: [
        { title: "20+ gadu pieredze", desc: "Mūsu gadu gaitā uzkrātā pieredze garantē katra, pat vissarežģītākā, objekta kvalitatīvu un precīzu realizāciju." },
        { title: "Profesionāla tehnika", desc: "Pašu tehnikas parks – no speciāliem ekskavatoriem līdz smagajai kāpurķēžu tehnikai katram uzdevumam." },
        { title: "Civiltiesiskā apdrošināšana", desc: "Uzņēmumam ir civiltiesiskās atbildības apdrošināšana, garantējot pilnīgu drošību un materiālo aizsardzību visā darbu izpildes gaitā." },
        { title: "Sertificēti vadītāji", desc: "Visi mūsu demontāžas darbu vadītāji ir oficiāli sertificēti nozares speciālisti ar ilggadēju praktisko pieredzi vadošos amatos." },
        { title: "Licencēta būvgružu utilizācija", desc: "Nodrošinām likumīgu būvniecības atkritumu šķirošanu un oficiālu utilizācijas dokumentu sagatavošanu iesniegšanai Būvvaldē." },
        { title: "Darbs visā Baltijā", desc: "Pateicoties mūsu gadu gaitā pārbaudītajai vadības sistēmai, mēs varam operatīvi ierasties jebkurā objektā visā Baltijas teritorijā." },
        { title: "Bezmaksas objekta apskate", desc: "Mūsu inženieri dodas uz mūs klientu objektiem, lai klātienē izvērtētu stāvokli, veiktu mērījumus un aprēķinus bez maksas." },
        { title: "Operatīva tāme", desc: "Sagatavojam detalizētu darbu izmaksu tāmi bez jebkādām slēptām izmaksām 24 stundu laikā pēc vizītes objektā." }
      ],
      processMeta: "Soli pa solim",
      processTitle: "Darba process",
      processItems: [
        { title: "Objekta apskate", desc: "Mūsu inženiera vizīte klienta objektā, lai precīzi novērtētu ēkas stāvokli, fiziskos izmērus un blakusbūvju riskus." },
        { title: "Tāmes sastādīšana", desc: "Sagatavojam detalizētu darbu izmaksu tāmi ar fiksētu cenu 24 stundu laikā pēc mūsu inženiera vizītes klienta objektā." },
        { title: "Saskaņošana BIS", desc: "Sagatavojam nepieciešamos dokumentus, nojaukšanas būvprojektu un kārtojam atļaujas BIS sistēmā." },
        { title: "Demontāžas darbi", desc: "Profesionāla un prasmīgi kontrolēta objekta demontāža, izmantojot mūsu specializēto demontāžas tehniku." },
        { title: "Būvgružu izvešana", desc: "Operatīva atkritumu iekraušana konteineros un nodošana licencētiem pārstrādātājiem ar utilizācijas aktiem." },
        { title: "Objekta nodošana", desc: "Pilnīga teritorijas sakopšana pēc darbiem, demontētās būves dzēšana no VZD kadastra, dokumentu iesniegšana Būvvaldē un nodošana ekspluatācijā." }
      ],
      certsMeta: "Oficiāls statuss",
      certsTitle: "Sertifikāti un atļaujas",
      certsItems: [
        { title: "Būvkomersanta reģistrācija", desc: "Oficiāli reģistrēts būvkomersants, kas reģistrēts LR Būvkomersantu reģistrā. Tas apliecina mūsu uzņēmuma pilnas tiesības vadīt, noformēt un droši izpildīt ēku demontāžas darbus." },
        { title: "Atkritumu atļaujas", desc: "Valsts vides dienesta (VVD) izsniegtā atkritumu apsaimniekošanas atļauja. Būvgruži tiek šķiroti un nodoti sertificētos poligonos, sagatavojot oficiālus utilizācijas aktus." },
        { title: "Darba drošības sertifikāti", desc: "Mūsu personālam ir profesionālās darba drošības licences un sertifikāti. Tas garantē pilnīgu atbilstību un drošību visos paaugstinātas bīstamības apstākļos." },
        { title: "Vides aizsardzības atļaujas", desc: "Stingra vides normatīvu un prasību ievērošana katrā darbu izpildes posmā. Nodrošinām putekļu un trokšņu samazināšanu pilsētvidē un drošu materiālu šķirošanu." }
      ],
      faqMeta: "Jautājumi un atbildes",
      faqTitle: "Biežāk uzdotie jautājumi",
      faqViewAllLink: "Skatīt visus jautājumus",
      partnersTitle: "Mūsu sadarbības partneri",
      partnersHook: "(Informācija sekos)",
      portfolioTitle: "Mūsu īstenotie projekti",
      portfolioCardLink: "Skatīt galeriju",
      portfolioLabelLeft: "Iepriekšējais projekts",
      portfolioLabelRight: "Nākamais projekts",
      formMeta: "Sazinieties ar mums",
      formTitle: "Piesakiet bezmaksas tāmi",
      formSentOk: "Paldies!",
      formSentDesc: "Jūsu pieteikums ir saņemts. Mūsu speciālists sazināsies ar Jums tuvāko stundu laikā.",
      formIntroText: "Aizpildiet zemāk esošo formu un piesakiet bezmaksas tāmi sava objekta demontāžas darbiem vai tehnikas nomai. Pirms darbu sākšanas sniegsim pilnvērtīgu konsultāciju un palīdzēsim ar Būvvaldes dokumentācijas saskaņošanu.",
      formFieldName: "Jūsu Vārds / Uzņēmums",
      formFieldMail: "E-pasts saziņai",
      formFieldPhone: "Tālruņa numurs",
      formFieldMsg: "Ziņa / Objekta detaļas",
      formPlaceholderMsg: "Lūdzu aprakstiet sev nepieciešamo pakalpojumu.",
      formPrivacyHint: "Nospiežot 'Sūtīt pieteikumu', Jūs piekrītat mūsu Privātuma politikai un personas datu apstrādei, lai sagatavotu bezmaksas tāmi.",
      formSubmitBtn: "Sūtīt pieteikumu",
      cardsData: [
        { title: "Demontāžas darbi", desc: "Pilna un daļēja iekštelpu un nesošo konstrukciju demontāža pirms renovācijas darbiem. Strādājam ātri, saudzīgi un precīzi.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24-5.webp", link: "/pakalpojumi" },
        { title: "Ēku un būvju nojaukšana", desc: "Sarežģītu, bīstamu vai nolietotu ēku nojaukšana, izmantojot mūsu specializēto tehniku, nodrošinot augstāko drošības līmeni un darba kvalitāti.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp", link: "/pakalpojumi" },
        { title: "Būvgružu izvešana", desc: "Ātra būvniecības un nojaukšanas atkritumu šķirošana, iekraušana, utilizācija un licencēta utilizācijas dokumentu sagatavošana.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp", link: "/pakalpojumi" },
        { title: "Zemes ierīcības darbi un šķembas", desc: "Kvalitatīvi teritoriju planēšanas, līmeņošanas, rakšanas darbi un ceļu būvniecība. Piedāvājam iegādei dažādas frakcijas šķembas un citus bērtos materiālus ar operatīvu piegādi.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/teritorijas-sakopsana.webp", link: "/pakalpojumi" },
        { title: "Būvgružu konteineru noma", desc: "Būvgružu konteineru piegāde un noma būvniecības atkritumu un lielgabarīta būvgružu nogādāšanai uz licencētiem poligoniem.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-konteineru-VOLVO-noma.webp", link: "/pakalpojumi" },
        { title: "Tehnikas noma", desc: "Uzņēmuma vadošā transporta parka noma ar profesionālu licencētu operatoru atbalstu vai bez tā.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/frontala-iekraveja-noma.webp", link: "/musu-tehnika" }
      ]
    },
    RU: {
      ctaCalc: "Получить смету",
      ctaServices: "Наши услуги",
      servicesMeta: "Что мы предлагаем",
      servicesTitle: "Наши услуги",
      cardMoreBtn: "Узнать больше",
      whyMeta: "Приоритеты клиентов",
      whyTitle: "Почему выбирают нас",
      whyItems: [
        { title: "20+ лет опыта", desc: "Превосходный опыт, накопленный годами активной практики, гарантирует быстрое, выверенное и технически точное выполнение проектов любой сложности." },
        { title: "Профессиональная техника", desc: "Собственный технический парк – от специальных гусеничных экскаваторов до высокопроизводительных гидромолотов под любые задачи." },
        { title: "Гражданское страхование", desc: "Наша компания имеет полное гражданское страхование ответственности, что всесторонне гарантирует безопасность и защиту интересов клиента." },
        { title: "Аттестованные инженеры", desc: "Все наши руководители на объектах имеют официальные латвийские строительные сертификаты и опыт управления опасными работами." },
        { title: "Легальная утилизация", desc: "Обеспечиваем официальную сортировку остатков зданий и подготовку надлежащих утилизационных документов для Стройуправы." },
        { title: "Работа по всей Балтии", desc: "Благодаря отточенной системе мобилизации команд, мы оперативно доставляем технику на рабочий объект в любой точке Латвии и Балтии." },
        { title: "Бесплатный выезд и осмотр", desc: "Наши специалисты бесплатно выезжают на Ваш строительный объект для изучения рисков, замеров габаритов и проведения расчетов." },
        { title: "Оперативное составление смет", desc: "Предоставляем подробный расчет сметной стоимости без скрытых наценок в течение 24 часов после осмотра объекта." }
      ],
      processMeta: "Шаг за шагом",
      processTitle: "Процесс выполнения работ",
      processItems: [
        { title: "Осмотр объекта", desc: "Визит инженера для точного изучения строительных конструкций, рисков для соседних строений и характера материалов." },
        { title: "Подготовка детальной сметы", desc: "Составление прозрачного, фиксированного расчета стоимости работ в течение 24 часов после замера объекта инженером." },
        { title: "Согласование в системе BIS", desc: "Оформление проекта сноса, экологических согласований и получение официальной разрешительной карты в общегосударственной системе BIS." },
        { title: "Демонтажные работы", desc: "Профессиональный и безопасный снос строения силами лицензированных операторов современных тяжелых машин." },
        { title: "Вывоз строительных отходов", desc: "Сортировка материалов, оперативная погрузка и вывоз мусора на лицензированные полигоны с регистрацией официальных накладных." },
        { title: "Сдача территории", desc: "Выравнивание площадки, исключение здания из кадастровой базы данных VZD, передача финальных документов в Стройуправу." }
      ],
      certsMeta: "Официальный статус",
      certsTitle: "Лицензии и сертификаты",
      certsItems: [
        { title: "Строительный коммерсант", desc: "Официальный зарегистрированный коммерсант в латвийском государственном реестре, обладающий правом законно проектировать и сносить здания." },
        { title: "Разрешения на утилизацию", desc: "Официальные лимиты и разрешения, выданные Государственной службой среды Латвии (VVD) на транспортировку опасных и неопасных строительных отходов." },
        { title: "Сертификаты безопасности", desc: "Профессиональные квалификации и регулярная аттестация персонала по технике безопасности при ведении опасных демонтажных работ." },
        { title: "Экологические стандарты", desc: "Жесткое следование природоохранным нормам в жилых зонах (подавление пыли водяными пушками, мониторинг шума, экологическая сортировка)." }
      ],
      faqMeta: "Вопросы и ответы",
      faqTitle: "Часто задаваемые вопросы",
      faqViewAllLink: "Смотреть все вопросы",
      partnersTitle: "Наши партнеры по сотрудничеству",
      partnersHook: "(Информация последует)",
      portfolioTitle: "Наши выполненные проекты",
      portfolioCardLink: "Смотреть галерею",
      portfolioLabelLeft: "Предыдущий проект",
      portfolioLabelRight: "Следующий проект",
      formMeta: "Свяжитесь с нами",
      formTitle: "Закажите бесплатную смету",
      formSentOk: "Спасибо!",
      formSentDesc: "Ваша заявка успешно отправлена. Наш уполномоченный специалист свяжется с Вами в течение ближайшего часа.",
      formIntroText: "Заполните форму обратной связи, чтобы получить подробную, фиксированную смету на снос объекта или аренду нашей спецтехники. Мы окажем квалифицированную помощь в подготовке проектов для Стройуправы.",
      formFieldName: "Ваше Имя / Название компании",
      formFieldMail: "E-mail для связи",
      formFieldPhone: "Номер телефона",
      formFieldMsg: "Сообщение / Детали Вашего объекта",
      formPlaceholderMsg: "Пожалуйста, кратко опишите необходимую Вам демонтажную услугу.",
      formPrivacyHint: "Нажимая кнопку 'Отправить заявку', Вы выражаете автоматическое согласие с нашей Политикой конфиденциальности и безопасной обработкой персональных данных.",
      formSubmitBtn: "Отправить заявку",
      cardsData: [
        { title: "Демонтажные работы", desc: "Полный и аккуратный демонтаж внутренних перегородок, стяжек или несущих каркасов зданий перед реновацией. Быстро и надежно.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24-5.webp", link: "/pakalpojumi" },
        { title: "Снос зданий и сооружений", desc: "Лицензированный снос ветхих, поврежденных пожаром или технически сложных капитальных зданий по всей территории Латвии.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_2.webp", link: "/pakalpojumi" },
        { title: "Вывоз строительного мусора", desc: "Быстрая экологическая сортировка обломков, организованная погрузка, транспортировка и сдача на лицензированные полигоны.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp", link: "/pakalpojumi" },
        { title: "Земельные работы и щебень", desc: "Профессиональное планирование земельных площадей, разработка и выравнивание грунтов. Предлагаем щебень фракционный с быстрой доставкой.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/teritorijas-sakopsana.webp", link: "/pakalpojumi" },
        { title: "Аренда контейнеров для мусора", desc: "Оперативная доставка и сдача в аренду контейнеров различной вместимости под тяжелые строительные отходы или крупный хлам.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-konteineru-VOLVO-noma.webp", link: "/pakalpojumi" },
        { title: "Аренда спецтехники", desc: "Аренда высокопроизводительных строительных и землеройных машин из собственного официального парка в сопровождении опытных машинистов.", img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/frontala-iekraveja-noma.webp", link: "/musu-tehnika" }
      ]
    }
  }[currentLang];

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
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-20" />
              
              <img
                src={slide.url}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6">
                <div className="text-center max-w-4xl pb-16 sm:pb-24">
                  <h1 className="text-white text-2xl sm:text-3.5xl lg:text-5xl font-extrabold tracking-tight mb-4 uppercase drop-shadow">
                    {slide.title[currentLang]}
                  </h1>
                  <p className="text-zinc-200 text-sm sm:text-lg font-medium tracking-wide mb-8 drop-shadow-sm max-w-2xl mx-auto font-sans">
                    {slide.subtitle[currentLang]}
                  </p>
                </div>
              </div>

            </div>
          );
        })}

        <div className="absolute bottom-20 sm:bottom-28 left-0 right-0 z-30 flex flex-wrap items-center justify-center gap-4 px-4 select-none">
          <button
            onClick={scrollToContact}
            className="cursor-pointer bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#111827] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 shadow-md border border-transparent rounded-[2px]"
            aria-label="Saņemt tāmi"
          >
            {t.ctaCalc}
          </button>
          <Link
            to="/pakalpojumi"
            className="inline-flex cursor-pointer bg-black/45 backdrop-blur-sm hover:bg-zinc-900/80 text-[#FBBF24] border border-[#FBBF24] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-lg"
            aria-label="Mūsu pakalpojumi"
          >
            {t.ctaServices}
          </Link>
        </div>

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

      {/* 2.2. MŪSU PAKALPOJUMI */}
      <section className="py-10 border-t border-b border-zinc-200/60 bg-[#F8F7F4]" aria-label="Pakalpojumi mājā">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">{t.servicesMeta}</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">{t.servicesTitle}</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-sans">
            {t.cardsData.map((item, idx) => (
              <div key={idx} className="relative bg-white border border-zinc-200 p-5 pb-6 flex flex-col justify-between hover:border-[#FBBF24]/60 transition-all duration-200 group rounded-[2px] overflow-hidden min-h-[365px] shadow-sm hover:shadow-md">
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FBBF24]/20 group-hover:bg-[#FBBF24] transition-colors" />
                
                <div className="flex flex-col flex-grow">
                  <h3 className="text-zinc-950 font-black text-xs sm:text-sm uppercase tracking-wider mb-3 border-b border-zinc-100 pb-2">
                    {item.title}
                  </h3>

                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-zinc-200 rounded-[2px] bg-zinc-50 mb-3.5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-200" />
                  </div>

                  <p className="text-zinc-650 text-xs sm:text-[13px] leading-relaxed mb-5 font-sans flex-grow">
                    {item.desc}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-[10px] font-black tracking-widest text-zinc-900 hover:text-zinc-950 bg-zinc-100 hover:bg-[#FBBF24] py-2 px-3.5 rounded-[2px] border border-zinc-200 hover:border-[#FBBF24] transition-all duration-200 self-start uppercase max-w-full truncate group/btn font-sans"
                >
                  <span>{t.cardMoreBtn}</span>
                  <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-200 text-xs">→</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Kāpēc izvēlēties mūs block */}
      <section className="py-10 bg-white border-b border-zinc-200/50" id="kapec-izveleties-mus">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">{t.whyMeta}</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1 text-center">{t.whyTitle}</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {t.whyItems.map((item, idx) => (
              <div 
                key={idx} 
                className="relative bg-zinc-50/50 border border-zinc-200 p-5 pb-6 flex flex-col justify-between hover:border-[#FBBF24]/60 hover:shadow-md transition-all duration-200 group rounded-[2px] h-full"
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

      {/* Darba process block with step cards */}
      <section className="py-10 bg-[#F4F3EF] border-b border-zinc-200/50" id="darba-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">{t.processMeta}</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">{t.processTitle}</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: t.processItems[0].title,
                desc: t.processItems[0].desc,
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/objekta-apskate.webp"
              },
              {
                title: t.processItems[1].title,
                desc: t.processItems[1].desc,
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/tames-sastadisana.webp"
              },
              {
                title: t.processItems[2].title,
                desc: t.processItems[2].desc,
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/BIS.png"
              },
              {
                title: t.processItems[3].title,
                desc: t.processItems[3].desc,
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp"
              },
              {
                title: t.processItems[4].title,
                desc: t.processItems[4].desc,
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/buvgruzu-izvesana.webp"
              },
              {
                title: t.processItems[5].title,
                desc: t.processItems[5].desc,
                img: "https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/Par-mums-3.webp"
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

      {/* Sertifikāti un atļaujas block */}
      <section className="py-10 bg-white border-b border-zinc-200/50" id="sertifikati-un-atlaujas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">{t.certsMeta}</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">{t.certsTitle}</h2>
            <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t.certsItems[0].title,
                desc: t.certsItems[0].desc,
                icon: <Building className="h-5 w-5 text-amber-600" />
              },
              {
                title: t.certsItems[1].title,
                desc: t.certsItems[1].desc,
                icon: <FileCheck className="h-5 w-5 text-amber-600" />
              },
              {
                title: t.certsItems[2].title,
                desc: t.certsItems[2].desc,
                icon: <ShieldCheck className="h-5 w-5 text-amber-600" />
              },
              {
                title: t.certsItems[3].title,
                desc: t.certsItems[3].desc,
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

      {/* STATISTIKAS BLOKS */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat text-white border-t border-zinc-900 overflow-hidden" 
               style={{ backgroundImage: `url('https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/demontaza24_3.webp')` }}
               aria-label="Statistikas skaitītāji">
        <div className="absolute inset-0 bg-black/85 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-black/45 backdrop-blur-sm border border-[#FBBF24] rounded-[2px] shadow-lg hover:bg-zinc-950/80 transition-all duration-155">
                <p className="text-zinc-400 text-xs mt-1.5 font-sans mb-2.5">
                  ({currentLang === "LV" ? stat.value : stat.valueRu})
                </p>
                <p className="text-zinc-300 text-xs font-semibold tracking-wide uppercase font-black">
                  {stat.label[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIEŽĀK UZDOTIE JAUTĀJUMI */}
      <section className="py-16 bg-gradient-to-b from-[#FDFDFD] via-[#FAF9F6] to-white border-t border-b border-zinc-150" aria-label="BUJ sākumā">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          <div className="text-center mb-10">
            <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">{t.faqMeta}</span>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">{t.faqTitle}</h2>
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
                    aria-label={`Atvērt jautājumu: ${faq.question[currentLang]}`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.question[currentLang]}</span>
                    <span className="text-[#FBBF24] flex-shrink-0">
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4.5 bg-zinc-50 text-zinc-650 text-xs sm:text-sm leading-relaxed border-t border-zinc-150 animate-fadeIn">
                      {faq.answer[currentLang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/buj"
              className="inline-flex cursor-pointer bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 border border-zinc-250 px-7 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-sm"
              aria-label="Skatīt visus jautājumus"
            >
              {t.faqViewAllLink}
            </Link>
          </div>

        </div>
      </section>

      {/* SADARBĪBAS PARTNERI */}
      <section className="py-16 bg-white border-b border-zinc-150" aria-label="Sadarbības partneri">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-mono">{t.partnersTitle}</h3>
            <p className="text-zinc-400 text-xs mt-1.5 font-sans">{t.partnersHook}</p>
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

      {/* MŪSU DARBA PORTFOLIO SECTION */}
      <section className="py-10 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]" aria-label="Mūsu darba portfolio sākumā">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
            <div className="text-center sm:text-left">
              <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold uppercase tracking-tight">{t.portfolioTitle}</h2>
              <div className="h-1 w-12 bg-[#FBBF24] mx-auto sm:mx-0 mt-3" />
            </div>
            
            <div className="flex justify-center gap-2">
              <button 
                onClick={() => scrollContainer(-1)} 
                className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-[#FBBF24] hover:text-zinc-950 hover:border-[#FBBF24] text-zinc-700 transition-all cursor-pointer focus:outline-none shadow-sm"
                aria-label={t.portfolioLabelLeft}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollContainer(1)} 
                className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-[#FBBF24] hover:text-zinc-950 hover:border-[#FBBF24] text-zinc-700 transition-all cursor-pointer focus:outline-none shadow-sm"
                aria-label={t.portfolioLabelRight}
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
                  className="min-w-[260px] sm:min-w-[298px] md:min-w-[316px] max-w-[325px] flex-shrink-0 bg-zinc-50 border border-zinc-200 p-3.5 rounded-[2px] hover:border-zinc-300 cursor-pointer flex flex-col justify-between group transition-all duration-205 hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden border border-zinc-200/60 rounded-[2px] mb-3.5 bg-zinc-950">
                      <img 
                        src={project.url}
                        alt={project.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-[#FBBF24] text-[#111827] text-[8.5px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-[2px] border border-[#FBBF24]/35 shadow max-w-[90%] truncate">
                        {project.tag[currentLang]}
                      </div>
                    </div>
                    <h3 className="text-zinc-900 text-[12px] sm:text-[13px] font-black tracking-tight group-hover:text-[#FBBF24] transition-colors uppercase leading-snug">
                      {project.title[currentLang]}
                    </h3>
                    <p className="text-zinc-500 text-[10px] sm:text-[10.5px] font-sans font-semibold mt-1.5 flex items-center gap-1.5 pt-2">
                      <span>📍 {project.location[currentLang]}</span>
                      <span className="text-zinc-300">|</span>
                      <span>📅 {project.year}. g.</span>
                    </p>
                  </div>
                  <div className="border-t border-zinc-200/60 pt-2.5 mt-3.5 text-[9.5px] font-bold text-[#FBBF24] uppercase tracking-widest flex items-center justify-between group-hover:text-[#FBBF24] transition-colors">
                    <span>{t.portfolioCardLink}</span>
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
              {t.portfolioCardLink}
            </Link>
          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-section-home" className="py-12 bg-zinc-200 border-t border-zinc-300" aria-label="Sazināties formā">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="bg-[#27272a] border border-zinc-800 p-6 sm:px-10 sm:py-9 rounded-[2px] shadow-2xl">
            
            <div className="text-center mb-10">
              <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest block font-mono">{t.formMeta}</span>
              <h2 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tight mt-1">{t.formTitle}</h2>
              <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center border border-[#FBBF24]/50 bg-[#18181b] rounded-[2px] animate-fadeIn transition-all">
                <span className="inline-block p-4 bg-[#FBBF24] text-zinc-950 mb-4 rounded-full">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <p className="text-white font-bold text-lg mb-2">{t.formSentOk}</p>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-lg mx-auto">
                  {t.formSentDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
                
                <div className="text-zinc-200 text-xs sm:text-sm text-center leading-relaxed font-sans pb-4 border-b border-zinc-800 font-medium font-semibold">
                  {t.formIntroText}
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    {t.formFieldName} <span className="text-[#FBBF24]">*</span>
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
                      {t.formFieldMail} <span className="text-[#FBBF24]">*</span>
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
                      {t.formFieldPhone} <span className="text-[#FBBF24]">*</span>
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
                    {t.formFieldMsg} <span className="text-[#FBBF24]">*</span>
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
                      placeholder={t.formPlaceholderMsg}
                    />
                  </div>
                  {formErrors.message && (
                    <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.message}</p>
                  )}
                </div>

                <p className="text-zinc-400 text-[11px] sm:text-xs">
                  {t.formPrivacyHint}
                </p>

                <div className="text-left pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#FBBF24] hover:bg-yellow-400 text-[#111827] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-md hover:scale-[1.02] border border-transparent rounded-[2px]"
                    style={{ borderRadius: "2px" }}
                    aria-label="Sūtīt kontaktu pieteikumu"
                  >
                    {t.formSubmitBtn}
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
