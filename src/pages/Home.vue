<template>
	<filter-container />
	<job-list />
</template>

<script>
import FilterContainer from '../components/FilterContainer.vue';
import JobList from '../components/JobList.vue';
export default {
	components: { FilterContainer, JobList },
};
</script>

<style>
body {
	overflow-x: hidden;
}
</style>
