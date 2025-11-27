import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior() {
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KontaktView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
    },
    {
      path: '/brugermanual',
      name: 'brugermanual',
      component: () => import('../views/ManualView.vue'),
    },
    {
      path: '/omos',
      name: 'omos',
      component: () => import('../views/OmOsView.vue'),
    },
  ],
})

export default router
