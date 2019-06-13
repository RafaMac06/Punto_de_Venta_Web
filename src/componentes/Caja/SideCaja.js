import React, { Component } from 'react';
import '../../estilos_css/side.css';

class SideCaja extends Component {
  render() {
    return (
      <div className="side-menu" id="wrapper">
        {/*   Sidebar  */}
        <div id="sidebar-wrapper">
          <div className="sidebar-heading bg-secondary text-light font-weight-bold">Caja</div>
          <div className="list-group list-group-flush">
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#">Nuevo ticket</a>
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#">Buscar ticket</a>
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#ticketsPendientes">Tickets pendientes</a>
            <a href=" " className="list-group-item list-group-item-action" data-toggle="modal" data-target="#prodTemporal">Productos Temporales</a>
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#entradas_salidas">Entradas / Salidas</a>
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#abonosClientes">Abonos Clientes</a>
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#corte">Corte</a>
            <a href=" " className="list-group-item list-group-item-action " data-toggle="modal" data-target="#facturaGlobal">Facturar global</a>
          </div>
        </div>

        {/* Productos Temporales */}
        <div className="modal fade" id="prodTemporal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Productos Temporales</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <div className="d-flex align-items-left">
                  <input type="text" className="form-control col-sm-6 mr-2 mb-2" id="nombre_producto" placeholder="Nombre Producto"></input>
                  <button className="btn btn-outline-dark mb-2  mr-auto" type="button">
                    <i className="fas fa-plus mr-2"></i>
                    Agregar
              </button>
                </div>
                <table className="table">
                  <thead id="encabezado" className=" ">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio (Unitario)</th>
                      <th scope="col">Precio Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th scope="row">1</th>
                      <td>Bolsa de Almendra</td>
                      <td>5</td>
                      <td>$15</td>
                      <td>$75</td>
                      <td className="">
                        <button className="ml-1" type="submit">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Ventana Productos Temporales */}

        {/* Entradas / Salidas */}
        <div className="modal fade" id="entradas_salidas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Entradas / Salidas</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <div className="d-flex align-items-left">
                  <p className="my-2 mr-1">$</p>
                  <input type="number" className="form-control col-sm-8 mr-2" id="montoaIngresar" aria-describedby="monto" placeholder="Monto a Ingresar"></input>
                  <button className="btn btn-outline-dark mb-2  mr-auto" type="button">
                    <i className="fas fa-plus mr-2"></i>
                    Agregar
              </button>
                </div>

                <div className="row">
                  <small id="transaccion" className="form-text text-muted col-sm-6">Tipo de Transacción</small>
                </div>
                <div className="col-sm-6">
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"></input>
                    <label className="custom-control-label" for="customRadioInline1">Entrada</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"></input>
                    <label className="custom-control-label" for="customRadioInline2">Salida</label>
                  </div>
                </div>
                <div className="form-group">
                  <label for="comment">Ingresa un Comentario:</label>
                  <textarea className="form-control" rows="3" id="comment"></textarea>
                </div>

                <table className="table">
                  <thead id="encabezado" className=" ">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Monto</th>
                      <th scope="col">Tipo</th>
                      <th scope="col">Comentario</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th scope="row">1</th>
                      <td>500</td>
                      <td>Entrada</td>
                      <td>Pago de Costales</td>
                      <td className="">
                        <button className="ml-1" type="submit">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-outline-dark"><i className="fas fa-print"></i>Imprimir Comprobante</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Entradas / Salidas */}

        {/*Abonos de Clientes*/}
        <div class="modal fade bd-example-modal-xl" id="abonosClientes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Abonos de Clientes</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <small id="transaccion" className="form-text text-muted">Permite Registrar los Abonos de tus Clientes</small>
              <div class="modal-body d-flex">
                <div className="col-sm-7">
                  <div className="d-flex align-inline">
                    <i className="fas fa-search mt-2 mr-1"></i>
                    <input className="form-control mr-sm-1 mb-1" type="text" placeholder="Nombre del Cliente" aria-label="Search"></input>
                    <button className="btn btn-outline-dark  mb-sm-1" type="button">Buscar</button>
                  </div>
                  <table class="table">
                    <thead id="encabezado" className=" ">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Adeudo</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-info">
                        <th scope="row">1</th>
                        <td>Carlos Martinez</td>
                        <td>$250</td>
                      </tr>
                      <tr className="">
                        <th scope="row">2</th>
                        <td>Luis Ernesto</td>
                        <td>$1230</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="col-sm-5 bg-info">
                  <form>
                    <div>
                      <i class="fas fa-user"></i>
                      <h5 class="modal-title" id="exampleModalLabel">Carlos Martinez</h5>
                    </div>
                    <div class="form-group row">
                      <label className="col-form-label ml-4">Monto que desea abonar:</label>
                      <div className="d-flex align-inline">
                        <h6 className="my-2 ml-2">$</h6>
                        <input type="number" class="form-control ml-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Monto"></input>
                      </div>
                    </div>
                    <div class="form-group col-sm-6 mr-auto">
                      <h4>Restan: $ 140</h4>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-sm btn-outline-dark"><i className="fas fa-print"></i>Imprimir Comprobante</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Abonos de Clientes*/}

        {/*Corte Caja*/}
        <div class="modal fade bd-example-modal-xl" id="corte" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Corte de Caja</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="d-flex align-items-inline">
                <div className="form col-md-4">
                  <div className="d-flex align-inline">
                    <i class="far fa-calendar-alt mt-1 ml-4"></i>
                    <small id="transaccion" className="form-text text-muted ml-2">Fecha de Corte</small>
                  </div>
                  <input type="date" class="form-control ml-4" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-inline">
                    <i class="fas fa-user-tie mt-1 ml-4"></i>
                    <small id="transaccion" className="form-text text-muted ml-2">Selecione Cajero</small>
                  </div>
                  <select id="select" class="form-control ml-3">
                    <option value="">Administrador</option>
                    <option value="">Caro Castellano</option>
                    <option value="">Ernesto Valdez</option>
                    <option value="">Oscar Perez</option>
                  </select>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                  <button type="button" className="btn btn-sm btn-outline-dark my-3">
                    <i class="fas fa-print"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-dark ml-4 my-3 ">
                    <i class="far fa-file-pdf"></i>
                  </button>
                </div>
              </div>
              <div class="modal-body d-flex">
                <div className="col-sm-5">
                  <table class="table table-striped">
                    <tbody>
                      <td>
                        <tr>Ventas Totales:</tr>
                        <tr>Cantidad Inicial:</tr>
                        <tr>Entradas de Efectivo:</tr>
                        <tr>Salidas de Efectivo:</tr>
                        <tr>Abono de Clientes:</tr>
                        <tr>Devoluciones:</tr>
                      </td>
                      <td>
                        <tr>"$ 265.00"</tr>
                        <tr>$ 1,230</tr>
                        <tr>$ 0.00</tr>
                        <tr>$ 0.00</tr>
                        <tr>$ 0.00</tr>
                      </td>
                    </tbody>
                    <tbottom>
                      <th scope="col">Total en Caja:</th>
                      <th scope="col">$ 1496.00</th>
                    </tbottom>
                  </table>
                </div>
                <div className="col-sm-7 bg-info">
                  <form className="border border-light mt-2 rounded">
                    <div className="d-flex align-inline">
                    <i class="fas fa-money-bill-alt mt-1 ml-4"></i>
                      <small className="form-text text-light ml-2">Abono de Clientes</small>
                    </div>
                    <table class="table">
                      <thead id="encabezado" className=" ">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Adeudo</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <th scope="row">1</th>
                          <td>Carlos Martinez</td>
                          <td>$250</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <form className="border border-light mt-2 rounded">
                    <div className="d-flex align-inline">
                      <i class="fas fa-money-bill-alt mt-1 ml-4"></i>
                      <small className="form-text text-light ml-2">Venta por Impuesto</small>
                    </div>
                    <table class="table">
                      <thead id="encabezado" className=" ">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Impuesto</th>
                          <th scope="col">Tasa</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <th scope="row">1</th>
                          <td>Ninguno </td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <form className="border border-light mt-2 rounded mb-2">
                    <div className="d-flex align-inline">
                      <i class="fas fa-money-bill-alt mt-1 ml-4"></i>
                      <small className="form-text text-light ml-2">Venta por Tipo</small>
                    </div>
                    <table class="table">
                      <thead id="encabezado" className=" ">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Tipo de Venta</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <th scope="row">1</th>
                          <td>Efectivo</td>
                          <td>$250</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Corte Caja*/}
        {/* Ventana para Factura global*/}
        <div class="modal fade bd-example-modal-sm" id="facturaGlobal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Factura global</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body d-flex flex-column ">
                  <p>Selecciona el periodo del que deseas facturar</p>
                  <p for="exampleInputEmail1" class="col-form-label text-left ">Inicio</p>
                  <input type="date" name="bday" className="ml-2"></input>
                  <p for="exampleInputEmail1" class="col-form-label text-left">Fin</p>
                  <input type="date" name="bday" className="ml-2"></input>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary">Generar</button>
                </div>
              </div>
            </div>
          </div>
          {/*Ventana para Tickets pendientes*/}
          <div class="modal fade " id="ticketsPendientes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Tickets pendientes</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <i class="fas fa-search mr-2"></i>
                    <input class="form-control mr-sm-2 col-sm-5" type="text" placeholder="Nombre de cliente" aria-label="Search"></input>
                  </div>
                  <table class="table">
                    <thead id="encabezado" className=" ">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pendientes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-light">
                        <th scope="row">1</th>
                        <td>Juan</td>

                      </tr>
                      <tr className="bg-light">
                        <th scope="row">2</th>
                        <td>María</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary">Abrir</button>
                </div>
              </div>
            </div>
          </div>
      </div >
    );
  }
}


export default SideCaja;
