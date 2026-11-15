import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, Search, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { SPA_SERVICES, BUSINESS_INFO } from '../data/spaData';
import { SpaService } from '../types';
import { SEOHead } from '../components/SEOHead';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Therapies' },
    { id: 'massage', label: 'Massage Therapy' },
    { id: 'body', label: 'Body Spa & Scrubs' },
    { id: 'couple', label: 'Couple Spa Suites' },
    { id: 'facial', label: 'Facial Radiance' },
  ];

  const filteredServices = SPA_SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.suitableFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title="Spa & Massage Menu (Open 24/7) – Pricing, Duration & Treatments"
        description="Open 24/7 in Karol Bagh, New Delhi. Browse luxury wellness therapies at Ziva Spa: Swedish, Deep Tissue, Hot Stone, Balinese, Turkish Hamam scrubs, and couple spa suites with online booking."
        canonicalPath="/services"
        keywords="spa menu New Delhi 24/7, 24 hour massage price Delhi, spa near Gaffar Market, body scrub Karol Bagh, couple spa New Delhi"
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            The Treatment Catalogue
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Our Spa & Wellness Menu
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From deep anatomical bodywork to ancient Ayurvedic potlis and royal couple retreats, explore our curated holistic rituals.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs (Segmented Control per Frontend Design guidelines) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto touch-pan-x">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C1917] text-white shadow-xs font-semibold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880] focus:bg-white transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="font-serif text-2xl text-stone-800">No treatments match your criteria</p>
            <p className="text-stone-500 text-xs mt-2">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#1C1917] text-white text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
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
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#1C1917] text-[10px] font-semibold uppercase tracking-wider">
                      Pressure: {service.pressureLevel}
                    </div>
                  )}
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

                    <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                      <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                        Core Benefits:
                      </span>
                      {service.benefits.slice(0, 2).map((b, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2 flex-wrap">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-lg sm:text-xl font-bold text-[#1C1917]">
                          ₹{service.priceINR.toLocaleString('en-IN')}
                        </span>
                        {service.originalPriceINR && (
                          <span className="font-mono text-xs text-stone-400 line-through">
                            ₹{service.originalPriceINR.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
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
        )}
      </section>

      {/* Custom Consultation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200/90 p-6 sm:p-10 md:p-12 text-center max-w-3xl mx-auto space-y-4">
          <Sparkles className="w-8 h-8 text-[#A88B63] mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            Not Sure Which Treatment is Ideal for You?
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Our wellness concierges are available to provide complimentary consultations tailored to your current physical fatigue, chronic tension, or celebratory occasion.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-xl bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors text-center"
            >
              Call Concierge: {BUSINESS_INFO.phonePrimary}
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white text-stone-800 text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 transition-colors border border-stone-300 text-center"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
