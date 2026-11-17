import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const services = [
  {
    id: 'swedish-relaxation',
    name: 'Swedish Deep Relaxation Massage',
    duration: 60,
    price: 2799,
    desc: 'European therapeutic massage using long gliding effleurage strokes and warming almond oil to melt away daily tension.',
    category: 'massage',
    image: '/images/service_swedish_massage_1794309941515.jpg',
  },
  {
    id: 'deep-tissue-therapy',
    name: 'Deep Tissue Muscle Recovery',
    duration: 75,
    price: 3499,
    desc: 'Intense therapeutic massage targeting the deepest layers of muscle tissue, fascia, and chronic knots using eucalyptus and arnica extracts.',
    category: 'massage',
    image: '/images/service_deep_tissue_1794309940666.jpg',
  },
  {
    id: 'hot-stone-therapy',
    name: 'Basalt Hot Stone Healing Ritual',
    duration: 90,
    price: 4299,
    desc: 'Heated volcanic basalt stones glide seamlessly across energy meridians to dissolve deep-seated fatigue and warm core vitality.',
    category: 'massage',
    image: '/images/massage_therapy_stone_1794307112636.jpg',
  },
  {
    id: 'balinese-aromatherapy',
    name: 'Traditional Balinese Aromatherapy',
    duration: 60,
    price: 2999,
    desc: 'An exotic Indonesian ritual blending palm rolling, gentle acupressure, skin rolling, and pure Frangipani floral oils.',
    category: 'massage',
    image: '/images/service_balinese_massage_1794309942521.jpg',
  },
  {
    id: 'potli-abhyanga',
    name: 'Ayurvedic Kizhi Potli Therapy',
    duration: 75,
    price: 3699,
    desc: 'Warm linen pouches packed with 16 sacred Vedic herbs and warm sesame oil rhythmically patted along vital Marma points.',
    category: 'massage',
    image: '/images/service_ayurvedic_potli_1794309944073.jpg',
  },
  {
    id: 'foot-reflexology',
    name: 'Eastern Foot Reflexology & Leg Revival',
    duration: 45,
    price: 1999,
    desc: 'Targeted acupressure on reflex zones of the soles corresponding to vital organs, accompanied by peppermint leg decompression.',
    category: 'massage',
    image: '/images/service_foot_reflexology_1794309943632.jpg',
  },
  {
    id: 'turkish-hamam-scrub',
    name: 'Royal Turkish Hamam Body Polish',
    duration: 60,
    price: 3499,
    desc: 'A lavish cleansing ritual using traditional Kessa mitt exfoliation, black olive soap foam, and nourishing argan oil sheen.',
    category: 'body',
    image: '/images/service_turkish_hamam_1794309945278.jpg',
  },
  {
    id: 'himalayan-salt-glow',
    name: 'Himalayan Pink Salt & Rose Body Scrub',
    duration: 60,
    price: 3299,
    desc: 'Hand-mined mineral-rich pink crystal salts blended with organic cold-pressed rosehip oil and damask rose petals.',
    category: 'body',
    image: '/images/service_himalayan_salt_scrub_1794309944951.jpg',
  },
  {
    id: 'detox-clay-wrap',
    name: 'Marine Algae & Volcanic Clay Detox Wrap',
    duration: 75,
    price: 3999,
    desc: 'A deeply purifying body mask enriched with nutrient-dense French sea kelp and volcanic Bentonite clay to draw out toxins.',
    category: 'body',
    image: '/images/service_detox_clay_wrap_1794309946662.jpg',
  },
  {
    id: 'couple-harmony-retreat',
    name: 'Couple Harmony Sanctuary Retreat',
    duration: 120,
    price: 6999,
    desc: 'A romantic 2-hour private sanctuary journey for two with side-by-side massages, rose petal hydro-bath, and sparkling fruit elixir.',
    category: 'couple',
    image: '/images/couple_spa_suite_1794307113115.jpg',
  },
  {
    id: 'couple-twilight-bliss',
    name: 'Twilight Candlelight Couple Indulgence',
    duration: 150,
    price: 8999,
    desc: 'An exclusive evening couple experience with warm gold oil massages, hydro-jet soak, and soothing head-to-toe pampering.',
    category: 'couple',
    image: '/images/service_couple_twilight_jacuzzi_1794309945986.jpg',
  },
  {
    id: 'gold-radiance-facial',
    name: '24K Pure Gold Radiance Anti-Aging Facial',
    duration: 60,
    price: 3799,
    desc: 'A decadent luxury facial utilizing 24K biological gold sheets, hyaluronic acid, and jade roller lifting massage.',
    category: 'facial',
    image: '/images/service_gold_radiance_facial_1794309946623.jpg',
  },
];

