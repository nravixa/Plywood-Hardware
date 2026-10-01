import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from './Container';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [],
  bgImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
  actions,
  stats
}) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--charcoal-950)',
        color: 'var(--text-inverse)',
        paddingTop: 'clamp(5.5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Background Image with Dark Vignette Overlay */}
      {bgImage && (
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(120%) brightness(85%)',
            willChange: 'transform, opacity'
          }}
        />
      )}

      {/* Architectural Grid Line Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />

      <Container>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px' }}>
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.45rem',
                fontSize: '0.8125rem',
                color: 'var(--text-inverse-muted)',
                marginBottom: '1rem'
              }}
              aria-label="Breadcrumb"
            >
              <Link to="/" style={{ color: 'var(--text-inverse-muted)' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-inverse-muted)'}>
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight size={13} style={{ opacity: 0.5, flexShrink: 0 }} />
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      style={{ color: 'var(--text-inverse-muted)' }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-inverse-muted)'}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: 'var(--brass-400)', fontWeight: 500 }}>{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              style={{ marginBottom: '0.85rem' }}
            >
              <span className="badge-arch-dark">{eyebrow}</span>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif"
            style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.5rem)',
              lineHeight: 1.15,
              fontWeight: 600,
              letterSpacing: '-0.025em',
              color: '#ffffff',
              marginBottom: '1.15rem'
            }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                fontSize: 'clamp(0.975rem, 1.3vw, 1.18rem)',
                lineHeight: 1.65,
                color: 'var(--charcoal-300)',
                maxWidth: '740px',
                marginBottom: actions || stats ? '1.75rem' : '0'
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Actions */}
          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: 'flex',
                gap: '0.85rem',
                flexWrap: 'wrap',
                marginBottom: stats ? '2rem' : '0'
              }}
            >
              {actions}
            </motion.div>
          )}

          {/* Stats Bar */}
          {stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: 'clamp(1rem, 2.5vw, 1.75rem)',
                paddingTop: 'clamp(1.25rem, 3vw, 2rem)',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-serif" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', fontWeight: 700, color: 'var(--brass-400)', lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.3rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

