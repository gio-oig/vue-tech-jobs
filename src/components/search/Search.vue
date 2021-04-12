<template>
	<div class="search-container">
		<div class="search-box">
			<div class="icon-container">
				<search-svg />
			</div>
			<input
				type="text"
				placeholder="Find your job"
				@input="handleInputSearch($event.target.value)"
			/>
		</div>
		<div class="search-gap"></div>
		<div class="filter-container">
			<filter-dropdown
				title="Seniority Level:"
				:current="currentLevel"
				:options="levels"
				@filter="filterByLevel"
			/>
			<div class="search-gap"></div>
			<filter-dropdown
				title="Location:"
				:current="curentLocation"
				:options="locations"
				@filter="filterByLocation"
			/>
		</div>
	</div>
</template>

<script>
import searchSvg from '@/components/svgs/searchSvg.vue';
import FilterDropdown from './FilterDropdown.vue';
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
	components: { searchSvg, FilterDropdown },
	data() {
		return {
			currentLevel: 'All',
			levels: ['junior', 'middle', 'senior', 'teamLead'],
			curentLocation: 'All',
			locations: ['remote', 'tbilisi', 'kutaisi', 'batumi'],
		};
	},
	methods: {
		handleInputSearch(input) {
			this.setQuery(input);
		},
		filterByLevel(level) {
			if (level === '') {
				this.currentLevel = 'All';
			} else {
				this.currentLevel = level.slice(0, 1).toUpperCase() + level.slice(1);
			}
			this.setLevel(level);
		},
		filterByLocation(location) {
			if (location === '') {
				this.curentLocation = 'All';
			} else {
				this.curentLocation =
					location.slice(0, 1).toUpperCase() + location.slice(1);
			}
			this.setLocation(location);
		},
		...mapMutations(['setQuery', 'setLevel', 'setLocation']),
		...mapActions(['fetchJobsList']),
	},
	computed: {
		...mapState(['query', 'level', 'jobLocation']),
	},
	watch: {
		query() {
			this.fetchJobsList();
			this.$router.replace({
				query: { ...this.$route.query, query: this.query },
			});
		},
		level() {
			this.fetchJobsList();
			this.$router.replace({
				query: { ...this.$route.query, level: this.level || 'All' },
			});
		},
		jobLocation() {
			console.log(this.jobLocation);
			this.fetchJobsList();
			this.$router.replace({
				query: { ...this.$route.query, location: this.location || 'All' },
			});
		},
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
	.search-box input {
		width: 100%;
	}
}

@media (max-width: 400px) {
	/* .filter-container {
		flex-direction: column;
	} */
}
</style>
