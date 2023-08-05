let plantillaModals = `
<!-- Error -->
<div class="modal fade" id="dangerModal" tabindex="-1" aria-labelledby="dangerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-danger text-white">
                <h1 class="modal-title fs-5" id="dangerModalLabel"><b>Error</b></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-0 mensaje-error"></p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>
<!-- Error -->

<!-- Advertencia -->
<div class="modal fade" id="warningModal" tabindex="-1" aria-labelledby="warningModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <h1 class="modal-title fs-5" id="warningModalLabel"><b>Advertencia</b></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-0 mensaje-advertencia"></p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>
<!-- Advertencia -->

<!-- Exito -->
<div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-success text-white">
                <h1 class="modal-title fs-5" id="successModalLabel"><b>Éxito</b></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-0 mensaje-exito"></p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>
<!-- Exito -->

<!-- Mensaje -->
<div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="messageModalLabel"><b>Mensaje</b></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-0 mensaje"></p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary btn-confirmacion" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>
<!-- Mensaje -->

<!-- Confirmacion -->
<div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="confirmModalLabel"><b>Confirmación</b></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-0 mensaje-confirmacion"></p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary btn-confirmacion" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>
<!-- Confirmacion -->

<!-- Activos -->
<div class="modal fade" id="comprarActivosModal" tabindex="-1" aria-labelledby="comprarActivosModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="comprarActivosModalLabel">Comprar Activos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item w-50" role="presentation">
                        <button class="nav-link w-100 active" id="pills-acciones-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-acciones" type="button" role="tab" aria-controls="pills-acciones"
                            aria-selected="true">Acciones</button>
                    </li>
                    <li class="nav-item w-50" role="presentation">
                        <button class="nav-link w-100" id="pills-propiedades-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-propiedades" type="button" role="tab"
                            aria-controls="pills-propiedades" aria-selected="false">Propiedades</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-acciones" role="tabpanel"
                        aria-labelledby="pills-acciones-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="descripcionAccion" class="form-label"><b>Descripcion:</b></label>
                            <input type="text" class="form-control" id="descripcionAccion"
                                placeholder="Descripcion">
                        </div>
                        <div class="mb-3">
                            <label for="cantidadAccion" class="form-label"><b>Cantidad:</b></label>
                            <input type="number" class="form-control" id="cantidadAccion" placeholder="Cantidad">
                        </div>
                        <div class="mb-3">
                            <label for="costoAccion" class="form-label"><b>Costo/Unidad:</b></label>
                            <input type="number" class="form-control" id="costoAccion" placeholder="Costo/unidad">
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-info btn-comprar-accion"
                                data-bs-dismiss="modal">Comprar</button>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-propiedades" role="tabpanel"
                        aria-labelledby="pills-propiedades-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="descripcionPropiedad" class="form-label"><b>Descripcion:</b></label>
                            <input type="text" class="form-control" id="descripcionPropiedad"
                                placeholder="Descripcion">
                        </div>
                        <div class="mb-3">
                            <label for="entradaPropiedad" class="form-label"><b>Pago Inicial o Entrada:</b></label>
                            <input type="number" class="form-control" id="entradaPropiedad"
                                placeholder="Pago inicial o entrada">
                        </div>
                        <div class="mb-3">
                            <label for="hipotecaPropiedad" class="form-label"><b>Hipoteca:</b></label>
                            <input type="number" class="form-control" id="hipotecaPropiedad" placeholder="Hipoteca">
                        </div>
                        <div>
                            <label for="ingresoPropiedad" class="form-label"><b>Ingreso Pasivo:</b></label>
                            <input type="number" class="form-control" id="ingresoPropiedad"
                                placeholder="Ingreso pasivo">
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-info btn-comprar-propiedad"
                                data-bs-dismiss="modal">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Activos -->

<!-- Prestamos -->
<div class="modal fade" id="realizarPrestamoModal" tabindex="-1" aria-labelledby="realizarPrestamoModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="realizarPrestamoModalLabel">Realizar Prestamo</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="descripcionPrestamo" class="form-label"><b>Descripcion:</b></label>
                    <input type="text" class="form-control" id="descripcionPrestamo" placeholder="Descripcion">
                </div>
                <div class="mb-4">
                    <label for="montoPrestamo" class="form-label"><b>Monto:</b></label>
                    <input type="number" class="form-control" id="montoPrestamo" placeholder="Monto">
                </div>
                <button class="btn btn-sm btn-primary w-100 mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseIntereses" aria-expanded="false" aria-controls="collapseIntereses">
                    Personalizar Intereses
                </button>
                <div>
                    <div class="collapse collapse-horizontal" id="collapseIntereses">
                        <div>
                            <label for="interesPrestamo" class="form-label"><b>Interes:</b></label>
                            <input type="number" class="form-control" id="interesPrestamo" placeholder="Interes">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-warning btn-prestarse"
                    data-bs-dismiss="modal">Prestarse</button>
            </div>
        </div>
    </div>
</div>
<!-- Prestamos -->

<!-- Vender Acciones -->
<div class="modal fade" id="adminAccionesModal" tabindex="-1" aria-labelledby="adminAccionesModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="adminAccionesModalLabel">Vender Acciones</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="ventaAccion" class="form-label"><b>Precio de Venta por Accion:</b></label>
                    <input type="number" class="form-control" id="ventaAccion"
                        placeholder="Precio de venta por accion">
                </div>

                <label class="form-label"><b>Cambiar Cantidad de Acciones:</b></label>
                <button class="btn btn-sm btn-primary w-100 mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseCambioCantidad" aria-expanded="false" aria-controls="collapseCambioCantidad">
                    Cambiar cantidad
                </button>
                <div>
                <div class="collapse collapse-horizontal" id="collapseCambioCantidad">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-sm btn-outline-primary w-100 me-1 btn-duplicar"
                            data-bs-dismiss="modal">Duplicar</button>
                        <button class="btn btn-sm btn-outline-primary w-100 ms-1 btn-demediar"
                            data-bs-dismiss="modal">Demediar</button>
                    </div>
                </div>
            </div>

            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-info btn-vender-acciones"
                    data-bs-dismiss="modal">Vender</button>
            </div>
        </div>
    </div>
</div>
<!-- Vender Acciones -->

<!-- Vender Propiedades -->
<div class="modal fade" id="adminPropiedadesModal" tabindex="-1" aria-labelledby="adminPropiedadesModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="adminPropiedadesModalLabel">Vender Propiedades</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="ventaPropiedad" class="form-label"><b>Precio de Venta:</b></label>
                    <input type="number" class="form-control" id="ventaPropiedad" placeholder="Precio de venta">
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-info btn-vender-propiedad"
                    data-bs-dismiss="modal">Vender</button>
            </div>
        </div>
    </div>
</div>
<!-- Vender Propiedades -->

<!-- Vcitoria -->
<div class="modal fade" id="victoryModal" tabindex="-1" aria-labelledby="victoryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body p-0">
                <section class="w-100 vh-100 bg-success pantalla-bloqueo">
                    <div class="h-100 d-flex flex-column justify-content-center">
                        <img src="./img/billetera-kawaii-victoria.png" class="w-100">
                        <div class="container text-center text-white">
                            <h1><b>¡Felicidades!</b></h1>
                            <p>Has ganado, tu ingresos pasivos superan a tus gastos por S/. <span class="exceso"></span></p>
                            <a href="./index.html" class="btn btn-primary w-100">Nueva partida</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
<!-- Vcitoria -->

`;

$('.modals').html(plantillaModals);