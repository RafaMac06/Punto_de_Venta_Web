import React, { Component } from 'react';
import '../../../estilos_css/porDepartamento.css';

//import {Modal} from 'react-bootsrap';

class Inventario extends Component {
  render() {
    return (
      <div  class="Content d-flex" >    {/*Esta bien, abarca toda la pantalla */}
        <div className="flex-fill">
          <div className="col">
            {/*Crreamos el pequemo navBar con los botones y buscador*/}
            <nav class="navbar navbar-icon-top navbar-expand-lg border border-dark rounded my-2">
              <div class="d-flex flex-column collapse navbar-collapse " id="navbarSupportedContent">
              <label for="exampleInputEmail1" class=" col-form-label font-weight-bold">Departamentos</label>
              <label for="exampleInputEmail1" class=" col-form-label font-weight-bold">Total: 3</label>
             
           </div>
            </nav>
        </div>
        {/*Desplegar productos*/}
        <table class="table table-bordered">
          <thead id="encabezado" className=" ">
          <tr>
              <th scope="col">#</th>
              <th scope="col">Departamento</th>
              <th scope="col">Invertido</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-info">
              <th scope="row">1</th>
              <td>Frutas y verduras</td>
              <td>$3, 5000</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">2</th>
              <td>Cremería</td>
              <td>$2, 500</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">3</th>
              <td>Abarrotes</td>
              <td>$4, 500</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">3</th>
              <td>Todos los departamentos</td>
              <td>$10, 500</td>
            </tr>
          </tbody>
        </table>
       
          </div>
          <div className="flex-fill ">
          <div className="col">
            {/*Crreamos el pequemo navBar con los botones y buscador*/}
            <nav class="d-flex navbar navbar-icon-top navbar-expand-lg border border-dark rounded my-2">
              <div class="d-flex flex-column  collapse navbar-collapse" id="navbarSupportedContent">
              <label for="exampleInputEmail1" class="col-form-label font-weight-bold">Productos del departamento </label>
              <label for="exampleInputEmail1" class="col-form-label font-weight-bold">Total: 3 </label>
              </div>
            </nav>
        </div>
        {/*Desplegar productos*/}
        <table class="table table-bordered">
          <thead id="encabezado" className=" ">
          <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Existencias</th>
              <th scope="col">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>Platanos</td>
              <td>20</td>
              <td>$15</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">2</th>
              <td>Fresa</td>
              <td>25</td>
              <td>$18</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">3</th>
              <td>Manzana</td>
              <td>10</td>
              <td>$12</td>
            </tr>


          </tbody>
        </table>
       
          </div>
        </div>
    );
  }
}


export default Inventario;
