import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Send } from 'lucide-react';
import Button from './Button';

export default function SampleKitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    firmName: '',
    profession: 'Architect / Interior Designer',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    selectedSamples: ['is710-marine', 'pvd-gold-swatch', 'calibra-pro']
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const sampleOptions = [
    { id: 'is710-marine', name: 'IS:710 Marine 19mm Gurjan Core Block' },
    { id: 'calibra-pro', name: 'Calibra Pro 4X 18mm Substrate' },
    { id: 'baltic-birch', name: 'Baltic Birch 13-Ply Exposed Edge' },
    { id: 'burma-teak', name: 'Quarter-Cut Burma Teak Veneer Swatch' },
    { id: 'pvd-gold-swatch', name: 'PVD Champagne Gold Solid Brass Handle Finish' },
    { id: 'onyx-hinge', name: 'AURA 3D Onyx Soft-Close Hinge Sample' },
    { id: 'slim-box-runner', name: 'VELOX Anthracite 13mm Drawer Profile' }
  ];

  const handleToggleSample = (id) => {
    setFormData((prev) => {
      const exists = prev.selectedSamples.includes(id);
      return {
        ...prev,
        selectedSamples: exists
          ? prev.selectedSamples.filter((item) => item !== id)
          : [...prev.selectedSamples, id]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: 'clamp(1.25rem, 3.5vw, 2.25rem)', maxWidth: '680px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--stone-100)',
            color: 'var(--charcoal-700)',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(194, 155, 56, 0.12)',
                color: 'var(--brass-500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--charcoal-900)' }}>
              Specifier Box Requested
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. Our architectural team will curate your customized sample box and dispatch it to <strong>{formData.city}</strong> within 48 hours.
            </p>
            <Button variant="primary" size="md" onClick={handleReset}>
              Close & Continue Browsing
            </Button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
              <span className="badge-arch" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>
                For Architects, Designers & Builders
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', color: 'var(--charcoal-900)', marginTop: '0.25rem', lineHeight: 1.25 }}>
                Request Architectural Specifier Box
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Curate a complimentary box of calibrated timber blocks, veneer swatches, and hardware finishes.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Sample Selection Chips */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label className="form-label" style={{ marginBottom: '0.5rem' }}>
                  Select Desired Swatches & Samples (Select up to 4)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.45rem' }}>
                  {sampleOptions.map((sample) => {
                    const isSelected = formData.selectedSamples.includes(sample.id);
                    return (
                      <button
                        type="button"
                        key={sample.id}
                        onClick={() => handleToggleSample(sample.id)}
                        style={{
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.78rem',
                          border: isSelected ? '1px solid var(--wood-600)' : '1px solid var(--border-medium)',
                          backgroundColor: isSelected ? 'var(--wood-50)' : '#ffffff',
                          color: isSelected ? 'var(--wood-900)' : 'var(--text-secondary)',
                          fontWeight: isSelected ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                          lineHeight: 1.3
                        }}
                      >
                        {isSelected ? '✓ ' : '+ '} {sample.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Ar. Rajesh Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Firm / Studio Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Studio Vista Architecture"
                    value={formData.firmName}
                    onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <div>
                  <label className="form-label">Professional Role</label>
                  <select
                    className="form-select"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  >
                    <option>Architect / Interior Designer</option>
                    <option>Project Builder / Developer</option>
                    <option>Turnkey Interior Contractor</option>
                    <option>Homeowner / Luxury Client</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <label className="form-label">Official Work Email *</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="contact@architectstudio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="form-label">Studio / Site Address *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Suite / Street Address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Mumbai / Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">PIN Code *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="400013"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  />
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                icon={Send}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Dispatch Specifier Box (Complimentary)
              </Button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

