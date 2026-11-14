import React, { useState } from 'react';
import { Phone, Navigation, X, ChevronUp, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

export const FloatingContactButtons: React.FC = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [locating, setLocating] = useState<boolean>(false);

  // Exact WhatsApp link with pre-filled message per requirements
  const prefilledMessage =
    'Hello Ziva Spa, I would like to know more about your spa services and booking availability.';
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(prefilledMessage)}`;
  const callUrl = `tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`;

  const handleDirections = (e: React.MouseEvent) => {
    e.preventDefault();
    const spaLat = BUSINESS_INFO.coordinates.lat;
    const spaLng = BUSINESS_INFO.coordinates.lng;

    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      setLocating(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocating(false);
          const { latitude, longitude } = pos.coords;
          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${spaLat},${spaLng}&travelmode=driving`;
          window.open(url, '_blank', 'noopener,noreferrer');
        },
        (err) => {
          setLocating(false);
          console.warn('Geolocation fallback:', err.message);
          const url = `https://www.google.com/maps/dir/?api=1&destination=${spaLat},${spaLng}&travelmode=driving`;
          window.open(url, '_blank', 'noopener,noreferrer');
        },
        { enableHighAccuracy: true, timeout: 3500 }
      );
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${spaLat},${spaLng}&travelmode=driving`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <aside
      aria-label="Quick contact & WhatsApp dock"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 print:hidden select-none"
    >
      {!minimized && (
        <div className="flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Quick Google Maps Directions Button */}
          <button
            onClick={handleDirections}
            disabled={locating}
            title="Get turn-by-turn directions to Ziva Spa on Google Maps"
            className="group flex items-center gap-2 pl-2.5 pr-3 py-1.5 sm:py-2 rounded-full bg-stone-900/95 hover:bg-stone-800 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-[#C5A880]/50 backdrop-blur-xs"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0 border border-[#C5A880]/40">
              {locating ? (
                <Loader2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFCA9B] animate-spin" />
              ) : (
                <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFCA9B]" />
              )}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] sm:text-[9px] uppercase font-sans font-semibold tracking-wider text-[#DFCA9B] leading-none">
                Google Maps
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-white leading-tight mt-0.5">
                {locating ? 'Locating...' : 'Get Directions'}
              </span>
            </div>
          </button>

          {/* Direct Phone Call Button */}
          <a
            href={callUrl}
            aria-label={`Call Ziva Spa directly at ${BUSINESS_INFO.phonePrimary}`}
            className="group flex items-center gap-2 pl-2.5 pr-3 py-1.5 sm:py-2 rounded-full bg-[#141211]/95 hover:bg-stone-900 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-[#C5A880]/50 backdrop-blur-xs"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0 border border-[#C5A880]/40">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A880]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] sm:text-[9px] uppercase font-sans font-semibold tracking-wider text-[#DFCA9B] leading-none">
                Call 24/7 Desk
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-white leading-tight mt-0.5">
                {BUSINESS_INFO.phonePrimary}
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Primary Floating WhatsApp Action Button - Prominent, accessible, responsive */}
      <div className="flex items-center gap-2">
        {/* Minimize / Expand Toggle */}
        <button
          onClick={() => setMinimized(!minimized)}
          aria-label={minimized ? 'Expand contact actions' : 'Minimize secondary buttons'}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-stone-900 border border-stone-300 shadow-sm flex items-center justify-center text-xs transition-colors backdrop-blur-xs"
          title={minimized ? 'Show Directions & Phone Call' : 'Minimize extra buttons'}
        >
          {minimized ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </button>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with Ziva Spa on WhatsApp at ${BUSINESS_INFO.whatsappDisplay}`}
          className="group relative flex items-center gap-2.5 pl-3 pr-4 sm:pl-3.5 sm:pr-5 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-900/40 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/50"
        >
          {/* Pulsing online indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-emerald-700"></span>
          </span>

          {/* Official WhatsApp SVG Icon */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[8px] sm:text-[9px] uppercase font-sans font-bold tracking-wider text-emerald-100 leading-none">
              WhatsApp 24/7
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white leading-tight mt-0.5">
              Chat on WhatsApp
            </span>
          </div>
        </a>
      </div>
    </aside>
  );
};
