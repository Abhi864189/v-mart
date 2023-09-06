<script setup>
import ProductSliderCard from './ProductSliderCard.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { reactive } from 'vue'

const props = defineProps(['title', 'data'])
const data = reactive(props.data)
const breakpoints = {
  576: { itemsToShow: 1, snapAlign: 'center' },
  768: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  992: { itemsToShow: 4, snapAlign: 'center' },

  1024: {
    itemsToShow: 5,
    snapAlign: 'start'
  }
}
</script>
<template>
  <div class="home-product-slider-container">
    <div class="container_title">
      <p>{{ props.title }}</p>
      <router-link to="/">See more</router-link>
    </div>
    <Carousel :wrap-around="true" :autoplay="2000" :breakpoints="breakpoints">
      <Slide v-for="item in data" :key="item._id">
        <ProductSliderCard :item="item" />
      </Slide>
    </Carousel>
  </div>
</template>
<style scoped>
.home-product-slider-container .container_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
}
.home-product-slider-container .container_title p {
  font-size: 2rem;
  font-weight: 600;
}
.home-product-slider-container .container_title a {
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(89, 159, 78, 1);
}
</style>
