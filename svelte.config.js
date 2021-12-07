import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';
import mdsvexConfig from './mdsvex.config.cjs';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve('./src/lib/components'),
					$utils: path.resolve('./src/lib/utils'),
					$dayjs: path.resolve('./src/lib/dayjs'),
					$stores: path.resolve('./src/stores'),
					$assets: path.resolve('./src/assets')
				}
			}
		}
	},

	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	]
};

export default config;
