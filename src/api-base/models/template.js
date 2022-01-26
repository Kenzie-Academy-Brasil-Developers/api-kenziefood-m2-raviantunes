class Template {
	
	static produto({id, nome, preco, categoria, descricao, imagem, createdAt, updatedAt}){

		const li  = document.createElement("li")
		li.innerHTML =
		`
			<img class="imagem"src="${imagem}" alt="${nome}"/>
			<span class="categoria">${categoria}</span>
			<p class="nome">${nome}</p>
			<p class="descricao">${descricao}</p>
			<p class="preco">R$${preco.toFixed(2)}</p>
		`
		return li

		}

	static carrinho({id, nome, preco, categoria, descricao, imagem, createdAt, updatedAt}){

		const li  = document.createElement("li")
		li.innerHTML =
		`
			<img class="imagem"src="${imagem}" alt="${nome}"/>
			<span class="categoria">${categoria}</span>
			<p class="nome">${nome}</p>
			<p class="preco">R$${preco}</p>
		`
		return li
	
		}
		
}

export {Template}