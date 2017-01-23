

var cacheName = 'everisCache-v1';
var filesToCache = [];


self.addEventListener('install', function(e){
    e.waitUntil(caches.open(cacheName).then(function(cache){
        return cache.addAll(filesToCache);
    }));
});

self.addEventListener('activate', function(e){
    e.waitUntil(caches.keys().then(function(keyList){
        return Promise.all(keyList.map(function(key){
            console.log('asdas');
        }))
    }));
});

