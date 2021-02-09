<template>
	<div class="mob-menu" :class="{ active: isActive }">
		<a href="#">
			ვაკანსიები
		</a>
		<a href="#">
			კომპანიები
		</a>
		<a href="#">
			პროფილი
		</a>
		<a href="#">
			გასვლა
		</a>
	</div>
</template>

<script>
export default {
	name: 'MobMenu',
	props: {
		isActive: Boolean,
	},
};
</script>

<style>
.mob-menu {
	position: absolute;
	display: none;
	flex-direction: column;
	background: #fff;
	left: 0;
	right: 0;
	top: 100%;
	z-index: 10;
}

.mob-menu.active {
	display: flex;
}

.mob-menu a {
	padding: 1rem 0;
	text-decoration: none;
	font-size: 18px;
	border-top: 1px solid #dcdcdc;
}
</style>
