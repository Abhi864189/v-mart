import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommonPage from '../views/CommonPage.vue'

const ProductList = () => import('../views/ProductList.vue')
const ProductDetails = () => import('../views/ProductDetails.vue')
const LoginPage = () => import('../views/LoginPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CommonPage,
      children: [
        {
          path: '',
          component: HomeView
        },
        {
          path: 'product-list/:id',
          component: ProductList
        },
        {
          path: 'product-details/:id',
          component: ProductDetails
        }
      ]
    },
    { path: '/login', component: LoginPage }
  ]
})

export default router
