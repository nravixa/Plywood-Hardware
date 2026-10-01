import React from 'react';

export default function Container({
  children,
  size = 'default', // 'default' (1280px), 'wide' (1520px), 'narrow' (960px), 'full'
  className = '',
  style = {}
}) {
  let sizeClass = 'container-custom';
  if (size === 'wide') sizeClass = 'container-wide';
  if (size === 'narrow') sizeClass = 'container-narrow';
  if (size === 'full') sizeClass = 'w-full px-4';

  return (
    <div className={`${sizeClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
