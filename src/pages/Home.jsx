import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Box,
  Send,
  Gauge,
  TreePine
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/common/ProductCard';
import { categories, products } from '../data/productsData';
import { applications } from '../data/applicationsData';
import { projects } from '../data/projectsData';
import { testingStandards } from '../data/plywoodData';

export default function Home({ onOpenSampleModal, onOpenProductDetail }) {
  const [activeAppTab, setActiveAppTab] = useState('residential');

  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
  const currentApp = applications.find((a) => a.id === activeAppTab) || applications[0];
  const featuredProjects = projects.slice(0, 3);

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* =========================================================================
          HERO SECTION
          "Built for Interiors. Engineered for Life."
          ========================================================================= */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--charcoal-950)',
          color: 'var(--text-inverse)',
          minHeight: 'max(600px, 100svh)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(5.75rem, 10vw, 8.5rem)',
          paddingBottom: 'clamp(2.75rem, 6vw, 4.5rem)',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Parallax / Motion Background Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2100&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'contrast(120%) brightness(70%)',
            zIndex: 1
          }}
        />

        {/* Sophisticated Dark Gradient & Warm Wood Radiance Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10, 11, 13, 0.72) 0%, rgba(14, 16, 19, 0.6) 45%, rgba(10, 11, 13, 0.94) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 75% 35%, rgba(186, 118, 76, 0.22) 0%, transparent 60%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Architectural Grid Micro-Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        <Container>
          <div style={{ position: 'relative', zIndex: 3, maxWidth: '980px' }}>
            {/* 1. Small Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.25rem' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'rgba(216, 177, 82, 0.12)',
                  color: 'var(--brass-300)',
                  border: '1px solid rgba(216, 177, 82, 0.28)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brass-400)',
                    boxShadow: '0 0 8px var(--brass-400)'
                  }}
                />
                Plywood • Hardware • Interior Solutions
              </span>
            </motion.div>

            {/* 2. Large Powerful Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif"
              style={{
                fontSize: 'clamp(2.75rem, 5.8vw, 4.75rem)',
                lineHeight: 1.06,
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: '1.35rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
              }}
            >
              Built for Interiors. <br />
              <span
                style={{
                  color: 'var(--brass-400)',
                  fontStyle: 'italic',
                  fontWeight: 500
                }}
              >
                Engineered for Life.
              </span>
            </motion.h1>

            {/* 3. Short Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.86)',
                maxWidth: '740px',
                marginBottom: '2.5rem',
                fontWeight: 400,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
              }}
            >
              Curating India’s finest calibrated marine plywood, certified fire-retardant substrates, and European-standard architectural hardware for architects, interior designers, and visionary luxury spaces.
            </motion.p>

            {/* 4. Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                gap: '1.1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '3.25rem'
              }}
            >
              {/* Primary CTA */}
              <Button
                variant="gold"
                size="lg"
                to="/products"
                icon={ArrowRight}
                iconPosition="right"
                style={{
                  boxShadow: '0 8px 24px -4px rgba(194, 155, 56, 0.45)',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                Explore Products
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outline-light"
                size="lg"
                to="/contact"
                style={{
                  backdropFilter: 'blur(6px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  letterSpacing: '0.04em'
                }}
              >
                Get a Quote
              </Button>
            </motion.div>

            {/* 5. Tri-Pillar Value Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(186, 118, 76, 0.18)',
                    border: '1px solid rgba(186, 118, 76, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brass-300)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Layers size={16} />
                </div>
                <div>
                  <strong style={{ color: '#ffffff', fontSize: '0.925rem', display: 'block' }}>
                    Calibrated Plywood
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    IS:710 Marine • 100% Gurjan Core
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(194, 155, 56, 0.18)',
                    border: '1px solid rgba(194, 155, 56, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brass-400)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <strong style={{ color: '#ffffff', fontSize: '0.925rem', display: 'block' }}>
                    Precision Hardware
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    Onyx Hinges • 45kg Slim Drawers
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Box size={16} />
                </div>
                <div>
                  <strong style={{ color: '#ffffff', fontSize: '0.925rem', display: 'block' }}>
                    Interior Solutions
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    Modular Kitchens & Closets
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* 6. Subtle Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(255, 255, 255, 0.55)',
              fontWeight: 600
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '20px',
              height: '32px',
              borderRadius: '12px',
              border: '1.5px solid rgba(255, 255, 255, 0.35)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px'
            }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.2, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                width: '3.5px',
                height: '6px',
                borderRadius: '2px',
                backgroundColor: 'var(--brass-400)'
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          SECTION 1: BRAND INTRODUCTION
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
                The PLYARCH Philosophy
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
                Where Structural Strength Meets Mechanical Perfection
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                For over 25 years, PLYARCH & CO. has operated at the intersection of timber science and precision metallurgy. We believe enduring interior architecture begins beneath the surface—in void-free hardwood cores that never delaminate, and hinges that glide with whisper silence after decades of daily use.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Engineered for India’s demanding tropical humidity and coastal climates, our calibrated boards and PVD hardware empower architects and turnkey contractors to execute flawless joinery with absolute confidence.
              </p>

              {/* 4 Stat Indicators */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.25rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-light)'
                }}
              >
                <div>
                  <span className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--wood-700)', display: 'block' }}>
                    ±0.15 mm
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Quad-press calibration tolerance
                  </span>
                </div>
                <div>
                  <span className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--wood-700)', display: 'block' }}>
                    72+ Hours
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Continuous boiling water resistance
                  </span>
                </div>
                <div>
                  <span className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--wood-700)', display: 'block' }}>
                    200,000
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Cycle tested hydraulic hardware
                  </span>
                </div>
                <div>
                  <span className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--wood-700)', display: 'block' }}>
                    30 Years
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Flagship marine core warranty
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Editorial Layered Visual */}
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
                  alt="Precision Timber Joinery"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Architectural Badge */}
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
                <span className="badge-arch-dark" style={{ fontSize: '0.68rem', marginBottom: '0.4rem' }}>
                  100% Gurjan Hardwood
                </span>
                <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: 0, lineHeight: 1.45 }}>
                  Zero core gap composer technology prevents internal hollow pockets forever.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: PRODUCT CATEGORIES (7 CATEGORIES)
          ========================================================================= */}
      <section className="section-py bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Architectural Material Portfolio"
            title="7 Complete Material Categories"
            subtitle="From structural timber cores and precision HDHMR to artisanal veneers and German-standard hardware."
            align="left"
            action={
              <Button variant="outline" size="md" to="/products" icon={ArrowRight}>
                View Master Catalog
              </Button>
            }
          />

          {/* Category Cards Deck */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ translateY: -6 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)',
                  height: '100%'
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
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
                      color: '#ffffff',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  >
                    Category 0{index + 1}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--charcoal-900)', marginBottom: '0.3rem' }}>
                      {cat.name}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--wood-600)', fontWeight: 600, display: 'block', marginBottom: '0.65rem' }}>
                      {cat.subtitle}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                      {cat.description}
                    </p>
                    <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--stone-100)', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', color: 'var(--charcoal-800)', fontWeight: 500, marginBottom: '1.25rem' }}>
                      {cat.specs}
                    </div>
                  </div>

                  <Link
                    to={cat.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      color: 'var(--wood-700)',
                      fontWeight: 600
                    }}
                  >
                    Explore Range <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED PRODUCTS
          ========================================================================= */}
      <section className="section-py bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Signature Materials"
            title="Curated Architectural Selections"
            subtitle="Explore our top-specified structural boards, artisanal veneers, and German-tested hardware."
            align="left"
            action={
              <Button variant="wood" size="md" to="/products" icon={ArrowRight}>
                View All Products
              </Button>
            }
          />

          <div className="grid-3" style={{ gap: '2rem' }}>
            {featuredProducts.map((prod) => (
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
          SECTION 4: WHY CHOOSE US (ASYMMETRICAL FEATURE LAYOUT)
          ========================================================================= */}
      <section className="section-py bg-dark text-inverse">
        <Container>
          <SectionHeading
            eyebrow="Engineering Excellence"
            title="Why Leading Architects Specify PLYARCH"
            subtitle="We don’t just manufacture panels and fittings—we eliminate the structural failure points common to conventional joinery."
            theme="dark"
            align="left"
          />

          {/* Asymmetrical Grid: Large Feature Left, 4 Highlights Right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }}
            className="why-us-grid"
          >
            {/* Primary Flagship Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: 'var(--bg-dark-card)',
                border: '1px solid var(--border-brass)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-dark)'
              }}
            >
              <div>
                <span className="badge-arch-dark" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                  Core Technology • 30-Year Guarantee
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.9rem', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
                  100% Selected Gurjan Hardwood & Zero Core Gaps
                </h3>
                <p style={{ color: 'var(--charcoal-300)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Traditional commercial plywood often conceals hollow core voids that cause screws to strip and boards to warp under moisture. PLYARCH stitches every core veneer on automated acoustic composers with pure unextended Phenol Formaldehyde resin.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    '72+ Hours boiling water proof without core delamination',
                    'Screw holding strength exceeds 2,800 N (30% above BIS IS:710)',
                    'Vacuum pressure-impregnated organic anti-borer microcapsules'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--charcoal-200)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--brass-400)', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="gold" size="md" onClick={onOpenSampleModal} icon={Box}>
                Order Calibrated Core Sample
              </Button>
            </motion.div>

            {/* 4 Supporting Feature Blocks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: Layers,
                  title: '4-Press Quad Calibration',
                  desc: 'Eliminates thickness variance to ±0.15mm, ensuring seamless CNC routing and bubble-free high-gloss acrylic pressing.'
                },
                {
                  icon: Gauge,
                  title: '200,000 Cycle Tested Hardware',
                  desc: 'Hydraulic concealed hinges and 45kg dynamic load drawer runners certified to European DIN EN 15570 Level 3.'
                },
                {
                  icon: ShieldCheck,
                  title: '240-Hour PVD Salt Spray Test',
                  desc: 'Solid forged brass handles molecularly coated in vacuum PVD chambers—impervious to coastal salinity and perspiration.'
                },
                {
                  icon: TreePine,
                  title: 'FSC Certified & E0 Low Emission',
                  desc: 'Sourced from responsibly managed agro-forestry with ultra-low formaldehyde emissions for healthy indoor air quality.'
                }
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'rgba(216, 177, 82, 0.1)',
                          color: 'var(--brass-400)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1rem'
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.45rem' }}>
                        {feat.title}
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', lineHeight: 1.55, margin: 0 }}>
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>

        <style>{`
          @media (min-width: 1024px) {
            .why-us-grid {
              grid-template-columns: 1.1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          SECTION 5: APPLICATIONS (6 SECTORS)
          ========================================================================= */}
      <section className="section-py bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Spatial Engineering"
            title="Applications Across 6 Key Sectors"
            subtitle="Explore how our calibrated timber substrates and precision hardware integrate across every architectural typology."
            align="center"
          />

          {/* 6 Application Selector Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            {applications.map((app) => {
              const active = activeAppTab === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveAppTab(app.id)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.85rem',
                    fontWeight: active ? 600 : 500,
                    backgroundColor: active ? 'var(--charcoal-900)' : 'var(--stone-100)',
                    color: active ? '#ffffff' : 'var(--charcoal-800)',
                    border: active ? '1px solid var(--charcoal-900)' : '1px solid var(--border-medium)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {app.title.split('&')[0]}
                </button>
              );
            })}
          </div>

          {/* Active Application Showcase */}
          <motion.div
            key={currentApp.id}
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
            className="app-showcase-grid"
          >
            <div style={{ padding: 'clamp(1.25rem, 3.5vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-arch" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                  {currentApp.tagline}
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--charcoal-900)', marginBottom: '0.75rem' }}>
                  {currentApp.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  {currentApp.description}
                </p>

                {/* Recommended Spec Pairings */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div style={{ backgroundColor: 'var(--stone-100)', padding: '1rem', borderRadius: 'var(--radius-xs)', borderLeft: '3px solid var(--wood-600)' }}>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--wood-800)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Recommended Plywood
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-900)', display: 'block' }}>
                      {typeof currentApp.plywoodRecommended[0] === 'object' ? currentApp.plywoodRecommended[0]?.name : currentApp.plywoodRecommended[0]}
                    </strong>
                  </div>

                  <div style={{ backgroundColor: 'var(--stone-100)', padding: '1rem', borderRadius: 'var(--radius-xs)', borderLeft: '3px solid var(--brass-500)' }}>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brass-500)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Recommended Hardware
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-900)', display: 'block' }}>
                      {typeof currentApp.hardwareRecommended[0] === 'object' ? currentApp.hardwareRecommended[0]?.name : currentApp.hardwareRecommended[0]}
                    </strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="wood" size="md" onClick={onOpenSampleModal} icon={Box}>
                  Request {currentApp.title.split('&')[0]} Spec Box
                </Button>
                <Button variant="outline" size="md" to="/applications">
                  View Case Details
                </Button>
              </div>
            </div>

            <div style={{ position: 'relative', minHeight: 'clamp(240px, 40vw, 360px)' }}>
              <img
                src={currentApp.heroImage}
                alt={currentApp.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </Container>

        <style>{`
          @media (min-width: 960px) {
            .app-showcase-grid {
              grid-template-columns: 1.2fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          SECTION 6: MATERIALS & QUALITY LAB BENCHMARKS
          ========================================================================= */}
      <section className="section-py bg-stone-warm">
        <Container>
          <SectionHeading
            eyebrow="Empirical Lab Verification"
            title="Rigorous Material Quality & Test Benchmarks"
            subtitle="Every production batch undergoes destructive mechanical load tests, 72-hour boiling water immersion, and neutral salt spray chambers."
            align="left"
          />

          <div className="table-responsive-wrapper" style={{ marginBottom: '2.5rem' }}>
            <table className="spec-table" style={{ minWidth: '580px' }}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Laboratory Test Benchmark</th>
                  <th style={{ width: '35%' }}>Bureau of Indian Standards (BIS)</th>
                  <th style={{ width: '35%' }}>PLYARCH Certified Result</th>
                </tr>
              </thead>
              <tbody>
                {testingStandards.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--charcoal-900)' }}>
                      {row.test}
                    </td>
                    <td>{row.benchmark}</td>
                    <td style={{ color: 'var(--wood-700)', fontWeight: 600 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--wood-600)', flexShrink: 0 }} />
                        <span>{row.plyarchResult}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7: FEATURED PROJECTS & GALLERY
          ========================================================================= */}
      <section className="section-py bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Architectural Case Studies"
            title="Realized Across India's Landmark Spaces"
            subtitle="See how leading architects in Mumbai, Delhi, Bengaluru, Goa, and Hyderabad incorporate PLYARCH timber and hardware."
            align="left"
            action={
              <Button variant="outline" size="md" to="/projects" icon={ArrowRight}>
                View All Case Studies
              </Button>
            }
          />

          <div className="grid-3" style={{ gap: '2rem' }}>
            {featuredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '230px' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(14, 16, 19, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      padding: '0.3rem 0.65rem',
                      fontSize: '0.72rem',
                      borderRadius: 'var(--radius-xs)'
                    }}
                  >
                    {proj.location}
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.725rem', color: 'var(--wood-600)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      {proj.categoryName}
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--charcoal-900)', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                      {proj.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {proj.summary}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Architect: <strong>{proj.architect.split('&')[0]}</strong>
                    </span>
                    <Link to="/projects" style={{ color: 'var(--wood-600)', fontSize: '0.825rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      Case Study <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: CTA SECTION FOR ARCHITECTS & BUILDERS
          ========================================================================= */}
      <section className="section-py bg-dark text-inverse">
        <Container>
          <div
            style={{
              backgroundColor: 'var(--bg-dark-card)',
              border: '1px solid var(--border-brass)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-dark)'
            }}
          >
            <span className="badge-arch-dark" style={{ marginBottom: '1rem' }}>
              Architectural Collaboration & Direct Factory Supply
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
              Order a Complimentary Architectural Specifier Box
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
              Includes 100x150mm calibrated timber core blocks, natural veneer swatches, IS:710 certification reports, and working hardware samples dispatched to your studio.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button variant="gold" size="lg" onClick={onOpenSampleModal} icon={Box}>
                Request Specifier Kit (Complimentary)
              </Button>
              <Button variant="outline-light" size="lg" to="/contact" icon={Send}>
                Request Project Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
