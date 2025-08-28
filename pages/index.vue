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

          <!-- Apartment Carousel Container -->
          <div class="apartment-carousel-container">
            <!-- Scroll Navigation Buttons -->
            <button 
              v-if="apartments && apartments.length > 2 && canScrollLeft"
              class="scroll-button scroll-left"
              @click="scrollLeft"
              aria-label="Scroll left"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            
            <button 
              v-if="apartments && apartments.length > 2 && canScrollRight"
              class="scroll-button scroll-right"
              @click="scrollRight"
              aria-label="Scroll right"
            >
              <i class="fas fa-chevron-right"></i>
            </button>

            <div 
              ref="apartmentsContainer"
              class="apartments-scroll-container"
              :class="{ 'scrollable': apartments && apartments.length > 2 }"
              @scroll="updateScrollButtons"
            >
              <!-- Loading State -->
              <div v-if="apartmentsLoading" class="loading-grid">
                <div class="apartment-card-skeleton" v-for="n in 3" :key="n">
                  <div class="skeleton-image"></div>
                  <div class="skeleton-content">
                    <div class="skeleton-title"></div>
                    <div class="skeleton-description"></div>
                    <div class="skeleton-features"></div>
                    <div class="skeleton-footer"></div>
                  </div>
                </div>
              </div>

              <!-- Error State -->
              <div v-else-if="apartmentsError" class="error-state">
                <div class="error-card">
                  <i class="fas fa-exclamation-triangle"></i>
                  <h3>Unable to Load Apartments</h3>
                  <p>{{ apartmentsError }}</p>
                  <button class="btn btn-primary" @click="fetchApartments">
                    <i class="fas fa-redo"></i>
                    Try Again
                  </button>
                </div>
              </div>

              <!-- Success State with Apartments -->
              <div v-else-if="activeApartments && activeApartments.length > 0" class="apartments-grid">
                <div 
                  v-for="(apartment, index) in activeApartments" 
                  :key="`apartment-${apartment.id}`"
                  class="apartment-card"
                  @click="openApartmentModal(apartment)"
                  role="button"
                  tabindex="0"
                  @keydown.enter="openApartmentModal(apartment)"
                  @keydown.space="openApartmentModal(apartment)"
                >
                  <div class="apartment-image">
                    <img 
                      :src="getApartmentMainImage(apartment)" 
                      :alt="`${apartment.name} - ${apartment.description}`"
                      loading="lazy"
                      @error="handleImageError"
                    >
                    <div v-if="index === 0" class="apartment-badge">Most Popular</div>
                    <div v-else-if="Number(apartment.pricePerNight) > 15000" class="apartment-badge">Premium</div>
                  </div>
                  <div class="apartment-content">
                    <h3 class="apartment-title">{{ apartment.name }}</h3>
                    <p class="apartment-description">
                      {{ apartment.description || 'Luxurious apartment with modern amenities and stunning views.' }}
                    </p>
                    <ul class="apartment-features">
                      <li><i class="fas fa-bed"></i> {{ apartment.bedrooms }} {{ apartment.bedrooms === 1 ? 'Bedroom' : 'Bedrooms' }}</li>
                      <li><i class="fas fa-bath"></i> {{ apartment.bathrooms }} {{ apartment.bathrooms === 1 ? 'Bathroom' : 'Bathrooms' }}</li>
                      <li><i class="fas fa-users"></i> Up to {{ apartment.maxGuests }} Guests</li>
                      <li v-if="apartment.amenities && apartment.amenities.length > 0">
                        <i :class="getFirstAmenityIcon(apartment)"></i> 
                        {{ getFirstAmenityName(apartment) }}
                        <span v-if="apartment.amenities.length > 1" class="amenity-count">
                          +{{ apartment.amenities.length - 1 }} more
                        </span>
                      </li>
                    </ul>
                    <div class="apartment-footer">
                      <span class="apartment-price">From PKR {{ formatPrice(apartment.pricePerNight) }}/night</span>
                      <button 
                        class="btn btn-outline" 
                        @click.stop="openBookingModal(apartment)"
                        @keydown.stop
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty State -->
              <div v-else class="empty-state">
                <div class="empty-card">
                  <i class="fas fa-home"></i>
                  <h3>No Apartments Available</h3>
                  <p>Check back later for available apartments.</p>
                </div>
              </div>
            </div>

            <!-- Scroll Indicators -->
            <div v-if="apartments && apartments.length > 2" class="scroll-indicators">
              <div 
                v-for="(page, index) in Math.ceil(apartments.length / 2)" 
                :key="`indicator-${index}`"
                class="scroll-indicator"
                :class="{ active: currentPage === index }"
                @click="scrollToPage(index)"
              ></div>
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
                    <label for="room-type" class="form-label">Apartment Type *</label>
                    <select 
                      id="room-type"
                      v-model="bookingForm.apartmentId"
                      class="form-select"
                      required
                    >
                      <option value="">Select apartment type</option>
                      <option 
                        v-for="apartment in apartments" 
                        :key="apartment.id"
                        :value="apartment.id"
                      >
                        {{ apartment.name }} - PKR {{ formatPrice(apartment.pricePerNight) }}/night
                      </option>
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
                      <option 
                        v-for="n in getMaxGuestsOptions()" 
                        :key="n" 
                        :value="n"
                      >
                        {{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}
                      </option>
                    </select>
                    <small v-if="selectedApartment" class="form-help">
                      Maximum {{ selectedApartment.maxGuests }} guests for {{ selectedApartment.name }}
                    </small>
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
                <div class="booking-summary" v-if="selectedApartment && bookingForm.checkinDate && bookingForm.checkoutDate">
                  <h3 class="summary-title">Booking Summary</h3>
                  <div class="summary-item">
                    <span>Apartment:</span>
                    <span>{{ selectedApartment.name }}</span>
                  </div>
                  <div class="summary-item">
                    <span>Duration:</span>
                    <span>{{ calculateNights() }} nights</span>
                  </div>
                  <div class="summary-item">
                    <span>Guests:</span>
                    <span>{{ bookingForm.guests }} {{ bookingForm.guests == 1 ? 'guest' : 'guests' }}</span>
                  </div>
                  <div class="summary-item">
                    <span>Price per night:</span>
                    <span>PKR {{ formatPrice(selectedApartment.pricePerNight) }}</span>
                  </div>
                  <div class="summary-item summary-total">
                    <span>Total Cost:</span>
                    <span>PKR {{ formatPrice(calculateTotalCost()) }}</span>
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

    <!-- Apartment Details Modal -->
    <div 
      class="apartment-modal-overlay" 
      :class="{ active: showApartmentModal }"
      @click="closeApartmentModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apartment-modal-title"
    >
      <div class="apartment-modal-content" @click.stop>
        <!-- Modal Header -->
        <div class="apartment-modal-header">
          <button 
            class="apartment-modal-close" 
            @click="closeApartmentModal"
            aria-label="Close apartment details"
          >
            <i class="fas fa-times"></i>
          </button>
          
          <div class="apartment-modal-nav" v-if="apartments.length > 1">
            <button 
              class="modal-nav-btn modal-prev" 
              @click="prevApartment"
              :disabled="currentApartmentIndex === 0"
              aria-label="Previous apartment"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <span class="modal-counter">
              {{ currentApartmentIndex + 1 }} / {{ apartments.length }}
            </span>
            <button 
              class="modal-nav-btn modal-next" 
              @click="nextApartment"
              :disabled="currentApartmentIndex === apartments.length - 1"
              aria-label="Next apartment"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="apartment-modal-body" v-if="selectedModalApartment">
          <!-- Image Gallery Section -->
          <div class="apartment-modal-gallery">
            <div class="main-image-container">
              <!-- Loading Spinner -->
              <div class="image-loading" v-if="modalImageLoading">
                <div class="loading-spinner"></div>
              </div>
              
              <img 
                :src="currentModalImage" 
                :alt="`${selectedModalApartment.name} - Image ${currentModalImageIndex + 1}`"
                class="main-modal-image"
                :class="{ loading: modalImageLoading }"
                @error="handleModalImageError"
                @load="handleModalImageLoad"
                @loadstart="modalImageLoading = true"
              >
              
              <!-- Image Navigation - Only show if there are multiple images -->
              <div class="image-nav" v-if="getApartmentImages(selectedModalApartment).length > 1">
                <button 
                  class="image-nav-btn image-prev" 
                  @click="prevModalImage"
                  :disabled="currentModalImageIndex === 0"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button 
                  class="image-nav-btn image-next" 
                  @click="nextModalImage"
                  :disabled="currentModalImageIndex === getApartmentImages(selectedModalApartment).length - 1"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <!-- Image Indicators - Only show if there are multiple images -->
              <div class="image-indicators" v-if="getApartmentImages(selectedModalApartment).length > 1">
                <button
                  v-for="(image, index) in getApartmentImages(selectedModalApartment)"
                  :key="index"
                  class="image-indicator"
                  :class="{ active: index === currentModalImageIndex }"
                  @click="modalImageLoading = true; currentModalImageIndex = index"
                  :aria-label="`View image ${index + 1}`"
                ></button>
              </div>

              <!-- No Images Placeholder -->
              <div class="no-images-placeholder" v-if="getApartmentImages(selectedModalApartment).length === 0">
                <div class="placeholder-content">
                  <i class="fas fa-image"></i>
                  <p>Gallery images coming soon</p>
                </div>
              </div>
            </div>

            <!-- Thumbnail Gallery - Only show if there are multiple images -->
            <div class="thumbnail-gallery" v-if="getApartmentImages(selectedModalApartment).length > 1">
              <button
                v-for="(image, index) in getApartmentImages(selectedModalApartment)"
                :key="index"
                class="thumbnail-btn"
                :class="{ active: index === currentModalImageIndex }"
                @click="modalImageLoading = true; currentModalImageIndex = index"
              >
                <img 
                  :src="image" 
                  :alt="`Thumbnail ${index + 1}`"
                  @error="handleThumbnailError"
                  loading="lazy"
                >
              </button>
            </div>
          </div>

          <!-- Apartment Details Section -->
          <div class="apartment-modal-details">
            <div class="apartment-modal-info">
              <!-- Title and Badge -->
              <div class="modal-title-section">
                <div class="modal-badges">
                  <span v-if="currentApartmentIndex === 0" class="modal-badge popular">Most Popular</span>
                  <span v-else-if="Number(selectedModalApartment.pricePerNight) > 15000" class="modal-badge premium">Premium</span>
                  <span class="modal-badge availability">Available</span>
                </div>
                <h2 id="apartment-modal-title" class="modal-title">{{ selectedModalApartment.name }}</h2>
                <p class="modal-location" v-if="selectedModalApartment.property">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ selectedModalApartment.property.name || 'HK Heights Premium Location' }}
                </p>
              </div>

              <!-- Description -->
              <div class="modal-description">
                <h3>About This Apartment</h3>
                <p>{{ selectedModalApartment.description || 'Experience luxury mountain living in this beautifully appointed apartment featuring modern amenities, stunning views, and premium comfort for an unforgettable stay.' }}</p>
              </div>

              <!-- Key Features -->
              <div class="modal-features">
                <h3>Key Features</h3>
                <div class="features-grid">
                  <div class="feature-item">
                    <i class="fas fa-bed"></i>
                    <div>
                      <span class="feature-label">Bedrooms</span>
                      <span class="feature-value">{{ selectedModalApartment.bedrooms }}</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-bath"></i>
                    <div>
                      <span class="feature-label">Bathrooms</span>
                      <span class="feature-value">{{ selectedModalApartment.bathrooms }}</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-users"></i>
                    <div>
                      <span class="feature-label">Max Guests</span>
                      <span class="feature-value">{{ selectedModalApartment.maxGuests }}</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-home"></i>
                    <div>
                      <span class="feature-label">Area</span>
                      <span class="feature-value">{{ selectedModalApartment.area || '850' }} sq ft</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Amenities -->
              <div class="modal-amenities" v-if="selectedModalApartment.amenities && selectedModalApartment.amenities.length > 0">
                <h3>Amenities & Services</h3>
                <div class="amenities-grid">
                  <div 
                    v-for="amenityItem in selectedModalApartment.amenities" 
                    :key="amenityItem.id"
                    class="amenity-item"
                  >
                    <i :class="getAmenityIcon(amenityItem.amenity)"></i>
                    <span>{{ amenityItem.amenity.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Pricing Section -->
              <div class="modal-pricing">
                <div class="price-info">
                  <div class="main-price">
                    <span class="price-amount">PKR {{ formatPrice(selectedModalApartment.pricePerNight) }}</span>
                    <span class="price-period">per night</span>
                  </div>
                  <div class="price-details">
                    <small>Taxes and fees included</small>
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="modal-actions">
                  <button 
                    class="btn btn-primary btn-large modal-book-btn"
                    @click="bookFromModal"
                  >
                    <i class="fas fa-calendar-check"></i>
                    <span>Book This Apartment</span>
                  </button>
                  <button 
                    class="btn btn-outline btn-large modal-contact-btn"
                    @click="contactAboutApartment"
                  >
                    <i class="fas fa-phone"></i>
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="modal-additional-info">
                <div class="info-grid">
                  <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                      <strong>Check-in:</strong> 3:00 PM
                    </div>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                      <strong>Check-out:</strong> 11:00 AM
                    </div>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-ban-smoking"></i>
                    <div>
                      <strong>Non-smoking</strong> apartment
                    </div>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-wifi"></i>
                    <div>
                      <strong>Free WiFi</strong> included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import { ref, onMounted, computed, nextTick, watch } from 'vue'

// Add FontAwesome icons
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
      crossorigin: 'anonymous'
    }
  ]
})

