self.addEventListener('fetch', function (event) {
  // it can be empty if you just want to get rid of that error
});


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(
        [

          './',
          'logo192.png'
        ]
      );
    })
  );
});

