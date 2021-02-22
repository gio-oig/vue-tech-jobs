import { createStore } from 'vuex';
import axios from 'axios';
import filter from './filter';
import urls from '../api/api';
import user from '../api/user';
import router from '../router/index';
const store = createStore({
	modules: {
		filter: filter,
	},
	state() {
		return {
			count: 0,
			user: '',
			api: 'http://127.0.0.1:8000/api/search/jobs',
			fieldId: '',
			query: '',
			jobs: [],
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		changeJobsList(state, newData) {
			state.jobs = newData;
		},
		updateQuery(state, newState) {
			state.query = newState;
		},
		setUser(state, payload) {
			state.user = payload;
		},
	},
	actions: {
		fetchJobsList({ commit, state }) {
			axios
				.get(`${urls.api}?query=${state.query}&fieldId=${state.fieldId}`)
				.then((res) => {
					commit('changeJobsList', res.data);
				});
		},
		loginUser({ commit }, form) {
			return new Promise((res, rej) => {
				user
					.login(form)
					.then((resp) => {
						commit('setUser', resp.data.user);
						res(resp.data.user);
					})
					.catch((error) => {
						rej(error);
					});
			});
		},
		logoutUser({ commit }) {
			user.logout().then(() => {
				commit('setUser', null);
				router.push({ name: 'login' });
			});
		},
	},
	getters: {
		getField(state) {
			return state.fieldId;
		},
	},
});

export default store;
