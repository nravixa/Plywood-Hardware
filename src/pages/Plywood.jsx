import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Layers,
  Droplets,
  Award,
  Box,
  ArrowRight,
  Sparkles,
  Send
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/productsData';
import {
  plywoodCategories,
  keyProperties,
  applicationsList,
  technicalStandardsMatrix,
  standardDimensions
} from '../data/plywoodData';

export default function Plywood({ onOpenSampleModal, onOpenProductDetail }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(3); // Default to Marine Plywood

  const currentCategory = plywoodCategories[selectedCategoryIndex] || plywoodCategories[0];
  const plywoodProducts = products.filter((p) => p.category === 'plywood' || p.category === 'blockboard');

  // Map icon strings to Lucide components
  const getPropertyIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      case 'Award':
        return <Award size={22} />;
      case 'Droplets':
        return <Droplets size={22} />;
      case 'Layers':
        return <Layers size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      default:
        return <Layers size={22} />;
    }
  };

  return (
    <div>
      {/* =========================================================================
          1. PAGE HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[{ label: 'Plywood & Structural Substrates' }]}
        eyebrow="Engineered Timber Substrates"
        title="Zero-Tolerance Calibrated Marine Plywood"
        subtitle="Manufactured with 100% selected Gurjan hardwood core, unextended Phenol Formaldehyde resin, and quadruple automated hydraulic calibration. Certified to BIS IS:710 and IS:5509 standards."
        bgImage="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=2100&q=85"
        actions={
          <>
            <Button variant="gold" size="md" onClick={onOpenSampleModal} icon={Box}>
              Request Calibrated Timber Box
            </Button>
            <Button variant="outline-light" size="md" to="/contact">
              Consult Technical Specifier
            </Button>
          </>
        }
        stats={[
          { value: 'IS:710 Marine', label: 'BIS Standard Certified' },
          { value: '±0.15 mm', label: 'Quad-Press Calibration' },
          { value: '30 Years', label: 'Flagship Core Guarantee' },
          { value: '100% Gurjan', label: 'Imported Hardwood Core' }
        ]}
      />

      {/* =========================================================================
          2. INTRODUCTION TO PLYWOOD (EDITORIAL ANATOMY)
          ========================================================================= */}
      <section className="section-py bg-primary" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <Container>
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge-arch" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                Timber Science & Anatomy
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: 'var(--charcoal-900)',
                  lineHeight: 1.18,
                  marginBottom: '1.25rem'
                }}
              >
                The Architecture of a Defect-Free Timber Core
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Plywood is the structural backbone of interior architecture. While superficial laminates and veneers provide visual aesthetics, the longevity of your cabinetry, wardrobes, and doors depends entirely on the internal core density and glue-line chemistry.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                PLYARCH solves the failure points of traditional commercial plywood by employing <strong>100% selected Gurjan hardwood core veneers</strong> stitched on acoustic composer machines. Bonded with pure unextended Phenol Formaldehyde resin and hot-pressed at 150°C under 16 kg/cm² pressure, our sheets eliminate core overlaps, voids, and thickness variances.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.5rem', color: 'var(--wood-700)', fontFamily: 'var(--font-serif)' }}>
                    Zero Gaps
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Automated core composer alignment
                  </span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.5rem', color: 'var(--wood-700)', fontFamily: 'var(--font-serif)' }}>
                    96+ Hours
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Boiling water immersion with zero split
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Visual Cross-Section Composition */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card-hover)',
                  border: '1px solid var(--border-medium)',
                  height: 'clamp(280px, 45vw, 460px)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=900&q=80"
                  alt="Cross-Laminated Plywood Core"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'var(--charcoal-900)',
                  color: '#ffffff',
                  padding: 'clamp(0.85rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: 'var(--radius-xs)',
                  maxWidth: 'calc(100% - 1.5rem)',
                  boxShadow: 'var(--shadow-dark)',
                  border: '1px solid var(--border-brass)',
                  zIndex: 2
                }}
              >
                <div style={{ color: 'var(--brass-400)', fontSize: '1.15rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  E0 Emission
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-300)', marginTop: '0.2rem', lineHeight: 1.45 }}>
                  Ultra-low formaldehyde synthetic matrix certified safe for luxury residential living spaces.
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. PLYWOOD CATEGORIES (7 CORE CATEGORIES)
          ========================================================================= */}
      <section className="section-py bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Plywood Portfolio"
            title="7 Engineered Plywood Classifications"
            subtitle="Explore our specialized plywood grades tailored for commercial interiors, wet zones, fire safety, and organic curved architecture."
            align="left"
          />

          {/* Category Tabs Strip */}
          <div
            className="touch-scroll-row"
            style={{
              display: 'flex',
              gap: '0.5rem',
              paddingBottom: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            {plywoodCategories.map((cat, idx) => {
              const active = selectedCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryIndex(idx)}
                  style={{
                    padding: '0.75rem 1.4rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.875rem',
                    fontWeight: active ? 600 : 500,
                    backgroundColor: active ? 'var(--charcoal-900)' : 'var(--stone-100)',
                    color: active ? '#ffffff' : 'var(--charcoal-800)',
                    border: active ? '1px solid var(--charcoal-900)' : '1px solid var(--border-medium)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Active Category Deep Dive Card */}
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: '1fr'
            }}
            className="plywood-category-grid"
          >
            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.75rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge-arch">{currentCategory.code}</span>
                  <span className="badge-arch-charcoal">{currentCategory.specs.standard}</span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.9rem', color: 'var(--charcoal-900)', marginBottom: '0.5rem' }}>
                  {currentCategory.name}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--wood-600)', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                  {currentCategory.tagline}
                </span>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  {currentCategory.description}
                </p>

                {/* Technical Parameters Table */}
                <div style={{ backgroundColor: 'var(--stone-100)', borderRadius: 'var(--radius-xs)', padding: '1.25rem', marginBottom: '1.75rem' }}>
                  <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-900)', marginBottom: '0.75rem' }}>
                    Technical Parameters
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.8125rem' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block' }}>Water Resistance:</span>
                      <strong style={{ color: 'var(--charcoal-900)' }}>{currentCategory.specs.waterResistance}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block' }}>Core Species:</span>
                      <strong style={{ color: 'var(--charcoal-900)' }}>{currentCategory.specs.coreWood}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block' }}>Available Thickness:</span>
                      <strong style={{ color: 'var(--charcoal-900)' }}>{currentCategory.specs.thickness}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block' }}>Warranty:</span>
                      <strong style={{ color: 'var(--charcoal-900)' }}>{currentCategory.specs.warranty}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--wood-800)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                    Ideal Architectural Applications:
                  </span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-800)', margin: 0 }}>
                    {currentCategory.idealFor}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="wood" size="md" onClick={onOpenSampleModal} icon={Box}>
                  Request {currentCategory.name} Sample
                </Button>
                <Button variant="outline" size="md" to="/contact">
                  Enquire for Project
                </Button>
              </div>
            </div>

            <div style={{ position: 'relative', minHeight: 'clamp(240px, 35vw, 380px)' }}>
              <img
                src={currentCategory.image}
                alt={currentCategory.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </Container>

        <style>{`
          @media (min-width: 960px) {
            .plywood-category-grid {
              grid-template-columns: 1.25fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          4. PRODUCT SHOWCASE (FLAGSHIP PLYWOOD BOARDS)
          ========================================================================= */}
      <section className="section-py bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Curated Product Showcase"
            title="Featured Structural & Marine Boards"
            subtitle="Explore our top-specified calibrated substrates, fire-retardant panels, and solid pine blockboards."
            align="left"
            action={
              <Button variant="outline" size="md" to="/products" icon={ArrowRight}>
                View All Products
              </Button>
            }
          />

          <div className="grid-3" style={{ gap: '2rem' }}>
            {plywoodProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onQuickView={onOpenProductDetail}
                onInquire={onOpenProductDetail}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. KEY PROPERTIES (5 CORE PROPERTIES)
          ========================================================================= */}
      <section className="section-py bg-dark text-inverse">
        <Container>
          <SectionHeading
            eyebrow="Material Benchmarks"
            title="5 Key Engineering Properties"
            subtitle="How PLYARCH timber panels deliver superior structural strength, durability, moisture resistance, dimensional stability, and flawless finish."
            theme="dark"
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {keyProperties.map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ translateY: -4 }}
                style={{
                  backgroundColor: 'var(--bg-dark-card)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(216, 177, 82, 0.1)',
                        color: 'var(--brass-400)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {getPropertyIcon(prop.iconName)}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--brass-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {prop.metric}
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                    {prop.title}
                  </h3>

                  <span style={{ fontSize: '0.78rem', color: 'var(--brass-300)', display: 'block', marginBottom: '0.85rem' }}>
                    {prop.subtitle}
                  </span>

                  <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-300)', lineHeight: 1.6, margin: 0 }}>
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. APPLICATIONS
          ========================================================================= */}
      <section className="section-py bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Spatial Recommendations"
            title="Engineered for Demanding Interior Applications"
            subtitle="Match specific plywood formulations to wet zones, tall wardrobe doors, feature panelling, and commercial corridors."
            align="left"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {applicationsList.map((app, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -4 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--charcoal-900)', marginBottom: '0.5rem' }}>
                    {app.space}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {app.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--charcoal-800)', marginBottom: '0.25rem' }}>
                    <span style={{ color: 'var(--wood-700)', fontWeight: 600 }}>Recommended:</span>
                    <strong>{app.plywoodRecommended}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>Thickness:</span>
                    <span>{app.thickness}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. TECHNICAL / SPECIFICATION SECTION
          ========================================================================= */}
      <section className="section-py bg-stone-warm">
        <Container>
          <SectionHeading
            eyebrow="Architectural Standards Matrix"
            title="Technical Standards & Sheet Dimensions"
            subtitle="Official compliance matrix matching Bureau of Indian Standards (BIS) and European DIN benchmarks."
            align="left"
          />

          {/* Technical Standards Table */}
          <div className="table-responsive-wrapper" style={{ marginBottom: '3rem' }}>
            <table className="spec-table" style={{ minWidth: '650px' }}>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Certified Standard</th>
                  <th style={{ width: '25%' }}>Water Immersion Benchmark</th>
                  <th style={{ width: '25%' }}>Core & Resin Formulation</th>
                  <th style={{ width: '25%' }}>Screw Retention & Warranty</th>
                </tr>
              </thead>
              <tbody>
                {technicalStandardsMatrix.map((std, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--charcoal-900)' }}>
                      {std.standard}
                    </td>
                    <td>{std.waterTest}</td>
                    <td>
                      <div>{std.core}</div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{std.resin}</span>
                    </td>
                    <td>
                      <div style={{ color: 'var(--wood-700)', fontWeight: 600 }}>{std.warranty}</div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{std.screwRetention}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Standard Dimensions Matrix */}
          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge-arch" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                Availability & Sizing
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--charcoal-900)', marginBottom: '0.75rem' }}>
                Standard Sheet Sizes & Calipers
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                All sheets undergo dual-sided diamond wide-belt calibration ensuring razor-sharp thickness tolerances within ±0.15mm across the entire surface.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {standardDimensions.map((dim, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--charcoal-900)' }}>{dim.size}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                        Thickness: {dim.thicknesses}
                      </span>
                    </div>
                    <span className="badge-arch" style={{ fontSize: '0.68rem' }}>{dim.availability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thickness Selection Guide */}
            <div
              style={{
                backgroundColor: 'var(--charcoal-900)',
                color: '#ffffff',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-dark)',
                border: '1px solid var(--border-brass)'
              }}
            >
              <h4 className="font-serif" style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1.25rem' }}>
                Architectural Thickness Selection Guide
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--brass-400)', fontWeight: 700 }}>6mm & 9mm</span>
                  <p style={{ color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', fontSize: '0.8rem' }}>
                    Curved columns, wardrobe backings, acoustic ceiling baffles, drawer base linings.
                  </p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--brass-400)', fontWeight: 700 }}>12mm & 16mm</span>
                  <p style={{ color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', fontSize: '0.8rem' }}>
                    Modular wardrobe vertical carcass dividers, internal shelving, wall cladding substrates.
                  </p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--brass-400)', fontWeight: 700 }}>18mm & 19mm</span>
                  <p style={{ color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', fontSize: '0.8rem' }}>
                    Heavy modular kitchen base carcasses, tall wardrobe shutters, load-bearing bookshelves.
                  </p>
                </div>
                <div>
                  <span style={{ color: 'var(--brass-400)', fontWeight: 700 }}>25mm & 30mm</span>
                  <p style={{ color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', fontSize: '0.8rem' }}>
                    Solid dining table tops, structural stair treads, 9ft luxury flush door cores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. ENQUIRY CTA SECTION
          ========================================================================= */}
      <section className="section-py bg-dark text-inverse">
        <Container>
          <div
            style={{
              backgroundColor: 'var(--bg-dark-card)',
              border: '1px solid var(--border-brass)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'var(--shadow-dark)'
            }}
          >
            <span className="badge-arch-dark" style={{ marginBottom: '1rem' }}>
              Complimentary Architectural Specifier Kit
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#ffffff',
                lineHeight: 1.15,
                maxWidth: '780px',
                marginBottom: '1rem'
              }}
            >
              Experience the Density of True 100% Gurjan Core
            </h2>
            <p
              style={{
                color: 'var(--charcoal-300)',
                fontSize: '1rem',
                lineHeight: 1.65,
                maxWidth: '620px',
                marginBottom: '2.5rem'
              }}
            >
              Order a physical box containing 100x150mm cross-cut core blocks (IS:710 Marine, Calibra Pro, Baltic Birch, Pine Blockboard) and certified lab test reports dispatched directly to your practice.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button variant="gold" size="lg" onClick={onOpenSampleModal} icon={Box}>
                Order Timber Sample Box
              </Button>
              <Button variant="outline-light" size="lg" to="/contact" icon={Send}>
                Request Project BOQ Quotation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
