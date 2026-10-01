import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  ArrowRight,
  Box,
  Layers,
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Send,
  Share2,
  Check,
  Eye,
  Award
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import { projectCategories, projects, projectStats } from '../data/projectsData';

export default function Projects({ onOpenSampleModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesCategory =
        selectedCategory === 'all' || proj.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.architect.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.application.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.materialsUsed.some((m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        proj.hardwareUsed.some((h) =>
          h.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProjectModal]);

  // Handle modal open
  const handleOpenProject = (project) => {
    setActiveProjectModal(project);
    setActiveGalleryIndex(0);
    setLightboxOpen(false);
    setCopiedLink(false);
  };

  // Handle modal close
  const handleCloseProject = () => {
    setActiveProjectModal(null);
    setLightboxOpen(false);
  };

  // Gallery Navigation
  const handlePrevImage = (e) => {
    e?.stopPropagation();
    if (!activeProjectModal) return;
    setActiveGalleryIndex((prev) =>
      prev === 0 ? activeProjectModal.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    if (!activeProjectModal) return;
    setActiveGalleryIndex((prev) =>
      prev === activeProjectModal.gallery.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!activeProjectModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          setActiveProjectModal(null);
        }
      } else if (e.key === 'ArrowLeft') {
        setActiveGalleryIndex((prev) =>
          prev === 0 ? activeProjectModal.gallery.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setActiveGalleryIndex((prev) =>
          prev === activeProjectModal.gallery.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectModal, lightboxOpen]);

  const handleCopyProjectLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* =========================================================================
          1. PAGE HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[{ label: 'Architectural Portfolio' }]}
        eyebrow="Architectural Case Studies & Gallery"
        title="Landmark Architecture & Bespoke Joinery Realized"
        subtitle="An editorial showcase of luxury penthouses, corporate headquarters, beachfront resorts, chef kitchens, walk-in dressing suites, and artisanal furniture built with PLYARCH calibrated substrates and precision hardware."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
        actions={
          <>
            <Button
              variant="gold"
              size="md"
              onClick={onOpenSampleModal}
              icon={Box}
            >
              Request Specifier Portfolio
            </Button>
            <Button
              variant="outline-light"
              size="md"
              to="/contact"
              icon={ArrowRight}
            >
              Submit Project for Specification
            </Button>
          </>
        }
        stats={projectStats}
      />

      {/* =========================================================================
          2. STICKY CATEGORY FILTER & SEARCH BAR
          ========================================================================= */}
      <div
        style={{
          position: 'sticky',
          top: '68px',
          zIndex: 40,
          backgroundColor: 'rgba(252, 251, 249, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-subtle)',
          padding: '0.85rem 0',
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
            {/* Category Filter Pills */}
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
              {projectCategories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8rem',
                      fontWeight: active ? 600 : 500,
                      backgroundColor: active ? 'var(--charcoal-900)' : 'var(--stone-100)',
                      color: active ? '#ffffff' : 'var(--charcoal-800)',
                      border: active ? '1px solid var(--charcoal-900)' : '1px solid var(--border-medium)',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span>{cat.name}</span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        opacity: active ? 0.9 : 0.6,
                        backgroundColor: active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.06)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {cat.id === 'all'
                        ? projects.length
                        : projects.filter((p) => p.category === cat.id).length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Real-Time Search Box */}
            <div style={{ position: 'relative', minWidth: '220px', flexGrow: 1, maxWidth: '360px' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--charcoal-400)'
                }}
              />
              <input
                type="text"
                placeholder="Search projects, materials, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 1rem 0.55rem 2.4rem',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: '#ffffff',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)'
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--wood-600)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--charcoal-400)',
                    cursor: 'pointer'
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          3. EDITORIAL MASONRY / ARCHITECTURAL GALLERY GRID
          ========================================================================= */}
      <section className="section-py">
        <Container>
          {/* Active Filter Title & Results Count */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--wood-700)', fontWeight: 700 }}>
                Curated Case Studies
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 1.85rem)', color: 'var(--charcoal-950)', margin: '0.2rem 0 0 0' }}>
                {selectedCategory === 'all'
                  ? 'All Architectural Typologies'
                  : `${projectCategories.find((c) => c.id === selectedCategory)?.name} Projects`}
              </h2>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--charcoal-500)', fontWeight: 500 }}>
              Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Gallery Masonry Layout */}
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(1.5rem, 3.5vw, 2.25rem)'
              }}
            >
              <AnimatePresence>
                {filteredProjects.map((proj, idx) => {
                  const isFeatured = proj.featured;

                  return (
                    <motion.div
                      layout
                      key={proj.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, delay: idx * 0.04 }}
                      onClick={() => handleOpenProject(proj)}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-card)',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform var(--transition-base), box-shadow var(--transition-base)'
                      }}
                      className="project-masonry-card"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                      }}
                    >
                      {/* Image Area */}
                      <div
                        style={{
                          position: 'relative',
                          aspectRatio: isFeatured ? '16 / 10' : '4 / 3',
                          overflow: 'hidden',
                          backgroundColor: 'var(--charcoal-900)'
                        }}
                      >
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                          className="project-image-hover"
                        />

                        {/* Top Badges */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            right: '1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            zIndex: 2
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: 'rgba(18, 20, 23, 0.85)',
                              backdropFilter: 'blur(8px)',
                              color: '#ffffff',
                              padding: '0.35rem 0.75rem',
                              borderRadius: 'var(--radius-xs)',
                              fontSize: '0.725rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.08em',
                              border: '1px solid rgba(255, 255, 255, 0.15)'
                            }}
                          >
                            {proj.categoryName}
                          </span>

                          <span
                            style={{
                              backgroundColor: 'rgba(0, 0, 0, 0.6)',
                              backdropFilter: 'blur(8px)',
                              color: '#ffffff',
                              padding: '0.3rem 0.6rem',
                              borderRadius: 'var(--radius-full)',
                              fontSize: '0.7rem',
                              fontWeight: 500,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}
                          >
                            <Eye size={12} /> {proj.gallery.length} Views
                          </span>
                        </div>

                        {/* Hover Overlay Icon */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(14, 16, 19, 0.85) 0%, rgba(14, 16, 19, 0.15) 50%, transparent 100%)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '1.5rem',
                            opacity: 1,
                            transition: 'opacity var(--transition-base)'
                          }}
                        >
                          <div style={{ color: '#ffffff', width: '100%' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--brass-300)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                              {proj.application}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--charcoal-300)' }}>
                              <MapPin size={13} style={{ color: 'var(--wood-400)' }} />
                              <span>{proj.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                        <div>
                          {/* Title */}
                          <h3
                            className="font-serif"
                            style={{
                              fontSize: '1.35rem',
                              lineHeight: 1.25,
                              color: 'var(--charcoal-950)',
                              marginBottom: '0.75rem'
                            }}
                          >
                            {proj.title}
                          </h3>

                          {/* Summary */}
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.6,
                              marginBottom: '1.25rem',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {proj.summary}
                          </p>

                          {/* Quick Spec Highlights */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.775rem', color: 'var(--charcoal-800)' }}>
                              <Layers size={13} style={{ color: 'var(--wood-600)', flexShrink: 0 }} />
                              <span style={{ fontWeight: 600 }}>Plywood:</span>
                              <span style={{ color: 'var(--charcoal-600)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                {proj.materialsUsed[0]?.name}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.775rem', color: 'var(--charcoal-800)' }}>
                              <ShieldCheck size={13} style={{ color: 'var(--brass-500)', flexShrink: 0 }} />
                              <span style={{ fontWeight: 600 }}>Hardware:</span>
                              <span style={{ color: 'var(--charcoal-600)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                {proj.hardwareUsed[0]?.name}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Footer Action Strip */}
                        <div
                          style={{
                            borderTop: '1px solid var(--border-light)',
                            paddingTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <span style={{ fontSize: '0.75rem', color: 'var(--charcoal-500)' }}>
                            Ar. {proj.architect.split('&')[0]}
                          </span>
                          <span
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              color: 'var(--wood-700)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}
                          >
                            View Case Study <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 1rem',
                backgroundColor: 'var(--stone-100)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <Search size={36} style={{ color: 'var(--charcoal-400)', margin: '0 auto 1rem' }} />
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--charcoal-900)', marginBottom: '0.5rem' }}>
                No Architectural Projects Found
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                We couldn't find any case studies matching "{searchQuery}". Try selecting another category or clear your search term.
              </p>
              <Button
                variant="wood"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filter & Search
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================================
          4. DETAILED PROJECT VIEW / MODAL (FULL ARCHITECTURAL SPECIFIER VIEW)
          ========================================================================= */}
      <AnimatePresence>
        {activeProjectModal && (
          <div
            className="modal-overlay"
            onClick={handleCloseProject}
            style={{
              zIndex: 1000,
              padding: 'clamp(0.5rem, 2.5vw, 1.5rem)',
              backgroundColor: 'rgba(14, 16, 19, 0.88)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 25 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="modal-content"
              style={{
                maxWidth: '1180px',
                width: '100%',
                maxHeight: '94vh',
                padding: 0,
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Modal Top Sticky Header */}
              <div
                style={{
                  padding: '1rem clamp(1rem, 3vw, 2rem)',
                  borderBottom: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  zIndex: 20
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="badge-arch">
                    {activeProjectModal.categoryName} Case Study
                  </span>
                  <span style={{ color: 'var(--charcoal-300)' }}>•</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--charcoal-600)', fontWeight: 500 }}>
                    {activeProjectModal.application}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <button
                    onClick={handleCopyProjectLink}
                    title="Share Project Link"
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: copiedLink ? 'var(--wood-600)' : 'var(--stone-100)',
                      color: copiedLink ? '#ffffff' : 'var(--charcoal-800)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {copiedLink ? <Check size={14} /> : <Share2 size={14} />}
                    <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                  </button>

                  <button
                    onClick={handleCloseProject}
                    title="Close case study (Esc)"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--stone-100)',
                      color: 'var(--charcoal-900)',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--charcoal-900)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--stone-100)';
                      e.currentTarget.style.color = 'var(--charcoal-900)';
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div style={{ overflowY: 'auto', flexGrow: 1, padding: '0 0 2.5rem 0' }}>
                {/* =============================================================
                    MULTI-IMAGE INTERACTIVE GALLERY HERO
                    ============================================================= */}
                <div style={{ backgroundColor: 'var(--charcoal-950)', position: 'relative' }}>
                  {/* Main Active Gallery Image */}
                  <div
                    style={{
                      position: 'relative',
                      height: ' clamp(360px, 48vh, 520px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeGalleryIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        src={activeProjectModal.gallery[activeGalleryIndex]}
                        alt={`${activeProjectModal.title} - View ${activeGalleryIndex + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </AnimatePresence>

                    {/* Left / Right Nav Arrows */}
                    {activeProjectModal.gallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          style={{
                            position: 'absolute',
                            left: '1.25rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(18, 20, 23, 0.75)',
                            backdropFilter: 'blur(8px)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            width: '42px',
                            height: '42px',
                            borderRadius: 'var(--radius-full)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--brass-500)';
                            e.currentTarget.style.color = 'var(--charcoal-950)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(18, 20, 23, 0.75)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                        >
                          <ChevronLeft size={20} />
                        </button>

                        <button
                          onClick={handleNextImage}
                          style={{
                            position: 'absolute',
                            right: '1.25rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(18, 20, 23, 0.75)',
                            backdropFilter: 'blur(8px)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            width: '42px',
                            height: '42px',
                            borderRadius: 'var(--radius-full)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--brass-500)';
                            e.currentTarget.style.color = 'var(--charcoal-950)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(18, 20, 23, 0.75)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}

                    {/* Image Counter & Expand Trigger */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1.25rem',
                        right: '1.25rem',
                        display: 'flex',
                        gap: '0.5rem',
                        zIndex: 10
                      }}
                    >
                      <button
                        onClick={() => setLightboxOpen(true)}
                        style={{
                          backgroundColor: 'rgba(18, 20, 23, 0.85)',
                          backdropFilter: 'blur(8px)',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '0.4rem 0.75rem',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          cursor: 'pointer'
                        }}
                      >
                        <Maximize2 size={13} /> Fullscreen Lightbox
                      </button>
                      <span
                        style={{
                          backgroundColor: 'rgba(18, 20, 23, 0.85)',
                          backdropFilter: 'blur(8px)',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '0.4rem 0.75rem',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}
                      >
                        {activeGalleryIndex + 1} / {activeProjectModal.gallery.length}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Thumbnail Strip */}
                  <div
                    style={{
                      padding: '0.85rem 1.5rem',
                      display: 'flex',
                      gap: '0.75rem',
                      overflowX: 'auto',
                      backgroundColor: 'rgba(14, 16, 19, 0.95)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {activeProjectModal.gallery.map((imgUrl, thumbIdx) => (
                      <button
                        key={thumbIdx}
                        onClick={() => setActiveGalleryIndex(thumbIdx)}
                        style={{
                          width: '80px',
                          height: '56px',
                          borderRadius: 'var(--radius-xs)',
                          overflow: 'hidden',
                          border:
                            activeGalleryIndex === thumbIdx
                              ? '2px solid var(--brass-400)'
                              : '2px solid transparent',
                          opacity: activeGalleryIndex === thumbIdx ? 1 : 0.5,
                          cursor: 'pointer',
                          flexShrink: 0,
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt="Thumbnail view"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* =============================================================
                    PROJECT DETAILS & ARCHITECTURAL SPECIFICATIONS
                    ============================================================= */}
                <div style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem) clamp(1rem, 3.5vw, 2.5rem) 1rem clamp(1rem, 3.5vw, 2.5rem)' }}>
                  {/* Top Architectural Metadata Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1.25rem',
                      backgroundColor: 'var(--stone-100)',
                      padding: '1.25rem 1.75rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-medium)',
                      marginBottom: '2rem'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                        <MapPin size={13} style={{ color: 'var(--wood-600)' }} /> Location
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-950)' }}>
                        {activeProjectModal.location}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                        <Building size={13} style={{ color: 'var(--wood-600)' }} /> Architect / Firm
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-950)' }}>
                        {activeProjectModal.architect}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                        <Calendar size={13} style={{ color: 'var(--wood-600)' }} /> Completion & Scale
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-950)' }}>
                        {activeProjectModal.completion} • {activeProjectModal.area}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                        <Award size={13} style={{ color: 'var(--brass-500)' }} /> Core Warranty
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--wood-700)' }}>
                        {activeProjectModal.stats[2]?.val || '30-Year Guarantee'}
                      </div>
                    </div>
                  </div>

                  {/* Main Title & Narrative */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h2
                      className="font-serif"
                      style={{
                        fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
                        color: 'var(--charcoal-950)',
                        lineHeight: 1.2,
                        marginBottom: '1rem'
                      }}
                    >
                      {activeProjectModal.title}
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '980px' }}>
                      {activeProjectModal.summary}
                    </p>
                  </div>

                  {/* Challenge & Engineered Solution Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--stone-100)',
                      borderLeft: '4px solid var(--charcoal-900)',
                      padding: '1.5rem',
                      borderRadius: 'var(--radius-xs)',
                      marginBottom: '2.5rem',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.5rem'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-700)', display: 'block', marginBottom: '0.35rem' }}>
                        Architectural Challenge:
                      </span>
                      <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-800)', margin: 0, lineHeight: 1.55 }}>
                        {activeProjectModal.challenge}
                      </p>
                    </div>

                    <div style={{ borderLeft: '1px dashed var(--border-medium)', paddingLeft: '1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brass-500)', display: 'block', marginBottom: '0.35rem' }}>
                        Engineered Solution:
                      </span>
                      <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-950)', fontWeight: 500, margin: 0, lineHeight: 1.55 }}>
                        {activeProjectModal.solution}
                      </p>
                    </div>
                  </div>

                  {/* Materials & Hardware Two-Column Specification Matrix */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '2rem',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {/* Materials Used Panel */}
                    <div
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-xs)',
                        padding: '1.75rem',
                        boxShadow: 'var(--shadow-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                        <Layers size={20} style={{ color: 'var(--wood-600)' }} />
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--charcoal-900)', margin: 0 }}>
                          Materials & Substrates Specified
                        </h3>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {activeProjectModal.materialsUsed.map((mat, mIdx) => (
                          <div
                            key={mIdx}
                            style={{
                              backgroundColor: 'var(--stone-50)',
                              padding: '0.95rem 1.1rem',
                              borderRadius: 'var(--radius-xs)',
                              border: '1px solid var(--border-light)'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                              <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                                {mat.name}
                              </div>
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: 'var(--radius-xs)',
                                  backgroundColor: 'rgba(147, 88, 56, 0.1)',
                                  color: 'var(--wood-700)'
                                }}
                              >
                                {mat.badge}
                              </span>
                            </div>
                            <div style={{ fontSize: '0.825rem', color: 'var(--charcoal-600)' }}>
                              {mat.spec}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hardware Used Panel */}
                    <div
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-xs)',
                        padding: '1.75rem',
                        boxShadow: 'var(--shadow-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                        <ShieldCheck size={20} style={{ color: 'var(--brass-500)' }} />
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--charcoal-900)', margin: 0 }}>
                          Precision Hardware Specified
                        </h3>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {activeProjectModal.hardwareUsed.map((hw, hIdx) => (
                          <div
                            key={hIdx}
                            style={{
                              backgroundColor: 'var(--stone-50)',
                              padding: '0.95rem 1.1rem',
                              borderRadius: 'var(--radius-xs)',
                              border: '1px solid var(--border-light)'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                              <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                                {hw.name}
                              </div>
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: 'var(--radius-xs)',
                                  backgroundColor: 'rgba(194, 155, 56, 0.12)',
                                  color: 'var(--brass-500)'
                                }}
                              >
                                {hw.badge}
                              </span>
                            </div>
                            <div style={{ fontSize: '0.825rem', color: 'var(--charcoal-600)' }}>
                              {hw.spec}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Quantitative Stats Strip */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                      gap: '1.25rem',
                      padding: '1.5rem',
                      backgroundColor: 'var(--charcoal-950)',
                      borderRadius: 'var(--radius-xs)',
                      color: '#ffffff',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {activeProjectModal.stats.map((st, sIdx) => (
                      <div key={sIdx} style={{ textAlign: 'center' }}>
                        <div className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--brass-400)', lineHeight: 1.1 }}>
                          {st.val}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem' }}>
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Modal Action Strip */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Button
                        variant="wood"
                        size="md"
                        onClick={() => {
                          handleCloseProject();
                          onOpenSampleModal();
                        }}
                        icon={Box}
                      >
                        Request Case Study Spec Binder
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        to="/contact"
                        onClick={handleCloseProject}
                        icon={Send}
                      >
                        Enquire for Similar Project
                      </Button>
                    </div>

                    <button
                      onClick={handleCloseProject}
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--charcoal-600)',
                        cursor: 'pointer',
                        padding: '0.5rem 1rem'
                      }}
                    >
                      ← Back to Gallery
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          5. FULLSCREEN LIGHTBOX VIEWER
          ========================================================================= */}
      <AnimatePresence>
        {lightboxOpen && activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.96)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            {/* Lightbox Controls */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#ffffff',
                zIndex: 10
              }}
            >
              <div>
                <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
                  {activeProjectModal.title}
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--charcoal-400)' }}>
                  View {activeGalleryIndex + 1} of {activeProjectModal.gallery.length} • {activeProjectModal.location}
                </span>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Image */}
            <img
              src={activeProjectModal.gallery[activeGalleryIndex]}
              alt={activeProjectModal.title}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                borderRadius: 'var(--radius-xs)'
              }}
            />

            {/* Lightbox Nav Buttons */}
            {activeProjectModal.gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          6. PROJECT SPECIFICATION & ARCHITECTURAL CONSULTATION CTA
          ========================================================================= */}
      <section
        className="section-py"
        style={{
          backgroundColor: 'var(--charcoal-950)',
          color: 'var(--text-inverse)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 5vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-arch-dark" style={{ marginBottom: '1.25rem' }}>
                Architectural Partnerships
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
                Feature Your Next Project in Our Architectural Archive
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--charcoal-300)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}>
                We collaborate with leading architectural studios, interior designers, and turnkey fit-out contractors across India to supply custom calibrated timber substrates, certified fire-rated panels, and bespoke PVD hardware.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="gold" size="lg" onClick={onOpenSampleModal} icon={Box}>
                  Request Architect Sample Kit
                </Button>
                <Button variant="outline-light" size="lg" to="/contact" icon={ArrowRight}>
                  Schedule Project Consultation
                </Button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-sm)',
                padding: '2.5rem'
              }}
            >
              <h3 className="font-serif" style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1.25rem' }}>
                Why Leading Architects Specify PLYARCH:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--brass-400)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Zero-Void Calibrated Gurjan Substrates:</strong>
                    <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', lineHeight: 1.45 }}>
                      Quad-pressed marine boards with ±0.15mm thickness precision eliminating surface wave defects.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--brass-400)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>240-Hour Salt-Spray Tested PVD Hardware:</strong>
                    <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', lineHeight: 1.45 }}>
                      Molecular Physical Vapor Deposition coatings immune to coastal humidity and high-frequency touch.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--brass-400)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Direct OEM & Site Dispatch Logistics:</strong>
                    <p style={{ fontSize: '0.825rem', color: 'var(--charcoal-300)', margin: '0.2rem 0 0 0', lineHeight: 1.45 }}>
                      Complete project Bill of Materials (BOM) fulfilled with batch-matched veneers and certified IS documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global CSS for Smooth Hover Effects */}
      <style>{`
        .project-masonry-card:hover .project-image-hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
