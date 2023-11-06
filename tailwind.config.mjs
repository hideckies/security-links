/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			lineClamp: {
				7: '7',
				8: '8',
				9: '9',
				10: '10'
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
