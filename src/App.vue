<template>
	<teleport to="head">
		<title>{{ $route.meta.title }}</title>
	</teleport>
	<main>
		<Navigation />
		<router-view />
	</main>
	<Footer />
</template>

<script setup>
	import Navigation from './components/Navigation.vue';
	import Footer from './components/Footer.vue'
</script>
