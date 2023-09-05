<script setup>
import { onMounted, onUpdated, reactive } from 'vue'
import { getCategories } from '../service'
const apiData = reactive({ data: null, error: null })
const fetchCategories = async () => {
  getCategories('categories/web/list')
    .then((res) => {
      apiData.data = res.data.data
    })
    .catch((err) => {
      apiData.error = err
    })
}
onMounted(() => {
  fetchCategories()
})

</script>

<template>
  <div class="w-[450px] p-[5px] category-drawer-container">
    <div class="flex justify-end sticky top-0">
      <v-icon icon="mdi-window-close" class="pointer" @click="$emit('toggle')" />
    </div>
    <div class="centered-items">
      <p class="text-slate-300 text-[1.5rem] font-bold">Categories</p>
    </div>
    <div>
      <ul>
        <li v-for="item in apiData.data" class="category-list" :key="item._id">
          {{ item.categoryName }}
        </li>
      </ul>
    </div>
    <!-- <div>{{ apiData.data }}</div> -->
  </div>
</template>
