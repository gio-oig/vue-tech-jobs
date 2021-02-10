<template>
	<input
		:type="type"
		:value="value"
		@input="$emit('update:value', $event.target.value)"
	/>
</template>

<script>
export default {
	props: {
		value: String,
		type: String,
	},
};
</script>

<style>
input {
	width: 100%;
	padding: 1.5rem 1rem;
	border-radius: 15px;
	line-height: 1.5;

	font-size: 1.6rem;

	border: 2px solid transparent;
	outline: none;
	background: #e8f0fe;
}

input:focus {
	border: 2px solid #7b7ce6;
}
</style>
