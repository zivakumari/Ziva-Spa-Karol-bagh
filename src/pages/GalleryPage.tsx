import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, X, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/spaData';
import { GalleryItem } from '../types';
import { SEOHead } from '../components/SEOHead';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Views' },
    { id: 'interiors', label: 'Spa Interiors' },
    { id: 'massage', label: 'Massage Rooms' },
    { id: 'couple', label: 'Couple Suites' },
    { id: 'treatments', label: 'Treatments & Oils' },
    { id: 'relaxation', label: 'Relaxation Areas' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title="Ziva Spa Photos & Sanctuary Gallery | Karol Bagh, New Delhi"
        description="View photos of Ziva Spa on Arya Samaj Road, Karol Bagh, New Delhi. Explore our luxury interiors, private couple jacuzzi suites, and serene treatment rooms."
        canonicalPath="/gallery"
        keywords="Ziva Spa photos, spa in Karol Bagh images, luxury couple suite photos Delhi, spa interior Karol Bagh, massage rooms New Delhi"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Gallery', item: '/gallery' },
        ]}
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Visual Sanctuary Tour
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Ziva Spa Photo Gallery – Karol Bagh, New Delhi
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Step inside our Karol Bagh haven. Explore our warm limestone architecture, private couple jacuzzi suites, candle-lit therapy chambers, and organic herbal apothecary.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1 w-full touch-pan-x">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#1C1917] text-white shadow-xs font-semibold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} – Ziva Spa Karol Bagh New Delhi`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-900 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A88B63] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#A88B63] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 mt-3 text-xs text-[#A88B63] font-semibold flex items-center gap-1">
                  <span>Enlarge View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full border border-stone-300 shadow-2xl overflow-hidden relative max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[240px] sm:h-[380px] md:h-[480px] bg-black">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 bg-white">
              <div className="space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A88B63]">
                  {activeModalItem.category} Sanctuary View
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                  {activeModalItem.description}
                </p>
              </div>

              <Link
                to="/booking"
                onClick={() => setActiveModalItem(null)}
                className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm text-center"
              >
                Book This Experience
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
