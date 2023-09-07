<script setup>
import { onMounted, reactive } from 'vue'
import { getCategories, getBestSellers, getTrendingProducts } from '../service'
import { useRouter } from 'vue-router'
import ProductsSliderVue from '../components/ProductsSlider.vue'
import banner1 from '../utils/pictures/banners/banner 1.jpeg'
import banner2 from '../utils/pictures/banners/banner 2.jpeg'
import banner3 from '../utils/pictures/banners/banner3.jpeg'
import banner4 from '../utils/pictures/banners/banner4.jpeg'
import banner5 from '../utils/pictures/banners/banner5.jpeg'
import banner6 from '../utils/pictures/banners/banner6.jpeg'
import banner7 from '../utils/pictures/banners/banner 7.jpeg'

const apiData = reactive({ data: null, error: null, catLoading: false })
const bestSellerData = reactive({ data: [], error: null, loading: false })
const trendingData = reactive({ data: [], error: null, loading: false })
const router = useRouter()
const fetchCategories = async () => {
  apiData.catLoading = true
  getCategories('categories/web/list')
    .then((res) => {
      apiData.data = res.data.data
      apiData.catLoading = false
    })
    .catch((err) => {
      apiData.error = err
      apiData.catLoading = false
    })
}
const fetchBestSellers = async () => {
  bestSellerData.loading = true
  getBestSellers()
    .then((res) => {
      bestSellerData.data = res.data.data
      bestSellerData.loading = false
    })
    .catch((err) => {
      bestSellerData.error = err
      bestSellerData.loading = false
    })
}
const fetchTrendingItems = async () => {
  trendingData.loading = true
  getTrendingProducts()
    .then((res) => {
      trendingData.data = res.data.data
      trendingData.loading = false
    })
    .catch((err) => {
      trendingData.error = err
      trendingData.loading = false
    })
}
onMounted(() => {
  fetchCategories()
  fetchBestSellers()
  fetchTrendingItems()
})

const gotoProductList = (id) => {
  router.push({ path: `product-list/${id}` })
}
</script>
<template>
  <div class="item-container">
    <div class="upper-banner-container">
      <v-carousel hide-delimiters height="auto">
        <v-carousel-item :src="banner1"> </v-carousel-item>
        <v-carousel-item :src="banner2"> </v-carousel-item>
      </v-carousel>
    </div>
    <v-row class="category-banner-container">
      <v-col col="3" class="banner-card">
        <img :src="banner3" alt="category-banner" />
      </v-col>
      <v-col col="3" class="banner-card">
        <img :src="banner4" alt="category-banner" />
      </v-col>
      <v-col col="3" class="banner-card">
        <img :src="banner5" alt="category-banner" />
      </v-col>
      <v-col col="3" class="banner-card">
        <img :src="banner6" alt="category-banner" />
      </v-col>
    </v-row>
    <div class="home-category-container">
      <div
        v-for="item in apiData.data"
        :key="item._id"
        class="w-[6rem] text-center text-[0.8rem] font-medium"
        @click="gotoProductList(item._id)"
      >
        <div class="category-list">
          <img :src="item.coverImage" :alt="item.categoryName" />
        </div>
        <p>{{ item.categoryName }}</p>
      </div>
    </div>
    <ProductsSliderVue
      v-if="bestSellerData.data.length > 0"
      title="Best Seller Items"
      :data="bestSellerData.data"
    />
    <div class="home_secondary_banner_container">
      <img :src="banner7" alt="secondary_banner" />
    </div>
    <ProductsSliderVue
      v-if="trendingData.data.length > 0"
      title="Trending Items"
      :data="trendingData.data"
    />
  </div>
</template>
