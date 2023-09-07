import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommonPage from '../views/CommonPage.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'

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
    }
  ]
})

export default router
