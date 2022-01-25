export { filter };

const filter = class Filter {
  constructor({ id, nome, preco, categoria, descricao, imagem }) {
    (this.id = id),
      (this.nome = nome),
      (this.preco = preco),
      (this.categoria = categoria),
      (this.descricao = descricao),
      (this.imagem = imagem);
  }

  static filtrarPorPanificadora() {
    const listaPanificadora = product.filter(produto => {
      return produto.categoria === 'Panificadora';
    });

    // para refletir o filtro na página HTML é preciso chamar  a função que cria os templates passando a lista filtrada como parâmetro.
    // ex: nomeDoMetodoQueCriaTemplate(listaPanificadora)
  }

  static filtrarPorFrutas() {
    const listaFrutas = product.filter(produto => {
      return produto.categoria === 'Frutas';
    });
    // para refletir o filtro na página HTML é preciso chamar  a função que cria os templates passando a lista filtrada como parâmetro.
  }

  static filtrarPorBebidas() {
    const listaBebidas = product.filter(produto => {
      return produto.categoria === 'Bebidas';
    });
    // para refletir o filtro na página HTML é preciso chamar  a função que cria os templates passando a lista filtrada como parâmetro.
  }

  static filtrarPorNomeBuscado() {
    // pegar o valor do input
    let nomeProdutoDigitado = document.querySelector('.inputPesquisarProdutos');
    nomeProdutoDigitado = nomeProdutoDigitado.toLowerCase();

    const listaCampoBusca = product.filter(produto => {
      if (produto.nome.toLowerCase() === nomeProdutoDigitado) {
        return produto;
      }
      if (produto.categoria.toLowerCase() === nomeProdutoDigitado) {
        return produto;
      }
    });

    // para refletir o filtro na página HTML é preciso chamar  a função que cria os templates passando a lista filtrada como parâmetro.
  }
};
