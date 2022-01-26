export { quantidadeProdutos };
const quantidadeProdutos = class QuantidadeProdutos {
  static quantidadeProdutosCarrinho(produtos) {
    const pQuantidadeProdutos = document.querySelector(
      '.valorQuantidadeProdutos'
    );
    pQuantidadeProdutos.innerText = `${produtos.length}`;
  }
};
