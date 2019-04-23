import React, { Component } from 'react';
import bananas from '../../../imagenes/bananas.png';
import '../../../estilos_css/clientes.css';
//import {Modal} from 'react-bootsrap';

class Inventario extends Component {
  render() {
    return (
      <div class="container-fluid ">
        <div className="row">
          <div className="col">
            {/*Crreamos el pequemo navBar con los botones y buscador*/}
            <nav class="d-flex navbar navbar-icon-top navbar-expand-lg navbar-dark ">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <i class="fas fa-search mr-2"></i>
                <input class="form-control mr-sm-2 col-sm-5" type="text" placeholder="Nombre de cliente" aria-label="Search"></input>
                <button class="btn btn-outline-dark my-2 my-sm-0 ml-auto" type="button" data-toggle="modal" data-target="#agregar">Agregar</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#importar">Importar</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#detalles">Detalles abonos</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#liquidar">Liquidar</button>
              </div>
            </nav>
            {/*Información sobre catalogo*/}
            <div className="d-flex">
              <p className="text-dark ">Adeudos: $90</p>
              <p className="text-dark ml-auto">Total clientes: 3</p>
              <div className="bg-info"></div>
            </div>
          </div>

        </div>
        {/*Desplegar productos*/}
        <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Domicilio</th>
              <th scope="col">RFC</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Máximo</th>
              <th scope="col">Disponible</th>
              <th scope="col">Adeuda</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-info">
              <th scope="row">1</th>
              <td>Juan Pérez</td>
              <td>Av.Convención Nte</td>
              <td>  </td>
              <td>4951271298</td>
              <td>$100</td>
              <td>$80</td>
              <td>$20</td>

              <td className="">
                <button class="" type="submit">
                  <i class="fas fa-pen"></i>
                </button>
                <button class="ml-1" type="submit">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>María Sanchez</td>
              <td>Bosques</td>
              <td>   </td>
              <td>44926261</td>
              <td>$500</td>
              <td>$450</td>
              <td>$50</td>
              <td className="">
                <button class="" type="submit">
                  <i class="fas fa-pen"></i>
                </button>
                <button class="ml-1" type="submit">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Pedro Robles</td>
              <td>Lomas del Sur</td>
              <td>   </td>
              <td>449464378</td>
              <td>$380</td>
              <td>$360</td>
              <td>$20</td>
              <td className="">
                <button class="" type="submit">
                  <i class="fas fa-pen"></i>
                </button>
                <button class="ml-1" type="submit">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/*Ventana para agregar Clientes*/}
        <div class="modal fade bd-example-modal-lg" id="agregar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <p class="encabezado text-left">General</p>
                  <div class="form-group d-flex">
                    <div class="form-group d-flex col-sm-6">
                      <label for="exampleInputEmail1" class=" col-form-label">Nombre</label>
                      <input type="text" class="form-control ml-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group d-flex col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Teléfono</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="exampleInputPassword1" class="col-sm-2 col-form-label">Domicilio</label>
                    <input type="text" class="form-control col-sm-10" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <div class="form-group row">
                    <div class="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Adeudo inicial</label>
                      <input type="number" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Máximo</label>
                      <input type="number" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  <p class="encabezado text-left">Facturación</p>
                  {/* Facturación*/}
                  <div class="form-group row">
                    <div class="form-group row row col-sm-5">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">R.F.C</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group row row col-sm-7">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Calle</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">No. Exterior</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">No. Interior</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Colonia</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Municipio</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="form-group row row col-sm-8">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Estado</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group row row col-sm-4">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">C.P</label>
                      <input type="text" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
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
        {/* Ventana para Detalles*/}
        <div class="modal fade" id="detalles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detalles abonos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body ">
                <div className="d-flex">
                  <p className="text-left encabezado col-sm-11">Juan Pérez </p>
                  <button class="btn btn-outline-dark my-2 my-sm-0 mr-auto" type="button">
                    <i class="fas fa-print"></i>
                  </button>
                </div>
                <table class="table">
                  <thead id="encabezado" className=" ">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th scope="row">1</th>
                      <td>03/04/2019</td>
                      <td>Crédito</td>
                      <td className="">$20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Ventana para Liquidar*/}
        <div class="modal fade bd-example-modal-sm" id="liquidar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Liquidar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body ">

                <p> Esto liquidará la deuda del cliente seleccionado</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Ventana para Importar*/}
        <div class="modal fade" id="importar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Importar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body ">
                <div class="form-group">
                  <p className="text-left" for="exampleFormControlFile1">Selecciona el archivo donde tienes tus datos</p>
                  <p className="text-left">Checa que coincidan las columnas para importar correctamente</p>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/*Ventana para  administarr ofertas*/}
        <div class="modal fade bd-example-modal-xl" id="ofertas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ofertas</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex">
                <div className="col-sm-7">
                  <table class="table">
                    <thead id="encabezado" className=" ">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Oferta</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio normal</th>
                        <th scope="col">A partir de</th>
                        <th scope="col">Precio descuento</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <th scope="row">1</th>
                        <td>Oferta Martes</td>
                        <td>Manzana</td>
                        <td>$25</td>
                        <td>4</td>
                        <td>$20</td>
                        <td className="">
                          <button class="ml-1" type="submit">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="col-sm-5 bg-info">
                  <form>
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-form-label">Nombre</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-form-label">Nombre de oferta</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div class="form-group d-flex">
                      <div class="form-group col-sm-6">
                        <label for="exampleInputEmail1" class="col-form-label">A partir de</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                      </div>
                      <div class="form-group col-sm-6 ml-auto">
                        <label for="exampleInputEmail1" class="col-form-label">Precio unitario</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                      </div>
                    </div>
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
      </div>
    );
  }
}


export default Inventario;
