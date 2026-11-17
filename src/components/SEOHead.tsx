import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/spaData';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: Record<string, unknown> | null;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage = '/images/hero_luxury_spa_sanctuary_1794307111404.jpg',
  structuredData,
  breadcrumbs,
  noindex = false,
}) => {
  const location = useLocation();

  // Primary SEO Keyword: Spa in Karol Bagh
  // Secondary: Best Spa in Karol Bagh, Massage in Karol Bagh, Spa Near Gaffar Market, Wellness Spa in Karol Bagh
  const defaultTitle = 'Ziva Spa – Best Spa in Karol Bagh, New Delhi | Luxury Wellness Sanctuary';
  const defaultDescription =
    'Ziva Spa on Arya Samaj Road, Opposite Gaffar Market, Karol Bagh, New Delhi. Premier luxury spa offering Swedish, Deep Tissue, Ayurvedic body massages & private couple suites.';
  const defaultKeywords =
    'Spa in Karol Bagh, Best Spa in Karol Bagh, Spa in Karol Bagh New Delhi, Massage in Karol Bagh, Spa Near Gaffar Market, Wellness Spa in Karol Bagh, Spa Near Arya Samaj Road, couple spa Delhi, body massage New Delhi';

  // Prevent duplicate branding in title
  const fullTitle = title
    ? title.toLowerCase().includes('ziva spa')
      ? title
      : `${title} | Ziva Spa Karol Bagh`
    : defaultTitle;

  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://zivaspa.online${currentPath === '/' ? '' : currentPath}`;

  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `https://zivaspa.online${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

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
    const robotsDirective = noindex
      ? 'noindex, follow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    setMetaTag('name', 'robots', robotsDirective);
    setMetaTag('name', 'geo.region', 'IN-DL');
    setMetaTag('name', 'geo.placename', 'Karol Bagh, New Delhi');
    setMetaTag('name', 'geo.position', `${BUSINESS_INFO.coordinates.lat};${BUSINESS_INFO.coordinates.lng}`);
    setMetaTag('name', 'ICBM', `${BUSINESS_INFO.coordinates.lat}, ${BUSINESS_INFO.coordinates.lng}`);

    // 3. OpenGraph Social Cards
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Ziva Spa');
    setMetaTag('property', 'og:image', absoluteOgImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', absoluteOgImage);

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

    // Generate breadcrumbs if provided or derive from path
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      'itemListElement': breadcrumbs.map((bc, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': bc.name,
        'item': bc.item.startsWith('http') ? bc.item : `https://zivaspa.online${bc.item}`,
      })),
    } : null;

    // Comprehensive LocalBusiness / DaySpa Schema
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['DaySpa', 'HealthAndBeautyBusiness', 'LocalBusiness'],
          '@id': 'https://zivaspa.online/#localbusiness',
          name: 'Ziva Spa',
          alternateName: ['Ziva Spa Karol Bagh', 'Ziva Spa New Delhi', 'Ziva Luxury Wellness Sanctuary'],
          image: [
            'https://zivaspa.online/images/hero_luxury_spa_sanctuary_1794307111404.jpg',
            'https://zivaspa.online/images/spa_interior_reception_1794307114314.jpg',
            'https://zivaspa.online/images/couple_spa_suite_1794307113115.jpg',
            'https://zivaspa.online/ziva_spa_logo.jpg',
          ],
          logo: 'https://zivaspa.online/ziva_spa_logo.jpg',
          url: 'https://zivaspa.online/',
          telephone: '+919661207931',
          priceRange: '₹₹₹',
          description: metaDescription,
          hasMap: `https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3rd Floor, 10189/92, Arya Samaj Road, Opposite Gaffar Market, Block 14, WEA',
            addressLocality: 'Karol Bagh',
            addressRegion: 'Delhi',
            postalCode: '110005',
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
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Karol Bagh' },
            { '@type': 'AdministrativeArea', name: 'WEA, Karol Bagh' },
            { '@type': 'AdministrativeArea', name: 'Gaffar Market' },
            { '@type': 'AdministrativeArea', name: 'Arya Samaj Road' },
            { '@type': 'AdministrativeArea', name: 'Central Delhi' },
            { '@type': 'AdministrativeArea', name: 'New Delhi' },
            { '@type': 'AdministrativeArea', name: 'Connaught Place' },
            { '@type': 'AdministrativeArea', name: 'Rajendra Place' },
            { '@type': 'AdministrativeArea', name: 'Patel Nagar' },
          ],
          paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
          currenciesAccepted: 'INR',
        },
        {
          '@type': 'WebSite',
          '@id': 'https://zivaspa.online/#website',
          url: 'https://zivaspa.online/',
          name: 'Ziva Spa',
          description: 'Luxury Spa and Wellness Sanctuary in Karol Bagh, New Delhi',
          publisher: {
            '@id': 'https://zivaspa.online/#localbusiness',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: fullTitle,
          description: metaDescription,
          isPartOf: {
            '@id': 'https://zivaspa.online/#website',
          },
          ...(breadcrumbSchema ? { breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` } } : {}),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ],
    };

    const finalSchema = structuredData || defaultLocalBusinessSchema;
    scriptElement.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, metaDescription, metaKeywords, canonicalUrl, ogType, absoluteOgImage, structuredData, breadcrumbs, noindex]);

  return null;
};
