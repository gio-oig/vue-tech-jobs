<template>
	<navigation-bar />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
export default {
	name: 'App',
	components: {
		NavigationBar,
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-size: 62.5%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	margin: auto;
	max-width: 1300px;
}
</style>