// State
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const showSuccessModal = ref(false)
const isSubmitting = ref(false)
const newsletterEmail = ref('')

// Apartment Modal State
const showApartmentModal = ref(false)
const selectedModalApartment = ref(null)
const currentApartmentIndex = ref(0)
const currentModalImageIndex = ref(0)
const modalImageLoading = ref(false)

// Apartments data
const apartments = ref([])
const apartmentsLoading = ref(true)
const apartmentsError = ref(null)

// Only show active apartments
const activeApartments = computed(() => apartments.value.filter(a => a.isActive))

// Horizontal scroll functionality
const apartmentsContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const currentPage = ref(0)

// Booking form
const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  apartmentId: '',
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

const selectedApartment = computed(() => {
  return apartments.value.find(apt => apt.id === parseInt(bookingForm.value.apartmentId))
})

const currentModalImage = computed(() => {
  if (!selectedModalApartment.value) return ''
  const images = getApartmentImages(selectedModalApartment.value)
  
  // If no images in database, use the main image fallback
  if (images.length === 0) {
    return getApartmentMainImage(selectedModalApartment.value)
  }
  
  return images[currentModalImageIndex.value] || images[0]
})

const apartmentGridStyles = computed(() => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    margcinTop: '3rem'
  }
})

// Apartment helper methods
const fetchApartments = async () => {
  try {
    apartmentsLoading.value = true
    apartmentsError.value = null
    
    console.log('🔍 Fetching apartments from database...')
    const response = await $fetch('/api/apartments')
    
    if (response?.success) {
      apartments.value = response.apartments || []
      console.log(`✅ Loaded ${apartments.value.length} apartments`)
    } else {
      throw new Error(response?.error || 'Failed to fetch apartments')
    }
  } catch (error) {
    console.error('❌ Error fetching apartments:', error)
    apartmentsError.value = error.message || 'Failed to load apartments'
    apartments.value = []
  } finally {
    apartmentsLoading.value = false
  }
}

