import { filter } from '../js/Filter.js';
import { ControllerCarrinho } from '../js/Carrinho.js';
import { API } from './api.js';

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
inputCampoBusca.addEventListener('keyup', filter.filtrarPorNomeBuscado);

const botaoCampoBusca = document.querySelector('.pesquisa__button');
botaoCampoBusca.addEventListener('click', filter.filtrarPorNomeBuscado);

const botaoMostrarTodos = document.querySelector('.filtros__button--todos');
botaoMostrarTodos.addEventListener('click', () => {
  const vitrine = document.querySelector('.vitrine__lista');
  vitrine.innerHTML = '';
  API.getProducts();
});

API.getProducts();

const vitrine = document.querySelector('.vitrine__lista');
vitrine.addEventListener('click', evt => {
  if (evt.target.tagName === 'BUTTON' || evt.target.tagName === 'I') {
    if (evt.target.parentNode.tagName === 'LI') {
      const idLi = evt.target.parentNode.id;
      API.getProduct(idLi);
    } else {
      const idLi = evt.target.parentNode.parentNode.id;
      API.getProduct(idLi);
    }
  }
});

const carrinhoCorpo = document.querySelector('.carrinhoLista');
carrinhoCorpo.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'BUTTON' || evt.target.tagName === 'I') {
    if (evt.target.parentNode.tagName === 'LI') {
      const idLi = evt.target.parentNode.id;

      ControllerCarrinho.removerProduto(carrinhoCorpo, idLi);
    } else {
      const idLi = evt.target.parentNode.parentNode.id;

      ControllerCarrinho.removerProduto(carrinhoCorpo, idLi);
    }
  }
});
