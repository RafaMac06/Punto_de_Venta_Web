import React, { Component } from 'react';
import '../../estilos_css/inventario.css';
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
              <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Inicio</label>
              <input type="date" name="bday"></input>
              <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Fin</label>
              <input type="date" name="bday"></input>
                <button class="btn btn-outline-success my-2 ml-3 my-sm-0" type="button" data-toggle="modal" data-target="#agregar">Generar</button>
               
              </div>
            </nav>
        </div>
        {/*Desplegar productos*/}
        <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Cajero</th>
              <th scope="col">Producto</th>
              <th scope="col">Departamento</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Costo</th>
              <th scope="col">Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>10/03/2019</td>
              <td>08:11:01 am</td>
              <td>Juan</td>
              <td>Platanos</td>
              <td>Frutas y verduras</td>
              <td className="text-success">14</td>
              <td>$20</td>
              <td>Surtido semanal</td>
            </tr>
            <tr className="bg-light">
              <th scope="row">1</th>
              <td>10/03/2019</td>
              <td>08:20:01 am</td>
              <td>Pedro</td>
              <td>Fresa</td>
              <td>Frutas y verduras</td>
              <td className="text-danger">-10</td>
              <td>$15</td>
              <td>Produto descompuesto</td>
            </tr>
          </tbody>
        </table>
       
          </div>
        </div>
    );
  }
}


export default Inventario;
