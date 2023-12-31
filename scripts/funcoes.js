 
 // FUNÇÃO CARREGA OS PRODUTOS AUTOMATICAMENTE NA PÁGINA 'HOME' E 'PRODUTOS'
 
 export function carregarProduto(listaProdutos, localHTML){
    listaProdutos.forEach(produto => {
        let html = `<div class="produtos" id="${produto.codigoProduto}">
                        <a href="produto1.html">
                        <img class="produto_imagem" src="${produto.imagemProduto}" id="${produto.codigoProduto}">
                        </a>
                        <h4>${produto.nomeProduto}</h4>
                        <h4 class="precoProduto" >R$${produto.precoProduto.toFixed(2).replace(".", ",")}</h4>
                        
                    </div>`

        localHTML.innerHTML += html

    });
}

// FUNÇÃO ADICIONA UM EVENTO DE 'CLICK' A CADA ELEMENTO DA CLASSE 'PRODUTOS', ARMAZENANDO O ID DO PRODUTO CLICADO NO LOCALSTORAGE

export function handleClick(){
    let produtos = document.querySelectorAll("div.produtos")
    console.log(produtos)
   
    produtos.forEach(produto => produto.addEventListener('click', (evento) => {
        let idProduto = evento.target.id
        localStorage.setItem('prodID', idProduto)
        console.log(idProduto)
    }
      ))}

// FUNÇÃO RECEBE UMA LISTA DE PRODUTOS E UM ID DE PRODUTO, RETORNANDO O PRODUTO CORRESPONDENTE AO SEU CÓDIGO

export function findProduct(produtos, prodID) {
    let produto = produtos.find(prod => prod.codigoProduto == prodID)
    return produto
    }

// FUNÇÃO CARREGA OS PRODUTOS AUTOMATICAMENTE NA PÁGINA INDIVIDUAL DE CADA PRODUTO

export function carregaProduto(item){
        const gridProduto = document.querySelector("section.produtos_container")
        let html =  `<div class="img_produto_container">
<div class="produtos_info_imagem">
    <img src="${item.imagemProduto}" alt="Violão Takamine">
</div>
<div class="produto_info">
    <h2>${item.nomeProduto}</h2>
    <h3>R$${item.precoProduto.toFixed(2).replace(".", ",")}</h3>
    <input type="number" min="1" name="" id="qtd" value="1">
    <button>Comprar</button>
    <p>${item.descricaoProduto}
    </p>
</div>
</div>`
       
    gridProduto.innerHTML = html
    }

// FUNÇÃO ADICIONAR PRODUTO NO CARRINHO DE ACORDO COM O 'CLICK' E A 'QUANTIDADE'

export function addItemCarrinho (item, carrinhoCompras) {
    let botaoComprar = document.querySelector('button')
    console.log(botaoComprar)
  
    botaoComprar.addEventListener('click', () => {
        let quantidade = parseInt(document.querySelector('input#qtd').value)
        let newItem = {...item,quantidade}
        carrinhoCompras.push(newItem)
        alert("Item adicionado com sucesso!")
        console.log(carrinhoCompras)
        localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
       
})
}

// FUNÇÃO CALCULA VALOR TOTAL DOS PRODUTOS

export function valorTotalQuantidade (carrinhoCompras){
    let soma = 0
    let quantidade = 0
    carrinhoCompras.forEach(
      item => {
        soma += ((item.quantidade * item.precoProduto))
        quantidade += item.quantidade
      }  
    )
    document.querySelector(".preco").innerHTML = `R$ ${soma.toFixed(2).replace(".", ",")}`
    console.log(soma, quantidade)
    }

// FUNÇÃO DE GERAR O PEDIDO

export function gerarPedido(carrinho_compras) {
    let finalizar = document.querySelector("button");

    finalizar.addEventListener('click', (e) => {
        e.preventDefault();

        // Carrega os pedidos existentes do localStorage
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

        // Calcula o próximo código de pedido
        let codPedido = pedidos.length + 1;

        // Cria o novo pedido
        let pedido = {
            itens: carrinho_compras,
            id: codPedido
        };

        // Adiciona o novo pedido à lista existente
        pedidos.push(pedido);

        // Atualiza o localStorage com a lista completa de pedidos
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        alert("Pedido finalizado");

        localStorage.removeItem("carrinho");
        localStorage.removeItem("prodID");

        location.reload();
    });
}