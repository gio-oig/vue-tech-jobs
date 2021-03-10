<template>
	<div class="jobs-container" v-if="jobs.length">
		<job v-for="job in jobs" :job="job" :key="job.id" />
	</div>
</template>

<script>
import Job from './Job.vue';
import { mapState, mapActions } from 'vuex';
export default {
	name: 'JobList',
	components: { Job },
	data() {
		return {
			loading: false,
		};
	},
	methods: {
		...mapActions(['loadJobs']),
	},
	computed: {
		...mapState(['jobs']),
	},
	watch: {
		jobs() {
			console.log(this.jobs);
		},
	},
	mounted() {
		this.loading = true;
		this.loadJobs().then(() => {
			this.loading = false;
		});
	},
};
</script>

<style>
.jobs-container {
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 10px;
}

@media (max-width: 500px) {
	.jobs-container {
		margin-top: 150px;
	}
}
/* @media (max-width: 450px) {
	.jobs-container {
		margin-top: 150px;
	}
} */
</style>
