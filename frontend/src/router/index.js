import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/user-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserList,
    },
    {
      path: '/user/:id',
      name: 'UserPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/user-page.vue'),
    },
  ],
})

export default router
