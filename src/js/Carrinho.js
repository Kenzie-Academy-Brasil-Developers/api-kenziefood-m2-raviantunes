
import { precoCarrinho } from "./PrecoCarrinho.js"
import {quantidadeProdutos } from "./QuantidadeProdutos.js"

class ControllerCarrinho{
    

    static mostrarCarrinho(ul, produto){
        const carrinhoVazio = document.querySelector(".carrinho__corpo--vazio")
        carrinhoVazio.style.display = "none"

        const carrinhoPreenchido = document.querySelector(".carrinho__corpo--preenchido")
        carrinhoPreenchido.style.display = "block"

        const quantiPreco = document.querySelector(".quanti-Preco")
        quantiPreco.style.display = "block"
        
        
        ul.appendChild(produto)
        quantidadeProdutos.quantidadeProdutosCarrinho()
        precoCarrinho.precoTotalProdutos()
    }

    static removerProduto(ul, idRemover){
        const ulProdutos = ul.children
        let index = 0

        for(let i = 0; i < ulProdutos.length; i++){
            if(ulProdutos[i].id === idRemover){
                index = i
                break
            }
        }

        const arrayProd = localStorage.getItem("Ids").split(",")
        const indexStorage = arrayProd.findIndex((number) => {
            return number == idRemover
        })
        arrayProd.splice(indexStorage, 1)
        localStorage.setItem("Ids", arrayProd)

        ul.removeChild(ul.children[index])
        quantidadeProdutos.quantidadeProdutosCarrinho()
        precoCarrinho.precoTotalProdutos()
        if(ul.childElementCount === 0){
            const carrinhoVazio = document.querySelector(".carrinho__corpo--vazio")
            carrinhoVazio.style.display = "flex"
            const carrinhoPreenchido = document.querySelector(".carrinho__corpo--preenchido")
            carrinhoPreenchido.style.display = "none"
            const quantiPreco = document.querySelector(".quanti-Preco")
            quantiPreco.style.display = "none"
            localStorage.removeItem("Ids")
        }  

       
    }
}

export {ControllerCarrinho}