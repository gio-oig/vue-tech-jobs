<template>
	<div class="jobs-container">
		<template v-for="i in jobs" :key="i">
			<job :title="i" />
		</template>
	</div>
</template>

<script>
import Job from './Job.vue';
export default {
	components: { Job },
	data() {
		return {
			jobs: ['senakis bazari', 'potis bordeli'],
		};
	},
	name: 'JobList',
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
