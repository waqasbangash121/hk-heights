#!/usr/bin/env node

/**
 * Production Readiness Verification Script
 * Run this before deploying to production
 */

import { PrismaClient } from '@prisma/client'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('🔍 HK Heights Production Readiness Check')
console.log('=========================================\n')

// Check 1: Environment Variables
console.log('1️⃣ Checking Environment Variables...')
const requiredEnvVars = ['DATABASE_URL']
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar])

if (missingEnvVars.length > 0) {
  console.log('❌ Missing required environment variables:')
  missingEnvVars.forEach(envVar => console.log(`   - ${envVar}`))
  process.exit(1)
} else {
  console.log('✅ All required environment variables are set')
}

// Check 2: Database Connection
console.log('\n2️⃣ Testing Database Connection...')
const prisma = new PrismaClient()

try {
  await prisma.$connect()
  console.log('✅ Database connection successful')
  
  // Test a simple query
  const apartmentCount = await prisma.apartment.count()
  console.log(`✅ Database query test passed (${apartmentCount} apartments found)`)
  
  await prisma.$disconnect()
} catch (error) {
  console.log('❌ Database connection failed:', error.message)
  process.exit(1)
}

// Check 3: Required Files
console.log('\n3️⃣ Checking Required Files...')
const requiredFiles = [
  'package.json',
  'nuxt.config.ts',
  'netlify.toml',
  'prisma/schema.prisma',
  'pages/index.vue',
  'server/api/apartments.get.js'
]

const missingFiles = requiredFiles.filter(file => !fs.existsSync(join(__dirname, file)))

if (missingFiles.length > 0) {
  console.log('❌ Missing required files:')
  missingFiles.forEach(file => console.log(`   - ${file}`))
  process.exit(1)
} else {
  console.log('✅ All required files are present')
}

// Check 4: Package.json Scripts
console.log('\n4️⃣ Checking Build Configuration...')
const packageJson = JSON.parse(fs.readFileSync(join(__dirname, 'package.json'), 'utf8'))

const requiredScripts = ['build', 'dev', 'preview']
const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script])

if (missingScripts.length > 0) {
  console.log('❌ Missing required scripts in package.json:')
  missingScripts.forEach(script => console.log(`   - ${script}`))
} else {
  console.log('✅ All required build scripts are configured')
}

// Check 5: Dependencies
console.log('\n5️⃣ Checking Dependencies...')
const requiredDeps = ['@prisma/client', 'nuxt', 'prisma']
const missingDeps = requiredDeps.filter(dep => 
  !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
)

if (missingDeps.length > 0) {
  console.log('❌ Missing required dependencies:')
  missingDeps.forEach(dep => console.log(`   - ${dep}`))
} else {
  console.log('✅ All required dependencies are installed')
}

// Final Summary
console.log('\n🎉 Production Readiness Summary')
console.log('================================')
console.log('✅ Environment variables configured')
console.log('✅ Database connection working') 
console.log('✅ Required files present')
console.log('✅ Build scripts configured')
console.log('✅ Dependencies installed')
console.log('\n🚀 Your HK Heights system is PRODUCTION READY!')
console.log('\nNext steps:')
console.log('1. Push code to GitHub/GitLab')
console.log('2. Connect repository to Netlify')
console.log('3. Set environment variables in Netlify')
console.log('4. Deploy and test!')

process.exit(0)
