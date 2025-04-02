import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomeScreen from './Pages/HomeScreen.vue'

const routes= [
     { path : '/',component: HomeScreen}
];

const router=createRouter({
history : createWebHistory(),
routes
});


createApp(App).use(router).mount('#app')
