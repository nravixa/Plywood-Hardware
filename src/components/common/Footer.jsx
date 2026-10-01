import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Container from './Container';
import Button from './Button';

const CURRENT_YEAR = new Date().getFullYear();

// Clean SVG Icons for Social Links
const SocialIcons = {
  LinkedIn: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Pinterest: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="9" x2="12" y2="21"/>
      <path d="M8 12a4 4 0 0 1 8 0c0 3-2 5.5-4 8.5"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  YouTube: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  )
};

export default function Footer({ onOpenSampleModal }) {
  return (
    <footer
      style={{
        backgroundColor: 'var(--charcoal-950)',
        color: 'var(--text-inverse)',
        paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBottom: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <Container>
        {/* Compact Pre-Footer "Get Quote" & Sample Request Strip */}
        <div
          style={{
            backgroundColor: 'var(--charcoal-900)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-sm)',
            padding: 'clamp(1.25rem, 3.5vw, 2rem)',
            marginBottom: 'clamp(2rem, 4.5vw, 3.5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.25rem'
          }}
          className="footer-cta-strip"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span className="badge-arch-dark" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
                Architectural Specifier Desk
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--brass-300)' }}>
                Direct factory pricing & express sampling
              </span>
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                color: '#ffffff',
                fontWeight: 600,
                lineHeight: 1.25
              }}
            >
              Have a Project in Design or Construction Stage?
            </h3>
            <p style={{ color: 'var(--charcoal-300)', fontSize: '0.875rem', marginTop: '0.25rem', lineHeight: 1.55 }}>
              Submit your BOQ drawings for custom thickness calibration or order a complimentary physical material box.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', width: '100%', maxWidth: '420px', flexShrink: 0 }}>
            <Button
              variant="gold"
              size="md"
              to="/contact"
              icon={ArrowRight}
              style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}
            >
              Get Project Quote
            </Button>
            <Button
              variant="outline-light"
              size="md"
              onClick={onOpenSampleModal}
              icon={Box}
              iconPosition="left"
              style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}
            >
              Request Sample Kit
            </Button>
          </div>
        </div>

        {/* Main Footer 4-Column Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            marginBottom: '2.5rem'
          }}
        >
          {/* Column 1: Brand Introduction & Social Links */}
          <div>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
                marginBottom: '1rem'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--brass-400)'
                }}
              >
                <Box size={16} style={{ color: 'var(--brass-400)' }} />
              </div>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#ffffff'
                }}
              >
                PLYARCH & CO.
              </span>
            </Link>

            <p style={{ color: 'var(--charcoal-300)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Manufacturers of calibrated marine plywood, certified fire-retardant substrates, and European-standard architectural hardware for India’s landmark architecture.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              {[
                { name: 'LinkedIn', icon: SocialIcons.LinkedIn, href: 'https://linkedin.com' },
                { name: 'Instagram', icon: SocialIcons.Instagram, href: 'https://instagram.com' },
                { name: 'Pinterest', icon: SocialIcons.Pinterest, href: 'https://pinterest.com' },
                { name: 'YouTube', icon: SocialIcons.YouTube, href: 'https://youtube.com' }
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--charcoal-300)',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--brass-500)';
                      e.currentTarget.style.color = '#121417';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.color = 'var(--charcoal-300)';
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Our Heritage', path: '/about' },
                { name: 'Master Product Catalog', path: '/products' },
                { name: 'Spatial Applications', path: '/applications' },
                { name: 'Architectural Projects', path: '/projects' },
                { name: 'Contact & Studios', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--charcoal-300)',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--charcoal-300)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              Product Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { name: 'IS:710 Marine BWP Plywood', path: '/products' },
                { name: '4-Press Calibrated Substrates', path: '/products' },
                { name: 'IS:5509 Fire-Retardant Panels', path: '/products' },
                { name: 'Natural Burma Teak Veneers', path: '/products' },
                { name: 'Concealed Titanium Onyx Hinges', path: '/products' },
                { name: 'VELOX 45kg Slim Box Drawers', path: '/products' },
                { name: 'Solid Forged Brass PVD Handles', path: '/products' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--charcoal-300)',
                      fontSize: '0.85rem',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--charcoal-300)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              Contact & Studios
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', color: 'var(--charcoal-300)' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={16} style={{ color: 'var(--brass-400)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Flagship Studio:</strong> Raghuvanshi Mills, Lower Parel, Mumbai 400013
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={16} style={{ color: 'var(--brass-400)', flexShrink: 0, marginTop: '2px' }} />
                <span>+91 22 4982 7700 / +91 98200 12345</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={16} style={{ color: 'var(--brass-400)', flexShrink: 0, marginTop: '2px' }} />
                <span>inquiry@plyarch.com</span>
              </div>
              <div style={{ paddingTop: '0.35rem' }}>
                <Link
                  to="/contact"
                  style={{
                    color: 'var(--brass-400)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  View All 5 Experience Centers <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar: Copyright & Compliance */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--charcoal-400)'
          }}
        >
          <div>
            © {CURRENT_YEAR} PLYARCH & CO. Architectural Plywood & Precision Hardware. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span>BIS IS:710 Marine Certified</span>
            <span>•</span>
            <span>ISO 9001:2015</span>
            <span>•</span>
            <span>FSC Responsible Forestry</span>
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 860px) {
          .footer-cta-strip {
            flex-direction: row !important;
            align-items: center !important;
          }
          .footer-cta-strip > div:last-child {
            width: auto !important;
          }
        }
      `}</style>
    </footer>
  );
}

