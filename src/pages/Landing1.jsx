import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import "../Styles/landing1.css";

export default function Landing() {
  return (
    <div className="landing-page">
      {/* HEADER / NAVBAR */}
      <header className="landing-header">
        <div className="landing-logo">BillClone</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <Link to="/login">Login</Link> {/* <-- Use Link for routing */}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="landing-hero">
        <div className="hero-text">
          <h1>Simplify your business payments</h1>
          <p>
            Manage invoices, payments, and vendors all in one place. Save time,
            reduce errors, and get paid faster with our modern fintech platform.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">Get Started</Link> {/* <-- Redirect to signup */}
            <a href="#learn-more" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="landing-features">
        <div className="feature-card">
          <h3>Automated Invoicing</h3>
          <p>Create, send, and track invoices automatically. Never miss a payment again.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Payments</h3>
          <p>Pay your vendors securely with ACH, credit card, or wire transfer, all in one platform.</p>
        </div>
        <div className="feature-card">
          <h3>Vendor Management</h3>
          <p>Keep all your vendor information organized and easily accessible in one dashboard.</p>
        </div>
        <div className="feature-card">
          <h3>Analytics & Reports</h3>
          <p>Track cash flow, overdue payments, and get actionable insights with real-time dashboards.</p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="landing-cta">
        <h2>Start managing your business payments today</h2>
        <p>Sign up for free and see why thousands of companies trust us for their payment workflows.</p>
        <Link to="/signup">Get Started Free</Link> {/* <-- Redirect to signup */}
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-logo">BillClone</div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
