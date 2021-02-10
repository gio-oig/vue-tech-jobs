<template>
	<div>
		<svg
			class="burger"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H21C21.5523 10 22 9.55228 22 9C22 8.44772 21.5523 8 21 8Z"
			></path>
			<path
				d="M21 14H3C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14Z"
			></path>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'BurgerMenu',
};
</script>

<style scoped>
.burger {
	display: none;
}

@media (max-width: 1000px) {
	.burger {
		display: block;
		fill: #7b7ce6;
	}
}
</style>
