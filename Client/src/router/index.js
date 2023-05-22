
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue' // Example component for home route
import loginView from '@/views/loginView.vue' // Example component for loginView route
import myBudgetView from '@/views/myBudgetView.vue'
import registerView from '@/views/registerView.vue'

const routes = [
    { path: '/', name:"HomeView", component: HomeView },
    { path: '/loginView', name :"loginView", component: loginView },
    { path: '/myBudgetView', name :"myBudgetView", component: myBudgetView },
    { path: '/registerView', name :"registerView", component: registerView }
]
const router = createRouter({
  history: createWebHistory(),
  routes
  
})

export default {router, routes};


