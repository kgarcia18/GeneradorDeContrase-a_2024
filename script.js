function generarContraseñas() {
    const longitud = parseInt(document.getElementById('length').value);
    const incluirMayusculas = document.getElementById('incluirMayusculas').checked;
    const incluirMinusculas = document.getElementById('incluirMinusculas').checked;
    const incluirDigitos = document.getElementById('incluirDigitos').checked;
    const incluirEspeciales = document.getElementById('incluirEspeciales').checked;
    const evitarAmbiguos = document.getElementById('evitarAmbiguos').checked;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!incluirMayusculas && !incluirMinusculas && !incluirDigitos && !incluirEspeciales) {
        alert("Debe seleccionar al menos un tipo de carácter para generar la contraseña.");
        return;
    }

    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let digitos = '0123456789';
    let especiales = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (evitarAmbiguos) {
        mayusculas = mayusculas.replace(/[O]/g, '');
        minusculas = minusculas.replace(/[l]/g, '');
        digitos = digitos.replace(/[01]/g, '');
    }

    const contraseñas = [];

    for (let j = 0; j < cantidad; j++) {
        let contraseña = '';
        let caracteresDisponibles = '';

        if (incluirMayusculas) {
            contraseña += generarCaracterAleatorio(mayusculas);
            caracteresDisponibles += mayusculas;
        }
        if (incluirMinusculas) {
            contraseña += generarCaracterAleatorio(minusculas);
            caracteresDisponibles += minusculas;
        }
        if (incluirDigitos) {
            contraseña += generarCaracterAleatorio(digitos);
            caracteresDisponibles += digitos;
        }
        if (incluirEspeciales) {
            contraseña += generarCaracterAleatorio(especiales);
            caracteresDisponibles += especiales;
        }

        const caracteresRestantes = longitud - contraseña.length;
        contraseña += generarCaracteresAleatorios(caracteresDisponibles, caracteresRestantes);
        contraseña = mezclarCaracteres(contraseña);
        contraseñas.push(contraseña);
    }

    document.getElementById('passwords').textContent = contraseñas.join('\n');
}

function generarCaracteresAleatorios(conjunto, cantidad) {
    let resultado = '';
    for (let i = 0; i < cantidad; i++) {
        resultado += conjunto.charAt(Math.floor(Math.random() * conjunto.length));
    }
    return resultado;
}

function generarCaracterAleatorio(conjunto) {
    return conjunto.charAt(Math.floor(Math.random() * conjunto.length));
}

function mezclarCaracteres(contraseña) {
    return contraseña.split('').sort(() => Math.random() - 0.5).join('');
}

function exportarCSV() {
    const contraseñas = document.getElementById('passwords').textContent;
    const csvContent = 'data:text/csv;charset=utf-8,' + contraseñas.replace(/\n/g, '\r\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'contraseñas.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
