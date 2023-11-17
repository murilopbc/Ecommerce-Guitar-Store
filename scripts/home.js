
// IMPORTA A CONSTANTE CATÁLOGO  DO ARQUIVO 'DADOS.JS'

import { catalogo } from "./dados.js";

// IMPORTA AS FUNÇÕES DE 'CARREGARPRODUTO' E 'HANDLECLICK' DO ARQUIVO 'FUNCOES.JS'

import { carregarProduto, handleClick } from "./funcoes.js";

// FILTRA OS PRODUTOS DO CATÁLOGO NA CATEGORIA 'NYLON'

const produtoNylon = catalogo.filter(item => item.categoria === "nylon")
const nylon = document.querySelector("#nylon")

// FILTRA OS PRODUTOS DO CATÁLOGO DA CATEGORIA 'ACO'

const produtoAco = catalogo.filter(item=> item.categoria === "aco")
const aco = document.querySelector("#aco")

// CHAMA AS FUNÇÕES 'CARREGARPRODUTO' PASSANDO A LISTA DE PRODUTOS RELACIONADO A CATEGORIA

carregarProduto(produtoNylon, nylon)
carregarProduto(produtoAco, aco)

// CHAMA A FUNÇÃO 'HANDLECLICK'

handleClick()