import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: resolve => require(['@/views/Home.vue'], resolve),
      }
    ]
  },
  {
    path: '/m',
    name: 'Mobile',
    // route level code-splitting
    // this generates a separate chunk (Mobile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Mobile" */ '../views/Mobile/Mobile.vue')
  },
  {
    path: '/m/login',
    name: 'Login',
    component: resolve => require(['@/views/Mobile/Login.vue'], resolve),
  },
  {
    path: '/m/register',
    name: 'Register',
    component: resolve => require(['@/views/Mobile/Register.vue'], resolve),
  }
]

const router = new VueRouter({
  routes
})

export default router
