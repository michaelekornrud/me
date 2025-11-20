const { writeFileSync, mkdirSync, readFileSync } = require('fs');
const { execSync } = require('child_process');

function safe(cmd, fallback = 'unknown') {
  try { return execSync(cmd).toString().trim(); } catch { return fallback; }
}

// Read version from package.json
function getPackageVersion() {
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    return packageJson.version || 'unknown';
  } catch (error) {
    console.warn('Could not read version from package.json:', error.message);
    return 'unknown';
  }
}

const data = {
  status: 'ok',
  app: 'mekornrud',
  commit: process.env.VERCEL_GIT_COMMIT_SHA || process.env.NETLIFY_COMMIT_REF || safe('git rev-parse --short HEAD'),
  generatedAt: new Date().toISOString(),
  version: getPackageVersion()
};

// Ensure public folder exists (in case script is run in a different context)
try { mkdirSync('public', { recursive: true }); } catch {}

// Primary canonical JSON file
writeFileSync('public/health.json', JSON.stringify(data, null, 2));

console.log('Health file written:', data);
