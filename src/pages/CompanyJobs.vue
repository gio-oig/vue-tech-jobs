<template>
	<div class="container" v-if="jobs.length">
		<job v-for="job in jobs" :job="job" :key="job.id" />
	</div>
</template>

<script>
import CompanyApi from '@/api/company';
import Job from '../components/Job.vue';
export default {
	components: { Job },
	name: 'CompanyJobs',
	data() {
		return {
			jobs: [],
		};
	},
	mounted() {
		const slug = this.$route.params.company;
		CompanyApi.loadCompanyJobs(slug)
			.then((result) => {
				console.log(result);
				this.jobs = result.data;
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				console.log(this.jobs);
			});
	},
};
</script>

<style scoped>
.container {
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 10px;
}
</style>
