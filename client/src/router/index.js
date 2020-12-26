import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
