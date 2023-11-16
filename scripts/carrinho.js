

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let cartList = document.querySelector(".shop")
carrinhoCompras.forEach(item => {
    let html = `<div class="box" id="${item.codigoProduto}">
    <img src="${item.imagemProduto}" alt="Violão Cort">
    <div class="content">
        <h3>${item.nomeProduto}</h3>
        <h4>Preço: R$ ${item.precoProduto}</h4>
        <p class="unit">Quantidade: <input type= "number" min="1" value="${item.quantidade}"></p>
        <p class="btn-area">
            <i class="fa fa-trash"></i>
            <span class="btn2">Remover</span>
        </p>
    </div>
</div>`
cartList.innerHTML += html


});

let del = document.querySelectorAll("span.btn2")

del.forEach(botao => botao.addEventListener("click", (event) => {
    let item = event.target.parentElement.parentElement.parentElement
    console.log(item)
    cartList.removeChild(item)
    let index = carrinhoCompras.findIndex(produto => produto.codigoProduto == item.id)
    carrinhoCompras.splice(index, 1)
    console.log(carrinhoCompras)
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
    
}));

function ValorTotal(){
    let total = 0
    const produto_car = document.getElementsByClassName("right-bar")
    for(var i = 0; i <produto_car.length; i++){
      console.log(produto_car[i])
      const preco = produto_car[i].getElementsByClassName("preco")[0].innerText.replace("R$", "").replace(",", ".").replace(" ", "")
      const quantidade_pdt = produto_car[i].getElementsByClassName("product-qtd-input")[0].value
      console.log(quantidade_pdt)
      total = total+(preco*quantidade_pdt)
    }
    console.log(total)
  }
   