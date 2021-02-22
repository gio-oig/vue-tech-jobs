<template>
	<form>
		<h1 class="title">Find a slave</h1>
		<div class="filter-btn-container">
			<filter-button txt="All" />
			<filter-button txt="Development" />
			<filter-button txt="Designe" />
			<filter-button txt="Marketing" />
			<filter-button txt="Product" />
			<filter-button txt="DevOps" />
			<filter-button txt="QA" />
			<filter-button txt="AI" />
		</div>
		<search />
	</form>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Search from './search/Search';
import FilterButton from './search/FilterButton';
export default {
	components: { FilterButton, Search },
	data() {
		return {
			query: '',
		};
	},
	methods: {
		...mapActions(['fetchJobsList']),
		...mapMutations(['updateQuery']),
	},
	computed: {
		...mapState(['jobs']),
	},
	watch: {
		query() {
			this.updateQuery(this.query);
			this.fetchJobsList();
		},
	},
	mounted() {
		// this.fetchJobsList();
	},
};
</script>

<style scoped>
form {
	margin: 0 10px;
}
.title {
	font-size: 3.5rem;
	line-height: 3rem;
	margin: 5rem 0 3rem 0;
}

.filter-btn-container {
	display: flex;
	padding: 2px;
	overflow-x: scroll;
	margin-bottom: 2rem;
}

.filter-btn-container::-webkit-scrollbar {
	display: none;
}

@media (max-width: 1000px) {
	.filter-btn-container {
		margin: 0 -5px 2rem -5px;
	}
}
</style>
