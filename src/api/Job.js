import Api from './api';
import csrf from './csrf';

export default {
	async loadJobs() {
		await csrf.getCookie();

		return Api.get('/jobs');
	},

	async loadJob(slug) {
		await csrf.getCookie();

		return Api.get(`/job/${slug}`);
	},
};
