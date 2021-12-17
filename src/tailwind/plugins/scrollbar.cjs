const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
	const newUtilities = {
		'.no-scrollbar': {
			'-ms-overflow-style': 'none' /* IE and Edge */,
			'scrollbar-width': 'none' /* Firefox */
		},
		'.no-scrollbar::-webkit-scrollbar': {
			display: 'none'
		},
		'.no-select': {
			'-webkit-touch-callout': 'none',
			'-webkit-user-select': 'none',
			'-khtml-user-select': 'none',
			'-moz-user-select': 'none',
			'-ms-user-select': 'none',
			'user-select': 'none'
		}
	};
	addUtilities(newUtilities);
});
