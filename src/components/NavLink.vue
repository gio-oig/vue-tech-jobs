<template>
	<a href="#" class="nav-link">
		<div class="menu-icon-container" :style="{ backgroundColor: background }">
			<div class="menu-icon-wrapper">
				<div>
					<slot name="icon"></slot>
				</div>
			</div>
		</div>
		<div>{{ name }}</div>
	</a>
</template>

<script>
export default {
	props: {
		name: String,
		background: String,
	},
	name: 'NavLink',
};
</script>

<style></style>
