import {Template} from "./models/template.js"
import {ControllerCarrinho} from "../js/Carrinho.js"

const vitrine = document.querySelector(".vitrine__lista") 

async function getProducts () {
      const link = 'https://kenzie-food-api.herokuapp.com/product'
      const response = await fetch(link)
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);
        response.forEach((produto) => {
        vitrine.appendChild(Template.produto(produto))})
}

const carrinho = document.querySelector(".carrinhoLista") 
async function getProduct(id) {
      const link = `https://kenzie-food-api.herokuapp.com/product/${id}`
      const response = await fetch(link)
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);
      let produto = Template.carrinho(response)
      ControllerCarrinho.mostrarCarrinho(carrinho, produto)
      return produto;
}

export {getProduct, getProducts}