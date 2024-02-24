function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidadeProduto = document.getElementById("quantidade").value;

    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];
    let valorProdutoTotal = valorProduto * quantidadeProduto;

    console.log(nomeProduto);
    console.log(valorProduto);
}