// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('calculadora-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/calculadora.html',
        '/calculadora.css',
        '/calculadora.js',
        '/images/logo_192.png',
        '/images/logo_512.png'
      ]);
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