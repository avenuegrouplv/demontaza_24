import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import QuickNavigation from "../components/QuickNavigation";
import { useLanguage } from "../context/LanguageContext";

export default function Kontakti() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { currentLang } = useLanguage();
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
        errors.email = "Пожалуйста, введите корректный формат почты.";
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

  const t = {
    LV: {
      meta: "Saziņa un pieteikumi",
      title: "Sazināties ar mums",
      sidebarMeta: "Rekvizīti un kontakti",
      sidebarTitle: "Kontaktinformācija",
      compNameLabel: "Uzņēmuma nosaukums",
      regNoLabel: "Reģistrācijas numurs",
      addrLabel: "Adrese",
      phoneLabel: "Telefona numurs",
      mailLabel: "E-pasta adrese",
      formSentTitle: "Pieteikums nosūtīts!",
      formSentDesc: "Paldies. Jūsu pieteikums ir droši saņemts. Mūsu speciālists sazināsies ar Jums tuvākās stundas laikā.",
      formIntro: "Aizpildiet zemāk esošo pieteikuma formu un piesakiet bezmaksas tāmi demontāžas objektiem, būvgružu savākšanai vai tehnikas nomai.",
      labelName: "Vārds / Uzņēmums",
      labelEmail: "E-pasts saziņai",
      labelPhone: "Tālruņa numurs",
      labelMessage: "Ziņa / Objekta detaļas",
      placeholderMessage: "Lūdzu aprakstiet sev nepieciešamo pakalpojumu.",
      disclaimer: "Nospiežot 'Sūtīt pieteikumu', Jūs piekrītat mūsu Privātuma politikai un personas datu drošai apstrādei, lai aprēķinātu un nosūtītu tāmi.",
      submitBtn: "Sūtīt pieteikumu"
    },
    RU: {
      meta: "Связь и заявки",
      title: "Связаться с нами",
      sidebarMeta: "Реквизиты и контакты",
      sidebarTitle: "Контактная информация",
      compNameLabel: "Название компании",
      regNoLabel: "Регистрационный номер",
      addrLabel: "Адрес",
      phoneLabel: "Номер телефона",
      mailLabel: "Адрес электронной почты",
      formSentTitle: "Заявка отправлена!",
      formSentDesc: "Спасибо. Ваша заявка успешно получена. Наш специалист свяжется с Вами в течение ближайшего часа.",
      formIntro: "Заполните форму заявки ниже, чтобы оперативно получить бесплатную смету на снос объектов, сбор строительного мусора или аренду нашей техники.",
      labelName: "Имя / Компания",
      labelEmail: "E-mail для связи",
      labelPhone: "Номер телефона",
      labelMessage: "Сообщение / Детали Вашего объекта",
      placeholderMessage: "Пожалуйста, кратко опишите необходимую Вам услугу.",
      disclaimer: "Нажимая 'Отправить заявку', Вы полностью соглашаетесь с нашей Политикой конфиденциальности и безопасной обработкой персональных данных для расчета и отправки сметы.",
      submitBtn: "Отправить заявку"
    }
  }[currentLang];

  return (
    <main className="w-full bg-white text-zinc-800">
      
      {/* Top-left corners navigation button */}
      <QuickNavigation type="top-left" />

      {/* Hero Header Title Block */}
      <section className="bg-[#FAF9F6] py-16 border-b border-zinc-200 mt-6" aria-label="Lapas virsraksts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-mono">{t.meta}</span>
          <h1 className="text-zinc-900 text-xl sm:text-2xl font-bold tracking-tight mt-1 uppercase">
            {t.title}
          </h1>
          <div className="h-1 w-12 bg-[#FBBF24] mx-auto mt-3" />
        </div>
      </section>

      {/* Main Interactive Contact Panel */}
      <section className="py-16 bg-[#FAF9F6] border-t border-b border-zinc-200" aria-label="Saziņas lapas forma">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-panel-container">
            
            {/* Left Column: Company information */}
            <div className="lg:col-span-5 bg-white border border-zinc-200 p-6 sm:p-8 rounded-[2px] flex flex-col shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest font-sans">{t.sidebarMeta}</span>
                  <h2 className="text-zinc-900 text-lg sm:text-xl font-black uppercase tracking-tight mt-1">{t.sidebarTitle}</h2>
                  <div className="h-1 w-10 bg-[#FBBF24] mt-3" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-zinc-700 font-sans">
                  {/* Name */}
                  <div className="border-b border-zinc-100 pb-2.5">
                    <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-sans">{t.compNameLabel}</span>
                    <span className="text-zinc-950 font-black text-sm uppercase">SIA "Demontāža 24/7"</span>
                  </div>

                  {/* Reg number */}
                  <div className="border-b border-zinc-100 pb-2.5">
                    <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-sans font-bold">{t.regNoLabel}</span>
                    <span className="text-zinc-900 font-semibold font-sans text-xs sm:text-sm">900000012225</span>
                  </div>

                  {/* Address */}
                  <div className="border-b border-zinc-100 pb-2.5">
                    <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-sans">{t.addrLabel}</span>
                    <span className="text-zinc-400 italic text-xs block min-h-[16px]"></span>
                  </div>

                  {/* Phone */}
                  <div className="border-b border-zinc-100 pb-2.5">
                    <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-sans">{t.phoneLabel}</span>
                    <a href="tel:26739899" className="text-zinc-950 font-black hover:text-[#FBBF24] transition-colors font-sans text-sm sm:text-base">
                      +371 26739899
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-sans">{t.mailLabel}</span>
                    <a href="mailto:info@demontaza24.eu" className="text-zinc-950 font-black hover:text-[#FBBF24] transition-colors text-xs sm:text-sm">
                      info@demontaza24.eu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7 bg-[#27272a] border border-zinc-800 p-6 sm:p-8 rounded-[2px] shadow-lg flex flex-col justify-center">
              
              {formSubmitted ? (
                <div className="p-8 text-center border border-[#FBBF24]/40 bg-[#18181b] rounded-[2px] animate-fadeIn transition-all">
                  <span className="inline-block p-4 bg-[#FBBF24] text-zinc-950 mb-4 rounded-full">
                    <ShieldCheck className="h-7 w-7" />
                  </span>
                  <p className="text-white font-bold text-base mb-1">{t.formSentTitle}</p>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    {t.formSentDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                  
                  <div className="text-zinc-200 text-xs leading-relaxed font-sans pb-3.5 border-b border-zinc-800 font-medium">
                    {t.formIntro}
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-[10px] font-bold text-zinc-300 uppercase tracking-widest font-mono">
                      {t.labelName} <span className="text-[#FBBF24]">*</span>
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
                        className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-2.5 text-xs focus:outline-none rounded-[2px] transition-colors"
                        placeholder=""
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-[#FBBF24] text-[10px] font-semibold mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-[10px] font-bold text-zinc-300 uppercase tracking-widest font-mono">
                        {t.labelEmail} <span className="text-[#FBBF24]">*</span>
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
                          className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-2.5 text-xs focus:outline-none rounded-[2px] transition-colors"
                          placeholder=""
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-[#FBBF24] text-[10px] font-semibold mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-[10px] font-bold text-zinc-300 uppercase tracking-widest font-mono">
                        {t.labelPhone} <span className="text-[#FBBF24]">*</span>
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
                          className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-2.5 text-xs focus:outline-none rounded-[2px] transition-colors"
                          placeholder=""
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-[#FBBF24] text-[10px] font-semibold mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                  </div>

                  {/* Message / details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-[10px] font-bold text-zinc-300 uppercase tracking-widest font-mono">
                      {t.labelMessage} <span className="text-[#FBBF24]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute top-3 left-3 text-[#A1A1AA] select-none">
                        <MessageSquare className="h-4 w-4" />
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#18181b] border border-zinc-800 hover:border-zinc-700 focus:border-[#FBBF24] text-white pl-10 pr-4 py-2.5 text-xs focus:outline-none rounded-[2px] transition-colors"
                        placeholder={t.placeholderMessage}
                      />
                    </div>
                    {formErrors.message && (
                      <p className="text-[#FBBF24] text-[10px] font-semibold mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* disclaimer */}
                  <p className="text-zinc-400 text-[10px] leading-relaxed">
                    {t.disclaimer}
                  </p>

                  {/* Submit button */}
                  <div className="text-left pt-1">
                    <button
                      type="submit"
                      className="cursor-pointer bg-[#FBBF24] hover:bg-yellow-400 text-[#111827] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-md hover:scale-[1.01] border border-transparent rounded-[2px]"
                      aria-label="Sūtīt kontaktu pieteikumu"
                    >
                      {t.submitBtn}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Global Bottom Nav */}
      <QuickNavigation type="bottom" />

    </main>
  );
}
