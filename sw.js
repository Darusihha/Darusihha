const CACHE = 'darusihha-v1';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => { 
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); 
    self.skipWaiting(); 
});

self.addEventListener('fetch', e => { 
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); 
});
