import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';

const Vue = createApp(App);

Vue.use(store);

Vue.mount('#app');
