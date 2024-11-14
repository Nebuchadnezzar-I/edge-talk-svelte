import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        sveltekit(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'EdgeTalk.ai',
                short_name: 'EdgeTalk',
                theme_color: '#09090b',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                icons: [
                    {
                        src: '',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
