const CACHE_NAME = 'sales-report-v1';

const urlsToCache = [
  '/Report-Sales-Per-2-Jam-2/',
  '/Report-Sales-Per-2-Jam-2/index.html',
  '/Report-Sales-Per-2-Jam-2/manifest.json',
  '/Report-Sales-Per-2-Jam-2/icons/icon-192.png',
  '/Report-Sales-Per-2-Jam-2/icons/icon-512.png'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate (biar langsung aktif)
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch (ambil dari cache dulu)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
