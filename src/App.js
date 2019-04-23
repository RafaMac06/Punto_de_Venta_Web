import React, { Component } from 'react';
import './estilos_css/App.css';
import Nav from './componentes/Nav';

import Inventario from './componentes/Rick/Inventario/Inventario.js'
import Clientes from './componentes/Rick/Clientes/Clientes.js'
import Ventas from './componentes/Rick/Ventas/Ventas.js'
import Caja from './componentes/Ralph/Caja/Caja.js';



class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      //console.log("Entra")
      //ReactDOM.render(<Caja />, document.getElementById('Content'))
      //return ReactDOM.createPortal(children, document.getElementById('notification-box')
      alert('clicked'), console.log("Entra")
      //("#Content").load(Caja)
    )
  }
  render() {
    return (
      <div className="App">
        <div id="NavBar" >
          <Nav onHandleClick={this.handleClick.bind(this)} />
        </div>
        <div className="d-flex flex-grow-1">
            <Caja></Caja>
        </div>
      </div>

    );
  }

}



export default App;
