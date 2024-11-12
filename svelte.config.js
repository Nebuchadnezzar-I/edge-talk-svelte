import adapter from 'amplify-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
        alias: {
            "@/*": "./path/to/lib/*",
        },
		adapter: adapter()
	}
};

export default config;
