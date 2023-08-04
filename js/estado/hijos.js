$('.btn-hijo').click(() => {
    confirmacionModal('Estas seguro que deseas tener otro hijo, esta acción no puede revertirse');
    $('.btn-confirmacion').click(() => {
        let hijos = parseInt(usuario.hijos.cantidad) + 1;

        if(hijos <= 3) {
            usuario.hijos.cantidad = hijos;
            guardarDatos('usuario', usuario);
            $('.hijos').text(parseInt(usuario.hijos.cantidad) * parseInt(usuario.hijos.costo));
            $('.progreso').css('width', calcularProgreso() + '%');
            $('.total-gastos').text(totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario.prestamos));

            exitoModal('Felicidades, tienes un nuevo hijo');
        } else {
            errorModal('No puedes tener mas de 3 hijos');
        }
    })
});