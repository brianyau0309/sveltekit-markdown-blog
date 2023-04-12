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
			$components: path.resolve('./src/lib/components'),
			$utils: path.resolve('./src/lib/utils'),
			$dayjs: path.resolve('./src/lib/dayjs'),
			$stores: path.resolve('./src/stores'),
			$assets: path.resolve('./src/assets')
		}
	}
});

export default config;
