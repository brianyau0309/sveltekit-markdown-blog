import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.cjs';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;
