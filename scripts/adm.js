let data = JSON.parse(localStorage.getItem("pedidos"));

const    resultadoDiv = document.getElementById("resultado");
const tbodyTable = document.querySelector('.tbodyTable');

data.forEach(pedido => {
    // CONCATENA OS NOMES DOS ITENS EM UMA STRING SEPARADA POR VÍRGULA
    const nomesItens = pedido.itens.map(item => item.nomeProduto).join(', ');

    // CRIA UM ELEMENTO NA TABELA PARA CADA PEDIDO
    let pedidoRow = document.createElement('tr');
    pedidoRow.innerHTML = `<th scope="row" style="text-align:center;">${pedido.id}</th>
                           <td style="text-align:center;">${nomesItens}</td>
                           <td style="text-align:center;">R$${valorTotalQuantidade(pedido.itens).toFixed(2).replace('.', ',')}</td>`;

    // ADICIONA O ELEMENTO DO PEDIDO A TABELA
    tbodyTable.appendChild(pedidoRow);
});

function valorTotalQuantidade(itens) {
    return itens.reduce((total, item) => total + item.precoProduto, 0);
}
