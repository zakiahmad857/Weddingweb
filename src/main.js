import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VuePlyr from 'vue-plyr';

import 'vue-plyr/dist/vue-plyr.css';

createApp(App)
  .use(VuePlyr)
  .use(store)
  .use(router)
  .mount('#app');
