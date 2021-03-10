import { createStore } from 'vuex';
import axios from 'axios';
import filter from './filter';
import user from '../api/user';
import Job from '../api/Job';
import router from '../router/index';
const store = createStore({
	modules: {
		filter: filter,
	},
	state() {
		return {
			count: 0,
			user: '',
			query: '',
			category: '',
			level: '',
			jobs: [],
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		setJobs(state, jobList) {
			state.jobs = jobList;
		},
		setCategory(state, category) {
			state.category = category;
		},
		setQuery(state, newState) {
			state.query = newState;
		},
		setLevel(state, level) {
			state.level = level;
		},
		setUser(state, payload) {
			state.user = payload;
		},
	},
	actions: {
		fetchJobsList({ commit, state }) {
			axios
				.get(
					`http://127.0.0.1:8000/api/search/jobs?query=${state.query}&category=${state.category}&level=${state.level}`
				)
				.then((res) => {
					console.log(res);
					commit('setJobs', res.data);
				})
				.catch((err) => {
					console.log(err);
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
		loadJobs({ commit }) {
			Job.loadJobs().then((res) => {
				commit('setJobs', res.data);
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
