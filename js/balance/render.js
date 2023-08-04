$('.ficha').attr('src', './img/fichas/' + usuario.ficha + '.avif');
evaluarProgreso();

function renderizarDeudas(deudas) {
    $('.deuda').remove();

    for (let i = deudas.length - 1; i >= 0; i--) {
        let deuda = deudas[i];
        
        let plantilla = `
            <tr class="deuda">
                <td>`+ deuda.descripcion +`</td>
                <td>`+ deuda.monto +`</td>
            </tr>
        `;
        
        $('.deudas').prepend(plantilla);
    }

    $('.total-pasivos').text(totalPasivos(usuario.deudas, usuario.propiedades, usuario.prestamos));
    pagarDeudas();
}

function renderizarAcicones(acciones) {
    $('.accion').remove();
    if (acciones.length) {
        $('.sin-acciones').css('display', 'none');

        acciones.forEach(accion => {
            let plantilla = `
                <tr class="accion" data-bs-toggle="modal" data-bs-target="#adminAccionesModal">
                    <td>` + accion.descripcion + `</td>
                    <td>` + accion.cantidad + `</td>
                    <td>S/. ` + accion.costo + `</td>
                    <td></td>
                    <td>S/. ` + (parseInt(accion.costo) * parseInt(accion.cantidad)) + `</td>
                </tr>
            `;

            $('.acciones').after(plantilla);
        });

        $('.total-activos').text(totalActivos(usuario.acciones, usuario.propiedades));
        venderAcciones();
    } else $('.sin-acciones').css('display', 'table-row');
}

function renderizarPropiedades(propiedades) {
    $('.propiedad').remove();
    if (propiedades.length) {
        $('.sin-propiedades').css('display', 'none');
        propiedades.forEach(propiedad => {
            let plantilla = `
                <tr class="propiedad" data-bs-toggle="modal" data-bs-target="#adminPropiedadesModal">
                    <td>` + propiedad.descripcion + `</td>
                    <td></td>
                    <td></td>
                    <td>S/. ` + propiedad.entrada + `</td>
                    <td>S/. ` + (parseInt(propiedad.entrada) + parseInt(propiedad.hipoteca)) + `</td>
                </tr>
            `;

            $('.propiedades').after(plantilla);
        });

        $('.total-activos').text(totalActivos(usuario.acciones, usuario.propiedades));
        venderPropiedades();
    } else $('.sin-propiedades').css('display', 'table-row');
}

function renderizarHipotecas(propiedades) {
    $('.hipoteca').remove();
    if (propiedades.length) {
        $('.sin-hipotecas').css('display', 'none');
        propiedades.forEach(propiedad => {
            let plantilla = `
                <tr class="hipoteca">
                    <td>` + propiedad.descripcion + `</td>
                    <td>` + propiedad.hipoteca + `</td>
                </tr>
            `;

            $('.hipotecas').after(plantilla);
        });

        $('.total-pasivos').text(totalPasivos(usuario.deudas, usuario.propiedades, usuario.prestamos));
    } else $('.sin-hipotecas').css('display', 'table-row');
}

function renderizarPrestamos(prestamos) {
    $('.prestamo').remove();
    if (prestamos.length) {
        $('.sin-prestamos').css('display', 'none');
        prestamos.forEach(prestamo => {
            let plantilla = `
                <tr class="prestamo">
                    <td>` + prestamo.descripcion + `</td>
                    <td>` + prestamo.monto + `</td>
                </tr>
            `;

            $('.prestamos').after(plantilla);
        });

        $('.total-pasivos').text(totalPasivos(usuario.deudas, usuario.propiedades, usuario.prestamos));
        pagarPrestamos();
    } else $('.sin-prestamos').css('display', 'table-row');
}

renderizarPropiedades(usuario.propiedades);
renderizarAcicones(usuario.acciones);
renderizarDeudas(usuario.deudas);
renderizarHipotecas(usuario.propiedades);
renderizarPrestamos(usuario.prestamos);