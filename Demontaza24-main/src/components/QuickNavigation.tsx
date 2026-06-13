import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUp, Home, ChevronLeft } from "lucide-react";

interface QuickNavigationProps {
  type: "bottom" | "top-left";
}

export default function QuickNavigation({ type }: QuickNavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // If we are on the Home page, these navigation helpers are hidden
  if (location.pathname === "/") {
    return null;
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  if (type === "top-left") {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={handleGoHome}
          className="inline-flex cursor-pointer items-center gap-2.5 px-6 py-3.5 bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 border border-zinc-250 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 rounded-[2px] shadow-sm"
          aria-label="Uz sākumu"
        >
          <ChevronLeft className="h-4 w-4 text-zinc-800" />
          <span>Uz sākumu</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-50 border-t border-zinc-200/60 py-10 flex items-center justify-center">
      <div className="flex flex-wrap items-center gap-5 justify-center">
        {/* Uz augšu link */}
        <button
          onClick={handleScrollToTop}
          className="cursor-pointer bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 border border-zinc-250 px-8 py-[14px] text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 flex items-center gap-2.5 shadow-sm rounded-[2px]"
          aria-label="Retgriezties uz lapas sākumu"
        >
          <ArrowUp className="h-4.5 w-4.5 text-zinc-800" />
          <span>Uz augšu</span>
        </button>

        {/* Uz sākumu link */}
        <button
          onClick={handleGoHome}
          className="cursor-pointer inline-flex items-center justify-center bg-zinc-100 hover:bg-[#FBBF24] text-zinc-900 border border-zinc-250 px-8 py-[14px] text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 flex items-center gap-2.5 shadow-sm rounded-[2px]"
          aria-label="Doties uz sākumlapu"
        >
          <Home className="h-4.5 w-4.5 text-zinc-800" />
          <span>Uz sākumu</span>
        </button>
      </div>
    </div>
  );
}
