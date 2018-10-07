import React from 'react';
import Buttons from './Buttons.js'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js' 
import {lista} from './APIProdutos.js'

class Loja extends React.Component {
   constructor(props) {
      super(props);
      this.produtos = lista();
   }

   setProduto = ( p ) => {
      ReactDOM.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))
      ReactDOM.render(<LeftSideModal produto={p} sidebarOpen={this.state.sidebarOpen}/>,document.getElementById("ProdutoSideBar"))
      // Aqui a gente chama o SideBar e coloca as infos do produto
   }

   render() {
      return (
         <div className="loja-bg h-100">
               <div id="ProdutoSideBar"></div>
               <div className='black-screen'>
                  <Buttons produtos={this.produtos} click={this.setProduto}/>
               </div>
         </div>
      );
   }
}
export default Loja;