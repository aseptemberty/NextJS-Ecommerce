import {API} from "../../../types/mockAPI";

async function fetchProducts () {
  const endpoint = `${API.base}/${API.PRODUCTS}`
  const response = await fetch(endpoint)
  const categories = await response.json()
  return Promise.resolve(categories)
}

export async function fetchProduct (id) {
  const endpoint = `${API.base}/${API.PRODUCTS}/${id}`
  const response = await fetch(endpoint)
  const product = await response.json()
  return Promise.resolve(product)
}

export async function fetchProductsFromCategory (category) {
  const endpoint = `${API.base}/${API.CATEGORIES}/${category}/products`
  const response = await fetch(endpoint)
  const products = await response.json()
  return Promise.resolve(Array(products))
}

export async function fetchProductWithEmbeded (id) {
  const endpoint = `${API.base}/${API.PRODUCTS}/${id}?_embed=chars`
  const response = await fetch(endpoint)
  const product = await response.json()
  return Promise.resolve(product)
}



export default fetchProducts