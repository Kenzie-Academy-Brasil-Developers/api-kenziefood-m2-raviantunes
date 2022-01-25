const db = ReadDB.all()

class NewProductModel {
	constructor ({nome, preco, categoria, descricao, imagem}) {
		this.id = this.getMaxId() + 1
		this._nome = nome
		this._preco = preco.toFixed(2)
		this._categoria = categoria
		this._descricao = descricao
		this._imagem = imagem
		this.createdAt = this.newDate()
		this.updatedAt = this.upDate()
	}

	getMaxId(){
		let maxId = 0
		db.myProducts.forEach(myProduct => {
			if (myProduct.id > maxId) {
				maxId = myProduct.id
			}
		})
		return maxId
	}

	newDate() {
		let newDate = new Date()
		return newDate.toUTCString()
	}

	upDate() {
		let upDate = new Date()
		return upDate.toUTCString()
	}

	get nome(){
		return this._nome
	}

	set nome(newNome){
		this.nome = newNome
		this.upDate()
	}

	get preco(){
		return this._preco
	}

	set preco(newPreco){
		this.preco = newPreco.toFixed(2)
		this.upDate()
	}

	get categoria(){
		return this._categoria
	}

	set categoria(newCategoria){
		this.categoria = newCategoria
		this.upDate()
	}

	get descricao(){
		return this._descricao
	}

	set descricao(newDescricao){
		this.descricao = newDescricao
		this.upDate()
	}

	get imagem(){
		return this._imagem
	}

	set imagem(newImagem){
		this.imagem = newImagem
		this.upDate()
	}

	get nome(){
		return this._nome
	}

	set nome(newNome){
		this.nome = newNome
		this.upDate()
	}
}

export {NewProductModel}