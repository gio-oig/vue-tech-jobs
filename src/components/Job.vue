<template>
	<div class="job-container">
		<div class="job-item">
			<div class="job-start">
				<div class="company-logo">
					<img src="../assets/company.png" alt="" />
				</div>
				<div class="job-details">
					<div class="job-title">{{ title }}</div>
					<div class="company-name">Blocshop</div>
				</div>
			</div>

			<div class="job-description">
				<div class="hashtags">
					<div class="hashtag">#junior</div>
					<div class="hashtag">#remote</div>
					<div class="hashtag">#PHP</div>
					<div class="hashtag">#Laravel</div>
				</div>
				<div class="add-date">
					<div class="date-dot"></div>
					<h1>Added 3 Hours ago</h1>
				</div>
			</div>

			<div class="job-buttons">
				<button class="salary-btn">₾ Salary</button>
				<button class="details-btn">Details</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Job',
	props: ['title'],
};
</script>

<style>
.job-container {
	margin: 0.7rem 0;
}

.job-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 20px;
	border-radius: 20px;
	border: 1px solid #eaeaea;
}

.job-start {
	display: flex;
	align-items: center;
}

.company-logo {
	height: 44px;
	width: 44px;
	border-radius: 18px;
	border: 2px solid #eaeaea;
	margin-right: 20px;
}

.company-logo img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 18px;
}

.job-title {
	font-size: 16px;
	color: #171725;
	margin-bottom: 2px;
	font-weight: 600;
	letter-spacing: 0.5px;
}

.company-name {
	font-size: 16px;
	color: #171725;
	opacity: 0.3;
	font-weight: 500;
}

.date-dot {
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background: #18c729;
	margin-right: 7px;
}

.add-date h1 {
	font-size: 12px;
	color: #696974;
	opacity: 0.5;
	font-weight: 500;
}

.add-date {
	display: flex;
	align-items: center;
}

.hashtags {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 3px;
}

.hashtag {
	color: #0062ff;
	font-size: 14px;
	font-weight: 500;
	margin-right: 10px;
	line-height: 18px;
	/* font-family: 'markpro'; */
}

.job-buttons {
	display: flex;
}

.job-buttons .salary-btn {
	font-size: 15px;
	background: #eaeaef;
	border-radius: 10px;
	border: none;
	outline: none;
	color: #171725;
	box-shadow: 0px 0px 0px 2px #fafafb;
	height: 48px;
	width: 100px;
	/* font-family: 'markpro'; */
}
.job-buttons .details-btn {
	font-size: 15px;
	background: #7b7ce6;
	border-radius: 10px;
	border: none;
	outline: none;
	color: #ffffff;
	font-weight: 700;
	box-shadow: 0px 0px 0px 2px #fafafb;
	height: 48px;
	width: 100px;
	margin-left: 15px;
	/* font-family: 'markpro'; */
}

@media (max-width: 600px) {
	.job-item {
		flex-direction: column;
		align-items: flex-start;
	}

	.job-description {
		margin: 2.5rem 0;
	}
	.job-buttons {
		width: 100%;
	}
	.job-buttons button {
		flex: 1;
	}
}
</style>
