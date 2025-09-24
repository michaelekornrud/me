// Basic service worker for PWA offline support
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mekornrud-cache-v2').then(cache => {
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
      return response || fetch(event.request).catch(err => {
        console.error('Fetch failed; returning offline page instead.', err);
        return caches.match('/index.html');
      });
    })
  );
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
});

