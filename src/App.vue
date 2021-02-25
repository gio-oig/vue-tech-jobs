<template>
	<navigation-bar />
	<router-view />
</template>

<script>
import { mapState } from 'vuex';
import NavigationBar from './components/NavigationBar.vue';

export default {
	components: { NavigationBar },
	name: 'App',
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

/* @font-face {
  font-family:'markpro';
  src: url(./assets/fonts/MARKPRO.woff);
} */
</style>
