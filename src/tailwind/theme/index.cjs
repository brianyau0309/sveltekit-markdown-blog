const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const primary = '#FFF7ED';
const primaryDark = '#111827';
const secondary = '#111827';
const secondaryDark = '#F9FAFB';

const theme = {
	extend: {
		fontFamily: {
			sans: ['Readex Pro', ...defaultTheme.fontFamily.sans]
		},
		colors: {
			orange: colors.orange,
			primary: {
				DEFAULT: primary,
				darkMode: primaryDark
			},
			secondary: {
				DEFAULT: secondary,
				darkMode: secondaryDark
			},
			category: {
				DEFAULT: '#667EEA',
				frontend: '#065F46',
				devops: '#000',
				bug: '#F56565'
			}
		},
		textColor: {
			primary: {
				DEFAULT: secondary,
				darkMode: secondaryDark
			},
			secondary: {
				DEFAULT: secondaryDark,
				darkMode: primaryDark
			}
		},
		borderColor: {
			primary: {
				DEFAULT: secondary,
				darkMode: secondaryDark
			},
			secondary: {
				DEFAULT: secondaryDark,
				darkMode: primaryDark
			}
		},
		backgroundColor: {
			primary: {
				DEFAULT: primary,
				darkMode: primaryDark
			},
			secondary: {
				DEFAULT: secondary,
				darkMode: secondaryDark
			}
		}
	}
};

module.exports = theme;
