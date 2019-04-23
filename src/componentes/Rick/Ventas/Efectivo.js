import React, { Component } from 'react';
import '../../../estilos_css/inventario.css';
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
              
              <label for="exampleInputEmail1" class="col-form-label ml-4 ">Inicio</label>
              <input type="date" name="bday" className="ml-4"></input>
              <label for="exampleInputEmail1" class="col-form-label ml-4">Fin</label>
              <input type="date" name="bday" className="ml-4"></input>
                <button class="btn btn-outline-dark my-2 ml-1 my-sm-0 " type="button" data-toggle="modal" data-target="#agregar">Generar</button>
              </div>
            </nav>
            {/*Información sobre catalogo*/}
            <div className="d-flex">
              <p className="text-dark ">Total entradas: $265</p>
              <p className="text-dark ml-auto">Total salidas: $55</p>
              <div className="bg-info"></div>
            </div>
        </div>
        {/*Desplegar Datos*/}
        <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Cajero</th>
              <th scope="col">Comentario</th>
              <th scope="col">Tipo</th>
              <th scope="col">Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>02/03/2016</td>
              <td className="">01:26:44 pm</td>
              <td>Administrador</td>
              <td>Comida</td>
              <td>Salida de efectivo</td>
              <td>$35</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>03/04/2016</td>
              <td className="">03:28:44 pm</td>
              <td>Administrador</td>
              <td>Feria</td>
              <td>Entrada de efectivo</td>
              <td>$50</td>
            </tr>
            <tr className="encabezado">
              <th scope="row">Total</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-success">+$15</td>
            </tr>
          </tbody>
        </table>
       
          </div>
        </div>
    );
  }
}


export default Cliente;
