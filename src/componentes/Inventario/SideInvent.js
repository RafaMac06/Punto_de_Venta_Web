import React, { Component } from 'react';
import '../../estilos_css/side.css';

class Side extends Component {
    render() {
      return (
          <div className="d-flex" id="wrapper">
         {/*   Sidebar  */}
  <div  id="sidebar-wrapper">
    <div class="sidebar-heading bg-secondary">Inventario</div>
    <div class="list-group list-group-flush">
      <a href=" " class="list-group-item list-group-item-action">Catálogo</a>
      <a href=" " class="list-group-item list-group-item-action ">Ajustes de inventario</a>
      <a href=" " class="list-group-item list-group-item-action ">Inventario bajo</a>
      <a href=" " class="list-group-item list-group-item-action ">Por departamento</a>
      <a href=" " class="list-group-item list-group-item-action ">Estadísticas</a>
    </div>
  </div>
  </div>
      );
    }
  }
  
  export default Side;
  