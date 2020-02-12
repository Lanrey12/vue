import Vue from 'vue'
import VueRouter from 'vue-router'

import HobbyPage from './components/Hobby.vue'
import SignInPage from './components/auth/signin.vue'
import SignUpPage from './components/auth/signup.vue'


Vue.use(VueRouter)




export const routes = [
  {path: '', component: SignUpPage, name: 'SignUp'},
  {path: '/signin', component: SignInPage, name: 'SignIn'},
  { path: '/dashboard', component: HobbyPage, name: 'Home' },
]

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
 })