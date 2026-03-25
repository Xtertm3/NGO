import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHeart, FiUsers, FiBookOpen, FiHome, FiAward, FiStar } from 'react-icons/fi';
import './Home.css';

/* ─── Placeholder image URLs (Unsplash – free to use) ─── */
const HERO_BG    = '/assets/images/media__1774419441217.jpg';
const ABOUT_IMG  = '/assets/images/media__1774419441362.jpg';
const IMG1       = '/assets/images/media__1774419441476.jpg';
const IMG2       = '/assets/images/media__1774419441495.jpg';
const IMG3       = '/assets/images/media__1774419441217.jpg';

const stats = [
  { icon: <FiUsers />, number: '500+', label: 'Elderly Residents Served' },
  { icon: <FiBookOpen />, number: '1,200+', label: 'Students Educated' },
  { icon: <FiHome />, number: '3', label: 'Ashram Centres' },
  { icon: <FiAward />, number: '15+', label: 'Years of Seva' },
];

const programs = [
  {
    icon: '🏡',
    title: 'Elder Care Ashram',
    desc: 'A warm, nurturing home for the elderly — offering comfortable accommodation, nutritious meals, medical care, and companionship. Every resident is treated with the dignity and reverence they deserve.',
  },
  {
    icon: '📚',
    title: 'Rural Education',
    desc: 'Bridging the educational divide in rural communities. We run free tuition centres, organize social welfare activities, and provide books, uniforms, and stationery to children who need it most.',
  },
  {
    icon: '🩺',
    title: 'Medical Assistance',
    desc: 'Regular health camps, free consultations, and medicine distribution for the underprivileged. Our medical outreach extends to remote villages where healthcare remains a luxury.',
  },
  {
    icon: '🌾',
    title: 'Community Development',
    desc: "Empowering rural families through skill development programs, women's self-help groups, and sustainable livelihood training — building futures from the ground up.",
  },
  {
    icon: '🍲',
    title: 'Annadanam',
    desc: 'No one should go to bed hungry. Our daily free meal program serves hundreds of residents, pilgrims, and the destitute — an act of pure seva rooted in ancient tradition.',
  },
  {
    icon: '🤝',
    title: 'Social Welfare Activities',
    desc: 'Dedicated to uplifting marginalized communities through various support initiatives. We provide essential resources, organize awareness campaigns, and foster environments where everyone can thrive with dignity and hope.',
  },
];

const testimonials = [
  {
    name: 'Kamala Devi, 78',
    role: 'Ashram Resident',
    text: 'I came here alone, with nothing but my sorrows. Today, I have a family — a home that cares for me. The Trust gave me back my dignity and the will to live joyfully in my final years.',
  },
  {
    name: 'Ravi Kumar',
    role: 'Volunteer, Bengaluru',
    text: 'Spending time at the ashram changed my perspective on life. The love the staff shows to every elder is extraordinary. This is real seva — selfless, unconditional, and deeply moving.',
  },
  {
    name: 'Sunitha Rao',
    role: 'Parent of Scholar',
    text: 'Our community received vital social welfare support from the Trust during tough times. Without their ongoing help, our families would have struggled greatly. We are eternally grateful.',
  },
];

export default function Home() {
  const statsRef = useRef(null);

  return (
    <div className="home">
      {/* ══════════ HERO ══════════ */}
      <section className="hero" style={{ backgroundImage: `url(${HERO_BG})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>
            Venkateshwara Seva Trust
          </span>
          <h1 className="hero-title">
            Honouring Every Life<br />
            <em>With Compassion & Grace</em>
          </h1>
          <p className="hero-subtitle">
            An NGO dedicated to the care and dignity of the elderly, the education of rural children,
            and the upliftment of underserved communities — grounded in the values of dharma, seva,
            and unconditional love.
          </p>
          <div className="hero-actions">
            <Link to="/donate" className="btn-primary hero-btn-primary">
              <FiHeart size={16} /> Support Our Mission
            </Link>
            <Link to="/about" className="btn-hero-outline">
              Learn About Us <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <section className="stats-bar" ref={statsRef}>
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ ABOUT SNIPPET ══════════ */}
      <section className="section about-snippet">
        <div className="container about-snippet-grid">
          <div className="about-snippet-img-wrap">
            <img src={ABOUT_IMG} alt="Elderly care at the ashram" className="about-snippet-img" />
            <div className="about-snippet-badge">
              <FiStar size={18} />
              <span>Serving with Devotion</span>
            </div>
          </div>
          <div className="about-snippet-text">
            <span className="section-label">Who We Are</span>
            <h2>A Sacred Space of<br />Service & Shelter</h2>
            <div className="ornament" style={{ display: 'block', marginBottom: '1.5rem' }} />
            <p>
              The <strong>Venkateshwara Educational and Rural Development Seva Trust</strong> was founded on a simple but profound belief: that every human being — regardless of age, background, or circumstance — deserves to be treated with love, respect, and care.
            </p>
            <p style={{ marginTop: '1rem' }}>
              What began as a humble ashram for a handful of elderly individuals has grown into a multi-faceted social welfare organisation, touching thousands of lives across rural India. We operate elderly care homes, educational programs, medical camps, and community development initiatives — all rooted in the spirit of selfless service.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our work is sustained by the generosity of donors, the dedication of volunteers, and an unwavering commitment to the values of dharma that guide everything we do.
            </p>
            <div className="about-snippet-actions">
              <Link to="/about" className="btn-primary">
                Our Full Story <FiArrowRight size={16} />
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROGRAMS ══════════ */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">What We Do</span>
            <h2>Our Programs & Initiatives</h2>
            <div className="section-divider"><span>❈</span></div>
            <p className="section-intro">
              Every program we run is born from a real need — seen, listened to, and acted upon with compassion. Together, they form a fabric of care that holds some of the most vulnerable people in our society.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div className="program-card" key={i}>
                <div className="program-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PHOTO STRIP ══════════ */}
      <section className="photo-strip">
        <img src={IMG1} alt="Elderly care" />
        <div className="photo-strip-text">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Real Stories. Real Impact.</span>
          <h2>A Glimpse Into Our World</h2>
          <p>Every photograph tells a story of resilience, warmth, and transformation.</p>
          <Link to="/gallery" className="btn-gold" style={{ marginTop: '1.5rem' }}>
            View Full Gallery <FiArrowRight size={16} />
          </Link>
        </div>
        <img src={IMG2} alt="Rural education" />
        <img src={IMG3} alt="Community service" />
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Voices of Impact</span>
            <h2>What They Say</h2>
            <div className="section-divider"><span>❈</span></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DONATE CTA ══════════ */}
      <section className="donate-cta-section">
        <div className="container donate-cta-inner">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Make A Difference</span>
          <h2>Your Generosity Changes Lives</h2>
          <p>
            A single donation — however small — provides meals, medicine, and moments of joy to an elderly soul who has nowhere else to turn. Be the reason someone smiles today.
          </p>
          <div className="donate-cta-actions">
            <Link to="/donate" className="btn-gold">
              <FiHeart size={16} /> Donate Now
            </Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--white)' }}>
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
