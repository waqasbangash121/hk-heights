#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const pkgPath = path.resolve(process.cwd(), '.netlify/functions-internal/server/package.json')
if (!fs.existsSync(pkgPath)) {
  console.error('Function package.json not found:', pkgPath)
  process.exit(0)
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
pkg.dependencies = pkg.dependencies || {}
// Determine versions from root package.json
const rootPkgPath = path.resolve(process.cwd(), 'package.json')
let rootPkg = {}
try {
  rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'))
} catch (e) {
  console.warn('Could not read root package.json to determine versions:', e.message)
}
const rootDeps = (rootPkg && rootPkg.dependencies) || {}
pkg.dependencies['@prisma/client'] = pkg.dependencies['@prisma/client'] || rootDeps['@prisma/client'] || '^6.14.0'
pkg.dependencies['pg'] = pkg.dependencies['pg'] || rootDeps['pg'] || '^8.16.3'
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
console.log('Injected @prisma/client and pg into', pkgPath)

// Also copy the actual installed package folders into the function node_modules
const targetNodeModules = path.resolve(path.dirname(pkgPath), 'node_modules')
if (!fs.existsSync(targetNodeModules)) fs.mkdirSync(targetNodeModules, { recursive: true })

function copyPkg(pkgName) {
  try {
    const resolved = require.resolve(pkgName + '/package.json')
    const pkgRoot = path.dirname(resolved)
    const dest = path.join(targetNodeModules, pkgName)
    console.log('Copying', pkgRoot, '->', dest)
    // Use recursive copy
    fs.rmSync(dest, { recursive: true, force: true })
    fs.cpSync(pkgRoot, dest, { recursive: true })
    console.log('Copied', pkgName, 'to function node_modules')
  } catch (e) {
    console.warn('Could not copy', pkgName, ':', e.message)
  }
}

copyPkg('@prisma/client')
copyPkg('pg')
