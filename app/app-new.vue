<template>
  <div id="app">
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Header / Navigation -->
    <header role="banner">
      <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }" aria-label="Main navigation">
        <div class="nav-container">
          <!-- Logo -->
          <div class="logo-section">
            <a href="#home" class="logo" aria-label="HK Heights - Home">
              <span class="logo-icon" aria-hidden="true">🏔️</span>
              <span class="logo-text">HK Heights</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <ul class="nav-menu" role="menubar">
            <li role="none">
              <a href="#home" class="nav-link" role="menuitem" @click="scrollToSection('home')">
                <i class="fas fa-home" aria-hidden="true"></i>
                <span>Home</span>
              </a>
            </li>
            <li role="none">
              <a href="#about" class="nav-link" role="menuitem" @click="scrollToSection('about')">
                <i class="fas fa-building" aria-hidden="true"></i>
                <span>Apartments</span>
              </a>
            </li>
            <li role="none">
              <a href="#amenities" class="nav-link" role="menuitem" @click="scrollToSection('amenities')">
                <i class="fas fa-star" aria-hidden="true"></i>
                <span>Amenities</span>
              </a>
            </li>
            <li role="none">
              <a href="#gallery" class="nav-link" role="menuitem" @click="scrollToSection('gallery')">
                <i class="fas fa-images" aria-hidden="true"></i>
                <span>Gallery</span>
              </a>
            </li>
            <li role="none">
              <a href="#booking" class="nav-link nav-link-cta" role="menuitem" @click="scrollToSection('booking')">
                <i class="fas fa-calendar-check" aria-hidden="true"></i>
                <span>Book Now</span>
              </a>
            </li>
          </ul>

          <!-- Mobile Menu Toggle -->
          <button 
            class="mobile-menu-toggle" 
            @click="toggleMobileMenu"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div 
          id="mobile-menu" 
          class="mobile-menu" 
          :class="{ active: mobileMenuOpen }"
          role="menu"
          :aria-hidden="!mobileMenuOpen"
        >
          <a href="#home" class="mobile-nav-link" role="menuitem" @click="handleMobileNavClick('home')">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#about" class="mobile-nav-link" role="menuitem" @click="handleMobileNavClick('about')">
            <i class="fas fa-building"></i>
            <span>Apartments</span>
          </a>
          <a href="#amenities" class="mobile-nav-link" role="menuitem" @click="handleMobileNavClick('amenities')">
            <i class="fas fa-star"></i>
            <span>Amenities</span>
          </a>
          <a href="#gallery" class="mobile-nav-link" role="menuitem" @click="handleMobileNavClick('gallery')">
            <i class="fas fa-images"></i>
            <span>Gallery</span>
          </a>
          <a href="#booking" class="mobile-nav-link mobile-nav-link-cta" role="menuitem" @click="handleMobileNavClick('booking')">
            <i class="fas fa-calendar-check"></i>
            <span>Book Now</span>
          </a>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main id="main-content" role="main">
      
      <!-- Hero Section -->
      <section id="home" class="hero-section" role="banner">
        <div class="hero-background">
          <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-content">
          <div class="container">
            <div class="hero-text">
              <span class="hero-badge" data-aos="fade-up">
                <i class="fas fa-mountain" aria-hidden="true"></i>
                Premium Hill Station Experience
              </span>
              
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
                <span class="hero-title-main">HK Heights</span>
                <span class="hero-title-sub">Luxury Mountain Apartments</span>
              </h1>
              
              <p class="hero-description" data-aos="fade-up" data-aos-delay="400">
                Experience breathtaking mountain views and premium comfort in our luxury hill station apartments. 
                Your perfect mountain getaway awaits.
              </p>

              <!-- Key Stats -->
              <div class="hero-stats" data-aos="fade-up" data-aos-delay="600">
                <div class="stat-item">
                  <span class="stat-number">6</span>
                  <span class="stat-label">Premium Rooms</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">5★</span>
                  <span class="stat-label">Rating</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">24/7</span>
                  <span class="stat-label">Service</span>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="hero-actions" data-aos="fade-up" data-aos-delay="800">
                <button class="btn btn-primary" @click="scrollToSection('booking')">
                  <i class="fas fa-calendar-check"></i>
                  <span>Book Your Stay</span>
                </button>
                <button class="btn btn-secondary" @click="scrollToSection('about')">
                  <i class="fas fa-play"></i>
                  <span>Explore</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator" data-aos="fade-in" data-aos-delay="1000">
          <button @click="scrollToSection('about')" aria-label="Scroll to next section">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </section>

      <!-- About / Apartments Section -->
      <section id="about" class="about-section section-padding">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <span class="section-badge">Our Apartments</span>
            <h2 class="section-title">Luxury Mountain Living</h2>
            <p class="section-description">
              Discover our thoughtfully designed apartments that blend modern luxury with natural beauty, 
              offering you an unforgettable mountain experience.
            </p>
          </div>

          <div class="apartments-grid">
            <div class="apartment-card" data-aos="fade-up" data-aos-delay="200">
              <div class="apartment-image">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80" 
                  alt="Deluxe Mountain View Room with modern amenities"
                  loading="lazy"
                >
                <div class="apartment-badge">Most Popular</div>
              </div>
              <div class="apartment-content">
                <h3 class="apartment-title">Deluxe Mountain View</h3>
                <p class="apartment-description">
                  Spacious rooms with panoramic mountain views, modern amenities, and premium comfort.
                </p>
                <ul class="apartment-features">
                  <li><i class="fas fa-mountain"></i> Mountain View</li>
                  <li><i class="fas fa-wifi"></i> High-Speed WiFi</li>
                  <li><i class="fas fa-snowflake"></i> Climate Control</li>
                  <li><i class="fas fa-coffee"></i> Mini Bar</li>
                </ul>
                <div class="apartment-footer">
                  <span class="apartment-price">From PKR 8,000/night</span>
                  <button class="btn btn-outline" @click="openBookingModal('deluxe')">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div class="apartment-card" data-aos="fade-up" data-aos-delay="400">
              <div class="apartment-image">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80" 
                  alt="Family Suite with spacious living area"
                  loading="lazy"
                >
              </div>
              <div class="apartment-content">
                <h3 class="apartment-title">Family Suite</h3>
                <p class="apartment-description">
                  Perfect for families with separate living areas, multiple bedrooms, and child-friendly amenities.
                </p>
                <ul class="apartment-features">
                  <li><i class="fas fa-users"></i> Up to 6 Guests</li>
                  <li><i class="fas fa-couch"></i> Living Area</li>
                  <li><i class="fas fa-gamepad"></i> Entertainment</li>
                  <li><i class="fas fa-bath"></i> 2 Bathrooms</li>
                </ul>
                <div class="apartment-footer">
                  <span class="apartment-price">From PKR 12,000/night</span>
                  <button class="btn btn-outline" @click="openBookingModal('family')">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div class="apartment-card" data-aos="fade-up" data-aos-delay="600">
              <div class="apartment-image">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&q=80" 
                  alt="Presidential Suite with luxury amenities"
                  loading="lazy"
                >
                <div class="apartment-badge">Premium</div>
              </div>
              <div class="apartment-content">
                <h3 class="apartment-title">Presidential Suite</h3>
                <p class="apartment-description">
                  Ultimate luxury with private terrace, spa services, and personalized concierge.
                </p>
                <ul class="apartment-features">
                  <li><i class="fas fa-crown"></i> VIP Treatment</li>
                  <li><i class="fas fa-spa"></i> Private Spa</li>
                  <li><i class="fas fa-wine-glass"></i> Mini Bar</li>
                  <li><i class="fas fa-concierge-bell"></i> Concierge</li>
                </ul>
                <div class="apartment-footer">
                  <span class="apartment-price">From PKR 18,000/night</span>
                  <button class="btn btn-outline" @click="openBookingModal('presidential')">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Amenities Section -->
      <section id="amenities" class="amenities-section section-padding bg-light">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <span class="section-badge">Amenities</span>
            <h2 class="section-title">World-Class Facilities</h2>
            <p class="section-description">
              Enjoy premium amenities designed to make your mountain retreat truly exceptional.
            </p>
          </div>

          <div class="amenities-grid">
            <div class="amenity-card" data-aos="fade-up" data-aos-delay="200">
              <div class="amenity-icon">
                <i class="fas fa-mountain"></i>
              </div>
              <h3 class="amenity-title">Mountain Views</h3>
              <p class="amenity-description">Panoramic views of majestic mountain ranges from every room.</p>
            </div>

            <div class="amenity-card" data-aos="fade-up" data-aos-delay="300">
              <div class="amenity-icon">
                <i class="fas fa-spa"></i>
              </div>
              <h3 class="amenity-title">Spa & Wellness</h3>
              <p class="amenity-description">Rejuvenate with our premium spa and wellness facilities.</p>
            </div>

            <div class="amenity-card" data-aos="fade-up" data-aos-delay="400">
              <div class="amenity-icon">
                <i class="fas fa-utensils"></i>
              </div>
              <h3 class="amenity-title">Fine Dining</h3>
              <p class="amenity-description">Experience gourmet cuisine with local and international flavors.</p>
            </div>

            <div class="amenity-card" data-aos="fade-up" data-aos-delay="500">
              <div class="amenity-icon">
                <i class="fas fa-wifi"></i>
              </div>
              <h3 class="amenity-title">High-Speed WiFi</h3>
              <p class="amenity-description">Stay connected with complimentary high-speed internet access.</p>
            </div>

            <div class="amenity-card" data-aos="fade-up" data-aos-delay="600">
              <div class="amenity-icon">
                <i class="fas fa-car"></i>
              </div>
              <h3 class="amenity-title">Parking</h3>
              <p class="amenity-description">Secure parking available for all guests with valet service.</p>
            </div>

            <div class="amenity-card" data-aos="fade-up" data-aos-delay="700">
              <div class="amenity-icon">
                <i class="fas fa-concierge-bell"></i>
              </div>
              <h3 class="amenity-title">24/7 Concierge</h3>
              <p class="amenity-description">Round-the-clock concierge service for all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="gallery-section section-padding">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <span class="section-badge">Gallery</span>
            <h2 class="section-title">Picture Perfect Moments</h2>
            <p class="section-description">
              Explore our stunning accommodations and breathtaking surroundings through our gallery.
            </p>
          </div>

          <div class="gallery-grid" data-aos="fade-up" data-aos-delay="300">
            <div class="gallery-item" @click="openLightbox(0)">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80" 
                alt="Luxury mountain apartment interior"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>

            <div class="gallery-item" @click="openLightbox(1)">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80" 
                alt="Mountain view from apartment"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>

            <div class="gallery-item" @click="openLightbox(2)">
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&q=80" 
                alt="Premium suite bedroom"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>

            <div class="gallery-item" @click="openLightbox(3)">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&q=80" 
                alt="Hotel exterior with mountain backdrop"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>

            <div class="gallery-item" @click="openLightbox(4)">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop&q=80" 
                alt="Dining area with mountain view"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>

            <div class="gallery-item" @click="openLightbox(5)">
              <img 
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop&q=80" 
                alt="Spa and wellness center"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Booking Section -->
      <section id="booking" class="booking-section section-padding bg-primary">
        <div class="container">
          <div class="section-header text-white" data-aos="fade-up">
            <span class="section-badge section-badge-white">Reservation</span>
            <h2 class="section-title text-white">Book Your Mountain Escape</h2>
            <p class="section-description text-white">
              Reserve your luxury apartment and experience the best of mountain hospitality.
            </p>
          </div>

          <div class="booking-content">
            <div class="booking-form-container" data-aos="fade-up" data-aos-delay="300">
              <form class="booking-form" @submit.prevent="submitBooking">
                <div class="form-grid">
                  <!-- Guest Information -->
                  <div class="form-group">
                    <label for="guest-name" class="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      id="guest-name"
                      v-model="bookingForm.name"
                      class="form-input" 
                      placeholder="Enter your full name"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label for="guest-email" class="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      id="guest-email"
                      v-model="bookingForm.email"
                      class="form-input" 
                      placeholder="Enter your email"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label for="guest-phone" class="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="guest-phone"
                      v-model="bookingForm.phone"
                      class="form-input" 
                      placeholder="Enter your phone number"
                      required
                    >
                  </div>

                  <!-- Booking Details -->
                  <div class="form-group">
                    <label for="room-type" class="form-label">Room Type *</label>
                    <select 
                      id="room-type"
                      v-model="bookingForm.roomType"
                      class="form-select"
                      required
                    >
                      <option value="">Select room type</option>
                      <option value="deluxe">Deluxe Mountain View - PKR 8,000/night</option>
                      <option value="family">Family Suite - PKR 12,000/night</option>
                      <option value="presidential">Presidential Suite - PKR 18,000/night</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="checkin-date" class="form-label">Check-in Date *</label>
                    <input 
                      type="date" 
                      id="checkin-date"
                      v-model="bookingForm.checkinDate"
                      class="form-input"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label for="checkout-date" class="form-label">Check-out Date *</label>
                    <input 
                      type="date" 
                      id="checkout-date"
                      v-model="bookingForm.checkoutDate"
                      class="form-input"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label for="guests" class="form-label">Number of Guests *</label>
                    <select 
                      id="guests"
                      v-model="bookingForm.guests"
                      class="form-select"
                      required
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </div>

                  <!-- Special Requests -->
                  <div class="form-group form-group-full">
                    <label for="special-requests" class="form-label">Special Requests</label>
                    <textarea 
                      id="special-requests"
                      v-model="bookingForm.specialRequests"
                      class="form-textarea" 
                      placeholder="Any special requests or requirements?"
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <!-- Booking Summary -->
                <div class="booking-summary" v-if="bookingForm.roomType && bookingForm.checkinDate && bookingForm.checkoutDate">
                  <h3 class="summary-title">Booking Summary</h3>
                  <div class="summary-item">
                    <span>Room Type:</span>
                    <span>{{ getRoomTypeName(bookingForm.roomType) }}</span>
                  </div>
                  <div class="summary-item">
                    <span>Duration:</span>
                    <span>{{ calculateNights() }} nights</span>
                  </div>
                  <div class="summary-item">
                    <span>Guests:</span>
                    <span>{{ bookingForm.guests }} {{ bookingForm.guests == 1 ? 'guest' : 'guests' }}</span>
                  </div>
                  <div class="summary-item summary-total">
                    <span>Total Cost:</span>
                    <span>PKR {{ calculateTotalCost().toLocaleString() }}</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="btn btn-secondary btn-large"
                  :disabled="isSubmitting"
                >
                  <i class="fas fa-calendar-check"></i>
                  <span v-if="!isSubmitting">Confirm Booking</span>
                  <span v-else>Processing...</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <span class="logo-icon">🏔️</span>
              <span class="logo-text">HK Heights</span>
            </div>
            <p class="footer-description">
              Experience luxury mountain living at its finest. Your perfect hill station getaway awaits.
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook" class="social-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="WhatsApp" class="social-link">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Apartments</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Contact Info</h3>
            <ul class="contact-info">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>Hill Station Road, Pakistan</span>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <span>+92 300 123 4567</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>info@hkheights.com</span>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Newsletter</h3>
            <p class="newsletter-text">Subscribe for exclusive offers and updates</p>
            <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
              <input 
                type="email" 
                placeholder="Your email address"
                v-model="newsletterEmail"
                required
              >
              <button type="submit">
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 HK Heights. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Lightbox Modal -->
    <div 
      class="lightbox-overlay" 
      :class="{ active: lightboxOpen }"
      @click="closeLightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div class="lightbox-content" @click.stop>
        <button 
          class="lightbox-close" 
          @click="closeLightbox"
          aria-label="Close lightbox"
        >
          <i class="fas fa-times"></i>
        </button>
        
        <button 
          class="lightbox-nav lightbox-prev" 
          @click="prevImage"
          aria-label="Previous image"
          v-if="galleryImages.length > 1"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <img 
          :src="currentLightboxImage" 
          :alt="galleryImages[currentImageIndex]?.alt || 'Gallery image'"
          class="lightbox-image"
        >
        
        <button 
          class="lightbox-nav lightbox-next" 
          @click="nextImage"
          aria-label="Next image"
          v-if="galleryImages.length > 1"
        >
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="lightbox-counter" v-if="galleryImages.length > 1">
          {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div 
      class="modal-overlay" 
      :class="{ active: showSuccessModal }"
      @click="closeSuccessModal"
      role="dialog"
      aria-modal="true"
      aria-label="Booking confirmation"
    >
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <i class="fas fa-check-circle"></i>
          <h3>Booking Confirmed!</h3>
        </div>
        <div class="modal-body">
          <p>Thank you for choosing HK Heights! Your booking request has been submitted successfully.</p>
          <p>We will contact you shortly to confirm your reservation.</p>
        </div>
        <button class="btn btn-primary" @click="closeSuccessModal">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'

// State
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const showSuccessModal = ref(false)
const isSubmitting = ref(false)
const newsletterEmail = ref('')

// Booking form
const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  roomType: '',
  checkinDate: '',
  checkoutDate: '',
  guests: '',
  specialRequests: ''
})

