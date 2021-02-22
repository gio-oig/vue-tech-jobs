import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import LogIn from '../pages/LogIn.vue';

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
		meta: {
			isSecured: true,
		},
	},
	{
		path: '/register',
		component: Register,
		name: 'register',
	},
	{
		path: '/login',
		component: LogIn,
		name: 'login',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some((record) => record.meta.isSecured)) {
// 		if (localStorage.getItem('Auth')) {
// 			next();
// 		} else {
// 			next({ name: 'login' });
// 		}
// 	} else {
// 		next();
// 	}
// });

export default router;
