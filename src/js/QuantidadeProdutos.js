export { quantidadeProdutos };

const quantidadeProdutos = class QuantidadeProdutos {
  static quantidadeProdutosCarrinho() {
    const carrinhoCorpo = document.querySelector(".carrinhoLista")

    const pQuantidadeProdutos = document.querySelector('.quantidade__valor');
    pQuantidadeProdutos.innerHTML = ""
    
    pQuantidadeProdutos.innerText = `${carrinhoCorpo.childElementCount}`;
  }
};
