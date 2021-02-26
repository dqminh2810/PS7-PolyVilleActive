import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router";
import axios from 'axios'

import swal from 'sweetalert2';
window.swal = swal;

const base = axios.create({baseURL: "http://localhost:9428"}); 

const app = createApp(App);
app.config.globalProperties.$http = base;
app.use(router);
app.mount('#app');
