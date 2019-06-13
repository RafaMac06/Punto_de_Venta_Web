import React, { Component } from 'react';
import '../../estilos_css/verTicket.css';
//import {Modal} from 'react-bootsrap';

class Cliente extends Component {
  render() {
    return (
      <div class="Content d-flex">
        <div className="">
          <div className="col">
            {/*Crreamos el pequemo navBar con los botones y buscador*/}
            <nav class="d-flex navbar navbar-icon-top navbar-expand-lg navbar-dark">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="">
                  <small id="emailHelp" class="form-text text-muted  text-left">No. de ticket</small>
                  <input type="number" name="bday" ></input>
                </div>
                <button class="btn btn-outline-dark my-2 ml-1 my-sm-0" type="button" data-toggle="modal" data-target="#agregar">Generar</button>
                <button class="btn btn-outline-dark my-2 ml-auto my-sm-0" type="button" data-toggle="modal" data-target="#facturarVenta">Facturar venta</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#departamentos">Reimpirmir</button>
                <button class="btn btn-outline-success ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#devolverSeleccionado">Devolver modificados</button>
                <button class="btn btn-outline-danger ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#cancelarVenta">Cancelar venta</button>

              </div>
            </nav>
          </div>
          {/*Información principal*/}
          <div className="d-flex ">
            {/*Fecha*/}
            <div className="col-sm 5 border border-dark rounded">
              <div className="d-flex">
                <div className="d-flex">
                  <i class="fas fa-user"></i>
                  <p className="font-weight-bold mr-2" >Cajero:</p>
                  <p > Administrador</p>
                </div>
                <div className="d-flex ml-3">
                  <i class="fas fa-money-bill-wave-alt"></i>
                  <p className="font-weight-bold mr-2" >Facturado: </p>
                  <p > No </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex">
                  <i class="fas fa-calendar-week"></i>
                  <p className="font-weight-bold mr-2" >Fecha: </p>
                  <p > 03/07/2015</p>
                </div>
                <div className="d-flex ml-4">
                  <i class="far fa-clock"></i>
                  <p className="font-weight-bold mr-2" >Hora:</p>
                  <p > 09:50:09</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex">
                  <i class="fas fa-user"></i>
                  <p className="font-weight-bold mr-2" >Cliente:</p>
                  <p > Juan Macías</p>
                </div>
                <div className="d-flex ml-3">
                  <i class="fas fa-money-bill-wave-alt"></i>
                  <p className="font-weight-bold mr-2" >Pago: </p>
                  <p > Efectivo </p>
                </div>
              </div>
            </div>
            {/*Comentarios*/}
            <div className="col col-sm 4 border border-dark rounded">
              <div className="d-flex">
                <i class="fas fa-sticky-note"></i>
                <h4 className="font-weight-bold" >Comentarios </h4>
              </div>
              <p className="d-flex">Venta realizada a Juan Macias a beneficio de la Escuela Primaria 16 de Septiembre</p>
            </div>
            {/*Total*/}
            <div className="col-sm-3  border border-dark rounded">
              <h2 className="font-weight-bold text-center" >Total: $364.00 </h2>
              <h5 className="font-weight-bold text-center">Total productos: 18 </h5>
            </div>
          </div>
          {/*Desplegar Datos*/}
          <table class="table">
            <thead id="encabezado" className=" ">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Devolver <br></br> cantidad</th>
                <th scope="col">Subtotal a <br></br>  devolver</th>
                <th scope="col">Comentario <br></br> devolución</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-light">
                <th scope="row">1</th>
                <td>Platanos</td>
                <td>$26</td>
                <td>10</td>
                <td>$260</td>
                <td contenteditable='true' className="text-danger"></td>
                <td className="text-danger">52</td>
                <td rowspan="2" contenteditable='true'></td>
              </tr>
              <tr className="bg-light">
                <th scope="row">2</th>
                <td>Fresas</td>
                <td>$13</td>
                <td>8</td>
                <td>$104</td>
                <td contenteditable='true' className="text-danger"></td>
                <td className="text-danger"></td>
              </tr>
            </tbody>
          </table>
          {/*Ventana para  Facturar venta*/}
          <div class="modal fade " id="facturarVenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Facturar</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body d-flex">
                  <form>
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-form-label">Selecciona el cliente</label>
                      <select className="custom-select" id="inlineFormCustomSelect">
                        <option selected>Selecciona..</option>
                        <option value="1">Juan Pérez</option>
                        <option value="2">María Macias</option>
                        <option value="3">José Perez León</option>
                      </select>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-form-label">Forma de pago</label>
                      <select className="custom-select" id="inlineFormCustomSelect">
                        <option selected>Selecciona..</option>
                        <option value="1">Efectivo</option>
                        <option value="2">Vales</option>
                        <option value="3">Tarjeta</option>
                      </select>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-form-label">Método de pago</label>
                      <select className="custom-select" id="inlineFormCustomSelect">
                        <option selected>Selecciona..</option>
                        <option value="1">Pago en una sola exhibición</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
          {/* Ventana para Cancelar Venta*/}
          <div class="modal fade bd-example-modal-sm" id="cancelarVenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Cancelar venta</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body ">

                  <p>¿Estás seguro que quieres eliminar la venta?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
          {/*Modals del footer*/}
          
          {/*Ventana para Cobrar*/}
          <div class="modal fade " id="cobrar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Cobrar</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="d-flex justify-content-left">
                    <h3 className="text-center">Total: $32.00</h3>
                    <h6 className="text-center ml-3 align-self-center">Productos: 3</h6>
                  </div>
                  <div className="d-flex">
                    <div class="col-sm-12 ">
                      <div className="d-flex">
                        <button class="btn btn-outline-dark my-2  my-sm-0" type="button" >
                          <i class="fas fa-dollar-sign"></i>
                          Efectivo
                      </button>
                        <button class="btn btn-outline-dark my-2  my-sm-0" type="button" >
                          <i class="fas fa-ticket-alt"></i>
                          Vales
                      </button>
                        <button class="btn btn-outline-dark my-2  my-sm-0" type="button" >
                          <i class="far fa-credit-card"></i>
                          Tarjeta
                      </button>
                      </div>
                      <div className="d-flex mt-3">
                        <label>Cliente:</label>
                        <select className="custom-select col-sm-8 ml-4" id="inlineFormCustomSelect">
                          <option selected>Selecciona..</option>
                          <option value="1">Juan Pérez</option>
                          <option value="2">María Macías</option>
                        </select>
                      </div>
                      <div className="d-flex mt-3">
                        <label>Pagar con:</label>
                        <input class="form-control mr-sm-2 col-sm-8 ml-2" type="text" placeholder="Pagar" aria-label="Search"></input>
                      </div>
                      <div className="d-flex">
                        <label>Cambio:</label>
                        <input class="form-control mr-sm-2 col-sm-8 ml-4" type="text" placeholder="Cambio" aria-label="Search"></input>
                      </div>
                      <div className="d-flex flex-column">
                        <label className="d-flex">Comentario:</label>
                        <textarea class="form-control mr-sm-2 col-sm-11" type="text" aria-label="Search" rows="2"></textarea>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  {/*Opciones de pago*/}
                  <button class="btn btn-outline-dark my-2  my-sm-0" type="button" data-toggle="modal" data-target="#facturarGlobal">
                    <div className="d-flex flex-column">
                      <i class="fas fa-align-left"></i>
                      Cotización
                    </div>
                  </button>
                  <button class="btn btn-outline-dark my-2  my-sm-0" type="button" data-toggle="modal" data-target="#agregar">
                    <div className="d-flex flex-column">
                      <i class="fas fa-receipt"></i>
                      Cobrar con ticket
                    </div>
                  </button>
                  <button class="btn btn-outline-dark my-2  my-sm-0" type="button" data-toggle="modal" data-target="#facturarVenta">
                    <div className="d-flex flex-column">
                      <i class="fas fa-list-ul"></i>
                      Cobrar sin ticket
                      </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Ventana para Cancelar Venta*/}
          <div class="modal fade bd-example-modal-sm" id="cancelarVentaFooter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Cancelar venta</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body ">

                  <p>¿Estás seguro que quieres eliminar la venta?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Cliente;
