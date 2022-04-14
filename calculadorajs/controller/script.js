 import { bhaskara } from '../js/calculadora.js';

function calculateBhaskara(params) {
    return bhaskara(params.a, params.b, params.c);
}

function presentResult() {

    let params = {
        a: document.getElementsByName("a")[0].value,
        b: document.getElementsByName("b")[0].value,
        c: document.getElementsByName("c")[0].value
    }

    let output = calculateBhaskara(params);
    let resultArea = document.getElementById("result-span");

    if (!output.success) {
        if (output.x) {
            resultArea.innerHTML = "x = " + output.x
        } else {
            resultArea.innerHTML = output.warning; 
        }
    } else {
        resultArea.innerHTML = "x¹ = " + output.x1 + " e x² = " + output.x2;     
    }
}

document.getElementById("submit-button").addEventListener("click", presentResult);