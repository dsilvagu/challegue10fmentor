/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lexend': ['"Lexend Deca Variable"', 'sans-serif'],
				'big': ['"Big Shoulders Display Variable"', 'system-ui']
			}
		},
		colors: {
			'fborange': 'hsl(31, 77%, 52%)',
			'pdcyan': 'hsl(184, 100%, 22%)',
			'pvdcyan': 'hsl(179, 100%, 13%)',
			'ptwhite': 'hsla(0, 0%, 100%, 0.75)',
			'pvlgray': 'hsl(0, 0%, 95%)'
		}
	},
	plugins: [],
}
