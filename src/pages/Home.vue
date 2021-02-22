<template>
	<filter-container />
	<job-listing />
</template>

<script>
import FilterContainer from '../components/FilterContainer.vue';
import JobListing from '../components/JobListing.vue';
export default {
	components: { FilterContainer, JobListing },
};
</script>

<style>
body {
	overflow: hidden;
}
</style>
