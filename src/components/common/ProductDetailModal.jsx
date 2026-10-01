import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Check,
  Send,
  Download,
  MessageSquare,
  RotateCcw,
  Box
} from 'lucide-react';
import Button from './Button';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenSampleModal }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectCity: '',
    estimatedQuantity: 'Approx. 50 - 150 Sheets / Sets',
    notes: ''
  });

  if (!isOpen || !product) return null;

  // Handle Spec Sheet / Brochure Download Placeholder
  const handleDownloadSpec = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  // Handle Quick Inquiry Submit
  const handleQuickInquire = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const handleResetInquiry = () => {
    setInquirySent(false);
    setShowInquiryForm(false);
    setInquiryForm({
      name: '',
      phone: '',
      email: '',
      projectCity: '',
      estimatedQuantity: 'Approx. 50 - 150 Sheets / Sets',
      notes: ''
    });
  };

  // Direct WhatsApp Quote URL Generator
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello PLYARCH & CO. Technical Desk,\n\n` +
      `I am inquiring about the following product:\n` +
      `• Product: ${product.name}\n` +
      `• Category: ${product.categoryName}\n` +
      `• Grade/Spec: ${product.grade || 'Standard'}\n` +
      `• Required Thickness: ${product.thickness || 'Standard'}\n` +
      `• Quantity: ${inquiryForm.estimatedQuantity || 'To be specified'}\n` +
      `• City: ${inquiryForm.projectCity || 'N/A'}\n\n` +
      `Please provide the official rate sheet, batch test report, and availability.`
    );
    return `https://wa.me/919820012345?text=${text}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1200, padding: 'clamp(0.5rem, 2.5vw, 1.5rem)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '920px',
          width: '100%',
          maxHeight: '92vh',
          padding: 0,
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: 'var(--text-primary)',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow-dark)',
          border: '1px solid var(--border-medium)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Sticky Top Header */}
        <div
          style={{
            padding: '0.85rem clamp(1rem, 3vw, 1.75rem)',
            borderBottom: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            zIndex: 20,
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', minWidth: 0 }}>
            <span className="badge-arch">
              {product.categoryName}
            </span>
            {product.grade && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--stone-200)',
                  color: 'var(--charcoal-900)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-xs)',
                  whiteSpace: 'nowrap'
                }}
              >
                {product.grade}
              </span>
            )}
            {product.specSheetCode && (
              <span style={{ fontSize: '0.75rem', color: 'var(--charcoal-500)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                {product.specSheetCode}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            title="Close product view (Esc)"
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
              flexShrink: 0,
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

        {/* Modal Scrollable Body */}
        <div style={{ overflowY: 'auto', flexGrow: 1, padding: '0 0 2rem 0' }}>
          {/* =================================================================
              1. LARGE PRODUCT IMAGE HERO VIEWPORT
              ================================================================= */}
          <div style={{ position: 'relative', height: 'clamp(200px, 30vh, 300px)', backgroundColor: 'var(--charcoal-950)' }}>
            <img
              src={product.image}
              alt={product.name}
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80';
              }}
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
                padding: 'clamp(1rem, 3.5vw, 1.75rem) clamp(1rem, 3.5vw, 2rem)'
              }}
            >
              {product.badge && (
                <span
                  style={{
                    alignSelf: 'flex-start',
                    marginBottom: '0.35rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    backgroundColor: 'var(--brass-500)',
                    color: 'var(--charcoal-950)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-xs)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {product.badge}
                </span>
              )}
              <h2
                className="font-serif"
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1.35rem, 2.8vw, 2rem)',
                  fontWeight: 600,
                  lineHeight: 1.18,
                  margin: '0 0 0.25rem 0'
                }}
              >
                {product.name}
              </h2>
              <div style={{ color: 'var(--brass-300)', fontSize: '0.85rem', fontWeight: 500 }}>
                {product.tagline}
              </div>
            </div>
          </div>

          {/* =================================================================
              2. CONTENT, FEATURES, SPECS, SIZES & APPLICATIONS
              ================================================================= */}
          <div style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem) clamp(1rem, 3.5vw, 2rem)' }}>
            {/* Description */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-500)', fontWeight: 700, marginBottom: '0.45rem' }}>
                Architectural Material Overview
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                {product.description}
              </p>
            </div>

            {/* Key Engineered Features */}
            {product.features && product.features.length > 0 && (
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-500)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  Key Engineering Highlights
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '0.65rem'
                  }}
                >
                  {product.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        backgroundColor: 'var(--stone-50)',
                        padding: '0.75rem 0.85rem',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: 'var(--wood-600)', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.825rem', color: 'var(--charcoal-800)', lineHeight: 1.45 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Grid */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-500)', fontWeight: 700, marginBottom: '0.65rem' }}>
                Technical & Material Specifications
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                  backgroundColor: 'var(--stone-100)',
                  padding: '1.15rem 1.25rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-medium)'
                }}
              >
                {product.grade && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Certification Grade
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.grade}</strong>
                  </div>
                )}
                {product.warranty && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Performance Warranty
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--wood-700)' }}>{product.warranty}</strong>
                  </div>
                )}
                {product.coreSpecies && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Core Material / Timber
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.coreSpecies}</strong>
                  </div>
                )}
                {product.density && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Panel Density
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.density}</strong>
                  </div>
                )}
                {product.bondingResin && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Adhesive / Bonding
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.bondingResin}</strong>
                  </div>
                )}
                {product.emission && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Emission Standard
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.emission}</strong>
                  </div>
                )}
                {product.durability && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Mechanical Cycle Test
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.durability}</strong>
                  </div>
                )}
                {product.saltSpray && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Salt-Spray Resistance
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--brass-500)' }}>{product.saltSpray}</strong>
                  </div>
                )}
                {product.finish && (
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.15rem' }}>
                      Surface / Finish
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--charcoal-950)' }}>{product.finish}</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Available Sizes & Thickness */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginBottom: '1.75rem'
              }}
            >
              {/* Thickness Options */}
              {product.thickness && (
                <div style={{ backgroundColor: 'var(--stone-50)', padding: '1rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--wood-700)', fontWeight: 700, display: 'block', marginBottom: '0.45rem' }}>
                    Available Thickness Options
                  </span>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {product.thickness.split(',').map((th, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--border-medium)',
                          padding: '0.2rem 0.5rem',
                          borderRadius: 'var(--radius-xs)',
                          color: 'var(--charcoal-900)'
                        }}
                      >
                        {th.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Dimensions / Sizes */}
              {product.availableSizes && (
                <div style={{ backgroundColor: 'var(--stone-50)', padding: '1rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--wood-700)', fontWeight: 700, display: 'block', marginBottom: '0.45rem' }}>
                    Available Standard Sizes / Formats
                  </span>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {product.availableSizes.map((sz, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--border-medium)',
                          padding: '0.2rem 0.5rem',
                          borderRadius: 'var(--radius-xs)',
                          color: 'var(--charcoal-800)'
                        }}
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Recommended Applications */}
            {product.applications && product.applications.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-500)', fontWeight: 700, marginBottom: '0.55rem' }}>
                  Recommended Spatial Applications
                </h3>
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                  {product.applications.map((app, aIdx) => (
                    <span
                      key={aIdx}
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.3rem 0.65rem',
                        backgroundColor: 'var(--stone-200)',
                        borderRadius: 'var(--radius-xs)',
                        color: 'var(--charcoal-800)',
                        fontWeight: 500
                      }}
                    >
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* =================================================================
                3. ACTIONS & QUICK ENQUIRY SECTION
                ================================================================= */}
            <div
              style={{
                borderTop: '1px solid var(--border-medium)',
                paddingTop: '1.5rem'
              }}
            >
              {inquirySent ? (
                /* INQUIRY SUCCESS CONFIRMATION */
                <div style={{ textAlign: 'center', padding: '1.25rem', backgroundColor: 'var(--stone-100)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-medium)' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(147, 88, 56, 0.12)',
                      color: 'var(--wood-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.75rem'
                    }}
                  >
                    <Check size={24} />
                  </div>
                  <h4 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--charcoal-950)', marginBottom: '0.25rem' }}>
                    Quotation Request Logged
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1rem' }}>
                    Our senior technical consultant for <strong>{inquiryForm.projectCity || 'your city'}</strong> will send the itemized specification for <strong>{product.name}</strong> to <strong>{inquiryForm.email}</strong>.
                  </p>
                  <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button variant="gold" size="sm" href={generateWhatsAppUrl()} icon={MessageSquare}>
                      Chat on WhatsApp
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleResetInquiry} icon={RotateCcw}>
                      Submit Another Query
                    </Button>
                  </div>
                </div>
              ) : showInquiryForm ? (
                /* INLINE QUICK ENQUIRY FORM */
                <div style={{ backgroundColor: 'var(--stone-50)', padding: '1.25rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-medium)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <div>
                      <h4 className="font-serif" style={{ fontSize: '1.15rem', color: 'var(--charcoal-950)', margin: 0 }}>
                        Request Architectural Quotation for {product.name}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Receive official trade pricing, volumetric batch discounts, and dispatch timelines.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowInquiryForm(false)}
                      style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleQuickInquire}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your Name / Studio *"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      />
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="Phone Number *"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      />
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="Work Email *"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Project Location / City *"
                        value={inquiryForm.projectCity}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, projectCity: e.target.value })}
                      />
                      <select
                        className="form-select"
                        value={inquiryForm.estimatedQuantity}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, estimatedQuantity: e.target.value })}
                      >
                        <option value="Sample Box Only (Complimentary)">Sample Box Only (Complimentary)</option>
                        <option value="Approx. 25 - 50 Sheets / Sets">Approx. 25 - 50 Sheets / Sets</option>
                        <option value="Approx. 50 - 150 Sheets / Sets">Approx. 50 - 150 Sheets / Sets (Villa)</option>
                        <option value="Approx. 200 - 500 Sheets / Sets">Approx. 200 - 500 Sheets / Sets (Tower)</option>
                        <option value="500+ Sheets / Dealer Wholesale">500+ Sheets / Dealer Wholesale</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <Button variant="primary" size="md" type="submit" icon={Send} style={{ flexGrow: 1, justifyContent: 'center' }}>
                        Submit Quotation Request
                      </Button>
                      <Button variant="gold" size="md" href={generateWhatsAppUrl()} icon={MessageSquare} style={{ justifyContent: 'center' }}>
                        WhatsApp
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                /* PRIMARY ACTION BUTTONS BAR */
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.85rem'
                  }}
                >
                  {/* Left: Download Brochure & Spec */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', width: '100%', maxWidth: '540px' }}>
                    <button
                      onClick={handleDownloadSpec}
                      style={{
                        padding: '0.6rem 1rem',
                        backgroundColor: downloadSuccess ? 'var(--charcoal-900)' : 'var(--stone-100)',
                        color: downloadSuccess ? '#ffffff' : 'var(--charcoal-800)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all var(--transition-fast)',
                        flexGrow: 1,
                        justifyContent: 'center'
                      }}
                    >
                      {downloadSuccess ? <Check size={14} style={{ color: 'var(--brass-400)' }} /> : <Download size={14} />}
                      <span>{downloadSuccess ? `Downloading...` : 'Download Spec Sheet'}</span>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        if (onOpenSampleModal) onOpenSampleModal();
                      }}
                      style={{
                        padding: '0.6rem 1rem',
                        backgroundColor: 'transparent',
                        color: 'var(--wood-700)',
                        border: '1px solid var(--wood-600)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        flexGrow: 1,
                        justifyContent: 'center'
                      }}
                    >
                      <Box size={14} />
                      <span>Request Sample Swatch</span>
                    </button>
                  </div>

                  {/* Right: Enquire Now Action */}
                  <div style={{ width: '100%', maxWidth: '200px' }}>
                    <Button
                      variant="gold"
                      size="md"
                      onClick={() => setShowInquiryForm(true)}
                      icon={Send}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

