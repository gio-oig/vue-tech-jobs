import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Register from '@/pages/Register.vue';
import LogIn from '@/pages/LogIn.vue';
import Job from '@/pages/Job.vue';
import Companies from '@/pages/Companies.vue';
import CompanyJobs from '@/pages/CompanyJobs.vue';

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
	{
		path: '/job/:slug',
		component: Job,
		name: 'job',
	},
	{
		path: '/jobs',
		component: Companies,
		name: 'jobs',
	},
	{
		path: '/companies',
		component: Companies,
		name: 'companies',
	},
	{
		path: '/:company/jobs',
		component: CompanyJobs,
		name: 'companyJobs',
	},
	{
		path: '/admin',
		component: CompanyJobs,
		name: 'companyJobs',
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
