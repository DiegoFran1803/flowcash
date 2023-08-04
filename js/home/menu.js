if(usuario.configuracion.audio) {
    $('.btn-audio').removeClass('fa-volume-xmark');
    $('.btn-audio').addClass('fa-volume-high');
} else {
    $('.btn-audio').removeClass('fa-volume-high');
    $('.btn-audio').addClass('fa-volume-xmark');
}

$('.btn-audio').click(() => {
    if(usuario.configuracion.audio) {
        $('.btn-audio').removeClass('fa-volume-high');
        $('.btn-audio').addClass('fa-volume-xmark');

        usuario.configuracion.audio = false;
        guardarDatos('usuario', usuario);
    } else {
        $('.btn-audio').removeClass('fa-volume-xmark');
        $('.btn-audio').addClass('fa-volume-high');

        usuario.configuracion.audio = true;
        guardarDatos('usuario', usuario);
    }
});

$('.btn-salir').click(() => {
    confirmacionModal('Seguro que desea salir de la partida, se perderan todos los datos');
    $('.btn-confirmacion').click(() => {
        $(location).attr('href', './index.html');
    });
});