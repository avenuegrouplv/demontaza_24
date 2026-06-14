import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Share2, Mail, Phone, MapPin } from "lucide-react";
import { LOGO_BASE64 } from "../logo";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const [showSocialAlert, setShowSocialAlert] = useState(false);
  const { currentLang } = useLanguage();

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSocialAlert(true);
  };

  useEffect(() => {
    if (showSocialAlert) {
      const timer = setTimeout(() => {
        setShowSocialAlert(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSocialAlert]);

  const t = {
    LV: {
      mission: "Profesionāla ēku un būvju demontāža",
      sections: "Sadaļas",
      home: "Sākums",
      services: "Pakalpojumi",
      rent: "Tehnikas noma",
      faq: "Biežāk uzdotie jautājumi",
      gallery: "Galerija",
      contacts: "Kontakti",
      follow: "Seko mums",
      contactInfo: "Kontaktinformācija",
      regNo: "Reģ. Nr. 900000012225",
      legalAddr: "Juridiskā adrese:",
      rights: "SIA “Demontāža 24/7” © 2026 | Visas tiesības aizsargātas",
      cookies: "Sīkdatņu politika",
      privacy: "Privātuma politika",
      socialTitle: "Sociālie tīkli",
      socialDesc: "Informācija šobrīd ir izstrādes stadijā."
    },
    RU: {
      mission: "Профессиональный демонтаж зданий и сооружений",
      sections: "Разделы",
      home: "Главная",
      services: "Услуги",
      rent: "Аренда техники",
      faq: "Часто задаваемые вопросы",
      gallery: "Галерея",
      contacts: "Контакты",
      follow: "Подписывайтесь на нас",
      contactInfo: "Контактная информация",
      regNo: "Рег. Nr. 900000012225",
      legalAddr: "Юридический адрес:",
      rights: "SIA “Demontāža 24/7” © 2026 | Все права защищены",
      cookies: "Политика файлов cookie",
      privacy: "Политика конфиденциальности",
      socialTitle: "Социальные сети",
      socialDesc: "В настоящее время информация находится в процессе разработки."
    }
  }[currentLang];

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900" aria-label="Mājaslapas kājene">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={LOGO_BASE64}
                alt="SIA “Demontāža 24/7” Logo"
                className="h-[52px] sm:h-[64px] w-auto object-contain bg-transparent"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {t.mission}
            </p>
          </div>

          {/* Column 2: "Sadaļas" clickable list */}
          <div className="space-y-4">
            <h3 className="text-[#FBBF24] text-xs font-bold tracking-wider uppercase font-mono">{t.sections}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FBBF24] transition-colors focus:outline-none">{t.home}</Link>
              </li>
              <li>
                <Link to="/pakalpojumi" className="hover:text-[#FBBF24] transition-colors focus:outline-none">{t.services}</Link>
              </li>
              <li>
                <Link to="/musu-tehnika" className="hover:text-[#FBBF24] transition-colors focus:outline-none">{t.rent}</Link>
              </li>
              <li>
                <Link to="/buj" className="hover:text-[#FBBF24] transition-colors focus:outline-none">{t.faq}</Link>
              </li>
              <li>
                <Link to="/galerija" className="hover:text-[#FBBF24] transition-colors focus:outline-none">{t.gallery}</Link>
              </li>
              <li>
                <Link to="/kontakti" className="hover:text-[#FBBF24] transition-colors focus:outline-none">{t.contacts}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: "Seko Mums" social column */}
          <div className="space-y-4">
            <h3 className="text-[#FBBF24] text-xs font-bold tracking-wider uppercase font-mono">{t.follow}</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                onClick={handleSocialClick}
                className="p-2.5 bg-zinc-900 rounded-[2px] text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-800 transition-colors"
                aria-label="Seko mums Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                onClick={handleSocialClick}
                className="p-2.5 bg-zinc-900 rounded-[2px] text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-800 transition-colors"
                aria-label="Seko mums X (Twitter)"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                onClick={handleSocialClick}
                className="p-2.5 bg-zinc-900 rounded-[2px] text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-800 transition-colors"
                aria-label="Seko mums Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact info, aligned right on desktop */}
          <div className="space-y-4 lg:text-right lg:items-end lg:flex lg:flex-col">
            <h3 className="text-[#FBBF24] text-xs font-bold tracking-wider uppercase lg:text-right font-mono">{t.contactInfo}</h3>
            <div className="text-xs space-y-2 text-zinc-400">
              <p className="font-bold text-white">SIA “Demontāža 24/7”</p>
              <p>{t.regNo}</p>
              <p>
                {t.legalAddr} <span className="inline-block w-16 border-b border-zinc-800"></span>
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
            {t.rights}
          </div>

          {/* Right legal policy buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/sikdatnu-politika"
              className="text-zinc-400 hover:text-[#FBBF24] transition-colors focus:outline-none cursor-pointer"
              aria-label={t.cookies}
            >
              {t.cookies}
            </Link>
            <span className="text-zinc-800">I</span>
            <Link
              to="/privatuma-politika"
              className="text-zinc-400 hover:text-[#FBBF24] transition-colors focus:outline-none cursor-pointer"
              aria-label={t.privacy}
            >
              {t.privacy}
            </Link>
          </div>

        </div>

      </div>

      {/* Social Alert Toast Notification */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          showSocialAlert ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-zinc-900 border-2 border-[#FBBF24] text-white p-4 pr-12 shadow-2xl rounded-[2px] flex items-center gap-3 max-w-sm relative">
          <span className="p-1.5 bg-[#FBBF24] text-zinc-950 rounded-full shrink-0">
            <Share2 className="h-4 w-4 stroke-[3px]" />
          </span>
          <div className="font-sans">
            <p className="font-extrabold text-xs uppercase tracking-wider text-[#FBBF24]">{t.socialTitle}</p>
            <p className="text-zinc-300 text-xs mt-0.5 font-medium leading-relaxed">{t.socialDesc}</p>
          </div>
          <button 
            onClick={() => setShowSocialAlert(false)}
            className="absolute top-2 right-2 text-zinc-500 hover:text-white text-base cursor-pointer font-black leading-none p-1 focus:outline-none"
            aria-label="Aizvērt paziņojumu"
          >
            ×
          </button>
        </div>
      </div>

    </footer>
  );
}
