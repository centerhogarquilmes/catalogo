// sw.js
const CACHE_NAME = 'calculadora-v1';
const urlsToCache = [
  './',
  './calculadora.html',
  './calculadora.css',
  './calculadora.js',
  './manifest.json',
  './images/logo_192.png',
  './images/logo_512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});