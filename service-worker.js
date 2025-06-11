const CACHE_NAME = 'vr-experience-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.webmanifest',
  './service-worker.js',
  './assets/hdris/tile--.jpg',
  './assets/video/portale.mp4',
  './assets/video/LOGO-3D-GOLD.png',
  './assets/video/porta-sound.mp3',
  './assets/alice/musica.mp3',
  './assets/context.jpeg',
  './assets/alice/Stanza-scansionata-3.glb',
  './assets/alice/Prova-teaparty-5.glb',
  './assets/alice/Porta-animata-2.glb'
  // Aggiungi altri file se servono
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
