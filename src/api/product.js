import {ProductModel} from "../models/product.js"
let produtos = []
async function getProducts () {
    const link = 'https://kenzie-food-api.herokuapp.com/product'
    const response = await fetch(link)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
      response.forEach((produto) => {
      produtos.push(new ProductModel(produto))})
    return produtos;
  }
  getProducts()
console.log(produtos)

let produto = []
async function getProduct (id) {
    const link = `https://kenzie-food-api.herokuapp.com/product/${id}`
    const response = await fetch(link)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
      produto.push(new ProductModel(response))
      console.log(produto)
    return produto;
  }
getProduct(2)
