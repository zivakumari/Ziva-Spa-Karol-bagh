import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <SEOHead
        title="About Ziva Spa – Luxury Wellness Sanctuary in Karol Bagh, New Delhi"
        description="Learn about Ziva Spa in Karol Bagh, New Delhi. Certified anatomy therapists, pure organic botanicals from Kerala, private couple jacuzzi suites, and our wellness heritage."
        canonicalPath="/about"
        keywords="about Ziva Spa, spa in Karol Bagh, best spa in Karol Bagh, certified massage therapists Karol Bagh, luxury wellness New Delhi"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about' },
        ]}
      />
      {/* Header Banner */}
      <section className="relative py-20 bg-[#1C1917] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Our Heritage & Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            About ZIVA SPA
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            New Delhi’s foremost luxury wellness retreat, dedicated to the ancient art of physical restoration and mindful sensory rejuvenation.
          </p>
        </div>
      </section>

      {/* Story & Inception */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              The Genesis of ZIVA
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] leading-tight">
              An Oasis of Calm in the Heart of Central Delhi
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Founded in Karol Bagh, New Delhi, ZIVA SPA was envisioned as an antidote to the unrelenting pace of modern urban living. Situated on Arya Samaj Road opposite Gaffar Market, we designed a space where time slows down the moment you step through our doors.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              In Sanskrit, <em className="text-stone-900 font-serif font-semibold">"Ziva"</em> denotes radiance, vitality, and blessed grace. Every facet of our sanctuary reflects this reverence — from the muted golden cove lighting to the sound of trickling water, organic cold-pressed oils from Kerala, and certified massage therapists dedicated to relieving your body's stress.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                <p className="font-serif italic text-stone-800 text-base">
                  "Wellness is not an occasional luxury; it is the fundamental foundation of sustained clarity, emotional poise, and physical vigor."
                </p>
                <p className="text-xs font-semibold text-[#A88B63] mt-2 uppercase tracking-wider">
                  — The ZIVA Sanctuary Creed
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src="/images/hero_luxury_spa_sanctuary_1794307111404.jpg"
                alt="Ziva Spa Relaxation Sanctuary Interior in Karol Bagh New Delhi"
                loading="lazy"
                decoding="async"
                className="w-full h-[280px] sm:h-[380px] md:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="bg-[#FAF8F5] py-14 sm:py-20 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              The Gold Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] mt-2">
              The Four Pillars of ZIVA Wellness
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Our uncompromising commitments to safety, authenticity, craftsmanship, and serenity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#A88B63]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Master Anatomy Therapists
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our practitioners undergo certified training in musculoskeletal anatomy, trigger point decompression, and authentic Balinese & Ayurvedic lineages.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#A88B63]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Pure Organic Botanicals
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No mineral oils or synthetic perfumes. We use 100% pure cold-pressed sweet almond oil, virgin coconut, and wildcrafted essential oils sourced ethically.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#A88B63]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Medical-Grade Hygiene
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every suite, Jacuzzi, and therapy table is disinfected with medical-grade sanitizers between appointments. Linens are autoclaved and single-use slippers provided.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#A88B63]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Acoustic & Sensory Serenity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Soundproofed treatment chambers, bespoke meditative soundscapes, custom aromatherapy room diffusers, and warm Himalayan salt lamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Sanctuary Suites */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-stone-200">
            <img
              src="/images/couple_spa_suite_1794307113115.jpg"
              alt="Ziva Spa Private Couple Suite with Jacuzzi in Karol Bagh New Delhi"
              loading="lazy"
              decoding="async"
              className="w-full h-[260px] sm:h-[350px] md:h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              Private Spaces
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1C1917] leading-tight">
              Designed for Uncompromised Privacy
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              At ZIVA SPA, each room is a self-contained world. Whether booking an individual deep tissue therapy or our celebrated Couple Harmony retreat, you enjoy:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A88B63] shrink-0" />
                <span>En-suite private rain showers with steam hydrotherapy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A88B63] shrink-0" />
                <span>Deep soaking Jacuzzi bathtubs with organic floral petals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A88B63] shrink-0" />
                <span>Ergonomic heated massage beds with dual head cradles</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A88B63] shrink-0" />
                <span>Complimentary artisanal herbal tea service in private lounge</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors"
              >
                <span>View Sanctuary Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#1C1917] text-white p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Visit ZIVA SPA Karol Bagh
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-100">
              Experience the Sanctuary Firsthand
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-lg">
              {BUSINESS_INFO.address} · <span className="text-emerald-400 font-semibold">Open 24/7 (24 Hours Daily)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
            <Link
              to="/booking"
              className="px-6 py-3.5 rounded-xl bg-[#C5A880] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:bg-[#DFCA9B] transition-colors text-center"
            >
              Book an Appointment
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-700 transition-colors border border-stone-700 text-center"
            >
              View Google Maps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
