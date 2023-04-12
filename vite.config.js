import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

const config = defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: path.resolve('./src/components'),
			$utils: path.resolve('./src/utils'),
			$stores: path.resolve('./src/stores'),
			$assets: path.resolve('./src/assets'),

			$dayjs: path.resolve('./src/lib/dayjs'),
			$cx: path.resolve('./src/lib/cx')
		}
	}
});

export default config;
