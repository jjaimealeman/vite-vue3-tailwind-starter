import Home from './views/Home.vue'
import About from './views/About.vue'
import Colors from './views/Colors.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/about',
		name: 'About',
		component: About,
		meta: {
			title: 'About'
		},
		// example of route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import('./views/About.vue')
	},
	{
		path: '/colors',
		name: 'Colors',
		component: Colors,
		meta: {
			title: 'Colors'
		},
	},
	{
		path: '/:path(.*)',
		component: NotFound
	},
]
