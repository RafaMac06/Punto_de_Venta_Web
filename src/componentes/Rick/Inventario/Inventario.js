import React, { Component } from 'react';
import SideInvent from './SideInvent.js';
import Catalogo from './Catalogo.js';
import AjusteInventario from './AjusteInventario';
import InventarioBajo from './InventarioBajo';
import PorDepartamento from './PorDepartamento';
import Departamento from './Departamento';
import Estadisticas from './Estadisticas';
import '../../../estilos_css/porDepartamento.css';





class Inventario extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="d-flex flex-grow-1">
        <div id="SideBar" className="d-flex">
        <SideInvent></SideInvent>
        </div>
        <div  className="d-flex flex-grow-1 ">
        <Catalogo></Catalogo>

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
