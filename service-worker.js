// Nom du cache pour versionner les fichiers (change en cas de mise à jour de fichiers)
const CACHE_NAME = 'chemical-app-cache-v1';

// Liste des fichiers à mettre en cache
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/images/icons/icon-192x192.png', // Ajoute les fichiers d'icônes si nécessaire
  '/images/icons/icon-512x512.png'
];

// Installation du Service Worker et mise en cache initiale
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Mise en cache des fichiers');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activation du Service Worker et nettoyage des anciens caches s'il y en a
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Suppression de l\'ancien cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes réseau pour fournir les fichiers en cache
self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Renvoie la réponse en cache s'il y en a une, sinon fait la requête réseau
      return response || fetch(event.request);
    })
  );
});

