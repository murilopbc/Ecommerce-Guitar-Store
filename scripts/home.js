import { catalogo } from "./dados.js";
import { carregarProduto } from "./funcoes.js";

const produtoNylon = catalogo.filter(item => item.categoria === "nylon")
const produtoAco = catalogo.filter(item=> item.categoria === "aco")
const nylon = document.querySelector("#nylon")
const aco = document.querySelector("#aco")

carregarProduto(produtoNylon, nylon)
carregarProduto(produtoAco, aco)