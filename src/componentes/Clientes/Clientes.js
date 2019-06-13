import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import SideCliente from './SideCliente';
import Catalogo from './Catalogo.js';
import Movimientos from './Movimientos';
//import AjusteInventario from './AjusteInventario';
//import InventarioBajo from './InventarioBajo';
//import PorDepartamento from './PorDepartamento';
//import Departamento from './Departamento';
//import Estadisticas from './Estadisticas';
import '../../estilos_css/porDepartamento.css';








class Inventario extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="d-flex flex-grow-1">
        <div id="SideBar" className="d-flex">
        <SideCliente></SideCliente>
        </div>
        <div  className="d-flex flex-grow-1 ">
        <Movimientos></Movimientos>

          {/*<AjusteInventario></AjusteInventario>*/}
          {/*<Catalogo></Catalogo>*/}
          {/*<InventarioBajo></InventarioBajo>*/}
          {/*<PorDepartamento></PorDepartamento>*/}
          
    </div>
      </div>

    );
  }

}



export default Inventario;
