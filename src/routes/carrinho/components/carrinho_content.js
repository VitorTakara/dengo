import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class CarrinhoContent extends React.Component {
    render() {
        return (
    <aside className="p-relative sidebar-container">
        <div className="sidebar-btn-close">X</div>
        <div className="sidebar-info">
            <h3>{this.props.produto.Nome}</h3>
            <small>Ref: 6</small>
            <p className="sidebar-info-desc">Chocolate Amargo 75% cacau produzido com o cacau do João Menezes. Porção de 20g.</p>
        </div>
        <p className="sidebar-price">R$ {this.props.produto.Preco}</p>
        <button type="button" className="button-primary">Adicionar no Carrinho</button>
    </aside>
    
    )}

        };

export default CarrinhoContent;