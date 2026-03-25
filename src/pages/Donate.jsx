import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCopy, FiCheck, FiHeart, FiShield, FiGift } from 'react-icons/fi';
import './Donate.css';

/*
  ──────────────────────────────────────────────────────────
  PAYMENT DETAILS — REPLACE WITH YOUR ACTUAL INFORMATION
  ──────────────────────────────────────────────────────────
*/
/*
  ══════════════════════════════════════════════
  STEP 1 — FILL IN YOUR BANK DETAILS BELOW
  ══════════════════════════════════════════════
*/
const BANK_DETAILS = {
  accountName:   'Venkateshwara Educational and Rural Development Seva Trust',
  accountNumber: '[ Your Account Number ]',
  ifscCode:      '[ Your IFSC Code ]',
  bankName:      '[ Bank Name ]',
  branch:        '[ Branch Name, City ]',
  accountType:   'Current Account',
};

/*
  ══════════════════════════════════════════════
  STEP 2 — REPLACE WITH YOUR UPI ID
  ══════════════════════════════════════════════
*/
const UPI_ID = '[ yourtrust@upi ]'; // ← Replace with your actual UPI ID

/* QR Code placeholder — replace with your actual UPI QR code image */
const QR_CODE_PLACEHOLDER = null; // e.g. import qr from '../assets/upi-qr.png';

const impactItems = [
  { amount: '₹500',    impact: 'Provides medicines for one elderly resident for a month' },
  { amount: '₹1,000',  impact: 'Covers a child\'s school fees, books, and stationery for one term' },
  { amount: '₹2,500',  impact: 'Feeds 50 individuals through our Annadanam program for a day' },
  { amount: '₹5,000',  impact: 'Sponsors a full medical camp in a remote village' },
  { amount: '₹10,000', impact: 'Supports one elderly resident with full care for an entire month' },
  { amount: '₹25,000', impact: 'Funds a complete scholarship for a student for one academic year' },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className="copy-btn" onClick={copy} title="Copy to clipboard">
      {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
    </button>
  );
}

