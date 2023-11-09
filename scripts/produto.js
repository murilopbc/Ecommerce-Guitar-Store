import { catalogo } from "./dados.js";
import { findProduct, carregaProduto, addItemCarrinho } from "./funcoes";

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let id = localStorage.getItem("prodID")
let item = findProduct(catalogo, id)

carregaProduto(item)
addItemCarrinho(item, carrinhoCompras)

 

let item = catalogo.find( produto => produto.codigoProduto == id)
console.log(item)

let container = document.querySelector("div.img_produto_container")
let html =  `<div class="produtos_info_imagem">
<img src="${item.imagemProduto}" alt="Violão Takamine">
</div>
<div class="produto_info">
<h2>${item.nomeProduto}</h2>
<span>${item.precoProduto}</span>
<input type="number" name="" id="comprar" value="1">
<button>Comprar</button>
<p>${item.descriçãoProduto}</p>
</div>`

container.innerHTML = html