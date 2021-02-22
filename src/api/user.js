import Api from './api';
import csrf from './csrf';

export default {
	async register(form) {
		await csrf.getCookie();

		return Api.post('/register', form);
	},

	async login(form) {
		await csrf.getCookie();

		return Api.post('/login', form);
	},

	async logout() {
		await csrf.getCookie();

		return Api.delete('/logout');
	},

	async auth() {
		return Api.get('/user');
	},
};
