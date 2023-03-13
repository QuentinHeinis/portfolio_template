import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/Admin/index.vue'
import AddView from '../views/Admin/AddProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/admin', name: 'admin', component: AdminView },
    { path: '/admin/add', name: 'adminAdd', component: AddView },
  ]
})

export default router
