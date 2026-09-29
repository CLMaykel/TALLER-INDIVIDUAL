function ejecutar() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let contenedor = document.getElementById('resultados');
    
    contenedor.innerHTML = '';

    if (isNaN(n1) || isNaN(n2)) {
        alert('Ingresa ambos números');
        return;
    }

    // Bucle de 5 iteraciones
    for (let i = 1; i <= 5; i++) {
        let res = '';

        if (i === 1) res = `${n1} + ${n2} = ${n1 + n2}`;
        else if (i === 2) res = `${n1} - ${n2} = ${n1 - n2}`;
        else if (i === 3) res = `${n1} * ${n2} = ${n1 * n2}`;
        else if (i === 4) res = n2 === 0 ? 'División por 0 no permitida' : `${n1} / ${n2} = ${n1 / n2}`;
        else if (i === 5) res = n2 === 0 ? 'Módulo por 0 no permitido' : `${n1} % ${n2} = ${n1 % n2}`;

        // Mostrar en pantalla
        let div = document.createElement('div');
        div.className = 'item';
        div.innerText = `Iteración ${i}: ${res}`;
        contenedor.appendChild(div);
    }
}