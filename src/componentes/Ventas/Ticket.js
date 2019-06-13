import React, { Component } from 'react';
import '../../estilos_css/inventario.css';
//import {Modal} from 'react-bootsrap';

class Cliente extends Component {
  render() {
    return (
      <div class="container-fluid ">
        <div className="row">
          <div className="col">
            {/*Crreamos el pequemo navBar con los botones y buscador*/}
            <nav class="d-flex navbar navbar-icon-top navbar-expand-lg navbar-dark ">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="">
                  <small id="emailHelp" class="form-text text-muted  text-left">No. de ticket</small>
                  <input type="number" name="bday" ></input>
                </div>
                <button class="btn btn-outline-dark my-2 ml-1 my-sm-0" type="button" data-toggle="modal" data-target="#agregar">Generar</button>
              </div>
            </nav>
          </div>
          {/*Desplegar Datos*/}
          <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Usuario</th>
              <th scope="col">Nota</th>
              <th scope="col">Cliente</th>
              <th scope="col">Clave</th>
              <th scope="col">Nombre</th>
              <th scope="col">Departamentos</th>
              <th scope="col">Costo</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>02/03/2016</td>
              <td className="">01:26:44 pm</td>
              <td>Administrador</td>
              <td>7</td>
              <td>Mostrador</td>
              <td>436437547</td>
              <td>Platanos</td>
              <td>Frutas y verduras</td>
              <td>$26</td>
              <td>10</td>
              <td>260</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>03/04/2016</td>
              <td className="">03:28:44 pm</td>
              <td>Administrador</td>
              <td>7</td>
              <td>Mostrador</td>
              <td>436437547</td>
              <td>Fresas</td>
              <td>Frutas y verduras</td>
              <td>$13</td>
              <td>8</td>
              <td>$104</td>
            </tr>
            <tr className="encabezado">
              <th scope="row">Total</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>18</td>
              <td>$364</td>
            </tr>
          </tbody>
        </table>

        </div>
      </div>
    );
  }
}


export default Cliente;
