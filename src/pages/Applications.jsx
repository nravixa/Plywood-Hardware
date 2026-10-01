import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Box,
  Sparkles,
  Maximize2,
  Check,
  X,
  Send,
  Download,
  Compass
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { applications, sectorFilters, applicationsStats } from '../data/applicationsData';

export default function Applications({ onOpenSampleModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedAppModal, setSelectedAppModal] = useState(null);
  const [enquiryModalApp, setEnquiryModalApp] = useState(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    firm: '',
    email: '',
    phone: '',
    projectLocation: '',
    scope: 'Turnkey Plywood & Hardware Supply',
    notes: ''
  });

  // Filter applications by sector
  const filteredApps = applications.filter((app) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'residential') {
      return ['modular-kitchens', 'wardrobes', 'furniture', 'residential-interiors'].includes(app.id);
    }
    if (activeFilter === 'commercial') {
      return ['office-interiors', 'commercial-projects'].includes(app.id);
    }
    if (activeFilter === 'hospitality') {
      return ['hotels', 'retail-spaces'].includes(app.id);
    }
    return true;
  });

  const handleOpenEnquiry = (app) => {
    setEnquiryModalApp(app);
    setEnquirySuccess(false);
    setEnquiryForm((prev) => ({
      ...prev,
      notes: `Inquiry regarding ${app.title} fit-out specifications.`
    }));
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalApp(null);
    setEnquirySuccess(false);
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* =========================================================================
          1. PAGE HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[{ label: 'Spatial Applications' }]}
        eyebrow="Architectural Spatial Applications"
        title="Engineered Timber & Hardware in Every Living & Commercial Space"
        subtitle="Discover how PLYARCH & CO. calibrated marine plywood substrates, seasoned blockboards, and vacuum-PVD hardware integrate seamlessly across residential villas, luxury retail boutiques, acoustic corporate suites, and 5-star hospitality projects."
        bgImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
        actions={
          <>
            <Button
              variant="gold"
              size="md"
              onClick={onOpenSampleModal}
              icon={Box}
            >
              Request Space-Specific Sample Box
            </Button>
            <Button
              variant="outline-light"
              size="md"
              to="/contact"
              icon={ArrowRight}
            >
              Consult Project Specialist
            </Button>
          </>
        }
        stats={applicationsStats}
      />

      {/* =========================================================================
          2. STICKY ARCHITECTURAL NAVIGATOR & INDEX
          ========================================================================= */}
      <div
        style={{
          position: 'sticky',
          top: '68px',
          zIndex: 40,
          backgroundColor: 'rgba(252, 251, 249, 0.94)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-subtle)',
          padding: '0.75rem 0',
          transition: 'all var(--transition-base)'
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--charcoal-500)',
                  marginRight: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Compass size={14} style={{ color: 'var(--wood-600)' }} />
                Typology:
              </span>
              {sectorFilters.map((filter) => {
                const active = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8rem',
                      fontWeight: active ? 600 : 500,
                      backgroundColor: active ? 'var(--charcoal-900)' : 'var(--stone-100)',
                      color: active ? '#ffffff' : 'var(--charcoal-800)',
                      border: active ? '1px solid var(--charcoal-900)' : '1px solid var(--border-medium)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Direct Quick Jump Menu */}
            <div
              className="touch-scroll-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                maxWidth: '100%',
                paddingBottom: '2px'
              }}
            >
              {applications.map((app) => (
                <button
                  key={app.id}
                  onClick={() => scrollToSection(app.id)}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    backgroundColor: 'transparent',
                    color: 'var(--charcoal-700)',
                    border: '1px solid transparent',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--stone-200)';
                    e.currentTarget.style.color = 'var(--wood-700)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--charcoal-700)';
                  }}
                >
                  <span style={{ color: 'var(--brass-500)', fontWeight: 700, fontSize: '0.7rem' }}>
                    {app.num}
                  </span>
                  <span>{app.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          3. LARGE EDITORIAL IMAGE SECTIONS (ALTERNATING LAYOUT)
          ========================================================================= */}
      <section className="section-py">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5.5rem)' }}>
            {filteredApps.map((app, index) => {
              // Alternating layout: isEven = false -> Image Left, Content Right. isEven = true -> Content Left, Image Right.
              const isImageRight = index % 2 === 1;

              return (
                <motion.article
                  id={app.id}
                  key={app.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'relative',
                    paddingBottom: '2rem',
                    borderBottom: index < filteredApps.length - 1 ? '1px solid var(--border-medium)' : 'none'
                  }}
                >
                  {/* Subtle Background Typographic Accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-2.5rem',
                      left: isImageRight ? 'auto' : '0',
                      right: isImageRight ? '0' : 'auto',
                      fontSize: 'clamp(5rem, 12vw, 10rem)',
                      fontWeight: 900,
                      fontFamily: 'var(--font-serif)',
                      color: 'rgba(18, 20, 23, 0.03)',
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none',
                      zIndex: 0
                    }}
                  >
                    {app.num}
                  </div>

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: 'clamp(2.5rem, 5vw, 4.5rem)',
                      alignItems: 'center'
                    }}
                  >
                    {/* =========================================================
                        EDITORIAL IMAGE SPREAD (LEFT ON ODD, RIGHT ON EVEN)
                        ========================================================= */}
                    <div
                      style={{
                        order: isImageRight ? 2 : 1,
                        position: 'relative'
                      }}
                    >
                      {/* Main Large Editorial Image Container */}
                      <div
                        style={{
                          position: 'relative',
                          borderRadius: 'var(--radius-sm)',
                          overflow: 'hidden',
                          backgroundColor: 'var(--charcoal-900)',
                          boxShadow: 'var(--shadow-card)',
                          border: '1px solid var(--border-medium)',
                          aspectRatio: '4 / 3.1'
                        }}
                      >
                        <motion.img
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          src={app.heroImage}
                          alt={app.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />

                        {/* Top Gradient Overlay with Badges */}
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            padding: '1.75rem',
                            background: 'linear-gradient(to bottom, rgba(14, 16, 19, 0.75) 0%, rgba(14, 16, 19, 0) 100%)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            zIndex: 2
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                color: 'var(--charcoal-950)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                padding: '0.35rem 0.75rem',
                                borderRadius: 'var(--radius-xs)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                              }}
                            >
                              {app.num} / {app.sector}
                            </span>
                            <span className="badge-arch-dark" style={{ fontSize: '0.7rem' }}>
                              {app.specSheetCode}
                            </span>
                          </div>

                          <button
                            onClick={() => setSelectedAppModal(app)}
                            title="Expand high-res architectural view"
                            style={{
                              backgroundColor: 'rgba(18, 20, 23, 0.65)',
                              backdropFilter: 'blur(8px)',
                              color: '#ffffff',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              width: '36px',
                              height: '36px',
                              borderRadius: 'var(--radius-xs)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all var(--transition-fast)'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--brass-500)';
                              e.currentTarget.style.color = 'var(--charcoal-950)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(18, 20, 23, 0.65)';
                              e.currentTarget.style.color = '#ffffff';
                            }}
                          >
                            <Maximize2 size={16} />
                          </button>
                        </div>

                        {/* Bottom Gradient with Floating Inset Card */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.75rem',
                            background: 'linear-gradient(to top, rgba(14, 16, 19, 0.85) 0%, rgba(14, 16, 19, 0) 100%)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            zIndex: 2
                          }}
                        >
                          <div style={{ maxWidth: '65%' }}>
                            <div style={{ color: 'var(--brass-300)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                              Architectural Integration
                            </div>
                            <h4 className="font-serif" style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 600, margin: 0, lineHeight: 1.25 }}>
                              {app.title}
                            </h4>
                          </div>

                          {/* Detail Inset Thumbnail */}
                          {app.detailImage && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              onClick={() => setSelectedAppModal(app)}
                              style={{
                                width: '90px',
                                height: '70px',
                                borderRadius: 'var(--radius-xs)',
                                overflow: 'hidden',
                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                                cursor: 'pointer',
                                flexShrink: 0,
                                position: 'relative'
                              }}
                            >
                              <img
                                src={app.detailImage}
                                alt={app.detailCaption}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: 0,
                                  backgroundColor: 'rgba(0,0,0,0.2)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                <Sparkles size={14} style={{ color: '#ffffff' }} />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Technical Benchmarks Quick Bar Under Image */}
                      <div
                        style={{
                          marginTop: '1rem',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 110px), 1fr))',
                          gap: '0.65rem',
                          backgroundColor: 'var(--stone-100)',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-medium)'
                        }}
                      >
                        {app.engineeringSpecs.map((spec, sIdx) => (
                          <div key={sIdx} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.675rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>
                              {spec.label}
                            </div>
                            <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* =========================================================
                        EDITORIAL CONTENT & SPECIFICATION MATRIX (RIGHT/LEFT)
                        ========================================================= */}
                    <div
                      style={{
                        order: isImageRight ? 1 : 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.75rem'
                      }}
                    >
                      {/* Section Title & Subheading */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
                          <span
                            className="font-serif"
                            style={{
                              fontSize: '1.35rem',
                              fontWeight: 700,
                              color: 'var(--brass-500)',
                              lineHeight: 1
                            }}
                          >
                            {app.num}
                          </span>
                          <span
                            style={{
                              height: '1px',
                              width: '32px',
                              backgroundColor: 'var(--brass-400)'
                            }}
                          />
                          <span
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.12em',
                              color: 'var(--wood-700)'
                            }}
                          >
                            {app.tagline}
                          </span>
                        </div>

                        <h2
                          className="font-serif"
                          style={{
                            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                            lineHeight: 1.15,
                            color: 'var(--charcoal-950)',
                            letterSpacing: '-0.02em',
                            marginBottom: '1rem'
                          }}
                        >
                          {app.title}
                        </h2>

                        <p
                          style={{
                            fontSize: '1.025rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {app.description}
                        </p>
                      </div>

                      {/* Challenge vs Solution Callout Box */}
                      <div
                        style={{
                          backgroundColor: 'var(--stone-100)',
                          borderLeft: '4px solid var(--charcoal-900)',
                          padding: '1.25rem 1.5rem',
                          borderRadius: 'var(--radius-xs)',
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          gap: '0.85rem'
                        }}
                      >
                        <div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-700)', display: 'block', marginBottom: '0.2rem' }}>
                            Spatial Challenge:
                          </span>
                          <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-800)', margin: 0, lineHeight: 1.5 }}>
                            {app.challenge}
                          </p>
                        </div>
                        <div style={{ borderTop: '1px dashed var(--border-medium)', paddingTop: '0.75rem' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brass-500)', display: 'block', marginBottom: '0.2rem' }}>
                            Engineered Solution:
                          </span>
                          <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-900)', fontWeight: 500, margin: 0, lineHeight: 1.5 }}>
                            {app.solution}
                          </p>
                        </div>
                      </div>

                      {/* Two Column Architectural Materials & Hardware Breakdown */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                          gap: '1.25rem'
                        }}
                      >
                        {/* Suitable Materials (Plywood & Substrates) */}
                        <div
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid var(--border-medium)',
                            borderRadius: 'var(--radius-xs)',
                            padding: '1.35rem',
                            boxShadow: 'var(--shadow-subtle)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.65rem' }}>
                            <Layers size={18} style={{ color: 'var(--wood-600)' }} />
                            <h3 style={{ fontSize: '0.925rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--charcoal-900)', margin: 0 }}>
                              Suitable Materials
                            </h3>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {app.plywoodRecommended.map((ply, pIdx) => (
                              <div
                                key={pIdx}
                                style={{
                                  backgroundColor: 'var(--stone-50)',
                                  padding: '0.75rem 0.85rem',
                                  borderRadius: 'var(--radius-xs)',
                                  border: '1px solid var(--border-light)'
                                }}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                                    {ply.name}
                                  </div>
                                  <span
                                    style={{
                                      fontSize: '0.675rem',
                                      fontWeight: 600,
                                      padding: '0.15rem 0.45rem',
                                      borderRadius: 'var(--radius-xs)',
                                      backgroundColor: 'rgba(147, 88, 56, 0.1)',
                                      color: 'var(--wood-700)',
                                      whiteSpace: 'nowrap'
                                    }}
                                  >
                                    {ply.badge}
                                  </span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--wood-600)', fontWeight: 600, marginBottom: '0.25rem' }}>
                                  {ply.grade} • {ply.thickness}
                                </div>
                                <p style={{ fontSize: '0.775rem', color: 'var(--charcoal-700)', margin: 0, lineHeight: 1.45 }}>
                                  {ply.highlight}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Suitable Hardware (Precision Fittings) */}
                        <div
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid var(--border-medium)',
                            borderRadius: 'var(--radius-xs)',
                            padding: '1.35rem',
                            boxShadow: 'var(--shadow-subtle)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.65rem' }}>
                            <ShieldCheck size={18} style={{ color: 'var(--brass-500)' }} />
                            <h3 style={{ fontSize: '0.925rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--charcoal-900)', margin: 0 }}>
                              Suitable Hardware
                            </h3>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {app.hardwareRecommended.map((hw, hIdx) => (
                              <div
                                key={hIdx}
                                style={{
                                  backgroundColor: 'var(--stone-50)',
                                  padding: '0.75rem 0.85rem',
                                  borderRadius: 'var(--radius-xs)',
                                  border: '1px solid var(--border-light)'
                                }}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                                    {hw.name}
                                  </div>
                                  <span
                                    style={{
                                      fontSize: '0.675rem',
                                      fontWeight: 600,
                                      padding: '0.15rem 0.45rem',
                                      borderRadius: 'var(--radius-xs)',
                                      backgroundColor: 'rgba(194, 155, 56, 0.12)',
                                      color: 'var(--brass-500)',
                                      whiteSpace: 'nowrap'
                                    }}
                                  >
                                    {hw.rating.split('•')[0]}
                                  </span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-600)', fontWeight: 600, marginBottom: '0.25rem' }}>
                                  {hw.type} • {hw.finish}
                                </div>
                                <p style={{ fontSize: '0.775rem', color: 'var(--charcoal-700)', margin: 0, lineHeight: 1.45 }}>
                                  {hw.highlight}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Key Engineering Benefits List */}
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-600)', marginBottom: '0.65rem' }}>
                          Key Performance Advantages for {app.title}:
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', margin: 0, padding: 0 }}>
                          {app.keyBenefits.map((benefit, bIdx) => (
                            <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--charcoal-800)' }}>
                              <CheckCircle2 size={15} style={{ color: 'var(--wood-600)', marginTop: '3px', flexShrink: 0 }} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Explore & Enquire CTAs */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          flexWrap: 'wrap',
                          paddingTop: '0.5rem'
                        }}
                      >
                        <Button
                          variant="wood"
                          size="md"
                          onClick={() => handleOpenEnquiry(app)}
                          icon={Send}
                        >
                          Enquire for {app.shortTitle}
                        </Button>

                        <Button
                          variant="outline"
                          size="md"
                          onClick={onOpenSampleModal}
                          icon={Box}
                        >
                          Request Spec Box
                        </Button>

                        <Button
                          variant="ghost"
                          size="md"
                          to="/plywood"
                          icon={ArrowRight}
                        >
                          Explore Materials
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. SPATIAL MATERIAL & HARDWARE MASTER SPECIFICATION MATRIX
          ========================================================================= */}
      <section className="section-py" style={{ backgroundColor: 'var(--stone-100)', borderTop: '1px solid var(--border-medium)', borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Architectural Reference Matrix"
            title="Spatial Specification Comparison"
            subtitle="Side-by-side engineering benchmarks across all 8 spatial applications to simplify architect & project specifier tenders."
          />

          <div
            className="table-responsive-wrapper"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-card)',
              marginTop: 'clamp(1.75rem, 3.5vw, 3rem)'
            }}
          >
            <table className="spec-table" style={{ minWidth: '950px' }}>
              <thead>
                <tr>
                  <th style={{ width: '18%' }}>Spatial Typology</th>
                  <th style={{ width: '22%' }}>Recommended Substrate</th>
                  <th style={{ width: '22%' }}>Recommended Hardware</th>
                  <th style={{ width: '20%' }}>Critical Benchmark</th>
                  <th style={{ width: '18%' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: 'var(--charcoal-950)', fontSize: '0.925rem' }}>
                        {app.num}. {app.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-500)', marginTop: '0.15rem' }}>
                        {app.sector}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--wood-700)', fontSize: '0.85rem' }}>
                        {app.plywoodRecommended[0]?.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-600)', marginTop: '0.15rem' }}>
                        {app.plywoodRecommended[0]?.grade}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--brass-500)', fontSize: '0.85rem' }}>
                        {app.hardwareRecommended[0]?.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-600)', marginTop: '0.15rem' }}>
                        {app.hardwareRecommended[0]?.rating}
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--stone-100)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.775rem',
                          fontWeight: 600,
                          color: 'var(--charcoal-800)'
                        }}
                      >
                        {app.engineeringSpecs[0]?.label}: {app.engineeringSpecs[0]?.value}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleOpenEnquiry(app)}
                          style={{
                            padding: '0.4rem 0.75rem',
                            backgroundColor: 'var(--charcoal-900)',
                            color: '#ffffff',
                            borderRadius: 'var(--radius-xs)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Enquire
                        </button>
                        <button
                          onClick={() => setSelectedAppModal(app)}
                          style={{
                            padding: '0.4rem 0.65rem',
                            backgroundColor: 'var(--stone-200)',
                            color: 'var(--charcoal-900)',
                            borderRadius: 'var(--radius-xs)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Specs
                        </button>
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
          5. ARCHITECTURAL CONSULTATION & TURNKEY CTA BANNER
          ========================================================================= */}
      <section
        className="section-py"
        style={{
          backgroundColor: 'var(--charcoal-950)',
          color: 'var(--text-inverse)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(194, 155, 56, 0.12) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div>
              <span className="badge-arch-dark" style={{ marginBottom: '1.25rem' }}>
                Turnkey Project Consultation
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem'
                }}
              >
                Planning a Large Spatial Fit-Out or OEM Order?
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--charcoal-300)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}>
                Our architectural advisory team provides full Bill-of-Materials (BOM) substrate calculations, CAD hardware drilling templates, and priority direct dispatch from our central calibration hubs.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="gold" size="lg" onClick={onOpenSampleModal} icon={Box}>
                  Order Master Specifier Box
                </Button>
                <Button variant="outline-light" size="lg" to="/contact" icon={ArrowRight}>
                  Connect With Project Engineer
                </Button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-sm)',
                padding: '2.5rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.25rem' }}>
                Specifier Support Services
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'rgba(194, 155, 56, 0.15)', color: 'var(--brass-400)', padding: '0.65rem', borderRadius: 'var(--radius-xs)', flexShrink: 0 }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.2rem' }}>
                      Custom Thickness Substrates
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: 0, lineHeight: 1.45 }}>
                      Quad-calibrated boards produced up to 35mm thickness for acoustic baffles and solid entrance cores.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'rgba(147, 88, 56, 0.2)', color: 'var(--wood-400)', padding: '0.65rem', borderRadius: 'var(--radius-xs)', flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.2rem' }}>
                      240-Hour SST Custom PVD Hardware
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: 0, lineHeight: 1.45 }}>
                      Architectural finishes tailored in Champagne Gold, Rose Bronze, Titanium Onyx, and Satin Brass.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.65rem', borderRadius: 'var(--radius-xs)', flexShrink: 0 }}>
                    <Download size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.2rem' }}>
                      BIM & CAD Specification Sheets
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: 0, lineHeight: 1.45 }}>
                      Instant download of 3D drawer models, concealed hinge drilling coordinates, and IS standard certificates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. LIGHTBOX / HIGH-RES ARCHITECTURAL SPEC MODAL
          ========================================================================= */}
      <AnimatePresence>
        {selectedAppModal && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedAppModal(null)}
            style={{ zIndex: 1100 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-content"
              style={{
                maxWidth: '920px',
                padding: 0,
                overflow: 'hidden',
                backgroundColor: 'var(--charcoal-950)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAppModal(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  zIndex: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>

              {/* Large Image Header */}
              <div style={{ position: 'relative', height: 'clamp(200px, 32vw, 340px)' }}>
                <img
                  src={selectedAppModal.heroImage}
                  alt={selectedAppModal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14, 16, 19, 0.95) 0%, rgba(14, 16, 19, 0.2) 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 'clamp(1rem, 3vw, 2rem)'
                  }}
                >
                  <span className="badge-arch-dark" style={{ alignSelf: 'flex-start', marginBottom: '0.4rem' }}>
                    {selectedAppModal.num} / {selectedAppModal.sector} • {selectedAppModal.specSheetCode}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: '#ffffff', margin: 0 }}>
                    {selectedAppModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', maxHeight: '55vh', overflowY: 'auto' }}>
                <p style={{ fontSize: '0.975rem', color: 'var(--charcoal-300)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  {selectedAppModal.description}
                </p>

                {/* Specs Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1.25rem', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brass-400)', marginBottom: '0.75rem' }}>
                      Recommended Substrates
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {selectedAppModal.plywoodRecommended.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--charcoal-200)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <Layers size={14} style={{ color: 'var(--wood-400)', marginTop: '3px', flexShrink: 0 }} />
                          <span><strong>{item.name}</strong> ({item.thickness})</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1.25rem', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brass-400)', marginBottom: '0.75rem' }}>
                      Recommended Precision Hardware
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {selectedAppModal.hardwareRecommended.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--charcoal-200)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <ShieldCheck size={14} style={{ color: 'var(--brass-400)', marginTop: '3px', flexShrink: 0 }} />
                          <span><strong>{item.name}</strong> ({item.rating})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Detail Inset Highlight if present */}
                {selectedAppModal.detailImage && (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-xs)', marginBottom: '1.75rem' }}>
                    <img
                      src={selectedAppModal.detailImage}
                      alt={selectedAppModal.detailCaption}
                      style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: 'var(--radius-xs)', flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brass-400)' }}>
                        Precision Joinery Detail
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#ffffff', fontWeight: 500 }}>
                        {selectedAppModal.detailCaption}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Bar */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button
                    variant="gold"
                    size="md"
                    onClick={() => {
                      setSelectedAppModal(null);
                      handleOpenEnquiry(selectedAppModal);
                    }}
                    icon={Send}
                  >
                    Enquire for {selectedAppModal.shortTitle}
                  </Button>
                  <Button
                    variant="outline-light"
                    size="md"
                    onClick={() => {
                      setSelectedAppModal(null);
                      onOpenSampleModal();
                    }}
                    icon={Box}
                  >
                    Request Specifier Box
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          7. DIRECT QUICK SPATIAL ENQUIRY MODAL
          ========================================================================= */}
      <AnimatePresence>
        {enquiryModalApp && (
          <div
            className="modal-overlay"
            onClick={handleCloseEnquiry}
            style={{ zIndex: 1100 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-content"
              style={{
                maxWidth: '620px',
                padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                backgroundColor: '#ffffff'
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseEnquiry}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  color: 'var(--charcoal-500)',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              {!enquirySuccess ? (
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="badge-arch" style={{ marginBottom: '0.5rem' }}>
                      Spatial Project Enquiry
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--charcoal-950)', marginBottom: '0.35rem' }}>
                      Enquire for {enquiryModalApp.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Submit your project dimensions and spatial requirements to receive a customized substrate & hardware BOM tender estimate within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitEnquiry} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label className="form-label">Your Name *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. Ar. Rahul Mehta"
                          value={enquiryForm.name}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="form-label">Firm / Company</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Studio Form Architects"
                          value={enquiryForm.firm}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, firm: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label className="form-label">Official Email *</label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="architect@domain.com"
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="form-label">Contact Phone *</label>
                        <input
                          type="tel"
                          required
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label className="form-label">Project Location (City) *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. Mumbai / Bangalore / Goa"
                          value={enquiryForm.projectLocation}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, projectLocation: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="form-label">Project Scope</label>
                        <select
                          className="form-select"
                          value={enquiryForm.scope}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, scope: e.target.value })}
                        >
                          <option value="Turnkey Plywood & Hardware Supply">Turnkey Plywood & Hardware Supply</option>
                          <option value="Only Marine/FR Plywood Substrates">Only Marine/FR Plywood Substrates</option>
                          <option value="Only Architectural PVD Hardware">Only Architectural PVD Hardware</option>
                          <option value="OEM Factory Supply Contract">OEM Factory Supply Contract</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Spatial Notes / Specifications</label>
                      <textarea
                        rows={3}
                        className="form-textarea"
                        placeholder="Specify square footage, shutter heights, veneer finishes, or hardware configurations..."
                        value={enquiryForm.notes}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, notes: e.target.value })}
                      />
                    </div>

                    <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <Button variant="primary" size="md" type="submit" icon={Send} style={{ flexGrow: 1 }}>
                        Submit Spatial Specification Inquiry
                      </Button>
                      <Button variant="ghost" size="md" onClick={handleCloseEnquiry}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(147, 88, 56, 0.12)',
                      color: 'var(--wood-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem'
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--charcoal-950)', marginBottom: '0.5rem' }}>
                    Specification Inquiry Received
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.75rem' }}>
                    Thank you, <strong>{enquiryForm.name}</strong>. Our architectural engineering desk for <strong>{enquiryModalApp.title}</strong> has received your parameters and will respond within 24 business hours.
                  </p>
                  <Button variant="primary" size="md" onClick={handleCloseEnquiry}>
                    Done & Return to Applications
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
