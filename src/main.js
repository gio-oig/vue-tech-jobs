import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

const Vue = createApp(App);

Vue.use(router);
Vue.use(store);

Vue.mount('#app');
