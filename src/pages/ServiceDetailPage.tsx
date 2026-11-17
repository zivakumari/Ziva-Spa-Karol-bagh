import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, Star, ShieldCheck, CheckCircle2, AlertCircle, ArrowLeft, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { SPA_SERVICES, BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';
import { GetDirectionsButton } from '../components/GetDirectionsButton';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = SPA_SERVICES.find((s) => s.id === id) || SPA_SERVICES[0];
  const relatedServices = SPA_SERVICES.filter((s) => s.id !== service.id && s.category === service.category).slice(0, 3);

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://zivaspa.online/services/${service.id}#service`,
        serviceType: service.name,
        name: `${service.name} in Karol Bagh, New Delhi`,
        description: service.fullDesc,
        image: `https://zivaspa.online${service.image}`,
        provider: {
          '@type': ['DaySpa', 'LocalBusiness'],
          '@id': 'https://zivaspa.online/#localbusiness',
          name: BUSINESS_INFO.name,
          url: 'https://zivaspa.online/',
          telephone: '+919661207931',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3rd Floor, 10189/92, Arya Samaj Road, Opposite Gaffar Market, Block 14, WEA',
            addressLocality: 'Karol Bagh',
            addressRegion: 'Delhi',
            postalCode: '110005',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Karol Bagh' },
          { '@type': 'AdministrativeArea', name: 'New Delhi' },
        ],
        offers: {
          '@type': 'Offer',
          price: service.priceINR.toString(),
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
          url: `https://zivaspa.online/services/${service.id}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://zivaspa.online/services/${service.id}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zivaspa.online/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://zivaspa.online/services' },
          { '@type': 'ListItem', position: 3, name: service.name, item: `https://zivaspa.online/services/${service.id}` },
        ],
      },
    ],
  };

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title={`${service.name} in Karol Bagh, New Delhi | Ziva Spa`}
        description={`${service.shortDesc} Book ${service.name} (${service.durationMinutes} mins, ₹${service.priceINR}) at Ziva Spa on Arya Samaj Road, Opposite Gaffar Market, Karol Bagh, New Delhi.`}
        keywords={`${service.name}, ${service.name} Karol Bagh, massage in Karol Bagh, spa in Karol Bagh New Delhi, spa near Gaffar Market, Ziva Spa`}
        canonicalPath={`/services/${service.id}`}
        ogImage={service.image}
        structuredData={serviceStructuredData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: service.name, item: `/services/${service.id}` },
        ]}
      />
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-medium truncate">{service.name}</span>
        </div>
      </div>

      {/* Main PDP Split View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Rich Imagery & In-Depth Ritual Story */}
          <div className="lg:col-span-7 space-y-10">
            <div className="rounded-3xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-100">
              <img
                src={service.image}
                alt={`${service.name} Therapy at Ziva Spa Karol Bagh New Delhi`}
                loading="eager"
                decoding="async"
                className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* About This Ritual */}
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
                Ritual Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1917]">
                The Rejuvenation Experience
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {service.fullDesc}
              </p>
            </div>

            {/* Step-by-Step Ritual Sequence */}
            <div className="space-y-5 pt-4 border-t border-stone-200/70">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
                Curated Sequence
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917]">
                What to Expect During Your Ritual
              </h3>

              <div className="space-y-3.5">
                {service.ritualSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <span className="font-serif font-bold text-base text-[#A88B63] w-6 shrink-0">
                      0{idx + 1}.
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dermal & Muscular Benefits */}
            <div className="space-y-4 pt-4 border-t border-stone-200/70">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
                Therapeutic Impact
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917]">
                Health & Wellness Benefits
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitability & Advisory */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-800">
                <ShieldCheck className="w-4 h-4 text-[#A88B63]" />
                <span>Guest Suitability & Consultation</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Recommended For:</strong> {service.suitableFor}
              </p>
              <div className="flex items-start gap-2 text-xs text-stone-500 pt-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Please inform our front desk if you are pregnant, have recent fractures, high blood pressure, or acute skin conditions. Our therapists will adjust protocols accordingly.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Purchase & Booking Module */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-lg space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="uppercase tracking-widest font-semibold text-[#A88B63]">
                    {service.category} Sanctuary
                  </span>
                  <div className="flex items-center gap-1 text-stone-800 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                    <span>{service.rating}</span>
                    <span className="text-stone-400 font-normal">({service.reviewCount} reviews)</span>
                  </div>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
                  {service.name}
                </h1>

                <p className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open 24/7 (Day, Evening & Late-Night Slots)</span>
                </p>
              </div>

              {/* Price & Duration Strip */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Duration</span>
                  <span className="font-medium text-stone-900 text-sm flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#A88B63]" />
                    <span>{service.durationMinutes} Minutes</span>
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Total Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-bold text-[#1C1917]">
                      ₹{service.priceINR.toLocaleString('en-IN')}
                    </span>
                    {service.originalPriceINR && (
                      <span className="font-mono text-xs text-stone-400 line-through">
                        ₹{service.originalPriceINR.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Primary Booking Action & Directions */}
              <div className="space-y-3">
                <Link
                  to={`/booking?service=${service.id}`}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Reserve This Ritual</span>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <GetDirectionsButton
                    variant="secondary"
                    label="Get Directions"
                    className="w-full text-xs py-2.5"
                  />
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors border border-stone-200"
                  >
                    <span>24/7 Call Desk</span>
                  </a>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="space-y-2.5 pt-4 border-t border-stone-100 text-xs text-stone-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free cancellation up to 2 hours prior</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complimentary welcome foot wash & herbal tisane</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated private shower and steam access</span>
                </div>
              </div>

              {/* Location reminder */}
              <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span>Opposite Gaffar Market, Karol Bagh</span>
                <Link to="/contact" className="text-[#A88B63] hover:underline font-medium">
                  View Map →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Therapies */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 border-t border-stone-200/80">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Complementary Therapies
            </h3>
            <Link
              to="/services"
              className="text-xs font-semibold uppercase tracking-wider text-[#A88B63] hover:underline"
            >
              All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-2xl border border-stone-200/80 p-5 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#A88B63]">
                    {rel.category}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-stone-900 mt-1">{rel.name}</h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">{rel.shortDesc}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <span className="font-mono font-bold text-sm text-stone-900">
                    ₹{rel.priceINR.toLocaleString('en-IN')}
                  </span>
                  <Link
                    to={`/services/${rel.id}`}
                    className="text-xs font-semibold text-[#A88B63] hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
