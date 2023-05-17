import './bootstrap';
import {createApp} from 'vue';
import "./assets/main.css";

const app = createApp({});
import App from './App.vue';

app.component('App', App);

app.mount('#app');