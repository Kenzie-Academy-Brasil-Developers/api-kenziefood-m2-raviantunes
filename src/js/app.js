import { filter } from './Filter.js';
// import { precoCarrinho } from './PrecoCarrinho.js';
// import { quantidadeProdutos } from './QuantidadeProdutos.js';
import { Template } from '../api-base/models/template.js';
import { buscarProdutos } from './Filter.js';
import { filtrarProdutos } from './Filter.js';

const botaoMostrarPanificadora = document.querySelector(
  '.filtros__button--panificadora'
);
botaoMostrarPanificadora.addEventListener(
  'click',
  filter.filtrarPorPanificadora
);

const botaoMostrarFrutas = document.querySelector('.filtros__button--frutas');
botaoMostrarFrutas.addEventListener('click', filter.filtrarPorFrutas);

const botaoMostrarBebidas = document.querySelector('.filtros__button--bebidas');
botaoMostrarBebidas.addEventListener('click', filter.filtrarPorBebidas);

const inputCampoBusca = document.querySelector('.pesquisa__input');
inputCampoBusca.addEventListener('onKeyUp', () => {
  filter.filtrarPorNomeBuscado(inputCampoBusca.value);
});
const botaoCampoBusca = document.querySelector('.pesquisa__button');
botaoCampoBusca.addEventListener('click', filter.filtrarPorNomeBuscado);

const botaoMostrarTodos = document.querySelector('.filtros__button--todos');
botaoMostrarTodos.addEventListener('click', () => {
  getProducts();
});
