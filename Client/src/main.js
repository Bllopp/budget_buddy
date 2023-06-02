import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import mitt from 'mitt';

const app = createApp(App)
app.use(router);
app.config.globalProperties.emitter = mitt();
app.mount('#app')
