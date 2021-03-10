<template>
	<div id="companies">
		<company
			v-for="company in companies"
			:key="company.id"
			:company="company"
		/>
	</div>
</template>

<script>
import Company from '../components/Company.vue';
import CompanyApi from '@/api/company';
export default {
	components: { Company },
	name: 'Companies',
	data() {
		return {
			companies: [],
		};
	},
	mounted() {
		CompanyApi.loadCompanies()
			.then((result) => {
				this.companies = result.data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
</script>

<style scoped>
#companies {
	display: grid;
	margin-top: 5rem;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
}

@media (max-width: 1300px) {
	#companies {
		grid-template-columns: repeat(3, 1fr);
	}
}
@media (max-width: 1000px) {
	#companies {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (max-width: 700px) {
	#companies {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
