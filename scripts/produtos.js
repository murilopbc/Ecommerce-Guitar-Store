import { catalogo } from "./dados.js";
import { carregarProduto, handleClick } from "./funcoes.js";

const catalogoProdutos = document.querySelector(".produto_grid")

carregarProduto(catalogo, catalogoProdutos)
handleClick()