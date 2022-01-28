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
  if(localStorage.getItem("Ids") === null){
    localStorage.setItem("Ids", [id])
  } else{
    localStorage.setItem("Ids", [...localStorage.getItem("Ids").split(","), id])
  }
  
  const link = `https://kenzie-food-api.herokuapp.com/product/${id}`
  const response = await fetch(link)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => error);
  let produto = Template.carrinho(response)
  ControllerCarrinho.mostrarCarrinho(carrinho, produto)
  return produto;
}

async function getProductStorage() {
  
  if(localStorage.getItem("Ids") !== null){
    const arrayProd = localStorage.getItem("Ids").split(",")
    console.log(arrayProd)
    carrinho.innerHTML = ""
    arrayProd.forEach(async function(idProduto){
      const link = `https://kenzie-food-api.herokuapp.com/product/${Number(idProduto)}`
      const response = await fetch(link).then((res) => res.json()).then((res) => res).catch((error) => error);
      let produto = Template.carrinho(response)
      ControllerCarrinho.mostrarCarrinho(carrinho, produto)
    })  
  }
}

export {getProduct, getProducts, getProductStorage}