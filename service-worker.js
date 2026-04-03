const CACHE_NAME = 'sales-report-v1';
const urlsToCache = [
  '/Report-Sales-Per-2-Jam-2/',
  '/Report-Sales-Per-2-Jam-2/index.html',
  '/Report-Sales-Per-2-Jam-2/manifest.json',
  '/Report-Sales-Per-2-Jam-2/icons/icon-192.png',
  '/Report-Sales-Per-2-Jam-2/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
