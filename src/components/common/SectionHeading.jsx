import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left', 'center', 'right'
  theme = 'light', // 'light' or 'dark'
  action,
  className = '',
  maxWidth = '720px'
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        display: 'flex',
        flexDirection: isCenter ? 'column' : 'row',
        alignItems: isCenter ? 'center' : 'flex-end',
        justifyContent: isCenter ? 'center' : 'space-between',
        textAlign: align,
        marginBottom: 'clamp(1.75rem, 4vw, 3rem)',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: isCenter ? maxWidth : '760px',
          width: '100%'
        }}
      >
        {eyebrow && (
          <div style={{ marginBottom: '0.65rem' }}>
            <span
              className={isDark ? 'badge-arch-dark' : 'badge-arch'}
              style={{ display: 'inline-block' }}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.75rem, 3.4vw, 2.75rem)',
            fontWeight: 600,
            lineHeight: 1.18,
            color: isDark ? 'var(--text-inverse)' : 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: subtitle ? '0.75rem' : '0'
          }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            style={{
              fontSize: 'clamp(0.925rem, 1.2vw, 1.075rem)',
              lineHeight: 1.65,
              color: isDark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
              fontWeight: 400
            }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>

      {action && (
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ paddingBottom: '0.25rem', alignSelf: isCenter ? 'center' : 'auto' }}
        >
          {action}
        </motion.div>
      )}
    </div>
  );
}

