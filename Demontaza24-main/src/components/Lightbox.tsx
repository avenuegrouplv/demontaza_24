import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "../types";

interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    // Disable background page scrolling when active
    document.body.style.overflow = "hidden";
    
    // Add keyboard arrow listening
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (currentIndex < 0 || currentIndex >= images.length) return null;
  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Attēlu galerijas pārlūks"
    >
      {/* Absolute Backdrop close click */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Top right close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-51 p-3 text-white hover:text-[#FBBF24] transition-colors rounded-full focus:outline-none min-w-[44px] min-h-[44px]"
        aria-label="Aizvērt attēlu"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Main Image content */}
      <div className="relative max-w-5xl max-h-[85vh] flex items-center justify-center z-50 select-none">
        <img
          src={currentImage.url}
          alt={currentImage.alt || "Gatavais demontāžas objekts"}
          className="max-w-full max-h-[85vh] object-contain rounded-[2px] shadow-2xl animate-scaleUp"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            onClick={onPrev}
            className="absolute left-4 z-50 p-3 bg-black/40 hover:bg-black/80 text-white hover:text-[#FBBF24] rounded-full transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Iepriekšējais attēls"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-4 z-50 p-3 bg-black/40 hover:bg-black/80 text-white hover:text-[#FBBF24] rounded-full transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Nākamais attēls"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Counters indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 px-4 py-1.5 text-xs text-zinc-300 font-mono rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
