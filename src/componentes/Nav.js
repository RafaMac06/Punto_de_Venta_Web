import React, { Component } from 'react';
import '../estilos_css/nav.css';
//import handleClick  from '../App.js';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick() {
    this.setState(
      alert('Caca')
    )
  }
  render() {
    return (

      <div id="page-content-wrapper">
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark navbar-inline">
          <a className="navbar-brand" href=" ">Icono</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*Opciones principales  */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">

                <a id="Caja" className="nav-link" href="caja" onclick={this.props.onHandleClick.bind(this)}>
               {/* <a id="Caja" className="nav-link" href="caja"  onClick={this.handleClick.bind(this)}>*/}
                  <i className="fas fa-cash-register"></i>
                  Caja
          <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                <i className="fas fa-file-alt">
                        {/*<span className="badge badge-danger">13</span>   Numero de alertas*/}
                  </i>
                  Inventario
        </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                <i className="fas fa-file-invoice-dollar"></i>         
                Ventas     
          <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  <i className="fas fa-address-book"></i>
                  Clientes
          <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  <i className="fas fa-cog"></i>
                  Configuración
          <span className="sr-only">(current)</span>
                </a>
              </li>

              
            </ul>
            {/* Nombre del negocio y hora del sistema */}

            <div className="col-sm-5 mr-auto bg-dark row-sm-5">
              <h5 className="text-white mb-1 font-weight-normal">Nombre del negocio</h5>
              <h6 className="text-white mb-1 ">Sucursal</h6>
              <h6 className="text-white mb-1 ">Teléfono</h6>

            </div>

            <div className="col-sm-2 bg-dark">
              <h5 className="text-white font-weight-normal mb-1 ">Hora</h5>
              <p className="text-white">Fecha</p>

            </div>

            {/*  *
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-bell">
            <span className="badge badge-info">11</span>
          </i>
          Test
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-globe">
            <span className="badge badge-success">11</span>
          </i>
          Test
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>*/}
          </div>
        </nav>
      </div>
    );
  }
  
}

export default Nav;
