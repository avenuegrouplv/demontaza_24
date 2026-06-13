import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection in localStorage
    const consent = localStorage.getItem("cookie-consent");
    // Check if user has closed it with X in sessionStorage of current session
    const sessionClosed = sessionStorage.getItem("cookie-banner-closed-x");

    if (!consent && !sessionClosed) {
      // Small timeout for nice visual entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    // Also dispatch a custom event in case other components need to know
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: "accepted" }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: "rejected" }));
    setIsVisible(false);
  };

  const handleCloseX = () => {
    // Sīkdatņu loga aizvēršana ar "X" neaktivizē sīkdatnes
    // We store it in sessionStorage so they are not annoyed on every subpage during this session,
    // but we do NOT set active consent in localStorage, so they will be asked again in future visits.
    sessionStorage.setItem("cookie-banner-closed-x", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-consent-banner"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-5 sm:p-6 bg-zinc-950/98 backdrop-blur-md border-t-2 border-[#FBBF24]/60 shadow-[0_-10px_35px_rgba(0,0,0,0.8)] pr-12"
        >
          {/* Absolutely placed close X button at the top-right corner of the banner */}
          <button
            id="cookie-btn-close-x"
            onClick={handleCloseX}
            aria-label="Aizvērt sīkdatņu paziņojumu bez piekrišanas"
            className="cursor-pointer absolute top-3.5 right-3.5 lg:top-4 lg:right-4 p-2 text-zinc-400 hover:text-[#FBBF24] hover:bg-zinc-900 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#FBBF24]/30 z-50"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left side: Consent text with embedded navigation buttons */}
            <div className="flex-1 space-y-2 max-w-4xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#FBBF24] shrink-0" />
                <h4 className="text-white text-sm sm:text-base font-extrabold uppercase tracking-widest font-sans">
                  Sīkdatņu izmantošana
                </h4>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
                Mēs izmantojam savas un trešo pušu sīkdatnes, lai nodrošinātu un uzlabotu tīmekļa vietnes darbību, pielāgotu informāciju mūsu produktiem un pakalpojumiem, kā arī analizētu vietnes apmeklējumu. Spiežot "Apstiprināt visas", jūs piekrītat visu sīkdatņu izmantošanai. Sīkdatņu loga aizvēršana ar "X" neaktivizē sīkdatnes. Lapas apakšējā stūrī lasiet vairāk par{" "}
                <Link
                  to="/sikdatnu-politika"
                  className="underline font-bold text-[#FBBF24] hover:text-white transition-colors duration-150 inline-block focus:outline-none focus:ring-1 focus:ring-[#FBBF24] px-0.5 rounded-[1px]"
                >
                  Sīkdatņu politiku
                </Link>{" "}
                un{" "}
                <Link
                  to="/privatuma-politika"
                  className="underline font-bold text-[#FBBF24] hover:text-white transition-colors duration-150 inline-block focus:outline-none focus:ring-1 focus:ring-[#FBBF24] px-0.5 rounded-[1px]"
                >
                  Privātuma politiku
                </Link>
                .
              </p>
            </div>

            {/* Right side: Actions buttons */}
            <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full lg:w-auto">
              
              {/* Reject Button */}
              <button
                id="cookie-btn-reject"
                onClick={handleReject}
                className="cursor-pointer bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-[2px] border border-zinc-700 hover:border-zinc-500 transition-all duration-200 uppercase w-full sm:w-auto text-center"
              >
                Noraidīt
              </button>

              {/* Accept All Button */}
              <button
                id="cookie-btn-accept"
                onClick={handleAcceptAll}
                className="cursor-pointer bg-[#FBBF24] hover:bg-zinc-800 text-zinc-950 hover:text-[#FBBF24] px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-[2px] border border-[#FBBF24] transition-all duration-200 uppercase w-full sm:w-auto text-center shrink-0"
              >
                Apstiprināt visas
              </button>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
