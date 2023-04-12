const { join } = require('path');

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: false,
		ellipses: false,
		backticks: false,
		dashes: false
	},

	layout: {
		blog: join(__dirname, './src/layouts/blog.svelte')
	},

	remarkPlugins: [],
	rehypePlugins: []
};

module.exports = config;
