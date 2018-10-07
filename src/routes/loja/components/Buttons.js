import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js' 

class Buttons extends React.Component {
   constructor(props) {
      super(props);

      this.produtos = [
         {
            Produto: {
               Id: 1,
               Nome: 'Chocolate 1'
            },
            xy: {top: '530px', left: '950px'}
         },
         {
            Produto: {
               Id: 2,
               Nome: 'Chocolate 2'
            },
            xy: {top: '246px', left: '2015px'}
         },
         {
            Produto: {
               Id: 3,
               Nome: 'Chocolate 3'
            },
            xy: {top: '35px', left: '625px'}
         },
      ];
      this.handleLoad = this.handleLoad.bind(this);
   }

   componentDidMount() {
      window.addEventListener('load', this.handleLoad);
   }
  
   handleLoad() {
      var divs = '';

      ReactDOM.render(
         this.produtos.map(item => {
            return (
               <a href="#" onClick={LeftSideModal.onSetSidebarOpen(true)} id={item.Produto.Id} style={item.xy}>
                  <FontAwesomeIcon icon={faShoppingBasket} />
               </a>
            );
         }), document.getElementById("Produtos"));
      
   }

   showProduto = (e) => {
      alert();
      console.log(e);
   };
 
   render() {
     return (
        <div id="Produtos">

        </div>
     );
   }
 }

 export default Buttons;