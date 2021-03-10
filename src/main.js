import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import { createI18n } from 'vue-i18n';

import lang from './lang/languages';

const i18n = createI18n({
	locale: 'en',
	messages: lang,
	fallbackLocal: 'en',
});

const Vue = createApp(App);

Vue.use(router);
Vue.use(store);
Vue.use(i18n);

Vue.mount('#app');
