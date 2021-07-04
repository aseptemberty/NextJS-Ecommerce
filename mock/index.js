// index.js

module.exports = () =>
{
  const categories = mockCategories()
  const products = mockProducts()
  const users = mockUsers()
  const chars = mockChars()
  const reviews = mockReviews()
  const cities = mockCities()
  const data = Object.assign(categories, products, users, chars, reviews, cities)
  return data
}

function mockCategories(){
  let data = {categories : []}
  for (let i = 0; i < 10; i++) {
    data.categories.push({
      id: i,
      title: `category${i}`,
      productId: i,
      image: 'https://www.yarkiy.ru/system/uploads/product_category/image/16/small_1567566028_IMG_1246234.jpg'
    })
  }
  return data
}

function mockProducts(){
  let data = {products : []}
  for (let i = 0; i < 10; i++) {
    data.products.push({
      id: i,
      categoryId: i,
      oldPrice: 10000,
      price: 9900,
      image: 'https://www.yarkiy.ru/system/uploads/product_category/image/16/small_1567566028_IMG_1246234.jpg',
      images: [
        'https://www.yarkiy.ru/system/uploads/product_category/image/16/small_1567566028_IMG_1246234.jpg',
        'https://www.yarkiy.ru/system/uploads/product_category/image/16/small_1567566028_IMG_1246234.jpg',
        'https://www.yarkiy.ru/system/uploads/product_category/image/16/small_1567566028_IMG_1246234.jpg',
      ],
      title: 'Зеркальный фотоаппарат CANON EOS 4000D Kit с EF-S',
      sku :'0931C011',
      code1c: 3635,
      characteristicId: i,
      reviewId: i,
      rating:{
        count: 5,
        average: Math.ceil(Math.random()*5),
      }
    })
  }
  return data
}

function mockUsers(){
  let data = {users : []}
  for (let i = 0; i < 10; i++) {
    data.users.push({
      id: i,
      name: `products${i}` ,
      surname: i
    })
  }
  return data
}

function mockReviews(){
  let data = {reviews : []}
  for (let i = 0; i < 10; i++) {
    data.reviews.push({
      id: i,
      productId: i,
      data: "21 июля 2021",
      username: "Игорь Игоревич",
      isRecommend: true,
      email: 'example@mail.com',
      rating: Math.ceil(Math.random()*5),
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae massa ipsum. Quisque et congue felis. Nullam nec laoreet lectus. Aliquam non velit eleifend, consequat tortor non, feugiat arcu. Aliquam sit amet interdum urna. Quisque pulvinar malesuada ante in pretium. Vivamus id luctus risus. Praesent vel velit at tortor consectetur finibus. Sed a gravida orci, vitae dapibus odio. Vestibulum ac malesuada diam, ac tincidunt lectus. Nulla mollis metus egestas lacus efficitur, vel volutpat lectus commodo. Nulla quis maximus justo. Maecenas sodales consequat metus, sit amet mollis urna vulputate eget. Cras laoreet augue tellus, aliquam luctus massa pulvinar id.`,
      advantages: `Nulla feugiat erat quis efficitur elementum. Praesent mollis ac nibh sit amet auctor. Cras eros tellus, tempus a orci at, gravida eleifend massa. Sed tristique eget enim id gravida. `,
      disadvantages: `Quisque lobortis nisi id felis pretium, a congue nulla blandit. Praesent et sagittis nisi, at gravida diam. Donec non porttitor neque.`
    })
  }
  return data
}


function mockChars(){
  let data = {chars : []}
  const rootChar = ['Матрица', "Процессор", "Объектив"]
  const childChar = [{title:'Тип', par:'Digic 4+'}, { title: "Светочувствительность", par: "ISO 100 – 6400 с расширением до H: 12800"}, { title:'Соотношение сторон', par:'3:2' }]
  for (let i = 0; i < 10; i++) {
    data.chars.push({
      id: i,
      productId: i,
      chars: rootChar.map(element => {return {title: element, childChar}})
    })
  }
  return data
}

function mockCities() {
  let data = {cities : []}
  for (let i = 1; i < 14; i++) {
    data.cities.push({
      id: i,
      name: `District ${i}`
    })
  }
  return data
}