import React, { Component } from 'react';

import producto from '../../../imagenes/orange.png';
import Footer from './Footer.js';

import '../../../estilos_css/productos.css';
//import {Modal} from 'react-bootsrap';

class Inventario extends Component {
  render() {
    return (
      <div className="Content flex-column">
        <div className="row">
          <div className="col col-md-offset-3">
            {/*Creamos el NavBar con los botones y buscador*/}
            <nav className="d-flex navbar navbar-icon-top navbar-expand-lg navbar-dark ">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <i className="fas fa-search mr-2"></i>
                <input className="form-control mr-sm-2" type="text" placeholder="Nombre o clave de producto" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-cart-plus"></i> Agregar</button>
                <button className="btn btn-outline-danger ml-2 my-2 my-sm-0" type="button"><i class="fas fa-cart-arrow-down"></i> Cancelar</button>
                <button type="button" className="btn btn-sm btn-outline-dark ml-2  mb-1" data-toggle="modal" data-target="#agregarPendiente"><i class="fas fa-tasks" ></i> Agregar a Pendientes</button>

              </div>
            </nav>
            {/*Información sobre catalogo*/}
            <div className="d-flex row ml-1 col-sm-4 bg-light">
              <p className="text-dark">Total de productos: 10</p>
            </div>
            <div className="bg-info"></div>
          </div>
          <img src={producto} className="rounded col-sm-2 bg-info ml-auto" height="120" alt="..."></img>

        </div>
        {/*Desplegar productos*/}
        <table className="table table-hover">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Clave</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-info">
              <th scope="row">1</th>
              <td>000001</td>
              <td>Plátano</td>
              <td>10</td>
              <td>$12</td>
              <td>$120</td>
              <td className="">
                <button className="" type="submit">
                  <i className="fas fa-pen"></i>
                </button>
                <button className="ml-1" type="submit">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>000002</td>
              <td>Manzana</td>
              <td>3</td>
              <td>$18</td>
              <td>$54</td>
              <td className="">
                <button className="" type="submit">
                  <i className="fas fa-pen"></i>
                </button>
                <button className="ml-1" type="submit">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>000003</td>
              <td>Piña</td>
              <td>8</td>
              <td>$17</td>
              <td>$136</td>
              <td className="">
                <button className="" type="submit">
                  <i className="fas fa-pen"></i>
                </button>
                <button className="ml-1" type="submit">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/*Ventana para agregar productos*/}
        <div className="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="encabezado text-left" id="exampleModalLabel">General</p>
                <form>
                  <div className="row">
                    <div className="d-flex flex-column col-sm-9 ">
                      <div className="d-flex">
                        <div className="d-flex flex-fill">
                          <label className="col-form-label">Clave:</label>
                          <label className="col-form-label ml-2">12BBM23M5B2N33</label>
                        </div>
                        <div className="d-flex flex-fill  justify-content-end">
                          <p className="col-form-label">Producto: </p>
                          <p className="col-form-label ml-2">Naranjas</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex col-sm-4 ">
                          <label for="exampleInputPassword1" className="col-form-label">Cantidad</label>
                          <input type="number" className="form-control ml-2" id="exampleInputPassword1" ></input>
                        </div>
                        <div className="d-flex flex-fill  justify-content-end">
                          <p className="col-form-label">Subtotal sin descuento: </p>
                          <p className="col-form-label ml-2">$30</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group  col-sm-3">
                      <img src={producto} className="rounded col-sm-5 bg-info ml-auto" height="80" alt="..."></img>
                    </div>
                  </div>
                  {/*Precios  */}
                  <p className="encabezado text-left" id="exampleModalLabel">Precio</p>
                  <div className="d-flex">
                    <div className="custom-control custom-radio custom-control mb-2 col-sm-4">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                      <label className="custom-control-label" for="exampleRadios1">Normal:</label>
                      <label>$ 15:00</label>
                    </div>
                    <div className="custom-control custom-radio custom-control mb-2 ml-2 col-sm-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                      <label className="custom-control-label" for="exampleRadios2">Mayoreo:</label>
                      <label> $ 0:00</label>
                    </div>

                    <div className="custom-control custom-radio custom-control mb-2 ml-2 col-sm-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                      <label className="custom-control-label" for="exampleRadios3">Menudeo:</label>
                      <label>$ 13:00</label>
                    </div>
                  </div>
                  {/*Descuentos*/}

                  <p className="encabezado text-left" id="exampleModalLabel">Descuentos</p>

                  <div className="d-flex">
                    <div className="d-flex flex-column col-sm-7">
                      <div className="custom-control custom-radio custom-control encabezado">
                        <label className="custom-control-label" for="customRadioInline1">Importe</label>
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"></input>
                      </div>
                      <div className="d-flex">
                        <div className="form-group d-flex flex-column mr-1">
                          <label for="exampleInputPassword1" className="col-sm-2 col-form-label">Precio</label>
                          <input type="number" className="form-control " id="exampleInputPassword1" ></input>
                        </div>
                        <p className="align-self-center  mt-4" id="exampleModalLabel">X</p>
                        <div className="form-group d-flex flex-column ml-1">
                          <label for="exampleInputPassword1" className="col-sm-2 col-form-label">Cantidad</label>
                          <input type="number" className="form-control " id="exampleInputPassword1" ></input>
                        </div>
                      </div>
                      <p className="align-self-center  mt-4" id="exampleModalLabel">Subdescuento: $20 </p>
                    </div>
                    <div className="d-flex flex-column col-sm-5">
                      <div className="custom-control custom-radio custom-control encabezado">
                        <label className="custom-control-label" for="customRadioInline1">Porcentaje</label>
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"></input>
                      </div>
                      <div className="form-group d-flex ml-1">
                        <label for="exampleInputPassword1" className="col-form-label">% Descuento</label>
                        <input type="number" className="form-control align-self-center" id="exampleInputPassword1" ></input>
                      </div>
                      <div className="custom-control custom-radio custom-control">
                        <label className="custom-control-label" for="customRadioInline1">Aplicar a todos los productos</label>
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"></input>
                      </div>
                    </div>

                  </div>
                  <p className="text-left" id="exampleModalLabel">Subtotal con descuento: $10</p>


                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/*Ventana para Agergar ticket a pendientes*/}
        <div class="modal fade" id="agregarPendiente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Agregar a pendiente</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <label for="exampleInputEmail1" class="col-form-label">Nombre/Descripción</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"></input>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
          <div class="fixed-bottom">
              <Footer></Footer>
            </div>
      </div>
      
    );
  }
}

export default Inventario;
