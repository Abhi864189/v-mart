import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const isOpen = ref(false)
  const cartData = ref([])
  function openCart() {
    isOpen.value = true
  }
  function closeCart() {
    isOpen.value = false
  }
  function toggleCart() {
    isOpen.value = !isOpen.value
  }
  function addToCart(data) {
    cartData.value = [...cartData.value, data]
    isOpen.value = true
  }
  function deleteCartItem(id){
    cartData.value=cartData.value.filter((item)=>{
      return item._id!==id
    })
  }
  return { isOpen, cartData, openCart, closeCart, toggleCart, addToCart,deleteCartItem }
})
