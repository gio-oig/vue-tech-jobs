<template>
	<navigation-bar />
	<filter-container />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import { mapState } from 'vuex';
import FilterContainer from './components/FilterContainer.vue';
export default {
	name: 'App',
	components: {
		NavigationBar,
		FilterContainer,
	},
	methods: {
		increment() {
			this.$store.commit('increment');
			console.log(this.$store.state.count);
		},
	},
	computed: {
		...mapState({ count: 'count' }),
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
