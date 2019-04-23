import React, { Component } from 'react';
//import '../../estilos_css/side.csst';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        {/* <!-- Footer --> */}
        <footer className="page-footer special-color-dark pt-2 bg-secondary">
          {/* <!-- Footer Elements --> */}
          <div className="container">
            {/* <!--Grid row--> */}
            <div className="row justify-content-center ">
              {/* <!--Grid column--> */}
              {/* <div className="col-sm-4">
                {/* <!-- Form --> 
                <form className="form-group  border border-light rounded-left">
                  <div>
                    <label className="text-white font-weight-bold">Tickets</label>
                  </div>
                  <button type="button" className="btn btn-sm btn-outline-light"><i class="fas fa-print"></i> Ver Tickets</button>
                  <div className="row d-flex justify-content-center my-1">
                    <button type="button" className="btn btn-sm btn-outline-light  mb-1" data-toggle="modal" data-target="#agregarPendiente"><i class="fas fa-tasks" ></i> Agregar a Pendientes</button>
                    <button type="button" className="btn btn-sm btn-outline-light ml-1 mb-1" data-toggle="modal" data-target="#ticketsPendientes"><i class="fas fa-clipboard-list"></i> Tickets Pendientes</button>
                  </div>
                </form>
              </div>*/}
              <div className="col-sm-3">
                {/* <!-- Form --> */}
                <form className="form-group mb-1 border border-light">
                  <div className="mt-1">
                    <button type="button" class="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#cobrar"><i class="fas fa-money-bill-wave"></i> Cobrar</button>
                  </div>
                  <div className="my-1">
                    <button type="button" class="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#cancelarVentaFooter"><i class="fas fa-trash-alt"></i> Cancelar</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-4">
                {/* <!-- Form --> */}
                <form className="form-group mb-1 border border-light rounded-right">
                  <div>
                    <label className="text-white font-weight-bold text-left mt-1">Subtotal: </label>
                    <label className="text-white"> $500</label>
                  </div>
                  <div>
                    <label className="text-white font-weight-bold">IVA: </label>
                    <label className="text-white"> $75</label>
                  </div>
                  <div>
                    <label className="text-white font-weight-bold">Total: </label>
                    <label className="text-white mb-3"> $575</label>
                  </div>
                </form>
              </div>
            </div>

          </div>
          {/* <!-- Copyright --> */}
          {/* <div className="footer-copyright text-center py-3 bg-dark">© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
          </div> */}
        </footer>
      </div>

    );
  }
}

export default Footer;
