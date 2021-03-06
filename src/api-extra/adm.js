import { NewProduct } from "./newProduct.js"
import { API } from "./api.js"

API.getProductsExtra()

async function cadastrar(e) {
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
  await API.postProducts(data)
  API.getProductsExtra()
};
const incluir = document.getElementById("incluir")
incluir.addEventListener("click", cadastrar);

async function alterar(e) {
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
 await API.patchProducts(id, {"nome": data.nome, "preco": data.preco, "categoria": data.categoria, "descricao": data.descricao, "imagem": data.imagem})
 API.getProductsExtra()
};
const modificar = document.getElementById("modificar")
modificar.addEventListener("click", alterar);

async function deletar(e) {
    e.preventDefault();
    const id = document.getElementById("id").value
    await API.delProducts(id)
    API.getProductsExtra()
}
const apagar = document.getElementById("apagar")
apagar.addEventListener("click", deletar);

function pesquisa(e) {
  e.preventDefault();
  const idsearch = document.getElementById("idsearch").value
  API.getProductExtra(idsearch)
}

const pesquisar = document.getElementById("pesquisaID")
pesquisar.addEventListener("click", pesquisa);
