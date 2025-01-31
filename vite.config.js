import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "short_name": "MyApp",
    "name": "MyApp",
    "icons": [
        {
            "src": "wireshark.png",
            "type": "image/png",
            "sizes": "192x192"
        },
        {
            "src": "wireshark.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff",
      },
    }),
  ],
});
