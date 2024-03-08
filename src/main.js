import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import MenuPage from './pages/MenuPage.vue'
import ErrorPage404 from './pages/ErrorPage404.vue'


const routes = [
    { path: '/', component: HomePage, name: 'landing-page', alias: '/landing'},
    { path: '/login', component: LoginPage},
    {path: '/menu', component: MenuPage},
    { path: '/:pathMatch(.*)*', component: ErrorPage404 }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})
   
const app = createApp(App)

app.use(router)

app.mount('#app')
