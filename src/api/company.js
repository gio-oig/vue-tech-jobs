import Api from './api';
import Csrf from './csrf';

export default {
	async loadCompanies() {
		await Csrf.getCookie();

		return Api.get('/companies');
	},

	async loadCompanyJobs(slug) {
		await Csrf.getCookie();

		return Api.get(`/companies/${slug}/jobs`);
	},
};
