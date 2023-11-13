import { catalogo } from "./dados.js";
import { findProduct, carregaProduto, addItemCarrinho } from "./funcoes.js";

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let id = localStorage.getItem("prodID")
let item = findProduct(catalogo, id)

carregaProduto(item)
addItemCarrinho(item, carrinhoCompras)


