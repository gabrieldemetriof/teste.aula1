function calcularTotalCarrinho(itens) {
if (!Array.isArray(itens)) {
    thorw new Error(*itens precisa ser um array*);
}

return itens.reduce((total,item) => {
    return total + item.preco * item.quantidade;
}, 0);
}

module.exports = { calcularTotalCarrinho };
