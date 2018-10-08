import React from 'react';
import {lista} from './APIProdutos.js';
import ReactDOM from 'react-dom'

class Prod extends React.Component {
   constructor(props) {
       super(props);

       this.produtos = lista();

       this.handleLoad = this.handleLoad.bind(this);
   }
 
   componentDidMount() {
      window.addEventListener("load", this.handleLoad())
   }
   
   handleLoad(){
      console.log(this.produtos);
      ReactDOM.render(
         this.produtos.map(item => {
            return (
               <div className="text-center mb-5">
                  <div className="">
                     <h4>{item.Produto.Nome}</h4>
                     <h6>{item.Produto.Descricao}</h6>
                     <p className="font-weight-bold">R$ {item.Produto.Preco}</p>
                     <a className="button-primary text-white mt-3" onClick={() => { item.Produto.Quantidade = 1; this.props.addToCart(item.Produto)}}>Adicionar ao Carrinho</a>
                     <hr className="mt-5" />
                  </div>
               </div>
            );
         }), document.getElementById("ListaDeProdutos")
      );
   }

   render() {
      return (
         <div className="modal-container">
            <div className="d-flex modal-content justify-content-center flex-column p-5 text-center text-black bg-light m-5">
               <a href="#" className="text-primary sidebar-btn-close" onClick={() => this.props.closeProdutos()}>X</a>
               <div className="top-logo"></div>
               <div id="ListaDeProdutos" className="align-middle p-5 modal-items-container">
               </div>
            </div>
         </div>
      );
   }
}

export default Prod;
