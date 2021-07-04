import { toast } from "react-toastify"

export function showToast(text) {
	toast(text, {
		position: toast.POSITION.TOP_LEFT,
		type: toast.TYPE.DEFAULT
	})
}