let precoTotal = 0;
let listaProdutos = document.getElementById("lista-produtos");
let carrinhoTotal = document.getElementById("valor-total");

if(typeof carrinhoTotal != "undefined") {
    let itemCarrinho = parseInt(carrinhoTotal.textContent.split("R$")[1]);
    precoTotal = precoTotal + itemCarrinho;
}

function adicionar() {
    //obter nome do produto, valor e preço
    let produto = document.getElementById("produto").value;
    let quantidadeProduto = document.getElementById("quantidade").value;

    let nomeProduto = produto.split("-")[0];
    let precoProduto = produto.split("R$")[1];
    
    if(quantidadeProduto <= 0) {
        alert("É necessário informar a quantidade do produto desejado!");
    }else { 
    //inserir produto no carrinho de compras
    let produtoSelecionado = `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
    </section>`;
    
        listaProdutos.innerHTML = listaProdutos.innerHTML + produtoSelecionado;
        
        //somando produtos e mostrando o total
        let precoProdutoTotal = precoProduto * quantidadeProduto;
        precoTotal = precoProdutoTotal + precoTotal;
        
        carrinhoTotal.textContent = `R$${precoTotal}`;
    }
}


function limpar() {
    listaProdutos.innerHTML = "";
    carrinhoTotal.textContent = "";
    precoTotal = 0;
}