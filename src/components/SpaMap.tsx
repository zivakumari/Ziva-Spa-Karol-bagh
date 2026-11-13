import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Navigation, MapPin, Compass, Car, Clock, Phone, ExternalLink, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { GetDirectionsButton } from './GetDirectionsButton';

interface UserLocation {
  lat: number;
  lng: number;
  name: string;
}

const PRESET_ORIGINS: { name: string; lat: number; lng: number; desc: string }[] = [
  { name: 'Karol Bagh Metro Station', lat: 28.6496, lng: 77.1906, desc: 'Via Arya Samaj Road (~2 mins)' },
  { name: 'Connaught Place (CP)', lat: 28.6328, lng: 77.2197, desc: 'Via Panchkuian Marg (~10 mins)' },
  { name: 'Pusa Road / Rajendra Place', lat: 28.6425, lng: 77.1784, desc: 'Via Shankar Road / Pusa Rd (~5 mins)' },
  { name: 'New Delhi Railway Station', lat: 28.6429, lng: 77.2194, desc: 'Via DB Gupta Road (~12 mins)' },
  { name: 'IGI Airport Terminal 3', lat: 28.5562, lng: 77.1000, desc: 'Via Vande Mataram Marg (~25 mins)' },
];

export const SpaMap: React.FC<{ showDirectionsPanel?: boolean; heightClass?: string }> = ({
  showDirectionsPanel = true,
  heightClass = 'h-[440px] md:h-[520px]',
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [etaMinutes, setEtaMinutes] = useState<number | null>(null);
  const [locating, setLocating] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [mapType, setMapType] = useState<'google-embed' | 'interactive'>('google-embed');
  const [copied, setCopied] = useState<boolean>(false);

  const spaLat = BUSINESS_INFO.coordinates.lat;
  const spaLng = BUSINESS_INFO.coordinates.lng;

  // Haversine formula to compute distance in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const straightDist = R * c;
    // Estimated road distance in city traffic is typically ~1.35x straight line
    const roadDist = Number((straightDist * 1.35).toFixed(1));
    return roadDist;
  };

  useEffect(() => {
    if (mapType !== 'interactive') return;
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Initialize Leaflet Map
    const map = L.map(mapContainerRef.current, {
      center: [spaLat, spaLng],
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false,
    });
    mapInstanceRef.current = map;

    // Warm, elegant CartoDB Positron / Voyager tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);

    // Custom luxury gold marker icon for ZIVA SPA
    const customSpaIcon = L.divIcon({
      className: 'ziva-marker',
      html: `
        <div style="position: relative; width: 48px; height: 56px; display: flex; flex-direction: column; align-items: center;">
          <div style="
            background: linear-gradient(135deg, #141211, #292524);
            border: 2px solid #C5A880;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px rgba(0,0,0,0.45);
            color: #FAF8F5;
          ">
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="44" stroke="#C5A880" stroke-width="2" />
              <path d="M50 16 C53 32, 60 48, 50 78 C40 48, 47 32, 50 16 Z" fill="#DFCA9B" />
              <path d="M50 28 C38 42, 28 58, 38 74 C44 64, 48 46, 50 28 Z" fill="#EAE3D8" />
              <path d="M50 28 C62 42, 72 58, 62 74 C56 64, 52 46, 50 28 Z" fill="#EAE3D8" />
            </svg>
          </div>
          <div style="
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid #C5A880;
            margin-top: -1px;
          "></div>
        </div>
      `,
      iconSize: [48, 56],
      iconAnchor: [24, 54],
      popupAnchor: [0, -50],
    });

    const popupHtml = `
      <div style="font-family: inherit; min-width: 250px; padding: 4px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <strong style="font-size: 16px; font-weight: 700; color: #1C1917; letter-spacing: 0.05em;">ZIVA SPA</strong>
          <span style="font-size: 10px; background: #064E3B; color: #6EE7B7; padding: 2px 8px; border-radius: 9999px; font-weight: 700;">Open 24/7</span>
        </div>
        <p style="font-size: 12px; color: #44403C; margin: 0 0 6px 0; line-height: 1.4;">
          ${BUSINESS_INFO.street}, Karol Bagh, New Delhi
        </p>
        <p style="font-size: 11px; color: #78716C; margin: 0 0 10px 0;">
          Opposite Gaffar Market · Near Karol Bagh Metro · Parking Available
        </p>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=${spaLat},${spaLng}&travelmode=driving" 
          target="_blank" 
          rel="noopener noreferrer"
          style="
            display: block;
            background: #1C1917;
            color: #DFCA9B;
            font-size: 11px;
            font-weight: 700;
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            text-align: center;
          "
        >
          Get Turn-by-Turn Directions →
        </a>
      </div>
    `;

    const marker = L.marker([spaLat, spaLng], { icon: customSpaIcon }).addTo(map);
    marker.bindPopup(popupHtml).openPopup();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapType, spaLat, spaLng]);

  // Handle route and proximity calculation
  const setOrigin = (lat: number, lng: number, name: string) => {
    setUserLocation({ lat, lng, name });
    const dist = calculateDistance(lat, lng, spaLat, spaLng);
    setDistanceKm(dist);
    const minutes = Math.max(5, Math.round((dist / 22) * 60));
    setEtaMinutes(minutes);

    if (mapType !== 'interactive') {
      setMapType('interactive');
    }

    // Small delay to ensure leaflet container is mounted
    setTimeout(() => {
      const map = mapInstanceRef.current;
      if (!map) return;

      if (userMarkerRef.current) map.removeLayer(userMarkerRef.current);
      if (routeLayerRef.current) map.removeLayer(routeLayerRef.current);

      const userIcon = L.divIcon({
        className: 'user-marker',
        html: `
          <div style="
            background: #2563EB;
            border: 3px solid #FFFFFF;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            box-shadow: 0 4px 14px rgba(37,99,235,0.6);
          "></div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const userM = L.marker([lat, lng], { icon: userIcon }).addTo(map);
      userM.bindPopup(`<strong style="font-size:12px;">${name}</strong><br/><span style="font-size:11px;">${dist} km from ZIVA SPA</span>`).openPopup();
      userMarkerRef.current = userM;

      const route = L.polyline(
        [
          [lat, lng],
          [spaLat, spaLng],
        ],
        {
          color: '#C5A880',
          weight: 4,
          opacity: 0.9,
          dashArray: '8, 8',
        }
      ).addTo(map);
      routeLayerRef.current = route;

      const bounds = L.latLngBounds([
        [lat, lng],
        [spaLat, spaLng],
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }, 100);
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        setActivePreset('Your Current Location');
        setOrigin(pos.coords.latitude, pos.coords.longitude, 'Your Current Location');
      },
      (err) => {
        setLocating(false);
        console.warn('Geolocation failed or permission denied:', err.message);
        setActivePreset('Karol Bagh Metro Station');
        setOrigin(PRESET_ORIGINS[0].lat, PRESET_ORIGINS[0].lng, PRESET_ORIGINS[0].name);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden">
      {/* Map Header with Controls & Prominent 24/7 Availability */}
      <div className="p-5 md:p-7 border-b border-stone-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-stone-50 via-white to-stone-50">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Ziva Spa – Open 24/7
            </span>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#A88B63] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Exact Physical Location</span>
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1C1917] mt-1.5">
            ZIVA SPA · Karol Bagh Sanctuary
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            {BUSINESS_INFO.address}
          </p>

          <div className="flex items-center gap-4 mt-2 text-xs text-stone-500">
            <span>Opposite Gaffar Market</span>
            <span>·</span>
            <span>Arya Samaj Road, Karol Bagh</span>
            <span>·</span>
            <span className="font-mono text-stone-700">Coordinates: {spaLat}° N, {spaLng}° E</span>
          </div>
        </div>

        {/* Action Buttons: Prominent Get Directions, Distance, Copy */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {/* Prominent Get Directions Button */}
          <GetDirectionsButton
            variant="luxury-gold"
            label="Get Directions"
            className="text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg"
          />

          <button
            onClick={handleDetectLocation}
            disabled={locating}
            className="flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-[#1C1917] bg-white hover:bg-stone-100 rounded-xl transition-colors border border-stone-300 shadow-xs active:scale-[0.98]"
            title="Calculate exact distance and travel time from your current location"
          >
            <Compass className={`w-4 h-4 text-[#A88B63] ${locating ? 'animate-spin' : ''}`} />
            <span>{locating ? 'Locating...' : 'Distance From Me'}</span>
          </button>

          <button
            onClick={handleCopyAddress}
            className="flex items-center gap-1.5 px-3.5 py-3 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 rounded-xl transition-colors border border-stone-300 shadow-xs"
            title="Copy exact spa address"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-500" />}
            <span className="hidden sm:inline">{copied ? 'Address Copied!' : 'Copy Address'}</span>
          </button>
        </div>
      </div>

      {/* Proximity & ETA Badge (if calculated) */}
      {distanceKm !== null && etaMinutes !== null && (
        <div className="bg-[#FAF8F5] px-5 md:px-7 py-3.5 border-b border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm text-[#1C1917]">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 font-medium">
              <Car className="w-4 h-4 text-[#A88B63]" />
              <span>
                From <strong className="text-stone-900">{userLocation?.name}</strong>:
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#1C1917]">{distanceKm} km drive</span>
              <span className="text-stone-400">·</span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>~{etaMinutes} mins estimated driving time</span>
              </span>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation?.lat},${userLocation?.lng}&destination=${spaLat},${spaLng}&travelmode=driving`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#A88B63] hover:text-[#7E6542] hover:underline"
          >
            <span>Start Live GPS Navigation on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* View Switcher Bar */}
      <div className="bg-stone-100/70 px-5 py-2.5 border-b border-stone-200/70 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMapType('google-embed')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              mapType === 'google-embed'
                ? 'bg-white shadow-xs text-[#1C1917] font-semibold border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Google Maps Official View
          </button>
          <button
            onClick={() => setMapType('interactive')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              mapType === 'interactive'
                ? 'bg-white shadow-xs text-[#1C1917] font-semibold border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Interactive Route Tracing
          </button>
        </div>

        <div className="flex items-center gap-3 text-stone-600">
          <span className="hidden sm:inline">
            📍 Arya Samaj Road, Opp. Gaffar Market, Karol Bagh
          </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${spaLat},${spaLng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A88B63] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Open in Maps App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Map View Area */}
      <div className="relative">
        {mapType === 'google-embed' ? (
          <iframe
            title="Google Maps Location – ZIVA SPA Karol Bagh New Delhi"
            className={`w-full ${heightClass} border-0`}
            src={`https://maps.google.com/maps?q=${spaLat},${spaLng}+(ZIVA+SPA+-+Open+24%2F7+-+Karol+Bagh+New+Delhi)&t=m&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div ref={mapContainerRef} className={`w-full ${heightClass} z-0`} />
        )}
      </div>

      {/* Directions & Proximity Hubs */}
      {showDirectionsPanel && (
        <div className="p-5 md:p-7 bg-[#FAF8F5] border-t border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Quick Driving Routes From Major Delhi Hubs:
            </span>
            <span className="text-[11px] text-stone-500">Select any hub to calculate distance & ETA</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {PRESET_ORIGINS.map((hub) => {
              const isSelected = activePreset === hub.name;
              return (
                <button
                  key={hub.name}
                  onClick={() => {
                    setActivePreset(hub.name);
                    setOrigin(hub.lat, hub.lng, hub.name);
                  }}
                  className={`text-left p-3 rounded-2xl border text-xs transition-all ${
                    isSelected
                      ? 'bg-white border-[#C5A880] shadow-md ring-2 ring-[#C5A880]/40'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div className="font-bold text-stone-900 truncate">{hub.name}</div>
                  <div className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-snug">{hub.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Practical Arrival & Transit Notes */}
          <div className="mt-5 pt-5 border-t border-stone-200/70 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>24/7 Metro Access:</strong> Just 3 minutes from Karol Bagh Metro Station (Blue Line) and 5 minutes from Rajendra Place Metro.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Dedicated Parking:</strong> Reserved guest parking assistance on Arya Samaj Road opposite Gaffar Market with complimentary valet.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>24-Hour Helpdesk:</strong> For turn-by-turn navigation guidance, call our 24/7 concierge at{' '}
                <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="text-[#A88B63] font-semibold hover:underline">
                  {BUSINESS_INFO.phonePrimary}
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
