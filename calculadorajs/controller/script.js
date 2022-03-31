 import { bhaskara } from '../js/calculadora.js';

function calculateBhaskara() {
    
    let params = {
        a: document.getElementsByName("a")[0].value,
        b: document.getElementsByName("b")[0].value,
        c: document.getElementsByName("c")[0].value
    }

    console.info(bhaskara(params.a, params.b, params.c));

    return bhaskara(params.a, params.b, params.c);
}

function presentResult() {
    let output = calculateBhaskara();
    let resultArea = window.document.getElementsByClassName("result-span");
    // window.document.getElementById('res')

    resultArea.innerHTML = "x1 = " + output.x1 + " e x2 = " + output.x2; 

    resultArea.textContent = "teste"

    console.info(resultArea);
    console.info(output);
    
}

document.getElementById("submit-button").addEventListener("click", presentResult);