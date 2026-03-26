import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

/*
  ──────────────────────────────────────────────────────────
  EMAIL SETUP via EmailJS (Free tier — 200 emails/month)
  1. Sign up at https://www.emailjs.com
  2. Create a service (Gmail, Outlook, etc.)
  3. Create an email template using the variables:
       {{from_name}}, {{from_email}}, {{phone}},
       {{subject}}, {{message}}
  4. Replace the constants below with your IDs:
  ──────────────────────────────────────────────────────────
*/
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // From Account > General

const CONTACT_EMAIL = 'venkateshwaraeducationaltrust@gmail.com';
const CONTACT_PHONE_1 = '+91 85531 82800';
const CONTACT_PHONE_2 = '+91 89713 79711';
const CONTACT_ADDRESS = 'Thirumala Resort, Near Thirumala Conventional Hall, Soukya Road, Thirumalashettyhalli Cross, Hoskote, Bangalore Rural District, 560067';

async function sendViaEmailJS(formData) {
  /* Dynamic import keeps bundle lean */
  const mod = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js')
    .catch(() => null);

  /* CDN ESM bundles expose the library as the default export */
  const emailjs = mod?.default ?? mod;

  if (!emailjs?.send) throw new Error('EmailJS could not be loaded');

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name:  formData.name,
      from_email: formData.email,
      phone:      formData.phone,
      subject:    formData.subject,
      message:    formData.message,
    },
    EMAILJS_PUBLIC_KEY
  );
}

/* Fallback: mailto link (always works) */
function openMailto(formData) {
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
  );
  const subject = encodeURIComponent(`[Trust Contact] ${formData.subject}`);
  window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
}

const subjects = [
  'General Enquiry',
  'Donation / Support',
  'Volunteering',
  'Admission to Ashram',
  'Corporate / CSR Partnership',
  'Media & Press',
  'Other',
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]     = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError]   = useState('');

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    /* 
      If EmailJS is configured, it will send the form silently.
      Otherwise, it falls back to opening the user's mail client.
    */
    if (
      EMAILJS_SERVICE_ID  !== 'YOUR_SERVICE_ID' &&
      EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
      EMAILJS_PUBLIC_KEY  !== 'YOUR_PUBLIC_KEY'
    ) {
      try {
        await sendViaEmailJS(form);
        setStatus('success');
        setForm(initialForm);
      } catch (err) {
        console.error('EmailJS error:', err);
        setStatus('error');
        setError('Could not send automatically. Please use the mailto button below or email us directly.');
      }
    } else {
      /* EmailJS not configured yet — open mailto */
      openMailto(form);
      setStatus('success');
      setForm(initialForm);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Contact Us</span>
          </div>
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you — whether you wish to donate, volunteer, admit a loved one, or simply learn more about our work.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section contact-section">
        <div className="container contact-layout">

          {/* ── Contact Info ── */}
          <aside className="contact-info">
            <h2>Reach Us Directly</h2>
            <p className="contact-info-intro">
              Our team is available Monday through Saturday. We respond to all enquiries within 24 hours.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon"><FiMapPin size={20} /></div>
                <div>
                  <h4>Our Address</h4>
                  <p>{CONTACT_ADDRESS}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><FiPhone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${CONTACT_PHONE_1.replace(/\s/g,'')}`}>{CONTACT_PHONE_1}</a>
                  <br />
                  <a href={`tel:${CONTACT_PHONE_2.replace(/\s/g,'')}`}>{CONTACT_PHONE_2}</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><FiMail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><FiClock size={20} /></div>
                <div>
                  <h4>Office Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <h4>For Ashram Admissions</h4>
              <p>
                If you are enquiring about admitting an elderly family member to our ashram, please call us directly or visit in person. A team member will guide you through the process with care and sensitivity.
              </p>
            </div>
          </aside>

          {/* ── Contact Form ── */}
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <span className="section-label">Send Us a Message</span>
              <h2>We're Listening</h2>
              <div className="ornament" style={{ display: 'block', margin: '0.75rem 0 1.5rem' }} />
            </div>

            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon"><FiCheck size={32} /></div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <p className="success-sub">A copy has been sent to your inbox.</p>
                <button
                  className="btn-outline"
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map(s => (
                        <option value={s} key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you, or share anything you'd like us to know..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-msg">
                    <FiAlertCircle size={16} />
                    <span>{error}</span>
                    <button
                      type="button"
                      className="btn-outline"
                      style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
                      onClick={() => openMailto(form)}
                    >
                      Open in Mail App
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary form-submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} /> Send Message
                    </>
                  )}
                </button>

                <p className="form-privacy">
                  🔒 Your information is kept private and will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="map-section">
        <iframe 
          src="https://maps.google.com/maps?q=Thirumala%20Resort,%20Near%20Thirumala%20Conventional%20Hall,%20Hoskote,%20Bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="450" 
          style={{ border: 0, display: 'block', backgroundColor: '#e5e3df' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Trust Location Map"
        ></iframe>
      </section>
    </div>
  );
}
