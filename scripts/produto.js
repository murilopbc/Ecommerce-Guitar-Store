import { catalogo } from "./dados";
// import { findProduct } from "./funcoes";
// let produto = localStorage.getItem("prodId")

 let id = 'batata'

let item = catalogo.find(function(produto){
    return produto.codigoProduto === id})

console.log(item)


let container = document.querySelector(#produto_container)
let html =  ´<div class="produtos_info_imagem">
<img src="${item.nomeProduto}" alt="Violão Takamine">
</div>
<div class="produto_info">
<h2>Violão de aço Takamine GD 11</h2>
<span>R$ 2 410,00</span>
<input type="number" name="" id="" value="1">
<button>Comprar</button>
<p>O violão Takamine proporciona uma conexão musical para amadores e profissionais, explorando novos acordes e desfrutando da música. 
    Com modelos para cada guitarrista, a tampa de mogno oferece um som caloroso e limpo, realçando graves e médios. 
    As cordas de aço, duráveis e resistentes à corrosão, produzem um som brilhante e claro, destacando a qualidade sonora.
</p>
</div>`


//let item = findProduct(catalogo, id)

// carregaProduto(item)