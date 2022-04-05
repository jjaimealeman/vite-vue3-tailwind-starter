import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({

	// plugins: [vue()],

	// Sunday, February 20, 2022 @ 10:05:17 PM
	// https://youtu.be/PbKWt-_oI3Q
	// an 'opt-in' compiler time macro.
	plugins: [
		vue({
			reactivityTransform: true
		}),
	],

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		open: true,
	},
})
