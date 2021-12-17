module.exports = [
	// @index('./*.cjs', (f, _) => `require('${f.path}.cjs'),`)
	require('./scrollbar.cjs'),
	require('./with-dark.cjs')
	// @endindex
];
