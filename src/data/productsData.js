export const categories = [
  {
    id: 'all',
    name: 'All Collections',
    subtitle: 'Complete Architectural Catalog',
    description: 'Explore our comprehensive selection of calibrated timber substrates, decorative surfaces, precision fittings, and accessories.'
  },
  {
    id: 'plywood',
    name: 'Plywood',
    subtitle: 'IS:710 Marine & Calibrated Panels',
    description: '100% Selected Gurjan core bonded with unextended Phenol Formaldehyde resin. Passes 72h boiling water immersion with zero delamination.',
    specs: '6mm to 25mm • IS:710 / IS:5509 • 30-Yr Warranty',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'blockboard',
    name: 'Blockboard',
    subtitle: 'Kiln-Seasoned Pine Batten Boards',
    description: 'Constructed with solid New Zealand pine wood battens. Engineered specifically for tall 9ft wardrobe shutters and long-span tables.',
    specs: '19mm, 25mm, 30mm • IS:1659 • Zero-Sag Core',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mdf-hdf',
    name: 'MDF/HDF',
    subtitle: 'High-Density HDHMR Fiberboards',
    description: 'Engineered wood fiber panels with uniform internal density (>850 kg/m³) tailored for precision CNC routing and high-gloss PU paint.',
    specs: '3mm to 25mm • HDHMR Grade • Moisture Proof',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'laminates',
    name: 'Laminates',
    subtitle: 'Architectural Matte & Compact Surfaces',
    description: 'High-pressure decorative laminates featuring synchronized wood textures, thermal healable matte surfaces, and zero-glare finishes.',
    specs: '0.8mm to 1.5mm • Anti-Bacterial • Scratch Proof',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'veneers',
    name: 'Veneers',
    subtitle: 'Artisanal Natural & Smoked Exotic Faces',
    description: '0.55mm quarter-cut and crown-cut natural Burma teak, American walnut, and white oak bonded onto calibrated hardwood substrates.',
    specs: '4mm & 19mm • Book-Matched • E0 Certified',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'hardware',
    name: 'Hardware',
    subtitle: 'Concealed Onyx Hinges & PVD Handles',
    description: 'European DIN EN 15570 Level 3 certified fittings with 200,000 cycle hydraulic damping and 240-hour salt spray corrosion resistance.',
    specs: '45kg Dynamic Load • PVD Gold • 15-Yr Warranty',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'adhesives',
    name: 'Adhesives',
    subtitle: 'D3/D4 Marine Grade Crosslinking Adhesives',
    description: 'High-solid structural wood bonding adhesives with waterproof boiling resistance and zero-VOC indoor air compliance.',
    specs: 'BWP Grade D3/D4 • Fast Setting • Non-Toxic',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    subtitle: 'Edge Banding Tapes, Fasteners & Insets',
    description: 'Color-matched 1.2mm PVC/ABS edge tapes, solid brass architectural fasteners, and hidden magnetic alignment accessories.',
    specs: 'Color-Matched • UV Resistant • High Adhesion',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80'
  }
];