// Horizontal scroll methods
const scrollLeft = () => {
  const container = apartmentsContainer.value
  if (!container) return
  
  const cardWidth = container.querySelector('.apartment-card')?.offsetWidth || 0
  const gap = 32 // 2rem gap
  const scrollAmount = (cardWidth + gap) * 2 // Scroll by 2 cards
  
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  const container = apartmentsContainer.value
  if (!container) return
  
  const cardWidth = container.querySelector('.apartment-card')?.offsetWidth || 0
  const gap = 32 // 2rem gap
  const scrollAmount = (cardWidth + gap) * 2 // Scroll by 2 cards
  
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
}

const scrollToPage = (pageIndex) => {
  const container = apartmentsContainer.value
  if (!container) return
  
  const cardWidth = container.querySelector('.apartment-card')?.offsetWidth || 0
  const gap = 32 // 2rem gap
  const scrollAmount = (cardWidth + gap) * 2 * pageIndex
  
  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  })
  
  currentPage.value = pageIndex
}

const updateScrollButtons = () => {
  const container = apartmentsContainer.value
  if (!container) return
  
  canScrollLeft.value = container.scrollLeft > 0
  canScrollRight.value = container.scrollLeft < (container.scrollWidth - container.clientWidth)
  
  // Update current page
  const cardWidth = container.querySelector('.apartment-card')?.offsetWidth || 0
  const gap = 32
  const pageWidth = (cardWidth + gap) * 2
  currentPage.value = Math.round(container.scrollLeft / pageWidth)
  
  // Hide/show fade gradient and arrow on mobile based on scroll position
  if (window.innerWidth <= 767) {
    const isAtEnd = container.scrollLeft >= (container.scrollWidth - container.clientWidth - 10)
    container.style.setProperty('--hide-scroll-hint', isAtEnd ? '1' : '0')
  }
}

// Watch for apartments changes to update scroll buttons
watch(apartments, () => {
  nextTick(() => {
    setTimeout(() => {
      updateScrollButtons()
    }, 100)
  })
}, { immediate: true })

const getApartmentMainImage = (apartment) => {
  // Get the main image or first image from the apartment
  const mainImage = apartment.images?.find(img => img.isMain)
  const firstImage = apartment.images?.[0]
  const defaultImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80'
  
  return mainImage?.imageUrl || firstImage?.imageUrl || defaultImage
}

const getFirstAmenityIcon = (apartment) => {
  const firstAmenity = apartment.amenities?.[0]?.amenity
  if (firstAmenity?.icon) {
    // Map database icon names to Font Awesome classes
    const iconMap = {
      'wifi': 'fas fa-wifi',
      'mountain': 'fas fa-mountain',
      'balcony': 'fas fa-city',
      'kitchen': 'fas fa-utensils',
      'tv': 'fas fa-tv',
      'ac': 'fas fa-snowflake',
      'heating': 'fas fa-fire',
      'parking': 'fas fa-car',
      'spa': 'fas fa-spa',
      'restaurant': 'fas fa-utensils'
    }
    return iconMap[firstAmenity.icon] || 'fas fa-star'
  }
  // Default icons based on common amenity names
  return 'fas fa-star'
}

const getFirstAmenityName = (apartment) => {
  const firstAmenity = apartment.amenities?.[0]?.amenity
  return firstAmenity?.name || 'Premium Amenities'
}

const getApartmentImages = (apartment) => {
  if (!apartment || !apartment.images || apartment.images.length === 0) {
    // Return empty array if no images in database - we'll handle this in the template
    return []
  }
  
  // Filter out any images with empty or null URLs and sort by sortOrder
  return apartment.images
    .filter(img => img.imageUrl && img.imageUrl.trim() !== '')
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    .map(img => img.imageUrl)
}

const getAmenityIcon = (amenity) => {
  if (!amenity || !amenity.icon) return 'fas fa-star'
  
  const iconMap = {
    'wifi': 'fas fa-wifi',
    'mountain': 'fas fa-mountain',
    'balcony': 'fas fa-city',
    'kitchen': 'fas fa-utensils',
    'tv': 'fas fa-tv',
    'ac': 'fas fa-snowflake',
    'heating': 'fas fa-fire',
    'parking': 'fas fa-car',
    'spa': 'fas fa-spa',
    'restaurant': 'fas fa-utensils',
    'pool': 'fas fa-swimming-pool',
    'gym': 'fas fa-dumbbell',
    'laundry': 'fas fa-tshirt',
    'room-service': 'fas fa-concierge-bell',
    'safe': 'fas fa-lock',
    'minibar': 'fas fa-cocktail'
  }
  
  return iconMap[amenity.icon] || 'fas fa-star'
}

const formatPrice = (price) => {
  try {
    return Number(price).toLocaleString()
  } catch (error) {
    console.error('Error formatting price:', price, error)
    return price?.toString() || '0'
  }
}

const handleImageError = (event) => {
  // Fallback to a default image if apartment image fails to load
  event.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80'
}

