<script setup>
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
</script>
<template>
  <div class="w-[450px] p-[5px]">
    <div class="cart-title">
      <p>My Cart ({{ cartStore.cartData.length }})</p>
      <v-icon icon="mdi-window-close" class="pointer" @click="cartStore.closeCart()" />
    </div>
    <div v-if="cartStore.cartData.length > 0" class="cart-container">
      <v-card v-for="item of cartStore.cartData" class="cart-card" :key="item._id">
        <div class="image-container">
          <img :src="item.image" :alt="item.name" />
        </div>
        <div class="product_Details">
          <p class="name">{{ item.name }}</p>
          <div class="product_price">
            <p>{{ item.discountedPrice }}</p>
            <div class="button_container">
              <div class="quantity_container">
                <button>-</button>
                <input type="text" disabled :value="item.quantity" />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="delete-icon">
          <v-icon
            icon="mdi-trash-can-outline"
            class="pointer"
            @click="cartStore.deleteCartItem(item._id)"
          />
        </div>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.cart-title {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: rgba(89, 159, 78, 1);
  color: white;
  padding: 0.8rem 1rem;
}
.cart-container {
  padding-left: 1rem;
  padding-right: 0.5rem;
}
.cart-container .cart-card {
  display: grid;
  grid-template-columns: 4fr 7fr 1fr;
  height: 8rem;
  margin-top: 1rem;
}
.image-container {
  padding: 0.5rem;
}
.cart-container .cart-card img {
  height: 85%;
  cursor: pointer;
}
.cart-container .cart-card img:hover {
  height: 95%;
}
.delete-icon:hover {
  color: rgba(89, 159, 78, 1);
}
.product_Details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.product_Details .name {
  color: #868686;
}
.product_Details .product_price {
  display: flex;
  align-items: center;
}
.product_Details .product_price p {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(89, 159, 78, 1);
}
.button_container {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 30%;
  height: 3rem;
  text-align: center;
}
</style>
