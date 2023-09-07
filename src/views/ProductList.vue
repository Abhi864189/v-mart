<script setup>
import { watchEffect, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getItemsByCategoryData } from '../service'
import ProductSliderCardVue from '../components/ProductSliderCard.vue'
const route = useRoute()
const sortingOptions = [
  { name: 'Price Low to High', value: 0 },
  { name: 'Price High to Low', value: 1 }
]
const itemData = reactive({ data: [], error: '', loading: false })

const fetchItems = () => {
  itemData.loading = true
  getItemsByCategoryData(route.params.id, 1, 16)
    .then((res) => {
      console.log(res.data.data, 'from product list page')
      itemData.data = res.data.data
      itemData.loading = false
    })
    .catch((err) => {
      console.log(err, 'error')
      itemData.error = err
    })
}
watchEffect(fetchItems)
</script>
<template>
  <div class="item-container">
    <div class="product-list-title-container">
      <p>Product List</p>
      <div class="w-[20%]">
        <v-select
          :items="sortingOptions"
          item-title="name"
          item-value="value"
          variant="outlined"
          base-color="rgb(88, 157, 77)"
          label="Sorting Products"
        >
        </v-select>
      </div>
    </div>
    <div class="product_list_container">
      <div v-for="item in itemData.data" :key="item._id">
        <ProductSliderCardVue :item="item" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-list-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-list-title-container p {
  font-size: 1.5rem;
  font-weight: 800;
}
.product_list_container {
  margin: 0.5rem 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
}
.v-input__details {
  display: none;
}
</style>
