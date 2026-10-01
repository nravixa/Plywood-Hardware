import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ArrowRight,
  Box,
  Send
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import {
  hardwareCategories,
  featuredHardwareProducts,
  finishGallery,
  hardwareStandards
} from '../data/hardwareData';

export default function Hardware({ onOpenSampleModal, onOpenProductDetail }) {
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('all');
  const [activeFinishIndex, setActiveFinishIndex] = useState(0);

  const currentFinish = finishGallery[activeFinishIndex];

  // Filter featured products if a category is selected
  const displayedProducts = featuredHardwareProducts.filter((p) => {
    if (selectedFilterCategory === 'all') return true;
    return p.category === selectedFilterCategory;
  });

  const handleExploreCategory = (catId) => {
    setSelectedFilterCategory(catId);
    // Smooth scroll to the featured products section
    const el = document.getElementById('featured-hardware-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* =========================================================================
          1. PAGE HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[{ label: 'Architectural Hardware' }]}
        eyebrow="Precision Motion & Forged Brass"
        title="Architectural Hardware & Fitting Systems"
        subtitle="Engineered with European DIN standards, hydraulic fluid dampers, solid forged virgin brass, and vacuum PVD molecular finishes tested to 200,000 continuous motion cycles."
        bgImage="https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=2100&q=85"
        actions={
          <>
            <Button variant="gold" size="md" onClick={onOpenSampleModal} icon={Box}>
              Request Hardware Finish Swatches
            </Button>
            <Button variant="outline-light" size="md" to="/contact">
              Commercial Hardware Schedule
            </Button>
          </>
        }
        stats={[
          { value: '200,000', label: 'Cycle Durability Tested' },
          { value: '45–65 kg', label: 'Dynamic Drawer Load' },
          { value: '240 Hrs', label: 'PVD Salt Spray SST' },
          { value: '15 Yrs', label: 'Mechanical Warranty' }
        ]}
      />

      {/* =========================================================================
          2. ELEGANT CATEGORY BROWSING EXPERIENCE (11 CATEGORIES)
          ========================================================================= */}
      <section className="section-py bg-primary" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <Container>
          <SectionHeading
            eyebrow="Mechanical Portfolio"
            title="11 Architectural Hardware Categories"
            subtitle="Explore our comprehensive range of precision fittings crafted from forged virgin brass, aircraft-grade aluminum, and titanium-coated stainless steel."
            align="left"
          />

          {/* 11 Hardware Categories Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {hardwareCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ translateY: -6 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: selectedFilterCategory === cat.id ? '2px solid var(--brass-500)' : '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-card)',
                  height: '100%',
                  transition: 'all var(--transition-base)'
                }}
              >
                {/* Close-Up Product Photography */}
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: 'var(--charcoal-900)' }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(14, 16, 19, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--brass-300)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    0{idx + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--charcoal-900)', marginBottom: '0.35rem' }}>
                      {cat.name}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--wood-600)', fontWeight: 600, display: 'block', marginBottom: '0.65rem' }}>
                      {cat.tagline}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {cat.description}
                    </p>
                    <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--stone-100)', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', color: 'var(--charcoal-800)', fontWeight: 500, marginBottom: '1.25rem' }}>
                      {cat.specs}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleExploreCategory(cat.id)}
                    icon={ArrowRight}
                    iconPosition="right"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Explore {cat.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. FEATURED HARDWARE PRODUCTS SHOWCASE
          ========================================================================= */}
      <section id="featured-hardware-products" className="section-py bg-secondary">
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge-arch" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                Technical Specification Showcase
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: 'var(--charcoal-900)', marginTop: '0.25rem' }}>
                Featured Precision Hardware
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                Engineered mechanisms with comprehensive mechanical load benchmarks and tarnish guarantees.
              </p>
            </div>

            {selectedFilterCategory !== 'all' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedFilterCategory('all')}
              >
                Show All Hardware Products
              </Button>
            )}
          </div>

          {/* Featured Hardware Products Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '1.75rem'
            }}
          >
            {displayedProducts.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                whileHover={{ translateY: -6 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Close-Up Product Image */}
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden', backgroundColor: 'var(--charcoal-900)' }}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      backgroundColor: 'var(--charcoal-900)',
                      color: 'var(--brass-300)',
                      border: '1px solid var(--border-brass)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {prod.badge}
                  </div>
                </div>

                {/* Body Details */}
                <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-600)', display: 'block', marginBottom: '0.35rem' }}>
                      {prod.categoryName}
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--charcoal-900)', marginBottom: '0.5rem', lineHeight: 1.25 }}>
                      {prod.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {prod.description}
                    </p>

                    {/* Architectural Application Box */}
                    <div style={{ backgroundColor: 'var(--stone-100)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-xs)', marginBottom: '1.25rem', borderLeft: '3px solid var(--brass-500)' }}>
                      <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--wood-800)', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
                        Architectural Application:
                      </span>
                      <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-900)', margin: 0, fontWeight: 500 }}>
                        {prod.application}
                      </p>
                    </div>

                    {/* Key Specifications Grid */}
                    <div style={{ backgroundColor: 'var(--stone-50)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)', padding: '1rem', marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-900)', marginBottom: '0.65rem' }}>
                        Key Specifications & Ratings
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.6rem', fontSize: '0.8rem' }}>
                        {Object.entries(prod.specs).map(([key, val], i) => (
                          <div key={i}>
                            <span style={{ color: 'var(--text-muted)', textTransform: 'capitalize', display: 'block', fontSize: '0.72rem' }}>
                              {key.replace(/([A-Z])/g, ' $1')}:
                            </span>
                            <strong style={{ color: 'var(--charcoal-900)', fontSize: '0.8rem' }}>{val}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: "View Details" & "Enquire Now" */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem', alignItems: 'center' }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenProductDetail && onOpenProductDetail(prod)}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="wood"
                      size="sm"
                      onClick={() => onOpenProductDetail && onOpenProductDetail(prod)}
                      icon={Send}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. METALLURGY & PVD FINISHES SHOWCASE
          ========================================================================= */}
      <section className="section-py bg-dark text-inverse">
        <Container>
          <SectionHeading
            eyebrow="Architectural Metallurgy"
            title="Vacuum PVD Molecular Finish Palette"
            subtitle="Explore our molecular titanium-coated finishes bonded over solid forged virgin brass, offering 240+ hours of salt spray tarnish immunity."
            theme="dark"
            align="center"
          />

          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            {/* Finish Chips Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {finishGallery.map((fin, idx) => {
                const active = activeFinishIndex === idx;
                return (
                  <button
                    key={fin.code}
                    type="button"
                    onClick={() => setActiveFinishIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: active ? 'var(--bg-dark-card)' : 'rgba(255, 255, 255, 0.03)',
                      border: active ? '1px solid var(--brass-400)' : '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: fin.color,
                        border: '2px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <strong style={{ color: '#ffffff', fontSize: '1rem', display: 'block' }}>
                        {fin.name}
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--charcoal-300)' }}>
                        {fin.code} • {fin.saltSpray} Anti-Corrosion
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Finish Showcase Detail */}
            <motion.div
              key={currentFinish.code}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              style={{
                backgroundColor: 'var(--bg-dark-card)',
                border: '1px solid var(--border-brass)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                boxShadow: 'var(--shadow-dark)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: currentFinish.color,
                    border: '3px solid rgba(255, 255, 255, 0.35)',
                    boxShadow: '0 0 16px rgba(0,0,0,0.6)'
                  }}
                />
                <div>
                  <span className="badge-arch-dark" style={{ fontSize: '0.7rem' }}>{currentFinish.code}</span>
                  <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '0.2rem' }}>
                    {currentFinish.name}
                  </h3>
                </div>
              </div>

              <p style={{ color: 'var(--charcoal-300)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {currentFinish.desc}
              </p>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '1.25rem', borderRadius: 'var(--radius-xs)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--brass-400)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  <ShieldCheck size={18} />
                  <span>Tested to 240+ Hours ISO 9227 Salt Spray Chamber</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--charcoal-300)', margin: 0 }}>
                  Resists coastal salinity, high tropical humidity, perspiration acids, and household cleaning chemicals without peeling, pitting, or dulling.
                </p>
              </div>

              <Button variant="gold" size="md" onClick={onOpenSampleModal} icon={Box} style={{ width: '100%' }}>
                Request {currentFinish.name} Finish Swatch
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. DURABILITY STANDARDS MATRIX
          ========================================================================= */}
      <section className="section-py bg-stone-warm">
        <Container>
          <SectionHeading
            eyebrow="Durability Certifications"
            title="Engineered to Outperform European DIN Benchmarks"
            subtitle="Our hardware mechanisms undergo robotic test cycling and high-load dynamic shear tests."
            align="center"
          />

          <div className="grid-2" style={{ gap: '2rem' }}>
            {hardwareStandards.map((std, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <span className="badge-arch" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                  {std.badge}
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--charcoal-900)', marginBottom: '0.5rem' }}>
                  {std.metric}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Industry Standard: {std.spec}
                </div>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--stone-100)', borderRadius: 'var(--radius-xs)', color: 'var(--wood-800)', fontWeight: 600, fontSize: '0.9rem' }}>
                  ✓ PLYARCH Certified: {std.plyarch}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. HARDWARE SPECIFICATION ENQUIRY CTA
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
              Architectural Hardware Specifier Desk
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
              Submit Your BOQ for a Hardware Schedule & Working Demo
            </h2>
            <p
              style={{
                color: 'var(--charcoal-300)',
                fontSize: '1rem',
                lineHeight: 1.65,
                maxWidth: '640px',
                marginBottom: '2.5rem'
              }}
            >
              Our architectural hardware consultants will review your door and cabinetry drawings, calculate precise load ratings, and curate a customized working sample kit with PVD finish swatches.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button variant="gold" size="lg" to="/contact" icon={Send}>
                Submit Project BOQ for Hardware Schedule
              </Button>
              <Button variant="outline-light" size="lg" onClick={onOpenSampleModal} icon={Box}>
                Request Working Hardware Swatch Box
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
