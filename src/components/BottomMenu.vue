<template>
	<div class="bottom-menu-container">
		<a href="#">
			<home-svg />
		</a>
		<a href="#">
			<search-svg />
		</a>
		<a href="#">
			<profile-svg />
		</a>
	</div>
</template>

<script>
import HomeSvg from './svgs/HomeSvg.vue';
import ProfileSvg from './svgs/ProfileSvg.vue';
import SearchSvg from './svgs/searchSvg.vue';
export default {
	name: 'BottomMenu',
	components: { HomeSvg, SearchSvg, ProfileSvg },
};
</script>

<style>
.bottom-menu-container {
	position: fixed;
	bottom: 0;
	left: 0;
	/* display: flex; */
	justify-content: space-between;
	width: 100%;
	padding: 10px 10%;
	border-top: 1px solid #d3d3d3;
	z-index: 7;
	display: none;
}

@media (max-width: 1000px) {
	.bottom-menu-container {
		display: flex;
	}
}
</style>
