import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/main.css'
import App from './App.vue'


import router from './router/router.js'

import { createApp } from 'vue'


const app = createApp(App);
app.use(router);

app.mount('#app');
