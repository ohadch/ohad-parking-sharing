import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/pages/home/HomePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

const router = new VueRouter({
  routes
})

export default router
