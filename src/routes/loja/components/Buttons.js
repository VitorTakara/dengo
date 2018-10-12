import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'

class Buttons extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoad = this
            .handleLoad
            .bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad());
    }

    handleLoad() {
        ReactDOM.render(this.props.produtos.produtos.map(item => {
            return (
                <a
                    href="#"
                    data-x={item.xy.top}
                    data-y={item.xy.left}
                    className="btn-produto"
                    onClick={() => this.props.click(item.Produto)}
                    id={item.Produto.Id}
                    style={{
                    top: item.xy.top,
                    left: item.xy.left
                }}>
                    <FontAwesomeIcon icon={faShoppingBasket}/>
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
            <div>
                <div id="Produtos"></div>
                <div className="floating-buttons top bg-warning">
                    <div className="buttons-right">
                        <span><FontAwesomeIcon icon={faShoppingCart} onClick={() => this.props.cart()}/></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;