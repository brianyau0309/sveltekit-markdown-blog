import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve('./src/lib/components'),
			$utils: path.resolve('./src/lib/utils'),
			$dayjs: path.resolve('./src/lib/dayjs'),
			$stores: path.resolve('./src/stores'),
			$assets: path.resolve('./src/assets')
		}
	}
};

export default config;
