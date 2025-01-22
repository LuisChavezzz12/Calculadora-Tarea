"use strict";
const val1 = document.getElementById("valor1");
const val2 = document.getElementById("valor2");
const res = document.getElementById("resultado");
function calculadora(operacion) {
    const valor1 = parseFloat(val1.value);
    const valor2 = parseFloat(val2.value);
    if (isNaN(valor1) || isNaN(valor2)) {
        res.textContent = "Por favor ingresa números válidos";
        return;
    }
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = valor1 + valor2;
            break;
        case "resta":
            resultado = valor1 - valor2;
            break;
        case "multiplicacion":
            resultado = valor1 * valor2;
            break;
        case "division":
            if (valor2 === 0) {
                resultado = "Error Matemático, NO se puede dividir entre 0";
            }
            else {
                resultado = valor1 / valor2;
            }
            break;
        default:
            resultado = "Operación no válida";
            break;
    }
    res.textContent = resultado.toString();
}
