import games from './data/games.js';
// Files to cache
var cacheName = 'js13kPWA-v1';
var appShellFiles = [
  '/vue-example/js13kpwa/',
  '/vue-example/js13kpwa/index.html',
  '/vue-example/js13kpwa/app.js',
  '/vue-example/js13kpwa/style.css',
  '/vue-example/js13kpwa/fonts/graduate.eot',
  '/vue-example/js13kpwa/fonts/graduate.ttf',
  '/vue-example/js13kpwa/fonts/graduate.woff',
  '/vue-example/js13kpwa/favicon.ico',
  '/vue-example/js13kpwa/img/js13kgames.png',
  '/vue-example/js13kpwa/img/bg.png',
  '/vue-example/js13kpwa/icons/icon-32.png',
  '/vue-example/js13kpwa/icons/icon-64.png',
  '/vue-example/js13kpwa/icons/icon-96.png',
  '/vue-example/js13kpwa/icons/icon-128.png',
  '/vue-example/js13kpwa/icons/icon-168.png',
  '/vue-example/js13kpwa/icons/icon-192.png',
  '/vue-example/js13kpwa/icons/icon-256.png',
  '/vue-example/js13kpwa/icons/icon-512.png'
];
var gamesImages = [];
for(var i=0; i<games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
