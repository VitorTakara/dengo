import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'

import Passo1 from './Passo1.js'
import Passo2 from './Passo2.js'
import Passo3 from './Passo3.js'

var i = 2;

const BtnFechar = () => (
   <a href="#" className="btn btn-outline-light">Fechar</a>
);

class Page extends React.Component {
   Proximo() {
      if(i == 2)
         ReactDOM.render(<Passo2 />, document.getElementById("Passos"));
      if(i == 3){
         ReactDOM.render(<Passo3 />, document.getElementById("Passos"));
         ReactDOM.render(<BtnFechar />, document.getElementById("btnProximo"));  
      }
      i++;
   }

   render() {
      return (
         <div className="w-100 h-100 p-4">
            <div className="tutorial">
               <div className="top-logo">
               </div>
               <div className="d-flex justify-content-center flex-column p-5 tutorial-content">
                  <div className="align-middle text-center text-white p-5">
                     <div id="Passos" className="m-5">
                        <Passo1 />
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