const staticRoutes = [
  {
    path: '/services',
    title: 'Spa Services in Karol Bagh, New Delhi | Ziva Spa Menu & Pricing',
    description: 'Browse luxury spa and massage services in Karol Bagh at Ziva Spa. Swedish, Deep Tissue, Hot Stone, Balinese, Turkish Hamam scrubs & private couple suites.',
    keywords: 'spa services in Karol Bagh, massage in Karol Bagh, spa menu New Delhi, body scrub Karol Bagh, couple spa New Delhi, best spa in Karol Bagh',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Services', item: 'https://zivaspa.online/services' },
    ],
  },
  {
    path: '/massage-therapy',
    title: 'Massage in Karol Bagh, New Delhi | Ziva Spa Therapeutic Collection',
    description: 'Experience certified massage in Karol Bagh, New Delhi at Ziva Spa. Master Swedish, Deep Tissue, Hot Stone, Balinese, and Ayurvedic Potli massages with organic oils.',
    keywords: 'Massage in Karol Bagh, massage in Karol Bagh New Delhi, Swedish massage Karol Bagh, deep tissue massage New Delhi, hot stone therapy Karol Bagh, Balinese massage Delhi, best spa in Karol Bagh',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Massage Therapy', item: 'https://zivaspa.online/massage-therapy' },
    ],
  },
  {
    path: '/body-spa-treatments',
    title: 'Body Spa Treatments in Karol Bagh, New Delhi | Ziva Spa Scrubs',
    description: 'Rejuvenate with royal Turkish Hamam polishes, Himalayan salt scrubs, and volcanic clay detox wraps at Ziva Spa, Karol Bagh, New Delhi.',
    keywords: 'body spa in Karol Bagh, body scrub Karol Bagh, Turkish Hamam Delhi, Himalayan salt scrub New Delhi, wellness spa Karol Bagh, Ziva Spa',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Body Spa Treatments', item: 'https://zivaspa.online/body-spa-treatments' },
    ],
  },
  {
    path: '/couple-spa',
    title: 'Private Couple Spa in Karol Bagh, New Delhi | Jacuzzi Suites – Ziva Spa',
    description: 'Book romantic private couple spa suites in Karol Bagh at Ziva Spa. Side-by-side synchronized massages, rose petal Jacuzzi hydrotherapy, and candlelit ambiance.',
    keywords: 'couple spa in Karol Bagh, couple massage Karol Bagh, couple spa New Delhi, private jacuzzi spa Delhi, couple spa near Gaffar Market, Ziva Spa',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Couple Spa Suites', item: 'https://zivaspa.online/couple-spa' },
    ],
  },
  {
    path: '/luxury-packages',
    title: 'Luxury Spa Packages in Karol Bagh, New Delhi | Ziva Spa Journeys',
    description: 'Indulge in half-day and full-day wellness packages at Ziva Spa Karol Bagh. Rebirth rituals, executive stress recovery, and royal bridal radiance journeys.',
    keywords: 'luxury spa packages New Delhi, spa packages in Karol Bagh, full day spa Karol Bagh, bridal spa package New Delhi, executive spa Delhi, Ziva Spa',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Luxury Packages', item: 'https://zivaspa.online/luxury-packages' },
    ],
  },
  {
    path: '/about',
    title: 'About Ziva Spa – Luxury Wellness Sanctuary in Karol Bagh, New Delhi',
    description: 'Learn about Ziva Spa in Karol Bagh, New Delhi. Certified anatomy therapists, pure organic botanicals from Kerala, private couple jacuzzi suites, and our wellness heritage.',
    keywords: 'about Ziva Spa, spa in Karol Bagh, best spa in Karol Bagh, certified massage therapists Karol Bagh, luxury wellness New Delhi',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'About Us', item: 'https://zivaspa.online/about' },
    ],
  },
  {
    path: '/contact',
    title: 'Contact Ziva Spa Karol Bagh | Address, Phone & Directions – New Delhi',
    description: 'Visit Ziva Spa at 3rd Floor, 10189/92, Arya Samaj Road, Opposite Gaffar Market, Block 14, WEA, Karol Bagh, New Delhi – 110005. Phone: +91 9661207931, WhatsApp chat, and Google Maps GPS directions.',
    keywords: 'contact Ziva Spa, spa address Karol Bagh New Delhi, spa near Gaffar Market phone number, spa near Arya Samaj Road, directions to Ziva Spa Karol Bagh',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Contact', item: 'https://zivaspa.online/contact' },
    ],
  },
  {
    path: '/gallery',
    title: 'Ziva Spa Photos & Sanctuary Gallery | Karol Bagh, New Delhi',
    description: 'View photos of Ziva Spa on Arya Samaj Road, Karol Bagh, New Delhi. Explore our luxury interiors, private couple jacuzzi suites, and serene treatment rooms.',
    keywords: 'Ziva Spa photos, spa in Karol Bagh images, luxury couple suite photos Delhi, spa interior Karol Bagh, massage rooms New Delhi',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Gallery', item: 'https://zivaspa.online/gallery' },
    ],
  },
  {
    path: '/reviews',
    title: 'Customer Reviews & Testimonials | Ziva Spa Karol Bagh, New Delhi',
    description: 'Read guest reviews and experiences for Ziva Spa in Karol Bagh, New Delhi. Discover feedback on our therapeutic massages, couple suites, and wellness rituals.',
    keywords: 'Ziva Spa reviews, spa in Karol Bagh reviews, best spa in Karol Bagh feedback, customer testimonials, couple spa reviews Delhi',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Reviews', item: 'https://zivaspa.online/reviews' },
    ],
  },
  {
    path: '/offers',
    title: 'Spa Offers & Special Discounts in Karol Bagh | Ziva Spa Deals',
    description: 'Exclusive wellness offers and promo codes at Ziva Spa Karol Bagh, New Delhi. Enjoy welcome discounts, weekday specials, and private couple spa packages.',
    keywords: 'spa offers in Karol Bagh, spa discounts Karol Bagh, Ziva Spa promo code, couple spa offers Delhi, massage deals New Delhi',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Special Offers', item: 'https://zivaspa.online/offers' },
    ],
  },
  {
    path: '/booking',
    title: 'Book Spa Appointment in Karol Bagh, New Delhi | Ziva Spa Online',
    description: 'Schedule your massage or spa therapy at Ziva Spa on Arya Samaj Road, Karol Bagh, New Delhi. Select your preferred date, time slot, and treatment with instant booking.',
    keywords: 'book spa appointment Karol Bagh, spa booking New Delhi, reserve massage Karol Bagh, Ziva Spa booking, couple spa booking Delhi',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Book Appointment', item: 'https://zivaspa.online/booking' },
    ],
  },
  {
    path: '/faq',
    title: 'Ziva Spa FAQ – Location, Bookings & Services | Karol Bagh New Delhi',
    description: 'Frequently asked questions about Ziva Spa in Karol Bagh, New Delhi. Details on 24/7 hours, appointments, parking on Arya Samaj Road, and massage etiquette.',
    keywords: 'Ziva Spa FAQ, spa in Karol Bagh questions, Karol Bagh spa parking, spa etiquette New Delhi, 24/7 spa booking Delhi',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'FAQ', item: 'https://zivaspa.online/faq' },
    ],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Ziva Spa Karol Bagh, New Delhi',
    description: 'Privacy guidelines and guest confidentiality standards for Ziva Spa in Karol Bagh, New Delhi.',
    keywords: 'Ziva Spa privacy policy, guest confidentiality, Karol Bagh spa',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Privacy Policy', item: 'https://zivaspa.online/privacy-policy' },
    ],
  },
  {
    path: '/terms-conditions',
    title: 'Terms & Conditions | Ziva Spa Karol Bagh, New Delhi',
    description: 'Official sanctuary policies, arrival etiquette, and appointment cancellation terms for Ziva Spa in Karol Bagh, New Delhi.',
    keywords: 'Ziva Spa terms and conditions, spa cancellation policy, arrival etiquette Karol Bagh',
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Terms & Conditions', item: 'https://zivaspa.online/terms-conditions' },
    ],
  },
];

