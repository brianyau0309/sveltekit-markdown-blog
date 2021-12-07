const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				primary: '#FFF7ED',
				secondary: '#111827',
				darkMode: {
					primary: '#111827',
					secondary: '#F9FAFB'
				}
			},
			textColor: {
				primary: '#111827',
				secondary: '#F9FAFB',
				darkMode: {
					primary: '#F9FAFB',
					secondary: '#111827'
				}
			},
			borderColor: {
				primary: '#111827',
				secondary: '#F9FAFB',
				darkMode: {
					primary: '#F9FAFB',
					secondary: '#111827'
				}
			},
			backgroundColor: {
				primary: '#FFF7ED',
				secondary: '#111827',
				darkMode: {
					primary: '#111827',
					secondary: '#F9FAFB'
				}
			}
		}
	},

	plugins: [
		plugin(({ addUtilities }) => {
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
		})
	]
};

module.exports = config;
