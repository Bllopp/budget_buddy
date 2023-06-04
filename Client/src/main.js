import { createApp } from 'vue';
import App from './App.vue';


createApp(App).mount('#app')
app.config.globalProperties.emitter = mitt();
app.mount('#app')
