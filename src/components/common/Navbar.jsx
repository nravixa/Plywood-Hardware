import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Box, ArrowRight, Phone } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Applications', path: '/applications' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar({ onOpenSampleModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Transition from transparent over hero to solid after 20px scroll
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navHeight = scrolled ? '68px' : '78px';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled
            ? 'rgba(14, 16, 19, 0.95)'
            : 'rgba(10, 11, 13, 0.45)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
            : 'none',
          transition: 'background-color 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease, box-shadow 300ms ease, height 300ms ease'
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: navHeight,
              transition: 'height 300ms ease'
            }}
          >
            {/* Brand Logo / Name */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
                minWidth: 0
              }}
              aria-label="PLYARCH & CO. Home"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--brass-400)',
                  flexShrink: 0
                }}
              >
                <Box size={18} style={{ color: 'var(--brass-400)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.05rem, 3.8vw, 1.25rem)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap'
                  }}
                >
                  PLYARCH & CO.
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--brass-300)',
                    fontWeight: 600,
                    marginTop: '2px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Plywood & Hardware
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: 'clamp(1rem, 1.8vw, 2rem)'
              }}
              className="navbar-desktop-links"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    style={{
                      position: 'relative',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.78)',
                      letterSpacing: '0.02em',
                      padding: '0.5rem 0',
                      transition: 'color var(--transition-fast)',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)';
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--brass-400)',
                          borderRadius: '1px'
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions - Primary "Get Quote" CTA */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              className="navbar-desktop-actions"
            >
              <Button
                variant="gold"
                size="sm"
                to="/contact"
                icon={ArrowRight}
                iconPosition="right"
                style={{
                  boxShadow: '0 2px 10px rgba(194, 155, 56, 0.25)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: 'var(--radius-xs)',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'background-color var(--transition-fast)'
              }}
              className="navbar-mobile-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(4px)',
                zIndex: 990
              }}
            />

            {/* Menu container */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: navHeight,
                left: 0,
                right: 0,
                backgroundColor: 'var(--charcoal-950)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                zIndex: 995,
                maxHeight: `calc(100dvh - ${navHeight})`,
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <Container>
                <div style={{ padding: '1.5rem 0 2rem' }}>
                  {/* Mobile Links */}
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            fontSize: '1.1rem',
                            fontFamily: 'var(--font-serif)',
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? 'var(--brass-400)' : '#ffffff',
                            padding: '0.75rem 0.5rem',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            textDecoration: 'none'
                          }}
                        >
                          <span>{link.name}</span>
                          <ArrowRight
                            size={16}
                            style={{
                              opacity: isActive ? 1 : 0.4,
                              color: isActive ? 'var(--brass-400)' : '#ffffff'
                            }}
                          />
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Button
                      variant="gold"
                      size="md"
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      icon={ArrowRight}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Get Instant Project Quote
                    </Button>
                    <Button
                      variant="outline-light"
                      size="md"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onOpenSampleModal) onOpenSampleModal();
                      }}
                      icon={Box}
                      iconPosition="left"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Request Sample Box
                    </Button>
                  </div>

                  {/* Direct Contact Hotline in Mobile Menu */}
                  <div
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.65rem',
                      fontSize: '0.8125rem',
                      color: 'var(--charcoal-300)'
                    }}
                  >
                    <a
                      href="tel:+912249827700"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      <Phone size={14} style={{ color: 'var(--brass-400)' }} /> +91 22 4982 7700
                    </a>
                    <span style={{ color: 'var(--brass-400)', fontWeight: 500 }}>Mon - Sat 10am - 7pm</span>
                  </div>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .navbar-desktop-links {
            display: flex !important;
          }
          .navbar-desktop-actions {
            display: flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