// Gallery images
const galleryImages = ref([
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80',
    alt: 'Luxury mountain apartment interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=80',
    alt: 'Mountain view from apartment'
  },
  {
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop&q=80',
    alt: 'Premium suite bedroom'
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=80',
    alt: 'Hotel exterior with mountain backdrop'
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop&q=80',
    alt: 'Dining area with mountain view'
  },
  {
    src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=80',
    alt: 'Spa and wellness center'
  }
])

// Computed
const currentLightboxImage = computed(() => {
  return galleryImages.value[currentImageIndex.value]?.src || ''
})

// Room prices
const roomPrices = {
  deluxe: 8000,
  family: 12000,
  presidential: 18000
}

// Methods
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleMobileNavClick = (sectionId) => {
  scrollToSection(sectionId)
  mobileMenuOpen.value = false
}

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? galleryImages.value.length - 1 
    : currentImageIndex.value - 1
}

const openBookingModal = (roomType) => {
  bookingForm.value.roomType = roomType
  scrollToSection('booking')
}

const getRoomTypeName = (roomType) => {
  const names = {
    deluxe: 'Deluxe Mountain View',
    family: 'Family Suite',
    presidential: 'Presidential Suite'
  }
  return names[roomType] || roomType
}

const calculateNights = () => {
  if (!bookingForm.value.checkinDate || !bookingForm.value.checkoutDate) return 0
  
  const checkin = new Date(bookingForm.value.checkinDate)
  const checkout = new Date(bookingForm.value.checkoutDate)
  const diffTime = Math.abs(checkout - checkin)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays
}

