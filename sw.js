const V='flip7-v1',F=['./','index.html','manifest.webmanifest','fonts/BarlowCondensed-Medium.ttf','fonts/BarlowCondensed-Bold.ttf','fonts/BarlowCondensed-ExtraBold.ttf','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Stale-while-revalidate : réponse immédiate depuis le cache, mise à jour en arrière-plan.
// Pour forcer une mise à jour des fichiers, changez le numéro de version V ci-dessus.
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
e.respondWith(caches.match(q,{ignoreSearch:true}).then(r=>{const n=fetch(q).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(q,cp))}return res}).catch(()=>r||caches.match('index.html'));return r||n}))});
