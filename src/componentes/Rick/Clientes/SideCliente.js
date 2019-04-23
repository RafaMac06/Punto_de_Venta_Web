import React, { Component } from 'react';
import '../../../estilos_css/side.css';

class Side extends Component {
    render() {
      return (
          <div class="d-flex" id="wrapper">
         {/*   Sidebar  */}
  <div  id="sidebar-wrapper">
    <div class="sidebar-heading bg-secondary">Clientes</div>
    <div class="list-group list-group-flush">
      <a href=" " class="list-group-item list-group-item-action">Catálogo</a>
      <a href=" " class="list-group-item list-group-item-action ">Movimientos por Cliente/Periodo</a>
    </div>
  </div>
  </div>
      );
    }
  }
  
  
  export default Side;
  