<template>
	<form>
		<h1 class="title">{{ $t('title.main') }}</h1>
		<div class="filter-btn-container">
			<filter-button txt="All" @handleCLick="filterJobs" />
			<filter-button txt="Development" id="1" @handleCLick="filterJobs" />
			<filter-button txt="Designe" id="2" @handleCLick="filterJobs" />
			<filter-button txt="Marketing" id="3" @handleCLick="filterJobs" />
			<filter-button txt="Product" id="4" @handleCLick="filterJobs" />
			<filter-button txt="DevOps" id="5" @handleCLick="filterJobs" />
			<filter-button txt="QA" id="6" @handleCLick="filterJobs" />
			<filter-button txt="AI" id="7" @handleCLick="filterJobs" />
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
	methods: {
		filterJobs(id) {
			this.setCategory(id || '');
		},
		...mapMutations(['setCategory']),
		...mapActions(['fetchJobsList']),
	},
	computed: {
		...mapState(['category']),
	},
	watch: {
		category() {
			this.fetchJobsList();
		},
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
