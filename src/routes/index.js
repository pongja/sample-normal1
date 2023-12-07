import { createRouter, createWebHistory } from 'vue-router'

import Home from '~/components/Home.vue'
import Service from '~/components/Service.vue'
import News from '~/components/News.vue'
import NotFoundView from '~/components/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Service',
    name: 'Service',
    component: Service,
  },
  {
    path: '/News',
    name: 'News',
    component: News,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes,
})

export default router
