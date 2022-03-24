const soma = require('./soma')
const multiplicacao = require('./multiplicacao')
const divisao = require('./divisao')
const subtracao = require('./subtracao')

// import { soma } from './soma'

it('Soma de dois numeros positivos diferentes (2 + 4 = 6)', () => {
    expect(soma(2,4)).toBe(6)
})

it('Soma de um numero positivo e um numero negativo (-2 + 4 = 2)', () => {
    expect(soma(-2,4)).toBe(2)
})