document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    const container = document.createElement('div');
    container.classList.add('container');

    container.innerHTML = `
        <h1>Generador de Contraseñas Seguras</h1>
        <div class="config-group">
            <div class="config">
                <label for="length">Longitud total:</label>
                <input type="number" id="length" min="1" max="128">
            </div>
            <div class="config">
                <label><input type="checkbox" id="incluirMayusculas"> Incluir Mayúsculas</label>
            </div>
            <div class="config">
                <label><input type="checkbox" id="incluirMinusculas"> Incluir Minúsculas</label>
            </div>
            <div class="config">
                <label><input type="checkbox" id="incluirDigitos"> Incluir Dígitos</label>
            </div>
            <div class="config">
                <label><input type="checkbox" id="incluirEspeciales"> Incluir Símbolos Especiales</label>
            </div>
            <div class="config">
                <label><input type="checkbox" id="evitarAmbiguos"> Evitar caracteres ambiguos</label>
            </div>
            <div class="config">
                <label for="cantidad">Cantidad de contraseñas:</label>
                <input type="number" id="cantidad" min="1" max="100">
            </div>
        </div>
        <div class="buttons">
            <button onclick="generarContraseñas()">Generar Contraseñas</button>
            <button onclick="exportarCSV()">Exportar CSV</button>
        </div>
        <div class="result">
            <textarea id="passwords" readonly></textarea>
        </div>
    `;

    body.appendChild(container);
});
