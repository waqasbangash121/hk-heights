<template>
  <div>
    <!-- Animated Background -->
    <div class="animated-bg"></div>
    
    <!-- Floating Elements -->
    <div class="floating-elements">
      <div class="floating-shape">🏔️</div>
      <div class="floating-shape">🌲</div>
      <div class="floating-shape">☁️</div>
      <div class="floating-shape">🦅</div>
    </div>

    <!-- Navigation -->
    <nav id="navbar">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">HK Heights</NuxtLink>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#booking">Book Now</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h1>Welcome to HK Heights</h1>
        <p class="subtitle">Luxury Hill Station Apartments with Breathtaking Views</p>
        <a href="#booking" class="cta-button">
          <i class="fas fa-calendar-check"></i> Book Your Stay
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <h2 class="section-title fade-in">Experience Mountain Luxury</h2>
        <p class="section-subtitle fade-in">
          Nestled in the pristine hills, HK Heights offers an unforgettable escape...
        </p>

        <div class="features">
          <div class="feature-card fade-in">
            <div class="feature-icon">
              <i class="fas fa-bed"></i>
            </div>
            <h3>6 Spacious Rooms</h3>
            <p>Elegantly designed rooms...</p>
          </div>
          <!-- Repeat for other feature cards -->
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery-section" id="gallery">
      <div class="container">
        <h2 class="section-title fade-in">Gallery</h2>
        <p class="section-subtitle fade-in">Take a visual tour...</p>

        <div class="gallery">
          <div class="gallery-item fade-in">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="Luxury Room">
            <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
          </div>
          <!-- Repeat for more gallery items -->
        </div>
      </div>
    </section>

    <!-- Booking -->
    <section class="booking" id="booking">
      <div class="container">
        <h2 class="section-title fade-in">Book Your Perfect Getaway</h2>
        <p class="section-subtitle fade-in">Ready to experience HK Heights?</p>
        <!-- Your form here -->
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <p>&copy; 2024 HK Heights. All rights reserved.</p>
      </div>
    </footer>

    <!-- WhatsApp Button -->
    <a class="whatsapp-float" href="https://wa.me/923339345500?text=Hi%2C+I+want+to+book+HK+Heights" target="_blank">
      <i class="fab fa-whatsapp"></i> Book Now
    </a>
  </div>
</template>

