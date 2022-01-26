export { precoCarrinho };

const precoCarrinho = class precoCarrinho {
  static precoTotalProdutos(produtos) {
    const precoTotal = produtos.reduce((valorTotal, { preco }) => {
      valorTotal += preco;
      return valorTotal;
    }, 0);
    this.atualizaPreco(precoTotal);
    return precoTotal;
  }

  static atualizaPreco(preco) {
    const pPrecoTotal = document.querySelector('.preco__valor');
    pPrecoTotal.innerText = `${preco.toFixed(2).replace('.', ',')}`;
  }
};
