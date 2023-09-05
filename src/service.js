import axios from 'axios'
const base_Url = import.meta.env.VITE_MAIN_URL

export const getCategories = (url) => {
  return axios.get(`${base_Url}${url}`)
}
