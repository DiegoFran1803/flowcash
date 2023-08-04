function pagarDeudas() {
    $('.deuda').each(i => {
        let deuda = $($('.deuda')[i]);

        deuda.click(() => {
            let monto = parseInt(usuario.deudas[i].monto);

            if (monto == 0) mensajeModal('Esta deuda esta pagada o no existe');
            else confirmacionModal('Seguro que desea pagar esta deuda de S/. ' + usuario.deudas[i].monto);

            $('.btn-confirmacion').off();
            $('.btn-confirmacion').click(() => {
                let billetera =  parseInt(usuario.billetera);

                if(billetera >= monto) {
                    usuario.billetera = billetera - monto;
                    usuario.deudas[i].monto = 0;
                    usuario.deudas[i].interes = 0;
                    guardarDatos('usuario', usuario);
                    renderizarDeudas(usuario.deudas);
                    evaluarProgreso();
                    exitoModal('Se completo la transaccion correctamente');
                } else errorModal('No tienes suficiente dinero');
            });
        });
    });
}

function pagarPrestamos() {
    $('.prestamo').each(i => {
        let prestamo = $($('.prestamo')[i]);

        prestamo.click(() => {
            let index = (usuario.prestamos.length - 1) - i;
            let monto = parseInt(usuario.prestamos[index].monto);

            confirmacionModal('Seguro que desea pagar esta deuda de S/. ' + usuario.prestamos[index].monto);

            $('.btn-confirmacion').off();
            $('.btn-confirmacion').click(() => {
                let billetera = parseInt(usuario.billetera);

                if(billetera >= monto) {
                    usuario.billetera = billetera - monto;
                    usuario.prestamos.splice(index, 1);
                    guardarDatos('usuario', usuario);
                    renderizarPrestamos(usuario.prestamos);
                    evaluarProgreso();
                    exitoModal('Se completo la transaccion correctamente');
                } else errorModal('No tienes suficiente dinero');

            });
        });
    });
}

function venderAcciones() {
    $('.accion').each(i => {
        let accion = $($('.accion')[i]);

        accion.click(() => {
            $('.btn-vender-acciones').off();
            $('.btn-vender-acciones').click(() => {
                let venta = $('#ventaAccion');

                if(validarInput(venta)) {
                    usuario.billetera = parseInt(usuario.billetera) + (parseInt(usuario.acciones[i].cantidad) * parseInt(venta.val()));
                    usuario.acciones.splice(i, 1);
                    guardarDatos('usuario', usuario);
                    renderizarAcicones(usuario.acciones);
                    evaluarProgreso();
                    exitoModal('Se completo la transaccion correctamente');
                }
            });

            $('.btn-duplicar').off();
            $('.btn-duplicar').click(() => {
                usuario.acciones[i].cantidad = parseInt(usuario.acciones[i].cantidad) * 2;
                guardarDatos('usuario', usuario);

                renderizarAcicones(usuario.acciones);
            });

            $('.btn-demediar').off();
            $('.btn-demediar').click(() => {
                let demediado = parseInt(usuario.acciones[i].cantidad) / 2;
                if(demediado < 1) demediado = 1;
                
                usuario.acciones[i].cantidad = Math.trunc(demediado);
                guardarDatos('usuario', usuario);

                renderizarAcicones(usuario.acciones);
                evaluarProgreso();
            });
        });
    });
}

function venderPropiedades() {
    $('.propiedad').each(i => {
        let propiedad = $($('.propiedad')[i]);

        propiedad.click(() => {
            $('.btn-vender-propiedad').off();
            $('.btn-vender-propiedad').click(() => {
                let venta = $('#ventaPropiedad');

                if(validarInput(venta)) {
                    let total = parseInt(venta.val()) - parseInt(usuario.propiedades[i].hipoteca);

                    if(total >= 0) {
                        usuario.billetera = parseInt(usuario.billetera) + total;
                        usuario.propiedades.splice(i, 1);
                        guardarDatos('usuario', usuario);
                        renderizarPropiedades(usuario.propiedades);
                        evaluarProgreso();

                        if(total == 0) advertenciaModal('Se completo la transaccion correctamente, pero no esta recibiendo ninguna ganacia de esta venta')
                        else exitoModal('Se completo la transaccion correctamente');
                    } else errorModal('Esta accion no pudo completarse, ya que solo le traera perdidas economicas');

                }
            });
        });
    });
}