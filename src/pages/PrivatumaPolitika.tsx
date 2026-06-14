import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { useLanguage } from "../context/LanguageContext";

export default function PrivatumaPolitika() {
  const navigate = useNavigate();
  const { currentLang } = useLanguage();

  const t = {
    LV: {
      meta: "Datu aizsardzība",
      title: "Privātuma politika",
      updated: "Pēdējo reizi atjaunots: 2026.gada marts",
      q1: "1. Ievads",
      a1_p1: "“Demontāža 24/7\" (turpmāk – \"mēs\", \"mūsu\" vai \"uzņēmums\") apņemas aizsargāt un respektēt Jūsu privātumu. Šī privātuma politika skaidro, kā mēs apkopojam, izmantojam, uzglabājam un aizsargājam Jūsu personas datus saskaņā ar Vispārīgo datu aizsardzības regulu (GDPR) un Latvijas Republikas tiesību aktiem.",
      a1_p2: "Izmantojot mūsu mājas lapu un pakalpojumus, Jūs piekrītat šajā politikā aprakstītajai datu vākšanai un izmantošanai.",
      q2: "2. Datu pārzinis",
      c_label: "Uzņēmums:",
      reg_label: "Reģistrācijas numurs:",
      pvn_label: "PVN Reģ.Nr.:",
      contacts_label: "Kontakti:",
      addr_label: "Juridiskā adrese:",
      e_label: "E-pasts:",
      t_label: "Tālrunis:",
      q3: "3. Kādus personas datus mēs vācam",
      a3_intro: "Mēs varam apkopot un apstrādāt šādu informāciju par Jums:",
      a3_bullet1: "Kontaktinformācija: vārds, uzņēmuma nosaukums, e-pasta adrese, tālruņa numurs",
      a3_bullet2: "Tehniskā informācija: IP adrese, pārlūkprogrammas veids, ierīces informācija, apmeklējuma laiks un datums",
      a3_bullet3: "Lietošanas dati: informācija par to, kā Jūs izmantojat mūsu mājas lapu un pakalpojumus",
      a3_bullet4: "Saziņas dati: Jūsu ziņojumu un komunikācijas saturs ar mūsu uzņēmumu",
      q4: "4. Kā mēs izmantojam Jūsu datus",
      a4_intro: "Mēs izmantojam Jūsu personas datus šādiem mērķiem:",
      a4_b1: "Lai sniegtu Jums pieprasītos pakalpojumus un atbildētu uz Jūsu pieprasījumiem",
      a4_b2: "Lai sazinātos ar Jums par mūsu pakalpojumiem un piedāvājumiem",
      a4_b3: "Lai uzlabotu mūsu mājas lapu un pakalpojumu kvalitāti",
      a4_b4: "Lai izpildītu juridiskās saistības un aizsargātu savas likumīgās intereses",
      q5: "5. Juridiskais pamats datu apstrādei",
      a5_intro: "Mēs apstrādājam Jūsu personas datus, pamatojoties uz:",
      a5_b1: "Jūsu piekrišanu – kad Jūs aizpildāt mūsu kontaktformu un piekrītat datu apstrādes noteikumiem",
      a5_b2: "Līguma izpildi – lai sniegtu Jums pieprasītos pakalpojumus",
      a5_b3: "Likumīgas intereses – lai uzlabotu mūsu pakalpojumus un aizsargātu uzņēmumu",
      q6: "6. Datu uzglabāšana un drošība",
      a6_p1: "Mēs uzglabājam Jūsu personas datus tikai tik ilgi, cik tas ir nepieciešams šajā politikā norādīto mērķu sasniegšanai vai saskaņā ar likumu.",
      a6_p2: "Mēs izmantojam atbilstošus tehniskos un organizatoriskos drošības pasākumus, lai aizsargātu Jūsu datus pret nesankcionētu piekļuvi, izmantošanu vai izpaušanu:",
      a6_b1: "SSL šifrēšana datu pārsūtīšanai",
      a6_b2: "Ierobežota piekļuve personas datiem",
      a6_b3: "Regulāras drošības pārbaudes un atjauninājumi",
      q7: "7. Jūsu tiesības",
      a7_intro: "Saskaņā ar GDPR Jums ir šādas tiesības attiecībā uz Saviem personas datiem:",
      a7_b1: "Piekļuves tiesības – pieprasīt piekļuvi Saviem personas datiem",
      a7_b2: "Labošanas tiesības – labot neprecīzus vai nepilnīgus datus",
      a7_b3: "Dzēšanas tiesības – pieprasīt Savu datu dzēšanu (\"tiesības tikt aizmirstam\")",
      a7_b4: "Ierobežošanas tiesības – ierobežot Savu datu apstrādi",
      a7_b5: "Pārnesamības tiesības – saņemt Savus datus strukturētā formātā",
      a7_b6: "Iebildumu tiesības – iebilst pret Savu datu apstrādi",
      a7_b7: "Atsaukt piekrišanu – jebkurā laikā atsaukt Savu piekrišanu datu apstrādei",
      a7_footer: "Lai izmantotu Savas tiesības, lūdzu, sazinieties ar mums, izmantojot kontaktinformāciju, kas norādīta šīs politikas sākumā.",
      q8: "8. Sīkdatnes (Cookies)",
      a8_p1: "Mūsu mājas lapa izmanto sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi un analizētu mājas lapas apmeklējumu. Sīkdatnes ir mazi teksta faili, kas tiek saglabāti Jūsu ierīcē.",
      a8_p2: "Mēs izmantojam nepieciešamās sīkdatnes (nodrošina pamata funkcionalitāti) un analītikas sīkdatnes (palīdz saprast, kā apmeklētāji izmanto lapu). Jūs varat pārvaldīt sīkdatnes Savā pārlūkprogrammā.",
      q9: "9. Trešo pušu pakalpojumi",
      a9_p1: "Mēs varam izmantot uzticamus trešo pušu pakalpojumu sniedzējus, piemēram, mājas lapas mitināšanas pakalpojumus, e-pasta sūtīšanas pakalpojumus un analītikas rīkus (Google Analytics). Šie sniedzēji piekļūst datiem tikai tiktāl, cik tas nepieciešams to uzdevumu veikšanai.",
      q10: "10. Izmaiņas privātuma politikā",
      a10_p1: "Mēs paturam tiesības jebkurā laikā atjaunināt šo privātuma politiku. Izmaiņas stāsies spēkā, tiklīdz atjauninātā politika tiks publicēta mūsu mājas lapā.",
      q11: "11. Sūdzības",
      a11_p1: "Ja Jums ir sūdzības, lūdzu, vispirms sazinieties ar mums. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā:",
      dvi_title: "Datu valsts inspekcija",
      dvi_addr: "Adrese: Blaumaņa iela 11/13-15, Rīga, LV-1011",
      dvi_email: "E-pasts: ",
      dvi_phone: "Tālrunis: ",
      dvi_web: "Mājas lapa: ",
      closeBtn: "Aizvērt"
    },
    RU: {
      meta: "Защита данных",
      title: "Политика конфиденциальности",
      updated: "Последнее обновление: март 2026 года",
      q1: "1. Введение",
      a1_p1: "«Demontāža 24/7» (далее — «мы», «наш» или «компания») обязуется защищать Ваш личный приватный статус. Настоящая политика конфиденциальности подробно объясняет, как именно мы собираем, используем, храним и защищаем Ваши персональные данные в строгом соответствии с Общим регламентом по защите данных (GDPR) и законодательством Латвийской Республики.",
      a1_p2: "Используя наш сайт и заказывая услуги нашей компании, Вы соглашаетесь с принципами сбора и обработки информации, описанными в данной политике.",
      q2: "2. Контролер данных",
      c_label: "Компания:",
      reg_label: "Регистрационный номер:",
      pvn_label: "НДС Рег. Номер:",
      contacts_label: "Контакты:",
      addr_label: "Юридический адрес:",
      e_label: "E-mail:",
      t_label: "Телефон:",
      q3: "3. Какие именно данные мы собираем",
      a3_intro: "Мы можем собирать и обрабатывать следующую информацию, добровольно предоставленную Вами:",
      a3_bullet1: "Контактные данные: имя, название Вашей компании, e-mail адрес и актуальный номер телефона",
      a3_bullet2: "Техническая информация: IP-адрес устройства, тип браузера, характеристики операционной системы, дата и время визита",
      a3_bullet3: "Статистика использования: сведения о том, как именно Вы используете наш сайт и доступные услуги",
      a3_bullet4: "История переписки: содержание Ваших запросов и ответов нашей службы поддержки",
      q4: "4. Как именно мы используем Ваши данные",
      a4_intro: "Мы используем Ваши личные данные исключительно в следующих целях:",
      a4_b1: "Для оказания запрошенных Вами профессиональных услуг и мгновенного расчета смет на работы",
      a4_b2: "Для отправки официальных коммерческих предложений и уведомлений о деталях заказа",
      a4_b3: "Для анализа качества работы с клиентами и оптимизации разделов сайта",
      a4_b4: "Для выполнения юридических обязательств и обеспечения легитимности коммерческих интересов",
      q5: "5. Правовое основание обработки данных",
      a5_intro: "Мы обрабатываем Ваши персональные данные на следующих основаниях:",
      a5_b1: "Ваше согласие — когда Вы добровольно заполняете форму обратной связи и подтверждаете согласие",
      a5_b2: "Исполнение договора — для непосредственной подготовки коммерческих услуг по Вашему заказу",
      a5_b3: "Легитимный интерес — в целях повышения безопасности и профилактики злоупотреблений",
      q6: "6. Хранение личных данных и меры безопасности",
      a6_p1: "Ваши личные данные хранятся ровно столько, сколько это требуется для выполнения указанных целей или в соответствии с установленными латвийскими законами сроками архивности.",
      a6_p2: "Применяются передовые технические и системные организационные меры защиты данных:",
      a6_b1: "SSL-шифрование передаваемой в формах информации",
      a6_b2: "Строго разграниченный доступ к серверам хранения данных",
      a6_b3: "Регулярный аудит систем безопасности сайта",
      q7: "7. Ваши законные права",
      a7_intro: "В соответствии с европейским регламентом GDPR, Вы обладаете следующими правами на свои данные:",
      a7_b1: "Право доступа — право запрашивать у нас отчет о сохраненных о Вас данных",
      a7_b2: "Право исправления — право исправлять любые неточные данные",
      a7_b3: "Право на удаление («право быть забытым») — право требовать физического стирания Вашей информации",
      a7_b4: "Право ограничения обработки — право временно приостановить использование данных",
      a7_b5: "Право переноса данных — право получить копию данных в структурированном виде",
      a7_b6: "Право на возражение — право оспорить конкретные виды использования личных данных",
      a7_b7: "Право отзыва согласия — право отозвать согласие в любой удобный момент",
      a7_footer: "Чтобы заявить о своих законных правах, пожалуйста, воспользуйтесь официальными контактными координатами, указанными на сайте.",
      q8: "8. Файлы cookie (Cookies)",
      a8_p1: "Наш сайт использует небольшие служебные файлы cookie для повышения стабильности загрузки и качественной аналитики переходов. Файлы сохраняются в изолированной области настроек Вашего браузера.",
      a8_p2: "Мы используем строго необходимые сессионные файлы для базовой работоспособности сайта и аналитические файлы для подсчета количества посетителей. Вы можете отключить cookie самостоятельно.",
      q9: "9. Сервисы третьих лиц",
      a9_p1: "В некоторых технических случаях мы можем привлекать проверенных внешних подрядчиков (например, серверный хостинг, почтовые шлюзы передачи уведомлений или анонимный счетчик Google Analytics). Доступ к данным предоставляется строго в минимальном техническом объеме.",
      q10: "10. Обновление данной политики конфиденциальности",
      a10_p1: "Мы оставляем за собой право периодически вносить корректировки в данную политику. Любые новые положения вступают в законную силу немедленно с момента публикации на текущей странице сайта.",
      q11: "11. Подача жалоб и претензий",
      a11_p1: "При наличии любых вопросов или спорных претензий, мы просим Вас сначала в частном порядке связаться с нами для мирного разрешения разногласий. Вы также имеете полное законное право подать жалобу в Государственную инспекцию данных (DVI):",
      dvi_title: "Datu valsts inspekcija / Государственная инспекция данных",
      dvi_addr: "Адрес: Blaumaņa iela 11/13-15, Rīga, LV-1011",
      dvi_email: "Электронная почта: ",
      dvi_phone: "Телефон: ",
      dvi_web: "Сайт инспекции: ",
      closeBtn: "Закрыть"
    }
  }[currentLang];

  return (
    <main className="w-full bg-white text-zinc-900 min-h-screen pb-16">
      {/* Top-left corner navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-8 w-8 text-[#FBBF24] mx-auto mb-3" />
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest font-mono">{t.meta}</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            {t.title}
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16" aria-label="Privātuma politikas saturs">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-10 rounded-[2px] shadow-sm">
            
            <div className="text-zinc-400 text-xs font-medium font-sans mb-8 border-b border-zinc-200 pb-3">
              {t.updated}
            </div>

            <div className="space-y-6 text-zinc-750 text-sm sm:text-base leading-relaxed font-sans">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q1}
                </h2>
                <p className="mb-3">
                  {t.a1_p1}
                </p>
                <p className="mb-3">
                  {t.a1_p2}
                </p>
              </div>

              {/* Section 2 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q2}
                </h2>
                
                <div className="bg-white border border-zinc-200 p-5 rounded-[1px] space-y-2 text-zinc-700">
                  <p><strong className="text-zinc-900">{t.c_label}</strong> Demontāža 24/7</p>
                  <p><strong className="text-zinc-900">{t.reg_label}</strong> 900000012225</p>
                  <p><strong className="text-zinc-900">{t.pvn_label}</strong> 900000012225</p>
                  
                  <div className="pt-3 border-t border-zinc-150 mt-3">
                    <p className="font-extrabold text-zinc-900 mb-1">{t.contacts_label}</p>
                    <p className="text-zinc-650"><span className="font-semibold text-zinc-900">{t.addr_label}</span> Rīga, LV-1010</p>
                    <p className="text-zinc-650"><span className="font-semibold text-zinc-900">{t.e_label}</span> <a href="mailto:info@demontaza24.eu" className="text-[#B45309] font-bold hover:underline">info@demontaza24.eu</a></p>
                    <p className="text-zinc-650"><span className="font-semibold text-zinc-900">{t.t_label}</span> <a href="tel:26739899" className="text-zinc-900 hover:underline">+371 26739899</a></p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q3}
                </h2>
                <p className="mb-3">{t.a3_intro}</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li><strong className="text-zinc-900">{t.a3_bullet1.split(":")[0]}:</strong>{t.a3_bullet1.split(":")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a3_bullet2.split(":")[0]}:</strong>{t.a3_bullet2.split(":")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a3_bullet3.split(":")[0]}:</strong>{t.a3_bullet3.split(":")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a3_bullet4.split(":")[0]}:</strong>{t.a3_bullet4.split(":")[1]}</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q4}
                </h2>
                <p className="mb-3">{t.a4_intro}</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li>{t.a4_b1}</li>
                  <li>{t.a4_b2}</li>
                  <li>{t.a4_b3}</li>
                  <li>{t.a4_b4}</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q5}
                </h2>
                <p className="mb-3">{t.a5_intro}</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li><strong className="text-zinc-900">{t.a5_b1.split("–")[0]}</strong> – {t.a5_b1.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a5_b2.split("–")[0]}</strong> – {t.a5_b2.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a5_b3.split("–")[0]}</strong> – {t.a5_b3.split("–")[1]}</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q6}
                </h2>
                <p className="mb-3">
                  {t.a6_p1}
                </p>
                <p className="mb-3">
                  {t.a6_p2}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li>{t.a6_b1}</li>
                  <li>{t.a6_b2}</li>
                  <li>{t.a6_b3}</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q7}
                </h2>
                <p className="mb-3">{t.a7_intro}</p>
                <ul className="list-disc list-inside space-y-2.5 pl-2 text-zinc-750">
                  <li><strong className="text-zinc-900">{t.a7_b1.split("–")[0]}</strong> – {t.a7_b1.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a7_b2.split("–")[0]}</strong> – {t.a7_b2.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a7_b3.split("–")[0]}</strong> – {t.a7_b3.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a7_b4.split("–")[0]}</strong> – {t.a7_b4.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a7_b5.split("–")[0]}</strong> – {t.a7_b5.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a7_b6.split("–")[0]}</strong> – {t.a7_b6.split("–")[1]}</li>
                  <li><strong className="text-zinc-900">{t.a7_b7.split("–")[0]}</strong> – {t.a7_b7.split("–")[1]}</li>
                </ul>
                <p className="mt-4">
                  {t.a7_footer}
                </p>
              </div>

              {/* Section 8 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q8}
                </h2>
                <p className="mb-3">
                  {t.a8_p1}
                </p>
                <p className="mb-3">
                  {t.a8_p2}
                </p>
              </div>

              {/* Section 9 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q9}
                </h2>
                <p className="mb-3">
                  {t.a9_p1}
                </p>
              </div>

              {/* Section 10 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q10}
                </h2>
                <p className="mb-3">
                  {t.a10_p1}
                </p>
              </div>

              {/* Section 11 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q11}
                </h2>
                <p className="mb-4">{t.a11_p1}</p>
                
                <div className="bg-white border border-zinc-200 p-5 rounded-[1px] space-y-1 text-sm text-zinc-700">
                  <p className="font-extrabold text-zinc-900 mb-1">{t.dvi_title}</p>
                  <p><strong className="text-zinc-900">{t.dvi_addr.split(":")[0]}:</strong>{t.dvi_addr.split(":")[1]}</p>
                  <p><strong className="text-zinc-900">{t.dvi_email}</strong> <a href="mailto:info@dvi.gov.lv" className="hover:underline font-medium text-zinc-850">info@dvi.gov.lv</a></p>
                  <p><strong className="text-zinc-900">{t.dvi_phone}</strong> +371 67 22 31 31</p>
                  <p><strong className="text-zinc-900">{t.dvi_web}</strong> <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-[#B45309] font-semibold hover:underline">www.dvi.gov.lv</a></p>
                </div>
              </div>

            </div>

            {/* Close Button back to previous route */}
            <div className="mt-10 pt-6 border-t border-zinc-200 flex justify-center">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 bg-[#FBBF24] hover:bg-zinc-900 hover:text-[#FBBF24] text-zinc-950 px-8 py-3 text-xs font-black uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-md cursor-pointer"
                aria-label="Aizvērt un atgriezties"
              >
                <ArrowLeft className="h-4 w-4 font-bold" />
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
