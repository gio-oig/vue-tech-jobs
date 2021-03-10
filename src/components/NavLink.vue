<template>
	<router-link :to="to" class="nav-link">
		<div class="menu-icon-container" :style="{ backgroundColor: background }">
			<div class="menu-icon-wrapper">
				<div>
					<slot name="icon"></slot>
				</div>
			</div>
		</div>
		<div>{{ name }}</div>
	</router-link>
</template>

<script>
export default {
	props: {
		name: String,
		background: String,
		to: Object,
	},
	name: 'NavLink',
};
</script>

<style scoped>
a:hover {
	font-weight: 600;
}
</style>
