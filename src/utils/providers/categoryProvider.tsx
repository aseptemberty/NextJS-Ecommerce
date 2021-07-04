import {API} from "../../../types/mockAPI";

async function fetchCategories () {
  const endpoint = `${API.base}/${API.CATEGORIES}`
  const response = await fetch(endpoint)
  const categories = await response.json()
  return Promise.resolve(categories)
}
export async function fetchCategory (id) {
  const endpoint = `${API.base}/${API.CATEGORIES}/${id}`
  const response = await fetch(endpoint)
  const categories = await response.json()
  return Promise.resolve(categories)
}
export default fetchCategories