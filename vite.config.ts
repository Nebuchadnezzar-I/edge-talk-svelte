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
            }
        }),
    ],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
