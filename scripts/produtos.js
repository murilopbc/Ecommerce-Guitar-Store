
// IMPORTA A CONSTANTE CATÁLOGO  DO ARQUIVO 'DADOS.JS'

import { catalogo } from "./dados.js";

// IMPORTA AS FUNÇÕES DE 'CARREGARPRODUTO' E 'HANDLECLICK' DO ARQUIVO 'FUNCOES.JS'

import { carregarProduto, handleClick } from "./funcoes.js";

// SELECIONA A CLASSE 'PRODUTO_GRID' E ARMAZENA NA CONSTANTE 'CATALOGOPRODUTOS'

const catalogoProdutos = document.querySelector(".produto_grid")

// CHAMA AS FUNÇÕES 'CARREGArPRODUTO' E 'HANDLECLICK'

carregarProduto(catalogo, catalogoProdutos)
handleClick()