const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	/* TODO: Separate extend theme out */
	theme: {
		extend: {
			fontFamily: {
				sans: ['Readex Pro', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				orange: colors.orange,
				primary: {
					DEFAULT: '#FFF7ED',
					darkMode: '#111827'
				},
				secondary: {
					DEFAULT: '#111827',
					darkMode: '#F9FAFB'
				},
				category: {
					DEFAULT: '#667EEA',
					frontend: '#065F46',
					devops: '#000'
				}
			},
			textColor: {
				primary: {
					DEFAULT: '#111827',
					darkMode: '#F9FAFB'
				},
				secondary: {
					DEFAULT: '#F9FAFB',
					darkMode: '#111827'
				}
			},
			borderColor: {
				primary: {
					DEFAULT: '#111827',
					darkMode: '#F9FAFB'
				},
				secondary: {
					DEFAULT: '#F9FAFB',
					darkMode: '#111827'
				}
			},
			backgroundColor: {
				primary: {
					DEFAULT: '#FFF7ED',
					darkMode: '#111827'
				},
				secondary: {
					DEFAULT: '#111827',
					darkMode: '#F9FAFB'
				}
			}
		}
	},

	/* TODO: Refactor plugin system */
	plugins: [
		plugin(({ addUtilities }) => {
			const newUtilities = {
				'.text-pcolor': {
					'@apply text-primary dark:text-primary-darkMode': {}
				},

				'.text-scolor': {
					'@apply text-secondary dark:text-secondary-darkMode': {}
				},

				'.border-pcolor': {
					'@apply border-primary dark:border-primary-darkMode': {}
				},

				'.border-scolor': {
					'@apply border-secondary dark:border-secondary-darkMode': {}
				},

				'.bg-pcolor': {
					'@apply bg-primary dark:bg-primary-darkMode': {}
				},

				'.bg-scolor': {
					'@apply bg-secondary dark:bg-secondary-darkMode': {}
				},

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
		})
	]
};

module.exports = config;
