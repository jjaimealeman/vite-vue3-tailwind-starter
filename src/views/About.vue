<template>
	<div class="bg-gray-50 pt-12">
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
				Learn a little bit About Me!?
				<br />
				<span class="text-teal-600">Vite + Vue 3 + Tailwind CSS</span>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<router-link
						to="/"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-teal-500 focus:outline-none"
						>Back Home</router-link>
				</div>
				<ButtonRepo />
			</div>
		</div>
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<p class="w-1/2 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptate dolore suscipit aut quis impedit facilis quia quas eum, ullam soluta doloribus tempora culpa molestiae ipsum tempore at labore animi cum minima ex. Voluptas corrupti omnis praesentium nihil voluptatem tempora eius cupiditate, libero perspiciatis dolorem officia possimus ex aliquam placeat ea ratione eveniet nostrum suscipit?</p>
			<p class="w-1/2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate minus aliquid corrupti possimus optio omnis neque ut. Nostrum molestiae maxime quasi, neque nisi rerum illum accusamus commodi ratione nam dolorum beatae eaque enim molestias voluptatibus qui. Illum, nihil reiciendis!</p>
		</div>
	</div>
</template>


<script setup>
	import ButtonRepo from "@/components/ButtonRepo.vue";
</script>
