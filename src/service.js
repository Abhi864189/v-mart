import axios from 'axios'
const base_Url = import.meta.env.VITE_MAIN_URL

export const getCategories = (url) => {
  return axios.get(`${base_Url}${url}`)
}
export const getBestSellers = () => {
  return axios.get(`${base_Url}products/bestseller`)
}
export const getTrendingProducts = () => {
  return axios.get(`${base_Url}products/trending`)
}
export const getItemsByCategoryData = (id, pageIndex, pageSize) => {
  return axios.get(
    `${base_Url}products/web/by-category/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`
  )
}
