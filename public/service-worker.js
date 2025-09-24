// Basic service worker for PWA offline support
const CACHE_NAME = 'mekornrud-cache-v4'; // Updated version

// Static assets that don't change
const staticUrlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Simple_logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // Cache static assets first
      await cache.addAll(staticUrlsToCache);
      
      // Dynamically discover and cache built assets
      try {
        const response = await fetch('/asset-manifest.json');
        const manifest = await response.json();
        
        // Extract CSS and JS files from the manifest
        const assetsToCache = [];
        if (manifest.files) {
          Object.values(manifest.files).forEach(file => {
            // Cache main CSS and JS files (skip maps and other files)
            if (file.endsWith('.css') || 
                (file.endsWith('.js') && !file.includes('.map') && !file.includes('LICENSE'))) {
              assetsToCache.push(file);
            }
          });
        }
        
        // Cache the discovered assets
        if (assetsToCache.length > 0) {
          await cache.addAll(assetsToCache);
          console.log('Cached assets:', assetsToCache);
        }
      } catch (error) {
        console.warn('Could not load asset manifest, using basic caching:', error);
      }
    })
  );
  self.skipWaiting(); // Force immediate activation
});

self.addEventListener('fetch', event => {
  // Network-first strategy for HTML, cache-first for assets
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Update cache with fresh content
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // Cache-first for static assets
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // Take control immediately
});

