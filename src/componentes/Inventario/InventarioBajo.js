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
              <label for="exampleInputEmail1" class="col-sm-5 col-form-label">Selecciona el departamento por el que quieres filtrar</label>
              <select class="custom-select col-sm-7" id="inlineFormCustomSelect">
                        <option selected>General</option>
                        <option value="1">Frutas y verduras</option>
                        <option value="2">Cremería</option>
                      </select>
               
              </div>
            </nav>
        </div>
        {/*Desplegar productos*/}
        <table class="table">
          <thead id="encabezado" className=" ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Clave</th>
              <th scope="col">Departamentos</th>
              <th scope="col">Descripción</th>
              <th scope="col">Existencia</th>
              <th scope="col">Costo</th>
              <th scope="col">Precio</th>
              <th scope="col">Mayoreo</th>
              <th scope="col">Menudeo</th>

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
              <td>$15</td>
              <td>$16</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>000002</td>
              <td>Frutas y verduras</td>
              <td>Manzana</td>
              <td>3</td>
              <td>$18</td>
              <td>$20</td>
              <td>$21</td>
              <td>$22</td>
              

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>000003</td>
              <td>Frutas y verduras</td>
              <td>Piña</td>
              <td>8</td>
              <td>$17</td>
              <td>$19</td>
              <td>$20</td>
              <td>$21</td>
            </tr>
          </tbody>
        </table>
       
          </div>
        </div>
    );
  }
}


export default Inventario;
