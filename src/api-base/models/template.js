class Template {
  static produto({
    id,
    nome,
    preco,
    categoria,
    descricao,
    imagem,
    createdAt,
    updatedAt
  }) {
 
		let imgCategoria 
		if(categoria === "Panificadora"){
			imgCategoria = "./src/img/filtros/Icon_bread.png"
		}
		else if(categoria === "Frutas"){
			imgCategoria = "./src/img/filtros/Icon_fruits.png"
		}
		else if(categoria === "Bebidas"){
			imgCategoria = "./src/img/filtros/Icon_glass of wine.png"
		}
		
		const li  = document.createElement("li")
		li.id = id
		li.classList.add("vitrine__item")
		if(id !== 2){
			li.innerHTML =
			`
			<figure class="item__imagem">
			<img src="${imagem}" alt="${nome}"/>
			<figcaption>${nome}</figcaption>
			</figure>
			<span class="item__categoria--${categoria.toLowerCase()}">
				<img src="${imgCategoria}" alt="Ícone da categoria"> ${categoria}
			</span>
			<h2 class="item__nome">${nome}</h2>
			<p class="item__info">${descricao}</p>
			<span class="item__preco">R$ ${preco.toFixed(2).replace('.', ',')}</span>
			<button class="item__botao" name="botão para adicionar produtos ao carrinho" type="button"><i class="fas fa-cart-plus"></i></button>
			`
		} else{
			li.innerHTML =
			`
			<figure class="item__imagem--panqueca">
			<img src="${imagem}" alt="${nome}"/>
			<figcaption>${nome}</figcaption>
			</figure>
			<span class="item__categoria--${categoria.toLowerCase()}">
				<img src="${imgCategoria}" alt="Ícone da categoria"> ${categoria}
			</span>

			<h2 class="item__nome">${nome}</h2>
			<p class="item__info">${descricao}</p>
			<span class="item__preco">R$ ${preco.toFixed(2).replace('.', ',')}</span>
			<button class="item__botao" name="botão para adicionar produtos ao carrinho" type="button"><i class="fas fa-cart-plus"></i></button>
			`
		}
		
		return li
	}

  static carrinho({
    id,
    nome,
    preco,
    categoria,
    descricao,
    imagem,
    createdAt,
    updatedAt
  }) {
    const li = document.createElement('li');
    li.id = id;
    li.classList.add('carrinhoLista__item');
    li.innerHTML = `
		<figure class="carrinhoLista__imagem">
		  <img  src="${imagem}"  alt="${nome}"/>
		  <figcaption>${nome}</figcaption>
		</figure>
		
		<div class="carrinhoLista__infos">
		  <h2 class="carrinhoLista__nome">${nome}</h2>
		  <span class="carrinhoLista__categoria">${categoria}</span>
		  <span class="carrinhoLista__preco">R$ ${preco
        .toFixed(2)
        .replace('.', ',')}</span>
		</div>
		  
		<button class="carrinhoLista__botao" name="botão para remover do carrinho" type="button"><i class="fas fa-trash"></i></button>
		`;
    return li;
  }
}

export { Template };