export default function Donate() {
  const [activeTab, setActiveTab] = useState('upi');

  return (
    <div className="donate-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Donate</span>
          </div>
          <h1>Support Our Mission</h1>
          <p>Your generosity is the heartbeat of our work. Every contribution, however small, makes a profound difference in the lives of those who need it most.</p>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="impact-banner">
        <div className="container impact-grid">
          {impactItems.map((item, i) => (
            <div className="impact-item" key={i}>
              <span className="impact-amount">{item.amount}</span>
              <span className="impact-text">{item.impact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Section */}
      <section className="section payment-section">
        <div className="container payment-layout">

          {/* LEFT: Payment Methods */}
          <div className="payment-main">
            <span className="section-label">Make a Donation</span>
            <h2>Choose a Payment Method</h2>
            <div className="ornament" style={{ display: 'block', margin: '1rem 0 2rem' }} />

            {/* Tabs */}
            <div className="payment-tabs">
              <button
                className={`tab-btn ${activeTab === 'upi' ? 'active' : ''}`}
                onClick={() => setActiveTab('upi')}
              >
                📱 UPI / QR Code
              </button>
              <button
                className={`tab-btn ${activeTab === 'bank' ? 'active' : ''}`}
                onClick={() => setActiveTab('bank')}
              >
                🏦 Bank Transfer
              </button>
            </div>

            {/* ── UPI TAB ── */}
            {activeTab === 'upi' && (
              <div className="tab-content">
                <div className="upi-layout">
                  <div className="qr-block">
                    {QR_CODE_PLACEHOLDER ? (
                      <img src={QR_CODE_PLACEHOLDER} alt="UPI QR Code" className="qr-img" />
                    ) : (
                      <div className="qr-placeholder">
                        <span>📷</span>
                        <p>Your UPI QR Code</p>
                        <small>Replace <code>QR_CODE_PLACEHOLDER</code> in <code>Donate.jsx</code> with your QR image</small>
                      </div>
                    )}
                    <p className="qr-hint">Scan with any UPI app</p>
                  </div>
                  <div className="upi-details">
                    <h3>Pay via UPI</h3>
                    <p className="upi-desc">
                      Open any UPI-enabled app — Google Pay, PhonePe, Paytm, BHIM, or your bank app — and send your donation directly to our UPI ID.
                    </p>
                    <div className="detail-row highlighted">
                      <span className="detail-label">UPI ID</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value upi-id">{UPI_ID}</span>
                        <CopyButton text={UPI_ID} />
                      </div>
                    </div>
                    <div className="upi-apps">
                      <span className="upi-apps-label">Accepted on</span>
                      <div className="upi-app-list">
                        {['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'].map(app => (
                          <span className="upi-app-tag" key={app}>{app}</span>
                        ))}
                      </div>
                    </div>
                    <div className="payment-note">
                      <FiShield size={14} />
                      <span>All UPI transactions are secure and go directly to the Trust's registered account.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── BANK TAB ── */}
            {activeTab === 'bank' && (
              <div className="tab-content">
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>Bank Transfer Details</h3>
                <div className="bank-details-card">
                  {[
                    { label: 'Account Name',   value: BANK_DETAILS.accountName },
                    { label: 'Account Number', value: BANK_DETAILS.accountNumber },
                    { label: 'IFSC Code',      value: BANK_DETAILS.ifscCode },
                    { label: 'Bank Name',      value: BANK_DETAILS.bankName },
                    { label: 'Branch',         value: BANK_DETAILS.branch },
                    { label: 'Account Type',   value: BANK_DETAILS.accountType },
                  ].map(row => (
                    <div className="detail-row" key={row.label}>
                      <span className="detail-label">{row.label}</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value">{row.value}</span>
                        <CopyButton text={row.value} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bank-instructions">
                  <h4>After Transferring</h4>
                  <ol>
                    <li>Please send a screenshot or transaction reference to <strong>venkateshwaraeducationaltrust@gmail.com</strong></li>
                    <li>Include your full name and contact number for our records.</li>
                    <li>A donation receipt will be issued within 2 business days.</li>
                  </ol>
                </div>
                <div className="payment-note">
                  <FiShield size={14} />
                  <span>Your donation is eligible for tax exemption under Section 80G of the Income Tax Act.</span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Sidebar */}
          <aside className="payment-sidebar">
            {/* Tax Benefit */}
            <div className="sidebar-card tax-card">
              <div className="sidebar-card-icon">📜</div>
              <h4>80G Tax Exemption</h4>
              <p>
                Donations to the Trust are eligible for tax deduction under <strong>Section 80G</strong> of the Income Tax Act, 1961. A valid receipt will be issued for all contributions.
              </p>
              <p className="tax-note">
                Registration No: <strong>[80G Reg. No.]</strong><br />
                PAN: <strong>[Trust PAN No.]</strong>
              </p>
            </div>

            {/* How to donate */}
            <div className="sidebar-card how-card">
              <div className="sidebar-card-icon"><FiGift size={22} /></div>
              <h4>Other Ways to Give</h4>
              <ul className="other-ways">
                <li>🥗 Sponsor a meal day (Annadanam)</li>
                <li>📦 Donate goods — clothes, medicines, books</li>
                <li>⏰ Volunteer your time and skills</li>
                <li>🏢 CSR partnerships for corporates</li>
              </ul>
              <Link to="/contact" className="btn-outline" style={{ marginTop: '1.2rem', width: '100%', justifyContent: 'center' }}>
                Get in Touch
              </Link>
            </div>

            {/* Quote */}
            <div className="sidebar-quote">
              <blockquote>
                "The best way to find yourself is to lose yourself in the service of others."
              </blockquote>
              <cite>— Mahatma Gandhi</cite>
            </div>
          </aside>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="gratitude-section">
        <div className="container gratitude-inner">
          <FiHeart size={36} className="gratitude-icon" />
          <h2>Every Rupee Reaches the Heart</h2>
          <p>
            100% of your donation goes directly towards the care of our elderly residents, the education of rural children, and the upliftment of our communities. We maintain complete transparency in our finances, and our accounts are publicly available upon request.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            On behalf of every elder who will sleep safe tonight, every child who will go to school tomorrow, and every family whose life has been touched by your generosity — <strong>thank you</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
