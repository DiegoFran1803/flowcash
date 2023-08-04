let nombre;
let ficha;
let fichas = ['astronauta', 'cerebro', 'chancho', 'cocodrilo', 'conejo', 'dona', 'empresario', 'futbolista', 'hamburguesa', 'hotdog', 'lapiz', 'marciano', 'ninnia', 'pandillero', 'pinguino', 'pizza', 'robot', 'unicornio'];

fichas.forEach(ficha => {
    let plantilla = `
        <div class="col mb-3 ficha">
            <img src="./img/fichas/`+ ficha +`.avif" class="w-100 rounded-circle">
        </div>
    `;

    $('.fichas').append(plantilla);
});

$('.pantalla-bloqueo').click(() => {
    const audio = new Audio('./audio/start.mp3');
    audio.play();
    
    $('.pantalla-bloqueo').animate({
        opacity: '0'
    }, () => {
        $('.pantalla-bloqueo').css('display', 'none');
        $('.pantalla-nombre').css('display', 'block');
    });
});

$('.btn-nombre').click(() => {
    let campoNombre = $('#nombre');
    if (campoNombre.val() != '' && campoNombre.val() != ' ') {
        nombre = campoNombre.val();

        $('.pantalla-nombre').animate({
            opacity: '0'
        }, () => {
            $('.pantalla-nombre').css('display', 'none');
            $('.pantalla-ruleta').css('display', 'block');
        });
    } else campoNombre.addClass('is-invalid');
});

$('.btn-ruleta').click(() => {
    $('.pantalla-ruleta').animate({
        opacity: '0'
    }, () => {
        $('.pantalla-ruleta').css('display', 'none');
        $('.pantalla-ficha').css('display', 'block');
    });
});

$('.ficha').each(i => {
    $($('.ficha')[i]).click(() => {
        ficha = fichas[i];
        let usuario = tarjetas.find(tarjeta => tarjeta.profesion == profesion);

        usuario.nombre = nombre;
        usuario.ficha = ficha;
        usuario.hijos = {
            cantidad: 0,
            costo: usuario.hijos
        };
        usuario.acciones = [];
        usuario.propiedades = [];
        usuario.prestamos = [];
        usuario.configuracion = {
            audio: true
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));

        $(location).attr('href', './home.html');
    });
});