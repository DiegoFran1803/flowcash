$('.btn-comprar-accion').click(() => {
    let descripcion = $('#descripcionAccion');
    let cantidad = $('#cantidadAccion');
    let costo = $('#costoAccion');

    let descripcionVal = validarInput(descripcion);
    let cantidadVal = validarInput(cantidad);
    let costoVal = validarInput(costo);

    if (descripcionVal && cantidadVal && costoVal) {
        let billetera = parseInt(usuario.billetera);
        let precio = parseInt(cantidad.val()) * parseInt(costo.val());

        if(billetera >= precio) {
            let accion = {
                descripcion: descripcion.val(),
                cantidad: cantidad.val(),
                costo: costo.val()
            }
    
            usuario.billetera = billetera - precio;
            usuario.acciones.push(accion);
            guardarDatos('usuario', usuario);
            renderizarAcicones(usuario.acciones);
            evaluarProgreso();
            exitoModal('Se completo la transaccion correctamente');
        } else errorModal('No tienes suficiente dinero');
    }

    descripcion.val('');
    costo.val('');
    cantidad.val('');
});


$('.btn-comprar-propiedad').click(() => {
    let descripcion = $('#descripcionPropiedad');
    let entrada = $('#entradaPropiedad');
    let hipoteca = $('#hipotecaPropiedad');
    let ingreso = $('#ingresoPropiedad');

    let descripcionVal = validarInput(descripcion);
    let entradaVal = validarInput(entrada);
    let hipotecaVal = validarInput(hipoteca);
    let ingresoVal = validarInput(ingreso);

    if (descripcionVal && entradaVal && hipotecaVal && ingresoVal) {
        let billetera = parseInt(usuario.billetera);
        let precio = parseInt(entrada.val());

        if(billetera >= precio) {
            let propiedad = {
                descripcion: descripcion.val(),
                entrada: entrada.val(),
                hipoteca: hipoteca.val(),
                ingreso: ingreso.val()
            }
    
            usuario.billetera = billetera - precio;
            usuario.propiedades.push(propiedad);
            guardarDatos('usuario', usuario);
            renderizarPropiedades(usuario.propiedades);
            renderizarHipotecas(usuario.propiedades);
            evaluarProgreso();
            exitoModal('Se completo la transaccion correctamente');
        } else errorModal('No tienes suficiente dinero');
    }

    descripcion.val('');
    entrada.val('');
    hipoteca.val('');
    ingreso.val('');
});


$('.btn-prestarse').click(() => {
    let descripcion = $('#descripcionPrestamo');
    let monto = $('#montoPrestamo');
    let interes = $('#interesPrestamo');

    let descripcionVal = validarInput(descripcion);
    let montoVal = validarInput(monto);
    if (descripcionVal && montoVal) {
        if (interes.val() != '' && interes.val() != ' ') interes = interes.val();
        else interes = parseInt(monto.val()) / 10;
        
        let prestamo = {
            descripcion: descripcion.val(),
            monto: monto.val(),
            interes: interes
        };

        usuario.billetera = parseInt(usuario.billetera) + parseInt(monto.val());
        usuario.prestamos.push(prestamo);
        guardarDatos('usuario', usuario);
        renderizarPrestamos(usuario.prestamos);
        evaluarProgreso();
        exitoModal('Se completo la transaccion correctamente');
    }

    descripcion.val('');
    monto.val('');
    $('#interesPrestamo').val('');
});