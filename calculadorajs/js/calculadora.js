// import  { soma, sub, multiplicacao, divisao, bhaskara } from './calculadora.js'

function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function bhaskara(a, b, c) {

    let resposta = {};

    let delta = (b * b) - (4 * a * c);

    if (delta == 0) {
        resposta.success = false;
    } else {   
        resposta.x1 = (-b + Math.sqrt(delta)) / (2 * a);
        resposta.x2 = (-b - Math.sqrt(delta)) / (2 * a);
    } 

    return resposta;
}

export { soma, sub, multiplicacao, divisao, bhaskara }