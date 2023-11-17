
// IMPORTA A CONSTANTE CATÁLOGO  DO ARQUIVO 'DADOS.JS'

import { catalogo } from "./dados.js";

// IMPORTA AS FUNÇÕES DE 'CARREGARPRODUTO', 'FINDPRODUCT' E 'ADDITEMCARRINHO' DO ARQUIVO 'FUNCOES.JS'

import { findProduct, carregaProduto, addItemCarrinho } from "./funcoes.js";

// LISTA DE ITENS NO CARRINHO DE COMPRAS

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))
console.log(carrinhoCompras)

// INICIALIZA 'CARRINHOCOMPRAS' COM UM ARRAY VAZIO CASO NÃO HOUVER ITENS NO CARRINHO

if(carrinhoCompras == null){
    carrinhoCompras = []
}

// OBTÉM O ID DO PRODUTO ARMAZENADO NO LOCALSTORAGE

let id = localStorage.getItem("prodID")

// FUNÇÃO PARA ENCONTRAR O PRODUTO NO CATÁLOGO COM BASE NO ID OBTIDO

let item = findProduct(catalogo, id)

// CHAMA AS FUNÇÕES 'CARREGAPRODUTO' E 'ADDITEMCARRINHO'

carregaProduto(item)
addItemCarrinho(item, carrinhoCompras)


