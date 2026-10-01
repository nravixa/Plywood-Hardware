import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Box, X, Check } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import ProductCard from '../components/common/ProductCard';
import { categories, products } from '../data/productsData';

export default function Products({ onOpenSampleModal, onOpenProductDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCatalog = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 3000);
  };

  // Filter products by selected category and search term
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Search match across name, description, grade, applications, and tagline
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.tagline && item.tagline.toLowerCase().includes(query)) ||
        (item.grade && item.grade.toLowerCase().includes(query)) ||
        (item.categoryName && item.categoryName.toLowerCase().includes(query)) ||
        (item.applications && item.applications.some((app) => app.toLowerCase().includes(query)));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryInfo = categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <div>
      {/* 1. Architectural Page Hero */}
      <PageHero
        breadcrumbs={[{ label: 'Products Catalogue' }]}
        eyebrow="Architectural Material Catalogue"
        title="Curated Substrates & Precision Hardware"
        subtitle="Explore our comprehensive collection of BIS-certified marine plywood, seasoned blockboards, HDHMR fiberboards, natural teak veneers, and German-tested architectural fittings."
        bgImage="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1920&q=85"
        actions={
          <>
            <Button variant="gold" size="md" onClick={onOpenSampleModal} icon={Box}>
              Request Architect Sample Box
            </Button>
            <Button
              variant="outline-light"
              size="md"
              onClick={handleDownloadCatalog}
              icon={isDownloading ? Check : Download}
            >
              {isDownloading ? 'Catalog Download Started' : 'Download Specifier Catalogue (PDF)'}
            </Button>
          </>
        }
        stats={[
          { value: '8 Categories', label: 'Complete Architectural Portfolio' },
          { value: 'IS:710 & IS:5509', label: 'BIS Certified Formulations' },
          { value: '±0.15mm', label: '4-Press Quad Calibration' },
          { value: '30 Years', label: 'Flagship Core Guarantee' }
        ]}
      />

      {/* 2. Main Catalogue & Filtering Section */}
      <section className="section-py bg-primary">
        <Container>
          {/* Top Search & Filter Navigation Bar */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(1rem, 3vw, 1.75rem)',
              marginBottom: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {/* Search Input Row */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '1.25rem'
              }}
              className="search-row"
            >
              <div style={{ position: 'relative', flex: 1 }}>
                <Search
                  size={18}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1.1rem',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)'
                  }}
                />
                <input
                  type="text"
                  placeholder="Search by material name, grade, thickness..."
                  className="form-input"
                  style={{ paddingLeft: '2.85rem' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '1rem',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none'
                    }}
                    aria-label="Clear Search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Status and Reset */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>
                  Showing <strong>{filteredProducts.length}</strong> items
                </span>
                {(selectedCategory !== 'all' || searchQuery !== '') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    style={{
                      color: 'var(--wood-600)',
                      fontWeight: 600,
                      fontSize: '0.825rem',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Exact 8 Category Tabs Navigation */}
            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1rem'
              }}
            >
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.5rem 0.95rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8rem',
                      fontWeight: active ? 600 : 500,
                      backgroundColor: active ? 'var(--charcoal-900)' : 'var(--stone-100)',
                      color: active ? '#ffffff' : 'var(--charcoal-800)',
                      border: active ? '1px solid var(--charcoal-900)' : '1px solid var(--border-light)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Intro Banner */}
          {selectedCategory !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: 'var(--stone-100)',
                borderLeft: '4px solid var(--wood-600)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-xs)',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--charcoal-900)', marginBottom: '0.2rem' }}>
                    {activeCategoryInfo.name} Range
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {activeCategoryInfo.description}
                  </p>
                </div>
                {activeCategoryInfo.specs && (
                  <span className="badge-arch" style={{ fontSize: '0.72rem' }}>
                    {activeCategoryInfo.specs}
                  </span>
                )}
              </div>
            </motion.div>
          )}

          {/* 3. Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 1.5rem',
                backgroundColor: 'var(--stone-100)',
                borderRadius: 'var(--radius-sm)',
                border: '1px dashed var(--border-medium)'
              }}
            >
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--charcoal-900)' }}>
                No materials match your filter
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem', fontSize: '0.9rem' }}>
                Try adjusting your search criteria or contact our technical specifiers for bespoke sheet sizes and custom formulations.
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Clear Search & Filters
              </Button>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: '2rem' }}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onOpenProductDetail}
                  onInquire={onOpenProductDetail}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* 4. Bespoke Millwork & Project Consultant Banner */}
      <section className="section-py-sm bg-dark text-inverse" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1.5rem'
            }}
            className="specifier-cta"
          >
            <div>
              <span className="badge-arch-dark" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                Bespoke Architectural Formulations
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#ffffff', marginTop: '0.25rem' }}>
                Require Custom Dimensions, Thickness or Fire Rating?
              </h3>
              <p style={{ color: 'var(--charcoal-300)', fontSize: '0.925rem', marginTop: '0.25rem' }}>
                We produce custom 32mm–40mm flush door cores, 10x4ft oversized panels, and specialized PVD finishes for turnkey architectural projects.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Button variant="gold" size="md" to="/contact">
                Speak to Technical Consultant
              </Button>
              <Button variant="outline-light" size="md" onClick={onOpenSampleModal}>
                Request Sample Kit Box
              </Button>
            </div>
          </div>
        </Container>

        <style>{`
          @media (min-width: 768px) {
            .specifier-cta {
              flex-direction: row !important;
              align-items: center !important;
            }
            .search-row {
              flex-direction: row !important;
              align-items: center !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
