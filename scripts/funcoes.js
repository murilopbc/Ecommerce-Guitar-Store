 /// Função recebe dois parâmetros: Recebe uma lista de produtos, e o local onde o html
 
 export function carregarProduto(listaProdutos, localHTML){
    listaProdutos.forEach(produto => {
        let html = `<div class="produtos" id="${produto.codigoProduto}">
                        <a href="produto1.html">
                        <img class="produto_imagem" src="${produto.imagemProduto}" id="${produto.codigoProduto}">
                        </a>
                    </div>`

        localHTML.innerHTML += html

    });
}

export function handleClick(){
    let produtos = document.querySelectorAll("div.produtos")
    console.log(produtos)
   
    produtos.forEach(produto => produto.addEventListener('click', (evento) => {
        let idProduto = evento.target.id
        localStorage.setItem('prodID', idProduto)
        console.log(idProduto)
    }
      ))}

export function findProduct(produtos, prodID) {
    let produto = produtos.find(prod => prod.codigoProduto == prodID)
    return produto
    }

export function carregaProduto(item){
        const gridProduto = document.querySelector("section.produtos_container")
        let html =  `<div class="img_produto_container">
<div class="produtos_info_imagem">
    <img src="${item.imagemProduto}" alt="Violão Takamine">
</div>
<div class="produto_info">
    <h2>${item.nomeProduto}</h2>
    <span>R$${item.precoProduto}</span>
    <input type="number" min="1" name="" id="qtd" value="1">
    <button>Comprar</button>
    <p>${item.descricaoProduto}
    </p>
</div>
</div>`
       
    gridProduto.innerHTML = html
    }

export function addItemCarrinho (item, carrinhoCompras) {
    let botaoComprar = document.querySelector('button')
  
    botaoComprar.addEventListener('click', () => {
        let quantidade = parseInt(document.querySelector('input#qtd').value)
        let newItem = {...item,quantidade}
        carrinhoCompras.push(newItem)
        console.log(carrinhoCompras)
        localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
       
})
}
