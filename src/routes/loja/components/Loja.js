import React from 'react';
import Buttons from './Buttons.js'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js'
import CarrrinhoSideModal from './../../carrinho/components/carrinho.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Lista from './APIProdutos.js'
import FloatingButtons from './../../floatingbuttons/index.js'
import Carrinho from './../../carrinho/components/carrinho.js'
import ListaDeProdutos from './ListaDeProdutos.js'
import DragScroll from 'react-dragscroll'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Loja extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         produtos: null
       };
      
      this.carrinho = [];
   }

   ListaDeProdutos = () => {
      let modal = document.getElementById("Modal");
      ReactDOM.unmountComponentAtNode(modal)
      ReactDOM.render(<ListaDeProdutos produtos={this.state.produtos} closeProdutos={this.CloseListaDeProdutos} addToCart={this.adicionarAoCarrinho} />,modal)
      modal.classList.remove("d-none");
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   CloseListaDeProdutos = () => {
      let modal = document.getElementById("Modal");
      ReactDOM.unmountComponentAtNode(modal)
      modal.classList.add("d-none");
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   closeSideBar = (sidebar) => {
      if(sidebar != undefined)
         setTimeout(() => {
            ReactDOM.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))
         }, 300);
   }

   setProduto = ( p ) => {
      this.closeSideBar();
      ReactDOM.render(<LeftSideModal produto={p} addToCart={this.adicionarAoCarrinho} close={this.closeSideBar}/>,document.getElementById("ProdutoSideBar"))
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   componentWillUpdate(nextProps, nextState) {
      console.log(nextState)
      ReactDOM.render(<Buttons produtos={nextState} click={this.setProduto} cart={this.AbrirCarrinho} />,document.getElementById("btnProdutos"))
   }

   carregarProdutos = ( produtos ) => {
      this.setState({produtos})
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

      toast('✓ PRODUTO INSERIDO COM SUCESSO!', 
      {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true
      });
   }

   render() {
      return (
            <div className="h-100">
               <Lista getProduto={this.carregarProdutos}  />
               <div id="ProdutoSideBar"></div>
               <DragScroll className="p-relative ov-hidden dragscroll" height={'100%'} width={'100vw'}>
                  <div id="btnProdutos"></div>
                  <div className="loja-bg"></div>
               </DragScroll>
               <div id="Modal" class="d-none"></div>
               <FloatingButtons click={this.ListaDeProdutos} />
               <ToastContainer bodyClassName="toastr-produto" progressClassName="toastr-produto-progress" />
            </div>
      );
   }
}
export default Loja;