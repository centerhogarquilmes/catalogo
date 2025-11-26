const CACHE_NAME = 'calculadora-v2';
const urlsToCache = [
  '/catalogo/',
  '/catalogo/calculadora.html',
  '/catalogo/css/calculadora.css',
  '/catalogo/js/calculadora.js',
  '/catalogo/js/manifest.json',
  '/catalogo/images/logo_192.png',
  '/catalogo/images/logo_512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(
        cacheNames.map((name) => 
          name !== CACHE_NAME && caches.delete(name)
        )
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});