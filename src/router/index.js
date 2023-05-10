import {createRouter, createWebHashHistory} from 'vue-router'
import GlobalFeedView from '@/views/GlobalFeedView'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeedView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
