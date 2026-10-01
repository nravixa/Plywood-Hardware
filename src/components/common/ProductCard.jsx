import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Layers, Gauge, Send } from 'lucide-react';
import Button from './Button';

export default function ProductCard({
  product,
  onQuickView,
  onInquire
}) {
  const {
    name,
    tagline,
    categoryName,
    grade,
    warranty,
    thickness,
    durability,
    density,
    image,
    badge
  } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ translateY: -6 }}
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 'var(--shadow-card)',
        transition: 'border-color 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform'
      }}
      className="product-card"
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '62%', // 16:10 ratio
          backgroundColor: 'var(--stone-200)',
          overflow: 'hidden'
        }}
      >
        <motion.img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80';
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Badges */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            display: 'flex',
            gap: '0.35rem',
            flexWrap: 'wrap',
            zIndex: 2,
            maxWidth: 'calc(100% - 1.5rem)'
          }}
        >
          {badge && (
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                backgroundColor: 'var(--charcoal-900)',
                color: '#ffffff',
                padding: '0.25rem 0.55rem',
                borderRadius: 'var(--radius-xs)',
                whiteSpace: 'nowrap'
              }}
            >
              {badge}
            </span>
          )}
          {grade && (
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                color: 'var(--wood-800)',
                backdropFilter: 'blur(4px)',
                padding: '0.25rem 0.55rem',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                whiteSpace: 'nowrap'
              }}
            >
              {grade}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: 'clamp(1.15rem, 3vw, 1.5rem)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.725rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--wood-600)',
              display: 'block',
              marginBottom: '0.35rem'
            }}
          >
            {categoryName}
          </span>

          <h3
            className="font-serif"
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--charcoal-900)',
              marginBottom: '0.4rem',
              lineHeight: 1.3
            }}
          >
            {name}
          </h3>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '1.15rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {tagline}
          </p>

          {/* Key Specifications Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.45rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-light)',
              marginBottom: '1.25rem'
            }}
          >
            {warranty && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)', minWidth: 0 }}>
                <ShieldCheck size={14} style={{ color: 'var(--wood-600)', flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{warranty}</span>
              </div>
            )}
            {thickness && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)', minWidth: 0 }}>
                <Layers size={14} style={{ color: 'var(--wood-600)', flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{thickness.split(',')[0]} - {thickness.split(',').slice(-1)[0]}</span>
              </div>
            )}
            {durability && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)', minWidth: 0 }}>
                <Gauge size={14} style={{ color: 'var(--brass-500)', flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{durability.split('(')[0]}</span>
              </div>
            )}
            {density && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)', minWidth: 0 }}>
                <span style={{ fontWeight: 600, color: 'var(--wood-600)', fontSize: '0.75rem', flexShrink: 0 }}>ρ</span>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{density}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: "View Details" & "Enquire Now" in an adaptable grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '0.5rem',
            width: '100%'
          }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => onQuickView && onQuickView(product)}
            style={{ width: '100%', justifyContent: 'center' }}
            icon={ArrowUpRight}
          >
            Details
          </Button>
          <Button
            variant="wood"
            size="sm"
            onClick={() => onInquire && onInquire(product)}
            style={{ width: '100%', justifyContent: 'center' }}
            icon={Send}
          >
            Enquire
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

