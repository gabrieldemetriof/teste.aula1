const test = require('node:test');
const assert = require('node:assert');
const { calcularTotalCarrinho } = require('./carrinho');

test('calcular o total do carrinho corretamente', () => {
    const itens = [
        { nome: 'camiseta', preco:50, quantidade: 2 },
        { nome: 'bone', preco: 30, quantidade: 1 },
    ];

    const total = calcularTotalCarrinho(itens);

    assert.strictEqual(total, 130);
});

test('carrinho vazio soma zero', () => {
    assert.strictEqual(calcularTotalCarrinho([]), 0);
});
