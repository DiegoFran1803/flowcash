function obtenerDatos(nombre) {
    return JSON.parse(localStorage.getItem(nombre));
}

function guardarDatos(nombre, dato) {
    localStorage.setItem(nombre, JSON.stringify(dato));
}

function validarInput(input) {
    if (input.val() != '' && input.val() != ' ') return true;
    else return false;
}

function cargarSonido(fuente) {
    if(usuario.configuracion.audio) {
        const audio = new Audio(fuente);
        audio.play();
    }
};