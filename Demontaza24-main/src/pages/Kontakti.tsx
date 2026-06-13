import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";

export default function Kontakti() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

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

  return (
    <main className="w-full bg-white text-zinc-800">
      
      {/* Top-left corners navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block with Warm-White Light theme */}
      <section className="bg-[#FAF9F6] py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">Saziņa un pieteikumi</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            Sazināties ar mums
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Main Interactive Contact Panel */}
      <section className="py-16 bg-[#18181b] border-t border-b border-zinc-800" aria-label="Saziņas lapas forma">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-[#27272a] border border-zinc-800 p-6 sm:p-10 shadow-2xl rounded-[2px]" id="contact-panel-container">
            
            {formSubmitted ? (
              <div className="p-8 text-center border border-[#FBBF24]/50 bg-[#18181b] rounded-[2px] animate-fadeIn transition-all">
                <span className="inline-block p-4 bg-[#FBBF24] text-zinc-950 mb-4 rounded-full">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <p className="text-white font-bold text-lg mb-2">Paldies!</p>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-lg mx-auto">
                  Jūsu pieteikums ir saņemts. SIA "Demontāža 24/7" speciālists sazināsies ar Jums tuvāko stundu laikā.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans pb-4 border-b border-zinc-800">
                  Aizpildiet zemāk esošo formu un piesakiet bezmaksas tāmi sava objekta demontāžai. Pirms darbu sākšanas sniegsim pilnvērtīgu konsultāciju un palīdzēsim ar Būvvaldes dokumentācijas saskaņošanu.
                </div>

                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Jūsu Vārds / Uzņēmums <span className="text-[#FBBF24]">*</span>
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
                      placeholder="Māris Ozoliņš / SIA Ceļu Būvnieks"
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      E-pasts saziņai <span className="text-[#FBBF24]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3 text-sm focus:outline-none rounded-[2px] transition-colors"
                        placeholder="info@maris.lv"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Tālruņa numurs <span className="text-[#FBBF24]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                        <Phone className="h-4 w-4" />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3 text-sm focus:outline-none rounded-[2px] transition-colors"
                        placeholder="+371 XXXXXXXX"
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                </div>

                {/* Message / details */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Ziņa / Objekta detaļas <span className="text-[#FBBF24]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3 text-zinc-400">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-3.5 text-sm focus:outline-none rounded-[2px] transition-colors"
                      placeholder="Lūdzu norādiet nojaucamās ēkas tipu, apjomu vai konteineru vajadzības..."
                    />
                  </div>
                  {formErrors.message && (
                    <p className="text-[#FBBF24] text-[11px] font-semibold mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Subtle legal disclaimer note */}
                <p className="text-zinc-500 text-[10px] sm:text-xs">
                  Nospiežot 'Sūtīt pieteikumu', Jūs piekrītat mūsu Privātuma politikai un personas datu apstrādei, lai sagatavotu bezmaksas tāmi.
                </p>

                {/* Submit triggers inline */}
                <div className="text-left pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#FBBF24] hover:bg-yellow-400 text-[#111827] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-md hover:scale-[1.02] border border-transparent rounded-[2px]"
                    style={{ borderRadius: "2px" }}
                    aria-label="Sūtīt kontaktu pieteikumu"
                  >
                    Sūtīt pieteikumu
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* Saziņas informācija - Two cards side-by-side using high-contrast light backgrounds */}
      <section className="py-16 bg-[#FAF9F6] border-t border-zinc-200" aria-label="Saziņas informācija">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Call card */}
            <a 
              href="tel:26739899"
              className="group block bg-white border border-zinc-200 hover:border-[#FBBF24] p-8 text-center transition-all duration-200 rounded-[2px] shadow-sm"
              aria-label="Zvanīt SIA Demontāža 24/7"
            >
              <div className="p-4 bg-[#FAF9F6] text-[#FBBF24] inline-block mb-4 rounded-full border border-zinc-200">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-zinc-900 text-lg font-bold tracking-tight mb-2">Tālruņa numurs</h3>
              <p className="text-zinc-650 text-sm font-sans mb-3">Zvaniet mums tūlītējai tāmes konsultācijai</p>
              <p className="text-[#FBBF24] text-xl font-extrabold tracking-wider group-hover:underline">
                +371 26739899
              </p>
            </a>

            {/* Email card */}
            <a 
              href="mailto:info@demontaza24.eu"
              className="group block bg-white border border-zinc-200 hover:border-[#FBBF24] p-8 text-center transition-all duration-200 rounded-[2px] shadow-sm"
              aria-label="Sūtīt e-pastu SIA Demontāža 24/7"
            >
              <div className="p-4 bg-[#FAF9F6] text-[#FBBF24] inline-block mb-4 rounded-full border border-zinc-200">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-zinc-900 text-lg font-bold tracking-tight mb-2">E-pasta adrese</h3>
              <p className="text-zinc-650 text-sm font-sans mb-3">Nosūtiet tehnisko projektu vai bildes</p>
              <p className="text-[#FBBF24] text-xl font-extrabold tracking-normal group-hover:underline break-all">
                info@demontaza24.eu
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* Global Bottom Nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
