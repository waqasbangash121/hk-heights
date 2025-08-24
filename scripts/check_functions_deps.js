const fs = require('fs');
const path = require('path');

const functionsDir = path.resolve(__dirname, '..', 'netlify', 'functions');
const pkg = require(path.resolve(__dirname, '..', 'package.json'));

function listFiles(dir) {
  try {
    return fs.readdirSync(dir).filter(f => f.endsWith('.js')).map(f => path.join(dir, f));
  } catch (e) {
    return [];
  }
}

function extractModules(code) {
  const mods = new Set();
  const requireRe = /require\(['"`]([^'"`]+)['"`]\)/g;
  const importRe = /from\s+['"`]([^'"`]+)['"`]/g;
  let m;
  while ((m = requireRe.exec(code))) mods.add(m[1]);
  while ((m = importRe.exec(code))) mods.add(m[1]);
  return Array.from(mods);
}

function isPackage(spec) {
  return !spec.startsWith('./') && !spec.startsWith('../') && !spec.startsWith('/') && !spec.startsWith('file:');
}

const files = listFiles(functionsDir);
if (files.length === 0) {
  console.log('No JS files found in netlify/functions.');
  process.exit(0);
}

const report = {};
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const mods = extractModules(code).filter(isPackage);
  report[file] = { packages: mods, missing: [] };
  for (const p of mods) {
    try {
      require.resolve(p, { paths: [path.resolve(__dirname, '..')] });
    } catch (e) {
      report[file].missing.push(p);
    }
  }
}

let anyMissing = false;
for (const [file, info] of Object.entries(report)) {
  console.log('\n' + path.relative(process.cwd(), file));
  console.log('  Packages referenced: ' + (info.packages.length || 0));
  if (info.missing.length) {
    anyMissing = true;
    console.log('  Missing:');
    for (const m of info.missing) console.log('   - ' + m + (pkg.dependencies && pkg.dependencies[m] ? ' (declared)' : ''));
  } else {
    console.log('  All referenced packages resolved.');
  }
}

if (!anyMissing) process.exit(0);
process.exit(2);
