import React, { Component } from 'react';
import bananas from '../../imagenes/bananas.png';
import '../../estilos_css/inventario.css';
//import {Modal} from 'react-bootsrap';

class Inventario extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            {/*Crreamos el pequemo navBar con los botones y buscador*/}
            <nav class="d-flex navbar navbar-icon-top navbar-expand-lg navbar-dark ">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <i class="fas fa-search mr-2"></i>
                <input class="form-control mr-sm-2" type="text" placeholder="Nombre o clave de producto" aria-label="Search"></input>
                <button class="btn btn-outline-dark my-2 my-sm-0" type="button" data-toggle="modal" data-target="#agregar">Agregar</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#impuestos">Impuestos</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#departamentos">Departamentos</button>
                <button class="btn btn-outline-dark ml-2 my-2 my-sm-0" type="button" data-toggle="modal" data-target="#ofertas">Ofertas</button>
              </div>
            </nav>
            {/*Información sobre catalogo*/}
            <div className="d-flex row col-sm-12  bg-light">
              <p className="text-dark">Total de productos: 10</p>
              <p className="text-dark ml-auto">Costo del inventario: $10,000</p>
              <p className="text-dark ml-auto">Precio del inventario: $12,000</p>
              <div className="bg-info"></div>
            </div>
          </div>
          <img src={bananas} className="rounded col-sm-2 bg-info ml-auto" height="90" alt="..."></img>

        </div>
        {/*Desplegar productos*/}
        <table className="table">
          <thead id="" className="encabezado ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Clave</th>
              <th scope="col">Departamentos</th>
              <th scope="col">Descripción</th>
              <th scope="col">Existencia</th>
              <th scope="col">Costo</th>
              <th scope="col">Precio</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-info">
              <th scope="row">1</th>
              <td>000001</td>
              <td>Frutas y verduras</td>
              <td>Plátano</td>
              <td>10</td>
              <td>$12</td>
              <td>$14</td>
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
              <td>Frutas y verduras</td>
              <td>Manzana</td>
              <td>3</td>
              <td>$18</td>
              <td>$20</td>
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
              <td>Frutas y verduras</td>
              <td>Piña</td>
              <td>8</td>
              <td>$17</td>
              <td>$19</td>
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
        <div className="modal fade bd-example-modal-lg" id="agregar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Agregar a inventario</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                <p class="encabezado text-left">General</p>

                  <div className="row">
                    <div className="form-group row col-sm-9">
                      <label for="exampleInputEmail1" className="col-sm-2 col-form-label">Clave</label>
                      <input type="text" className="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                      <small id="emailHelp" className="form-text text-muted col-sm-2 text-left">Opcional</small>
                    </div>
                    <div className="form-group col-sm-3  row">
                      <button className="col-sm-4" type="submit">
                        <i className="fas fa-image"></i>
                      </button>
                      <img src={bananas} className="rounded col-sm-5 bg-info ml-auto" height="80" alt="..."></img>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-sm-2 col-form-label">Descripción</label>
                    <input type="text" className="form-control col-sm-10" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  {/*Departamento e impuestos  */}
                  <div class="form-group row">
                    <label for="depSeleccionado" class="col-sm-2 col-form-label">Departamento</label>
                    {/*<input id="depSeleccionado" class="form-control col-sm-9" type="text" placeholder="Readonly input here..." readonly></input>
                    <button class="col-sm-1" type="submit">
                      <i class="fas fa-search"></i>
                     </button>*/}
                     <select class="custom-select col-sm-4" id="inlineFormCustomSelect">
                        <option selected>Selecciona..</option>
                        <option value="1">Frutas y verduras</option>
                        <option value="2">Cremería</option>
                        <option value="3">Abarrotes></option>
                      </select>
                      <label for="depSeleccionado" class="col-sm-2 col-form-label">Impuesto</label>
                    {/*<input id="depSeleccionado" class="form-control col-sm-6" type="text" placeholder="Ninguno" readonly></input>
                    <input id="depSeleccionado" class="form-control col-sm-2" type="text" placeholder="0" readonly></input>
                    <label for="depSeleccionado" class="col-sm-1 col-form-label  text-left">%</label>
                    <button class="col-sm-1" type="submit">
                      <i class="fas fa-search"></i>
                    </button>*/}
                    <select class="custom-select col-sm-4" id="inlineFormCustomSelect">
                        <option selected>Selecciona..</option>
                        <option value="1">IVA    16%</option>
                      </select>
                  </div>
                  {/*Pieza o granel*/}

                  <div className="row">
                    <small id="emailHelp" className="form-text text-muted col-sm-6">Se vende como...</small>
                    <small id="emailHelp" className="form-text text-muted col-sm-6">Unidad de medida</small>
                  </div>

                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"></input>
                        <label className="custom-control-label" for="customRadioInline1">Pieza</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"></input>
                        <label className="custom-control-label" for="customRadioInline2">A granel</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <select className="custom-select" id="inlineFormCustomSelect">
                        <option selected>Selecciona..</option>
                        <option value="1">Pieza</option>
                        <option value="2">Metro</option>
                        <option value="3">Litro</option>
                      </select>
                    </div>
                  </div>
                  {/*Precios*/}
                  <p class="encabezado text-left">Precios</p>

                  <div className="form-group row">
                    <div className="form-group row col-sm-6">
                      <label for="exampleInputEmail1" className="col-sm-4 col-form-label">Costo</label>
                      <input type="number" className="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" className="col-sm-4 col-form-label">Precio</label>
                      <input type="number" className="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="form-group row col-sm-6">
                      <label for="exampleInputEmail1" className="col-sm-4 col-form-label">Menudeo</label>
                      <input type="number" className="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" className="col-sm-4 col-form-label">Mayoreo</label>
                      <input type="number" className="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                {/*Existencias*/}
                <p class="encabezado text-left">Existencias</p>
                  <div class="form-group row">
                    <div class="form-group row col-sm-6">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Existencias</label>
                      <input type="number" class="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group row row col-sm-6">
                      <label for="exampleInputEmail1" className="col-sm-4 col-form-label">Mínimo</label>
                      <input type="number" className="form-control col-sm-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                  </div>
                  {/*Comentarios  */}
                  <p class="encabezado text-left">Extra</p>
                  <div class="form-group row">
                    <label for="depSeleccionado" class="col-sm-3 col-form-label">Comentario sobre agregado/modificación</label>
                    <textarea type="text" class="form-control col-sm-9" id="exampleInputEmail1" rows="2"></textarea>
                    
                  </div>
                  {/*CheckBox*/}
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">No cerrar para continuar metiendo productos</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Ventana para impuestos*/}
        <div class="modal fade" id="impuestos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Impuestos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
              <div className="d-flex align-items-left">
              <button className="btn btn-outline-dark my-2 my-sm-0 mr-auto" type="button">
              <i className="fas fa-plus mr-2"></i>
               Agregar
              </button>
              </div>
                <table className="table">
                  <thead id="" className="encabezado ">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Impuesto</th>
                      <th scope="col">Porcentaje</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th scope="row">1</th>
                      <td>IVA</td>
                      <td>16%</td>
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
        {/* Ventana para Departamentos*/}
        <div className="modal fade bd-example-modal-sm" id="departamentos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Departamentos</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
              <div className="d-flex align-items-left">
              <button className="btn btn-outline-dark my-2 my-sm-0 mr-auto" type="button">
              <i className="fas fa-plus mr-2"></i>
               Agregar
              </button>
              </div>
                <table className="table">
                  <thead id="" className="encabezado ">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Departamento</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th scope="row">1</th>
                      <td>Frutas y verduras</td>
                      <td className="">
                        <button className="ml-1" type="submit">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr className="">
                      <th scope="row">2</th>
                      <td>Cremería</td>
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
                  <thead id="" className="encabezado ">
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
