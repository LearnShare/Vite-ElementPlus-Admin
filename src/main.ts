import {
  createApp,
} from 'vue';
import ElementPlus from 'element-plus';

import './css/base.scss';
import 'element-plus/dist/index.css';

import App from './app.vue';

import router from './router';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.mount('#app');
