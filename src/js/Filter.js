export { filter };

const filter = class Filter {
  static filtrarPorPanificadora(produto) {
    const listaPanificadora = produto.filter(({ categoria }) => {
      if (categoria === 'Panificadora') {
        return produto;
      }
    });

    Template.produto(listaPanificadora);
  }

  static filtrarPorFrutas(produto) {
    const listaFrutas = produto.filter(({ categoria }) => {
      if (categoria === 'Frutas') {
        return produto;
      }
    });

    Template.produto(listaFrutas);
  }

  static filtrarPorBebidas(produto) {
    const listaBebidas = produto.filter(({ categoria }) => {
      if (categoria === 'Bebidas') {
        return produto;
      }
    });

    Template.produto(listaBebidas);
  }

  static filtrarPorNomeBuscado(produto) {
    // pegar o valor do input
    let nomeProdutoDigitado = document.querySelector('.pesquisa__input');
    nomeProdutoDigitado = nomeProdutoDigitado.toLowerCase();

    const listaCampoBusca = produto.filter(({ nome, categoria }) => {
      if (nome.toLowerCase() === nomeProdutoDigitado) {
        return produto;
      } else if (categoria.toLowerCase() === nomeProdutoDigitado) {
        return produto;
      }
    });

    Template.produto(listaCampoBusca);
  }
};
