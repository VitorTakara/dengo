import React from 'react';
import Buttons from './Buttons.js'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js'
import CarrrinhoSideModal from './../../carrinho/components/carrinho.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {lista} from './APIProdutos.js'
import FloatingButtons from './../../floatingbuttons/index.js'
import Carrinho from './../../carrinho/components/carrinho.js'
import ListaDeProdutos from './ListaDeProdutos.js'

class Loja extends React.Component {
   constructor(props) {
      super(props);
      this.produtos = lista();

      this.carrinho = [];
   }

   ListaDeProdutos = () => {
      let modal = document.getElementById("Modal");
      ReactDOM.unmountComponentAtNode(modal)
      ReactDOM.render(<ListaDeProdutos closeProdutos={this.CloseListaDeProdutos} addToCart={this.adicionarAoCarrinho} />,modal)
      modal.classList.remove("d-none");
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   CloseListaDeProdutos = () => {
      let modal = document.getElementById("Modal");
      ReactDOM.unmountComponentAtNode(modal)
      modal.classList.add("d-none");
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   closeSideBar = () => {
      ReactDOM.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))
   }

   setProduto = ( p ) => {
      this.closeSideBar();
      ReactDOM.render(<LeftSideModal produto={p} addToCart={this.adicionarAoCarrinho} close={this.closeSideBar}/>,document.getElementById("ProdutoSideBar"))
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   AbrirCarrinho = () => {
      this.closeSideBar();
      ReactDOM.render(<Carrinho produtos={this.carrinho} close={this.closeSideBar}/>,document.getElementById("ProdutoSideBar"))
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   adicionarAoCarrinho = (item, sideBar = false) =>{
      this.carrinho.push(item);
      if(sideBar)
         this.closeSideBar();

      console.log(this.carrinho);
   }

   render() {
      return (
         <div className="h-100">
            <div className="loja-bg h-100">
               <div id="ProdutoSideBar"></div>
               <div className='black-screen'>
                  <Buttons produtos={this.produtos} click={this.setProduto} cart={this.AbrirCarrinho} />
               </div>
            </div>
            <div id="Modal" class="d-none"></div>
            <FloatingButtons click={this.ListaDeProdutos} />
         </div>
      );
   }
}
export default Loja;