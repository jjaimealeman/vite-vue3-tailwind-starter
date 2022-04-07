import Home from './views/Home.vue'
import About from './views/About.vue'
import Colors from './views/Colors.vue'
import API from './views/API.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{
		component: Home,
		name: 'Home',
		meta: {
			title: 'Home Page'
		},
		path: '/'
	},
	{
		component: About,
		name: 'About',
		meta: {
			title: 'About Page'
		},
		path: '/about'
	},
	{
		component: Colors,
		name: 'Colors',
		meta: {
			title: 'Colors Test'
		},
		path: '/colors'
	},
	{
		component: API,
		name: 'API',
		meta: {
			title: 'API Listing'
		},
		path: '/api'
	},
	{
		component: NotFound,
		name: 'NotFound',
		meta: {
			title: 'Page Not Found'
		},
		path: '/:path(.*)'
	},
]
