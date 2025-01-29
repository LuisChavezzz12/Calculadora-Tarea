"use strict";
let transacciones = [];
let balanceTotal = 0;
function agregarTransaccion(tipo) {
    const montoInput = document.getElementById("monto");
    const descripcionInput = document.getElementById("descripcion");
    const monto = parseFloat(montoInput.value);
    const descripcion = descripcionInput.value.trim();
    if (isNaN(monto) || monto <= 0) {
        alert("El monto debe ser un número positivo.");
        return;
    }
    if (descripcion === "") {
        alert("La descripción no puede estar vacía.");
        return;
    }
    if (tipo === "gasto" && monto > balanceTotal) {
        alert("No puedes gastar más de lo que tienes en el balance.");
        return;
    }
    const nuevaTransaccion = {
        id: Date.now(),
        monto,
        descripcion,
        tipo,
    };
    transacciones.push(nuevaTransaccion);
    actualizarBalance();
    mostrarTransacciones();
    montoInput.value = "";
    descripcionInput.value = "";
}
function actualizarBalance() {
    const ingresos = transacciones
        .filter((t) => t.tipo === "ingreso")
        .reduce((sum, t) => sum + t.monto, 0);
    const gastos = transacciones
        .filter((t) => t.tipo === "gasto")
        .reduce((sum, t) => sum + t.monto, 0);
    balanceTotal = ingresos - gastos;
    document.getElementById("balance").textContent = balanceTotal.toFixed(2);
}
function mostrarTransacciones() {
    const historial = document.getElementById("historial");
    historial.innerHTML = "";
    transacciones.forEach((transaccion) => {
        const li = document.createElement("li");
        li.textContent = `${transaccion.descripcion}: $${transaccion.monto.toFixed(2)}`;
        li.classList.add(transaccion.tipo);
        historial.appendChild(li);
    });
}
