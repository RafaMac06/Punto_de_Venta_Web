import React, { Component } from 'react';
import '../../../estilos_css/ventas.css';
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
            <div className="d-flex col-sm-12">
              <p className="text-dark ">Venta total: $265</p>
              <p className="text-dark ml-auto">Utilidad total: $55</p>
              <div className="bg-info"></div>
            </div>
        </div>
        {/*Desplegar Datos*/}
        <div className="">
        <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Cajero</th>
              <th scope="col">Nota</th>
              <th scope="col">Cliente</th>
              <th scope="col">Nombre</th>
              <th scope="col">Departamento</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Comentario</th>
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
              <td>Platanos</td>
              <td>Frutas y verduras</td>
              <td>$26</td>
              <td>10</td>
              <td>$260</td>
              <td>Defectuoso</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">2</th>
              <td>03/04/2016</td>
              <td className="">03:28:44 pm</td>
              <td>Administrador</td>
              <td>7</td>
              <td>Mostrador</td>
              <td>Fresas</td>
              <td>Frutas y verduras</td>
              <td>$13</td>
              <td>8</td>
              <td>$104</td>
              <td>Defectuoso</td>
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
        </div>
    );
  }
}


export default Cliente;
