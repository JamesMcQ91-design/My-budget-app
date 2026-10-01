self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>e.respondWith(caches.open('budget-v1').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(x=>{c.put(e.request,x.clone());return x;})))));