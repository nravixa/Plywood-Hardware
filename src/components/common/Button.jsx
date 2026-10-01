import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' (charcoal), 'wood' (warm brown), 'gold' (brass), 'outline' (dark outline), 'outline-light' (white outline), 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  to,
  href,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  // Size styles
  const sizeStyles = {
    sm: {
      padding: '0.45rem 0.9rem',
      fontSize: '0.8rem',
      gap: '0.35rem',
      minHeight: '36px'
    },
    md: {
      padding: '0.65rem 1.4rem',
      fontSize: '0.875rem',
      gap: '0.5rem',
      minHeight: '44px'
    },
    lg: {
      padding: '0.85rem 1.85rem',
      fontSize: '0.95rem',
      gap: '0.65rem',
      minHeight: '50px'
    }
  };

  // Variant styles
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--charcoal-900)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--charcoal-900)'
    },
    wood: {
      backgroundColor: 'var(--wood-600)',
      color: '#ffffff',
      border: '1px solid var(--wood-600)'
    },
    gold: {
      backgroundColor: 'var(--brass-500)',
      color: 'var(--charcoal-950)',
      border: '1px solid var(--brass-500)',
      fontWeight: '600'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--charcoal-900)',
      border: '1px solid var(--charcoal-800)'
    },
    'outline-light': {
      backgroundColor: 'transparent',
      color: 'var(--text-inverse)',
      border: '1px solid rgba(255, 255, 255, 0.35)'
    },
    'outline-wood': {
      backgroundColor: 'transparent',
      color: 'var(--wood-600)',
      border: '1px solid var(--wood-500)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--charcoal-800)',
      border: '1px solid transparent'
    }
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;
  const currentVariant = variantStyles[variant] || variantStyles.primary;

  const isFullWidth = props?.style?.width === '100%' || className?.includes('w-full');

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all var(--transition-base)',
    textDecoration: 'none',
    boxSizing: 'border-box',
    touchAction: 'manipulation',
    maxWidth: '100%',
    ...currentSize,
    ...currentVariant,
    ...props.style
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} style={{ flexShrink: 0 }} />}
      <span style={{ textAlign: 'center', lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} style={{ flexShrink: 0 }} />}
    </>
  );

  if (to && !disabled) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, translateY: -1 }}
        whileTap={{ scale: 0.98 }}
        style={{ display: isFullWidth ? 'block' : 'inline-block', width: isFullWidth ? '100%' : 'auto', maxWidth: '100%' }}
      >
        <Link to={to} style={baseStyle} className={className} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href && !disabled) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, translateY: -1 }}
        whileTap={{ scale: 0.98 }}
        style={{ display: isFullWidth ? 'block' : 'inline-block', width: isFullWidth ? '100%' : 'auto', maxWidth: '100%' }}
      >
        <a href={href} target="_blank" rel="noopener noreferrer" style={baseStyle} className={className} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02, translateY: -1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      style={{
        ...baseStyle,
        width: isFullWidth ? '100%' : baseStyle.width
      }}
      className={className}
      {...props}
    >
      {content}
    </motion.button>
  );
}

