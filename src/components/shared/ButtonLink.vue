<template>
	<router-link
		:to="path"
		class="btn-link"
		:class="{ invert: invert }"
		:style="{ width: width }"
		>{{ text }}</router-link
	>
</template>

<script>
export default {
	name: 'ButtonLink',
	props: {
		path: Object,
		invert: Boolean,
		text: String,
		width: String,
	},
};
</script>

<style scoped>
.btn-link.invert {
	color: #ffffff;
	background-color: #7b7ce6;
	border: none;
}
.btn-link:hover {
	color: #ffffff;
	background-color: #7b7ce6;
	border: none;
}
</style>
