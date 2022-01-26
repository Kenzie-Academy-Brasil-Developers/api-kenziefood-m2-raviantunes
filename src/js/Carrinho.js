function criaCarrinhoProduto(produto){
    const li = document.createElement("li")
    li.id = produto.id
    li.classList.add("carrinhoLista__item")
    li.innerHTML =
    `
        <figure class="carrinhoLista__imagem">
            <img  src="${produto.imagem}"  alt="${produto.nome}"/>
            <figcaption>${produto.nome}</figcaption>
        </figure>
        
        <div class="carrinhoLista__infos">
            <h2 class="carrinhoLista__nome">${produto.nome}</h2>
            <span class="carrinhoLista__categoria">${produto.categoria}</span>
            <span class="carrinhoLista__preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
        </div>
        
        <button class="carrinhoLista__botao" name="botão para remover do carrinho" type="button"><i class="fas fa-trash"></i></button>
    `
    return li
}
// quanti-Preco
const quantiPreco = document.querySelector(".quanti-Preco")
// carrinho__corpo--preenchido
const carrinhoPreenchido = document.querySelector(".carrinho__corpo--preenchido")
// carrinho__corpo--vazio
const carrinhoVazio = document.querySelector(".carrinho__corpo--vazio")

const listaCarrinho = document.querySelector(".carrinhoLista")

const produtos = []

class ControllerCarrinho{
    static adicionarProduto(produto){    
        const li = criaCarrinhoProduto(produto)
        this.guardarProduto(li)

        this.mostrarCarrinho()
    }

    static mostrarCarrinho(){
        carrinhoVazio.style.display = "none"
        carrinhoPreenchido.style.display = "block"
        quantiPreco.style.display = "block"

        listaCarrinho.innerHTML = ""
        for(let i = 0; i < produtos.length; i++){
            listaCarrinho.appendChild(produtos[i])
        }
    }

    static guardarProduto(produto){
        produtos.push(produto)
    }

    static removerProduto(idRemover){
        const indexProduct = produtos.findIndex(({id}) =>{
            return id === idRemover
        })
        
        produtos.splice(indexProduct, 1)
        if(produtos.length > 0){
            this.mostrarCarrinho()
        } else{
            carrinhoVazio.style.display = "flex"
            carrinhoPreenchido.style.display = "none"
            quantiPreco.style.display = "none"
        }
    }
}

const comidas = [
	{
		"id": 2,
		"nome": "Mousse de morango com a fruta",
		"preco": 27.5,
		"categoria": "Frutas",
		"descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
		"createdAt": "2022-01-24T16:25:25.401Z",
		"updatedAt": "2022-01-24T16:25:25.401Z"
	},
	{
		"id": 1,
		"nome": "Panqueca de banana com aveia",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
		"createdAt": "2022-01-24T16:26:44.903Z",
		"updatedAt": "2022-01-24T16:26:44.903Z"
	},
	{
		"id": 3,
		"nome": "Pastel de verduras vegano",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png",
		"createdAt": "2022-01-24T16:27:32.190Z",
		"updatedAt": "2022-01-24T16:27:32.190Z"
	},
	{
		"id": 4,
		"nome": "Pizza vegetariana de palmito",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pizza.png",
		"createdAt": "2022-01-24T16:28:17.326Z",
		"updatedAt": "2022-01-24T16:28:17.326Z"
	},
	{
		"id": 5,
		"nome": "Vinho suave",
		"preco": 20,
		"categoria": "Bebidas",
		"descricao": "O vinho é rico em compostos nutricionais muito importantes para a nossa saúde: os polifenóis. Também auxiliam no sistema imunológico",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/vinho.png",
		"createdAt": "2022-01-24T16:29:02.015Z",
		"updatedAt": "2022-01-24T16:29:02.015Z"
	},
	{
		"id": 6,
		"nome": "Laranja Pera Fresca Kenzie 5kg",
		"preco": 20,
		"categoria": "Frutas",
		"descricao": "Bastante popular no Brasil, a laranja é uma das maiores representantes das frutas cítricas. Seu sabor costuma ser doce ou levemente ácido",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/laranja.png",
		"createdAt": "2022-01-24T16:29:44.513Z",
		"updatedAt": "2022-01-24T16:29:44.513Z"
	}
]

const vitrineItens = document.querySelectorAll(".vitrine__item")

vitrineItens.forEach(vitrine => {
    vitrine.addEventListener("click", function(evt){
        if(evt.target.tagName === "BUTTON" || evt.target.tagName === "I"){
            const idLi = vitrine.id
           
            const product = comidas.find(({id}) =>{
                return id === Number(idLi)
            })
            
            ControllerCarrinho.adicionarProduto(product)
                        
        }
        
    })
})

const carrinhoCorpo = document.querySelector(".carrinho__corpo--preenchido")
carrinhoCorpo.addEventListener("click", function(evt){
    if(evt.target.tagName === "BUTTON" || evt.target.tagName === "I"){
        if(evt.target.parentNode.tagName === "LI"){
            const idLi = evt.target.parentNode.id
            ControllerCarrinho.removerProduto(idLi)
        } else{
            const idLi = evt.target.parentNode.parentNode.id
            ControllerCarrinho.removerProduto(idLi)
        }
    }
})