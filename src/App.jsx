import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Sangraha LLC</h1>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">Elevate Your Photography Portfolio</h2>
          <p className="hero-subtitle">
            AI-powered portfolio solutions for photographers and artists
          </p>
          <p className="hero-description">
            Transform your creative work into a stunning online presence with our intelligent 
            image pipeline and automated portfolio management.
          </p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Portfolio Development</h3>
              <p>
                Custom-designed portfolio websites that showcase your photography 
                and artistic work in the best light.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI Image Pipeline</h3>
              <p>
                Intelligent automation for metadata management, location tagging, 
                and smart organization of your entire photo library.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Content Enhancement</h3>
              <p>
                AI-powered caption and hashtag generation to boost your social 
                media presence and discoverability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>🎨 Smart Grouping</h3>
              <p>Automatically organize your portfolio by theme, style, location, or people</p>
            </div>
            <div className="feature-item">
              <h3>📍 Location Intelligence</h3>
              <p>Advanced geolocation tagging and mapping for travel and landscape photography</p>
            </div>
            <div className="feature-item">
              <h3>📊 Metadata Management</h3>
              <p>Comprehensive EXIF data handling, keyword assignment, and searchable archives</p>
            </div>
            <div className="feature-item">
              <h3>🚀 Social Media Integration</h3>
              <p>Automatic uploads to Instagram, Facebook, and other platforms with optimized formatting</p>
            </div>
            <div className="feature-item">
              <h3>💬 AI Captions</h3>
              <p>Intelligent caption and hashtag generation tailored to your brand and audience</p>
            </div>
            <div className="feature-item">
              <h3>📱 Responsive Design</h3>
              <p>Beautiful, mobile-first portfolios that look stunning on any device</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload Your Images</h3>
              <p>Simply upload your photos to our secure platform</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Processing</h3>
              <p>Our AI analyzes and enriches your images with metadata, tags, and captions</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Organize & Customize</h3>
              <p>Review AI suggestions and customize your portfolio groupings</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Publish & Share</h3>
              <p>Launch your portfolio and automatically share to social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            Ready to transform your photography portfolio? Let's discuss how 
            Sangraha LLC can help enhance your online presence.
          </p>
          <div className="contact-info">
            <a href="mailto:info@sangraha.com" className="contact-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Sangraha LLC. All rights reserved.</p>
          <p className="footer-tagline">
            Empowering photographers and artists with AI-driven portfolio solutions
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
