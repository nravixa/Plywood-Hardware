/**
 * ============================================================================
 * ABOUT PAGE CONFIGURATION & CLIENT DATA
 * ============================================================================
 * 
 * NOTE FOR CLIENT / DEVELOPER:
 * Replace the placeholders enclosed in brackets (e.g., "[Client Est. Year]",
 * "[Client Certification Code]") with your real company information.
 * All sections are modular and update automatically throughout the About page.
 */

export const aboutData = {
  // --------------------------------------------------------------------------
  // 1. HERO STATS
  // --------------------------------------------------------------------------
  heroStats: [
    {
      value: '30+ Years',
      label: 'Manufacturing Heritage',
      description: 'Three decades of precision timber & joinery engineering'
    },
    {
      value: '100%',
      label: 'Core Integrity',
      description: 'Zero-void calibrated hardwood & pine cores'
    },
    {
      value: '45+ Cities',
      label: 'Distribution Network',
      description: 'Pan-India architect & dealer specification network'
    },
    {
      value: '30-Year',
      label: 'Structural Warranty',
      description: 'Comprehensive core protection guarantee'
    }
  ],

  // --------------------------------------------------------------------------
  // 2. COMPANY STORY
  // --------------------------------------------------------------------------
  story: {
    eyebrow: 'Our Story & Heritage',
    title: 'Engineered from a Passion for Precision Surfaces & Enduring Motion',
    subtitle: 'From a dedicated timber workshop to a trusted architectural brand supplying calibrated substrates and precision hardware.',
    tagline: 'Crafted for architects, designers, and artisans who refuse to compromise on core quality.',
    paragraphs: [
      'Founded in 1993 in Mumbai, Maharashtra, our company began with a straightforward conviction: the invisible core of any interior space determines its lifetime strength and beauty. We saw too many luxury interiors fail prematurely due to uncalibrated plywood, hidden hollow pockets, seasonal door warping, and corroding hardware fittings.',
      'To solve this, we invested in high-precision quadruple hydraulic calibration lines, unextended phenolic resin bonding, and automated composer stitching. Over time, we expanded our precision engineering into architectural hardware—crafting vacuum PVD solid brass handles, whisper-silent magnetic locks, and 200,000-cycle hydraulic hinges to offer a unified, turnkey substrate and motion ecosystem.',
      'Today, our products power prestigious residential villas, corporate headquarters, 5-star hospitality resorts, boutique retail showrooms, and bespoke designer furniture across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Goa, Ahmedabad, and international architectural fit-outs.'
    ],
    milestones: [
      {
        year: '1993',
        title: 'Founding & First Calibration Line',
        desc: 'Established our initial manufacturing facility with multi-day hot presses and hydraulic calibration in Maharashtra.'
      },
      {
        year: '2004',
        title: 'BWP Phenolic Resin & Marine Grade Rollout',
        desc: 'Introduced 72-hour boiling water proof substrates formulated with unextended phenolic resins.'
      },
      {
        year: '2016',
        title: 'Architectural Hardware Division Launch',
        desc: 'Expanded into vacuum-PVD solid brass handles, concealed 3D hinges, and soft-close drawer systems.'
      },
      {
        year: '2024',
        title: 'Turnkey Architectural Specifier Network',
        desc: 'Partnered with over 450+ leading architectural studios, interior fit-out contractors, and nationwide dealer galleries.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    detailImage: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=900&q=85'
  },

  // --------------------------------------------------------------------------
  // 3. OUR PHILOSOPHY
  // --------------------------------------------------------------------------
  philosophy: {
    eyebrow: 'Design & Manufacturing Ethics',
    title: 'The Four Pillars of Our Architectural Philosophy',
    subtitle: 'Every sheet of plywood and every hardware fitting is guided by four non-negotiable principles.',
    pillars: [
      {
        num: '01',
        title: 'Substrate Integrity (Zero Hollow Voids)',
        desc: 'True architectural luxury begins where no one looks. Our core veneers are stitched edge-to-edge by automated composers, eliminating all internal overlapping, core gaps, and hidden weak spots.',
        highlight: '100% solid core guarantee across every cut'
      },
      {
        num: '02',
        title: 'Kinetic Precision (Silent & Frictionless)',
        desc: 'Hardware is the physical touchpoint between human touch and architecture. We test all hinges, drawer slides, and latches to ensure whisper-silent actuation (<24 dB) and fluid dampening.',
        highlight: 'Tested up to 200,000 continuous motion cycles'
      },
      {
        num: '03',
        title: 'Material Authenticity (No Synthetic Fillers)',
        desc: 'We utilize genuine plantation hardwoods, Gurjan core veneers, kiln-seasoned pine, and virgin IS:319 forged brass. We never dilute our resins or compromise on metal wall thicknesses.',
        highlight: 'Unextended phenolic resins & forged virgin brass'
      },
      {
        num: '04',
        title: 'Generational Longevity (Built for Decades)',
        desc: 'We engineer materials to withstand harsh tropical climates, coastal sea salinity, severe monsoons, and heavy commercial footfall without warping, swelling, or tarnishing.',
        highlight: 'Comprehensive warranty up to 30 years'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. PLYWOOD EXPERTISE
  // --------------------------------------------------------------------------
  plywoodExpertise: {
    eyebrow: 'Timber Engineering Competence',
    title: 'Precision Calibration & Cross-Laminated Mastery',
    subtitle: 'How our timber processing technology delivers uncompromising flatness, screw-holding grip, and boiling waterproof reliability.',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1400&q=85',
    points: [
      {
        title: '4X Quad-Press Calibration',
        desc: 'Automated hydraulic sanders and quad-press calibration eliminate surface undulations, delivering a uniform ±0.15mm thickness variance ideal for high-gloss acrylic and veneer pressing.'
      },
      {
        title: 'Automated Composer Core Stitching',
        desc: 'Veneers are joined edge-to-edge with thermal glue threads, preventing internal overlapping and hollow voids when carpenters make CNC sink cutouts or joinery mitres.'
      },
      {
        title: '100% Unextended Phenol Formaldehyde Bonding',
        desc: 'Synthetic phenolic resin cross-links under extreme heat (140°C) and hydraulic pressure, creating molecular bonds impervious to 72+ hours of boiling water immersion.'
      },
      {
        title: 'Vacuum Pressure Preservative Impregnation',
        desc: 'Deep chemical autoclaving infuses anti-termite and anti-borer micro-capsules directly into wood fibers, preventing pest infestation in humid tropical climates.'
      }
    ],
    technicalHighlights: [
      { label: 'Surface Tolerance', value: '±0.15mm' },
      { label: 'Boiling Proof Test', value: '72+ Hours' },
      { label: 'Screw Retention', value: '>3,200 N' },
      { label: 'Moisture Content', value: '<10% MC' }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. HARDWARE EXPERTISE
  // --------------------------------------------------------------------------
  hardwareExpertise: {
    eyebrow: 'Motion & Metallic Engineering',
    title: 'Molecular PVD Finishes & Fluid Hydraulic Motion',
    subtitle: 'Architectural fittings engineered with forged virgin brass, aircraft-grade dampers, and titanium vacuum coatings.',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1400&q=85',
    points: [
      {
        title: 'Physical Vapor Deposition (PVD) Molecular Coating',
        desc: 'Titanium and zirconium vaporized in high-vacuum plasma chambers bonds molecularly to solid brass, creating a scratch-resistant finish tested to withstand 240 hours of salt spray.'
      },
      {
        title: '3D Cam Clip-On Concealed Hinges',
        desc: 'European DIN EN 15570 Level 3 certified hinges with built-in hydraulic pistons, 3-way cam micro-adjustments, and whisper-quiet soft-close operation tested to 200,000 cycles.'
      },
      {
        title: '13mm Ultra-Slim Double Wall Drawers',
        desc: 'Razor-thin straight steel side profiles with synchronized rack-and-pinion undermount slides, supporting 45kg to 65kg heavy utensil loads with zero track deflection.'
      },
      {
        title: 'Magnetic Whisper-Silent Latches & Heavy Pivots',
        desc: 'Magnetic latch bolts retract completely flush when doors are open, eliminating noisy mechanical strikes and supporting oversized 150kg frameless pivot doors.'
      }
    ],
    technicalHighlights: [
      { label: 'Salt Spray Resistance', value: '240h SST' },
      { label: 'Hinge Cycle Life', value: '200,000 Cycles' },
      { label: 'Drawer Dynamic Load', value: 'Up to 65kg' },
      { label: 'Acoustic Sound Level', value: '<24 dB Silent' }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. QUALITY STANDARDS & TESTING
  // --------------------------------------------------------------------------
  qualityStandards: {
    eyebrow: 'In-House Laboratory & Quality Control',
    title: '6-Stage Laboratory Quality Verification',
    subtitle: 'Every production batch undergoes destructive testing, dimension audits, and cycle verification before packaging.',
    tests: [
      {
        num: '01',
        title: '72-Hour Boiling Water Immersion Test',
        desc: 'Sample blocks are boiled continuously for 72+ hours in certified water baths to verify zero ply separation, delamination, or swelling.'
      },
      {
        num: '02',
        title: 'Digital Micrometer Calibration Audit',
        desc: 'Every panel is scanned at 12 distinct edge and center points to guarantee strict ±0.15mm thickness uniformity.'
      },
      {
        num: '03',
        title: 'Screw Holding & Edge Pull-Out Test',
        desc: 'Mechanical tension testing ensures face screw retention exceeds 3,200 N and edge retention exceeds 2,500 N.'
      },
      {
        num: '04',
        title: '240-Hour Salt Spray Corrosion Chamber',
        desc: 'Hardware samples undergo continuous neutral salt mist exposure (ASTM B117) to verify coastal tarnish resistance.'
      },
      {
        num: '05',
        title: '200,000-Cycle Actuation Rig Testing',
        desc: 'Hinges and drawer runners are mounted to weighted shutters and cycled automatically for 200,000 open/close sequences.'
      },
      {
        num: '06',
        title: 'Formaldehyde Emission & Air Quality Check',
        desc: 'Chamber testing ensures compliance with ultra-low formaldehyde emission benchmarks (E0 / E1 / CARB Phase 2).'
      }
    ],
    clientCertifications: [
      {
        code: 'BIS IS:710 Marine',
        title: 'Marine Plywood Benchmark',
        desc: 'Certified boiling waterproof compliance for high moisture and coastal areas.'
      },
      {
        code: 'BIS IS:303 Moisture Resistant',
        title: 'Commercial & Moisture Resistant',
        desc: 'Rigid quality standards for interior residential and commercial casework.'
      },
      {
        code: 'BIS IS:5509 Class 1',
        title: 'Fire-Retardant Substrate',
        desc: 'Certified flame delay penetration compliance meeting National Building Codes.'
      },
      {
        code: 'DIN EN 15570 & ISO 9001',
        title: 'Hardware Motion Standards',
        desc: 'Concealed hinge and slide mechanical cycle testing compliance.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. SUSTAINABLE SOURCING
  // --------------------------------------------------------------------------
  sourcing: {
    eyebrow: 'Responsible Agro-Forestry & Origin',
    title: 'Committed to Sustainable Agro-Forestry & Ethical Sourcing',
    subtitle: 'We balance architectural performance with environmental stewardship by harvesting plantation timber responsibly.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1400&q=85',
    commitments: [
      {
        title: '100% Plantation & Agro-Forestry Timber',
        desc: 'Our hardwood core veneers and pine blocks are harvested from regulated agricultural timber farms, preserving natural old-growth forest reserves.'
      },
      {
        title: 'Chain-of-Custody Traceability',
        desc: 'Every log lot is tagged with origin data and legally sourced documentation from certified forestry supply chains.'
      },
      {
        title: 'Zero Waste Wood Residue Utilization',
        desc: 'Bark and trimming off-cuts are processed into biomass fuel for plant steam boilers, reducing reliance on fossil fuels.'
      },
      {
        title: 'Closed-Loop Resin & Water Filtration',
        desc: 'Our manufacturing facilities operate zero-discharge water treatment plants, reclaiming and recycling all process water.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. TEAM & LEADERSHIP
  // --------------------------------------------------------------------------
  team: {
    eyebrow: 'People Behind The Precision',
    title: 'Experienced Leadership & Technical Craftsmen',
    subtitle: 'A dedicated multidisciplinary team of timber technologists, mechanical hardware engineers, and architectural project consultants.',
    members: [
      {
        name: 'Rajesh K. Singhania',
        role: 'Founder & Managing Director',
        experience: '32+ Years Experience',
        bio: 'Leading manufacturing strategy, timber procurement, and quality control systems across all plant operations.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ar. Vikramaditya Sen',
        role: 'Director of Timber Engineering',
        experience: '24+ Years Experience',
        bio: 'Oversees automated composer stitching, hydraulic calibration lines, and resin formulation labs.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Elena Rostova',
        role: 'Head of Hardware & Motion Systems',
        experience: '18+ Years Experience',
        bio: 'Specializes in vacuum PVD surface technology, hydraulic damping mechanics, and European cycle testing standards.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ananya Deshmukh',
        role: 'Principal Architectural Specifier',
        experience: '15+ Years Experience',
        bio: 'Liaises directly with architectural studios and turnkey interior fit-out contractors on custom project tenders.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 9. WHY CUSTOMERS CHOOSE US
  // --------------------------------------------------------------------------
  whyChooseUs: {
    eyebrow: 'The Specifier Advantage',
    title: 'Why Leading Architects, Contractors & OEM Makers Choose Us',
    subtitle: 'A single, trusted source for guaranteed substrate stability and precision architectural movement.',
    reasons: [
      {
        num: '01',
        title: 'Integrated Plywood + Hardware Synergies',
        desc: 'No more finger-pointing between plywood suppliers and hardware vendors. Our substrates and fittings are engineered to work harmoniously together from day one.'
      },
      {
        num: '02',
        title: 'Zero Telegraphing on High-Gloss & Acrylic',
        desc: 'Our 4X quad-calibration ensures a mirror-flat surface without wavy ripples under high-gloss laminates, acrylic sheets, and natural architectural veneers.'
      },
      {
        num: '03',
        title: 'Lifetime Coastal & Monsoon Durability',
        desc: 'Engineered specifically for high humidity, coastal salinity, and seasonal monsoons with 100% Gurjan BWP cores and 240-hour salt-spray tested PVD hardware.'
      },
      {
        num: '04',
        title: 'Direct Specifier Kits & Swift Dispatch',
        desc: 'We provide architects with curated sample kits containing real calibrated blocks, veneer flitches, and working hardware prototypes within 48 hours.'
      },
      {
        num: '05',
        title: 'Full Technical BOM & CAD Assistance',
        desc: 'Our technical team calculates Bill-of-Materials, recommends exact substrate thicknesses, and provides 3D hardware drilling templates for turnkey projects.'
      },
      {
        num: '06',
        title: 'Transparent Batch Warranties',
        desc: 'Every shipment is backed by written warranty certificates and verified batch testing reports for complete peace of mind on high-value projects.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 10. CALL TO ACTION (CTA)
  // --------------------------------------------------------------------------
  cta: {
    eyebrow: 'Start Your Project',
    title: 'Experience the Calibrated Precision of Our Substrates & Hardware',
    subtitle: 'Request a complimentary architect sample box containing physical timber blocks, veneer swatches, and working PVD hardware mechanisms.',
    primaryButtonText: 'Request Specifier Sample Box',
    secondaryButtonText: 'Consult Project Engineer',
    contactNote: 'Direct technical assistance available for architects, interior designers, and commercial builders.'
  }
};
