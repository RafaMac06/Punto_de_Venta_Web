import React, { Component } from 'react';
import SideCaja from './SideCaja.js';
import Productos from './Productos.js';
import Footer from './Footer.js';
import VerTicket from './VerTicket';
class Caja extends Component {
  render() {
    return (
      <div className="flex-column ">
        <div className="d-flex">
          <div id="SideBar " className="d-flex">
            <SideCaja></SideCaja>
          </div>
          <div className="d-flex flex-grow-1 Content">
            <VerTicket></VerTicket>
          </div>
        </div>



      </div>
    );
  }
}

export default Caja;
