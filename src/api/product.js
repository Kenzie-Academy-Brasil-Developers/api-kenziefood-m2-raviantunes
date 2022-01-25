import {ProductModel} from "../models/product.js"
let produtos = []
async function createProduct () {
    const link = 'https://kenzie-food-api.herokuapp.com/product'
    const response = await fetch(link)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
      response.forEach((produto) => {
      produtos.push(new ProductModel(produto))})
    return produtos;
  }
  createProduct()
console.log(produtos)

