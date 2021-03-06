<template>
	<div class="job">
		<div class="job__header">
			<div class="img-wrapper">
				<img src="../assets/company.png" alt="company logo" />
			</div>
			<div class="job__header__info">
				<div class="company-name">company name</div>
				<div class="job-name">job name</div>
				<div class="tag-group">
					<div>Tags</div>
					<div class="tags">
						<div class="tag">#middle</div>
						<div class="tag">#remote</div>
						<div class="tag">#React</div>
						<div class="tag">#Git</div>
						<div class="tag">#HTML5</div>
					</div>
				</div>
			</div>
			<div class="job_general_info">
				<div class="grid">
					<div class="entry"><span>Filed:</span> Development</div>
					<div class="entry"><span>Location:</span> Tbilisi</div>
					<div class="entry"><span>SeniorityLevel:</span> Middle</div>
					<div class="entry"><span>Salary:</span> 4000ლ</div>
				</div>
			</div>
		</div>
		<div class="job_description">{{ job.description }}</div>
	</div>
</template>

<script>
import User from '../api/Job';
export default {
	name: 'Job',
	data() {
		return {
			job: {},
		};
	},
	mounted() {
		const slug = this.$route.params.slug;
		console.log(slug);
		User.loadJob(slug)
			.then((result) => {
				this.job = result.data;
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
</script>

<style scoped>
.job {
	width: 100%;
	max-width: 1300px;
	padding: 1rem;
	margin: 5rem auto 0 auto;
	border: 1px solid #f1f1f5;
	border-radius: 1rem;
}

.img-wrapper {
	width: 10rem;
	height: 10rem;
}

.img-wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border: 4px solid #f1f1f5;
	border-radius: 20px;
}

.company-name {
	margin: 5px 0;
	font-weight: 600;
	color: #7b7ce6;
	font-size: 1.6rem;
}

.job-name {
	font-size: 2.4rem;
	font-weight: 700;
	margin-bottom: 1rem;
}

.tag-group {
	display: flex;
	font-size: 1.4rem;
}

.tag-group > :first-child {
	color: #44444f;
	font-weight: 500;
	margin-right: 10px;
}

.tag-group .tags {
	display: flex;
}
.tag-group .tags .tag {
	margin-left: 6px;
	color: #0062ff;
}

.job_general_info {
	max-width: 500px;
	margin: 2rem 0;
}

.grid {
	display: grid;
	grid-gap: 5px;
	font-size: 16px;
	grid-template-columns: repeat(2, 1fr);
}

.grid span {
	font-weight: 700;
	color: #7b7ce6;
}

.job_description {
	color: #696974;
	font-size: 15px;
	padding-top: 2rem;
	line-height: 1.5;
	border-top: 1px solid #f1f1f5;
}
</style>
