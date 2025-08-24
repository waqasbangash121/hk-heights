<template>
  <div class="admin-dashboard">
    <div v-if="!isAuthenticated" class="auth-error">
      <p>You are not authorized. Please <NuxtLink to="/admin-login">login</NuxtLink>.</p>
    </div>
    <div v-else class="dashboard-container">
      <!-- Header -->
      <header class="dashboard-header">
        <div class="header-content">
          <h1><i class="fas fa-mountain"></i> HK Heights Admin Dashboard</h1>
          <div class="header-actions">
            <span class="welcome-text">Welcome, Admin!</span>
            <button @click="logout" class="logout-btn">
              <i class="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </header>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-calendar-check"></i>
          </div>
          <div class="stat-content">
            <h3>{{ stats.totalBookings }}</h3>
            <p>Total Bookings</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="stat-content">
            <h3>{{ stats.pendingBookings }}</h3>
            <p>Pending Bookings</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-home"></i>
          </div>
          <div class="stat-content">
            <h3>{{ stats.totalApartments }}</h3>
            <p>Apartments</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-rupee-sign"></i>
          </div>
          <div class="stat-content">
            <h3>₨{{ stats.totalRevenue.toLocaleString() }}</h3>
            <p>Total Revenue</p>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="tab-navigation">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['tab-btn', { active: activeTab === tab.id }]"
        >
          <i :class="tab.icon"></i>
          {{ tab.label }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading data...</p>
      </div>

      <!-- Content Based on Active Tab -->
      <div v-else class="tab-content">
        <!-- Bookings Tab -->
        <div v-if="activeTab === 'bookings'" class="bookings-section">
          <div class="section-header">
            <h2><i class="fas fa-calendar-alt"></i> Recent Bookings</h2>
            <div class="filters">
              <select v-model="statusFilter" @change="filterBookings">
                <option value="">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="CHECKED_IN">Checked In</option>
                <option value="CHECKED_OUT">Checked Out</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
          </div>
          
          <div class="bookings-table">
            <table>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Guest</th>
                  <th>Apartment</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Guests</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="booking in filteredBookings" :key="booking.id">
                  <td>#{{ booking.id.toString().padStart(4, '0') }}</td>
                  <td>
                    <div class="guest-info">
                      <strong>{{ booking.guest.firstName }} {{ booking.guest.lastName }}</strong>
                      <small>{{ booking.guest.email }}</small>
                    </div>
                  </td>
                  <td>{{ booking.apartment?.name || 'N/A' }}</td>
                  <td>{{ formatDate(booking.checkIn) }}</td>
                  <td>{{ formatDate(booking.checkOut) }}</td>
                  <td>{{ booking.guests }}</td>
                  <td>₨{{ booking.totalAmount.toLocaleString() }}</td>
                  <td>
                    <span :class="['status-badge', booking.status.toLowerCase()]">
                      {{ booking.status }}
                    </span>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button @click="updateBookingStatus(booking.id, 'CONFIRMED')" 
                              v-if="booking.status === 'PENDING'"
                              class="btn-confirm">
                        <i class="fas fa-check"></i>
                      </button>
                      <button @click="updateBookingStatus(booking.id, 'CANCELLED')" 
                              v-if="booking.status !== 'CANCELLED'"
                              class="btn-cancel">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Apartments Tab -->
        <div v-if="activeTab === 'apartments'" class="apartments-section">
          <div class="section-header">
            <h2><i class="fas fa-building"></i> Apartments Management</h2>
            <button @click="openAddApartmentModal" class="btn-primary">
              <i class="fas fa-plus"></i> Add New Apartment
            </button>
          </div>
          
          <div class="apartments-grid">
            <div v-for="apartment in apartments" :key="apartment.id" class="apartment-card">
              <div class="apartment-image">
                <img :src="getImageUrl(apartment)" 
                     :alt="apartment.name" />
                <div class="apartment-status">
                  <span :class="['status-indicator', apartment.isActive ? 'active' : 'inactive']">
                    {{ apartment.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </div>
              </div>
              <div class="apartment-content">
                <h3>{{ apartment.name }}</h3>
                <p>{{ apartment.description }}</p>
                <div class="apartment-details">
                  <span><i class="fas fa-bed"></i> {{ apartment.bedrooms }} beds</span>
                  <span><i class="fas fa-bath"></i> {{ apartment.bathrooms }} baths</span>
                  <span><i class="fas fa-users"></i> {{ apartment.maxGuests }} guests</span>
                </div>
                <div class="apartment-price">
                  <strong>₨{{ apartment.pricePerNight.toLocaleString() }}/night</strong>
                </div>
                <div class="apartment-actions">
                  <button @click="openEditApartmentModal(apartment)" class="btn-edit">
                    <i class="fas fa-edit"></i> Edit
                  </button>
                  <button @click="openImageModal(apartment)" class="btn-images">
                    <i class="fas fa-images"></i> Images ({{ apartment.images?.length || 0 }})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Tab -->
        <div v-if="activeTab === 'analytics'" class="analytics-section">
          <div class="section-header">
            <h2><i class="fas fa-chart-bar"></i> Analytics & Reports</h2>
          </div>
          
          <div class="analytics-grid">
            <div class="chart-card">
              <h3>Booking Trends</h3>
              <div class="chart-placeholder">
                <i class="fas fa-chart-line"></i>
                <p>Chart implementation coming soon</p>
              </div>
            </div>
            
            <div class="chart-card">
              <h3>Revenue by Month</h3>
              <div class="chart-placeholder">
                <i class="fas fa-chart-bar"></i>
                <p>Chart implementation coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Apartment Edit/Add Modal -->
    <div v-if="showApartmentModal" class="modal-overlay" @click="closeApartmentModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>
            <i class="fas fa-building"></i>
            {{ editingApartment ? 'Edit Apartment' : 'Add New Apartment' }}
          </h3>
          <button @click="closeApartmentModal" class="modal-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <form @submit.prevent="saveApartment" class="apartment-form">
          <!-- Basic Information Section -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-info-circle"></i>
              Basic Information
            </h4>
            <div class="form-grid">
              <div class="form-group">
                <label for="name">Apartment Name</label>
                <input 
                  id="name"
                  v-model="apartmentForm.name" 
                  type="text" 
                  required 
                  placeholder="e.g. Deluxe Mountain Suite"
                />
              </div>
              
              <div class="form-group">
                <label for="pricePerNight">Price per Night (₨)</label>
                <input 
                  id="pricePerNight"
                  v-model.number="apartmentForm.pricePerNight" 
                  type="number" 
                  required 
                  min="0"
                  step="100"
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="description">Description</label>
              <textarea 
                id="description"
                v-model="apartmentForm.description" 
                rows="3"
                placeholder="Describe the apartment features and amenities..."
              ></textarea>
            </div>
          </div>

          <!-- Capacity & Layout Section -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-users"></i>
              Capacity & Layout
            </h4>
            <div class="form-grid form-grid-3">
              <div class="form-group">
                <label for="bedrooms">Bedrooms</label>
                <select id="bedrooms" v-model.number="apartmentForm.bedrooms" required>
                  <option :value="1">1 Bedroom</option>
                  <option :value="2">2 Bedrooms</option>
                  <option :value="3">3 Bedrooms</option>
                  <option :value="4">4 Bedrooms</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="bathrooms">Bathrooms</label>
                <select id="bathrooms" v-model.number="apartmentForm.bathrooms" required>
                  <option :value="1">1 Bathroom</option>
                  <option :value="2">2 Bathrooms</option>
                  <option :value="3">3 Bathrooms</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="maxGuests">Max Guests</label>
                <select id="maxGuests" v-model.number="apartmentForm.maxGuests" required>
                  <option :value="1">1 Guest</option>
                  <option :value="2">2 Guests</option>
                  <option :value="3">3 Guests</option>
                  <option :value="4">4 Guests</option>
                  <option :value="5">5 Guests</option>
                  <option :value="6">6 Guests</option>
                  <option :value="8">8 Guests</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Amenities Section -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-star"></i>
              Amenities
            </h4>
            <div class="amenities-grid">
              <div 
                v-for="amenity in amenities" 
                :key="amenity.id" 
                class="amenity-item"
              >
                <label class="amenity-label">
                  <input 
                    type="checkbox" 
                    :value="amenity.id"
                    v-model="apartmentForm.amenityIds"
                  />
                  <span class="amenity-content">
                    <i :class="`fas fa-${amenity.icon || 'check'}`"></i>
                    <span class="amenity-name">{{ amenity.name }}</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <!-- Status Section (Only for Edit) -->
          <div v-if="editingApartment" class="form-section">
            <h4 class="section-title">
              <i class="fas fa-toggle-on"></i>
              Status
            </h4>
            <div class="form-group">
              <label for="isActive">Apartment Status</label>
              <select id="isActive" v-model="apartmentForm.isActive">
                <option :value="true">Active</option>
                <option :value="false">Inactive</option>
              </select>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" @click="closeApartmentModal" class="btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn-primary" :disabled="loading">
              <i class="fas fa-save"></i>
              {{ loading ? 'Saving...' : (editingApartment ? 'Update' : 'Create') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Image Management Modal -->
    <div v-if="showImageModal" class="modal-overlay" @click="closeImageModal">
      <div class="modal-content modal-large" @click.stop>
        <div class="modal-header">
          <h3>
            <i class="fas fa-images"></i>
            Manage Images - {{ managingImagesFor?.name }}
          </h3>
          <button @click="closeImageModal" class="modal-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="image-management">
          <!-- Add New Image -->
          <div class="add-image-section">
            <h4>Add New Image</h4>
            <form @submit.prevent="uploadImage" class="image-form">
              <div class="form-group">
                <label for="imageFile">Select Image File</label>
                <input 
                  id="imageFile"
                  ref="fileInput"
                  type="file" 
                  accept="image/*"
                  required
                  @change="handleFileSelect"
                  class="file-input"
                />
                <div v-if="selectedFile" class="file-preview">
                  <img :src="filePreviewUrl" alt="Preview" class="preview-image" />
                  <p class="file-info">{{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})</p>
                </div>
              </div>
              <div class="form-group">
                <label for="altText">Alt Text</label>
                <input 
                  id="altText"
                  v-model="imageForm.altText" 
                  type="text" 
                  placeholder="Describe the image for accessibility"
                />
              </div>
              <div class="form-group checkbox-group">
                <label>
                  <input type="checkbox" v-model="imageForm.isMain" />
                  Set as main image
                </label>
              </div>
              <button type="submit" class="btn-primary" :disabled="loading || !selectedFile">
                <i class="fas fa-upload"></i>
                {{ loading ? 'Uploading...' : 'Upload Image' }}
              </button>
            </form>
          </div>
          
          <!-- Current Images -->
          <div class="current-images">
            <h4>Current Images ({{ managingImagesFor?.images?.length || 0 }})</h4>
            <div class="images-grid" v-if="managingImagesFor?.images?.length">
              <div 
                v-for="image in managingImagesFor.images" 
                :key="image.id" 
                class="image-item"
              >
                <div class="image-preview">
                  <img :src="image.imageUrl" :alt="image.altText" />
                  <div class="image-overlay">
                    <button @click="deleteImage(image.id)" class="btn-delete">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                  <div v-if="image.isMain" class="main-badge">
                    <i class="fas fa-star"></i> Main
                  </div>
                </div>
                <div class="image-info">
                  <small>{{ image.altText || 'No alt text' }}</small>
                </div>
              </div>
            </div>
            <div v-else class="no-images">
              <i class="fas fa-image"></i>
              <p>No images uploaded yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

// Add FontAwesome CDN
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

const isAuthenticated = ref(false)
const router = useRouter()
const loading = ref(true)
const activeTab = ref('bookings')
const statusFilter = ref('')

// Data
const bookings = ref([])
const apartments = ref([])
const amenities = ref([])
const showApartmentModal = ref(false)
const showImageModal = ref(false)
const editingApartment = ref(null)
const managingImagesFor = ref(null)
const apartmentForm = ref({
  name: '',
  description: '',
  bedrooms: 1,
  bathrooms: 1,
  maxGuests: 2,
  pricePerNight: 0,
  isActive: true,
  amenityIds: []
})
const imageForm = ref({
  altText: '',
  isMain: false
})
const selectedFile = ref(null)
const filePreviewUrl = ref('')
const fileInput = ref(null)
const stats = ref({
  totalBookings: 0,
  pendingBookings: 0,
  totalApartments: 0,
  totalRevenue: 0
})

// Tabs configuration
const tabs = [
  { id: 'bookings', label: 'Bookings', icon: 'fas fa-calendar-alt' },
  { id: 'apartments', label: 'Apartments', icon: 'fas fa-building' },
  { id: 'analytics', label: 'Analytics', icon: 'fas fa-chart-bar' }
]

// Computed properties
const filteredBookings = computed(() => {
  if (!statusFilter.value) return bookings.value
  return bookings.value.filter(booking => booking.status === statusFilter.value)
})

onMounted(async () => {
  // Check authentication status (token-based)
  isAuthenticated.value = !!localStorage.getItem('admin_token')
  if (!isAuthenticated.value) {
    router.replace('/admin-login')
    return
  }

  await loadDashboardData()
})

// Helper functions
function getImageUrl(apartment) {
  const imageUrl = apartment.images?.[0]?.imageUrl
  if (!imageUrl) {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZTVlN2ViIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2Yjcy4DAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPg=='
  }
  // For uploaded images, they're already local paths
  return imageUrl
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function handleFileSelect(event) {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    filePreviewUrl.value = URL.createObjectURL(file)
  } else {
    selectedFile.value = null
    filePreviewUrl.value = ''
  }
}

async function loadDashboardData() {
  loading.value = true
  try {
    const token = localStorage.getItem('admin_token')
    
    // Load bookings
    const bookingsRes = await fetch('/api/admin/bookings', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const bookingsData = await bookingsRes.json()
    
    if (bookingsData.success) {
      bookings.value = bookingsData.bookings
      calculateStats()
    }

    // Load apartments
    const apartmentsRes = await fetch('/api/apartments')
    const apartmentsData = await apartmentsRes.json()
    
    if (apartmentsData.success) {
      apartments.value = apartmentsData.apartments
      stats.value.totalApartments = apartmentsData.apartments.length
    }

    // Load amenities
    const amenitiesRes = await fetch('/api/amenities')
    const amenitiesData = await amenitiesRes.json()
    
    if (amenitiesData.success) {
      amenities.value = amenitiesData.amenities
    }

  } catch (error) {
    console.error('Error loading dashboard data:', error)
  } finally {
    loading.value = false
  }
}

function calculateStats() {
  stats.value.totalBookings = bookings.value.length
  stats.value.pendingBookings = bookings.value.filter(b => b.status === 'PENDING').length
  stats.value.totalRevenue = bookings.value
    .filter(b => b.status !== 'CANCELLED')
    .reduce((sum, booking) => sum + parseFloat(booking.totalAmount), 0)
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

async function updateBookingStatus(bookingId, newStatus) {
  try {
    const token = localStorage.getItem('admin_token')
    const response = await fetch(`/api/admin/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ status: newStatus })
    })

    if (response.ok) {
      // Update local data
      const bookingIndex = bookings.value.findIndex(b => b.id === bookingId)
      if (bookingIndex !== -1) {
        bookings.value[bookingIndex].status = newStatus
        calculateStats()
      }
    }
  } catch (error) {
    console.error('Error updating booking status:', error)
  }
}

function filterBookings() {
  // Filtering is handled by computed property
}

function openAddApartmentModal() {
  editingApartment.value = null
  apartmentForm.value = {
    name: '',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    pricePerNight: 0,
    isActive: true,
    amenityIds: []
  }
  showApartmentModal.value = true
}

function openEditApartmentModal(apartment) {
  console.log('Opening edit apartment modal for:', apartment.name)
  editingApartment.value = apartment
  apartmentForm.value = {
    name: apartment.name,
    description: apartment.description || '',
    bedrooms: apartment.bedrooms,
    bathrooms: apartment.bathrooms,
    maxGuests: apartment.maxGuests,
    pricePerNight: apartment.pricePerNight,
    isActive: apartment.isActive,
    amenityIds: apartment.amenities?.map(a => a.amenityId) || []
  }
  showApartmentModal.value = true
  console.log('Modal should be visible:', showApartmentModal.value)
}

function closeApartmentModal() {
  showApartmentModal.value = false
  editingApartment.value = null
}

async function saveApartment() {
  console.log('Saving apartment...', apartmentForm.value)
  loading.value = true
  try {
    const token = localStorage.getItem('admin_token')
    const url = editingApartment.value 
      ? `/api/admin/apartments/${editingApartment.value.id}`
      : '/api/admin/apartments'
    
    const method = editingApartment.value ? 'PATCH' : 'POST'
    
    console.log('Request details:', { url, method, data: apartmentForm.value })
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(apartmentForm.value)
    })

    const data = await response.json()
    console.log('Response:', data)
    
    if (data.success) {
      if (editingApartment.value) {
        // Update existing apartment in the list
        const index = apartments.value.findIndex(a => a.id === editingApartment.value.id)
        if (index !== -1) {
          apartments.value[index] = data.apartment
        }
      } else {
        // Add new apartment to the list
        apartments.value.push(data.apartment)
        stats.value.totalApartments++
      }
      closeApartmentModal()
    } else {
      console.error('Error saving apartment:', data.error)
      alert('Error saving apartment: ' + (data.error || 'Unknown error'))
    }
  } catch (error) {
    console.error('Error saving apartment:', error)
    alert('Network error: ' + error.message)
  } finally {
    loading.value = false
  }
}

function openImageModal(apartment) {
  managingImagesFor.value = apartment
  imageForm.value = {
    imageUrl: '',
    altText: '',
    isMain: false
  }
  showImageModal.value = true
}

function closeImageModal() {
  showImageModal.value = false
  managingImagesFor.value = null
}

async function uploadImage() {
  if (!managingImagesFor.value || !selectedFile.value) return
  
  loading.value = true
  try {
    const formData = new FormData()
    formData.append('image', selectedFile.value)
    formData.append('apartmentId', managingImagesFor.value.id.toString())
    formData.append('altText', imageForm.value.altText || selectedFile.value.name)
    formData.append('isMain', imageForm.value.isMain.toString())

    const token = localStorage.getItem('admin_token')
    const response = await fetch('/api/admin/upload-image', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })

    const data = await response.json()
    
    if (data.success) {
      // Update the apartment's images
      managingImagesFor.value.images = data.apartment.images
      
      // Update the apartment in the main list
      const apartmentIndex = apartments.value.findIndex(a => a.id === managingImagesFor.value.id)
      if (apartmentIndex !== -1) {
        apartments.value[apartmentIndex].images = managingImagesFor.value.images
      }
      
      // Reset form
      imageForm.value = {
        altText: '',
        isMain: false
      }
      selectedFile.value = null
      filePreviewUrl.value = ''
      if (fileInput.value) {
        fileInput.value.value = ''
      }
    } else {
      alert('Failed to upload image: ' + data.message)
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    alert('Failed to upload image')
  } finally {
    loading.value = false
  }
}

async function deleteImage(imageId) {
  if (!confirm('Are you sure you want to delete this image?')) return
  
  try {
    const token = localStorage.getItem('admin_token')
    const response = await fetch(`/api/admin/apartment-images/${imageId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await response.json()
    
    if (data.success) {
      // Remove the image from the apartment's images array
      if (managingImagesFor.value?.images) {
        managingImagesFor.value.images = managingImagesFor.value.images.filter(img => img.id !== imageId)
        
        // Update the apartment in the main apartments array
        const apartmentIndex = apartments.value.findIndex(a => a.id === managingImagesFor.value.id)
        if (apartmentIndex !== -1) {
          apartments.value[apartmentIndex].images = managingImagesFor.value.images
        }
      }
    } else {
      console.error('Error deleting image:', data.error)
    }
  } catch (error) {
    console.error('Error deleting image:', error)
  }
}

function logout() {
  localStorage.removeItem('admin_token')
  router.replace('/admin-login')
}
</script><style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: #f8fafc;
}

.auth-error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.1rem;
}

.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

/* Header */
.dashboard-header {
  background: linear-gradient(135deg, #2c5530 0%, #3a6b3e 100%);
  color: white;
  padding: 1rem 1rem 2rem;
  margin-bottom: 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-header h1 {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  flex: 1;
  min-width: 250px;
}

.dashboard-header h1 i {
  margin-right: 0.5rem;
  color: #a3d9a5;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.welcome-text {
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  opacity: 0.9;
  white-space: nowrap;
}

.logout-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: -0.5rem 1rem 1.5rem;
  padding: 0;
}

.stat-card {
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e2e8f0;
  min-height: 100px;
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2c5530, #3a6b3e);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
  min-width: 0;
}

.stat-content h3 {
  margin: 0 0 0.25rem 0;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: #1e293b;
  word-break: break-all;
}

.stat-content p {
  margin: 0;
  color: #64748b;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  line-height: 1.2;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  gap: 0.25rem;
  margin: 0 1rem 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tab-navigation::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  font-weight: 500;
  color: #64748b;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  min-width: fit-content;
}

.tab-btn i {
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

.tab-btn:hover {
  background: #f1f5f9;
  color: #2c5530;
}

.tab-btn.active {
  background: white;
  color: #2c5530;
  border-bottom: 3px solid #2c5530;
  font-weight: 600;
}

/* Content */
.tab-content {
  padding: 0 1rem 2rem;
}

.loading-state {
  text-align: center;
  padding: 3rem 1rem;
  color: #64748b;
}

.loading-state i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Section Headers */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-header h2 {
  margin: 0;
  color: #1e293b;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  flex: 1;
  min-width: 200px;
}

.section-header h2 i {
  margin-right: 0.5rem;
  color: #2c5530;
}

.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filters select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  font-size: 0.9rem;
  min-width: 140px;
}

/* Bookings Table */
.bookings-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  overflow-x: auto;
}

.bookings-table table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
}

.bookings-table th {
  background: #f8fafc;
  padding: 0.75rem 0.5rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  white-space: nowrap;
}

.bookings-table td {
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: top;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
}

.guest-info {
  min-width: 150px;
}

.guest-info strong {
  display: block;
  color: #1e293b;
  font-size: 0.9rem;
  line-height: 1.3;
}

.guest-info small {
  color: #64748b;
  font-size: 0.75rem;
  word-break: break-all;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  display: inline-block;
}

.status-badge.pending {
  background: #fef3c7;
  color: #92400e;
}

.status-badge.confirmed {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.checked_in {
  background: #dbeafe;
  color: #1e40af;
}

.status-badge.checked_out {
  background: #e5e7eb;
  color: #374151;
}

.status-badge.cancelled {
  background: #fee2e2;
  color: #991b1b;
}

.action-buttons {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  min-width: 80px;
}

.btn-confirm, .btn-cancel {
  padding: 0.4rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-confirm {
  background: #10b981;
  color: white;
}

.btn-confirm:hover {
  background: #059669;
}

.btn-cancel {
  background: #ef4444;
  color: white;
}

.btn-cancel:hover {
  background: #dc2626;
}

/* Apartments Grid */
.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.apartment-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.apartment-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.apartment-image {
  position: relative;
  height: 180px;
  background: #f3f4f6;
}

.apartment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.apartment-status {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}

.status-indicator {
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.status-indicator.active {
  background: rgba(16, 185, 129, 0.9);
  color: white;
}

.status-indicator.inactive {
  background: rgba(107, 114, 128, 0.9);
  color: white;
}

.apartment-content {
  padding: 1.25rem;
}

.apartment-content h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.3;
}

.apartment-content p {
  color: #64748b;
  margin: 0 0 1rem 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.apartment-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.apartment-details span {
  color: #64748b;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.apartment-details i {
  color: #2c5530;
  font-size: 0.8rem;
}

.apartment-price {
  margin-bottom: 1rem;
}

.apartment-price strong {
  color: #2c5530;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
}

.apartment-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-edit, .btn-images {
  flex: 1;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-height: 40px;
}

.btn-edit:hover, .btn-images:hover {
  background: #f9fafb;
  border-color: #2c5530;
  color: #2c5530;
}

.btn-edit i, .btn-images i {
  font-size: 0.8rem;
}

.btn-primary {
  background: #2c5530;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.btn-primary:hover {
  background: #1e3a22;
}

.btn-primary i {
  font-size: 0.8rem;
}

/* Analytics */
.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.chart-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.chart-card h3 {
  margin: 0 0 1.5rem 0;
  color: #1e293b;
}

.chart-placeholder {
  text-align: center;
  padding: 3rem;
  color: #64748b;
  background: #f8fafc;
  border-radius: 8px;
}

.chart-placeholder i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

/* Responsive - Tablet */
@media (max-width: 1024px) {
  .dashboard-container {
    max-width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: -0.5rem 1.5rem 1.5rem;
  }
  
  .tab-navigation,
  .tab-content {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  
  .apartments-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  .bookings-table {
    overflow-x: auto;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    padding: 0;
  }
  
  .dashboard-header {
    padding: 1rem 1rem 1.5rem;
    margin-bottom: 1rem;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin: -0.5rem 1rem 1rem;
    gap: 0.75rem;
  }
  
  .tab-navigation,
  .tab-content {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  .tab-navigation {
    margin-bottom: 1rem;
  }
  
  .apartments-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .analytics-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.6) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 9999 !important;
  visibility: visible !important;
  opacity: 1 !important;
  padding: 1rem;
  overflow-y: auto;
}

.modal-content {
  background: white !important;
  border-radius: 12px;
  width: 100%;
  max-width: min(600px, 95vw);
  max-height: min(90vh, 800px);
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  margin: auto;
  position: relative !important;
  z-index: 10000 !important;
}

.modal-large {
  max-width: min(900px, 95vw);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
  border-radius: 12px 12px 0 0;
}

.modal-header h3 {
  margin: 0;
  color: #1e293b;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.3;
}

.modal-header h3 i {
  margin-right: 0.5rem;
  color: #2c5530;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.modal-close:hover {
  background: #f3f4f6;
  color: #1f2937;
}

/* Form Styles */
.apartment-form {
  padding: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: clamp(0.8rem, 2vw, 1rem);
  transition: border-color 0.3s ease;
  min-height: 44px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2c5530;
  box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
  line-height: 1.4;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  margin: 0;
  min-height: auto;
}

.checkbox-group label {
  margin: 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
}

/* Form Sections */
.form-section {
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1.25rem 0;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: #1e293b;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
}

.section-title i {
  color: #3b82f6;
  font-size: 1.1em;
}

.form-grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

/* Improved Amenities Layout */
.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.amenity-item {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;
  overflow: hidden;
}

.amenity-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
}

.amenity-label {
  display: block;
  padding: 0.75rem;
  cursor: pointer;
  user-select: none;
  position: relative;
  margin: 0;
}

.amenity-label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.amenity-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s ease;
}

.amenity-content i {
  width: 14px;
  text-align: center;
  color: #6b7280;
  transition: color 0.2s ease;
  font-size: 0.85em;
}

.amenity-name {
  flex: 1;
  line-height: 1.3;
}

/* Checked state */
.amenity-label input[type="checkbox"]:checked + .amenity-content {
  color: #1e293b;
}

.amenity-label input[type="checkbox"]:checked + .amenity-content i {
  color: #3b82f6;
}

.amenity-item:has(input[type="checkbox"]:checked) {
  background: #eff6ff;
  border-color: #3b82f6;
}

.form-actions {
  min-height: auto;
}

.amenity-checkbox input[type="checkbox"]:checked + .amenity-label {
  color: #3b82f6;
  font-weight: 500;
}

.amenity-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.amenity-label i {
  width: 16px;
  text-align: center;
  color: #6b7280;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
}

.btn-secondary {
  background: #f9fafb;
  color: #374151;
  border: 1px solid #d1d5db;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  min-height: 44px;
  flex: 1;
  min-width: 100px;
}

.btn-secondary:hover {
  background: #f3f4f6;
}

.form-actions .btn-primary {
  flex: 1;
  min-width: 120px;
  justify-content: center;
}

/* Image Management Styles */
.image-management {
  padding: 1.5rem;
}

.add-image-section {
  background: #f8fafc;
  padding: 1.25rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.add-image-section h4 {
  margin: 0 0 1rem 0;
  color: #1e293b;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
}

.image-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: end;
}

.image-form .form-group:last-child {
  grid-column: 1 / -1;
  margin-top: 0.5rem;
}

.file-input {
  padding: 0.5rem;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  background: #f8fafc;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-input:hover {
  border-color: #3b82f6;
  background: #eff6ff;
}

.file-preview {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
}

.preview-image {
  max-width: 200px;
  max-height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.file-info {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
}

.current-images h4 {
  margin: 0 0 1.5rem 0;
  color: #1e293b;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.image-item {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.image-item:hover {
  transform: scale(1.02);
}

.image-preview {
  position: relative;
  aspect-ratio: 4/3;
  background: #f3f4f6;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-item:hover .image-overlay {
  opacity: 1;
}

.btn-delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.3s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-delete:hover {
  background: #dc2626;
}

.main-badge {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  background: rgba(245, 158, 11, 0.9);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

.image-info {
  padding: 0.75rem;
}

.image-info small {
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1.3;
  display: block;
}

.no-images {
  text-align: center;
  padding: 2rem;
  color: #9ca3af;
  grid-column: 1 / -1;
}

.no-images i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

/* Mobile Responsive for Modals */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 0.5rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
  
  .modal-content {
    max-height: calc(100vh - 4rem);
    width: 100%;
    margin: 0;
  }
  
  .modal-header {
    padding: 1rem;
  }
  
  .modal-header h3 {
    font-size: 1rem;
  }
  
  .apartment-form,
  .image-management {
    padding: 1rem;
  }
  
  .form-section {
    margin-bottom: 1rem;
    padding: 1rem;
  }
  
  .section-title {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .form-grid-3 {
    grid-template-columns: 1fr;
  }
  
  .amenities-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
  }
  
  .amenity-item {
    border-radius: 6px;
  }
  
  .amenity-label {
    padding: 0.6rem;
  }
  
  .amenity-content {
    font-size: 0.75rem;
    gap: 0.4rem;
  }
  
  .amenity-content i {
    width: 12px;
    font-size: 0.8em;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .image-form {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.75rem;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-actions .btn-primary,
  .form-actions .btn-secondary {
    width: 100%;
    order: 1;
  }
  
  .form-actions .btn-secondary {
    order: 2;
  }
}

/* Small Mobile Devices */
@media (max-width: 480px) {
  .dashboard-container {
    padding: 0;
  }
  
  .dashboard-header {
    padding: 0.75rem 1rem 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .dashboard-header h1 {
    font-size: 1.25rem;
  }
  
  .welcome-text {
    font-size: 0.85rem;
  }
  
  .logout-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    margin: -0.5rem 0.75rem 1rem;
    gap: 0.75rem;
  }
  
  .stat-card {
    padding: 1rem;
    min-height: 80px;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .stat-content h3 {
    font-size: 1.2rem;
  }
  
  .stat-content p {
    font-size: 0.75rem;
  }
  
  .tab-navigation {
    margin: 0 0.75rem 1rem;
    gap: 0;
  }
  
  .tab-btn {
    padding: 0.6rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .tab-btn i {
    display: none;
  }
  
  .tab-content {
    padding: 0 0.75rem 1.5rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .section-header h2 {
    font-size: 1.1rem;
  }
  
  .apartments-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .apartment-image {
    height: 160px;
  }
  
  .apartment-content {
    padding: 1rem;
  }
  
  .apartment-details {
    gap: 0.5rem;
  }
  
  .apartment-details span {
    font-size: 0.7rem;
  }
  
  .apartment-actions {
    gap: 0.4rem;
  }
  
  .btn-edit, .btn-images {
    padding: 0.5rem 0.6rem;
    font-size: 0.75rem;
    min-height: 36px;
  }
  
  .btn-primary {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
  
  .bookings-table table {
    min-width: 700px;
  }
  
  .bookings-table th,
  .bookings-table td {
    padding: 0.5rem 0.4rem;
    font-size: 0.75rem;
  }
  
  .guest-info strong {
    font-size: 0.8rem;
  }
  
  .guest-info small {
    font-size: 0.65rem;
  }
  
  .status-badge {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
  }
  
  .btn-confirm, .btn-cancel {
    min-width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }
  
  .modal-overlay {
    padding: 0.25rem;
    padding-top: 1rem;
  }
  
  .modal-content {
    max-height: calc(100vh - 2rem);
    border-radius: 8px;
  }
  
  .modal-header {
    padding: 0.75rem;
  }
  
  .modal-close {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
  
  .apartment-form,
  .image-management {
    padding: 0.75rem;
  }
  
  .add-image-section {
    padding: 1rem;
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
  }
  
  .image-info {
    padding: 0.5rem;
  }
  
  .no-images {
    padding: 1.5rem;
  }
  
  .no-images i {
    font-size: 2rem;
  }
}

/* Large Screens */
@media (min-width: 1200px) {
  .dashboard-container {
    max-width: 1600px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    margin: -1rem 2rem 2rem;
  }
  
  .tab-navigation,
  .tab-content {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  .apartments-grid {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
