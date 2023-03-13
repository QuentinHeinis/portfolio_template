import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/Admin/index.vue'
import AddPView from '../views/Admin/AddProject.vue'
import AddLView from '../views/Admin/AddLogo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/admin', name: 'admin', component: AdminView },
    { path: '/admin/addP', name: 'adminAdd', component: AddPView },
    { path: '/admin/addL', name: 'adminAddL', component: AddLView },
  ]
})

export default router
