$('.btn-billetera').each(i => {
    let btn = $($('.btn-billetera')[i])

    btn.click(() => {
        let monto = $('#monto');

        if (validarInput(monto)) {
            let billetera = 0;
            if (i == 0) billetera = parseInt(usuario.billetera) + parseInt(monto.val());
            else billetera = parseInt(usuario.billetera) - parseInt(monto.val());

            if (billetera < 0) billetera = 0;

            usuario.billetera = billetera;
            guardarDatos('usuario', usuario);
            $('.billetera').text(usuario.billetera);
        }

        monto.val('');
    });
});

$('.btn-flujo').click(() => {
    let billetera = parseInt(usuario.billetera) + calcularPagoMensual();
    if (billetera < 0) billetera = 0;

    usuario.billetera = billetera;
    guardarDatos('usuario', usuario);
    $('.billetera').text(usuario.billetera);
});