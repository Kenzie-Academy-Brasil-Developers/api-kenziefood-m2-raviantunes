
class ControllerCarrinho{
    

    static mostrarCarrinho(ul, produto){
        const carrinhoVazio = document.querySelector(".carrinho__corpo--vazio")
        carrinhoVazio.style.display = "none"

        const carrinhoPreenchido = document.querySelector(".carrinho__corpo--preenchido")
        carrinhoPreenchido.style.display = "block"

        const quantiPreco = document.querySelector(".quanti-Preco")
        quantiPreco.style.display = "block"

        ul.appendChild(produto)
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

        ul.removeChild(ul.children[index])

        if(ul.childElementCount === 0){
            const carrinhoVazio = document.querySelector(".carrinho__corpo--vazio")
            carrinhoVazio.style.display = "flex"
            const carrinhoPreenchido = document.querySelector(".carrinho__corpo--preenchido")
            carrinhoPreenchido.style.display = "none"
            const quantiPreco = document.querySelector(".quanti-Preco")
            quantiPreco.style.display = "none"
        }  
    }
}

export {ControllerCarrinho}