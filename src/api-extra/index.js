import {Template} from "../api-base/models/template.js"
import {NewProduct} from "./newProduct.js"
import {API} from "./api.js"
const cadastrar = (e) => {
    e.preventDefault();
    const nome = document.getElementById("cadnome").value
    if(typeof nome !== "string"){
      console.log("Nome precisa ser uma string")}
    const preco = document.getElementById("cadpreco").value
    Number(preco).toFixed(2)
    const categoria = document.getElementById("cadcategoria").value
    if(typeof categoria !== "string"){
      console.log("Categoria precisa ser uma string")}
    const descricao = document.getElementById("caddescricao").value
    if(typeof descricao !== "string"){
      console.log("Descrição precisa ser uma string")}
    const imagem = document.getElementById("cadimagem").value
    let data = new NewProduct(nome, preco, categoria, descricao, imagem)
  API.postProducts(data)
};
const incluir = document.getElementById("incluir")
incluir.addEventListener("click", cadastrar);

const alterar = (e) => {
  e.preventDefault();

  const nome = document.getElementById("altnome").value
  const preco = document.getElementById("altpreco").value
  const categoria = document.getElementById("altcategoria").value
  const descricao = document.getElementById("altdescricao").value
  const imagem = document.getElementById("altimagem").value
  let data = new Object
  const id = document.getElementById("idalt").value
  if(nome != ""){
    data.nome = nome
  } 
  if(preco != ""){
    data.preco = Number(preco).toFixed(2)
  } 
  if(categoria != ""){
    data.categoria = categoria
  } 
  if(descricao != ""){
    data.descricao = descricao
  }
  if(imagem != ""){
    data.imagem = imagem
  }
API.patchProducts(id, {"nome": data.nome, "preco": data.preco, "categoria": data.categoria, "descricao": data.descricao, "imagem": data.imagem})
};
const modificar = document.getElementById("modificar")
modificar.addEventListener("click", alterar);

const deletar = (e) => {
    e.preventDefault();
    const id = document.getElementById("id").value
    API.delProducts(id)
    API.getProducts()
}
API.getProducts()
const apagar = document.getElementById("apagar")
apagar.addEventListener("click", deletar);

const pesquisa = (e) => {
  e.preventDefault();
  const idsearch = document.getElementById("idsearch").value
  API.getProduct(idsearch)
}

const pesquisar = document.getElementById("pesquisaID")
pesquisar.addEventListener("click", pesquisa);


//let carrinho = document.getElementById("carrinho") //tem que ser "ul"