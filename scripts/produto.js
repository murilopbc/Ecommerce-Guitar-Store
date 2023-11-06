import { catalogo } from "./dados.js";
// import { findProduct } from "./funcoes";
 let id = localStorage.getItem("prodID")
console.log(id)

let item = catalogo.find( produto => produto.codigoProduto == id)
console.log(item)

let container = document.querySelector("div.img_produto_container")
let html =  `<div class="produtos_info_imagem">
<img src="${item.imagemProduto}" alt="Violão Takamine">
</div>
<div class="produto_info">
<h2>${item.nomeProduto}</h2>
<span>${item.precoProduto}</span>
<input type="number" name="" id="" value="1">
<button>Comprar</button>
<p>${item.descriçãoProduto}</p>
</div>`

container.innerHTML = html
//let item = findProduct(catalogo, id)

// carregaProduto(item)