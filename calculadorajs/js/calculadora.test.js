import  { soma, sub, multiplicacao, divisao, bhaskara } from './calculadora.js'


it('Soma de dois numeros positivos diferentes (2 + 4 = 6)', () => {
    expect(soma(2,4)).toBe(6)
})

it('Diferença entre 8 e 6 (8 - 6 = 2)', () => {
    expect(sub(8,6)).toBe(2)
})

it('Multiplicação entre 5 e 4(5 * 4 = 20)', () => {
    expect(multiplicacao(5,4)).toBe(20)
})

it('Divisão entre 20 por 10 (20 / 2 = 10)', () => {
    
    expect(divisao(20,2)).toBe(10)
})

it('Calculo de bhaskara', () => {
    expect(bhaskara(2, 12, -14)).toMatchObject({
        x1: 1,
        x2: -7
    });
})
    