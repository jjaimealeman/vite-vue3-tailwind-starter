<!-- This example requires Tailwind CSS v2.0+ -->
<template>

    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

			<router-link
				class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
				to="/">
				Home
			</router-link>
			<router-link
				class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
				to="/about">
				About
			</router-link>
			<router-link
				class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
				to="/colors">
				Colors
			</router-link>
			<router-link
				class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
				to="/restaurants">
				Restaurants
			</router-link>
			<router-link
				class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
				to="/NotFound">
				404
			</router-link>

        </div>
    </nav>
</template>

<script>
</script>