const getMaxGuestsOptions = () => {
  if (selectedApartment.value) {
    return Array.from({ length: selectedApartment.value.maxGuests }, (_, i) => i + 1)
  }
  return [1, 2, 3, 4, 5, 6] // Default fallback
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

const openBookingModal = (apartment) => {
  if (typeof apartment === 'object') {
    // Called with apartment object from apartment card
    bookingForm.value.apartmentId = apartment.id.toString()
  } else {
    // Called with apartment object directly
    bookingForm.value.apartmentId = apartment.toString()
  }
  scrollToSection('booking')
}

// Apartment Modal Methods
const openApartmentModal = (apartment) => {
  selectedModalApartment.value = apartment
  currentApartmentIndex.value = apartments.value.findIndex(apt => apt.id === apartment.id)
  currentModalImageIndex.value = 0
  showApartmentModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeApartmentModal = () => {
  showApartmentModal.value = false
  selectedModalApartment.value = null
  currentModalImageIndex.value = 0
  document.body.style.overflow = 'auto'
}

const nextApartment = () => {
  if (currentApartmentIndex.value < activeApartments.value.length - 1) {
    currentApartmentIndex.value++
    selectedModalApartment.value = activeApartments.value[currentApartmentIndex.value]
    currentModalImageIndex.value = 0
  }
}

const prevApartment = () => {
  if (currentApartmentIndex.value > 0) {
    currentApartmentIndex.value--
    selectedModalApartment.value = activeApartments.value[currentApartmentIndex.value]
    currentModalImageIndex.value = 0
  }
}

const nextModalImage = () => {
  const images = getApartmentImages(selectedModalApartment.value)
  if (currentModalImageIndex.value < images.length - 1) {
    modalImageLoading.value = true
    currentModalImageIndex.value++
  }
}

const prevModalImage = () => {
  if (currentModalImageIndex.value > 0) {
    modalImageLoading.value = true
    currentModalImageIndex.value--
  }
}

const bookFromModal = () => {
  if (selectedModalApartment.value) {
    bookingForm.value.apartmentId = selectedModalApartment.value.id.toString()
    closeApartmentModal()
    scrollToSection('booking')
  }
}

const contactAboutApartment = () => {
  // Could open a contact modal or redirect to contact form
  // For now, we'll scroll to booking section
  closeApartmentModal()
  scrollToSection('booking')
}

// Image Error Handling for Modal
const handleModalImageError = (event) => {
  // Set fallback image for main modal image
  event.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80'
  modalImageLoading.value = false
}

const handleModalImageLoad = (event) => {
  // Hide loading spinner when image loads
  modalImageLoading.value = false
}

const handleThumbnailError = (event) => {
  // Hide broken thumbnail
  event.target.parentElement.style.display = 'none'
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
  const apartment = selectedApartment.value
  if (!apartment) return 0
  
  const pricePerNight = Number(apartment.pricePerNight)
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
    apartmentId: '',
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
  // Fetch apartments data using mock endpoint
  fetchApartments()
  
  // Initialize scroll buttons after apartments load
  nextTick(() => {
    setTimeout(() => {
      updateScrollButtons()
    }, 100)
  })
  
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
    if (showApartmentModal.value) {
      if (e.key === 'Escape') closeApartmentModal()
      if (e.key === 'ArrowLeft' && e.shiftKey) prevApartment()
      if (e.key === 'ArrowRight' && e.shiftKey) nextApartment()
      if (e.key === 'ArrowLeft' && !e.shiftKey) prevModalImage()
      if (e.key === 'ArrowRight' && !e.shiftKey) nextModalImage()
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

<style scoped>
/* RESPONSIVE SYSTEM - Standardized Breakpoints */
/* 
  - Mobile Portrait: 0 - 480px
  - Mobile Landscape: 481px - 767px  
  - Tablet: 768px - 1024px
  - Desktop: 1025px - 1199px
  - Large Desktop: 1200px+
*/

/* RESET AND BASE STYLES */
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* APARTMENT CAROUSEL STYLES */
.apartment-carousel-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.apartments-scroll-container {
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  padding-bottom: 1rem;
}

.apartments-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.apartments-grid {
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
  align-items: stretch;
}

/* Default: Show 2 cards with proper sizing */
.apartment-card {
  flex: 0 0 calc((100% - 2rem) / 2); /* 2 cards with 2rem gap */
  min-width: 300px;
  max-width: 480px;
  min-height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}

/* When scrollable, allow horizontal overflow */
.apartments-scroll-container.scrollable .apartments-grid {
  width: max-content;
}

.apartments-scroll-container.scrollable .apartment-card {
  flex: 0 0 450px; /* Fixed width for horizontal scroll - larger for 2-card layout */
}

/* Scroll Navigation Buttons */
.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(139, 69, 19, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.scroll-button:hover {
  background: #8B4513;
  color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(139, 69, 19, 0.3);
}

.scroll-left {
  left: -24px;
}

.scroll-right {
  right: -24px;
}

.scroll-button i {
  font-size: 16px;
}

/* Scroll Indicators */
.scroll-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
}

.scroll-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(139, 69, 19, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-indicator.active {
  background: #8B4513;
  transform: scale(1.2);
}

.scroll-indicator:hover {
  background: #8B4513;
  transform: scale(1.1);
}

/* RESPONSIVE STYLES - STANDARDIZED */

/* Large Desktop (1200px+) */
@media (min-width: 1200px) {
  .apartment-card {
    flex: 0 0 calc((100% - 2rem) / 2); /* 2 cards */
    max-width: 480px;
    min-height: 520px;
  }
  
  .apartments-scroll-container.scrollable .apartment-card {
    flex: 0 0 450px;
  }
  
  .apartment-carousel-container {
    max-width: 1200px;
    padding: 0;
  }
  
  .scroll-button {
    width: 48px;
    height: 48px;
  }
}

/* Desktop (1025px - 1199px) */
@media (min-width: 1025px) and (max-width: 1199px) {
  .apartment-card {
    flex: 0 0 calc((100% - 2rem) / 2); /* 2 cards */
    max-width: 450px;
    min-height: 500px;
  }
  
  .apartments-scroll-container.scrollable .apartment-card {
    flex: 0 0 420px;
  }
  
  .apartment-carousel-container {
    max-width: 1000px;
    padding: 0 1rem;
  }
}

/* Tablet (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .apartment-carousel-container {
    max-width: 100%;
    padding: 0 1rem;
  }
  
  .apartment-card {
    flex: 0 0 calc((100% - 2rem) / 2); /* 2 cards */
    min-width: 300px;
    max-width: 380px;
    min-height: 480px;
  }
  
  .apartments-scroll-container.scrollable .apartment-card {
    flex: 0 0 350px;
  }
  
  .scroll-button {
    width: 42px;
    height: 42px;
  }
  
  .scroll-left {
    left: -21px;
  }
  
  .scroll-right {
    right: -21px;
  }
}

/* Mobile Landscape (481px - 767px) */
@media (min-width: 481px) and (max-width: 767px) {
  .apartment-carousel-container {
    position: relative;
    padding: 0 0.5rem;
  }
  
  .apartments-scroll-container {
    position: relative;
  }
  
  .apartment-card {
    flex: 0 0 calc(90% - 0.75rem); /* Show peek of next card */
    min-width: 320px;
    max-width: none;
    min-height: 460px;
  }
  
  .apartments-scroll-container.scrollable .apartment-card {
    flex: 0 0 85%; /* Clear peek effect */
    max-width: 400px;
  }
  
  /* Fade gradient */
  .apartments-scroll-container.scrollable::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent);
    pointer-events: none;
    z-index: 5;
    opacity: calc(1 - var(--hide-scroll-hint, 0));
    transition: opacity 0.3s ease;
  }
  
  .scroll-button {
    display: none;
  }
  
  .scroll-indicators::before {
    content: 'Swipe to see more apartments';
    display: block;
    text-align: center;
    font-size: 0.875rem;
    color: #8B4513;
    margin-bottom: 1rem;
    opacity: 0.8;
  }
}

/* Mobile Portrait (0 - 480px) */
@media (max-width: 480px) {
  .apartment-carousel-container {
    padding: 0 0.5rem;
    position: relative;
  }
  
  .apartments-grid {
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  .apartment-card {
    flex: 0 0 calc(90% - 0.5rem); /* Show clear peek */
    min-width: 280px;
    min-height: 420px;
  }
  
  .apartments-scroll-container.scrollable .apartment-card {
    flex: 0 0 88%; /* Clear peek effect */
    max-width: 320px;
  }
  
  /* Enhanced fade gradient */
  .apartments-scroll-container.scrollable::after {
    width: 40px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.95), transparent);
  }
  
  /* Arrow hint */
  .apartments-scroll-container.scrollable::before {
    content: '→';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #8B4513;
    opacity: calc(0.6 * (1 - var(--hide-scroll-hint, 0)));
    z-index: 6;
    animation: pulse 2s infinite;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  
  .apartment-image {
    height: 180px;
  }
  
  .apartment-content {
    padding: 1.25rem;
  }
  
  .apartment-title {
    font-size: 1.25rem;
  }
  
  .apartment-features {
    font-size: 0.9rem;
  }
  
  .scroll-indicators {
    margin-top: 1.5rem;
  }
  
  .scroll-indicators::before {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
  
  .scroll-indicator {
    width: 10px;
    height: 10px;
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .apartments-scroll-container {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }
  
  .apartment-card {
    scroll-snap-align: start;
  }
  
  .scroll-button {
    display: none;
  }
  
  /* Enhanced scroll indicators for touch devices */
  .scroll-indicators {
    padding: 1rem 0;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    margin-top: 1.5rem;
  }
  
  .scroll-indicators::before {
    font-weight: 500;
    color: #6B4423;
  }
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Add fade-in animation to apartment cards */
.apartment-card {
  animation: fadeIn 0.6s ease-out;
}

.apartment-card:nth-child(2) {
  animation-delay: 0.1s;
}

.apartment-card:nth-child(3) {
  animation-delay: 0.2s;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .apartments-scroll-container {
    scroll-behavior: auto;
  }
  
  .scroll-button {
    transition: none;
  }
  
  .apartment-card {
    transition: none;
  }
}

/* RESPONSIVE SYSTEM - NAVBAR AND LAYOUT FIXES */

/* Fix navbar responsiveness */
@media (max-width: 767px) {
  .navbar {
    padding: 12px 0;
  }
  
  .nav-container {
    padding: 0 1rem;
  }
  
  .logo {
    font-size: 20px;
  }
  
  .logo-icon {
    font-size: 24px;
  }
  
  .mobile-menu-toggle {
    padding: 6px;
  }
  
  .hamburger-line {
    width: 22px;
    height: 2px;
  }
  
  .mobile-menu {
    padding: 1rem;
  }
  
  .mobile-nav-link {
    padding: 12px 0;
    font-size: 16px;
  }
}

/* Hero section responsive fixes */
@media (max-width: 480px) {
  .hero-title-main {
    font-size: 32px !important;
    line-height: 1.2;
  }
  
  .hero-title-sub {
    font-size: 18px !important;
  }
  
  .hero-description {
    font-size: 16px;
    padding: 0 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 0 1rem;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .hero-stats {
    gap: 20px;
    padding: 0 1rem;
  }
  
  .stat-number {
    font-size: 24px;
  }
  
  .stat-label {
    font-size: 12px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .hero-title-main {
    font-size: 40px !important;
  }
  
  .hero-title-sub {
    font-size: 20px !important;
  }
  
  .hero-actions {
    gap: 14px;
  }
  
  .hero-stats {
    gap: 30px;
  }
}

/* Section headers responsive */
@media (max-width: 480px) {
  .section-header {
    margin-bottom: 40px;
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .section-description {
    font-size: 16px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .section-title {
    font-size: 32px;
  }
}

/* Apartment content responsive fixes */
@media (max-width: 480px) {
  .apartment-content {
    padding: 1.25rem !important;
  }
  
  .apartment-title {
    font-size: 1.25rem !important;
  }
  
  .apartment-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .apartment-features {
    font-size: 0.875rem !important;
  }
  
  .apartment-features li {
    margin-bottom: 6px;
  }
  
  .apartment-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .apartment-price {
    font-size: 18px;
  }
  
  .apartment-footer .btn {
    width: 100%;
    justify-content: center;
  }
}

/* Fix overflow issues */
@media (max-width: 767px) {
  .container {
    padding: 0 1rem !important;
    max-width: 100% !important;
    overflow-x: hidden;
  }
  
  .section-padding {
    padding: 50px 0 !important;
  }
  
  /* Prevent horizontal scroll */
  body, html {
    overflow-x: hidden !important;
    max-width: 100vw !important;
  }
  
  * {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
}

/* Icon fixes - ensure all FontAwesome icons are visible */
i[class*="fa-"], 
.fas, 
.far, 
.fal, 
.fab {
  font-family: "Font Awesome 6 Free", "Font Awesome 6 Pro", "Font Awesome 6 Brands" !important;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  display: inline-block;
}

.fas {
  font-weight: 900 !important;
}

.far {
  font-weight: 400 !important;
}

.fab {
  font-weight: 400 !important;
}

/* Specific icon fixes */
.fa-times::before {
  content: "\f00d" !important;
}

.fa-chevron-left::before {
  content: "\f053" !important;
}

.fa-chevron-right::before {
  content: "\f054" !important;
}

.fa-bed::before {
  content: "\f236" !important;
}

.fa-bath::before {
  content: "\f2cd" !important;
}

.fa-users::before {
  content: "\f0c0" !important;
}

.fa-home::before {
  content: "\f015" !important;
}

.fa-building::before {
  content: "\f1ad" !important;
}

.fa-star::before {
  content: "\f005" !important;
}

.fa-images::before {
  content: "\f302" !important;
}

.fa-calendar-check::before {
  content: "\f274" !important;
}

.fa-mountain::before {
  content: "\f6fc" !important;
}

.fa-play::before {
  content: "\f04b" !important;
}

.fa-chevron-down::before {
  content: "\f078" !important;
}

.fa-exclamation-triangle::before {
  content: "\f071" !important;
}

.fa-redo::before {
  content: "\f01e" !important;
}

/* Enhanced Apartments Section Styling for Public Page */

/* Custom apartments section improvements */
.apartments-section {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.apartments-section .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Improved apartments grid for public display */
.public-apartments-grid {
  display: grid !important;
  gap: 1.5rem !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  margin-top: 3rem;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Override any global styles specifically */
.apartments-section .public-apartments-grid {
  display: grid !important;
  gap: 1.5rem !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
}

/* Apartments container styling */
.apartments-container {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  gap: 1.5rem !important;
  width: 100% !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
}

/* Enhanced apartment card for better visual appeal */
.apartment-card {
  background: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.04);
  height: auto;
  min-height: 500px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.apartment-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

/* Enhanced apartment image container */
.apartment-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  flex-shrink: 0;
}

.apartment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.apartment-card:hover .apartment-image img {
  transform: scale(1.05);
}

/* Enhanced apartment badge */
.apartment-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, var(--accent-color), #e89441);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(244, 162, 97, 0.3);
  z-index: 2;
}

/* Enhanced apartment content */
.apartment-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: auto;
  box-sizing: border-box;
}

.apartment-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
  line-height: 1.3;
}

.apartment-description {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Enhanced apartment features */
.apartment-features {
  list-style: none;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  flex-grow: 1;
  align-content: start;
}

.apartment-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
}

.apartment-features i {
  color: var(--primary-color);
  width: 18px;
  flex-shrink: 0;
  font-size: 1rem;
}

/* Enhanced apartment footer */
.apartment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: auto;
  flex-shrink: 0;
}

.apartment-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.apartment-price::before {
  content: "Starting from";
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Enhanced Book Now button */
.apartment-footer .btn-outline {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(44, 85, 48, 0.2);
}

.apartment-footer .btn-outline:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(44, 85, 48, 0.3);
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
}

/* Amenity count styling */
.amenity-count {
  font-size: 0.8rem;
  color: var(--text-light);
  font-weight: 500;
  margin-left: 0.25rem;
  padding: 0.125rem 0.5rem;
  background: rgba(44, 85, 48, 0.1);
  border-radius: 12px;
}

/* Loading state improvements */
.loading-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  gap: 1.5rem !important;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.apartment-card-skeleton {
  border-radius: 16px;
  overflow: hidden;
}

.skeleton-image {
  height: 220px;
}

/* Error and Empty states */
.error-state, .empty-state {
  grid-column: 1 / -1;
  min-height: 400px;
}

.error-card, .empty-card {
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.error-card i, .empty-card i {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.error-card h3, .empty-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Mobile Responsive Design */
@media (max-width: 480px) {
  .public-apartments-grid,
  .apartments-section .public-apartments-grid {
    gap: 1rem !important;
    margin-top: 2rem;
    grid-template-columns: 1fr !important;
  }
  
  .apartment-card {
    border-radius: 12px;
    margin: 0;
    max-width: none;
    min-height: 480px;
  }
  
  .apartment-image {
    height: 200px;
  }
  
  .apartment-content {
    padding: 1.25rem;
  }
  
  .apartment-title {
    font-size: 1.25rem;
  }
  
  .apartment-features {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .apartment-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .apartment-footer .btn-outline {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  
  .apartment-price {
    text-align: center;
    font-size: 1.1rem;
  }
  
  .apartment-badge {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.7rem;
  }
  
  .skeleton-image {
    height: 200px;
  }
  
  .error-card, .empty-card {
    padding: 2rem 1.5rem;
    margin: 0 0.5rem;
  }
}

/* Tablet Design */
@media (min-width: 481px) and (max-width: 768px) {
  .public-apartments-grid,
  .apartments-section .public-apartments-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.25rem !important;
  }
  
  .apartment-card {
    max-width: 350px;
    min-height: 500px;
  }
  
  .apartment-image {
    height: 210px;
  }
  
  .apartment-features {
    grid-template-columns: 1fr 1fr;
  }
  
  .loading-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .skeleton-image {
    height: 210px;
  }
}

/* Desktop Design */
@media (min-width: 769px) {
  .public-apartments-grid,
  .apartments-section .public-apartments-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
    gap: 1.75rem !important;
    margin-top: 3rem;
  }
  
  .apartment-card {
    max-width: 370px;
    min-height: 540px;
  }
  
  .apartment-image {
    height: 230px;
  }
  
  .apartment-content {
    padding: 1.75rem;
  }
  
  .apartment-title {
    font-size: 1.75rem;
  }
  
  .apartment-description {
    font-size: 1rem;
  }
  
  .apartment-features {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .loading-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
  }
  
  .skeleton-image {
    height: 230px;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .public-apartments-grid,
  .apartments-section .public-apartments-grid {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 2rem !important;
    max-width: 1200px;
  }
  
  .apartments-container {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 2rem !important;
  }
  
  .apartment-card {
    max-width: 380px;
    min-height: 560px;
  }
  
  .apartment-image {
    height: 240px;
  }
  
  .apartment-content {
    padding: 2rem;
  }
  .loading-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Extra Large Desktop */
@media (min-width: 1400px) {
  .apartments-section .container {
    max-width: 1400px;
    padding: 0 40px;
  }
  
  .public-apartments-grid,
  .apartments-section .public-apartments-grid {
    max-width: 1300px;
    gap: 2.5rem !important;
  }
  
  .loading-grid {
    max-width: 1300px;
    gap: 2.5rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .apartment-card {
    border: 2px solid var(--text-dark);
  }
  
  .apartment-badge {
    border: 1px solid var(--white);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .apartment-card {
    transition: none;
  }
  
  .apartment-card:hover {
    transform: none;
  }
  
  .apartment-image img {
    transition: none;
  }
  
  .apartment-card:hover .apartment-image img {
    transform: none;
  }
}

/* Dark mode support (if needed in future) */
@media (prefers-color-scheme: dark) {
  .apartment-card {
    background: #1a1a1a;
    border-color: #333;
    color: #fff;
  }
  
  .apartment-title {
    color: #fff;
  }
  
  .apartment-description {
    color: #ccc;
  }
  
  .apartment-features li {
    color: #ccc;
  }
}

/* Focus states for accessibility */
.apartment-card:focus-within {
  outline: 2px solid var(--primary-color);
  outline-offset: 4px;
}

.apartment-footer .btn-outline:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* ===== APARTMENT MODAL STYLES ===== */

.apartment-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.apartment-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.apartment-modal-content {
  background: var(--white);
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  max-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.apartment-modal-overlay.active .apartment-modal-content {
  transform: scale(1);
}

/* Modal Header */
.apartment-modal-header {
  position: relative;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  z-index: 2;
  flex-shrink: 0;
}

.apartment-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: var(--white);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
}

.apartment-modal-close:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

.apartment-modal-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.modal-nav-btn {
  background: var(--primary-color);
  color: var(--white);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-nav-btn:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: scale(1.1);
}

.modal-nav-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.5;
}

.modal-counter {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.9rem;
  min-width: 60px;
  text-align: center;
}

/* Modal Body */
.apartment-modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(95vh - 100px);
  overflow: hidden;
}

/* Gallery Section */
.apartment-modal-gallery {
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-image-container {
  flex: 1;
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.main-modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, opacity 0.3s ease;
}

.main-modal-image.loading {
  opacity: 0.7;
}

/* Image Loading Spinner */
.image-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid var(--white);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.image-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.image-nav-btn {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-dark);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.image-nav-btn:hover:not(:disabled) {
  background: var(--white);
  transform: scale(1.1);
}

.image-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.image-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.image-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.image-indicator.active,
.image-indicator:hover {
  background: var(--white);
  transform: scale(1.2);
}

.thumbnail-gallery {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  background: rgba(0, 0, 0, 0.02);
  max-height: 120px;
}

.thumbnail-btn {
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: none;
  padding: 0;
}

.thumbnail-btn.active {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.thumbnail-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Details Section */
.apartment-modal-details {
  overflow-y: auto;
  padding: 0;
  background: var(--white);
}

.apartment-modal-info {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Title Section */
.modal-title-section {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 1.5rem;
}

.modal-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.modal-badge {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.modal-badge.popular {
  background: linear-gradient(135deg, #ff6b35, #e55a2b);
  color: var(--white);
}

.modal-badge.premium {
  background: linear-gradient(135deg, #ffd700, #ffed4a);
  color: var(--text-dark);
}

.modal-badge.availability {
  background: linear-gradient(135deg, #00d4aa, #00b894);
  color: var(--white);
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.modal-location {
  color: var(--text-light);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-location i {
  color: var(--primary-color);
}

/* Description */
.modal-description h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.modal-description p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1rem;
}

/* Features Grid */
.modal-features h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(44, 85, 48, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(44, 85, 48, 0.08);
}

.feature-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
  width: 24px;
  flex-shrink: 0;
}

.feature-item div {
  display: flex;
  flex-direction: column;
}

.feature-label {
  font-size: 0.85rem;
  color: var(--text-light);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.feature-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
}

/* Amenities */
.modal-amenities h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-dark);
  font-weight: 500;
}

.amenity-item i {
  color: var(--primary-color);
  width: 18px;
  flex-shrink: 0;
}

/* Pricing Section */
.modal-pricing {
  background: linear-gradient(135deg, rgba(44, 85, 48, 0.05), rgba(44, 85, 48, 0.02));
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(44, 85, 48, 0.1);
  margin-top: auto;
}

.price-info {
  text-align: center;
  margin-bottom: 2rem;
}

.main-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-color);
}

.price-period {
  font-size: 1.1rem;
  color: var(--text-light);
  font-weight: 500;
}

.price-details {
  color: var(--text-light);
  font-size: 0.9rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.modal-book-btn,
.modal-contact-btn {
  flex: 1;
  max-width: 180px;
  padding: 1rem 1.5rem;
  font-weight: 600;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.modal-book-btn {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border: none;
  color: var(--white);
  box-shadow: 0 6px 20px rgba(44, 85, 48, 0.3);
}

.modal-book-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(44, 85, 48, 0.4);
}

.modal-contact-btn {
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.modal-contact-btn:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-2px);
}

/* Additional Info */
.modal-additional-info {
  background: rgba(0, 0, 0, 0.02);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.info-item i {
  color: var(--primary-color);
  width: 16px;
  flex-shrink: 0;
}

/* Responsive Design for Modal */
/* MODAL RESPONSIVE FIXES */
@media (max-width: 1024px) {
  .apartment-modal-content {
    width: 95vw !important;
    max-width: 900px !important;
    margin: 2rem auto !important;
    max-height: 90vh !important;
    overflow-y: auto !important;
  }
  
  .apartment-modal-close {
    top: 1rem !important;
    right: 1rem !important;
    width: 40px !important;
    height: 40px !important;
    font-size: 18px !important;
  }
}

@media (max-width: 768px) {
  .apartment-modal-content {
    width: 100vw !important;
    height: 100vh !important;
    max-width: none !important;
    max-height: none !important;
    margin: 0 !important;
    border-radius: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }
  
  .apartment-modal-close {
    position: fixed !important;
    top: 1rem !important;
    right: 1rem !important;
    z-index: 2001 !important;
    background: rgba(0, 0, 0, 0.8) !important;
    color: white !important;
    border-radius: 50% !important;
  }
  
  .apartment-modal-header,
  .apartment-modal-body {
    padding: 1rem !important;
  }
  
  .apartment-modal-header h2 {
    font-size: 1.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  .apartment-modal-gallery {
    height: 250px !important;
  }
  
  .apartment-modal-features {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 0.5rem !important;
  }
  
  .apartment-modal-features li {
    font-size: 0.875rem !important;
  }
  
  .modal-nav-btn {
    padding: 0.5rem !important;
    font-size: 14px !important;
  }
}

/* LIGHTBOX RESPONSIVE FIXES */
@media (max-width: 768px) {
  .lightbox-content {
    max-width: 95vw !important;
    max-height: 95vh !important;
  }
  
  .lightbox-close {
    top: -40px !important;
    right: 0 !important;
    font-size: 20px !important;
    padding: 8px !important;
  }
  
  .lightbox-nav {
    width: 40px !important;
    height: 40px !important;
    font-size: 16px !important;
  }
  
  .lightbox-prev {
    left: -50px !important;
  }
  
  .lightbox-next {
    right: -50px !important;
  }
  
  .lightbox-counter {
    bottom: -30px !important;
    font-size: 12px !important;
  }
}

@media (max-width: 480px) {
  .lightbox-content {
    max-width: 100vw !important;
    max-height: 100vh !important;
  }
  
  .lightbox-close {
    top: 10px !important;
    right: 10px !important;
    background: rgba(0, 0, 0, 0.8) !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
  }
  
  .lightbox-nav {
    width: 35px !important;
    height: 35px !important;
    font-size: 14px !important;
  }
  
  .lightbox-prev {
    left: 10px !important;
  }
  
  .lightbox-next {
    right: 10px !important;
  }
  
  .lightbox-counter {
    bottom: 20px !important;
    position: relative !important;
    left: auto !important;
    transform: none !important;
    text-align: center !important;
    margin-top: 1rem !important;
  }
  
  .apartment-modal-content {
    max-width: 95vw;
    max-height: 90vh;
  }
  
  .apartment-modal-body {
    grid-template-columns: 1fr;
    grid-template-rows: 45% 1fr;
  }
  
  .modal-title {
    font-size: 2rem;
  }
  
  .features-grid,
  .amenities-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .modal-book-btn,
  .modal-contact-btn {
    max-width: none;
  }
  
  .thumbnail-gallery {
    max-height: 100px;
  }
  
  .thumbnail-btn {
    width: 70px;
    height: 50px;
  }
}

/* MODAL RESPONSIVE FIXES - Additional */
@media (max-width: 768px) {
  .apartment-modal-overlay {
    padding: 5px;
    align-items: flex-start;
    padding-top: 1rem;
  }
  
  .apartment-modal-content {
    max-height: calc(100vh - 2rem);
    border-radius: 16px;
    max-width: 100vw;
    width: 100%;
  }
  
  .apartment-modal-header {
    padding: 1rem 1.5rem;
    position: relative;
  }
  
  .apartment-modal-close {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.7);
  }
  
  .apartment-modal-nav {
    padding: 0.4rem 0.8rem;
    gap: 0.5rem;
    font-size: 0.8rem;
  }
  
  .modal-nav-btn {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
  
  .modal-counter {
    font-size: 0.8rem;
    min-width: 50px;
  }
  
  .apartment-modal-body {
    height: calc(100vh - 100px);
    grid-template-rows: 40% 1fr;
    overflow: hidden;
  }
  
  .apartment-modal-info {
    padding: 1.5rem;
    gap: 1.5rem;
    overflow-y: auto;
  }
  
  .modal-title {
    font-size: 1.75rem;
    line-height: 1.2;
  }
  
  .modal-badges {
    gap: 0.3rem;
    flex-wrap: wrap;
  }
  
  .modal-badge {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }
  
  .thumbnail-gallery {
    padding: 0.75rem;
    max-height: 80px;
    gap: 0.3rem;
  }
  
  .thumbnail-btn {
    width: 60px;
    height: 40px;
    border-radius: 6px;
  }
  
  .image-nav-btn {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
  
  .image-indicators {
    bottom: 0.75rem;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
  }
  
  .image-indicator {
    width: 8px;
    height: 8px;
  }
  
  .modal-pricing {
    padding: 1.5rem;
    margin-top: 1rem;
  }
  
  .price-amount {
    font-size: 2rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .info-item {
    font-size: 0.85rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .amenities-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .main-image-container {
    min-height: 300px;
  }
}

@media (max-width: 480px) {
  .apartment-modal-overlay {
    padding: 0;
    align-items: stretch;
  }
  
  .apartment-modal-content {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
  }
  
  .apartment-modal-header {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .apartment-modal-close {
    top: 0.5rem;
    right: 0.5rem;
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
  
  .apartment-modal-nav {
    padding: 0.3rem 0.6rem;
    gap: 0.4rem;
    font-size: 0.75rem;
  }
  
  .modal-nav-btn {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }
  
  .apartment-modal-body {
    grid-template-rows: 35% 1fr;
    height: calc(100vh - 80px);
  }
  
  .main-image-container {
    min-height: 250px;
  }
  
  .apartment-modal-info {
    padding: 1rem;
    gap: 1.25rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-location {
    font-size: 0.9rem;
  }
  
  .modal-description h3,
  .modal-features h3,
  .modal-amenities h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  
  .modal-description p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .thumbnail-gallery {
    padding: 0.5rem;
    max-height: 70px;
    gap: 0.25rem;
  }
  
  .thumbnail-btn {
    width: 50px;
    height: 35px;
    border-radius: 4px;
  }
  
  .image-nav-btn {
    width: 36px;
    height: 36px;
    font-size: 0.8rem;
  }
  
  .image-nav {
    padding: 0 0.5rem;
  }
  
  .image-indicators {
    bottom: 0.5rem;
    gap: 0.25rem;
    padding: 0.3rem 0.6rem;
  }
  
  .image-indicator {
    width: 6px;
    height: 6px;
  }
  
  .modal-pricing {
    padding: 1.25rem;
    margin-top: 0.5rem;
  }
  
  .price-amount {
    font-size: 1.75rem;
  }
  
  .price-period {
    font-size: 1rem;
  }
  
  .modal-book-btn,
  .modal-contact-btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .feature-item {
    padding: 0.75rem;
  }
  
  .feature-item i {
    font-size: 1.25rem;
  }
  
  .amenity-item {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  
  .modal-additional-info {
    padding: 1rem;
  }
}

/* No Images Placeholder Styles */
.no-images-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, rgba(44, 85, 48, 0.05), rgba(44, 85, 48, 0.02));
  color: var(--text-light);
}

.placeholder-content {
  text-align: center;
  padding: 2rem;
}

.placeholder-content i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: rgba(44, 85, 48, 0.3);
}

.placeholder-content p {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .placeholder-content {
    padding: 1.5rem;
  }
  
  .placeholder-content i {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }
  
  .placeholder-content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .placeholder-content {
    padding: 1rem;
  }
  
  .placeholder-content i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .placeholder-content p {
    font-size: 0.9rem;
  }
}

/* Touch-friendly improvements for mobile */
@media (max-width: 768px) {
  .image-nav-btn,
  .modal-nav-btn,
  .thumbnail-btn,
  .image-indicator {
    touch-action: manipulation;
  }
  
  .apartment-modal-details {
    -webkit-overflow-scrolling: touch;
  }
  
  /* Larger touch targets */
  .image-indicator {
    min-width: 32px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-indicator::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }
  
  .image-indicator.active::after,
  .image-indicator:hover::after {
    background: var(--white);
    transform: scale(1.2);
  }
}

/* Animation for smooth scrolling within modal */
.apartment-modal-details {
  scroll-behavior: smooth;
}

/* Custom scrollbar for modal */
.apartment-modal-details::-webkit-scrollbar {
  width: 6px;
}

.apartment-modal-details::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
}

.apartment-modal-details::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 3px;
}

.apartment-modal-details::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* GLOBAL RESPONSIVE OVERRIDES */
@media (max-width: 480px) {
  /* Prevent any horizontal overflow */
  .apartments-section,
  .amenities-section,
  .gallery-section,
  .booking-section {
    overflow-x: hidden !important;
    width: 100% !important;
    max-width: 100vw !important;
  }
  
  /* Fix any margin/padding causing overflow */
  .container {
    margin: 0 auto !important;
    padding: 0 0.75rem !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Ensure buttons don't break layout */
  .btn {
    font-size: 14px !important;
    padding: 10px 16px !important;
  }
  
  .btn-large {
    font-size: 16px !important;
    padding: 12px 20px !important;
  }
  
  /* Gallery responsive fixes */
  .gallery-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
  
  .gallery-item {
    height: 200px !important;
  }
  
  /* Amenities responsive fixes */
  .amenities-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
  
  .amenity-card {
    padding: 1.5rem 1rem !important;
  }
  
  .amenity-icon {
    width: 60px !important;
    height: 60px !important;
    font-size: 24px !important;
    margin-bottom: 1rem !important;
  }
  
  .amenity-title {
    font-size: 18px !important;
  }
  
  .amenity-description {
    font-size: 14px !important;
  }
  
  /* Make sure all text is readable */
  h1, h2, h3, h4, h5, h6 {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    hyphens: auto !important;
  }
  
  p, span, div {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }
  
  /* Loading states responsive */
  .loading-grid {
    grid-template-columns: 1fr !important;
  }
  
  .apartment-card-skeleton,
  .error-card,
  .empty-card {
    margin: 0 0.5rem !important;
  }
}

/* Fix icon display issues */
.fas, .far, .fab {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900 !important;
  font-style: normal !important;
  font-variant: normal !important;
  text-rendering: auto !important;
  line-height: 1 !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}
</style>
