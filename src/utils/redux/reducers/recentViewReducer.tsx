import {REMEMBERVIEW} from "../actions/recentViewActions";

const recentViewReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case REMEMBERVIEW:
      return {...state, products: updateRecentView(state.products, action.product)};
    default:
      return {...state};
  }
};

function updateRecentView(products, newProduct) {
  const productsIds = products.map(product => product.id)
  if (productsIds.includes(newProduct.id)) {
    return products
  }
  else if (products.length <= 5){
    products.push(newProduct)
    return products
  }
  else {
    products.shift()
    products.push(newProduct)
    return products
  }

}

export default recentViewReducer;