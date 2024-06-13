import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompactView from '../views/CompactView.vue'
import DslrView from '../views/DslrView.vue'
import FilmView from '../views/FilmView.vue'
import MirrorlessView from '../views/MirrorlessView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import ProfessionalView from '../views/ProfessionalView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import CreateOrderFormView from '../views/CreateOrderFormView.vue'
import OrderView from '../views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products-compact',
      name: 'compact',
      component: CompactView
    },
    {
      path: '/products-film',
      name: 'film',
      component: FilmView
    },
    {
      path: '/products-mirrorless',
      name: 'mirrorless',
      component: MirrorlessView
    },
    {
      path: '/product',
      name: 'singleProduct',
      component: SingleProductView
    },
    {
      path: '/products-dslr',
      name: 'dslr',
      component: DslrView
    },
    {
      path: '/products-professional',
      name: 'professional',
      component: ProfessionalView
    },
    {
      path: '/create-order',
      name: 'createOrder',
      component: CreateOrderFormView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: PageNotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
