import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SPA_SERVICES } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const BodySpaPage: React.FC = () => {
  const bodyTreatments = SPA_SERVICES.filter((s) => s.category === 'body');

  return (
    <div className="space-y-20 pb-24">
      <SEOHead
        title="Body Spa Treatments in Karol Bagh, New Delhi | Ziva Spa Scrubs"
        description="Rejuvenate with royal Turkish Hamam polishes, Himalayan salt scrubs, and volcanic clay detox wraps at Ziva Spa, Karol Bagh, New Delhi."
        canonicalPath="/body-spa-treatments"
        keywords="body spa in Karol Bagh, body scrub Karol Bagh, Turkish Hamam Delhi, Himalayan salt scrub New Delhi, wellness spa Karol Bagh, Ziva Spa"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Body Spa Treatments', item: '/body-spa-treatments' },
        ]}
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Skin Radiance & Detoxification
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Body Spa Treatments in Karol Bagh, New Delhi
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Exquisite body polishes, mineral cocoon wraps, and authentic Turkish Hamam rituals utilizing Himalayan crystal salts and pure rose essences at Ziva Spa.
          </p>
        </div>
      </section>

      {/* Featured Body Ritual Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 md:p-12 rounded-3xl border border-stone-200/90 shadow-xs">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/body_treatment_herbal_scrub_1794307112654.jpg"
              alt="Body Scrub & Herbal Preparations at Ziva Spa Karol Bagh New Delhi"
              loading="lazy"
              decoding="async"
              className="w-full h-[260px] sm:h-[350px] md:h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              Signature Exfoliation
            </span>
            <h2 className="text-3xl font-serif text-[#1C1917] leading-tight">
              Royal Turkish Hamam & Botanical Polishes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Every day, environmental pollutants, dead cellular buildup, and dry indoor air dull your skin's natural luminescence. Our whole-body exfoliation rituals gently shed the old, allowing pure botanical vitamins and moisture to flood your pores.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eucalyptus steam chamber preparation to soften keratin layers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hand-harvested 84-mineral Himalayan pink crystal salts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Rich argan and rosehip glazing for 48-hour continuous hydration</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/booking?service=turkish-hamam-scrub"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Book Royal Hamam Polish</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-8">
          Available Body Spa Rituals
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bodyTreatments.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={`${service.name} at Ziva Spa Karol Bagh New Delhi`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{service.durationMinutes} Min</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="flex items-center gap-1 text-stone-700 font-medium">
                      <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                      <span>{service.rating}</span>
                      <span className="text-stone-400">({service.reviewCount})</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#A88B63] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2 flex-wrap">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-[#1C1917]">
                      ₹{service.priceINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Link
                      to={`/services/${service.id}`}
                      className="px-2.5 sm:px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/booking?service=${service.id}`}
                      className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
