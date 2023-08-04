const dangerModal = new bootstrap.Modal('#dangerModal');
const warningModal = new bootstrap.Modal('#warningModal');
const successModal = new bootstrap.Modal('#successModal');
const confirmModal = new bootstrap.Modal('#confirmModal');
const messageModal = new bootstrap.Modal('#messageModal');
const victoryModal = new bootstrap.Modal('#victoryModal');

function errorModal(mensaje) {
    $('.mensaje-error').text(mensaje);
    cargarSonido('./audio/error.mp3');
    dangerModal.show();
}

function advertenciaModal(mensaje) {
    $('.mensaje-advertencia').text(mensaje);
    cargarSonido('./audio/advertencia.mp3');
    warningModal.show();
}

function exitoModal(mensaje) {
    $('.mensaje-exito').text(mensaje);
    cargarSonido('./audio/exito.mp3');
    successModal.show();
}

function mensajeModal(mensaje) {
    $('.mensaje').text(mensaje);
    cargarSonido('./audio/mensaje.mp3');
    messageModal.show();
}

function confirmacionModal(mensaje) {
    $('.mensaje-confirmacion').text(mensaje);
    cargarSonido('./audio/mensaje.mp3');
    confirmModal.show();
}

function victoriaModal() {
    cargarSonido('./audio/victoria.mp3');
    $('.exceso').text(totalIngresosPasivos(usuario.propiedades) - totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario.prestamos));
    victoryModal.show();
}