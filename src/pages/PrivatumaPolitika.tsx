import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";

export default function PrivatumaPolitika() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-white text-zinc-900 min-h-screen pb-16">
      {/* Top-left corner navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Title Block */}
      <section className="bg-zinc-100 py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-8 w-8 text-[#FBBF24] mx-auto mb-3" />
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest font-mono">Datu aizsardzība</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            Privātuma politika
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16" aria-label="Privātuma politikas saturs">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-10 rounded-[2px] shadow-sm">
            
            <div className="text-zinc-400 text-xs font-medium font-sans mb-8 border-b border-zinc-200 pb-3">
              Pēdējo reizi atjaunots: 2026.gada marts
            </div>

            <div className="space-y-6 text-zinc-750 text-sm sm:text-base leading-relaxed font-sans">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  1. Ievads
                </h2>
                <p className="mb-3">
                  “Demontāža 24/7" (turpmāk – "mēs", "mūsu" vai "uzņēmums") apņemas aizsargāt un respektēt Jūsu privātumu. Šī privātuma politika skaidro, kā mēs apkopojam, izmantojam, uzglabājam un aizsargājam Jūsu personas datus saskaņā ar Vispārīgo datu aizsardzības regulu (GDPR) un Latvijas Republikas tiesību aktiem.
                </p>
                <p className="mb-3">
                  Izmantojot mūsu mājas lapu un pakalpojumus, Jūs piekrītat šajā politikā aprakstītajai datu vākšanai un izmantošanai.
                </p>
              </div>

              {/* Section 2 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  2. Datu pārzinis
                </h2>
                
                <div className="bg-white border border-zinc-200 p-5 rounded-[1px] space-y-2 text-zinc-700">
                  <p><strong className="text-zinc-900">Uzņēmums:</strong> Demontāža 24/7</p>
                  <p><strong className="text-zinc-900">Reģistrācijas numurs:</strong> 900000012225</p>
                  <p><strong className="text-zinc-900">PVN Reģ.Nr.:</strong> 900000012225</p>
                  
                  <div className="pt-3 border-t border-zinc-150 mt-3">
                    <p className="font-extrabold text-zinc-900 mb-1">Kontakti:</p>
                    <p className="text-zinc-600"><span className="font-semibold text-zinc-900">Juridiskā adrese:</span> Rīga, LV-1010</p>
                    <p className="text-zinc-600"><span className="font-semibold text-zinc-900">E-pasts:</span> <a href="mailto:info@demontaza24.eu" className="text-[#B45309] font-bold hover:underline">info@demontaza24.eu</a></p>
                    <p className="text-zinc-600"><span className="font-semibold text-zinc-900">Tālrunis:</span> <a href="tel:26739899" className="text-zinc-900 hover:underline">+371 26739899</a></p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  3. Kādus personas datus mēs vācam
                </h2>
                <p className="mb-3">Mēs varam apkopot un apstrādāt šādu informāciju par Jums:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li><strong className="text-zinc-900">Kontaktinformācija:</strong> vārds, uzņēmuma nosaukums, e-pasta adrese, tālruņa numurs</li>
                  <li><strong className="text-zinc-900">Tehniskā informācija:</strong> IP adrese, pārlūkprogrammas veids, ierīces informācija, apmeklējuma laiks un datums</li>
                  <li><strong className="text-zinc-900">Lietošanas dati:</strong> informācija par to, kā Jūs izmantojat mūsu mājas lapu un pakalpojumus</li>
                  <li><strong className="text-zinc-900">Saziņas dati:</strong> Jūsu ziņojumu un komunikācijas saturs ar mūsu uzņēmumu</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  4. Kā mēs izmantojam Jūsu datus
                </h2>
                <p className="mb-3">Mēs izmantojam Jūsu personas datus šādiem mērķiem:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li>Lai sniegtu Jums pieprasītos pakalpojumus un atbildētu uz Jūsu pieprasījumiem</li>
                  <li>Lai sazinātos ar Jums par mūsu pakalpojumiem un piedāvājumiem</li>
                  <li>Lai uzlabotu mūsu mājas lapu un pakalpojumu kvalitāti</li>
                  <li>Lai izpildītu juridiskās saistības un aizsargātu savas likumīgās intereses</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  5. Juridiskais pamats datu apstrādei
                </h2>
                <p className="mb-3">Mēs apstrādājam Jūsu personas datus, pamatojoties uz:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-750">
                  <li><strong className="text-zinc-900">Jūsu piekrišanu</strong> – kad Jūs aizpildāt mūsu kontaktformu un piekrītat datu apstrādes noteikumiem</li>
                  <li><strong className="text-zinc-900">Līguma izpildi</strong> – lai sniegtu Jums pieprasītos pakalpojumus</li>
                  <li><strong className="text-zinc-900">Likumīgas intereses</strong> – lai uzlabotu mūsu pakalpojumus un aizsargātu uzņēmumu</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  6. Datu uzglabāšana un drošība
                </h2>
                <p className="mb-3">
                  Mēs uzglabājam Jūsu personas datus tikai tik ilgi, cik tas ir nepieciešams šajā politikā norādīto mērķu sasniegšanai vai saskaņā ar likumu.
                </p>
                <p className="mb-3">
                  Mēs izmantojam atbilstošus tehniskos un organizatoriskos drošības pasākumus, lai aizsargātu Jūsu datus pret nesankcionētu piekļuvi, izmantošanu vai izpaušanu:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-755">
                  <li>SSL šifrēšana datu pārsūtīšanai</li>
                  <li>Ierobežota piekļuve personas datiem</li>
                  <li>Regulāras drošības pārbaudes un atjauninājumi</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  7. Jūsu tiesības
                </h2>
                <p className="mb-3">Saskaņā ar GDPR Jums ir šādas tiesības attiecībā uz Saviem personas datiem:</p>
                <ul className="list-disc list-inside space-y-2.5 pl-2 text-zinc-750">
                  <li><strong className="text-zinc-900">Piekļuves tiesības</strong> – pieprasīt piekļuvi Saviem personas datiem</li>
                  <li><strong className="text-zinc-900">Labošanas tiesības</strong> – labot neprecīzus vai nepilnīgus datus</li>
                  <li><strong className="text-zinc-900">Dzēšanas tiesības</strong> – pieprasīt Savu datu dzēšanu ("tiesības tikt aizmirstam")</li>
                  <li><strong className="text-zinc-900">Ierobežošanas tiesības</strong> – ierobežot Savu datu apstrādi</li>
                  <li><strong className="text-zinc-900">Pārnesamības tiesības</strong> – saņemt Savus datus strukturētā formātā</li>
                  <li><strong className="text-zinc-900">Iebildumu tiesības</strong> – iebilst pret Savu datu apstrādi</li>
                  <li><strong className="text-zinc-900">Atsaukt piekrišanu</strong> – jebkurā laikā atsaukt Savu piekrišanu datu apstrādei</li>
                </ul>
                <p className="mt-4">
                  Lai izmantotu Savas tiesības, lūdzu, sazinieties ar mums, izmantojot kontaktinformāciju, kas norādīta šīs politikas sākumā.
                </p>
              </div>

              {/* Section 8 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  8. Sīkdatnes (Cookies)
                </h2>
                <p className="mb-3">
                  Mūsu mājas lapa izmanto sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi un analizētu mājas lapas apmeklējumu. Sīkdatnes ir mazi teksta faili, kas tiek saglabāti Jūsu ierīcē.
                </p>
                <p className="mb-3">
                  Mēs izmantojam nepieciešamās sīkdatnes (nodrošina pamata funkcionalitāti) un analītikas sīkdatnes (palīdz saprast, kā apmeklētāji izmanto lapu). Jūs varat pārvaldīt sīkdatnes Savā pārlūkprogrammā.
                </p>
              </div>

              {/* Section 9 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  9. Trešo pušu pakalpojumi
                </h2>
                <p className="mb-3">
                  Mēs varam izmantot uzticamus trešo pušu pakalpojumu sniedzējus, piemēram, mājas lapas mitināšanas pakalpojumus, e-pasta sūtīšanas pakalpojumus un analītikas rīkus (Google Analytics). Šie sniedzēji piekļūst datiem tikai tiktāl, cik tas nepieciešams to uzdevumu veikšanai.
                </p>
              </div>

              {/* Section 10 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  10. Izmaiņas privātuma politikā
                </h2>
                <p className="mb-3">
                  Mēs paturam tiesības jebkurā laikā atjaunināt šo privātuma politiku. Izmaiņas stāsies spēkā, tiklīdz atjauninātā politika tiks publicēta mūsu mājas lapā.
                </p>
              </div>

              {/* Section 11 */}
              <div className="pt-4">
                <h2 className="text-zinc-900 font-extrabold text-base sm:text-lg mb-3">
                  11. Sūdzības
                </h2>
                <p className="mb-4">Ja Jums ir sūdzības, lūdzu, vispirms sazinieties ar mums. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā:</p>
                
                <div className="bg-white border border-zinc-200 p-5 rounded-[1px] space-y-1 text-sm text-zinc-700">
                  <p className="font-extrabold text-zinc-900 mb-1">Datu valsts inspekcija</p>
                  <p><strong className="text-zinc-900">Adrese:</strong> Blaumaņa iela 11/13-15, Rīga, LV-1011</p>
                  <p><strong className="text-zinc-900">E-pasts:</strong> <a href="mailto:info@dvi.gov.lv" className="hover:underline font-medium text-zinc-850">info@dvi.gov.lv</a></p>
                  <p><strong className="text-zinc-900">Tālrunis:</strong> +371 67 22 31 31</p>
                  <p><strong className="text-zinc-900">Mājas lapa:</strong> <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-[#B45309] font-semibold hover:underline">www.dvi.gov.lv</a></p>
                </div>
              </div>

            </div>

            {/* Aizvērt Close Button under the text */}
            <div className="mt-10 pt-6 border-t border-zinc-200 flex justify-center">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 bg-[#FBBF24] hover:bg-zinc-900 hover:text-[#FBBF24] text-zinc-950 px-8 py-3 text-xs font-black uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-md cursor-pointer"
                aria-label="Aizvērt un atgriezties"
              >
                <ArrowLeft className="h-4 w-4 font-bold" />
                Aizvērt
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
