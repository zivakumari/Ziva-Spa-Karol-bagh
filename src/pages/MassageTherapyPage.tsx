import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ShieldCheck, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';
import { SPA_SERVICES, BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const MassageTherapyPage: React.FC = () => {
  const massageServices = SPA_SERVICES.filter((s) => s.category === 'massage');

  return (
    <div className="space-y-20 pb-24">
      <SEOHead
        title="Massage Therapy (Open 24/7) – Swedish, Deep Tissue, Hot Stone & Balinese"
        description="Open 24/7 in Karol Bagh, New Delhi. Master Swedish, Deep Tissue, Hot Stone, and Ayurvedic Potli massages with certified anatomy therapists, organic oils, and Google Maps directions."
        canonicalPath="/massage-therapy"
        keywords="24/7 massage New Delhi, massage therapy Karol Bagh, Swedish massage Delhi, deep tissue massage New Delhi, late night massage Delhi, hot stone therapy Karol Bagh, Balinese massage"
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Therapeutic Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Massage Therapy Collection
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Targeting chronic physical tension, desk posture stiffness, and mental fatigue through anatomical mastery and warm organic botanical oils.
          </p>
        </div>
      </section>

      {/* Pressure Guide Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-xs">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#A88B63] mb-4 text-center sm:text-left">
            Choose Your Ideal Pressure Level
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
              <span className="font-serif font-bold text-base text-[#1C1917] block mb-1">
                Gentle & Rhythmic
              </span>
              <p>Long continuous effleurage strokes designed to stimulate lymphatic drainage and reset nervous system hyperactivity. (Swedish & Balinese)</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
              <span className="font-serif font-bold text-base text-[#1C1917] block mb-1">
                Medium & Restorative
              </span>
              <p>Balanced muscular stimulation utilizing palm rolling, heated volcanic stones, and warm Ayurvedic herbal compresses. (Hot Stone & Potli)</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
              <span className="font-serif font-bold text-base text-[#1C1917] block mb-1">
                Deep & Structural
              </span>
              <p>Intense cross-fiber friction and slow thumb-elbow pressure penetrating deep fascia to dissolve chronic knots and athletic adhesions. (Deep Tissue)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {massageServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{service.durationMinutes} Min</span>
                </div>
                {service.pressureLevel && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[#1C1917] text-[10px] font-semibold uppercase tracking-wider">
                    {service.pressureLevel} Pressure
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
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

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-stone-400 block">Highlights:</span>
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <p key={i} className="text-xs text-stone-600 truncate">· {b}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
                    <span className="font-mono text-xl font-bold text-[#1C1917]">
                      ₹{service.priceINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/booking?service=${service.id}`}
                      className="px-4 py-2 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
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

      {/* Booking CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#1C1917] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-100">
              Need a Custom Pressure or Oil Consultation?
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              Speak with our senior therapist team at Karol Bagh, New Delhi.
            </p>
          </div>
          <Link
            to="/booking"
            className="px-6 py-3.5 rounded-xl bg-[#C5A880] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:bg-[#DFCA9B] transition-colors shrink-0"
          >
            Book Massage Online
          </Link>
        </div>
      </section>
    </div>
  );
};
