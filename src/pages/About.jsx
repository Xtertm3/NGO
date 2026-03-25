import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import './About.css';

const ABOUT_HERO = 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80';
const FOUNDER_IMG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80';
const TEAM_IMG1   = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80';
const TEAM_IMG2   = 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&q=80';
const TEAM_IMG3   = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80';
const STORY_IMG   = 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80';

const values = [
  { icon: '🙏', title: 'Seva (Selfless Service)', desc: 'Every action we take is guided by the spirit of giving without expectation — pure, unconditional service to those in need.' },
  { icon: '❤️', title: 'Karuna (Compassion)', desc: 'We see divinity in every human being. Our work is driven by deep empathy and a heartfelt desire to alleviate suffering.' },
  { icon: '🌿', title: 'Dharma (Righteous Conduct)', desc: 'We uphold the highest standards of ethics, transparency, and integrity in everything we do — for our beneficiaries, donors, and community.' },
  { icon: '🤝', title: 'Samabhavana (Equality)', desc: 'Every individual — regardless of caste, religion, gender, or background — is welcomed, respected, and served with equal love and dignity.' },
];

const team = [
  { name: 'Sri [Founder Name]', role: 'Founder & Managing Trustee', img: FOUNDER_IMG, bio: 'Inspired by the teachings of Sri Venkateswara, the Founder established this Trust with a simple vision: that no elderly soul should suffer alone. For over a decade, their unwavering commitment has built an institution of love.' },
  { name: 'Smt. [Trustee Name]', role: 'Secretary & Programme Director', img: TEAM_IMG1, bio: 'A dedicated social worker with 12+ years of grassroots experience, she oversees all programme execution — from ashram operations to rural outreach initiatives with meticulous care.' },
  { name: 'Sri [Trustee Name]', role: 'Treasurer & Finance Head', img: TEAM_IMG2, bio: 'A chartered professional who ensures every rupee donated reaches those it is meant for. His financial stewardship has earned the Trust the trust of hundreds of donors nationwide.' },
  { name: 'Dr. [Name]', role: 'Medical Advisor', img: TEAM_IMG3, bio: 'A retired physician who volunteers his expertise to our health camps and ashram residents. His guidance ensures the highest standard of medical care for our elderly community.' },
];

const milestones = [
  { year: '2009', title: 'Foundation Laid', desc: 'The Trust was registered with a small ashram housing 12 elderly individuals, run entirely by volunteers.' },
  { year: '2012', title: 'First School Camp', desc: 'We launched our first rural education drive, distributing books and providing free tuition to 80+ village children.' },
  { year: '2015', title: 'Expanded to 3 Centres', desc: 'A second ashram was inaugurated, doubling our capacity to serve the elderly across the region.' },
  { year: '2018', title: 'Medical Outreach Begins', desc: 'Partnership with local hospitals enabled us to hold monthly free medical camps in 5 villages.' },
  { year: '2021', title: 'Scholarship Program Launch', desc: 'We awarded our first 50 scholarships to meritorious students from economically weaker backgrounds.' },
  { year: '2024', title: 'Serving 500+ Lives', desc: 'Today, the Trust proudly serves over 500 beneficiaries across all programmes — a milestone built on faith and generosity.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero about-hero" style={{ backgroundImage: `url(${ABOUT_HERO})` }}>
        <div className="about-hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>About Us</span>
          </div>
          <h1>Our Story, Our Soul</h1>
          <p>Two decades of selfless service, one unwavering purpose — to honour every human life with dignity and love.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container mv-grid">
          <div className="mv-card mission">
            <div className="mv-icon"><FiTarget size={28} /></div>
            <h3>Our Mission</h3>
            <p>To provide compassionate care, shelter, and support to the elderly and marginalised communities; to promote quality education in rural areas; and to foster holistic community development — all guided by the values of seva, dharma, and equality.</p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon"><FiEye size={28} /></div>
            <h3>Our Vision</h3>
            <p>A society where every elderly individual lives with dignity, every rural child has access to quality education, and no community is left behind in the journey of progress. We envision an India where compassion is not an act of charity — but a way of life.</p>
          </div>
          <div className="mv-card values-card">
            <div className="mv-icon"><FiHeart size={28} /></div>
            <h3>Our Purpose</h3>
            <p>Rooted in the devotion to Sri Venkateswara, we believe service to humanity is the highest form of worship. Every meal served, every child educated, every elder cared for — is an offering at the feet of the divine.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-text">
            <span className="section-label">How It Began</span>
            <h2>A Story Born<br />From the Heart</h2>
            <div className="ornament" style={{ display: 'block', margin: '1rem 0 1.5rem' }} />
            <p>
              The Venkateshwara Educational and Rural Development Seva Trust was not born in a boardroom. It was born from a moment of pain — when our Founder witnessed an elderly woman sitting alone on a street corner, frail and forgotten, with no one to turn to.
            </p>
            <p style={{ marginTop: '1rem' }}>
              That encounter became a calling. Within months, a modest rented space was converted into the Trust's first ashram — a home for twelve elderly individuals. Word spread quietly through the community, and with it came volunteers, donations, and an ever-growing family of those who believed that love, when organised, can transform lives.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Today, what began as a single rented room has grown into a network of three ashram centres, multiple educational outreach programs, regular medical camps, and a scholarship initiative that has changed the trajectories of hundreds of young lives. The spirit, however, remains exactly as it was on day one: humble, human, and rooted in love.
            </p>
          </div>
          <div className="story-img-wrap">
            <img src={STORY_IMG} alt="Our founding story" className="story-img" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">What Guides Us</span>
            <h2>Our Core Values</h2>
            <div className="section-divider"><span>❈</span></div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Our Journey</span>
            <h2>Milestones of Seva</h2>
            <div className="section-divider"><span>❈</span></div>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">The People Behind the Purpose</span>
            <h2>Our Trustees & Leadership</h2>
            <div className="section-divider"><span>❈</span></div>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-img-wrap">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="team-info">
                  <h3>{t.name}</h3>
                  <span className="team-role">{t.role}</span>
                  <p>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2>Join Our Family of Seva</h2>
          <p>Whether you wish to donate, volunteer, or simply learn more — every act of engagement is a step towards a more compassionate world.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/donate" className="btn-gold">
              Support the Trust <FiArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--white)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
