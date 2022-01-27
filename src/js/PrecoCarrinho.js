export { precoCarrinho };

const precoCarrinho = class precoCarrinho {
  static precoTotalProdutos() {
    const precos = document.querySelectorAll(".carrinhoLista__preco")
    let precoFinal = 0
    precos.forEach(span => {
      const precoProduto = span.innerText
      precoFinal += Number(precoProduto.split("R$ ").join("").replace(",", "."))
    })
    
    return this.atualizaPreco(precoFinal);
  }

  static atualizaPreco(preco) {
    const pPrecoTotal = document.querySelector('.preco__valor');
    pPrecoTotal.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`;
  }
};
