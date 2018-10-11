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
import Div100vh from 'react-div-100vh';

class Loja extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         produtos: null
       };
      
      this.carrinho = [];

      this.updateDimensions = this.updateDimensions.bind(this);
   }

   updateDimensions = (div) => {
      setTimeout(() => {
         let lojabg = document.querySelector(".loja-bg")

         let xy = 2394 / 768;

         let windowHeight = document.querySelector("#abc").offsetHeight

         lojabg.style.height = windowHeight
         lojabg.style.width = (xy * windowHeight) + 'px';
         let produtos = document.querySelectorAll("#Produtos a")
         produtos.forEach(prod => {
            prod.style.left = (lojabg.offsetWidth * prod.dataset.x / 100) + 'px';
            prod.style.top = (lojabg.offsetHeight * prod.dataset.y / 100) + 'px';
         });
      }, 100);
   }

   componentDidMount = () => {
      window.addEventListener("resize", this.updateDimensions);
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
      ReactDOM.render(<Buttons produtos={nextState} click={this.setProduto} cart={this.AbrirCarrinho} />,document.getElementById("btnProdutos"), () => this.updateDimensions(document.getElementById("btnProdutos")))
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
         <div id="abc" class='h100'>
            <Lista getProduto={this.carregarProdutos}  />
            <div id="ProdutoSideBar"></div>
            <DragScroll className="p-relative ov-hidden h100 dragscroll" height={'100%'} width={'100vw'}>
               <div className="loja-bg">
                  <div id="btnProdutos"></div>
               </div>
            </DragScroll>
            <div id="Modal" className="d-none"></div>
            <ToastContainer bodyClassName="toastr-produto" progressClassName="toastr-produto-progress" />
            <FloatingButtons click={this.ListaDeProdutos} />
         </div>
      );
   }
}
export default Loja;