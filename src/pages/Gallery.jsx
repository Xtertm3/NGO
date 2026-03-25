import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Gallery.css';

/* 
  ──────────────────────────────────────────────────────────
  GALLERY IMAGES — PLACEHOLDER (Unsplash)
  Replace these URLs with your actual images.
  Format: { id, src, thumb, title, category, caption }
  ──────────────────────────────────────────────────────────
*/
const galleryImages = [
  {
    id: 1,
    src:    '/assets/images/media__1774419441217.jpg',
    thumb:  '/assets/images/media__1774419441217.jpg',
    title:  'Ashram Morning Prayers',
    category: 'Ashram Life',
    caption: 'Residents and volunteers gather each morning for prayers — a sacred moment of gratitude and peace.',
  },
  {
    id: 2,
    src:    '/assets/images/media__1774419441362.jpg',
    thumb:  '/assets/images/media__1774419441362.jpg',
    title:  'Elderly Care & Companionship',
    category: 'Ashram Life',
    caption: 'Our dedicated caregivers ensure every resident receives warm, personalised attention each day.',
  },
  {
    id: 3,
    src:    '/assets/images/media__1774419441476.jpg',
    thumb:  '/assets/images/media__1774419441476.jpg',
    title:  'Rural Education Drive',
    category: 'Education',
    caption: 'Free tuition classes conducted in a village school — where every child deserves a bright future.',
  },
  {
    id: 4,
    src:    '/assets/images/media__1774419441495.jpg',
    thumb:  '/assets/images/media__1774419441495.jpg',
    title:  'Medical Camp',
    category: 'Medical Outreach',
    caption: 'Our monthly health camps bring doctors and medicines directly to remote villages.',
  },
  {
    id: 5,
    src:    '/assets/images/media__1774419441217.jpg',
    thumb:  '/assets/images/media__1774419441217.jpg',
    title:  'Annadanam — Free Meals',
    category: 'Community Service',
    caption: 'Hundreds are served a warm, nutritious meal daily. Hunger has no place in our community.',
  },
  {
    id: 6,
    src:    '/assets/images/media__1774419441362.jpg',
    thumb:  '/assets/images/media__1774419441362.jpg',
    title:  'Women\'s Self-Help Group',
    category: 'Community Service',
    caption: 'Empowering rural women through skill development, microfinance, and community support groups.',
  },
  {
    id: 7,
    src:    '/assets/images/media__1774419441476.jpg',
    thumb:  '/assets/images/media__1774419441476.jpg',
    title:  'Scholarship Award Ceremony',
    category: 'Education',
    caption: 'Bright students from rural communities are felicitated at our annual scholarship ceremony.',
  },
  {
    id: 8,
    src:    '/assets/images/media__1774419441495.jpg',
    thumb:  '/assets/images/media__1774419441495.jpg',
    title:  'Festival Celebrations',
    category: 'Ashram Life',
    caption: 'Festivals are celebrated with great joy at the ashram — bringing colour, music, and warmth to all.',
  },
  {
    id: 9,
    src:    '/assets/images/media__1774419441217.jpg',
    thumb:  '/assets/images/media__1774419441217.jpg',
    title:  'Volunteer Camp',
    category: 'Volunteers',
    caption: 'Young volunteers spend their weekends at the ashram, playing, reading, and spending time with the elders.',
  },
  {
    id: 10,
    src:    '/assets/images/media__1774419441362.jpg',
    thumb:  '/assets/images/media__1774419441362.jpg',
    title:  'Children\'s Learning Centre',
    category: 'Education',
    caption: 'Our village learning centre brings modern education to children who would otherwise walk miles to school.',
  },
  {
    id: 11,
    src:    '/assets/images/media__1774419441476.jpg',
    thumb:  '/assets/images/media__1774419441476.jpg',
    title:  'Resident Yoga & Wellness',
    category: 'Ashram Life',
    caption: 'Daily yoga and wellness sessions keep our elderly residents active, healthy, and full of vitality.',
  },
  {
    id: 12,
    src:    '/assets/images/media__1774419441495.jpg',
    thumb:  '/assets/images/media__1774419441495.jpg',
    title:  'Community Kitchen',
    category: 'Community Service',
    caption: 'The heart of our ashram — the community kitchen — where meals are prepared with love and devotion.',
  },
];

const categories = ['All', ...new Set(galleryImages.map(i => i.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(i => i.category === activeCategory);

  const openLightbox  = (globalIdx) => setLightboxIdx(globalIdx);
  const closeLightbox = () => setLightboxIdx(null);

  const prev = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIdx(i => (i + 1) % filtered.length);

  // Key navigation
  const handleKey = (e) => {
    if (lightboxIdx === null) return;
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape')     closeLightbox();
  };

  return (
    <div className="gallery-page" onKeyDown={handleKey} tabIndex={0}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Gallery</span>
          </div>
          <h1>Our Gallery</h1>
          <p>A visual journey through the lives we've touched, the communities we've served, and the love that sustains us.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="gallery-filter-bar">
        <div className="container gallery-filter-inner">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filtered.map((img, idx) => (
              <div
                className="gallery-item"
                key={img.id}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}
              >
                <img src={img.thumb} alt={img.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-category">{img.category}</span>
                  <h4>{img.title}</h4>
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload note */}
          <div className="gallery-upload-note">
            <span>📸</span>
            <p>
              <strong>Add Your Photos:</strong> Replace the placeholder images by updating the <code>galleryImages</code> array in <code>src/pages/Gallery.jsx</code> with your own image URLs or local imports.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FiX size={24} />
          </button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}>
            <FiChevronLeft size={28} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightboxIdx].src} alt={filtered[lightboxIdx].title} />
            <div className="lightbox-caption">
              <span className="gallery-category">{filtered[lightboxIdx].category}</span>
              <h3>{filtered[lightboxIdx].title}</h3>
              <p>{filtered[lightboxIdx].caption}</p>
            </div>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }}>
            <FiChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
