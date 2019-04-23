import React, { Component } from 'react';
import '../../../estilos_css/side.css';

class Side extends Component {
    render() {
      return (
          <div class="d-flex" id="wrapper">
         {/*   Sidebar  */}
  <div  id="sidebar-wrapper">
    <div class="sidebar-heading bg-secondary">Ventas</div>
    <div class="list-group list-group-flush">
      <a href=" " class="list-group-item list-group-item-action">Periodo</a>
      <a href=" " class="list-group-item list-group-item-action ">Cliente</a>
      <a href=" " class="list-group-item list-group-item-action ">Departamento</a>
      <a href=" " class="list-group-item list-group-item-action ">Producto</a>
      <a href=" " class="list-group-item list-group-item-action ">Ticket</a>
      <a href=" " class="list-group-item list-group-item-action ">Cajero</a>
      <a href=" " class="list-group-item list-group-item-action ">Efectivo</a>
      <a href=" " class="list-group-item list-group-item-action ">Devoluciones</a>

    </div>
  </div>
  </div>
      );
    }
  }
  
  
  export default Side;
  