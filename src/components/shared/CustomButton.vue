<template>
	<button v-if="noLink" class="btn-link" :class="{ invert: invert }">
		{{ txt }}
	</button>
	<router-link
		v-if="!noLink"
		:to="path"
		class="btn-link"
		:class="{ invert: invert }"
		>{{ txt }}</router-link
	>
</template>

<script>
export default {
	name: 'CustomButton',
	props: {
		noLink: Boolean,
		path: String,
		txt: String,
		invert: Boolean,
	},
	components: {},
};
</script>

<style>
.btn-link {
	padding: 1rem;
	margin-right: 8px;

	font-size: 1.8rem;
	font-weight: 500;
	text-decoration: none;

	color: #171725;
	background: none;
	border: 2px solid #f1f1f5;
	border-radius: 1rem;
	cursor: pointer;
	outline: none;

	transition: all 0.3s ease 0s;
}

.btn-link.invert {
	color: #ffffff;
	background-color: #7b7ce6;
	border: none;
}
/* 
@media (max-width: 1000px) {
	.btn-link
} */
</style>
