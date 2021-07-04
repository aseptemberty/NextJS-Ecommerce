
import {API} from "../../../types/mockAPI";
import axios from 'axios'

export async function sendReview (review) {
	axios.post(`${API.base}/${API.REVIEWS}`, {
		id: Math.ceil(Math.random()*10000),
		productId: review.productId,
		username: review.username,
		rating: review.rating,
		comment: review.comment,
		advantages: review.advantages,
		disadvantages: review.disadvantages,

	}).then(resp => {
		console.log(resp.data);
	}).catch(error => {
		console.log(error);
	});
}
export async function fetchReviewsFromProduct (productId) {
	const endpoint = `${API.base}/${API.REVIEWS}/?productId=${productId}`
	const response = await fetch(endpoint)
	const products = await response.json()
	return Promise.resolve(Array(products))
}