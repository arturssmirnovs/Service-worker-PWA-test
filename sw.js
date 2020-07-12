self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('myapp-static-v1').then(function(cache) {
            return cache.addAll([
                'favicon.png',
                'no.mp3',
                'yes.mp3',
                'on.svg',
                'off.svg',
                'style.css',
                'script.js',
                'manifest.json',
                'index.html',
                '/'
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
