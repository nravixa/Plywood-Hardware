import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import SampleKitModal from './components/common/SampleKitModal';
import ProductDetailModal from './components/common/ProductDetailModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Plywood from './pages/Plywood';
import Hardware from './pages/Hardware';
import Applications from './pages/Applications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AnimatedRoutes({ onOpenSampleModal, onOpenProductDetail }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', minHeight: '100%' }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Home
                onOpenSampleModal={onOpenSampleModal}
                onOpenProductDetail={onOpenProductDetail}
              />
            }
          />
          <Route
            path="/about"
            element={<About onOpenSampleModal={onOpenSampleModal} />}
          />
          <Route
            path="/products"
            element={
              <Products
                onOpenSampleModal={onOpenSampleModal}
                onOpenProductDetail={onOpenProductDetail}
              />
            }
          />
          <Route
            path="/plywood"
            element={
              <Plywood
                onOpenSampleModal={onOpenSampleModal}
                onOpenProductDetail={onOpenProductDetail}
              />
            }
          />
          <Route
            path="/hardware"
            element={
              <Hardware
                onOpenSampleModal={onOpenSampleModal}
                onOpenProductDetail={onOpenProductDetail}
              />
            }
          />
          <Route
            path="/applications"
            element={
              <Applications
                onOpenSampleModal={onOpenSampleModal}
              />
            }
          />
          <Route
            path="/projects"
            element={<Projects onOpenSampleModal={onOpenSampleModal} />}
          />
          <Route
            path="/contact"
            element={<Contact onOpenSampleModal={onOpenSampleModal} />}
          />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState(null);

  const handleOpenSampleModal = () => {
    setSampleModalOpen(true);
  };

  const handleCloseSampleModal = () => {
    setSampleModalOpen(false);
  };

  const handleOpenProductDetail = (product) => {
    setSelectedProductForDetail(product);
  };

  const handleCloseProductDetail = () => {
    setSelectedProductForDetail(null);
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Global Navigation Bar */}
      <Navbar onOpenSampleModal={handleOpenSampleModal} />

      {/* Main Content Area with Page Transitions */}
      <main style={{ flexGrow: 1, minHeight: '100vh', paddingTop: 0 }}>
        <AnimatedRoutes
          onOpenSampleModal={handleOpenSampleModal}
          onOpenProductDetail={handleOpenProductDetail}
        />
      </main>

      {/* Global Architectural Footer */}
      <Footer onOpenSampleModal={handleOpenSampleModal} />

      {/* Global Modals */}
      <SampleKitModal
        isOpen={sampleModalOpen}
        onClose={handleCloseSampleModal}
      />

      <ProductDetailModal
        isOpen={Boolean(selectedProductForDetail)}
        product={selectedProductForDetail}
        onClose={handleCloseProductDetail}
        onOpenSampleModal={handleOpenSampleModal}
      />
    </Router>
  );
}
