import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Clock, Star, ShieldCheck, HeartHandshake, ArrowRight, MapPin, Phone, MessageSquare, ChevronRight, Check } from 'lucide-react';
import { SPA_SERVICES, SPA_PACKAGES, SPECIAL_OFFERS, TESTIMONIALS, BUSINESS_INFO } from '../data/spaData';
import { SpaMap } from '../components/SpaMap';
import { SEOHead } from '../components/SEOHead';
import { GetDirectionsButton } from '../components/GetDirectionsButton';

export const HomePage: React.FC = () => {
  const featuredServices = SPA_SERVICES.slice(0, 6);
  const topReviews = TESTIMONIALS.slice(0, 3);
  const welcomeOffer = SPECIAL_OFFERS[0];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      <SEOHead
        title="Ziva Spa – Open 24/7 | Luxury Wellness Sanctuary Karol Bagh New Delhi"
        description="Ziva Spa is open 24/7 on Arya Samaj Road, Opposite Gaffar Market, Karol Bagh, New Delhi. Experience round-the-clock Swedish, Deep Tissue, Ayurvedic rituals, private couple suites, and instant directions."
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#141211] text-white">
        {/* Background Hero Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_luxury_spa_sanctuary_1794307111404.jpg"
            alt="ZIVA SPA Luxury Wellness Sanctuary Interior"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000 opacity-55"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-[#141211]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141211]/90 via-transparent to-[#141211]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center">
          {/* Prominent 24/7 Hero Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 text-xs tracking-wider text-emerald-300 font-sans mb-6 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold uppercase tracking-wider">Ziva Spa – Open 24/7</span>
            <span className="text-emerald-500/60">·</span>
            <span className="text-stone-300 font-medium">Opposite Gaffar Market, Karol Bagh</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#FAF8F5] max-w-4xl leading-[1.15] text-balance">
            Where Modern Chaos Yields to <span className="italic text-[#C5A880] font-light">Timeless Serenity</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed text-balance">
            Immerse in handcrafted restorative therapies, private couple jacuzzi suites, and pure organic botanicals. Open 24 hours daily on Arya Samaj Road, Karol Bagh, New Delhi.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto flex-wrap">
            <Link
              to="/booking"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C5A880] hover:bg-[#DFCA9B] text-[#1C1917] text-sm font-semibold tracking-wider uppercase transition-all shadow-lg shadow-[#C5A880]/20 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Ritual</span>
            </Link>

            <GetDirectionsButton
              variant="luxury-gold"
              label="Get Directions"
              className="w-full sm:w-auto px-7 py-4 text-sm rounded-xl shadow-lg"
            />

            <Link
              to="/services"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-stone-100 text-sm font-medium tracking-wide transition-all border border-white/20 backdrop-blur-xs"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 text-center text-xs text-stone-300">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DFCA9B]">4.9 / 5</p>
              <p className="text-stone-400 mt-0.5">Google Rating</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DFCA9B]">100%</p>
              <p className="text-stone-400 mt-0.5">Organic Kerala Oils</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DFCA9B]">15+</p>
              <p className="text-stone-400 mt-0.5">Master Therapists</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open 24/7
              </p>
              <p className="text-stone-400 mt-0.5">Day & Night Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Brand Identity Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              The ZIVA Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1917] leading-tight text-balance">
              Restorative Sanctuary for Mind, Body & Spirit
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Nestled on Arya Samaj Road opposite Gaffar Market in Karol Bagh, ZIVA SPA was founded on a simple truth: true wellness is not an indulgence, but a biological necessity. We blend time-honored eastern healing wisdom with refined European spa standards.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              From our bespoke hand-tied Ayurvedic Potlis to heated volcanic basalt stones and private couple hydrotherapy suites, each ritual is tailored specifically to your body's stress pattern.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-stone-800">
                <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#A88B63]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Certified therapists with certified musculoskeletal training</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-800">
                <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#A88B63]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Private couple suites with en-suite rose petal Jacuzzis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-800">
                <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#A88B63]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Medical-grade sanitization between every single ritual</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#A88B63] transition-colors border-b-2 border-[#C5A880] pb-1"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md group">
              <img
                src="/images/spa_interior_reception_1794307114314.jpg"
                alt="ZIVA SPA Reception Lounge"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border border-stone-200/80">
                <p className="font-serif font-bold text-base text-[#1C1917]">Sanctuary Reception</p>
                <p className="text-xs text-stone-500 mt-0.5">Travertine stone lounge with soothing water feature</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md group sm:translate-y-6">
              <img
                src="/images/couple_spa_suite_1794307113115.jpg"
                alt="Couple Treatment Suite"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border border-stone-200/80">
                <p className="font-serif font-bold text-base text-[#1C1917]">Private Couple Suite</p>
                <p className="text-xs text-stone-500 mt-0.5">Candlelit romance with private hydro-soak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              Curated Therapies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1917] mt-2">
              Signature Spa Services
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-xl">
              Each therapy begins with our signature aromatic warm foot soak and custom herbal inhalation.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#A88B63] transition-colors shrink-0"
          >
            <span>View All 12+ Treatments</span>
            <ChevronRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-stone-100">
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
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="uppercase tracking-wider font-semibold text-[#A88B63]">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1 text-stone-700 font-medium">
                      <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                      <span>{service.rating}</span>
                      <span className="text-stone-400">({service.reviewCount})</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#A88B63] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xl font-bold text-[#1C1917]">
                        ₹{service.priceINR.toLocaleString('en-IN')}
                      </span>
                      {service.originalPriceINR && (
                        <span className="font-mono text-xs text-stone-400 line-through">
                          ₹{service.originalPriceINR.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 transition-colors"
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

      {/* Couple Sanctuary & Packages Feature */}
      <section className="bg-[#1C1917] text-white py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                Private Couples Sanctuary
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100 leading-tight">
                Shared Bliss in Private Luxury Suites
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Step into an exclusive sanctuary designed for two. Complete with side-by-side plush massage tables, private hydrotherapy Jacuzzi filled with rose petals, delicate candlelight, and artisan chocolates.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800">
                  <p className="font-serif text-lg font-bold text-[#DFCA9B]">Couple Harmony</p>
                  <p className="text-stone-400 mt-1">120 Min · ₹6,999</p>
                  <p className="text-stone-500 text-[11px] mt-1">Massage + Rose Petal Jacuzzi + Wine Elixir</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800">
                  <p className="font-serif text-lg font-bold text-[#DFCA9B]">Twilight Indulgence</p>
                  <p className="text-stone-400 mt-1">150 Min · ₹8,999</p>
                  <p className="text-stone-500 text-[11px] mt-1">Gold Oil Massage + Body Scrub + Jacuzzi</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link
                  to="/couple-spa"
                  className="px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCA9B] text-[#1C1917] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Explore Couple Spa
                </Link>
                <Link
                  to="/booking?service=couple-harmony-retreat"
                  className="px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold tracking-wider uppercase transition-colors border border-stone-700"
                >
                  Book Private Suite
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
                <img
                  src="/images/couple_spa_suite_1794307113115.jpg"
                  alt="Couple Spa Suite at ZIVA SPA Karol Bagh New Delhi"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Welcome Offer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE6] to-[#EAE3D8] border border-[#C5A880]/30 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88B63]">
              Special Welcome Privilege
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1C1917]">
              Receive 20% Off Your Inaugural Ritual
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Experience the pinnacle of wellness in Karol Bagh. Use promo code{' '}
              <strong className="font-mono text-[#A88B63] bg-white/70 px-2 py-0.5 rounded border border-[#C5A880]/40">
                {welcomeOffer.code}
              </strong>{' '}
              during booking to claim your welcome discount.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to={`/booking?promo=${welcomeOffer.code}`}
              className="px-8 py-4 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
            >
              Apply & Book Now
            </Link>
            <Link
              to="/offers"
              className="px-6 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-all border border-stone-300"
            >
              All Special Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Accolades & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
            Verified Guest Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1917] mt-2">
            Praised by Discerning Guests across Delhi NCR
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-stone-600">
            <div className="flex items-center text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
              ))}
            </div>
            <span className="font-semibold text-stone-900">4.9 / 5.0</span>
            <span>· 500+ Verified Guests</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#C5A880]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-mono">{rev.date}</span>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base">{rev.author}</h4>
                  <p className="text-xs text-stone-500">{rev.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-[#A88B63] block">
                    Treatment
                  </span>
                  <span className="text-xs text-stone-700 font-medium">{rev.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#A88B63] transition-colors border-b-2 border-[#C5A880] pb-1"
          >
            <span>Read All Verified Customer Feedback</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Dynamic Google Maps & Proximity Locator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
            Location & Directions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1917] mt-2">
            Visit Our Karol Bagh Sanctuary
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Located on Arya Samaj Road opposite Gaffar Market, Karol Bagh, New Delhi. Check real-time driving proximity and open instant GPS navigation.
          </p>
        </div>

        <SpaMap showDirectionsPanel={true} />
      </section>

      {/* Ready to Experience ZIVA CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#1C1917] text-white p-8 sm:p-14 relative overflow-hidden text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Begin Your Renewal
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif mt-3 text-stone-100 max-w-2xl leading-tight">
            Reserve Your Serenity at ZIVA SPA Today
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Open 24 hours a day, 7 days a week (24/7). Book online in 60 seconds with instant mobile confirmation, or visit our Karol Bagh sanctuary anytime.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/booking"
              className="px-8 py-4 rounded-xl bg-[#C5A880] hover:bg-[#DFCA9B] text-[#1C1917] text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-[#C5A880]/20"
            >
              Book Instant Appointment
            </Link>
            <GetDirectionsButton
              variant="secondary"
              label="Get Driving Directions"
              className="px-6 py-4 text-xs font-semibold"
            />
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-6 py-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold tracking-wider transition-colors border border-stone-700"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>24/7 Call: {BUSINESS_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
