
import type { Product, Certification } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'APMDC A Grade Barite (Drilling)',
    description: 'Premium grade barite that meets and exceeds API Spec 13A for high-pressure drilling environments. Ideal for offshore operations.',
    imageUrl: 'https://picsum.photos/seed/product1/600/400',
    grade: 'APMDC A Grade',
    specificGravity: '4.20 min',
    particleSize: '97% passes 75-micron sieve',
    chemicalPurity: [
        'BaSO₄: 92% min',
        'Soluble Metals (Ca): 250 ppm max',
    ],
    applications: [
      'Offshore Oil & Gas Drilling',
      'High-Pressure Well Control',
      'Geothermal Drilling',
    ],
  },
  {
    id: 2,
    name: 'APMDC B Grade Barite (Drilling)',
    description: 'A reliable and cost-effective drilling grade barite meeting API Spec 13A standards for most onshore and standard drilling applications.',
    imageUrl: 'https://picsum.photos/seed/product2/600/400',
    grade: 'APMDC B Grade',
    specificGravity: '4.10 min',
    particleSize: '97% passes 75-micron sieve',
    chemicalPurity: [
        'BaSO₄: 90% min',
        'Soluble Metals (Ca): 250 ppm max',
    ],
    applications: [
      'Onshore Oil & Gas Drilling',
      'Standard Drilling Fluids',
      'Fracking',
    ],
  },
  {
    id: 3,
    name: 'White Barite (Paint & Coating)',
    description: 'High-whiteness, finely ground barite used as a functional filler and extender in paints and coatings to improve density, gloss, and smoothness.',
    imageUrl: 'https://picsum.photos/seed/product3/600/400',
    grade: 'Paint Grade',
    specificGravity: '4.35 - 4.45',
    particleSize: 'Varies by micronized grade',
    chemicalPurity: [
        'High Whiteness Index',
        'Low Oil Absorption',
    ],
    applications: [
      'Automotive Paint Primer',
      'Industrial & Decorative Paints',
      'Powder Coatings',
      'Inks',
    ],
  },
  {
    id: 4,
    name: 'Barite for Chemical Industry',
    description: 'High-purity barite (97% min BaSO₄) serving as the primary source material for the production of a wide range of barium compounds.',
    imageUrl: 'https://picsum.photos/seed/product4/600/400',
    grade: 'Chemical Grade 1',
    specificGravity: '~4.48',
    particleSize: 'Coarse to fine, as required',
    chemicalPurity: [
        'BaSO₄: 97% min',
        'Iron (Fe): 0.10% max',
        'Low water-soluble matter',
    ],
    applications: [
      'Barium Carbonate Production',
      'Barium Chloride & Sulphide',
      'Specialty Chemical Manufacturing',
    ],
  },
];

export const mockCertifications: Certification[] = [
    {
        id: 1,
        name: 'API Specification 13A',
        issuer: 'American Petroleum Institute',
        imageUrl: 'https://picsum.photos/seed/api-cert/500/300',
        documentUrl: '#',
    },
    {
        id: 2,
        name: 'ISO 9001:2015',
        issuer: 'International Organization for Standardization',
        imageUrl: 'https://picsum.photos/seed/iso-cert/500/300',
        documentUrl: '#',
    },
    {
        id: 3,
        name: 'IS 2881:1984',
        issuer: 'Bureau of Indian Standards',
        imageUrl: 'https://picsum.photos/seed/bis-cert/500/300',
        documentUrl: '#',
    },
     {
        id: 4,
        name: 'Environmental Compliance',
        issuer: 'State Pollution Control Board',
        imageUrl: 'https://picsum.photos/seed/env-cert/500/300',
        documentUrl: '#',
    },
];

export const mockTestimonials = [
  {
    id: 1,
    quote: "The consistency and purity of the APMDC A Grade barite have significantly improved our drilling fluid performance in deepwater projects. Their reliability is unmatched.",
    name: 'Ravi Kumar',
    company: 'Lead Engineer, Global Drilling Solutions'
  },
  {
    id: 2,
    quote: "We switched to GM Barite for our automotive primers, and the improvement in finish and gloss was immediate. Their technical data is thorough and accurate.",
    name: 'Anjali Sharma',
    company: 'Product Development Head, Spectrum Coatings'
  },
  {
    id: 3,
    quote: "As a large-scale chemical manufacturer, supply chain stability is critical. GM Barite has been a rock-solid partner, delivering high-purity material on time, every time.",
    name: 'Vikram Singh',
    company: 'Procurement Director, ChemiCorp International'
  }
];

export const mockCarouselImages = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/facility1/1280/720',
    caption: 'State-of-the-art crushing and processing facility at Mangampeta.'
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/equipment1/1280/720',
    caption: 'Precision-engineered micronization unit for ultra-fine powders.'
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/application1/1280/720',
    caption: 'High-grade barite powder ready for industrial application in paints.'
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/facility2/1280/720',
    caption: 'Automated bagging and logistics for efficient global delivery.'
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/equipment2/1280/720',
    caption: 'In-house quality control laboratory ensuring product purity.'
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/application2/1280/720',
    caption: 'Our product enhancing drilling fluids in the oil and gas industry.'
  },
];
