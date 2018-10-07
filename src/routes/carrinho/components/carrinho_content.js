import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class CarrinhoContent extends React.Component {
    render() {
        return (
    <aside className="p-relative carrinho-container">
        <div className="carrinho-btn-close">X</div>
        <div className="carrinho-card">
            <div className="carrinho-card-img">
                <img src="https://picsum.photos/600/600/"/>
            </div>
            <div className="carrinho-card-info">
                <h5>{this.props.produto.Nome}</h5>
                <p>Quantidade: 1</p>
                <p>Valor: R$4,80</p>
            </div>
        </div>
        <div className="carrinho-checkout">
            <button type="button" className="button-primary">Finalizar Compra</button>
            <p className="m-0">Total: R$14,40</p>
        </div>
        <small className="mt-15 d-flex">você será redirecionado para um ambiente seguro</small>
    </aside>
    
    )}

        };

export default CarrinhoContent;