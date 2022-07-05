import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import TodoCtrl from '../views/TodoCtrl.vue'
import TodoInfo from '../views/TodoInfo.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/',
    name: 'todo-ctrl',
    component: TodoCtrl
  },
  {
    path: '/todo-info',
    name: 'todo-info',
    component: TodoInfo
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
