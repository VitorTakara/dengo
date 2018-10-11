import React from 'react';
import Lista from './APIProdutos.js';
import ReactDOM from 'react-dom'

class Prod extends React.Component {
   constructor(props) {
       super(props);

       this.handleLoad = this.handleLoad.bind(this);
   }
 
   componentDidMount() {
      window.addEventListener("load", this.handleLoad())
   }
   
   handleLoad(){
      ReactDOM.render(
         this.props.produtos.map(item => {
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
        <div className="black-screen pos-fixed" onClick={() => this.props.closeProdutos()}>
            <div className="modal-container">
                <div className="d-flex modal-content justify-content-center flex-column p-3 text-center text-black bg-light">
                    <a href="#" className="text-primary sidebar-btn-close" onClick={() => this.props.closeProdutos()}>X</a>
                    <div className="top-logo"></div>
                    <div id="ListaDeProdutos" className="align-middle p-5 modal-items-container">
                    </div>
                </div>
            </div>
        </div>
      );
   }
}

export default Prod;
