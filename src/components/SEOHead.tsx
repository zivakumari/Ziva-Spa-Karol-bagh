import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/spaData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: Record<string, unknown> | null;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage = '/src/assets/images/hero_luxury_spa_sanctuary_1794307111404.jpg',
  structuredData,
}) => {
  const location = useLocation();

  // Baseline defaults with local New Delhi 24/7 SEO
  const defaultTitle = 'Ziva Spa – Open 24/7 | Luxury Spa & Wellness Sanctuary Karol Bagh New Delhi';
  const defaultDescription =
    'Ziva Spa is open 24/7 on Arya Samaj Road, Opposite Gaffar Market, Karol Bagh, New Delhi. Premier luxury wellness sanctuary offering round-the-clock Swedish, Deep Tissue, Ayurvedic body rituals, private couple jacuzzi suites, and instant online booking.';
  const defaultKeywords =
    'Ziva Spa Open 24/7, 24 hours spa New Delhi, 24/7 massage Delhi, luxury spa Karol Bagh, spa near Gaffar Market, couple spa New Delhi, night spa Delhi, Swedish massage Karol Bagh, deep tissue massage New Delhi, Ayurvedic potli massage Delhi, Day Spa Karol Bagh, best spa in Delhi';

  const fullTitle = title
    ? `${title} | Ziva Spa – Open 24/7 New Delhi`
    : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const canonicalUrl = `https://zivaspa.in${canonicalPath || location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to safely set or update meta tag
    const setMetaTag = (attribute: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'keywords', metaKeywords);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'geo.region', 'IN-DL');
    setMetaTag('name', 'geo.placename', 'New Delhi');
    setMetaTag('name', 'geo.position', `${BUSINESS_INFO.coordinates.lat};${BUSINESS_INFO.coordinates.lng}`);
    setMetaTag('name', 'ICBM', `${BUSINESS_INFO.coordinates.lat}, ${BUSINESS_INFO.coordinates.lng}`);

    // 3. OpenGraph Social Cards
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Ziva Spa – Open 24/7');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. Schema.org JSON-LD Structured Data
    const schemaScriptId = 'ziva-spa-structured-data';
    let scriptElement = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = schemaScriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    // Comprehensive LocalBusiness / DaySpa / HealthAndBeautyBusiness Schema
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['DaySpa', 'HealthAndBeautyBusiness'],
      name: 'Ziva Spa – Open 24/7',
      alternateName: ['Ziva Spa New Delhi', 'Ziva Spa Karol Bagh', 'Ziva Luxury Wellness Sanctuary'],
      image: [
        'https://zivaspa.in/src/assets/images/hero_luxury_spa_sanctuary_1794307111404.jpg',
        'https://zivaspa.in/src/assets/images/spa_interior_reception_1794307114314.jpg',
        'https://zivaspa.in/src/assets/images/couple_spa_suite_1794307113115.jpg',
      ],
      url: 'https://zivaspa.in',
      telephone: BUSINESS_INFO.phonePrimary,
      priceRange: '₹₹₹',
      description: metaDescription,
      hasMap: `https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.street,
        addressLocality: BUSINESS_INFO.city,
        addressRegion: BUSINESS_INFO.state,
        postalCode: BUSINESS_INFO.pincode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.coordinates.lat,
        longitude: BUSINESS_INFO.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.95',
        reviewCount: '286',
        bestRating: '5',
        worstRating: '1',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Open 24/7', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Private Couple Suites with Jacuzzi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Certified Professional Therapists', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Eucalyptus Steam & Rainfall Shower', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Basalt Hot Stone Therapy', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dedicated Parking Assistance on Arya Samaj Road', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Valet Parking', value: true },
      ],
      paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
      currenciesAccepted: 'INR',
    };

    const finalSchema = structuredData || defaultLocalBusinessSchema;
    scriptElement.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, metaDescription, metaKeywords, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
};
