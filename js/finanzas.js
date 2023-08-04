function totalAcciones(acciones) {
    let totalAcciones = 0;

    acciones.forEach(accion => {
        totalAcciones += parseInt(accion.cantidad) * parseInt(accion.costo);
    });

    return totalAcciones;
}

function totalPropiedades(propiedades) {
    let totalPropiedades = 0;

    propiedades.forEach(propiedad => {
        totalPropiedades += parseInt(propiedad.entrada) + parseInt(propiedad.hipoteca);
    });

    return totalPropiedades;
}

function totalDeudas(deudas) {
    let totalDeudas = 0;

    deudas.forEach(deudas => {
        totalDeudas += parseInt(deudas.monto);
    });

    return totalDeudas;
}

function totalHipotecas(propiedades) {
    let totalHipotecas = 0;

    propiedades.forEach(propiedad => {
        totalHipotecas += parseInt(propiedad.hipoteca);
    });

    return totalHipotecas;
}

function totalPrestamos(prestamos) {
    let totalPrestamos = 0;

    prestamos.forEach(prestamo => {
        totalPrestamos += parseInt(prestamo.monto);
    });

    return totalPrestamos;
}

function totalIngresosPasivos(propiedades) {
    let totalIngresosPasivos = 0;

    propiedades.forEach(propiedad => {
        totalIngresosPasivos += parseInt(propiedad.ingreso);
    });

    return totalIngresosPasivos;
}

function totalIngresos(salario, propiedades) {
    return parseInt(salario) + totalIngresosPasivos(propiedades);
}

function totalGastos(impuestos, gastos, hijos, deudas, prestamos) {
    let totalGastos = parseInt(impuestos) + parseInt(gastos) + (parseInt(hijos.cantidad) * parseInt(hijos.costo));

    deudas.forEach(deuda => {
        totalGastos += parseInt(deuda.interes);
    });

    prestamos.forEach(prestamo => {
        totalGastos += parseInt(prestamo.interes);
    });
    
    return totalGastos;
}
//totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario.prestamos);

function totalActivos(acciones, propiedades) {
    return totalAcciones(acciones) + totalPropiedades(propiedades);
}

function totalPasivos(deudas, propiedades, prestamos) {
    return totalDeudas(deudas) + totalHipotecas(propiedades) + totalPrestamos(prestamos);
}

function calcularProgreso() {
    let gastos = totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario.prestamos);
    let ingresosPasivos = totalIngresosPasivos(usuario.propiedades);

    return Math.trunc(((ingresosPasivos / gastos) * 100));
}

function calcularPagoMensual() {
    let gastos = totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario
        .prestamos);
    let ingresos = totalIngresos(usuario.salario, usuario.propiedades);

    return ingresos - gastos;
}

function calcularPatrimonio() {
    let activos = totalActivos(usuario.acciones, usuario.propiedades)
    let pasivos = totalHipotecas(usuario.propiedades) + totalPrestamos(usuario.prestamos);

    return activos - pasivos;
}