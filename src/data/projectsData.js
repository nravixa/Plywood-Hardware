export const projectCategories = [
  { id: 'all', name: 'All Projects', count: '14' },
  { id: 'residential', name: 'Residential', count: '2' },
  { id: 'commercial', name: 'Commercial', count: '2' },
  { id: 'office', name: 'Office', count: '2' },
  { id: 'hospitality', name: 'Hospitality', count: '2' },
  { id: 'furniture', name: 'Furniture', count: '2' },
  { id: 'kitchen', name: 'Kitchen', count: '2' },
  { id: 'wardrobe', name: 'Wardrobe', count: '2' }
];

export const projects = [
  {
    id: 'proj-sky-villa',
    title: 'The Sky Villa at Worli Seaface',
    category: 'residential',
    categoryName: 'Residential',
    application: 'Luxury Penthouse & Architectural Villa Interior',
    location: 'Worli Seaface, Mumbai',
    architect: 'Studio Lotus & KNS Architects',
    area: '14,500 sq.ft.',
    completion: '2025',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A multi-level beachfront penthouse overlooking the Arabian Sea featuring continuous teak wall panelling, flush-to-wall hidden pivot doors, and coastal-grade PVD Champagne Gold hardware.',
    challenge: 'High coastal salinity, persistent humidity fluctuations, and 9.5-foot door spans required zero-warp timber substrates and hardware tested beyond 240 hours salt spray.',
    solution: 'Engineered with 100% Gurjan BWP marine cores (IS:710) and vacuum PVD molecular coated solid brass hardware to ensure lifetime corrosion and tarnish immunity.',
    materialsUsed: [
      { name: 'PLYARCH Club Marine 710', spec: '100% Gurjan Core BWP (19mm & 25mm)', badge: 'IS:710 Marine' },
      { name: 'Quarter-Cut Burma Teak Veneer', spec: '0.55mm Natural Crown Flitches', badge: 'Architectural Grade' },
      { name: 'PLYARCH Calibra Pro 4X', spec: '18mm Quad-Calibrated Substrates', badge: '±0.15mm Calibrated' }
    ],
    hardwareUsed: [
      { name: 'KRONOS Solid Forged Brass Levers', spec: 'PVD Champagne Gold (240h SST)', badge: 'Salt-Spray Proof' },
      { name: 'MAGNA Magnetic Whisper Silent Latches', spec: '500,000 Cycles Acoustic Latches', badge: '<18 dB Silent' },
      { name: 'Concealed 3D Adjustable Floor Pivots', spec: '100kg Heavy Door Mechanism', badge: 'Invisible Flush' }
    ],
    stats: [
      { label: 'Plywood Supplied', val: '4,200 sq.mtr' },
      { label: 'Door Hardware', val: '180+ Sets' },
      { label: 'Warranty Period', val: '30 Years' }
    ]
  },
  {
    id: 'proj-nexgen-hq',
    title: 'Nexgen FinTech Global Headquarters',
    category: 'office',
    categoryName: 'Office',
    application: 'Corporate Boardrooms & Acoustic Workspaces',
    location: 'Whitefield, Bengaluru',
    architect: 'Morphogenesis',
    area: '85,000 sq.ft.',
    completion: '2024',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A state-of-the-art corporate tech campus incorporating parametric acoustic European Birch wave baffles, Class 1 fire-retardant wall paneling, and biometric smart glass security locks.',
    challenge: 'Stringent compliance with National Building Code (NBC 2016) fire safety ratings, high acoustic isolation (STC 44), and LEED Platinum zero-emission environmental certifications.',
    solution: 'IS:5509 Class 1 PyroShield fire-retardant substrates paired with E0 low-formaldehyde emission Birch acoustic baffles and EN 1154 overhead hydraulic closers.',
    materialsUsed: [
      { name: 'PLYARCH PyroShield FR', spec: 'IS:5509 Class 1 Fire Retardant (16mm & 19mm)', badge: 'NBC Compliant' },
      { name: 'Baltic Birch Multi-Ply Acoustic Baffles', spec: '15mm Grooved Wave Panels (STC 44)', badge: 'Acoustic STC 44' },
      { name: 'PLYARCH Calibra Pro 4X Table Cores', spec: '25mm & 30mm Boardroom Substrates', badge: 'Heavy Load' }
    ],
    hardwareUsed: [
      { name: 'NEXUS Biometric Smart Digital Locks', spec: 'Tempered Touch-Glass Access Control', badge: '0.3s Biometric' },
      { name: 'Concealed Overhead Closers (EN 1154)', spec: '500,000 Cycles Heavy Door Closers', badge: 'EN 1154 Certified' },
      { name: 'Heavy-Duty Steel Cam Joinery Connectors', spec: 'Motorized Desk Wire Passages', badge: 'High Torque' }
    ],
    stats: [
      { label: 'FR Plywood', val: '12,000 sq.mtr' },
      { label: 'Acoustic Rating', val: 'STC 44 / NRC 0.85' },
      { label: 'Emission Standard', val: 'E0 / CARB-2' }
    ]
  },
  {
    id: 'proj-solarium-kitchen',
    title: 'The Solarium Monolithic Chef Kitchen',
    category: 'kitchen',
    categoryName: 'Kitchen',
    application: 'Modular Kitchen & Deep Storage Systems',
    location: 'Banjara Hills, Hyderabad',
    architect: 'FADD Studio & Ar. Rajiv Parekh',
    area: '1,450 sq.ft.',
    completion: '2025',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A minimalist kitchen island fit-out boasting 18mm quad-calibrated PET shutters, double-wall soft-closing drawer runners, and 100% Gurjan boiling waterproof sink underlays.',
    challenge: 'Continuous steam vapors, extreme sink water pooling, heavy marble clad drawers (up to 40kg), and high daily cycling in a high-activity family residence.',
    solution: 'Zero-void PLYARCH Club Marine 710 substrates combined with VELOX 45kg Slim Box anthracite drawer runners and AURA 3D Titanium Onyx clip-on hinges.',
    materialsUsed: [
      { name: 'PLYARCH Club Marine 710', spec: '100% Gurjan Core BWP (16mm & 19mm)', badge: '72h Boiling Proof' },
      { name: 'Calibra Pro 4X Substrates', spec: '18mm Ultra-Flat Base for PET Shutters', badge: 'Zero Telegraphing' },
      { name: 'HDHMR AquaShield Pro', spec: '880 kg/m³ Hydrophobic CNC Panels', badge: 'Water Immune' }
    ],
    hardwareUsed: [
      { name: 'AURA 3D Titanium Onyx Concealed Hinges', spec: '200,000 Cycles Soft-Close (<24dB)', badge: 'Titanium Onyx' },
      { name: 'VELOX Slim Box 13mm Drawer System', spec: '45kg Dynamic Load Undermount Slides', badge: '45kg Dynamic' },
      { name: 'Dynamic Magic Corner & Larder Pantry', spec: 'Synchronized Blind Corner Storage', badge: '80kg Total Load' }
    ],
    stats: [
      { label: 'Drawer Units', val: '48 Slim Boxes' },
      { label: 'Hinge Longevity', val: '200,000 Cycles' },
      { label: 'Immersion Rating', val: '72h Continuous BWP' }
    ]
  },
  {
    id: 'proj-luxe-closet',
    title: 'Maison Royale Walk-In Dressing Suite',
    category: 'wardrobe',
    categoryName: 'Wardrobe',
    application: 'Floor-to-Ceiling Wardrobes & Luxury Closets',
    location: 'Alipore, Kolkata',
    architect: 'Abin Design Studio',
    area: '2,200 sq.ft.',
    completion: '2024',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A 9.8-foot floor-to-ceiling walk-in dressing suite featuring warp-free pine blockboard shutters, synchronized telescopic sliding tracks, and hand-stitched saddle leather jewelry drawers.',
    challenge: 'Tall vertical wardrobe shutter doors warping across humid monsoon seasons and heavy weight of mirrors and leather cladding.',
    solution: 'Seasoned Pine Batten Blockboards with balanced cross-ply veneers and top-hung 80kg SYNCRO-Glide hardware with integrated air dampers.',
    materialsUsed: [
      { name: 'PLYARCH Prime Pine Blockboard', spec: 'Kiln-Seasoned Pine Core (25mm & 30mm)', badge: 'Zero-Warp Core' },
      { name: 'Smoked American Walnut Veneer', spec: '0.55mm Crown Cut Architectural Flitches', badge: 'Grade A+ Face' },
      { name: 'Calibra Pro 4X Carcass Dividers', spec: '18mm High Screw Retention Boards', badge: '>3200 N Grip' }
    ],
    hardwareUsed: [
      { name: 'SYNCRO-Glide 80 Sliding Track', spec: 'Top-Hung Telescopic Synchronized System', badge: '80kg Per Shutter' },
      { name: 'LUXE-CLOSET Saddle Leather Trays', spec: 'Handcrafted Watch & Cufflink Organizers', badge: 'Italian Leather' },
      { name: 'AERO-LIFT Hydraulic Pull-Down Rails', spec: '15kg Capacity with Embedded Sensor LED', badge: 'Hydraulic Lift' }
    ],
    stats: [
      { label: 'Door Height', val: '2950mm (9.8ft)' },
      { label: 'Organizers', val: '36 Modular Trays' },
      { label: 'Batten Seasoning', val: '<10% MC Vacuum' }
    ]
  },
  {
    id: 'proj-susegado-resort',
    title: 'Susegado Heritage Luxury Resort & Spa',
    category: 'hospitality',
    categoryName: 'Hospitality',
    application: '5-Star Beachfront Luxury Pool Villas',
    location: 'Assagao & Vagator, North Goa',
    architect: 'Design Collaborative Goa',
    area: '32 Luxury Pool Villas',
    completion: '2024',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'An eco-conscious boutique luxury retreat marrying Indo-Portuguese heritage with modern marine-grade longevity and coastal PVD hardware across 32 private pool villas.',
    challenge: 'Monsoon rainfall exceeding 3,200mm annually coupled with extreme humidity, subterranean termites, and high beachfront salt spray.',
    solution: 'Triple preservative dip vacuum-treated IS:710 Gurjan marine plywood combined with solid core acoustic flush doors (STC 42+) and 240h SST PVD brass lever sets.',
    materialsUsed: [
      { name: 'PLYARCH Club Marine 710', spec: '100% Gurjan Core BWP (19mm & 25mm)', badge: 'Lifetime Termite' },
      { name: 'Hardwood Acoustic Flush Door Cores', spec: '35mm & 40mm Solid Core (IS:2202)', badge: 'STC 42+ Tested' },
      { name: 'Smoked Oak Headboard Wall Paneling', spec: '18mm Water-Resistant Substrates', badge: 'BWR Bonded' }
    ],
    hardwareUsed: [
      { name: 'KRONOS PVD Champagne Gold Handles', spec: 'Forged Virgin Brass with 240h SST Guard', badge: '240h Salt Proof' },
      { name: 'Smart RFID Wireless Hotel Door Locks', spec: 'Mobile-Key & RFID Integrated Mortise', badge: 'PMS Integrated' },
      { name: 'SYNCRO-Glide Silent Bathroom Partitions', spec: '80kg Soft-Close Concealed Tracks', badge: 'Zero Floor Track' }
    ],
    stats: [
      { label: 'Villas Fitted', val: '32 Villas' },
      { label: 'BWP Flush Doors', val: '240 Units' },
      { label: 'Termite Guarantee', val: 'Lifetime Warranty' }
    ]
  },
  {
    id: 'proj-baltic-table',
    title: 'The Linear Sculptural Atelier Dining Table',
    category: 'furniture',
    categoryName: 'Furniture',
    application: 'Bespoke Scandinavian Joinery & Fine Furniture',
    location: 'Koregaon Park, Pune',
    architect: 'Atelier Ashiesh Shah & Form Studio',
    area: '12-Seater Monolith (3.8m)',
    completion: '2025',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A 3.8-meter 12-seater solid dining table crafted with 13-ply void-free Baltic Birch, celebrating raw exposed multi-ply edges finished with organic hard-wax oils.',
    challenge: 'Achieving an unsupported 3.8m cantilevered table span with zero sagging while maintaining crisp, razor-sharp multi-ply exposed edge profiles.',
    solution: 'Cross-laminated void-free Baltic Birch panels bonded under high hydraulic pressure with heavy-duty solid brass internal steel cam tie-rods.',
    materialsUsed: [
      { name: 'PLYARCH Baltic Birch 13-Ply Multi-Panel', spec: '18mm & 24mm Hardwood Panels', badge: '13 Micro-Layers' },
      { name: 'Prime Pine Solid Core Substrate', spec: '30mm Heavy-Duty Table Foundation', badge: 'Zero Sagging' },
      { name: 'Smoked White Oak Veneer Face', spec: '0.6mm Wire-Brushed Decorative Face', badge: 'Organic Oil Finish' }
    ],
    hardwareUsed: [
      { name: 'TOUCH-OPEN Synchronized Undermount Slides', spec: '35kg Push-to-Open Mechanism', badge: 'Handle-Free' },
      { name: 'Solid Forged Brass Inset Levelers & Bushings', spec: 'High-Torque Joinery Fasteners', badge: 'Solid Brass' },
      { name: 'Concealed Swivel Expansion Mechanisms', spec: 'Heavy-Duty 40kg Kinetic Joints', badge: '360° Smooth' }
    ],
    stats: [
      { label: 'Table Length', val: '3,800 mm' },
      { label: 'Multi-Ply Layers', val: '13 Void-Free Plies' },
      { label: 'Screw Retention', val: '>3,200 N Strength' }
    ]
  },
  {
    id: 'proj-apex-atrium',
    title: 'The Apex Central Civic Atrium & Convention Hub',
    category: 'commercial',
    categoryName: 'Commercial',
    application: 'Public Infrastructure & High-Traffic Fit-Out',
    location: 'Aerocity, New Delhi',
    architect: 'CP Kukreja Architects',
    area: '140,000 sq.ft.',
    completion: '2024',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A landmark civic convention center and airport atrium engineered with 140,000 sq.ft. of certified fire-rated wall cladding, panic exit door assemblies, and D4 marine adhesives.',
    challenge: 'Extreme non-stop pedestrian traffic exceeding 25,000 people daily, strict NBC 2016 Class 1 fire compliance, and heavy doors cycling continuously.',
    solution: 'IS:5509 certified PyroShield fire retardant panels combined with EN 1935 Class 13 heavy ball-bearing butt hinges and EN 1125 certified panic bars.',
    materialsUsed: [
      { name: 'PLYARCH PyroShield FR Commercial', spec: 'IS:5509 Class 1 Fire-Retardant (19mm)', badge: 'IS:5509 Certified' },
      { name: 'PLYARCH Calibra Pro 4X Structural', spec: '25mm Heavy-Traffic Substrates', badge: 'High Impact' },
      { name: 'Seasoned Hardwood Solid Core Flush Doors', spec: '45mm Heavy Commercial Doors (IS:2202)', badge: 'Class 13 Rated' }
    ],
    hardwareUsed: [
      { name: 'Commercial Ball-Bearing Butt Hinges', spec: 'EN 1935 Class 13 (120kg Doors)', badge: 'EN 1935 Class 13' },
      { name: 'Overhead Hydraulic Closers & Panic Exit Bars', spec: 'EN 1154 & EN 1125 Certified Egress', badge: 'Panic Compliant' },
      { name: 'ARCH-BOND D4 Fast-Setting Marine Adhesive', spec: 'Cross-Linking DIN EN 204 D4 Adhesive', badge: 'D4 Waterproof' }
    ],
    stats: [
      { label: 'Cladding Area', val: '45,000 sq.mtr' },
      { label: 'Daily Footfall', val: '25,000+ Visitors' },
      { label: 'Flame Delay', val: '>35 Minutes NBC' }
    ]
  },
  {
    id: 'proj-courtyard-manor',
    title: 'The Courtyard Manor',
    category: 'residential',
    categoryName: 'Residential',
    application: 'Contemporary Villa & Architectural Interiors',
    location: 'Jubilee Hills, Hyderabad',
    architect: 'NA Architects',
    area: '18,000 sq.ft.',
    completion: '2024',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A sprawling private villa celebrating warm architectural teak grains, invisible flush doors with concealed 3D pivots, and acoustic whisper latches.',
    challenge: 'Seamless frameless doors blending directly into full-height wooden wall paneling with zero visible hinge pins or metallic slam.',
    solution: 'Concealed 3D adjustable pivot systems paired with calibrated hardwood carcasses and MAGNA magnetic latches.',
    materialsUsed: [
      { name: 'PLYARCH Calibra Pro 4X', spec: '18mm Quad-Calibrated Substrates', badge: '±0.15mm Tolerance' },
      { name: 'Natural Smoked Oak & Teak Veneers', spec: '0.55mm Book-Matched Sheets', badge: 'Hand Selected' },
      { name: 'HDHMR AquaShield Acoustic Paneling', spec: '12mm Fluted Living Room Paneling', badge: 'High Density 880kg' }
    ],
    hardwareUsed: [
      { name: 'MAGNA Magnetic Whisper Silent Locks', spec: '500,000 Operations Magnetic Latch', badge: 'Zero Metallic Slam' },
      { name: 'Concealed 3D Adjustable Pivot Sets', spec: '100kg Frameless Door Pivots', badge: 'Invisible Flush' },
      { name: 'KRONOS Solid Brass Architectural Handles', spec: 'PVD Brushed Rose Gold', badge: 'PVD Coated' }
    ],
    stats: [
      { label: 'Concealed Doors', val: '42 Doors' },
      { label: 'Veneer Panels', val: '3,800 sq.mtr' },
      { label: 'Noise Reduction', val: 'Silent Magnetic' }
    ]
  },
  {
    id: 'proj-maison-elite',
    title: 'Maison Élite Flagship Haute Couture Boutique',
    category: 'commercial',
    categoryName: 'Commercial',
    application: 'Luxury Retail Storefront & Display Joinery',
    location: 'Mehrauli, New Delhi',
    architect: 'Studio Lotus Retail',
    area: '8,200 sq.ft.',
    completion: '2025',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A curated haute-couture fashion flagship with bespoke velvet-lined wardrobes, exposed Baltic Birch display millwork, and 150kg floor pivot grand entrance doors.',
    challenge: 'Architect required razor-sharp exposed edge joinery without edge-banding tapes to showcase authentic timber craft under intense boutique spotlights.',
    solution: 'Precision CNC-milled Baltic Birch with void-free cross layers hand-buffed with organic natural hard-wax oil and AXIS 150kg floor pivot entrance doors.',
    materialsUsed: [
      { name: 'PLYARCH Baltic Birch Multi-Ply', spec: 'Exposed Striped Edge Display Millwork', badge: 'Void-Free' },
      { name: 'HDHMR AquaShield CNC Display Panels', spec: '880 kg/m³ High-Density Wave Niches', badge: 'No Fuzzing' },
      { name: 'VEXA Thermal-Heal Compact Laminate', spec: '12mm Anti-Fingerprint Shelving', badge: 'Scratch Proof' }
    ],
    hardwareUsed: [
      { name: 'AXIS Heavy-Duty 150kg Floor Pivots', spec: 'Concealed Storefront Pivot System', badge: '150kg Capacity' },
      { name: 'VELOX Slim Box Champagne Bronze Drawers', spec: '45kg Soft-Close Display Trays', badge: 'Slim 13mm' },
      { name: 'PVD Brushed Rose Gold Hanging Rails', spec: 'Solid Heavy Brass Fixture Rails', badge: 'PVD Rose Gold' }
    ],
    stats: [
      { label: 'Custom Joinery', val: '64 Display Units' },
      { label: 'Drawer Systems', val: '120 Slim Boxes' },
      { label: 'Finish Quality', val: 'Hand Waxed Birch' }
    ]
  },
  {
    id: 'proj-horizon-boardroom',
    title: 'The Horizon Executive Boardroom Suite',
    category: 'office',
    categoryName: 'Office',
    application: 'Executive Suites & Acoustic Audio-Visual Rooms',
    location: 'BKC (Bandra Kurla Complex), Mumbai',
    architect: 'Gensler & RSP Architects',
    area: '6,400 sq.ft.',
    completion: '2024',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'An executive boardroom suite for a multinational financial institution incorporating IS:5509 fire-rated wall paneling, acoustic baffle ceilings, and motorized flush conference table ports.',
    challenge: 'Acoustic confidentiality for board meetings (STC 45) and seamless wire management inside a 24-seater solid table without surface ripple.',
    solution: 'PLYARCH Calibra Pro 4X quad-pressed substrate combined with high-density Birch acoustic panels and concealed EN 1154 acoustic door closers.',
    materialsUsed: [
      { name: 'PLYARCH PyroShield FR', spec: 'IS:5509 Class 1 Fire-Retardant (19mm)', badge: 'IS:5509 Rated' },
      { name: 'Baltic Birch Acoustic Perforated Panels', spec: '18mm Wave Ceiling Baffles (STC 45)', badge: 'STC 45 Acoustic' },
      { name: 'Calibra Pro 4X Table Substrates', spec: '30mm Heavy-Duty Boardroom Tops', badge: '±0.15mm Flat' }
    ],
    hardwareUsed: [
      { name: 'NEXUS Biometric Touch Glass Mortise', spec: 'Audit-Trail Access Control', badge: 'Biometric RFID' },
      { name: 'Concealed Overhead Door Closers (EN 1154)', spec: 'Adjustable Latching & Soft Closing', badge: 'EN 1154 Grade' },
      { name: 'Concealed Cable Grommets & Steel Fasteners', spec: 'Motorized Power Connectivity Channels', badge: 'Concealed Steel' }
    ],
    stats: [
      { label: 'Acoustic Rating', val: 'STC 45 / NRC 0.88' },
      { label: 'Flame Delay', val: '>35 Minutes' },
      { label: 'Conference Table', val: '24-Seater 7.2m' }
    ]
  },
  {
    id: 'proj-serene-chalet',
    title: 'The Serene Pine Luxury Himalayan Chalet',
    category: 'hospitality',
    categoryName: 'Hospitality',
    application: 'High-Altitude Luxury Boutique Resort',
    location: 'Mashobra, Shimla',
    architect: 'Morphogenesis Hospitality',
    area: '16 Boutique Suites',
    completion: '2024',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A luxury mountain chalet featuring seasoned pine blockboard panelling, acoustic timber flush doors, and heavy antique brass hardware built to withstand sub-zero winters.',
    challenge: 'Sub-zero winter temperatures, indoor central heating causing timber shrinkage/cracking, and heavy acoustic soundproofing demands between suites.',
    solution: 'Kiln-dried seasoned pine blockboards (<8% moisture content) with phenolic bonding and solid core flush doors (IS:2202).',
    materialsUsed: [
      { name: 'PLYARCH Prime Pine Blockboard', spec: 'Kiln-Seasoned Pine Core (19mm & 25mm)', badge: 'Sub-Zero Stable' },
      { name: 'Natural Smoked Oak Architectural Veneer', spec: '0.55mm Wire-Brushed Face', badge: 'Crown Cut' },
      { name: 'Solid Hardwood Acoustic Door Cores', spec: '40mm Solid Core (IS:2202)', badge: 'STC 42 Privacy' }
    ],
    hardwareUsed: [
      { name: 'KRONOS Antique Brass Mortise Handles', spec: 'Heavy Forged Brass with Protective Clearcoat', badge: 'Solid Brass' },
      { name: 'Smart RFID Hotel Locks', spec: 'High-Altitude Cold-Resistant Electronics', badge: 'RFID & BLE' },
      { name: 'Heavy Ball-Bearing Butt Hinges', spec: '4-Bearing Stainless Steel Hinges', badge: 'EN 1935' }
    ],
    stats: [
      { label: 'Suites Fitted', val: '16 Chalet Suites' },
      { label: 'Thermal Resistance', val: 'R-Value 1.85' },
      { label: 'Moisture Content', val: '<8% Kiln Seasoned' }
    ]
  },
  {
    id: 'proj-credenza-atelier',
    title: 'The Brutalist Floating Credenza & Console',
    category: 'furniture',
    categoryName: 'Furniture',
    application: 'Sculptural Furniture & Custom Millwork',
    location: 'Indiranagar, Bengaluru',
    architect: 'Rooshad Shroff Studio',
    area: 'Custom Living Ensemble',
    completion: '2025',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A wall-mounted 3.2m cantilevered media credenza crafted from 13-ply Baltic Birch with mitred waterfall edges and push-to-open concealed drawer runners.',
    challenge: 'Floating cantilevered weight without visible brackets or structural deflection while supporting 80kg of audio-visual hardware and marble accents.',
    solution: 'Void-free Baltic Birch core with extreme internal screw retention (>3,200 N) and heavy concealed steel wall-anchoring brackets.',
    materialsUsed: [
      { name: 'PLYARCH Baltic Birch 13-Ply', spec: '18mm & 24mm Hardwood Panels', badge: 'Void-Free Edge' },
      { name: 'Calibra Pro 4X Internal Dividers', spec: '12mm & 18mm Substrates', badge: 'High Screw Grip' },
      { name: 'Smoked Walnut Architectural Flitches', spec: '0.55mm Book-Matched Flitches', badge: 'A+ Grade' }
    ],
    hardwareUsed: [
      { name: 'TOUCH-OPEN Push-to-Open Undermount Slides', spec: '35kg Dynamic Synchronized Slides', badge: 'Handle-Free' },
      { name: 'Solid Brass Mitre Fasteners & Cam Connectors', spec: 'High-Torque Joint Fasteners', badge: 'Solid Brass' },
      { name: 'Concealed Heavy Wall-Hanging Cleats', spec: '150kg Weight-Bearing Cleat System', badge: '150kg Floating' }
    ],
    stats: [
      { label: 'Credenza Span', val: '3,200 mm' },
      { label: 'Floating Capacity', val: '150 kg Cleat' },
      { label: 'Edge Joint', val: '45° Mitre Waterfall' }
    ]
  },
  {
    id: 'proj-aurora-kitchen',
    title: 'The Aurora Minimalist Handleless Kitchen',
    category: 'kitchen',
    categoryName: 'Kitchen',
    application: 'Luxury Minimalist Modular Kitchen Fit-Out',
    location: 'Boat Club Road, Chennai',
    architect: 'Khanna Schultz Architects',
    area: '1,100 sq.ft.',
    completion: '2024',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A handleless Gola profile kitchen featuring IS:710 Marine boiling waterproof carcasses, AURA 3D Titanium Onyx hinges, and matte anthracite deep pot drawers.',
    challenge: 'High tropical humidity and heavy kitchen spice oils requiring seamless zero-edge delamination and 120-hour salt-spray hardware resistance.',
    solution: '100% Gurjan marine plywood bonded with unextended Phenolic adhesives and DIN EN 15570 Level 3 titanium-coated hinges.',
    materialsUsed: [
      { name: 'PLYARCH Club Marine 710', spec: '100% Gurjan Core BWP (16mm & 19mm)', badge: 'IS:710 Marine' },
      { name: 'Calibra Pro 4X 18mm Shutters', spec: 'Ultra-Flat Substrates for Soft-Touch Laminate', badge: '±0.15mm' },
      { name: 'HDHMR AquaShield Pro', spec: 'High-Density Hydrophobic Core for Sink Base', badge: 'Moisture Safe' }
    ],
    hardwareUsed: [
      { name: 'AURA 3D Titanium Onyx Hinges', spec: '200,000 Cycles Dampened Soft-Close', badge: '200k Cycles' },
      { name: 'VELOX 13mm Anthracite Drawer Boxes', spec: '45kg Dynamic Load with Glass Sides', badge: '45kg Slim' },
      { name: 'Continuous Aluminum Gola Profiles', spec: 'Integrated LED Recessed Handless Channel', badge: 'Anodized Black' }
    ],
    stats: [
      { label: 'Shutters Fitted', val: '38 Panels' },
      { label: 'Drawer Units', val: '24 Slim Boxes' },
      { label: 'Waterproof Guarantee', val: '30-Year Warranty' }
    ]
  },
  {
    id: 'proj-zenith-wardrobe',
    title: 'The Zenith Master Suite Wardrobe & Vanity',
    category: 'wardrobe',
    categoryName: 'Wardrobe',
    application: 'Master Bedroom Wardrobes & Fluted Glass Partitions',
    location: 'Drive-In Road, Ahmedabad',
    architect: 'Hiren Patel Architects',
    area: '1,800 sq.ft.',
    completion: '2025',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85'
    ],
    summary: 'A 9.5-foot tall master bedroom wardrobe wall integrating seasoned pine blockboards, fluted glass aluminum framed doors, and concealed whisper sliding mechanisms.',
    challenge: 'Maintaining rigidity over 9.5ft vertical shutter height while combining wood frames with heavy fluted glass inserts.',
    solution: 'Kiln-seasoned pine batten blockboards with 3-ply cross balancing veneers and SYNCRO-Glide top-hung sliding hardware.',
    materialsUsed: [
      { name: 'PLYARCH Prime Pine Blockboard', spec: '19mm & 25mm Kiln-Dried Pine Core', badge: 'Zero-Warp' },
      { name: 'Quarter-Cut Burma Teak Boards', spec: '0.55mm Natural Teak Veneers', badge: 'Natural Grain' },
      { name: 'Calibra Pro 4X Internal Organizers', spec: '18mm Calibrated Shelving', badge: 'High Rigidity' }
    ],
    hardwareUsed: [
      { name: 'SYNCRO-Glide 80 Sliding System', spec: 'Top-Hung Concealed Track with Soft-Close', badge: '80kg Shutter' },
      { name: 'LUXE-CLOSET Hand-Stitched Leather Trays', spec: 'Saddle Leather Watch & Ring Organizers', badge: 'Luxury Finish' },
      { name: 'AERO-LIFT Hydraulic Wardrobe Pull-Downs', spec: 'Integrated Motion LED Sensors', badge: 'Hydraulic Lift' }
    ],
    stats: [
      { label: 'Shutter Height', val: '2850mm (9.5ft)' },
      { label: 'Glass Frames', val: 'Anodized Bronze' },
      { label: 'Core Rigidity', val: 'Warp-Free IS:1659' }
    ]
  }
];

export const projectStats = [
  { value: '500+', label: 'Projects Executed' },
  { value: '2.5M+', label: 'Sq.Ft. Panels Supplied' },
  { value: '20+ Cities', label: 'Nationwide Footprint' },
  { value: '30 Yrs', label: 'Maximum Core Warranty' }
];
