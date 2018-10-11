import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

import Passo0 from './Passo0.js';
import Passo1 from './Passo1.js';
import Passo2 from './Passo2.js';
import Passo3 from './Passo3.js';
import bg_bemvindo from './../../../images/bemvindo.jpg';
import bg_telasiniciais from './../../../images/bg_telasiniciais.jpg';

var i = 1;

const BtnFechar = () => (
   <a href="/Loja" className="btn btn-outline-light btn-fechar">Fechar</a>
);

document.querySelector("#root").style.backgroundImage = "url("+ bg_bemvindo +")";

class Page extends React.Component {
   Proximo() {
      if(i === 1){
         document.querySelector("#root").style.backgroundImage = "url("+ bg_telasiniciais +")";
         ReactDOM.render(<Passo1 />, document.getElementById("Passos"));
      }
      if(i === 2){
         ReactDOM.render(<Passo2 />, document.getElementById("Passos"));
      }
      if(i === 3){
         ReactDOM.render(<Passo3 />, document.getElementById("Passos"));
         ReactDOM.render(<BtnFechar />, document.getElementById("btnProximo"));  
      }
      i++;
   }

   render() {
      return (
         <div className="w-100 h-100 p-4">
            <div className="tutorial">
               <div className="d-flex justify-content-center flex-column tutorial-content">
                  <div className="top-logo"></div>
                  <div className="align-middle text-center text-white">
                     <div id="Passos" className="m-5">
                        <Passo0 />
                     </div>
                     <div id="btnProximo" onClick={(e) => this.Proximo(e)}><FontAwesomeIcon icon={faArrowRight} /></div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Page;