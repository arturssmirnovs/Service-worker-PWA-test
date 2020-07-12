self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('myapp-static-v1').then(function(cache) {
            return cache.addAll([
                './Service-worker-PWA-test/favicon.png',
                './Service-worker-PWA-test/no.mp3',
                './Service-worker-PWA-test/yes.mp3',
                './Service-worker-PWA-test/on.svg',
                './Service-worker-PWA-test/off.svg',
                './Service-worker-PWA-test/style.css',
                './Service-worker-PWA-test/script.js',
                './Service-worker-PWA-test/index.html'
            ]);
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
