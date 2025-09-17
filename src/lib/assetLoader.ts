/**
 * Utility to handle asset loading with cache busting
 */

// Get the app version from env or use timestamp
const appVersion = import.meta.env.VITE_APP_VERSION || new Date().getTime().toString();

/**
 * Appends a version query parameter to static asset URLs to prevent caching issues
 * This acts as a fallback when service worker is not available
 * @param assetPath - The path to the static asset
 * @returns The asset path with a version query parameter
 */
export const getStaticAssetUrl = (assetPath: string): string => {
    // Don't modify external URLs or data URLs
    if (assetPath.startsWith('http') || assetPath.startsWith('data:')) {
        return assetPath;
    }

    // Add version as query parameter for cache busting
    const separator = assetPath.includes('?') ? '&' : '?';
    return `${assetPath}${separator}v=${appVersion}`;
};

/**
 * Sets up event listeners to handle resource loading errors
 * and attempts to reload them with cache busting.
 * This serves as a fallback when service workers are not available or fail.
 */
export const setupResourceErrorHandling = (): void => {
    // Skip in development mode to avoid interfering with HMR
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_DEV_ASSET_HANDLING !== 'true') {
        console.info('Resource error handling disabled in development mode');
        return;
    }

    window.addEventListener('error', (event) => {
        const target = event.target as HTMLElement;

        // Only handle script and stylesheet loading errors
        if (
            target instanceof HTMLScriptElement ||
            target instanceof HTMLLinkElement
        ) {
            const src = target instanceof HTMLScriptElement
                ? target.src
                : (target as HTMLLinkElement).href;

            if (src && !src.includes('v=')) {
                console.warn(`Resource failed to load: ${src}, attempting reload with cache busting`);

                // Create a new element with cache busting
                const newElement = document.createElement(
                    target instanceof HTMLScriptElement ? 'script' : 'link'
                );

                // Copy all attributes
                Array.from(target.attributes).forEach(attr => {
                    if (attr.name === 'src') {
                        (newElement as HTMLScriptElement).src = getStaticAssetUrl(attr.value);
                    } else if (attr.name === 'href') {
                        (newElement as HTMLLinkElement).href = getStaticAssetUrl(attr.value);
                    } else {
                        newElement.setAttribute(attr.name, attr.value);
                    }
                });

                // Replace the old element
                if (target.parentNode) {
                    target.parentNode.replaceChild(newElement, target);
                    event.preventDefault();
                }
            }
        }
    }, true);
};