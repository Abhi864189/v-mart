<script setup>
import ProductSliderCard from './ProductSliderCard.vue'
import { Carousel, Slide } from 'vue3-carousel'
import { reactive } from 'vue'

const props = defineProps(['title', 'data'])
const data = reactive(props.data)
const breakpoints = {
  576: { itemsToShow: 1, snapAlign: 'start' },
  768: {
    itemsToShow: 2,
    snapAlign: 'start'
  },
  992: { itemsToShow: 4, snapAlign: 'center' },

  1024: {
    itemsToShow: 5,
    snapAlign: 'center'
  }
}
</script>
<template>
  <div class="home-product-slider-container">
    <div class="container_title">
      <p>{{ props.title }}</p>
      <router-link to="/">See more</router-link>
    </div>
    <Carousel
      :wrap-around="true"
      :autoplay="2000"
      :breakpoints="breakpoints"
      :pause-autoplay-on-hover="true"
      :transition="500"
    >
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
/* .carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
} */
</style>
