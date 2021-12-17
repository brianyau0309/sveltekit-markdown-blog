const theme = require('./src/tailwind/theme/index.cjs');
const plugins = require('./src/tailwind/plugins/index.cjs');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme,
	plugins
};

module.exports = config;
