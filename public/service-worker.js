// Basic service worker for PWA offline support
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mekornrud-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/Simple_logo.svg'
        // Add more assets as needed
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
