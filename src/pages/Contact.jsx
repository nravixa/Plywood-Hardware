import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  AlertCircle,
  ChevronDown,
  Box,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Check,
  RotateCcw
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { experienceCenters, faqList } from '../data/dealersData';

export default function Contact({ onOpenSampleModal }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productCategory: 'Marine & Structural Plywood',
    productRequirement: '',
    message: ''
  });

  // Validation Errors State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [selectedStudioIndex, setSelectedStudioIndex] = useState(0);

  // Available Product Categories for Dropdown
  const productCategories = [
    'Marine & Structural Plywood (IS:710 / BWP)',
    'Fire-Retardant Substrates (IS:5509 Class 1)',
    'Calibrated 4X Substrates (18mm / 25mm)',
    'Solid Pine Blockboards & Door Cores',
    'Architectural Hardware & PVD Levers',
    'Concealed Hinges & Soft-Close Slides',
    'Heavy Floor Pivots & Sliding Systems',
    'Both Plywood & Precision Hardware (Turnkey)',
    'Custom Joinery / Veneers / OEM Contract'
  ];

  // Client-Side Validation Logic
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter at least 2 characters.';
    }

    // Phone validation (numeric, 10-15 digits, allows +, -, spaces)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,14}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    } else if (!phoneRegex.test(formData.phone.trim()) || formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +91 98765 43210).';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Official email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Product Category validation
    if (!formData.productCategory) {
      newErrors.productCategory = 'Please select a product category.';
    }

    // Product / Requirement validation
    if (!formData.productRequirement.trim()) {
      newErrors.productRequirement = 'Please specify your required product grade, thickness, or finish.';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project scale or requirement.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters of description.';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    if (!isValid) {
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) el.focus();
    }
    return isValid;
  };

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    /**
     * =========================================================================
     * BACKEND / SERVICE INTEGRATION GUIDE:
     * -------------------------------------------------------------------------
     * 1. FORMSPREE:
     *    fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *      method: 'POST',
     *      headers: { 'Content-Type': 'application/json' },
     *      body: JSON.stringify(formData)
     *    })
     *
     * 2. CUSTOM BACKEND / API ROUTE:
     *    fetch('/api/contact-enquiry', {
     *      method: 'POST',
     *      headers: { 'Content-Type': 'application/json' },
     *      body: JSON.stringify(formData)
     *    })
     *
     * 3. EMAILJS / WEBHOOK:
     *    emailjs.send('service_id', 'template_id', formData, 'user_id')
     * =========================================================================
     */

    // Simulated network processing latency for UI transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setErrors({});
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      productCategory: 'Marine & Structural Plywood',
      productRequirement: '',
      message: ''
    });
    setErrors({});
  };

  // Generate Direct WhatsApp URL with Pre-Filled Project Requirement
  const generateWhatsAppUrl = (data) => {
    const text = encodeURIComponent(
      `Hello PLYARCH & CO. Technical Desk,\n\n` +
      `I would like to request an official quote/tender:\n` +
      `• Name: ${data.name || 'Architect / Client'}\n` +
      `• Phone: ${data.phone || 'N/A'}\n` +
      `• Email: ${data.email || 'N/A'}\n` +
      `• Category: ${data.productCategory}\n` +
      `• Product/Requirement: ${data.productRequirement}\n` +
      `• Message: ${data.message}\n\n` +
      `Please provide estimated rates, availability, and technical spec sheets.`
    );
    return `https://wa.me/919820012345?text=${text}`;
  };

  const currentStudio = experienceCenters[selectedStudioIndex] || experienceCenters[0];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* =========================================================================
          1. PAGE HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[{ label: 'Contact & Studios' }]}
        eyebrow="Architectural Advisory & Tender Desk"
        title="Consult Our Technical Specifiers & Request a Quote"
        subtitle="Connect with our materials engineers for official project pricing, custom substrate thickness tolerances, CAD drilling coordinates, and sample box dispatch across India."
        bgImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
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
              href="https://wa.me/919820012345?text=Hello%20PLYARCH,%20I%20would%20like%20to%20consult%20an%20architectural%20specifier"
              icon={MessageSquare}
            >
              WhatsApp Technical Desk
            </Button>
          </>
        }
        stats={[
          { value: '<4 Hours', label: 'Average Quote Turnaround' },
          { value: '5 Studios', label: 'Nationwide Material Lounges' },
          { value: '100% Free', label: 'Architect Specifier Boxes' },
          { value: 'Pan-India', label: 'Direct Site Delivery' }
        ]}
      />

      {/* =========================================================================
          2. DIRECT CONTACT CHANNELS STRIP (ADDRESS, PHONE, EMAIL, HOURS)
          ========================================================================= */}
      <section
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-subtle)',
          padding: '2.5rem 0'
        }}
      >
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Headquarters Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--stone-100)',
                  color: 'var(--wood-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid var(--border-medium)'
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-700)', marginBottom: '0.2rem' }}>
                  Headquarters & Flagship
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-950)', margin: '0 0 0.35rem 0' }}>
                  Archwood Gallery, 4th Floor
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
                  Raghuvanshi Mills Compound, Lower Parel, Mumbai, Maharashtra – 400013
                </p>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--stone-100)',
                  color: 'var(--wood-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid var(--border-medium)'
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-700)', marginBottom: '0.2rem' }}>
                  Telephone & Mobile
                </div>
                <div style={{ marginBottom: '0.25rem' }}>
                  <a
                    href="tel:+912249827700"
                    style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-950)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--wood-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--charcoal-950)')}
                  >
                    +91 22 4982 7700
                  </a>
                  <span style={{ fontSize: '0.75rem', color: 'var(--charcoal-500)', marginLeft: '0.4rem' }}>(Boardline)</span>
                </div>
                <div>
                  <a
                    href="tel:+919820012345"
                    style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--wood-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    +91 98200 12345 (WhatsApp / Direct)
                  </a>
                </div>
              </div>
            </div>

            {/* Official Emails */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--stone-100)',
                  color: 'var(--wood-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid var(--border-medium)'
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-700)', marginBottom: '0.2rem' }}>
                  Official Email Desks
                </div>
                <div style={{ marginBottom: '0.25rem' }}>
                  <a
                    href="mailto:projects@plyarch.com"
                    style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--charcoal-950)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--wood-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--charcoal-950)')}
                  >
                    projects@plyarch.com
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:tenders@plyarch.com"
                    style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--wood-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    tenders@plyarch.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--stone-100)',
                  color: 'var(--wood-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid var(--border-medium)'
                }}
              >
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--wood-700)', marginBottom: '0.2rem' }}>
                  Business Operating Hours
                </div>
                <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--charcoal-950)', marginBottom: '0.25rem' }}>
                  Mon – Sat: 9:30 AM – 7:30 PM
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Sunday: By Prior Appointment (Architects & OEM)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. MAIN CONTACT & ENQUIRY FORM WITH VALIDATION + SUCCESS STATES
          ========================================================================= */}
      <section className="section-py">
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(2rem, 5vw, 4.5rem)',
              alignItems: 'flex-start'
            }}
          >
            {/* LEFT COLUMN: ENQUIRY / "REQUEST A QUOTE" FORM */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.25rem, 3.5vw, 2.75rem)',
                boxShadow: 'var(--shadow-card)',
                position: 'relative'
              }}
            >
              {!submittedData ? (
                <div>
                  <div style={{ marginBottom: '2rem' }}>
                    <span className="badge-arch" style={{ marginBottom: '0.65rem' }}>
                      Official Specification & Quotation
                    </span>
                    <h2
                      className="font-serif"
                      style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                        color: 'var(--charcoal-950)',
                        lineHeight: 1.2,
                        marginBottom: '0.65rem'
                      }}
                    >
                      Request a Quote
                    </h2>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      Submit your required plywood grades, thickness, and hardware specifications to receive an official itemized estimate within 4 business hours.
                    </p>
                  </div>

                  {/* Form Element */}
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row 1: Name & Phone */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.25rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {/* Name Field */}
                      <div>
                        <label htmlFor="contact-name" className="form-label">
                          Full Name <span style={{ color: '#d93838' }}>*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className="form-input"
                          placeholder="e.g. Ar. Vikram Singhania"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          style={{
                            borderColor: errors.name ? '#d93838' : undefined
                          }}
                        />
                        {errors.name && (
                          <div id="name-error" role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#d93838', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                            <AlertCircle size={13} /> {errors.name}
                          </div>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="contact-phone" className="form-label">
                          Contact Phone <span style={{ color: '#d93838' }}>*</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          style={{
                            borderColor: errors.phone ? '#d93838' : undefined
                          }}
                        />
                        {errors.phone && (
                          <div id="phone-error" role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#d93838', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                            <AlertCircle size={13} /> {errors.phone}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Product Category */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.25rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {/* Email Field */}
                      <div>
                        <label htmlFor="contact-email" className="form-label">
                          Official Email <span style={{ color: '#d93838' }}>*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className="form-input"
                          placeholder="architect@firm.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          style={{
                            borderColor: errors.email ? '#d93838' : undefined
                          }}
                        />
                        {errors.email && (
                          <div id="email-error" role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#d93838', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                            <AlertCircle size={13} /> {errors.email}
                          </div>
                        )}
                      </div>

                      {/* Product Category Field */}
                      <div>
                        <label htmlFor="contact-category" className="form-label">
                          Product Category <span style={{ color: '#d93838' }}>*</span>
                        </label>
                        <select
                          id="contact-category"
                          name="productCategory"
                          required
                          aria-required="true"
                          className="form-select"
                          value={formData.productCategory}
                          onChange={(e) => {
                            setFormData({ ...formData, productCategory: e.target.value });
                            if (errors.productCategory) setErrors({ ...errors, productCategory: undefined });
                          }}
                        >
                          {productCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Product / Requirement Field */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="contact-requirement" className="form-label">
                        Product / Specific Requirement <span style={{ color: '#d93838' }}>*</span>
                      </label>
                      <input
                        id="contact-requirement"
                        name="productRequirement"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.productRequirement)}
                        aria-describedby={errors.productRequirement ? 'req-error' : undefined}
                        className="form-input"
                        placeholder="e.g. 19mm IS:710 Marine (300 Sheets) + AURA 3D Onyx Hinges (600 Pcs)"
                        value={formData.productRequirement}
                        onChange={(e) => {
                          setFormData({ ...formData, productRequirement: e.target.value });
                          if (errors.productRequirement) setErrors({ ...errors, productRequirement: undefined });
                        }}
                        style={{
                          borderColor: errors.productRequirement ? '#d93838' : undefined
                        }}
                      />
                      {errors.productRequirement && (
                        <div id="req-error" role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#d93838', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          <AlertCircle size={13} /> {errors.productRequirement}
                        </div>
                      )}
                    </div>

                    {/* Row 4: Message Field */}
                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="contact-message" className="form-label">
                        Message / Project Scope <span style={{ color: '#d93838' }}>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'msg-error' : undefined}
                        className="form-textarea"
                        placeholder="Provide details such as project location (city), expected delivery schedule, veneer finishes, or custom CAD specifications..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        style={{
                          borderColor: errors.message ? '#d93838' : undefined
                        }}
                      />
                      {errors.message && (
                        <div id="msg-error" role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#d93838', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          <AlertCircle size={13} /> {errors.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        disabled={isSubmitting}
                        icon={isSubmitting ? undefined : Send}
                        style={{ width: '100%', height: '52px', fontSize: '0.95rem' }}
                      >
                        {isSubmitting ? 'Validating & Submitting...' : 'Request a Quote / Project Tender'}
                      </Button>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--charcoal-500)' }}>
                        <ShieldCheck size={14} style={{ color: 'var(--wood-600)' }} />
                        <span>Direct response from senior architectural project specifier within 4 business hours.</span>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                /* USER-FRIENDLY SUCCESS STATE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem 1rem' }}
                >
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(147, 88, 56, 0.12)',
                      color: 'var(--wood-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      border: '2px solid rgba(147, 88, 56, 0.25)'
                    }}
                  >
                    <Check size={36} />
                  </div>

                  <span className="badge-arch" style={{ marginBottom: '0.75rem' }}>
                    Quote Request Received
                  </span>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '2rem',
                      color: 'var(--charcoal-950)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    Thank You, {submittedData.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      maxWidth: '480px',
                      margin: '0 auto 2rem'
                    }}
                  >
                    Your specification inquiry for <strong>{submittedData.productRequirement}</strong> has been logged with our central architectural desk. An official itemized estimate will be sent to <strong>{submittedData.email}</strong>.
                  </p>

                  {/* Summary Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--stone-100)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '1.25rem 1.5rem',
                      textAlign: 'left',
                      marginBottom: '2rem',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--charcoal-900)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                      Inquiry Summary:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem', color: 'var(--charcoal-800)' }}>
                      <div><strong>Category:</strong> {submittedData.productCategory}</div>
                      <div><strong>Phone:</strong> {submittedData.phone}</div>
                      <div><strong>Email:</strong> {submittedData.email}</div>
                      <div><strong>Requirement:</strong> {submittedData.productRequirement}</div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="gold"
                      size="md"
                      href={generateWhatsAppUrl(submittedData)}
                      icon={MessageSquare}
                    >
                      Connect on WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleReset}
                      icon={RotateCcw}
                    >
                      Submit Another Quote
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* RIGHT COLUMN: REGIONAL MATERIAL STUDIOS & TOUCHPOINTS */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="badge-arch" style={{ marginBottom: '0.65rem' }}>
                  Material Experience Lounges
                </span>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                    color: 'var(--charcoal-950)',
                    lineHeight: 1.2,
                    marginBottom: '0.65rem'
                  }}
                >
                  Visit Our Experience Studios
                </h2>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Experience full-scale architectural joinery mockups, test 72h boiling water immersion tanks, and feel working vacuum-PVD hardware mechanisms in person.
                </p>
              </div>

              {/* Studio Selector & Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {experienceCenters.map((center, idx) => {
                  const isSelected = selectedStudioIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedStudioIndex(idx)}
                      style={{
                        backgroundColor: isSelected ? 'var(--charcoal-950)' : '#ffffff',
                        color: isSelected ? '#ffffff' : 'var(--charcoal-950)',
                        border: isSelected ? '1px solid var(--charcoal-950)' : '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-xs)',
                        padding: '1.5rem 1.75rem',
                        boxShadow: isSelected ? 'var(--shadow-card-hover)' : 'var(--shadow-subtle)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-base)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3
                          className="font-serif"
                          style={{
                            fontSize: '1.2rem',
                            color: isSelected ? '#ffffff' : 'var(--charcoal-950)',
                            margin: 0
                          }}
                        >
                          {center.city}
                        </h3>
                        {center.isFlagship && (
                          <span
                            className="badge-arch-dark"
                            style={{
                              fontSize: '0.68rem',
                              backgroundColor: isSelected ? 'rgba(216, 177, 82, 0.18)' : undefined
                            }}
                          >
                            Flagship Studio
                          </span>
                        )}
                      </div>

                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: isSelected ? 'var(--charcoal-300)' : 'var(--text-secondary)',
                          marginBottom: '1rem',
                          lineHeight: 1.5
                        }}
                      >
                        {center.address}, {center.state}
                      </p>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '1.25rem',
                          fontSize: '0.825rem',
                          color: isSelected ? 'var(--brass-400)' : 'var(--wood-700)',
                          fontWeight: 600,
                          borderTop: isSelected ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border-light)',
                          paddingTop: '0.75rem'
                        }}
                      >
                        <a
                          href={`tel:${center.phone.replace(/\s+/g, '')}`}
                          style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }}
                        >
                          <Phone size={14} /> {center.phone}
                        </a>
                        <a
                          href={`mailto:${center.email}`}
                          style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }}
                        >
                          <Mail size={14} /> {center.email}
                        </a>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: isSelected ? 'var(--charcoal-400)' : 'var(--text-muted)' }}>
                          <Clock size={14} /> {center.hours}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. INTERACTIVE GOOGLE MAPS SECTION
          ========================================================================= */}
      <section className="section-py" style={{ backgroundColor: 'var(--stone-100)', borderTop: '1px solid var(--border-medium)', borderBottom: '1px solid var(--border-medium)' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <span className="badge-arch" style={{ marginBottom: '0.5rem' }}>
                Studio Locations & Directions
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--charcoal-950)', margin: '0 0 0.35rem 0' }}>
                Location Map: {currentStudio.city}
              </h2>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0 }}>
                {currentStudio.address}, {currentStudio.state}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="md"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `PLYARCH ${currentStudio.city} ${currentStudio.address}`
                )}`}
                icon={ExternalLink}
              >
                Get Directions on Google Maps
              </Button>
            </div>
          </div>

          {/* Map Container */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-card)',
              height: 'clamp(280px, 45vw, 460px)',
              backgroundColor: 'var(--charcoal-900)'
            }}
          >
            {/* Real Interactive Google Maps Embed with fallback styling */}
            <iframe
              title={`Google Map - PLYARCH Studio ${currentStudio.city}`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(105%)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${currentStudio.address}, ${currentStudio.city}`
              )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            />

            {/* Map Overlay Card */}
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                backgroundColor: 'rgba(18, 20, 23, 0.92)',
                backdropFilter: 'blur(10px)',
                color: '#ffffff',
                padding: 'clamp(0.85rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
                borderRadius: 'var(--radius-xs)',
                maxWidth: 'calc(100% - 1.5rem)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: 'var(--brass-400)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                Selected Studio Pin
              </div>
              <h4 className="font-serif" style={{ fontSize: '1.05rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>
                PLYARCH & CO. Studio
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--charcoal-300)', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>
                {currentStudio.address}
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--brass-300)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={13} /> {currentStudio.hours}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. ARCHITECTURAL TENDER & SPECIFICATION FAQ
          ========================================================================= */}
      <section className="section-py">
        <Container size="narrow">
          <SectionHeading
            align="center"
            eyebrow="Tender & Specification FAQ"
            title="Frequently Asked Questions by Project Specifiers"
            subtitle="Everything you need to know about custom thickness tolerances, batch certifications, sample kit dispatch, and warranty claims."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3.5rem' }}>
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--charcoal-900)',
                      cursor: 'pointer',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: 'var(--wood-600)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '1rem'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.75rem 1.75rem', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65, borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
