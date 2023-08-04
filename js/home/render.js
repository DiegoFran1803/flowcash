let usuario = obtenerDatos('usuario');

$('.ficha').attr('src', './img/fichas/' + usuario.ficha + '.avif');
$('.nombre').text(usuario.nombre);
$('.profesion').text(usuario.profesion);
$('.hijos').text(usuario.hijos.cantidad);

$('.progreso').text(calcularProgreso() + '%');
$('.barra-progreso').css('width', calcularProgreso() + '%');

$('.billetera').text(usuario.billetera);
$('.patrimonio').text(calcularPatrimonio());

$('.salario').text(usuario.salario);
$('.ingresos-pasivos').text(totalIngresosPasivos(usuario.propiedades));
$('.ingresos').text(totalIngresos(usuario.salario, usuario.propiedades));
$('.gastos').text(totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario.prestamos));
$('.flujo').text(calcularPagoMensual());