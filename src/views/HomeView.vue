<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import banner1 from '../utils/pictures/banners/banner 1.jpeg'
import banner2 from '../utils/pictures/banners/banner 2.jpeg'
import banner3 from '../utils/pictures/banners/banner3.jpeg'
import banner4 from '../utils/pictures/banners/banner4.jpeg'
import banner5 from '../utils/pictures/banners/banner5.jpeg'
import banner6 from '../utils/pictures/banners/banner6.jpeg'

const banners = ref(
  {
    src: '	https://aonemartstorageaccount.blob.core.windows.net/bannercontainer/1691488177211.jpeg'
  },
  { src: '	https://aonemartstorageaccount.blob.core.windows.net/bannercontainer/1691488197591.jpeg' }
)
</script>
<template>
  <Header></Header>
  <div class="item-container">
    <div class="upper-banner-container">
      <v-carousel hide-delimiters height="20rem">
        <v-carousel-item  :src="banner1"> </v-carousel-item>
        <v-carousel-item  :src="banner2"> </v-carousel-item>
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
  </div>
</template>
