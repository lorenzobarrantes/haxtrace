import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HaxTrace',
    short_name: 'HaxTrace',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any'
      },
      {
        src: '/android-192.png',
        sizes: '192x192',
        type: 'image/png'
    },
    {
        src: '/android-512.png',
        sizes: '512x512',
        type: 'image/png'
    },
    {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
    },
    // {
    //     src: '/apple-icon.png',
    //     sizes: '180x180',
    //     type: 'image/png',
    //     purpose: 'any'
    // }
    ],
  }
}