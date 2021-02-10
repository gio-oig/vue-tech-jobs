import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import LogIn from '../pages/LogIn.vue';

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
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

export default router;