export const products = [
  // =========================================================================
  // 1. PLYWOOD COLLECTION
  // =========================================================================
  {
    id: 'ply-01',
    name: 'PLYARCH Club Marine 710 (BWP)',
    category: 'plywood',
    categoryName: 'Plywood',
    tagline: '100% Selected Gurjan Core with Quad-Layer Calibration',
    description: 'Our premier structural marine plywood manufactured with 100% imported Gurjan hardwood core veneers and bonded with pure unextended Phenol Formaldehyde synthetic resin. Passes 72+ hours continuous boiling water immersion testing with zero core delamination or ply swelling.',
    grade: 'IS:710 BWP Marine',
    warranty: '30-Year Guarantee',
    thickness: '6mm, 9mm, 12mm, 16mm, 19mm, 25mm',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)', '7ft x 4ft (2140 x 1220 mm)', '7ft x 3ft (2140 x 920 mm)'],
    coreSpecies: '100% Imported Gurjan Hardwood',
    density: '780 – 820 kg/m³',
    bondingResin: '100% Unextended Phenolic Resin',
    emission: 'E0 Low Emission Standard',
    finish: 'Quad-Sanded Calibrated Face (±0.15mm)',
    specSheetCode: 'SPEC-PLY-01-BWP',
    features: [
      '72+ Hours boiling water resistance with zero core delamination',
      'Quad-press calibration delivers mirror-flat ±0.15mm thickness precision',
      '100% zero-void Gurjan core composition stitched by automated composers',
      'Vacuum pressure treated with anti-termite and anti-borer micro-capsules'
    ],
    applications: ['Luxury Modular Kitchens', 'Yacht & Marine Interiors', 'Bathroom Vanities', 'High-Load Wet Zone Casework'],
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'Flagship Grade'
  },
  {
    id: 'ply-02',
    name: 'PLYARCH Calibra Pro 4X',
    category: 'plywood',
    categoryName: 'Plywood',
    tagline: 'Uniform Thickness Tolerance ±0.15mm for Precision CNC',
    description: 'Engineered specifically for precision CNC routering, edge-banding, and high-gloss acrylic or PET laminate pressing. Undergoes 4-stage automated hydraulic pressing ensuring perfectly flat, warp-free architectural substrates with zero surface telegraphing ripples.',
    grade: 'IS:303 / IS:710 Calibrated',
    warranty: '25-Year Guarantee',
    thickness: '12mm, 16mm, 18mm, 25mm',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)', '7ft x 4ft (2140 x 1220 mm)'],
    coreSpecies: 'Eucalyptus & Selected Hardwoods',
    density: '750 – 780 kg/m³',
    bondingResin: 'Fortified Melamine Synthetic Resin',
    emission: 'E1 Architectural Class',
    finish: '120-Grit Diamond Calibrated Caliper',
    specSheetCode: 'SPEC-PLY-02-CALIB',
    features: [
      'Eliminates surface ripples and telegraphing under high-gloss laminates',
      'Quad-layer hydraulic hot pressing for uniform internal density',
      'High screw holding strength exceeding 3,200 N on face profiles',
      'Dimensionally stable across extreme climate and seasonal humidity shifts'
    ],
    applications: ['Modular Wardrobes', 'CNC Carved Wall Paneling', 'Acoustic Ceilings', 'Flush Door Substrates'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'CNC Perfect'
  },
  {
    id: 'ply-03',
    name: 'PLYARCH PyroShield FR (Fire Retardant)',
    category: 'plywood',
    categoryName: 'Plywood',
    tagline: 'Self-Extinguishing Class 1 Flame Spread Treated Marine Ply',
    description: 'Chemically impregnated under high-pressure vacuum autoclaves with inorganic fire-retardant chemistry. Certified to BIS IS:5509 Class 1 standards, offering superior resistance to ignition, delayed flame penetration over 35 minutes, and minimal non-toxic smoke release.',
    grade: 'IS:5509 Class 1 Fire Retardant',
    warranty: '25-Year Guarantee',
    thickness: '12mm, 16mm, 19mm, 25mm',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)'],
    coreSpecies: 'Vacuum-Treated Hardwood Core',
    density: '800 – 830 kg/m³',
    bondingResin: 'Phenolic Fire-Retardant Adhesive',
    emission: 'Class 1 Low Toxic Smoke Emission',
    finish: 'Reddish-Brown Protective Core Impregnation',
    specSheetCode: 'SPEC-PLY-03-FIRE',
    features: [
      'Delays flame penetration over 35 minutes under high direct heat',
      'National Building Code (NBC 2016) and BIS certified fire safety compliance',
      'Low smoke generation density preventing toxic asphyxiation risks',
      'Resistant to water leaching with permanent chemical retention'
    ],
    applications: ['Commercial Towers & Malls', 'Airports & Executive Lounges', 'Hospitality Corridors', 'Auditorium Acoustic Paneling'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    badge: 'Fire Rated'
  },
  {
    id: 'ply-04',
    name: 'PLYARCH Baltic Birch 13-Ply Multi-Panel',
    category: 'plywood',
    categoryName: 'Plywood',
    tagline: '100% Solid European Birch with Exposed Striped Edge',
    description: 'Solid void-free cross-laminated European Birch panels with 13 micro-layers of 1.4mm hardwood veneers. Renowned for its iconic multi-layered striped edge profile that architects and furniture craftsmen polish raw with organic hard-wax oils.',
    grade: 'EN 636-2 Class 3 WBP',
    warranty: 'Lifetime Core Guarantee',
    thickness: '6mm, 9mm, 12mm, 15mm, 18mm, 24mm',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)', '5ft x 5ft (1525 x 1525 mm)'],
    coreSpecies: '100% European Baltic Birch (13 Plies)',
    density: '710 – 740 kg/m³',
    bondingResin: 'WBP Exterior Weatherproof Phenolic',
    emission: 'CARB Phase 2 / E0 Certified',
    finish: 'Fine Sanded BB/BB Furniture Grade',
    specSheetCode: 'SPEC-PLY-04-BIRCH',
    features: [
      'Iconic multi-ply exposed striped edge polishes raw without edge tape',
      '100% void-free internal layers for high-torque joinery and CNC routing',
      'High tensile and flexural modulus supporting long cantilevered shelves',
      'Sourced from certified sustainable European agro-forestry reserves'
    ],
    applications: ['Exposed Edge Designer Joinery', 'Acoustic Ceiling Baffles', 'Cantilever Dining Tables', 'Boutique Display Niches'],
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'Design Icon'
  },

  // =========================================================================
  // 2. BLOCKBOARD COLLECTION
  // =========================================================================
  {
    id: 'bb-01',
    name: 'PLYARCH Prime Pine Batten Blockboard',
    category: 'blockboard',
    categoryName: 'Blockboard',
    tagline: 'Seasoned Solid Pine Core Batten Board with Gurjan Face',
    description: 'Constructed with kiln-seasoned (<10% moisture content) solid pine wood battens laid edge-to-edge. Engineered with balanced cross-ply hardwood veneers to guarantee zero sagging over tall 8ft to 10ft vertical shutter spans.',
    grade: 'IS:1659 Grade I BWP',
    warranty: '20-Year Anti-Warp Guarantee',
    thickness: '19mm, 25mm, 30mm',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)', '7ft x 4ft (2140 x 1220 mm)'],
    coreSpecies: 'Kiln-Seasoned Pine Battens + Gurjan Face',
    density: '590 – 620 kg/m³',
    bondingResin: 'BWP Synthetic Phenolic Resin',
    emission: 'E1 Class Indoor Safe',
    finish: 'Dual-Side Calibrated Smooth Face',
    specSheetCode: 'SPEC-BB-01-PINE',
    features: [
      'Zero-bend guarantee over tall 8ft to 10ft vertical wardrobe shutter spans',
      'Kiln-seasoned pine battens eliminate internal timber shrinkage and warp',
      'Substantially lighter than solid wood while offering equivalent load capacity',
      'Solid screw retention (>3,200 N) on both face and edge profiles'
    ],
    applications: ['Tall Wardrobe Shutters (8ft-10ft)', 'Solid Dining Tables', 'Long Horizontal Shelves', 'Partitions'],
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    badge: 'Zero-Sag Core'
  },
  {
    id: 'bb-02',
    name: 'PLYARCH Solid Hardwood Flush Door Core',
    category: 'blockboard',
    categoryName: 'Blockboard',
    tagline: 'Engineered Hardwood Frame with Lock-Rail Reinforcement',
    description: 'Heavy solid core flush doors constructed with preservative-infused hardwood battens and reinforced double lock rails on both vertical edges to support heavy commercial mortise handles, magnetic locks, and concealed pivots.',
    grade: 'IS:2202 Flush Door BWP',
    warranty: '25-Year Anti-Borer Guarantee',
    thickness: '30mm, 32mm, 35mm, 40mm',
    availableSizes: ['7ft x 3ft (2140 x 920 mm)', '7ft x 3.5ft (2140 x 1070 mm)', '8ft x 4ft (2440 x 1220 mm)'],
    coreSpecies: 'Preservative Infused Hardwood Battens',
    density: '680 – 720 kg/m³',
    bondingResin: '100% Waterproof Phenolic Resin',
    emission: 'E0 Low Formaldehyde',
    finish: 'Calibrated Hardwood Face',
    specSheetCode: 'SPEC-BB-02-DOOR',
    features: [
      'Acoustic sound isolation (STC 42+) ensuring peaceful guestroom privacy',
      'Double lock-rail reinforcement on both sides for heavy commercial mortise cases',
      'Triple dip preservative treatment offering lifetime borer and termite immunity',
      'Warp-free core structure capable of handling high temperature differentials'
    ],
    applications: ['Hotel Guestroom Main Doors', 'Luxury Villa Double Doors', 'Acoustic Suite Entries', 'Hospitality Casework'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    badge: 'Heavy Door Core'
  },

  // =========================================================================
  // 3. MDF / HDF COLLECTION
  // =========================================================================
  {
    id: 'mdf-01',
    name: 'HDHMR AquaShield High-Density Board',
    category: 'mdf-hdf',
    categoryName: 'MDF/HDF',
    tagline: 'High Density 880 kg/m³ with Hydrophobic Core',
    description: 'Formulated with specialized moisture-resistant resin and dense hardwood fibers. Delivers flawless routered edges without chipping, fuzzing, or fiber swelling during high-gloss PU lacquering and 3D CNC cutting.',
    grade: 'IS:14587 Hydrophobic HDHMR',
    warranty: '15-Year Warranty',
    thickness: '5.5mm, 8mm, 12mm, 18mm, 25mm',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)'],
    coreSpecies: '100% High Density Hardwood Fibers',
    density: '880 kg/m³',
    bondingResin: 'Hydrophobic Polymeric Resin',
    emission: 'E1 Safe Indoor',
    finish: 'Ultra-Fine Diamond Calibrated',
    specSheetCode: 'SPEC-MDF-01-AQUA',
    features: [
      'Flawless razor-sharp CNC routering without wood chipping or fiber fuzzing',
      'High internal bond density (>880 kg/m³) suitable for deep 3D wave carving',
      'Hydrophobic moisture resistance for kitchen facades and bathroom paneling',
      'Silky smooth surface requires less primer paint coats for high-gloss PU'
    ],
    applications: ['CNC Carved 3D Wave Panels', 'Jali Partitions', 'Painted Modular Cabinet Facades', 'Decorative Niches'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'HDHMR Grade'
  },

  // =========================================================================
  // 4. LAMINATES COLLECTION
  // =========================================================================
  {
    id: 'lam-01',
    name: 'VEXA Thermal-Heal Soft-Matte Compact Laminate',
    category: 'laminates',
    categoryName: 'Laminates',
    tagline: 'Anti-Fingerprint Zero-Glare 1.0mm Architectural Surface',
    description: 'Engineered with electron beam curing technology providing micro-thermal scratch repairability, velvety soft-touch texture, and zero fingerprint retention. Ideal for luxury kitchen cabinets and executive desks.',
    grade: 'EN 438 Architectural Grade',
    warranty: '15-Year Surface Warranty',
    thickness: '1.0mm, 1.2mm, 6mm Compact',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)', '10ft x 4.25ft (3050 x 1300 mm)'],
    finish: 'Ultra-Matte Zero Refraction Face',
    durability: 'Anti-Microbial & Thermal Healable',
    specSheetCode: 'SPEC-LAM-01-VEXA',
    features: [
      'Micro-scratches thermally heal with a simple warm iron application',
      'Anti-fingerprint molecular coating keeps surfaces pristine without smudges',
      'Zero-glare low light reflectivity creates a velvety luxury ambiance',
      'High abrasion resistance tested to 3,000 revolutions Taber test'
    ],
    applications: ['Kitchen Counter Facades', 'Luxury Vanity Units', 'Executive Writing Desks', 'High-End Retail Fixtures'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'Anti-Fingerprint'
  },

  // =========================================================================
  // 5. VENEERS COLLECTION
  // =========================================================================
  {
    id: 'ven-01',
    name: 'Royal Crown Natural Burma Teak Veneer',
    category: 'veneers',
    categoryName: 'Veneers',
    tagline: '0.55mm Quarter-Cut Book-Matched Architectural Flitches',
    description: 'Exotic natural Burma Teak veneer leaves sliced from mature logs, displaying golden-brown honey tones and straight quarter-sawn grain patterns. Bonded onto calibrated hardwood marine substrates for lasting stability.',
    grade: 'Architectural Grade A+',
    warranty: '20-Year Bond Guarantee',
    thickness: '4mm & 18mm Veneered Boards',
    availableSizes: ['8ft x 4ft (2440 x 1220 mm)', '10ft x 4ft (3050 x 1220 mm)'],
    coreSpecies: 'Natural Burma Teak on Marine Substrate',
    finish: 'Raw Fine Sanded / Ready for PU & Hard-Wax Oil',
    emission: 'E0 Certified Formaldehyde',
    specSheetCode: 'SPEC-VEN-01-TEAK',
    features: [
      'Authentic natural golden patina that deepens gracefully with age',
      'Book-matched sequence grain flitches for grand continuous wall paneling',
      'Bonded onto calibrated hardwood substrates preventing veneer checking',
      'High natural oil content providing inherent moisture and insect defense'
    ],
    applications: ['Luxury Villa Living Room Walls', 'Executive Boardroom Feature Walls', 'Designer Credenzas', 'Master Headboards'],
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'Natural Teak'
  },

  // =========================================================================
  // 6. HARDWARE COLLECTION
  // =========================================================================
  {
    id: 'hw-01',
    name: 'AURA 3D Soft-Close Titanium Onyx Hinge',
    category: 'hardware',
    categoryName: 'Hardware',
    tagline: '200,000 Cycle Tested 3D Cam Concealed Hinge with Integrated Damper',
    description: 'European DIN EN 15570 Level 3 certified clip-on concealed hinge system. Features integrated dual-stage hydraulic damping pistons, 3-way cam micro-adjustments, and vacuum Titanium Onyx anti-corrosion coating.',
    grade: 'DIN EN 15570 Level 3 Certified',
    warranty: '15-Year Mechanism Warranty',
    thickness: 'Suitable for 16mm – 25mm Shutters',
    availableSizes: ['Full Overlay (0 Crank)', 'Half Overlay (8 Crank)', 'Inset (15 Crank)'],
    coreSpecies: 'Forged Steel with Titanium Onyx PVD',
    durability: '200,000 Cycles Tested (<24 dB Silent)',
    saltSpray: '120 Hours Neutral Salt Spray Tested',
    specSheetCode: 'SPEC-HW-01-AURA',
    features: [
      'Whisper-silent <24 dB soft-close damping tested to 200,000 cycles',
      '3D Cam eccentric screw alignment for effortless door leveling (X, Y, Z axis)',
      'Titanium Onyx electro-chemical finish resistant to steam and citrus acids',
      'Tool-free clip-on assembly mechanism for rapid factory and on-site fit-out'
    ],
    applications: ['Luxury Kitchen Cabinet Shutters', 'Wardrobe Doors', 'Bathroom Vanity Mirrors', 'Commercial Casework'],
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: '200k Cycles'
  },
  {
    id: 'hw-02',
    name: 'VELOX Slim Box 13mm Double-Wall Drawer',
    category: 'hardware',
    categoryName: 'Hardware',
    tagline: '13mm Razor-Thin Straight Metal Walls with 45kg Synchronized Slides',
    description: 'Architectural double-wall metal drawer system featuring ultra-thin 13mm straight side walls, rack-and-pinion synchronized undermount runners, and fluid soft-closing motion under heavy 45kg to 65kg dynamic loads.',
    grade: 'DIN EN 15338 Level 3 Certified',
    warranty: '15-Year Performance Warranty',
    thickness: 'Side Wall: 13mm Straight Profile',
    availableSizes: ['Lengths: 350mm, 400mm, 450mm, 500mm, 550mm', 'Heights: 88mm, 126mm, 172mm, 238mm'],
    coreSpecies: 'Extruded Steel with Anthracite / Bronze Finish',
    durability: '100,000 Drawer Open/Close Cycles',
    saltSpray: '120 Hours Salt Spray Tested',
    specSheetCode: 'SPEC-HW-02-VELOX',
    features: [
      '13mm ultra-thin vertical side walls maximize usable drawer interior volume',
      'Synchronized rack-and-pinion undermount slides eliminate lateral track wobble',
      '45kg to 65kg heavy dynamic load capacity for cast iron pans and marble tops',
      'Available in Matte Anthracite, Titanium Silver, and Champagne Bronze'
    ],
    applications: ['Modular Kitchen Deep Drawers', 'Cutlery Organizers', 'Wardrobe Velvet Trays', 'Executive Office Pedestals'],
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'Slim 13mm'
  },
  {
    id: 'hw-03',
    name: 'KRONOS Solid Forged Brass PVD Mortise Lever',
    category: 'hardware',
    categoryName: 'Hardware',
    tagline: 'IS:319 Forged Virgin Brass with 240-Hour Salt Spray PVD Finish',
    description: 'Architectural door lever handle forged from IS:319 Grade 1 virgin brass alloy and finished in vacuum Physical Vapor Deposition (PVD) Champagne Gold. Immune to coastal salt spray corrosion, fingerprint tarnishing, and sweat acidity.',
    grade: 'IS:319 Virgin Brass / 240h SST',
    warranty: '25-Year Tarnish Warranty',
    thickness: 'Suitable for 32mm – 55mm Door Thickness',
    availableSizes: ['Lever Length: 145mm', 'Rose Diameter: 52mm Flush Round/Square'],
    coreSpecies: 'Forged Virgin Brass with Vacuum PVD',
    durability: '500,000 Door Operations Tested',
    saltSpray: '240 Hours Continuous Salt Spray (ASTM B117)',
    specSheetCode: 'SPEC-HW-03-KRONOS',
    features: [
      'Solid forged virgin brass provides a substantial, weighted luxury feel',
      'Vacuum PVD molecular coating immune to coastal salinity and sweat tarnishing',
      'High-durability internal return spring mechanism prevents handle sagging',
      'Supplied with high-security euro-profile computerized brass cylinder lock'
    ],
    applications: ['Main Entrance Doors', 'Luxury Bedroom Master Suites', 'Beachfront Resort Villas', 'Private Boardrooms'],
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    badge: 'PVD Gold 240h'
  },
  {
    id: 'hw-04',
    name: 'AXIS Heavy-Duty 150kg Concealed Floor Pivot',
    category: 'hardware',
    categoryName: 'Hardware',
    tagline: 'Concealed 360-Degree Pivot System for Oversized Entrance Doors',
    description: 'Engineered for grand frameless architectural entrance doors up to 150kg and 3000mm in height. Features 360-degree rotation, dual 90-degree hold-open positioning, and adjustable hydraulic closing speeds.',
    grade: 'EN 1154 Certified Heavy Pivot',
    warranty: '15-Year Warranty',
    thickness: 'Suitable for 40mm – 80mm Door Thickness',
    availableSizes: ['Max Door Width: 1500mm', 'Max Door Height: 3200mm', 'Max Weight: 150kg'],
    coreSpecies: 'High-Tensile Stainless Steel & Brass Bushings',
    durability: '300,000 Pivot Operation Cycles',
    specSheetCode: 'SPEC-HW-04-PIVOT',
    features: [
      'Supports grand oversized architectural doors weighing up to 150kg',
      'Concealed floor fitting requires only shallow 40mm floor mortising',
      'Dual 90° hold-open and smooth soft-closing hydraulic dampening',
      '3-Axis micro-adjustments for perfect door alignment and floor gap clearance'
    ],
    applications: ['Boutique Flagship Storefronts', 'Grand Villa Entrance Doors', 'Pivot Room Partitions', 'Hotel Lobby Glass Doors'],
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    badge: '150kg Pivot'
  },

  // =========================================================================
  // 7. ADHESIVES COLLECTION
  // =========================================================================
  {
    id: 'adh-01',
    name: 'ARCH-BOND D4 Crosslinking Marine Adhesive',
    category: 'adhesives',
    categoryName: 'Adhesives',
    tagline: 'Waterproof DIN EN 204 D4 Fast-Setting Structural Wood Adhesive',
    description: 'Single-component cross-linking PVAc wood adhesive certified to DIN EN 204 D4 standards. Formulated for high-strength waterproof bonding of marine plywood, veneers, and solid blockboards with fast 30-minute setting time.',
    grade: 'DIN EN 204 Class D4 Waterproof',
    warranty: 'Lifetime Bond Guarantee',
    thickness: 'Liquid Synthetic Emulsion (500g, 1kg, 5kg, 20kg Buckets)',
    availableSizes: ['1 kg Dispenser Bottle', '5 kg Contractor Jar', '20 kg Industrial Bucket'],
    bondingResin: 'Cross-Linking PVAc Polymer',
    emission: 'Zero-VOC / Green Building Safe',
    specSheetCode: 'SPEC-ADH-01-BOND',
    features: [
      'Passes continuous boiling water immersion test with zero bond failure',
      'Fast setting time (30-45 minutes press time) speeding up joinery fit-out',
      'Zero-VOC eco-friendly formulation compliant with LEED green building standards',
      'Transparent glue line that does not stain natural wood grains or veneers'
    ],
    applications: ['Marine Plywood Joinery', 'Veneer & Laminate Pressing', 'High-Humidity Kitchen Cabinets', 'Outdoor Furniture Bonding'],
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    badge: 'D4 Waterproof'
  }
];

export const productFilters = [
  { id: 'all', name: 'All Products' },
  { id: 'plywood', name: 'Plywood & Marine' },
  { id: 'blockboard', name: 'Blockboard & Doors' },
  { id: 'mdf-hdf', name: 'HDHMR & MDF' },
  { id: 'laminates', name: 'Laminates' },
  { id: 'veneers', name: 'Veneers' },
  { id: 'hardware', name: 'Hardware & Fittings' },
  { id: 'adhesives', name: 'Marine Adhesives' }
];
