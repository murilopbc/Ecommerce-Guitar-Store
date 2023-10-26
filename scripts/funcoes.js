 /// Função recebe dois parâmetros: Recebe uma lista de produtos, e o local onde o html
 
 export function carregarProduto(listaProdutos,grid){
    listaProdutos.forEach(produto => {
        let html = `<div class="produtos">
        <a href="produto1.html">
           <img class="produto_imagem" src="${produto.imagemProduto}">
        </a>
    </div>`

grid.innerHTML += html

    });
}



//for (let i = 0; i < catalogo.length; i++ ) {
    //let produto =  `<div class="produtos">
                        //<a href="produto${i + 1}.html">
                           //<img class="produto_imagem" src="${catalogo[i].imagemProduto}">
                        //</a>
                   // </div>`

//gridProduto.innerHTML += produto
//}