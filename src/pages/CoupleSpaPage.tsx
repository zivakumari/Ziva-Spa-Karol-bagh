import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart, Sparkles, CheckCircle2, Star, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SPA_SERVICES, BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const CoupleSpaPage: React.FC = () => {
  const coupleTreatments = SPA_SERVICES.filter((s) => s.category === 'couple');

  return (
    <div className="space-y-20 pb-24">
      <SEOHead
        title="Private Couple Spa Suites (Open 24/7) – Jacuzzi & Massages"
        description="Open 24/7 in Karol Bagh, New Delhi. Book intimate private couple suites at Ziva Spa. Side-by-side synchronized massages, rose petal Jacuzzi, and Google Maps directions."
        canonicalPath="/couple-spa"
        keywords="couple spa New Delhi 24/7, couple massage Delhi, private jacuzzi spa Karol Bagh, late night couple spa, anniversary couple spa package Delhi"
      />
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#141211] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/couple_spa_suite_1794307113115.jpg"
            alt="Private Couple Spa Suite"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-[#141211]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-xs tracking-[0.25em] text-[#DFCA9B] uppercase font-sans mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
            <span>Private Sanctuary for Two · New Delhi</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mt-2 text-stone-100">
            Couple Spa Retreats
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Rekindle connection in an intimate haven of warm candlelight, synchronized massage therapies, private rose petal Jacuzzi hydrotherapy, and artisanal refreshments.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking?guests=2&service=couple-harmony-retreat"
              className="px-8 py-4 rounded-xl bg-[#C5A880] hover:bg-[#DFCA9B] text-[#1C1917] text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-[#C5A880]/20"
            >
              Reserve Private Couple Suite
            </Link>
          </div>
        </div>
      </section>

      {/* The Couple Suite Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              Private Romance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] leading-tight">
              An Entire VIP Suite Exclusively for Both of You
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Unlike ordinary spas where couple rooms are merely separated by a thin curtain, ZIVA SPA features dedicated architectural couple suites with soundproofed walls, private ensuite changing rooms, rainfall showers, and private Jacuzzis.
            </p>

            <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                <span>
                  <strong>Synchronized Duo Therapists:</strong> Two master therapists working in perfect harmony, personalized to each partner's pressure and oil preference.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                <span>
                  <strong>Rose Petal Hydrotherapy Jacuzzi:</strong> Warm hydromassage jets soothing tired limbs while immersed in fragrant Damask rose petals and Himalayan salts.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                <span>
                  <strong>Complimentary Celebration Amenity:</strong> Chilled sparkling fruit elixir, gourmet dark chocolates, and organic chamomile tisane served in your suite.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-stone-200">
            <img
              src="/images/couple_spa_suite_1794307113115.jpg"
              alt="Romantic Couple Treatment Suite with Rose Petals"
              className="w-full h-[440px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Couple Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
            Curated Couple Journeys
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] mt-2">
            Select Your Couple Ritual
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coupleTreatments.map((ritual) => (
            <div
              key={ritual.id}
              className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={ritual.image}
                    alt={ritual.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#1C1917]/90 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{ritual.durationMinutes} Minutes (for 2)</span>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#A88B63]">
                      Couple VIP Suite
                    </span>
                    <span className="flex items-center gap-1 text-stone-700 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                      <span>{ritual.rating}</span>
                      <span className="text-stone-400 font-normal">({ritual.reviewCount})</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {ritual.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {ritual.fullDesc}
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      Ritual Includes:
                    </span>
                    {ritual.ritualSteps.slice(0, 4).map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 pt-4 border-t border-stone-100 flex items-center justify-between bg-stone-50/50">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price for Couple</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-bold text-[#1C1917]">
                      ₹{ritual.priceINR.toLocaleString('en-IN')}
                    </span>
                    {ritual.originalPriceINR && (
                      <span className="font-mono text-xs text-stone-400 line-through">
                        ₹{ritual.originalPriceINR.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  to={`/booking?guests=2&service=${ritual.id}`}
                  className="px-6 py-3 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Book for Two
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
