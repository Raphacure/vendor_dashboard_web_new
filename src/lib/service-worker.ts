/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

declare const self: ServiceWorkerGlobalScope;

import { clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';

// Use the '__WB_MANIFEST' injection point to generate a list of assets to precache
// This is replaced by the Vite PWA plugin during build
precacheAndRoute(self.__WB_MANIFEST);

// Claim clients immediately
clientsClaim();

// Skip waiting on install
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Set up App Shell-style routing
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip
    if (request.mode !== 'navigate') {
      return false;
    }

    // If this is a URL that starts with /_, skip
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // If this looks like a URL for a resource, skip
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL('/index.html')
);

// Cache static JS and CSS using StaleWhileRevalidate
registerRoute(
  ({ url }: { url: URL }) => 
    url.origin === self.location.origin && 
    (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')),
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Cache images with a CacheFirst strategy
registerRoute(
  ({ url }: { url: URL }) =>
    url.origin === self.location.origin && 
    url.pathname.match(/\.(png|jpg|jpeg|svg|gif|ico)$/),
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

// Cache fonts with a CacheFirst strategy
registerRoute(
  ({ url }: { url: URL }) => 
    url.origin === self.location.origin && 
    url.pathname.match(/\.(woff|woff2|ttf|eot)$/),
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      }),
    ],
  })
);

// Handle message to skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.