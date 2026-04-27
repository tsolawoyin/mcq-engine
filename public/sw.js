// ============================================================
// DAC Service Worker — Offline-first caching
// ============================================================
// Bump this version when you deploy to clear old caches.
// The browser detects sw.js changed → installs new SW →
// activate event wipes stale caches → next visit is fresh.
const CACHE_VERSION = "dac-v3";

// ---- INSTALL ------------------------------------------------
// Nothing to precache — we cache lazily as the user navigates.
// skipWaiting() tells the new SW to take over immediately
// instead of waiting for all tabs to close.
self.addEventListener("install", () => {
  self.skipWaiting();
});

// ---- ACTIVATE -----------------------------------------------
// Delete any caches that don't match the current version.
// This is how deploys bust stale assets.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  // Claim all open tabs so the new SW serves them immediately
  self.clients.claim();
});

// ---- FETCH --------------------------------------------------
// Two strategies based on request type:
//
// 1. Navigation (HTML pages) → Network-first
//    Try the network. If it works, cache the response and serve it.
//    If offline, fall back to the cached version.
//
// 2. Static assets (JS, CSS, images, fonts) → Stale-while-revalidate
//    Serve from cache instantly for speed. Meanwhile, fetch the
//    fresh version from the network and update the cache silently.
//    Next visit gets the updated asset.
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests — let POST/PUT/etc pass through
  if (request.method !== "GET") return;

  // Skip chrome-extension, devtools, etc.
  if (!request.url.startsWith("http")) return;

  if (request.mode === "navigate") {
    // ---- Strategy 1: Network-first for page navigations ----
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone before caching because response body can only be read once
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          // Offline — try the cache
          caches.match(request)
        )
    );
  } else {
    // ---- Strategy 2: Stale-while-revalidate for assets ----
    event.respondWith(
      caches.open(CACHE_VERSION).then((cache) =>
        cache.match(request).then((cached) => {
          // Fire off network fetch regardless — updates cache in background
          const networkFetch = fetch(request).then((response) => {
            cache.put(request, response.clone());
            return response;
          });

          // Return cached version immediately, or wait for network if no cache
          return cached || networkFetch;
        })
      )
    );
  }
});
