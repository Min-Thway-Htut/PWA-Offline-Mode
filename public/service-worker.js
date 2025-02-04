const CACHE_NAME = "offline-cache-v1";
const OFFLINE_PAGE = "/offline.html";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([OFFLINE_PAGE]);
        })
    );
    self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || caches.match(OFFLINE_PAGE);
            })
        );
    }
});
