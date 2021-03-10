<template>
	<div class="company">
		<div class="company__header">
			<img src="../assets/company.png" alt="" />
			<div>
				<div class="name title-bold">{{ company.name }}</div>
				<div class="secondary-text">{{ company.filed }}</div>
			</div>
		</div>
		<div class="company__body">
			<div class="job-status">
				<div class="count">{{ company.jobs_count }}</div>
				<div class="label">Active Jobs</div>
			</div>
		</div>
		<!-- <custom-button :noLink="true" txt="View Jobs" width="100%" /> -->
		<button-link
			:path="{
				name: 'companyJobs',
				params: { company: company.slug },
			}"
			text="View Jobs"
			width="100%"
		/>
	</div>
</template>

<script>
import ButtonLink from './shared/ButtonLink.vue';
// import CustomButton from './shared/CustomButton.vue';
export default {
	components: { ButtonLink },
	name: 'Company',
	props: {
		company: Object,
	},
};
</script>

<style>
.title-bold {
	color: #171725;
	font-weight: bold;
}
.company {
	padding: 10px;
	border-radius: 1rem;
	box-shadow: 0px 5px 60px 10px #f0f3fb;
}

.company__header img {
	width: 100px;
	height: 100px;
	border-radius: 30px;
	/* border: 2px solid #b5b5be; */
	box-shadow: 0px 5px 30px #f0f3fb;
	/* box-shadow: 0px 5px 60px 10px #f0f3fb; */
}

.company__header {
	display: flex;
	align-items: center;
}

.company__header .name {
	font-size: 1.6rem;
}
.company__header .secondary-text {
	font-size: 1.4rem;
	color: #b5b5be;
}

.company__header > div {
	padding-left: 10px;
}

.company__body {
	padding: 15px 0;
}
.job-status {
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
}

.job-status .count {
	font-size: 16px;
}

.job-status .label {
	font-size: 14px;
	color: #b5b5be;
}
</style>
