<template>
  <div class="admin-login-container">
    <h1>Admin Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username</label>
        <input id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="loading">Login</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    const data = await res.json()
    if (res.ok && data.success) {
      localStorage.setItem('admin_token', data.token)
      router.push('/admin-dashboard')
    } else {
      error.value = data.error || 'Invalid credentials'
    }
  } catch (e) {
    error.value = 'Login failed.'
  }
  loading.value = false
}
</script>

<style scoped>
.admin-login-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.admin-login-container h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.admin-login-container form > div {
  margin-bottom: 1rem;
}
.admin-login-container label {
  display: block;
  margin-bottom: 0.5rem;
}
.admin-login-container input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.admin-login-container button {
  width: 100%;
  padding: 0.75rem;
  background: #2c5530;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.admin-login-container .error {
  color: #c00;
  margin-top: 1rem;
  text-align: center;
}
</style>
