class ProductModel {
	constructor ({id, nome, preco, categoria, descricao, imagem, createdAt, updatedAt}) {
		this.id = id
		this.nome = nome
		this.preco = preco.toFixed(2)
		this.categoria = categoria
		this.descricao = descricao
		this.imagem = imagem
		this.createdAt = createdAt
		this.updatedAt = updatedAt
	}
}

export {ProductModel}