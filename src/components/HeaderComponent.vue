<script setup>
import { ref } from 'vue'
import categoryDrawerComponent from './CategoryDrawer.vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import MyCartDrawer from './MyCartDrawer.vue'

const pinCodes = ref([
  { name: '74125,West-Bengal,Kolkata', value: '74125,West-Bengal,Kolkata' },
  { name: '74126,West-Bengal,Kolkata', value: '74126,West-Bengal,Kolkata' },
  { name: '74127,West-Bengal,Kolkata', value: '74127,West-Bengal,Kolkata' },
  { name: '74128,West-Bengal,Kolkata', value: '74128,West-Bengal,Kolkata' }
])
const router = useRouter()
const cartStore = useCartStore()
const categoryDrawer = ref(false)
const toggleCategoryDrawer = () => (categoryDrawer.value = !categoryDrawer.value)
</script>
<template>
  <header class="header-container">
    <div class="header-level">
      <p>Quality Products. Affordable Prices.</p>
    </div>
    <div class="header-sub-container">
      <div class="upper-sub-container border-b-[1px]">
        <v-row>
          <v-col class="pointer" cols="2" @click="router.push({ path: '/' })">V-Mart</v-col>
          <v-col cols="3">
            <v-select
              :items="pinCodes"
              item-title="name"
              item-value="value"
              variant="outlined"
              base-color="rgb(88, 157, 77)"
              label="Select Pin-Code"
            >
              <template v-slot:prepend-inner>
                <v-icon color="rgb(88, 157, 77)" icon="mdi-map-marker" />
              </template>
            </v-select>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              label="Search For Products"
              variant="outlined"
              base-color="rgba(89, 159, 78, 1)"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col cols="4" class="user-sub-container">
                <v-icon color="rgb(88, 157, 77)" icon="mdi-gift-outline" />
                <span class="ml-2">Offers</span>
              </v-col>
              <v-col cols="4" class="user-sub-container">
                <v-icon color="rgb(88, 157, 77)" icon="mdi-heart-outline" size="35" />
              </v-col>
              <v-col cols="4" class="user-sub-container">
                <v-icon
                  color="rgb(88, 157, 77)"
                  icon="mdi-account-circle-outline"
                  size="45"
                  @click="router.push({ path: '/login' })"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="lower-sub-container mt-[3px]">
        <v-row>
          <v-col
            cols="2"
            class="centered-items border-r-[2px] border-b-[1px] pointer"
            @click="toggleCategoryDrawer"
          >
            <v-icon icon="mdi-shape-outline" />
            <span class="ml-2">All Categories</span>
          </v-col>
          <v-col cols="8" class="nav-container border-b-[1px]">
            <router-link to="/">{{ $t('nav.home') }}</router-link>
            <router-link to="/about">New Products</router-link>
            <router-link to="/">Best Sellers</router-link>
          </v-col>
          <v-col
            cols="2"
            class="centered-items bg-[#599f4e] cart-button"
            @click="cartStore.openCart()"
          >
            <v-icon icon="mdi-cart-outline" color="white" />
            <span>Cart ({{ cartStore.cartData.length }})</span>
            <v-icon icon="mdi-menu-down" color="white" size="20" />
          </v-col>
        </v-row>
      </div>
    </div>
  </header>
  <v-navigation-drawer v-model="categoryDrawer" width temporary>
    <categoryDrawerComponent @toggle="toggleCategoryDrawer" />
  </v-navigation-drawer>
  <v-navigation-drawer v-model="cartStore.isOpen" width temporary location="right">
    <MyCartDrawer />
  </v-navigation-drawer>
</template>
