const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				gray: colors.gray,
				orange: colors.orange,
				amber: colors.amber,
				yellow: colors.yellow,
				lime: colors.lime,
				green: colors.green,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				blue: colors.blue,
				rose: colors.rose
			},
			fontFamily: {}
		},
		fontFamily: {
			'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
			'serif': [...defaultTheme.fontFamily.serif],
			'mono': [...defaultTheme.fontFamily.mono],
			'quicksand': ['Quicksand', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: [],
};

module.exports = config;
