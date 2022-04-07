<template>
	<footer>
		<p>Copyright &copy; {{ year }} </p>
	</footer>
</template>


<script>
	import { computed } from 'vue'
	export default {
		setup () {
			const year = computed(() => new Date().getFullYear())
			return { year }
		}
	}
</script>


<style>
	footer {
		@apply bg-gray-800 text-white w-full border-2 border-t-blue-400 p-2 text-center;
	}
</style>
