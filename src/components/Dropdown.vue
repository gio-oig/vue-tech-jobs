<template>
	<div class="dropdown-conatiner" :class="{ active: isActive }">
		<slot name="default"></slot>
	</div>
</template>

<script>
export default {
	name: 'DropDown',
	props: {
		isActive: Boolean,
	},
};
</script>

<style>
.dropdown-conatiner {
	position: absolute;
	visibility: hidden;
	pointer-events: none;
}

.dropdown-conatiner.active {
	visibility: visible;
	pointer-events: all;
}

.dropdown-conatiner ul {
	padding: 10px;
	box-shadow: 0px 5px 40px 10px rgb(240 243 251 / 70%);
	background: #fff;
	border-radius: 12px;
	list-style: none;
}

.dropdown-conatiner ul li {
	display: flex;
}

.dropdown-conatiner ul a {
	font-size: 20px;
	text-decoration: none;
	color: #171725;
	width: 100%;
	padding: 10px 0;
}
</style>
