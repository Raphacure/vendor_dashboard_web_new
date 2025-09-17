import { registerSW } from 'virtual:pwa-register';

// This function registers the service worker and sets up automatic updates
export function registerServiceWorker() {
  // Skip in development mode
  if (import.meta.env.DEV) {
    console.info('Service worker registration skipped in development mode.');
    return;
  }

  // Register the service worker
  const updateSW = registerSW({
    onNeedRefresh() {
      // This function will be called when a new service worker has been installed
      // and is waiting to activate. You could show a notification to the user here.
      if (confirm('New content available. Reload to update?')) {
        updateSW(true);
      }
    },
    onOfflineReady() {
      // This function will be called when the service worker is ready to handle offline requests
      console.log('App ready to work offline');
    },
    immediate: true
  });
}

// Function to check if service worker is supported
export function isServiceWorkerSupported(): boolean {
  return 'serviceWorker' in navigator;
} 