import { filter } from './Filter.js';
import { precoCarrinho } from './PrecoCarrinho.js';
import { quantidadeProdutos } from './QuantidadeProdutos.js';
import { Template } from '../api-base/models/template';

const botaoMostrarPanificadora = document.querySelector(
  'filtros__button--panificadora'
);
botaoMostrarPanificadora.addEventListener(
  'click',
  filter.filtrarPorPanificadora
);

const botaoMostrarFrutas = document.querySelector('.filtros__button--frutas');
botaoMostrarFrutas.addEventListener('click', () => {
  filter.filtrarPorFrutas(produtoFiltragem);
});

const botaoMostrarBebidas = document.querySelector('.filtros__button--bebidas');
botaoMostrarBebidas.addEventListener('click', () => {
  filter.filtrarPorBebidas(produtoFiltragem);
});

const inputCampoBusca = document.querySelector('.pesquisa__input');
inputCampoBusca.addEventListener('onKeyUp', () => {
  filter.filtrarPorNomeBuscado(produtoFiltragem);
});

const botaoCampoBusca = document.querySelector('.pesquisa__button');
botaoCampoBusca.addEventListener('click', () => {
  filter.filtrarPorNomeBuscado(produtoFiltragem);
});

const botaoMostrarTodos = document.querySelector('.filtros__button--todos');
botaoMostrarTodos.addEventListener('click', () => {
  Template.produto(produtoFiltragem);
});
