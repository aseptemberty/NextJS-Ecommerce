import { API } from "../../../types/mockAPI"

export async function fetchCities () {
	const endpoint = `${API.base}/${API.CITIES}`
	const response = await fetch(endpoint)
	const products = await response.json()
	return Promise.resolve(Array(products))
}