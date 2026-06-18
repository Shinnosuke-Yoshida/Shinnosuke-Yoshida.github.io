const backgroundScript = '<script src="/assets/backgrounds.js" defer></script>';
const backgroundExcludedPaths = [
  '/miniconda-github/',
];

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.mode !== 'navigate') return;

  event.respondWith((async () => {
    const url = new URL(request.url);
    const response = await fetch(request);
    const type = response.headers.get('content-type') || '';
    if (!type.includes('text/html')) return response;

    const html = await response.text();
    const shouldSkipBackground = backgroundExcludedPaths.some((path) => url.pathname.startsWith(path));
    if (shouldSkipBackground || html.includes('/assets/backgrounds.js')) {
      return new Response(html, response);
    }

    return new Response(html.replace('</head>', `${backgroundScript}</head>`), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  })());
});
