import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Box,
  CheckCircle2,
  Award,
  TreePine
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { aboutData } from '../data/aboutData';

export default function About({ onOpenSampleModal }) {
  const {
    heroStats,
    story,
    philosophy,
    plywoodExpertise,
    hardwareExpertise,
    qualityStandards,
    sourcing,
    team,
    whyChooseUs,
    cta
  } = aboutData;

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <PageHero
        breadcrumbs={[{ label: 'About Us' }]}
        eyebrow="Heritage & Manufacturing Precision"
        title="Engineering Architectural Substrates & Silent Motion"
        subtitle="We manufacture zero-tolerance calibrated plywood substrates and precision architectural hardware engineered to endure tropical moisture, coastal salinity, and decades of daily motion."
        bgImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
        actions={
          <>
            <Button
              variant="gold"
              size="md"
              onClick={onOpenSampleModal}
              icon={Box}
            >
              Request Specifier Sample Box
            </Button>
            <Button
              variant="outline-light"
              size="md"
              to="/contact"
              icon={ArrowRight}
            >
              Consult Technical Engineer
            </Button>
          </>
        }
        stats={heroStats}
      />

      {/* =========================================================================
          1. COMPANY STORY SECTION
          ========================================================================= */}
      <section className="section-py" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'center',
              marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)'
            }}
          >
            {/* Story Narrative */}
            <div>
              <span className="badge-arch" style={{ marginBottom: '1rem' }}>
                {story.eyebrow}
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)',
                  color: 'var(--charcoal-950)',
                  lineHeight: 1.18,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {story.title}
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--wood-700)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}
              >
                {story.tagline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {story.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Story Visuals */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card-hover)',
                  border: '1px solid var(--border-medium)',
                  position: 'relative'
                }}
              >
                <img
                  src={story.heroImage}
                  alt="Timber and Joinery Craftsmanship"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'clamp(280px, 45vw, 480px)', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Highlight Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: 'var(--charcoal-950)',
                  color: '#ffffff',
                  padding: 'clamp(0.85rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: 'var(--radius-xs)',
                  maxWidth: 'calc(100% - 1.5rem)',
                  boxShadow: 'var(--shadow-dark)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  zIndex: 2
                }}
              >
                <div style={{ color: 'var(--brass-400)', fontSize: '1.15rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Uncompromising Core
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-300)', lineHeight: 1.45 }}>
                  Zero-void composer stitched veneers and molecular PVD hardware engineering.
                </div>
              </div>
            </div>
          </div>

          {/* Company Milestones Timeline */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '3.5rem' }}>
            <h3
              style={{
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--charcoal-600)',
                fontWeight: 700,
                marginBottom: '2rem',
                textAlign: 'center'
              }}
            >
              Key Engineering Milestones
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {story.milestones.map((m, mIdx) => (
                <div
                  key={mIdx}
                  style={{
                    backgroundColor: 'var(--stone-100)',
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-medium)',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--brass-500)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {m.year}
                  </div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--charcoal-900)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {m.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. OUR PHILOSOPHY SECTION
          ========================================================================= */}
      <section className="section-py" style={{ backgroundColor: 'var(--stone-100)', borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <SectionHeading
            align="center"
            eyebrow={philosophy.eyebrow}
            title={philosophy.title}
            subtitle={philosophy.subtitle}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              marginTop: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {philosophy.pillars.map((pillar, pIdx) => (
              <motion.div
                key={pIdx}
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 2.5vw, 2rem)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      className="font-serif"
                      style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--brass-500)',
                        lineHeight: 1
                      }}
                    >
                      {pillar.num}
                    </span>
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--wood-600)',
                        backgroundColor: 'rgba(147, 88, 56, 0.08)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-xs)'
                      }}
                    >
                      Pillar {pIdx + 1}
                    </span>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.3rem',
                      color: 'var(--charcoal-950)',
                      marginBottom: '0.85rem',
                      lineHeight: 1.25
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {pillar.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--wood-700)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: 'var(--wood-600)', flexShrink: 0 }} />
                  <span>{pillar.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. PLYWOOD EXPERTISE SECTION
          ========================================================================= */}
      <section className="section-py" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Image Spread */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-medium)',
                  aspectRatio: '4 / 3.3'
                }}
              >
                <img
                  src={plywoodExpertise.image}
                  alt="Timber Processing & Plywood Calibration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Technical Benchmarks Bar */}
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '0.65rem',
                  backgroundColor: 'var(--stone-100)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-medium)'
                }}
              >
                {plywoodExpertise.technicalHighlights.map((stat, sIdx) => (
                  <div key={sIdx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.675rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Narrative & Expertise Points */}
            <div>
              <span className="badge-arch" style={{ marginBottom: '1rem' }}>
                {plywoodExpertise.eyebrow}
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: 'var(--charcoal-950)',
                  lineHeight: 1.2,
                  marginBottom: '1rem'
                }}
              >
                {plywoodExpertise.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {plywoodExpertise.subtitle}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {plywoodExpertise.points.map((pt, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--stone-50)',
                      padding: '1.25rem 1.4rem',
                      borderRadius: 'var(--radius-xs)',
                      borderLeft: '3px solid var(--wood-600)',
                      border: '1px solid var(--border-light)',
                      borderLeftWidth: '3px'
                    }}
                  >
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-900)', marginBottom: '0.35rem' }}>
                      {pt.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-700)', margin: 0, lineHeight: 1.55 }}>
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. HARDWARE EXPERTISE SECTION (DARK LUXURY EDITORIAL SPREAD)
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
            backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(194, 155, 56, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Left Narrative & Points */}
            <div>
              <span className="badge-arch-dark" style={{ marginBottom: '1rem' }}>
                {hardwareExpertise.eyebrow}
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '1rem'
                }}
              >
                {hardwareExpertise.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--charcoal-300)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {hardwareExpertise.subtitle}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {hardwareExpertise.points.map((pt, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '1.25rem 1.4rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderLeft: '3px solid var(--brass-400)'
                    }}
                  >
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                      {pt.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-300)', margin: 0, lineHeight: 1.55 }}>
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hardware Visual */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: 'var(--shadow-dark)',
                  aspectRatio: '4 / 3.3'
                }}
              >
                <img
                  src={hardwareExpertise.image}
                  alt="Precision Hardware & PVD Titanium Finishes"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Technical Hardware Benchmarks Bar */}
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '0.65rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {hardwareExpertise.technicalHighlights.map((stat, sIdx) => (
                  <div key={sIdx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.675rem', color: 'var(--charcoal-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brass-400)' }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. QUALITY STANDARDS & TESTING SECTION
          ========================================================================= */}
      <section className="section-py" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <SectionHeading
            align="center"
            eyebrow={qualityStandards.eyebrow}
            title={qualityStandards.title}
            subtitle={qualityStandards.subtitle}
          />

          {/* 6-Stage Laboratory Test Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.75rem',
              marginTop: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {qualityStandards.tests.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--stone-50)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-xs)',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.85rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: 'var(--wood-600)',
                      backgroundColor: 'rgba(147, 88, 56, 0.1)',
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {t.num}
                  </span>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--charcoal-900)',
                      margin: 0,
                      lineHeight: 1.3
                    }}
                  >
                    {t.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Client Certifications & Standards Placeholder Bar */}
          <div
            style={{
              backgroundColor: 'var(--stone-100)',
              border: '1px dashed var(--charcoal-400)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--wood-700)',
                marginBottom: '1rem'
              }}
            >
              <Award size={16} /> Certified Compliance & Engineering Accreditations
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {qualityStandards.clientCertifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-medium)'
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.85rem', color: 'var(--brass-500)', marginBottom: '0.25rem' }}>
                    {cert.code}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--charcoal-900)', marginBottom: '0.35rem' }}>
                    {cert.title}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--charcoal-600)', margin: 0, lineHeight: 1.45 }}>
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. SOURCING & AGRO-FORESTRY SECTION
          ========================================================================= */}
      <section className="section-py" style={{ backgroundColor: 'var(--stone-100)', borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'center'
            }}
          >
            {/* Sourcing Visual */}
            <div
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <img
                src={sourcing.image}
                alt="Responsible Agro-Forestry & Timber Plantation"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'clamp(280px, 45vw, 460px)', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Sourcing Narrative & Commitments */}
            <div>
              <span className="badge-arch" style={{ marginBottom: '1rem' }}>
                {sourcing.eyebrow}
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: 'var(--charcoal-950)',
                  lineHeight: 1.2,
                  marginBottom: '1rem'
                }}
              >
                {sourcing.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {sourcing.subtitle}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sourcing.commitments.map((comm, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      backgroundColor: '#ffffff',
                      padding: '1.1rem 1.25rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-medium)'
                    }}
                  >
                    <TreePine size={20} style={{ color: 'var(--wood-600)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--charcoal-900)', marginBottom: '0.2rem' }}>
                        {comm.title}
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-700)', margin: 0, lineHeight: 1.5 }}>
                        {comm.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. TEAM & LEADERSHIP SECTION (PLACEHOLDERS READY FOR CLIENT DATA)
          ========================================================================= */}
      <section className="section-py" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <SectionHeading
            align="center"
            eyebrow={team.eyebrow}
            title={team.title}
            subtitle={team.subtitle}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              marginTop: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {team.members.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Member Portrait */}
                <div style={{ height: 'clamp(240px, 35vw, 290px)', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--charcoal-900)' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(18, 20, 23, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--brass-400)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}
                  >
                    {member.experience}
                  </div>
                </div>

                {/* Member Bio */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.25rem',
                        color: 'var(--charcoal-950)',
                        marginBottom: '0.25rem',
                        lineHeight: 1.25
                      }}
                    >
                      {member.name}
                    </h3>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--wood-600)', marginBottom: '0.85rem' }}>
                      {member.role}
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. WHY CUSTOMERS CHOOSE US SECTION
          ========================================================================= */}
      <section className="section-py" style={{ backgroundColor: 'var(--stone-100)', borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <SectionHeading
            align="center"
            eyebrow={whyChooseUs.eyebrow}
            title={whyChooseUs.title}
            subtitle={whyChooseUs.subtitle}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.75rem',
              marginTop: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {whyChooseUs.reasons.map((reason, rIdx) => (
              <motion.div
                key={rIdx}
                whileHover={{ translateY: -4 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-medium)',
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--brass-500)',
                      marginBottom: '0.75rem',
                      lineHeight: 1
                    }}
                  >
                    {reason.num}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--charcoal-950)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. CALL TO ACTION (CTA) SECTION
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
            backgroundImage: 'radial-gradient(circle at 75% 50%, rgba(194, 155, 56, 0.12) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <Container>
          <div
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <span className="badge-arch-dark" style={{ marginBottom: '1.25rem' }}>
              {cta.eyebrow}
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              {cta.title}
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--charcoal-300)',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              {cta.subtitle}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={onOpenSampleModal}
                icon={Box}
              >
                {cta.primaryButtonText}
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                to="/contact"
                icon={ArrowRight}
              >
                {cta.secondaryButtonText}
              </Button>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-400)', margin: 0 }}>
              {cta.contactNote}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
