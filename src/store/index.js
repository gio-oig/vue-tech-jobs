import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			count: 0,
			user: null,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
});

export default store;
