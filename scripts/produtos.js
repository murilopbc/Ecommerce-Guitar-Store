import { catalogo } from "./dados.js";
import { carregarProduto, handleClick } from "./funcoes.js";

const gridProduto = document.querySelector(".produto_grid")

carregarProduto(catalogo, gridProduto)
handleClick()