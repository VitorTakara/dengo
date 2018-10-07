import React from 'react';
import Buttons from './Buttons.js'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js'
import CarrrinhoSideModal from './../../carrinho/components/carrinho.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {lista} from './APIProdutos.js'

class Loja extends React.Component {
    constructor(props) {
        super(props);
        this.produtos = lista();
    }

    setProduto = (p) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))
        ReactDOM.render(
            <LeftSideModal produto={p}/>, document.getElementById("ProdutoSideBar"))
    }

    verCarrinho = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("CarrrinhoSideModal"))
        ReactDOM.render(
            <CarrrinhoSideModal/>, document.getElementById("CarrrinhoSideModal"))
    }

    render() {
        return (
            <div className="loja-bg h-100">
                <div id="ProdutoSideBar"></div>
                <div id="CarrrinhoSideModal"></div>
                <div className='black-screen'>

                    <div className="floating-buttons top bg-warning">
                        <div className="buttons-right">
                            <span onClick={this.verCarrinho}><FontAwesomeIcon icon={faShoppingCart}/></span>
                        </div>
                    </div>

                    <Buttons produtos={this.produtos} click={this.setProduto}/>
                </div>
            </div>
        );
    }
}
export default Loja;