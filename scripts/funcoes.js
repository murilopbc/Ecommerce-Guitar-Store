 /// Função recebe dois parâmetros: Recebe uma lista de produtos, e o local onde o html
 
 export function carregarProduto(listaProdutos,grid){
    listaProdutos.forEach(produto => {
        let html = `<div class="produtos" id="${produto.codigoProduto}">
       <a href="produto1.html">
       <img class="produto_imagem" src="${produto.imagemProduto}" id="${produto.codigoProduto}">
       </a>
           
       
    </div>`

grid.innerHTML += html

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
    console.log(produto)
    return produto
}


//for (let i = 0; i < catalogo.length; i++ ) {
    //let produto =  `<div class="produtos">
                        //<a href="produto${i + 1}.html">
                           //<img class="produto_imagem" src="${catalogo[i].imagemProduto}">
                        //</a>
                   // </div>`

//gridProduto.innerHTML += produto
//}