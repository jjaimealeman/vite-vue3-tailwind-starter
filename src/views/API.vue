<template>
	<div class="bg-gray-50 pt-12">
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
				Some of my favorite places to eat.
				<br />
				<div class="text-purple-600">Vite + Vue 3 + Tailwind CSS</div>
			</h2>
		</div>
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-bold leading-8 tracking-normal mb-8">Some of the Best Restaurants in Town!</h2>
			<p>Following this tutorial <a class="text-blue-500 underline" href="https://www.digitalocean.com/community/tutorials/how-to-use-vue-js-environment-modes-with-a-node-js-mock-data-layer" target="_blank">https://www.digitalocean.com/community/tutorials/how-to-use-vue-js-environment-modes-with-a-node-js-mock-data-layer</a>, and learning how to use mock data.</p>
			<section id="restaurant">
				<div v-if="error">
					{{ error }}
				</div>
				<div v-else>
					<p v-for="restaurant in restaurants" :key="restaurant.id">
						<h2>{{ restaurant.attributes.name }}</h2>

						<!-- BOTH THESE FORMATS WORK!!! -->
						<!-- <a :href="`${restaurant.attributes.url}`" target="_blank">{{ restaurant.attributes.url }}</a> -->
						<a :href="restaurant.attributes.url" target="_blank">{{ restaurant.attributes.url }}</a>

						<span>{{ restaurant.attributes.description }}</span>
					</p>
				</div>
			</section>

		</div>
	</div>
</template>


<script setup>
	import ButtonRepo from "@/components/ButtonRepo.vue";
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
		@apply block underline p-0 mb-2 hover:bg-purple-200 hover:text-purple-600 hover:pl-1 transition-all
	}
	#restaurant span {
		@apply prose;
	}
</style>
