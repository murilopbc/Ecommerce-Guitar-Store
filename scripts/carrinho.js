
import {valorTotalQuantidade } from "./funcoes.js";

// CARREGA E EXIBE OS ITENS DO CARRINHO DE COMPRA SALVOS NO LOCALSTORAGE

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))
console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

// ADICIONA HTML PARA CADA ITEM DO CARRINHO, INCLUINDO OPÇÕES PARA AJUSTAR A QUANTIDADE E REMOVER ITENS 

let cartList = document.querySelector(".shop")
carrinhoCompras.forEach(item => {
    let html = `<div class="box" id="${item.codigoProduto}">
    <img src="${item.imagemProduto}" alt="Violão Cort">
    <div class="content">
        <h3>${item.nomeProduto}</h3>
        <h4>R$ ${item.precoProduto.toFixed(2).replace(".", ",")}</h4>
        <p class="unit" >Quantidade: ${item.quantidade} </p>
        <span class="btn2">Remover</span> 
    </div>
    </div>`
    cartList.innerHTML += html

    valorTotalQuantidade(carrinhoCompras);
});

// FUNCIONALIDADE DE REMOVER PRODUTO DO CARRINHO

let del = document.querySelectorAll("span.btn2")

del.forEach(botao => botao.addEventListener("click", (event) => {
    let item = event.target.parentElement.parentElement
    console.log(item)
    cartList.removeChild(item)
    let index = carrinhoCompras.findIndex(produto => produto.codigoProduto == item.id)
    carrinhoCompras.splice(index, 1)
    console.log(carrinhoCompras)
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
    
}))

let finalizar = document.querySelector("fa fa-shopping-cart")
finalizar.addEventListener('click', ()=> {

    let endereco = {
        nome: document.querySelector("input#nome").value,
        
    }
})
