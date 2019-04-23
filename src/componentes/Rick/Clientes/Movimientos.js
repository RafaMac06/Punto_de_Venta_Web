import React, { Component } from 'react';
import '../../../estilos_css/inventario.css';
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
              <div class="col-sm-5 ">
              <small id="emailHelp" class="form-text text-muted  text-left">Selecciona el cliente</small>
              <select class="custom-select" id="inlineFormCustomSelect">
                        <option selected>Todos</option>
                        <option value="1">Juan Pérez</option>
                        <option value="2">María Sanchez</option>
                      </select>
                      </div>
              <label for="exampleInputEmail1" class="col-form-label ml-4 ">Inicio</label>
              <input type="date" name="bday" className="ml-4"></input>
              <label for="exampleInputEmail1" class="col-form-label ml-4">Fin</label>
              <input type="date" name="bday" className="ml-4"></input>
                <button class="btn btn-outline-dark my-2 ml-1 my-sm-0 ml-auto" type="button" data-toggle="modal" data-target="#agregar">Generar</button>
              </div>
            </nav>
        </div>
        {/*Desplegar productos*/}
        <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>Platanos</td>
              <td className="">5</td>
              <td>$20</td>
              <td>$100</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>Fresa</td>
              <td className="">10</td>
              <td>$15</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
       
          </div>
        </div>
    );
  }
}


export default Inventario;
