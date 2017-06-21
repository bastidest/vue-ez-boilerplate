<template lang="pug">
	p {{ test }}
</template>

<script>
	export default {
		data() {
			return {
				test: "test"
			}
		}
	}
</script>

<style lang="sass">
	p
		color: #f00
</style>
