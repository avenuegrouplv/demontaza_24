import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Share2, Mail, Phone, MapPin, Building, Shield } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"sidknes" | "privatums" | null>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900" aria-label="Mājaslapas kājene">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/Logo.webp"
                alt="SIA “Demontāža 24/7” Kājenes Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-white font-bold tracking-wider text-sm ml-2">DEMONTĀŽA 24/7</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Profesionāla pieeja būvju likvidēšanā un vides saglabāšanā.
            </p>
          </div>

          {/* Column 2: "Sadaļas" clickable list */}
          <div className="space-y-4">
            <h3 className="text-[#FBBF24] text-xs font-bold tracking-wider uppercase font-mono">Sadaļas</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FBBF24] transition-colors focus:outline-none">Sākums</Link>
              </li>
              <li>
                <Link to="/pakalpojumi" className="hover:text-[#FBBF24] transition-colors focus:outline-none">Pakalpojumi</Link>
              </li>
              <li>
                <Link to="/musu-tehnika" className="hover:text-[#FBBF24] transition-colors focus:outline-none">Mūsu tehnika</Link>
              </li>
              <li>
                <Link to="/buj" className="hover:text-[#FBBF24] transition-colors focus:outline-none">Biežāk uzdotie jautājumi</Link>
              </li>
              <li>
                <Link to="/galerija" className="hover:text-[#FBBF24] transition-colors focus:outline-none">Galerija</Link>
              </li>
              <li>
                <Link to="/kontakti" className="hover:text-[#FBBF24] transition-colors focus:outline-none">Kontakti</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: "Seko Mums" social column */}
          <div className="space-y-4">
            <h3 className="text-[#FBBF24] text-xs font-bold tracking-wider uppercase font-mono">Seko mums</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-zinc-900 rounded-[2px] text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-800 transition-colors"
                aria-label="Seko mums Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-zinc-900 rounded-[2px] text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-800 transition-colors"
                aria-label="Seko mums X (Twitter)"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-zinc-900 rounded-[2px] text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-800 transition-colors"
                aria-label="Seko mums Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact info, aligned right on desktop */}
          <div className="space-y-4 lg:text-right lg:items-end lg:flex lg:flex-col">
            <h3 className="text-[#FBBF24] text-xs font-bold tracking-wider uppercase lg:text-right font-mono">Kontaktinformācija</h3>
            <div className="text-xs space-y-2 text-zinc-400">
              <p className="font-bold text-white">SIA “Demontāža 24/7”</p>
              <p>Reģ. Nr. 900000012225</p>
              <p>
                Juridiskā adrese: <span className="inline-block w-16 border-b border-zinc-800"></span>
              </p>
              <div className="pt-2 space-y-2 flex flex-col lg:items-end">
                <a href="tel:26739899" className="hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1.5 justify-start lg:justify-end">
                  <Phone className="h-3.5 w-3.5 text-[#FBBF24]" />
                  <span>+371 26739899</span>
                </a>
                <a href="mailto:info@demontaza24.eu" className="hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1.5 justify-start lg:justify-end">
                  <Mail className="h-3.5 w-3.5 text-[#FBBF24]" />
                  <span>info@demontaza24.eu</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-medium">
          
          {/* Left copyright notice */}
          <div className="text-zinc-500 text-center sm:text-left">
            SIA “Demontāža 24/7” © 2026 | Visas tiesības aizsargātas
          </div>

          {/* Right legal policy buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModal("sidknes")}
              className="text-zinc-550 hover:text-[#FBBF24] transition-colors focus:outline-none cursor-pointer"
              aria-label="Sīkdatņu politika"
            >
              Sīkdatņu politika
            </button>
            <span className="text-zinc-800">I</span>
            <button
              onClick={() => setActiveModal("privatums")}
              className="text-zinc-550 hover:text-[#FBBF24] transition-colors focus:outline-none cursor-pointer"
              aria-label="Privātuma politika"
            >
              Privātuma politika
            </button>
          </div>

        </div>

      </div>

      {/* Sīkdatņu Politikas Modal Dialog */}
      {activeModal === "sidknes" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#111827] border border-zinc-800 p-6 sm:p-8 shadow-2xl rounded-[2px] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
              <Shield className="h-5 w-5 text-[#FBBF24]" />
              <h2 className="text-white text-lg font-bold">Sīkdatņu politika</h2>
            </div>
            
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-sans pr-1">
              <p className="font-semibold text-[#FBBF24]">Pēdējo reizi atjaunināts: 2026. gada jūnijā</p>
              <p>
                SIA “Demontāža 24/7” izmanto sīkdatnes (cookies) mūsu tīmekļa vietnē, lai uzlabotu tās darbību, nodrošinātu drošību un analizētu satiksmi. Šajā politikā ir aprakstīts, kādas sīkdatnes mēs izmantojam un kāpēc.
              </p>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">1. Kas ir sīkdatne?</h3>
              <p>
                Sīkdatne ir neliels failu kopums, kas tiek nosūtīts uz jūsu pārlūkprogrammu no vietnes servera un saglabāts jūsu ierīces (datora, planšetdatora vai viedtālruņa) cietajā diskā. Tie palīdz vietnei atpazīt jūsu ierīci nākamajā apmeklējuma reizē.
              </p>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">2. Kādas sīkdatnes mēs izmantojam?</h3>
              <p>
                Mēs izmantojam divu veidu sīkdatnes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong className="text-[#FBBF24]">Nepieciešamās sīkdatnes:</strong> Šīs sīkdatnes ir būtiskas, lai vietne darbotos pareizi un nodrošinātu drošu sesijas vadību.</li>
                <li><strong className="text-[#FBBF24]">Analītiskās sīkdatnes:</strong> Palīdz mums saprast, kā lietotāji mijiedarbojas ar vietni (piemēram, apmeklētās lapas, pavadītais laiks), lai mēs varētu turpināt uzlabot vietnes lietošanas ērtumu.</li>
              </ul>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">3. Sīkdatņu pārvaldība</h3>
              <p>
                Lielākā daļa tīmekļa pārlūkprogrammu ļauj jums kontrolēt sīkdatnes, izmantojot to iestatījumus. Jūs varat bloķēt sīkdatņu saglabāšanu vai izdzēst jau esošās. Lūdzu, ņemiet vērā, ka dažu nepieciešamo sīkdatņu bloķēšana var ietekmēt vietnes darbības funkcionalitāti.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="cursor-pointer bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#111827] px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all"
                aria-label="Aizvērt sīkdatņu politiku"
              >
                Aizvērt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privātuma Politikas Modal Dialog */}
      {activeModal === "privatums" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#111827] border border-zinc-800 p-6 sm:p-8 shadow-2xl rounded-[2px] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
              <Building className="h-5 w-5 text-[#FBBF24]" />
              <h2 className="text-white text-lg font-bold">Privātuma politika</h2>
            </div>
            
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-sans pr-1">
              <p className="font-semibold text-[#FBBF24]">Pēdējo reizi atjaunināts: 2026. gada jūnijā</p>
              <p>
                SIA “Demontāža 24/7” rūpējas par jūsu privātumu un apņemas aizsargāt jūsu personas datus saskaņā ar Eiropas Parlamenta un Padomes Regulu (ES) 2016/679 (Vispārīgā datu aizsardzības regula jeb VDAR) un citiem LR piemērojamiem tiesību aktiem.
              </p>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">1. Kādi personas dati tiek apstrādāti?</h3>
              <p>
                Aizpildot saziņas formu mūsu vietnē, mēs apkopojam šādus datus:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Vārds un/vai Uzņēmuma nosaukums</li>
                <li>E-pasta adrese</li>
                <li>Tālruņa numurs (pēc izvēles)</li>
                <li>Ziņojuma saturs un informācija par objektu</li>
              </ul>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">2. Apstrādes mērķis un tiesiskais pamats</h3>
              <p>
                Dati tiek apstrādāti vienīgi tādēļ, lai atbildētu uz jūsu pieprasījumiem, sagatavotu bezmaksas tāmi demontāžas pakalpojumiem un nodrošinātu turpmāko sadarbību. Apstrāde pamatojas uz jūsu piekrišanu un rīcību pirms līguma noslēgšanas.
              </p>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">3. Datu glabāšanas ilgums</h3>
              <p>
                Mēs uzglabāsim jūsu personas datus tikai tik ilgi, cik nepieciešams šajā privātuma politikā noteikto mērķu sasniegšanai vai LR tiesību aktos noteikto prasību izpildei.
              </p>
              <h3 className="text-white font-bold mt-4 text-xs tracking-wider uppercase">4. Jūsu tiesības</h3>
              <p>
                Jums ir tiesības pieprasīt piekļuvi saviem datiem, labot nepareizus datus, iebilst pret apstrādi vai lūgt datu dzēšanu, sazinoties ar mums pa e-pastu: <a href="mailto:info@demontaza24.eu" className="text-[#FBBF24] underline">info@demontaza24.eu</a>.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="cursor-pointer bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#111827] px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all"
                aria-label="Aizvērt privātuma politiku"
              >
                Aizvērt
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
