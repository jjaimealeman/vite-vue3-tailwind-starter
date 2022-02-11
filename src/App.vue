<template>
	<teleport to="head">
		<title>{{ $route.meta.title }}</title>
	</teleport>
	<div>
		<main>
			<router-view />
		</main>
		<header class="bg-white shadow" v-if="$route.meta.title">
			<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<h1
					@click="counter = 0"
					class="text-3xl font-bold leading-tight text-gray-900">
					{{ $route.meta.title }} / {{ counter }}
				</h1>
			</div>
		</header>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	let counter = ref(0);

	setInterval(() => {
		counter.value++;
	}, 1000);
</script>
