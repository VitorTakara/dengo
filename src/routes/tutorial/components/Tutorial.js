import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

import Passo0 from './Passo0.js';
import Passo1 from './Passo1.js';
import Passo2 from './Passo2.js';
import Passo3 from './Passo3.js';
import bg_bemvindo from './../../../images/bemvindo.jpg';
import bg_telasiniciais from './../../../images/bg_telasiniciais.jpg';
import logo from './../../../images/logo_dengo.svg';

var i = 1;

const BtnFechar = () => (
    <a href="/Loja" className="btn btn-outline-light btn-fechar">Fechar</a>
);

document
    .querySelector("body")
    .style
    .backgroundImage = "url(" + bg_bemvindo + ")";

class Page extends React.Component {
   Proximo() {
      i++;
      this.MudarPagina();
   }

   Anterior() {
      i--;
      this.MudarPagina();
   }

   MudarPagina(){
      
      document.getElementById("btnFechar").classList.add("d-none")
      if (i === 1) {
         document
            .querySelector("body")
            .style
            .backgroundImage = "url(" + bg_telasiniciais + ")";

         document.getElementById("btnAnterior").classList.add("d-none")
         ReactDOM.render(
         <Passo1/>, document.getElementById("Passos"));
      }
      if (i === 2) {
         document.getElementById("btnAnterior").classList.remove("d-none")
         ReactDOM.render(
            <Passo2/>, document.getElementById("Passos"));
         document.getElementById("btnProximo").classList.remove("d-none")
      }
      if (i === 3) {
         ReactDOM.render(
            <Passo3/>, document.getElementById("Passos"));
            document.getElementById("btnProximo").classList.add("d-none")
            document.getElementById("btnFechar").classList.remove("d-none")
      }
   }

    render() {
        return (
            <div className="w-100 h-100 p-4">
                <div className="tutorial">
                    <div
                        className="d-flex justify-content-center flex-column tutorial-content align-items-center">
                        <img className="top-logo-img" src={logo}/>
                        <div className="align-middle text-center text-white">
                            <div id="Passos" className="m-5">
                                <Passo0/>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                              <div id="btnAnterior" className="btn-tutorial d-none" onClick={(e) => this.Anterior(e)}><FontAwesomeIcon icon={faArrowLeft}/></div>
                              <div id="btnProximo" className="btn-tutorial" onClick={(e) => this.Proximo(e)}><FontAwesomeIcon icon={faArrowRight}/></div>
                              <div id="btnFechar" className="d-none"><BtnFechar/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;