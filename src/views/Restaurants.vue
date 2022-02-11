<template>
	<Navigation />
	<div class="bg-gray-50">
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
				Ready to dive in today Fucker?
				<br />
				<div class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</div>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<router-link
						to="/about"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
						>About Page</router-link>
				</div>
				<ButtonRepo />
			</div>
		</div>
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-2xl font-bold leading-8 tracking-normal mb-8">Check out the
				<router-link to="/colors" class="text-indigo-600">Colors Page</router-link>.
			</h2>

			<h2 class="text-3xl font-bold leading-8 tracking-normal mb-8">Some of the Best Restaurants in Town!</h2>

			<section id="restaurant">
				<div v-if="error">
					{{ error }}
				</div>
				<div v-else>
					<p v-for="restaurant in restaurants" :key="restaurant.id">
						<h2>{{ restaurant.attributes.name }}</h2>
						<a :href="`${restaurant.attributes.url}`" target="_blank">{{ restaurant.attributes.url }}</a>
						<span>{{ restaurant.attributes.description }}</span>
					</p>
				</div>
			</section>

		</div>
	</div>
</template>

<script setup>
	import ButtonRepo from "@/components/ButtonRepo.vue";
	import Navigation from "@/components/Navigation.vue";
</script>

<script>
import axios from 'axios';
	export default {
		name: 'App',
		data () {
			return {
				restaurants: [],
				error: null
			}
		},
		async mounted () {
			try {
				const response = await axios.get('http://localhost:1337/api/restaurants')
				this.restaurants = response.data.data
			} catch (error) {
				this.error = error;
			}
		}
	}
</script>

<style scoped>
	#restaurant p {
		@apply py-4
	}
	#restaurant h2 {
		@apply text-2xl font-bold leading-8 tracking-normal mb-2
	}
	#restaurant a {
		@apply block underline p-0 mb-2 hover:bg-indigo-200 hover:text-indigo-600 hover:pl-1 transition-all
	}
	#restaurant span {
		@apply prose;
	}
</style>
