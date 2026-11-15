import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, HelpCircle, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'booking', label: 'Bookings & Cancellation' },
    { id: 'treatments', label: 'Treatments & Hygiene' },
    { id: 'location', label: 'Location & Parking' },
    { id: 'pricing', label: 'Pricing & Payments' },
    { id: 'etiquette', label: 'Spa Etiquette' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title="Frequently Asked Questions – Spa Etiquette, Bookings & Parking"
        description="Find answers regarding appointments, arrival etiquette, valet parking on Arya Samaj Road, cancellation policies, and accepted payment methods at ZIVA SPA Karol Bagh, New Delhi."
        canonicalPath="/faq"
        keywords="spa faq New Delhi, spa etiquette, Karol Bagh spa parking, Ziva Spa questions"
        structuredData={faqStructuredData}
      />
      {/* Header Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Help & Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 sm:mt-4 text-stone-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about preparing for your session, etiquette, parking on Arya Samaj Road, and our customized therapies.
          </p>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === c.id
                    ? 'bg-[#1C1917] text-white font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-serif text-base sm:text-xl font-bold text-[#1C1917] hover:text-[#A88B63] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#A88B63]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-6 sm:p-10 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#A88B63] mx-auto" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
            Our wellness concierges at Karol Bagh, New Delhi are happy to assist you with special requests, group packages, or medical inquiries.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Call: {BUSINESS_INFO.phonePrimary}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-stone-800 text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 transition-colors border border-stone-300"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us ({BUSINESS_INFO.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
