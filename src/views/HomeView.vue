<script setup>
import { onMounted, reactive } from 'vue'
import { getCategories } from '../service'

import Header from '../components/Header.vue'
import banner1 from '../utils/pictures/banners/banner 1.jpeg'
import banner2 from '../utils/pictures/banners/banner 2.jpeg'
import banner3 from '../utils/pictures/banners/banner3.jpeg'
import banner4 from '../utils/pictures/banners/banner4.jpeg'
import banner5 from '../utils/pictures/banners/banner5.jpeg'
import banner6 from '../utils/pictures/banners/banner6.jpeg'

const apiData = reactive({ data: null, error: null, catLoading: false })

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
onMounted(() => {
  fetchCategories()
})

// const banners = ref(
//   {
//     src: '	https://aonemartstorageaccount.blob.core.windows.net/bannercontainer/1691488177211.jpeg'
//   },
//   { src: '	https://aonemartstorageaccount.blob.core.windows.net/bannercontainer/1691488197591.jpeg' }
// )
</script>
<template>
  <Header></Header>
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
      <div v-for="item in apiData.data" :key="item._id" class="w-[6rem] text-center text-[0.8rem] font-medium">
        <div class="category-list">
          <img :src="item.coverImage" :alt="item.categoryName" />
        </div>
        <p>{{ item.categoryName }}</p>
      </div>
    </div>
  </div>
</template>