// Append individual service pages
services.forEach((service) => {
  staticRoutes.push({
    path: `/services/${service.id}`,
    title: `${service.name} in Karol Bagh, New Delhi | Ziva Spa`,
    description: `${service.desc} Book ${service.name} (${service.duration} mins, ₹${service.price}) at Ziva Spa on Arya Samaj Road, Opposite Gaffar Market, Karol Bagh, New Delhi.`,
    keywords: `${service.name}, ${service.name} Karol Bagh, massage in Karol Bagh, spa in Karol Bagh New Delhi, spa near Gaffar Market, Ziva Spa`,
    ogImage: service.image,
    serviceData: service,
    breadcrumbs: [
      { name: 'Home', item: 'https://zivaspa.online/' },
      { name: 'Services', item: 'https://zivaspa.online/services' },
      { name: service.name, item: `https://zivaspa.online/services/${service.id}` },
    ],
  });
});

console.log(`Generating pre-rendered static SEO HTML for ${staticRoutes.length} canonical routes...`);

let generatedCount = 0;

staticRoutes.forEach((route) => {
  const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalUrl = `https://zivaspa.online${route.path}`;
  const ogImg = route.ogImage
    ? `https://zivaspa.online${route.ogImage.startsWith('/') ? '' : '/'}${route.ogImage}`
    : 'https://zivaspa.online/images/hero_luxury_spa_sanctuary_1794307111404.jpg';

  let html = baseIndexHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`);

  // Replace Meta Keywords
  html = html.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${route.keywords.replace(/"/g, '&quot;')}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace Open Graph Tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${ogImg}" />`);

  // Replace Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${ogImg}" />`);

  // Structured Data construction
  const breadcrumbSchema = route.breadcrumbs ? {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: route.breadcrumbs.map((bc, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: bc.name,
      item: bc.item,
    })),
  } : null;

  const pageGraph = [
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
      description: 'Premier luxury spa and wellness sanctuary on Arya Samaj Road, Opposite Gaffar Market, Karol Bagh, New Delhi. Offering certified Swedish, Deep Tissue, Balinese, Ayurvedic massage therapies, body scrubs, hydrotherapy, and private couple suites.',
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
        latitude: 28.6508,
        longitude: 77.1908,
      },
      hasMap: 'https://www.google.com/maps/search/?api=1&query=28.6508,77.1908',
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
      name: route.title,
      description: route.description,
      isPartOf: {
        '@id': 'https://zivaspa.online/#website',
      },
      ...(breadcrumbSchema ? { breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` } } : {}),
    },
  ];

  if (breadcrumbSchema) {
    pageGraph.push(breadcrumbSchema);
  }

  if (route.serviceData) {
    pageGraph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      serviceType: route.serviceData.name,
      name: `${route.serviceData.name} in Karol Bagh, New Delhi`,
      description: route.serviceData.desc,
      image: `https://zivaspa.online${route.serviceData.image}`,
      provider: {
        '@id': 'https://zivaspa.online/#localbusiness',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Karol Bagh' },
        { '@type': 'AdministrativeArea', name: 'New Delhi' },
      ],
      offers: {
        '@type': 'Offer',
        price: route.serviceData.price.toString(),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        url: canonicalUrl,
      },
    });
  }

  const structuredDataJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': pageGraph,
  });

  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
  );

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} static HTML pages for SEO!`);
