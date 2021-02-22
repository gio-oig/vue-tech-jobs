<template>
	<div class="search-container">
		<div class="search-box">
			<div class="icon-container">
				<search-svg />
			</div>
			<input type="text" placeholder="Find your job" />
		</div>
		<div class="search-gap"></div>
		<div class="filter-container">
			<filter-dropdown title="Seniority Level:" @filter="filter" />
			<div class="search-gap"></div>
			<filter-dropdown title="Seniority Level:" />
		</div>
	</div>
</template>

<script>
import searchSvg from '@/components/svgs/searchSvg.vue';
import FilterDropdown from './FilterDropdown.vue';
export default {
	components: { searchSvg, FilterDropdown },
	methods: {
		filter(name) {
			console.log(name);
		},
	},
	mounted() {
		// this.$router.replace({ query: { plane: 'private' } });
		// console.log(this.$route);
	},
};
</script>

<style scoped>
.search-container {
	position: relative;
	display: flex;
	padding: 1.5rem 2rem;

	box-shadow: 0px 0px 60px 10px rgb(0 0 0 / 7%);
	border-radius: 15px;
}

.search-box {
	display: flex;
	flex: 1;
	align-items: stretch;
}

.search-box input {
	font-size: 1.5rem;
	flex: 1;
	border: none;
	outline: none;
}

.icon-container {
	width: 4rem;
	height: 4rem;
	margin-right: 2rem;

	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 1.25rem;
	border-radius: 50%;
	background-color: #f1f1f5;
}

.search-gap {
	width: 1px;
	margin: 0 1.5rem;
	background-color: #f4f4f7;
}

.filter-container {
	display: flex;
}

@media (max-width: 1000px) {
	.search-gap {
		display: none;
	}
}

@media (max-width: 500px) {
	.filter-container {
		position: absolute;
		top: 100px;
		width: 90%;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}

@media (max-width: 400px) {
	/* .filter-container {
		flex-direction: column;
	} */
}
</style>
