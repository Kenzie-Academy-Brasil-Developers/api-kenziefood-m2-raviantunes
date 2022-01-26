export { quantidadeProdutos };
const quantidadeProdutos = class QuantidadeProdutos {
  static quantidadeProdutosCarrinho(produtos) {
    const pQuantidadeProdutos = document.querySelector('.quantidade__valor');

    pQuantidadeProdutos.innerText = `${produtos.length}`;
  }
};
