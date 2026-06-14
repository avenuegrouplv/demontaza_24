import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, ExternalLink } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { useLanguage } from "../context/LanguageContext";

export default function SikdatnuPolitika() {
  const navigate = useNavigate();
  const { currentLang } = useLanguage();

  const t = {
    LV: {
      meta: "Noteikumi & Drošība",
      title: "Sīkdatņu politika",
      updated: "Pēdējo reizi atjaunots: 2026.gada marts",
      q1: "1. Kas ir sīkdatnes?",
      a1_p1: "Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.",
      a1_p2: "Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.",
      q2: "2. Kāpēc mēs izmantojam sīkdatnes?",
      a2_intro: "Demontāža 24/7 izmanto sīkdatnes šādiem mērķiem:",
      a2_f1: "Vietnes funkcionalitātes nodrošināšanai: Lai tīmekļa vietne varētu darboties un nodrošināt pamatfunkcijas.",
      a2_f2: "Lietošanas pieredzes uzlabošanai: Lai atcerētos Jūsu izvēles un sniegtu personalizētāku saturu.",
      a2_f3: "Analītikai un statistikai: Lai saprastu, kā apmeklētāji mijiedarbojas ar vietni (kuras lapas apmeklē visbiežāk, cik ilgi uzturas vietnē), kas palīdz mums uzlabot vietnes struktūru un saturu.",
      q3: "3. Izmantoto sīkdatņu veidi",
      category1_title: "Nepieciešamās sīkdatnes",
      category1_desc: "Šīs sīkdatnes ir būtiskas, lai vietne varētu darboties. Bez tām dažas vietnes daļas var nedarboties pareizi. Tās parasti tiek iestatītas tikai reaģējot uz Jūsu veiktajām darbībām, piemēram, aizpildot kontaktformas.",
      category2_title: "Analītikas sīkdatnes",
      category2_desc: "Mēs izmantojam trešo pušu rīkus (piemēram, Google Analytics), lai apkopotu anonīmu info par apmeklētāju skaitu un populārākajām lapām. Šie dati mums palīdz uzlabot lietotāju pieredzi.",
      q4: "4. Kā pārvaldīt un izdzēst sīkdatnes?",
      a4_p1: "Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.",
      a4_instruction_header: "Instrukcijas populārākajām pārlūkprogrammām:",
      disclaimer: "Ievērojiet: Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmekļa vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.",
      questions_footer: "Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz: ",
      closeBtn: "Aizvērt"
    },
    RU: {
      meta: "Правила и Безопасность",
      title: "Политика использования файлов cookie",
      updated: "Последнее обновление: март 2026 года",
      q1: "1. Что такое файлы cookie?",
      a1_p1: "Файлы cookie (cookies) — это небольшие текстовые файлы, которые веб-сайт сохраняет на Вашем компьютере или мобильном устройстве при его посещении. При каждом последующем посещении файлы куки отправляются обратно на исходный или сторонний веб-сайт, который распознает данный файл.",
      a1_p2: "Файлы cookie работают как память конкретного сайта, помогая ему запоминать Ваши предпочтения и выполненные действия (например, выбранный язык, размеры шрифтов и другие настройки оформления), чтобы Вам не приходилось выбирать их заново при каждом посещении.",
      q2: "2. Зачем мы используем файлы cookie?",
      a2_intro: "Demontāža 24/7 использует файлы cookie для достижения следующих важных целей:",
      a2_f1: "Обеспечение функциональности сайта: для корректного выполнения основных интерактивных функций и сервисов веб-сайта.",
      a2_f2: "Повышение удобства посетителей: для автоматического сохранения Ваших выборов и предоставления персонализированной информации.",
      a2_f3: "Анализ и сбор статистики: для понимания того, как клиенты взаимодействуют с разделами сайта (какие страницы наиболее востребованы, длительность сессий), что позволяет нам непрерывно повышать удобство интерфейса сайта.",
      q3: "3. Виды используемых нами файлов cookie",
      category1_title: "Необходимые (технические) файлы cookie",
      category1_desc: "Эти файлы критически важны для функционирования сайта. Без них некоторые страницы или формы могут работать некорректно. Чаще всего они устанавливаются в ответ на Ваши прямые действия, такие как заполнение форм заявок.",
      category2_title: "Аналитические файлы cookie",
      category2_desc: "Мы используем сертифицированные аналитические системы третьих сторон (например, Google Analytics) для сбора неперсонализированной обобщенной статистики посещений, объема трафика и поведения пользователей на сайте.",
      q4: "4. Как можно управлять и удалять файлы cookie?",
      a4_p1: "Большинство современных браузеров по умолчанию настроены на автоматический прием cookie-файлов. Вы можете в любой удобный момент легко изменить настройки своего браузера, заблокировав сохранение файлов cookie или включив уведомления при их передаче.",
      a4_instruction_header: "Официальные инструкции для популярных браузеров:",
      disclaimer: "Пожалуйста, учтите: блокирование или удаление файлов cookie может привести к некорректной работе некоторых разделов нашего сайта или ограничить доступность определенных интерактивных функций.",
      questions_footer: "Если у Вас есть вопросы по нашей политике в отношении файлов cookie, пожалуйста, свяжитесь с нами по электронной почте: ",
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
      <section className="py-12 sm:py-16" aria-label="Sīkdatņu politikas saturs">
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
                <p className="mb-3">
                  {t.a2_intro}
                </p>
                <ul className="list-disc list-inside space-y-2.5 pl-2 text-zinc-750">
                  <li>
                    {t.a2_f1}
                  </li>
                  <li>
                    {t.a2_f2}
                  </li>
                  <li>
                    {t.a2_f3}
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q3}
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border border-zinc-200 p-4 rounded-[1px]">
                    <h3 className="text-zinc-900 font-bold text-sm mb-1.5 uppercase tracking-wider font-mono text-[#B45309]">
                      {t.category1_title}
                    </h3>
                    <p className="text-zinc-650 text-sm">
                      {t.category1_desc}
                    </p>
                  </div>
                  
                  <div className="bg-white border border-zinc-200 p-4 rounded-[1px]">
                    <h3 className="text-zinc-900 font-bold text-sm mb-1.5 uppercase tracking-wider font-mono text-[#B45309]">
                      {t.category2_title}
                    </h3>
                    <p className="text-zinc-650 text-sm">
                      {t.category2_desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  {t.q4}
                </h2>
                <p className="mb-4">
                  {t.a4_p1}
                </p>
                <p className="font-bold text-zinc-900 mb-2">{t.a4_instruction_header}</p>
                
                {/* Browser links style as buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 mb-6">
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-zinc-200 hover:border-[#FBBF24]/80 p-3 text-sm font-bold text-zinc-800 rounded-[2px] transition-colors shadow-sm cursor-pointer group"
                  >
                    <span>Google Chrome</span>
                    <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-[#FBBF24]" />
                  </a>

                  <a
                    href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-zinc-200 hover:border-[#FBBF24]/80 p-3 text-sm font-bold text-zinc-800 rounded-[2px] transition-colors shadow-sm cursor-pointer group"
                  >
                    <span>Safari</span>
                    <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-[#FBBF24]" />
                  </a>

                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-zinc-200 hover:border-[#FBBF24]/80 p-3 text-sm font-bold text-zinc-800 rounded-[2px] transition-colors shadow-sm cursor-pointer group"
                  >
                    <span>Mozilla Firefox</span>
                    <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-[#FBBF24]" />
                  </a>

                  <a
                    href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-zinc-200 hover:border-[#FBBF24]/80 p-3 text-sm font-bold text-zinc-800 rounded-[2px] transition-colors shadow-sm cursor-pointer group"
                  >
                    <span>MS Edge</span>
                    <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-[#FBBF24]" />
                  </a>
                </div>

                <p className="italic text-zinc-650 bg-zinc-100 p-3.5 border-l-2 border-[#FBBF24] text-xs font-medium rounded-[1px] mb-4">
                  {t.disclaimer}
                </p>
                
                <p className="mt-6 border-t border-zinc-200 pt-4">
                  {t.questions_footer} <a href="mailto:info@demontaza24.eu" className="text-[#B45309] font-bold hover:underline">info@demontaza24.eu</a>
                </p>
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
