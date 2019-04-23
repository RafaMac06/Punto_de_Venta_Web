import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import SideVentas from './SideVentas';
import Cliente from './Cliente';
import Departamento from './Departamento';
import Producto from './Producto';
import Ticket from './Ticket';
import Periodo from './Periodo';
import Cajero from './Cajero';
import Efectivo from './Efectivo';
import Devoluciones from './Devoluciones';


//import AjusteInventario from './AjusteInventario';
//import InventarioBajo from './InventarioBajo';
//import PorDepartamento from './PorDepartamento';
//import Departamento from './Departamento';
//import Estadisticas from './Estadisticas';
import '../../../estilos_css/porDepartamento.css';


class Inventario extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="d-flex flex-grow-1">
        <div id="SideBar" className="d-flex">
        <SideVentas></SideVentas>
        </div>
        <div  className="d-flex flex-grow-1 ">
        <Devoluciones></Devoluciones>

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
