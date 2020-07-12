self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('myapp-static-v1').then(function(cache) {
            return cache.addAll([
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/favicon.png',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/no.mp3',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/yes.mp3',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/on.svg',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/off.svg',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/style.css',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/script.js',
                'https://arturssmirnovs.github.io/Service-worker-PWA-test/Service-worker-PWA-test/index.html'
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
