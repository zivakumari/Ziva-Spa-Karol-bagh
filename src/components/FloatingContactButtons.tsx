import React, { useState } from 'react';
import { MessageSquare, Phone, Navigation, X, ChevronUp, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

export const FloatingContactButtons: React.FC = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [locating, setLocating] = useState<boolean>(false);

  // Pre-filled WhatsApp message for quick inquiry
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello ZIVA SPA Concierge, I would like to inquire about booking a therapy at your 24/7 Karol Bagh, New Delhi sanctuary.'
  )}`;

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
      aria-label="Quick contact & directions dock"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 print:hidden select-none"
    >
      {!minimized && (
        <div className="flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Quick Google Maps Directions Button */}
          <button
            onClick={handleDirections}
            disabled={locating}
            title="Get turn-by-turn Google Maps directions to Ziva Spa from your current location"
            className="group flex items-center gap-2 sm:gap-2.5 pl-3 pr-3.5 sm:pl-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-lg hover:shadow-black/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-[#C5A880]/50"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0 border border-[#C5A880]/40">
              {locating ? (
                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFCA9B] animate-spin" />
              ) : (
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFCA9B]" />
              )}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[10px] uppercase font-sans font-semibold tracking-wider text-[#DFCA9B] leading-none">
                Google Maps
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white leading-tight mt-0.5">
                {locating ? 'Locating...' : 'Get Directions'}
              </span>
            </div>
          </button>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ZIVA SPA on WhatsApp at ${BUSINESS_INFO.whatsappDisplay}`}
            className="group flex items-center gap-2 sm:gap-2.5 pl-3 pr-3.5 sm:pl-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-emerald-400/40"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-emerald-600" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[10px] uppercase font-sans font-semibold tracking-wider text-emerald-100 leading-none">
                WhatsApp 24/7
              </span>
              <span className="text-xs sm:text-sm font-serif font-bold text-white leading-tight mt-0.5">
                Instant Chat
              </span>
            </div>
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={callUrl}
            aria-label={`Call ZIVA SPA directly at ${BUSINESS_INFO.phonePrimary}`}
            className="group flex items-center gap-2 sm:gap-2.5 pl-3 pr-3.5 sm:pl-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full bg-[#141211] hover:bg-stone-900 text-white shadow-lg hover:shadow-black/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-[#C5A880]/50"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0 border border-[#C5A880]/40">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[10px] uppercase font-sans font-semibold tracking-wider text-[#DFCA9B] leading-none">
                Call 24/7 Desk
              </span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-white leading-tight mt-0.5">
                {BUSINESS_INFO.phonePrimary}
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Toggle button to minimize / expand buttons if customer desires clean view */}
      <button
        onClick={() => setMinimized(!minimized)}
        aria-label={minimized ? 'Expand contact actions' : 'Minimize contact actions'}
        className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-stone-900 border border-stone-300 shadow-sm flex items-center justify-center text-xs transition-colors backdrop-blur-xs"
        title={minimized ? 'Show Directions, WhatsApp & Call buttons' : 'Minimize buttons'}
      >
        {minimized ? <ChevronUp className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </button>
    </aside>
  );
};
