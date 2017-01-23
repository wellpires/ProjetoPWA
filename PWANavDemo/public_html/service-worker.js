

var cacheName = 'everisCache-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/contact.html',
    '/about.html',
    '/main.html',
    '/services.html',
    'images/big_data_small.jpg',
    'images/bullet.png',
    'images/ic_action_name.png',
    'images/logo_everis.jpg',
    'images/peq_bpo.jpg',
    'images/peq_business.jpg',
    'images/peq_outsourcing.jpg',
    'images/peq_ses.jpg',
    'images/peq_tecnologia.jpg',
    'images/smartcities small.jpg',
    'plugins/jquery-3.1.1.min.js',
    'scripts/javascript.js',
    'styles/style.css'
];


self.addEventListener('install', function(e){
    e.waitUntil(caches.open(cacheName).then(function(cache){
        return cache.addAll(filesToCache);
    }));
});

self.addEventListener('activate', function(e){
    e.waitUntil(caches.keys().then(function(keyList){
        return Promise.all(keyList.map(function(key){
            if(key !== cacheName){
                return caches.delete(key);
            }
        }));
    }));
});

self.addEventListener('fetch', function(e){
   e.respondWith(caches.match(e.request).then(function(response){
       return response || fetch(e.response);
   })); 
});

