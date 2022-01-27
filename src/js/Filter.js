import { Template } from '../api-base/models/template.js';
export { filter, filtrarProdutos, buscarProdutos };
// export { filtrarProdutos };

const buscarProdutos = () => {
  return fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(response => response.json())
    .then(produto => produto)
    .catch(error => error);
};

async function filtrarProdutos() {
  const arrayProdutos = await buscarProdutos();
  // console.log(arrayProdutos);
  filter.filtrarPorFrutas(arrayProdutos);
}

// async function getProducts () {
//   let produtos = []
//   const link = 'https://kenzie-food-api.herokuapp.com/product'
//   const response = await fetch(link)
//     .then((res) => res.json())
//     .then((res) => res)
//     .catch((error) => error);
//     console.log(response)
//     response.forEach((produto) => {
//     teste.appendChild(Template.produto(produto))})
// }
// getProducts()

const filter = class Filter {
  static filtrarPorPanificadora(produtos) {
    const vitrine = document.querySelector('.vitrine__lista');
    vitrine.innerHTML = '';
    const listaPanificadora = produtos.filter(({ categoria }) => {
      return categoria === 'Panificadora';
    });

    listaPanificadora.forEach(item => {
      vitrine.appendChild(Template.produto(item));
    });
    return listaPanificadora;
  }

  static filtrarPorFrutas(produtos) {
    const vitrine = document.querySelector('.vitrine__lista');
    vitrine.innerHTML = '';
    const listaFrutas = produtos.filter(({ categoria }) => {
      return categoria === 'Frutas';
    });

    listaFrutas.forEach(item => {
      vitrine.appendChild(Template.produto(item));
    });

    return listaFrutas;
  }

  static filtrarPorBebidas(produtos) {
    const vitrine = document.querySelector('.vitrine__lista');
    vitrine.innerHTML = '';
    const listaBebidas = produtos.filter(({ categoria }) => {
      return categoria === 'Bebidas';
    });
    listaBebidas.forEach(item => {
      vitrine.appendChild(Template.produto(item));
    });

    return listaBebidas;
  }

  static filtrarPorNomeBuscado(produtos) {
    let nomeProdutoDigitado = document.querySelector('.pesquisa__input');
    nomeProdutoDigitado = nomeProdutoDigitado.toLowerCase();

    const vitrine = document.querySelector('.vitrine__lista');
    vitrine.innerHTML = '';
    const listaCampoBusca = produtos.filter(({ nome, categoria }) => {
      return nome.toLowerCase() === nomeProdutoDigitado;

      // else if (categoria.toLowerCase() === nomeProdutoDigitado) {
      //   return categoria.toLowerCase() === nomeProdutoDigitado;
      // }
    });

    listaBebidas.forEach(item => {
      vitrine.appendChild(Template.produto(item));
    });

    return listaCampoBusca;
  }
};
