/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cacheName = 'weatherPWACache-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/scripts/app.js',
    '/scripts/config.js',
    '/styles/ud811.css',
    '/images/clear.png',
    '/images/cloudy-scattered-showers.png',
    '/images/cloudy.png',
    '/images/fog.png',
    '/images/ic_add_white_24px.svg',
    '/images/ic_refresh_white_24px.svg',
    '/images/partly-cloudy.png',
    '/images/rain.png',
    '/images/scattered-showers.png',
    '/images/sleet.png',
    '/images/snow.png',
    '/images/thunderstorm.png',
    '/images/wind.png'];

self.addEventListener('install', function (e) {
    e.waitUntil(caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
    }));
});

self.addEventListener('activate', function(e){
    e.waitUntil(caches.keys().then(function(keyList){
        return Promise.all(keyList.map(function(key){
            if(key !== cacheName && key !== dataCacheName){
                return caches.delete(key);
            }
        }));
    }));
});

self.addEventListener('fetch', function(e){
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(caches.match(e.request).then(function(response){
        return response || fetch(e.request);
    }));
});


