import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Sparkles, Copy, Check, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SPECIAL_OFFERS, SPA_PACKAGES } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const OffersPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-20 pb-24">
      <SEOHead
        title="Special Offers, Discount Codes & Spa Packages – ZIVA SPA"
        description="Exclusive wellness discounts in Karol Bagh, New Delhi. 20% off with promo code ZIVA20, couple weekday savings, and corporate rates."
        canonicalPath="/offers"
        keywords="spa offers New Delhi, spa discounts Karol Bagh, Ziva Spa promo code, couple spa offer Delhi"
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Exclusive Privileges
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Special Offers & Packages
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover limited-time wellness promotions, corporate rates, and celebratory couple privileges for your next visit to ZIVA SPA.
          </p>
        </div>
      </section>

      {/* Promo Codes & Seasonal Discounts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
            Active Promotional Codes
          </span>
          <h2 className="text-3xl font-serif text-[#1C1917] mt-1">
            Current Wellness Savings
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Copy any promo code below and apply it directly on our online booking form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;
            return (
              <div
                key={offer.id}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#A88B63] text-xs font-bold uppercase tracking-wider">
                      {offer.discountBadge}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      Valid: {offer.validUntil}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {offer.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-1.5">
                    <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                      Terms of Privilege:
                    </span>
                    {offer.terms.map((t, i) => (
                      <p key={i} className="text-xs text-stone-600 leading-snug">· {t}</p>
                    ))}
                  </div>
                </div>

                <div className="p-7 pt-4 border-t border-stone-100 bg-[#FAF8F5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="px-3.5 py-2 rounded-xl bg-white border border-stone-300 font-mono font-bold text-sm text-[#1C1917] tracking-wider">
                      {offer.code}
                    </div>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className="p-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 transition-colors"
                      title="Copy promo code"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <Link
                    to={`/booking?promo=${offer.code}`}
                    className="px-6 py-3 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-xs"
                  >
                    Apply & Book
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Multi-Treatment Packages Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-14 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                All-Inclusive Indulgence
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-100 mt-2">
                Bundled Luxury Packages
              </h2>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-xl">
                Save up to 30% when bundling full-body massages, Turkish Hamam scrubs, and 24K gold facials together.
              </p>
            </div>

            <Link
              to="/luxury-packages"
              className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] hover:underline"
            >
              View Full Packages Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPA_PACKAGES.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-stone-900/90 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-serif italic text-[#DFCA9B]">{pkg.tagline}</span>
                  <h4 className="font-serif font-bold text-xl text-stone-100 mt-1">{pkg.name}</h4>
                  <p className="text-xs text-stone-400 mt-2">{pkg.durationMinutes} Minutes of pure sanctuary time</p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xl font-bold text-[#DFCA9B]">
                      ₹{pkg.priceINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <Link
                    to={`/booking?package=${pkg.id}`}
                    className="px-4 py-2 rounded-xl bg-[#C5A880] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:bg-[#DFCA9B] transition-colors"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
