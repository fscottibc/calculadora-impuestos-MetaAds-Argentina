function calcularImpuestos() {
    let monto = parseFloat(document.getElementById('monto').value);
    if (isNaN(monto) || monto <= 0) {
        document.getElementById('resultado1').innerHTML = "<p style='color:red;'>Ingrese un monto válido.</p>";
        return;
    }

    let iva = monto * 0.21;
    let percepcionGanancias = monto * 0.30;
    let ingresosBrutos = monto * 0.03;
    let totalImpuestos = iva + percepcionGanancias + ingresosBrutos;
    let totalFinal = monto + totalImpuestos;

    document.getElementById('resultado1').innerHTML = `
        <p><strong>IVA (21%):</strong> $${iva.toFixed(2)}</p>
        <p><strong>Percepción de Ganancias (30%):</strong> $${percepcionGanancias.toFixed(2)}</p>
        <p><strong>Ingresos Brutos (3%):</strong> $${ingresosBrutos.toFixed(2)}</p>
        <p><strong>Total de impuestos:</strong> $${totalImpuestos.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> $${totalFinal.toFixed(2)}</p>
    `;
}

function calcularInversion() {
    let montoFinal = parseFloat(document.getElementById('montoFinal').value);
    if (isNaN(montoFinal) || montoFinal <= 0) {
        document.getElementById('resultado2').innerHTML = "<p style='color:red;'>Ingrese un monto válido.</p>";
        return;
    }

    let porcentajeImpuestos = 1.54; // Factor basado en 54% de impuestos adicionales
    let montoBase = montoFinal / porcentajeImpuestos;

    let iva = montoBase * 0.21;
    let percepcionGanancias = montoBase * 0.30;
    let ingresosBrutos = montoBase * 0.03;
    let totalImpuestos = iva + percepcionGanancias + ingresosBrutos;

    document.getElementById('resultado2').innerHTML = `
        <p><strong>Monto a invertir antes de impuestos:</strong> $${montoBase.toFixed(2)}</p>
        <p><strong>IVA (21%):</strong> $${iva.toFixed(2)}</p>
        <p><strong>Percepción de Ganancias (30%):</strong> $${percepcionGanancias.toFixed(2)}</p>
        <p><strong>Ingresos Brutos (3%):</strong> $${ingresosBrutos.toFixed(2)}</p>
        <p><strong>Total de impuestos:</strong> $${totalImpuestos.toFixed(2)}</p>
        <p><strong>Total gastado (verificación):</strong> $${montoFinal.toFixed(2)}</p>
    `;
}