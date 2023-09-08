<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart';
const props = defineProps(['item'])
const router = useRouter()
const count = ref(1)
const cartStore=useCartStore()
</script>
<template>
  <div class="card-container">
    <div class="sub-container">
      <div class="fav-container">
        <v-icon class="fav-icon" color="rgb(88, 157, 77)" icon="mdi-heart-outline" size="35" />
      </div>
      <div
        class="image-container"
        @click="router.push({ path: `/product-details/${props.item._id}` })"
      >
        <img :src="props.item.image" :alt="props.item.name" />
      </div>
      <div class="product_text_container">
        <p class="title">{{ props.item.name.slice(0, 15) }}</p>
        <p>
          <span class="price">₹ {{ props.item.discountedPrice }}</span>
          <span v-if="props.item.salePrice > props.item.discountedPrice" class="discounted_price"
            >₹ {{ props.item.salePrice }}
          </span>
        </p>
      </div>
      <div class="button_container">
        <div class="quantity_container">
          <button :disabled="count === 1" @click="count--">-</button>
          <input type="text" disabled :value="count" />
          <button @click="count++">+</button>
        </div>
        <button class="add-button" @click="cartStore.addToCart({...props.item,quantity:count})">ADD</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  width: 18rem;
  margin-left: auto;
  margin-right: auto;
  height: 23rem;
  border-radius: 0.5rem;
  border: solid 1px #c5c3c3;
  margin: 0.5rem 0;
}
.sub-container {
  padding: 1rem;
}
.fav-container {
  height: 20%;
  text-align: end;
}
.image-container {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
}
.image-container img {
  height: 95%;
  cursor: pointer;
}
.image-container img:hover {
  height: 100%;
  transition-delay: 500ms height;
}
.product_text_container {
  height: 20%;
  text-align: center;
}
.product_text_container .title {
  font-size: 1.2rem;
  font-weight: 600;
}
.product_text_container .price {
  font-size: 1.6rem;
  color: rgba(89, 159, 78, 1);
}
.product_text_container .discounted_price {
  font-size: 1.4rem;
  margin-left: 0.2rem;
  color: #c5c3c3;
  text-decoration: line-through;
  font-weight: 600;
}
.button_container {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button_container .add-button {
  padding: 0.6rem 1.5rem;
  border: solid 1px rgba(89, 159, 78, 1);
  border-radius: 0.3rem;
  color: rgba(89, 159, 78, 1);
}
.button_container .add-button:hover {
  background-color: rgba(89, 159, 78, 1);
  color: white;
}
.button_container .quantity_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button_container .quantity_container button {
  background-color: #c5c3c3;
  color: rgba(89, 159, 78, 1);
  border-radius: 0.2rem;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.4rem;
}
.button_container .quantity_container button:hover {
  background-color: rgba(89, 159, 78, 1);
  color: white;
}
.button_container .quantity_container input {
  width: 40%;
  height: 3rem;
  text-align: center;
}
</style>
