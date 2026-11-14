import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sparkles, Check, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import { SPA_PACKAGES, BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const LuxuryPackagesPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-24">
      <SEOHead
        title="Luxury Spa Packages – Full Day Rebirth, Executive Detox & Bridal"
        description="Comprehensive half-day and full-day wellness packages at ZIVA SPA Karol Bagh, New Delhi. Rejuvenate with bundled massages, body polishes, and 24K gold facials."
        canonicalPath="/luxury-packages"
        keywords="luxury spa packages New Delhi, full day spa Delhi, bridal spa package Karol Bagh, executive stress relief spa Delhi"
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Comprehensive Immersion
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Luxury Spa Packages
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Curated half-day and full-day multi-treatment journeys designed for profound cellular restoration, bridal radiance, and executive stress recovery.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPA_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                pkg.popular ? 'border-[#C5A880] ring-1 ring-[#C5A880]/30' : 'border-stone-200/90'
              }`}
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#1C1917]/90 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{pkg.durationMinutes} Minutes</span>
                  </div>

                  {pkg.popular && (
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#C5A880] text-[#1C1917] text-xs font-bold uppercase tracking-wider">
                      Most Celebrated
                    </div>
                  )}
                </div>

                <div className="p-7 space-y-5">
                  <div>
                    <span className="text-xs font-serif italic text-[#A88B63] block">
                      {pkg.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      <strong>Best For:</strong> {pkg.idealFor}
                    </p>
                  </div>

                  {/* Included Services */}
                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      Curated Multi-Ritual Sequence:
                    </span>
                    {pkg.includedServices.map((svc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Complimentary Perks */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 space-y-1.5">
                    <span className="text-[10px] uppercase font-semibold text-[#A88B63] flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5" />
                      <span>Complimentary Inclusions</span>
                    </span>
                    {pkg.complimentary.map((comp, i) => (
                      <p key={i} className="text-xs text-stone-600">· {comp}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purchase Strip */}
              <div className="p-7 pt-4 border-t border-stone-100 flex items-center justify-between bg-stone-50/60">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Package Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-bold text-[#1C1917]">
                      ₹{pkg.priceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="font-mono text-xs text-stone-400 line-through">
                      ₹{pkg.originalPriceINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/booking?package=${pkg.id}`}
                  className="px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Book Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Vouchers Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1C1917] via-[#292524] to-[#1C1917] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              Gift The Art of Relaxation
            </span>
            <h3 className="font-serif text-3xl font-bold text-stone-100">
              ZIVA SPA Bespoke Gift Vouchers
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Delivered in an elegant embossed gold foil gift box or personalized digital certificate. Perfect for birthdays, weddings, anniversaries, and corporate rewards.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Ziva%20Spa,%20I%20would%20like%20to%20order%20a%20Spa%20Gift%20Voucher.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#C5A880] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:bg-[#DFCA9B] transition-colors"
            >
              Order Gift Voucher
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
