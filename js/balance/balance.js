let usuario = obtenerDatos('usuario');

function evaluarProgreso() {
    let progreso = calcularProgreso();
    let flujo = calcularPagoMensual();
    let patrimonio = calcularPatrimonio();
    
    $('.progreso').css('width', progreso + '%');
    $('.patrimonio').text(patrimonio);
    $('.billetera').text(usuario.billetera);

    if (progreso >= 100) victoriaModal();
    if (flujo < 0) advertenciaModal('Estas en bancarrota. Paga tus deudas, si no tienes dienro prueba vendiendo tus activos');
    if(patrimonio < 0) $('.patrimonio').addClass('text-danger');
    else $('.patrimonio').removeClass('text-danger');
}