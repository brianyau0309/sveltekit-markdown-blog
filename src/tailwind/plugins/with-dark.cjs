const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
	const newUtilities = {
		'.text-primary-with-dark': {
			'@apply text-primary dark:text-primary-darkMode': {}
		},

		'.text-secondary-with-dark': {
			'@apply text-secondary dark:text-secondary-darkMode': {}
		},

		'.border-primary-with-dark': {
			'@apply border-primary dark:border-primary-darkMode': {}
		},

		'.border-secondary-with-dark': {
			'@apply border-secondary dark:border-secondary-darkMode': {}
		},

		'.bg-primary-with-dark': {
			'@apply bg-primary dark:bg-primary-darkMode': {}
		},

		'.bg-secondary-with-dark': {
			'@apply bg-secondary dark:bg-secondary-darkMode': {}
		}
	};
	addUtilities(newUtilities);
});
