function adicionar() {
    //obter nome do produto, valor e preço
    let produto = document.getElementById("produto").value;
    let quantidadeProduto = document.getElementById("quantidade").value;

    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];
    let valorProdutoTotal = valorProduto * quantidadeProduto;

    //inserir produto no carrinho de compras
    let listaProdutos = document.getElementById("lista-produtos");
    let produtoSelecionado = `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section>`;
  listaProdutos.innerHTML = listaProdutos.innerHTML + produtoSelecionado;

    console.log(nomeProduto);
    console.log(valorProduto);
}