
import './App.css';

function App() {
  return (
    <div className="landing-root">
      <header className="landing-header">
        <nav className="landing-nav">
          <div className="nav-inner">
            <div className="logo-text">GreenScape</div>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
            <button className="cta-btn">Get Started</button>
          </div>
        </nav>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Grow Your Dream Garden Effortlessly</h1>
            <p>GreenScape helps you design, plan, and maintain beautiful gardens with ease. From expert advice to smart scheduling, we make gardening simple for everyone.</p>
            <button className="cta-btn hero-btn">Start Your Garden</button>
          </div>
          <div className="hero-image">
            {/* Placeholder for garden image */}
            <div className="image-placeholder">Image</div>
          </div>
        </div>
      </header>
      <main>
        <section id="about" className="about-section">
          <h2>About GreenScape</h2>
          <p>GreenScape is dedicated to making gardening accessible and enjoyable for everyone. Whether you’re a beginner or a seasoned gardener, our platform provides the tools and support you need to create a thriving garden.</p>
        </section>
        <section id="features" className="features-section">
          <h2>Why Choose GreenScape?</h2>
          <div className="features-list">
            <div className="feature-card">
              <h3>Personalized Plans</h3>
              <p>Get custom garden layouts and plant recommendations tailored to your space and climate.</p>
            </div>
            <div className="feature-card">
              <h3>Smart Reminders</h3>
              <p>Never miss a watering or fertilizing schedule with our intelligent notifications.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Support</h3>
              <p>Access gardening tips and chat with our horticulture experts anytime.</p>
            </div>
          </div>
        </section>

        <section id="location" className="location-section">
          <div className="location-flex location-card">
            <div className="location-info">
              <h2 className="location-title">Our Office</h2>
              <div className="address-block">
                <div className="address-label">Address</div>
                <div className="address-main">123 Garden Lane</div>
                <div className="address-city">Melbourne, VIC, Australia</div>
              </div>
              <div className="contact-block">
                <div className="contact-label">Contact</div>
                <div className="contact-detail">Phone: <a href="tel:+61123456789">+61 123 456 789</a></div>
                <div className="contact-detail">Email: <a href="mailto:info@greenscape.com">info@greenscape.com</a></div>
              </div>
            </div>
            <div className="map-container">
              <iframe
                title="GreenScape Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8c9b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: '16px', minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact section removed as requested */}
      </main>
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">GreenScape</span>
            <span className="footer-tagline">Grow your dream garden with us</span>
          </div>
          {/* Footer navigation removed as requested */}
          <div className="footer-contact-block">
            <div className="footer-contact-label">Contact us on Instagram or WhatsApp</div>
            <div className="footer-social footer-social-highlight">
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon big-social">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#fff"/>
                  <path d="M24 14.4A9.6 9.6 0 1 0 24 33.6A9.6 9.6 0 1 0 24 14.4Z" stroke="#388e3c" strokeWidth="2.5"/>
                  <circle cx="34.4" cy="13.6" r="2.4" fill="#388e3c"/>
                </svg>
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social-icon big-social">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#fff"/>
                  <path d="M34.944 28.764c-.594-.298-3.516-1.734-4.06-1.934-.546-.198-.944-.296-1.34.3-.396.594-1.534 1.934-1.88 2.332-.346.396-.694.446-1.288.15-.594-.298-2.51-.926-4.78-2.95-1.766-1.576-2.96-3.522-3.306-4.118-.346-.594-.036-.916.26-1.212.268-.266.596-.694.892-1.04.298-.348.396-.596.596-.994.198-.396.1-.744-.05-1.042-.15-.298-1.338-3.224-1.832-4.414-.484-1.158-.974-1-1.34-1.02-.346-.016-.744-.02-1.142-.02-.396 0-1.04.148-1.584.744-.544.594-2.08 2.032-2.08 4.958 0 2.926 2.13 5.75 2.426 6.148.298.396 4.198 6.41 10.154 8.732 1.42.612 2.526.978 3.388 1.25 1.424.454 2.72.39 3.744.236 1.142-.17 3.516-1.438 4.012-2.826.496-1.388.496-2.576.346-2.826-.148-.248-.544-.396-1.14-.694z" fill="#25D366"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} GreenScape. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
