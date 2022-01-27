import { Template } from '../api-base/models/template.js';
export { filter, filtrarProdutos, buscarProdutos };
// export { filtrarProdutos };

const botaoMostrarPanificadora = document.querySelector(
  '.filtros__button--panificadora'
);

const buscarProdutos = () => {
  return fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(response => response.json())
    .then(produto => produto)
    .catch(error => error);
};

let arrayProdutos;
async function filtrarProdutos() {
  arrayProdutos = await buscarProdutos();
  // console.log(arrayProdutos);
  return arrayProdutos;
}

const filter = class Filter {
  static async filtrarPorPanificadora() {
    let produtos = await filtrarProdutos();
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

  static async filtrarPorFrutas() {
    let produtos = await filtrarProdutos();
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

  static async filtrarPorBebidas() {
    let produtos = await filtrarProdutos();
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

  static async filtrarPorNomeBuscado() {
    let nomeProdutoDigitado = document.querySelector('.pesquisa__input').value;
    nomeProdutoDigitado = nomeProdutoDigitado.toLowerCase();

    const produtos = await filtrarProdutos();
    const vitrine = document.querySelector('.vitrine__lista');
    vitrine.innerHTML = '';

    const listaCampoBusca = produtos.filter(({ nome, categoria }) => {
      return (
        nome.toLowerCase().includes(nomeProdutoDigitado) ||
        categoria.toLowerCase().includes(nomeProdutoDigitado)
      );
    });

    listaCampoBusca.forEach(item => {
      vitrine.appendChild(Template.produto(item));
    });

    return listaCampoBusca;
  }
};
