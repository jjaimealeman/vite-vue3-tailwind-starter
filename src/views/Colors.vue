<template>
	<Navigation />
	<div class="bg-gray-50">
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
				Colors Page
				<br />
				<span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<router-link
						to="/"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
						>Back Home</router-link>
				</div>
				<ButtonRepo />
			</div>
		</div>
		<!-- <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"> -->
		<div class="mx-auto px-4 py-12 w-full">

			<span class="bg-gray-100 text-gray-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-100 text-gray-900</span>
			<span class="bg-gray-200 text-gray-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-200 text-gray-800</span>
			<span class="bg-gray-300 text-gray-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-300 text-gray-700</span>
			<span class="bg-gray-400 text-gray-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-400 text-gray-600</span>
			<span class="bg-gray-500 text-gray-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-500 text-gray-900</span>
			<span class="bg-gray-600 text-gray-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-600 text-gray-400</span>
			<span class="bg-gray-700 text-gray-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-700 text-gray-300</span>
			<span class="bg-gray-800 text-gray-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-800 text-gray-200</span>
			<span class="bg-gray-900 text-gray-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-gray-900 text-gray-100</span>
			<hr>
			<span class="bg-red-100 text-red-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-100 text-red-900</span>
			<span class="bg-red-200 text-red-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-200 text-red-800</span>
			<span class="bg-red-300 text-red-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-300 text-red-700</span>
			<span class="bg-red-400 text-red-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-400 text-red-600</span>
			<span class="bg-red-500 text-red-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-500 text-red-900</span>
			<span class="bg-red-600 text-red-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-600 text-red-400</span>
			<span class="bg-red-700 text-red-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-700 text-red-300</span>
			<span class="bg-red-800 text-red-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-800 text-red-200</span>
			<span class="bg-red-900 text-red-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-red-900 text-red-100</span>
			<hr>
			<span class="bg-orange-100 text-orange-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-100 text-orange-900</span>
			<span class="bg-orange-200 text-orange-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-200 text-orange-800</span>
			<span class="bg-orange-300 text-orange-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-300 text-orange-700</span>
			<span class="bg-orange-400 text-orange-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-400 text-orange-600</span>
			<span class="bg-orange-500 text-orange-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-500 text-orange-900</span>
			<span class="bg-orange-600 text-orange-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-600 text-orange-400</span>
			<span class="bg-orange-700 text-orange-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-700 text-orange-300</span>
			<span class="bg-orange-800 text-orange-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-800 text-orange-200</span>
			<span class="bg-orange-900 text-orange-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-orange-900 text-orange-100</span>
			<hr>
			<span class="bg-yellow-100 text-yellow-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-100 text-yellow-900</span>
			<span class="bg-yellow-200 text-yellow-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-200 text-yellow-800</span>
			<span class="bg-yellow-300 text-yellow-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-300 text-yellow-700</span>
			<span class="bg-yellow-400 text-yellow-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-400 text-yellow-600</span>
			<span class="bg-yellow-500 text-yellow-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-500 text-yellow-900</span>
			<span class="bg-yellow-600 text-yellow-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-600 text-yellow-400</span>
			<span class="bg-yellow-700 text-yellow-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-700 text-yellow-300</span>
			<span class="bg-yellow-800 text-yellow-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-800 text-yellow-200</span>
			<span class="bg-yellow-900 text-yellow-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-yellow-900 text-yellow-100</span>
			<hr>
			<span class="bg-green-100 text-green-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-100 text-green-900</span>
			<span class="bg-green-200 text-green-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-200 text-green-800</span>
			<span class="bg-green-300 text-green-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-300 text-green-700</span>
			<span class="bg-green-400 text-green-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-400 text-green-600</span>
			<span class="bg-green-500 text-green-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-500 text-green-900</span>
			<span class="bg-green-600 text-green-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-600 text-green-400</span>
			<span class="bg-green-700 text-green-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-700 text-green-300</span>
			<span class="bg-green-800 text-green-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-800 text-green-200</span>
			<span class="bg-green-900 text-green-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-green-900 text-green-100</span>
			<hr>
			<span class="bg-teal-100 text-teal-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-100 text-teal-900</span>
			<span class="bg-teal-200 text-teal-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-200 text-teal-800</span>
			<span class="bg-teal-300 text-teal-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-300 text-teal-700</span>
			<span class="bg-teal-400 text-teal-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-400 text-teal-600</span>
			<span class="bg-teal-500 text-teal-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-500 text-teal-900</span>
			<span class="bg-teal-600 text-teal-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-600 text-teal-400</span>
			<span class="bg-teal-700 text-teal-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-700 text-teal-300</span>
			<span class="bg-teal-800 text-teal-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-800 text-teal-200</span>
			<span class="bg-teal-900 text-teal-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-teal-900 text-teal-100</span>
			<hr>
			<span class="bg-blue-100 text-blue-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-100 text-blue-900</span>
			<span class="bg-blue-200 text-blue-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-200 text-blue-800</span>
			<span class="bg-blue-300 text-blue-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-300 text-blue-700</span>
			<span class="bg-blue-400 text-blue-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-400 text-blue-600</span>
			<span class="bg-blue-500 text-blue-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-500 text-blue-900</span>
			<span class="bg-blue-600 text-blue-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-600 text-blue-400</span>
			<span class="bg-blue-700 text-blue-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-700 text-blue-300</span>
			<span class="bg-blue-800 text-blue-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-800 text-blue-200</span>
			<span class="bg-blue-900 text-blue-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-blue-900 text-blue-100</span>
			<hr>
			<span class="bg-indigo-100 text-indigo-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-100 text-indigo-900</span>
			<span class="bg-indigo-200 text-indigo-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-200 text-indigo-800</span>
			<span class="bg-indigo-300 text-indigo-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-300 text-indigo-700</span>
			<span class="bg-indigo-400 text-indigo-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-400 text-indigo-600</span>
			<span class="bg-indigo-500 text-indigo-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-500 text-indigo-900</span>
			<span class="bg-indigo-600 text-indigo-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-600 text-indigo-400</span>
			<span class="bg-indigo-700 text-indigo-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-700 text-indigo-300</span>
			<span class="bg-indigo-800 text-indigo-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-800 text-indigo-200</span>
			<span class="bg-indigo-900 text-indigo-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-indigo-900 text-indigo-100</span>
			<hr>
			<span class="bg-purple-100 text-purple-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-100 text-purple-900</span>
			<span class="bg-purple-200 text-purple-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-200 text-purple-800</span>
			<span class="bg-purple-300 text-purple-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-300 text-purple-700</span>
			<span class="bg-purple-400 text-purple-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-400 text-purple-600</span>
			<span class="bg-purple-500 text-purple-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-500 text-purple-900</span>
			<span class="bg-purple-600 text-purple-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-600 text-purple-400</span>
			<span class="bg-purple-700 text-purple-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-700 text-purple-300</span>
			<span class="bg-purple-800 text-purple-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-800 text-purple-200</span>
			<span class="bg-purple-900 text-purple-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-purple-900 text-purple-100</span>
			<hr>
			<span class="bg-pink-100 text-pink-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-100 text-pink-900</span>
			<span class="bg-pink-200 text-pink-800 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-200 text-pink-800</span>
			<span class="bg-pink-300 text-pink-700 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-300 text-pink-700</span>
			<span class="bg-pink-400 text-pink-600 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-400 text-pink-600</span>
			<span class="bg-pink-500 text-pink-900 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-500 text-pink-900</span>
			<span class="bg-pink-600 text-pink-400 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-600 text-pink-400</span>
			<span class="bg-pink-700 text-pink-300 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-700 text-pink-300</span>
			<span class="bg-pink-800 text-pink-200 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-800 text-pink-200</span>
			<span class="bg-pink-900 text-pink-100 block text-2xl text-center p-2 w-1/2 inline-block">bg-pink-900 text-pink-100</span>


		</div>
	</div>
</template>

<script setup>
	import ButtonRepo from "@/components/ButtonRepo.vue";
	import Navigation from "@/components/Navigation.vue";
</script>

<style>
	hr {
		margin: 1em 0;
	}
</style>
