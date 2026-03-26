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
    src:    '/assets/images/media__1774422201479.jpg',
    thumb:  '/assets/images/media__1774422201479.jpg',
    title:  'Medical Treatment & Care',
    caption: 'Providing essential medical care and treatment for severe wounds and illnesses.',
  },
  {
    id: 2,
    src:    '/assets/images/media__1774422201979.jpg',
    thumb:  '/assets/images/media__1774422201979.jpg',
    title:  'Moments of Peace',
    caption: 'An elderly resident offering heartfelt prayers and gratitude at the ashram.',
  },
  {
    id: 3,
    src:    '/assets/images/media__1774422201905.jpg',
    thumb:  '/assets/images/media__1774422201905.jpg',
    title:  'Community Gatherings',
    caption: 'Empowering communities through awareness camps and self-help group meetings.',
  },
  {
    id: 4,
    src:    '/assets/images/media__1774422201734.jpg',
    thumb:  '/assets/images/media__1774422201734.jpg',
    title:  'Annadanam (Free Meals)',
    caption: 'Serving nutritious traditional meals on banana leaves to hundreds of people.',
  },
  {
    id: 5,
    src:    '/assets/images/media__1774422201902.jpg',
    thumb:  '/assets/images/media__1774422201902.jpg',
    title:  'Honouring Leadership',
    caption: 'Our beloved Founder and President, S. Radha, being warmly felicitated for her profound dedication.',
  },
  {
    id: 6,
    src:    '/assets/images/media__1774419441217.jpg',
    thumb:  '/assets/images/media__1774419441217.jpg',
    title:  'Compassionate Assistance',
    caption: 'Our caregivers provide gentle, hands-on assistance to residents in their daily routines.',
  },
  {
    id: 7,
    src:    '/assets/images/media__1774419441362.jpg',
    thumb:  '/assets/images/media__1774419441362.jpg',
    title:  'Feeding with Love',
    caption: 'Dedicated volunteers feeding bedridden elders with immense patience and care.',
  },
  {
    id: 8,
    src:    '/assets/images/media__1774419441476.jpg',
    thumb:  '/assets/images/media__1774419441476.jpg',
    title:  'Blessings from Residents',
    caption: 'The warm smiles and heartfelt blessings from our ashram family make all efforts worthwhile.',
  },
  {
    id: 9,
    src:    '/assets/images/media__1774419441495.jpg',
    thumb:  '/assets/images/media__1774419441495.jpg',
    title:  'Celebrating Life',
    caption: 'Birthday celebrations and joyous moments bring light and happiness to the ashram.',
  },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox  = (globalIdx) => setLightboxIdx(globalIdx);
  const closeLightbox = () => setLightboxIdx(null);

  const prev = () => setLightboxIdx(i => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightboxIdx(i => (i + 1) % galleryImages.length);

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



      {/* Grid */}
      <section className="section gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
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
                  <h4>{img.title}</h4>
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
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
            <img src={galleryImages[lightboxIdx].src} alt={galleryImages[lightboxIdx].title} />
            <div className="lightbox-caption">
              <h3>{galleryImages[lightboxIdx].title}</h3>
              <p>{galleryImages[lightboxIdx].caption}</p>
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