const calculateTotalCost = () => {
  const nights = calculateNights()
  const pricePerNight = roomPrices[bookingForm.value.roomType] || 0
  return nights * pricePerNight
}

const submitBooking = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  bookingForm.value = {
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkinDate: '',
    checkoutDate: '',
    guests: '',
    specialRequests: ''
  }
  
  isSubmitting.value = false
  showSuccessModal.value = true
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}

const subscribeNewsletter = async () => {
  if (newsletterEmail.value) {
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    newsletterEmail.value = ''
    // Could show a toast notification here
  }
}

// Lifecycle
onMounted(() => {
  // Scroll handler for navbar
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Keyboard navigation for lightbox
  const handleKeydown = (e) => {
    if (lightboxOpen.value) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    if (e.key === 'Escape' && mobileMenuOpen.value) {
      mobileMenuOpen.value = false
    }
  }
  
  window.addEventListener('keydown', handleKeydown)
  
  // AOS-like animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate')
      }
    })
  }, observerOptions)
  
  // Observe elements with data-aos attributes
  nextTick(() => {
    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el)
    })
  })
  
  // Set minimum date for booking
  const today = new Date().toISOString().split('T')[0]
  const checkinInput = document.getElementById('checkin-date')
  const checkoutInput = document.getElementById('checkout-date')
  
  if (checkinInput) checkinInput.min = today
  if (checkoutInput) checkoutInput.min = today
  
  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeydown)
    observer.disconnect()
  }
})
</script>
