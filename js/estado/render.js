let usuario = obtenerDatos('usuario');

$('.ficha').attr('src', './img/fichas/' + usuario.ficha + '.avif');
$('.progreso').css('width', calcularProgreso() + '%');
$('.billetera').text(usuario.billetera);
$('.salario').text(usuario.salario);
$('.impuestos').text(usuario.impuestos);
$('.gastos').text(usuario.gastos);
$('.hijos').text(parseInt(usuario.hijos.cantidad) * parseInt(usuario.hijos.costo));
$('.total-ingresos').text(totalIngresos(usuario.salario, usuario.propiedades))
$('.total-gastos').text(totalGastos(usuario.impuestos, usuario.gastos, usuario.hijos, usuario.deudas, usuario.prestamos));

if(usuario.propiedades.length) {
    $('.no-ingresos').css('display', 'none');

    usuario.propiedades.forEach(propiedad => {
        let plantilla = `
            <tr>
                <td scope="col">`+ propiedad.descripcion +`</td>
                <td scope="col">S/. `+ propiedad.ingreso +`</td>
            </tr>
        `;

        $('.ingresos').after(plantilla);
    });
}

for (let i = usuario.deudas.length - 1; i >= 0; i--) {
    const deuda = usuario.deudas[i];
    
    let plantilla = `
        <tr>
            <td scope="col">`+ deuda.descripcion +`</td>
            <td scope="col">S/. `+ deuda.interes +`</td>
        </tr>
    `;
    
    $('.deudas').prepend(plantilla);
}

if(usuario.prestamos.length) {
    $('.no-prestamos').css('display', 'none');

    usuario.prestamos.forEach(prestamo => {
        let plantilla = `
            <tr>
                <td scope="col">`+ prestamo.descripcion +`</td>
                <td scope="col">S/. `+ prestamo.interes +`</td>
            </tr>
        `;
        
        $('.prestamos').after(plantilla);
    });
}