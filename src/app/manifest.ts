import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Berkan Öztürk - Portfolio',
        short_name: 'Berkan Öztürk - Portfolio',
        description: 'Berkan Öztürk - Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#f9fafb',
        theme_color: '#818cf8',
        icons: [
            {
                "src": "/web-app-manifest-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "/web-app-manifest-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
            }
        ],
    }
}