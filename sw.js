/* GPverse OnAir — service worker: funziona anche senza internet.
 * Strategia: prima la rete (così gli aggiornamenti arrivano subito), se manca la rete si usa la copia salvata. */
const CACHE = 'onair-v2.9.0';
const SHELL = ['./', './index.html', './onair.js', './lib/lame.min.js', './lib/webm-muxer.js', './manifest.webmanifest',
  './assets/logo.jpg', './assets/icon.png', './assets/icon-192.png', './assets/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const font = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (url.origin !== location.origin && !font) return;
  e.respondWith(fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return res; })
    .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined))));
});
