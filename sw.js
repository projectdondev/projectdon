self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('Project Don').then(function(cache) {
return cache.addAll([

]);
})
);
});
