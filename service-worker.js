self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open("static").then(function (cache) {
      return cache.addAll(
        [

          '/logo512.png',
          '/logo192.png',
          '/index.html'
        ]
      );
    })
  );
});