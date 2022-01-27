import {NewProduct} from "./newProduct.js"
import {Template} from "../api-base/models/template.js"

const token ='Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTY0MzExODA1NiwiZXhwIjoxNjQzOTgyMDU2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ._b3qoZG6fE7-TAiKdkDxozjaorFyvhpoLPa9DLZTQbw'

class API {
	static async getProducts () {
		const link = 'https://kenzie-food-api.herokuapp.com/my/product'
		const response = await fetch(link, { headers : {Authorization:token, "Content-Type": "application/json"}})
		  .then((res) => res.json())
		  .then((res) => res)
		  .catch((error) => error);
		  console.log(response)
		  // response.forEach((produto) => {
		  // teste.appendChild(Template.produto(produto))})
	  }
  

	static async getProduct(id) {
		const link = `https://kenzie-food-api.herokuapp.com/my/product/${id}`
		const response = await fetch(link, { headers : {Authorization:token, "Content-Type": "application/json"}})
		  .then((res) => res.json())
		  .then((res) => res)
		  .catch((error) => error)
	}
  
	static async postProducts (data) {
	  const link = 'https://kenzie-food-api.herokuapp.com/my/product'
	  const response = await fetch(link, {method: "post", headers : {Authorization:token, "Content-Type": "application/json"}, body: JSON.stringify(data)})
		.then((res) => res.json())
		.then((res) => res)
		.catch((error) => error);
	}

	static async patchProducts(id, data) {
		const link = `https://kenzie-food-api.herokuapp.com/my/product/${id}`
		let produto = await fetch(link, { headers : {Authorization:token, "Content-Type": "application/json"}})
		  .then((res) => res.json())
		  .then((res) => res)
		  .catch((error) => error)
			if(data.nome != undefined){
				produto.nome = data.nome
			}
			if(data.preco != undefined){
				produto.preco = data.preco
			}
			if(data.categoria != undefined){
				produto.categoria = data.categoria
			}
			if(data.descricao != undefined){
				produto.descricao = data.descricao
			}
			if(data.imagem != undefined){
				produto.imagem = data.imagem
			}
		let newProduto = new NewProduct(produto.nome, produto.preco, produto.categoria, produto.descricao,produto.imagem)
		console.log(newProduto)
		this.postProducts(newProduto)
		this.delProducts(id)
		this.getProducts()	
	}

  
	static async delProducts (id) {
	  const link = `https://kenzie-food-api.herokuapp.com/my/product/${id}`
	  const response = await fetch(link, {method: "delete", headers : {Authorization:token}})
		.then((res) => res.json())
		.then((res) => res)
		.catch((error) => error);
	}
  }
  export {API}