<script setup>
// Place your JavaScript logic here
onMounted(() => {
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })

  // Fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  })

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* paste your CSS here */ * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    :root {
      --primary-color: #2c5530;
      --secondary-color: #6faa75;
      --accent-color: #f4a261;
      --text-dark: #2d3436;
      --text-light: #636e72;
      --bg-light: #f8f9fa;
      --white: #ffffff;
      --shadow: 0 10px 40px rgba(0,0,0,0.1);
      --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
      overflow-x: hidden;
    }

    /* Animated background */
    .animated-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Floating elements */
    .floating-elements {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }

    .floating-shape {
      position: absolute;
      opacity: 0.1;
      animation: float 20s infinite linear;
    }

    .floating-shape:nth-child(1) {
      top: 20%;
      left: 10%;
      animation-delay: 0s;
      font-size: 30px;
    }

    .floating-shape:nth-child(2) {
      top: 50%;
      right: 15%;
      animation-delay: 5s;
      font-size: 25px;
    }

    .floating-shape:nth-child(3) {
      bottom: 30%;
      left: 20%;
      animation-delay: 10s;
      font-size: 35px;
    }

    .floating-shape:nth-child(4) {
      top: 70%;
      right: 30%;
      animation-delay: 15s;
      font-size: 20px;
    }

    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(90deg); }
      50% { transform: translateY(0px) rotate(180deg); }
      75% { transform: translateY(-20px) rotate(270deg); }
      100% { transform: translateY(0px) rotate(360deg); }
    }

    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    nav.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: var(--shadow);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }

    .logo {
      font-family: 'Dancing Script', cursive;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
      text-decoration: none;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-dark);
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    /* Hero Section */
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320"><path fill="%23ffffff20" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>') no-repeat center center/cover;
    }

    .hero-content {
      max-width: 800px;
      padding: 0 2rem;
      animation: fadeInUp 1.5s ease;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero h1 {
      font-size: 4rem;
      font-weight: 700;
      color: var(--white);
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      margin-bottom: 1rem;
      animation: slideInLeft 1s ease 0.5s both;
    }

    .hero .subtitle {
      font-size: 1.5rem;
      color: var(--white);
      margin-bottom: 2rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
      animation: slideInRight 1s ease 0.7s both;
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-100px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(100px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .cta-button {
      display: inline-block;
      background: var(--accent-color);
      color: var(--white);
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      animation: bounceIn 1s ease 1s both;
      box-shadow: 0 5px 20px rgba(244, 162, 97, 0.4);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(244, 162, 97, 0.6);
    }

    @keyframes bounceIn {
      0% { opacity: 0; transform: scale(0.3); }
      50% { opacity: 1; transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }

    /* Sections */
    section {
      padding: 5rem 0;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-title {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 1rem;
      color: var(--primary-color);
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--accent-color);
      border-radius: 2px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.2rem;
      color: var(--text-light);
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    /* About Section */
    .about {
      background: var(--white);
      position: relative;
    }

    .about::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><path fill="%23ffffff" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path></svg>') no-repeat center top/cover;
    }

    /* Features Grid */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .feature-card {
      background: var(--white);
      padding: 2.5rem 2rem;
      border-radius: 20px;
      text-align: center;
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient);
    }

    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    }

    .feature-icon {
      font-size: 3rem;
      color: var(--secondary-color);
      margin-bottom: 1rem;
      animation: rotateIn 1s ease;
    }

    @keyframes rotateIn {
      from { transform: rotate(-180deg) scale(0); }
      to { transform: rotate(0deg) scale(1); }
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .feature-card p {
      color: var(--text-light);
      line-height: 1.6;
    }

    /* Gallery Section */
    .gallery-section {
      background: var(--bg-light);
      position: relative;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .gallery-item {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
    }

    .gallery-item:hover {
      transform: scale(1.05);
    }

    .gallery-item img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: all 0.3s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(44, 85, 48, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .gallery-overlay i {
      color: var(--white);
      font-size: 2rem;
    }

    /* Testimonials */
    .testimonials {
      background: var(--white);
      padding: 5rem 0;
    }

    .testimonial-slider {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .testimonial {
      padding: 2rem;
      border-radius: 20px;
      background: var(--bg-light);
      margin: 0 1rem;
      box-shadow: var(--shadow);
    }

    .testimonial p {
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }

    .testimonial-author {
      font-weight: 600;
      color: var(--primary-color);
    }

    /* Booking Section */
    .booking {
      background: var(--gradient);
      color: var(--white);
      text-align: center;
    }

    .booking .section-title {
      color: var(--white);
    }

    .booking-form {
      max-width: 600px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }

    .form-group {
      position: relative;
    }

    .form-group input,
    .form-group select {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.9);
      transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none;
      background: var(--white);
      transform: scale(1.02);
    }

    /* WhatsApp Float */
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #25D366;
      color: var(--white);
      padding: 1rem 1.5rem;
      border-radius: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
      z-index: 1000;
      transition: all 0.3s ease;
      animation: bounce 2s infinite;
    }

    .whatsapp-float:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(37, 211, 102, 0.6);
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }

    /* Footer */
    footer {
      background: var(--text-dark);
      color: var(--white);
      text-align: center;
      padding: 3rem 0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      margin-bottom: 1rem;
      color: var(--accent-color);
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-links a {
      color: var(--white);
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      color: var(--accent-color);
      transform: scale(1.2);
    }

    /* Animations on Scroll */
    .fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .hero h1 {
        font-size: 2.5rem;
      }

      .hero .subtitle {
        font-size: 1.2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .features {
        grid-template-columns: 1fr;
      }

      .gallery {
        grid-template-columns: 1fr;
      }

      .whatsapp-float {
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
      }
    }
</style>
