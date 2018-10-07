import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";
import ReactDOM from 'react-dom'

var i = 2;

const Passo1 = () => (
   <div>
      <h2>COMO A LOJA AO VIVO FUNCIONA</h2>
      <p>Você pode pedir os chocolates Dengo da mesma maneiro com que
      faz em nossas lojas físicas, tirando dúvidas direto com nossos
      Especialistas e finalizando sua compra como no e-commerce</p>
   </div>
);

const Passo2 = () => (
   <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
      <h2>CONVERSE DIRETAMENTE COM O CHOCOLATIER</h2>
      <p>Ao Utilizar nosso chat, você terá suas dúvidas respondidas pelo nosso chocolatier ao vivo. Lembre-se de ativar o som do seu aparelho.</p>
      <p>Além disso, você pode selecionar os produtos direto da prateleira para obter mais informações e/ou adicioná-lo em seu carrinho de compras</p>
   </Animated>
);

const Passo3 = () => (
   <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
      <h2>FINALIZE SUA COMPRA</h2>
      <p>Clique no carrinho para visualizar seus produtos e finalize a compra. Assim que o pagamento for processado, seu chocolate será embalado e enviado para você em tempo real.</p>
   </Animated>
);

const BtnFechar = () => (
      <a href="/" className="btn btn-outline-light">Fechar</a>
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
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"></img>
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