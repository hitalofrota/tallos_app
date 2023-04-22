import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'

const routes = [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
        path: '/login',
        name: 'LoginScreen',
        component: LoginScreen
      },
      {
        path: '/register',
        name: 'RegisterScreen',
        component: RegisterScreen
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router