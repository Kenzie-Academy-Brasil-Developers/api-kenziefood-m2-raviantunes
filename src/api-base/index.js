import {Template} from "./models/template.js"
//let vitrine = document.getElementById("vitrine") //tem que ser "ul"

  async function getProducts () {
      let produtos = []
      const link = 'https://kenzie-food-api.herokuapp.com/product'
      const response = await fetch(link)
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);
        console.log(response)
        response.forEach((produto) => {
        teste.appendChild(Template.produto(produto))})
    }
getProducts()

//let carrinho = document.getElementById("carrinho") //tem que ser "ul"
async function getProduct(id) {
      const link = `https://kenzie-food-api.herokuapp.com/product/${id}`
      const response = await fetch(link)
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);
      let produto = Template.carrinho(response)
      carrinho.appendChild(produto)
      return produto;
  }

  
