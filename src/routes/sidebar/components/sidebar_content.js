import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Counter from './counter.js';


class SidebarContent extends React.Component {
    render() {
        return (
            <aside className="p-relative sidebar-container">
                <a href="#" className="text-primary sidebar-btn-close" onClick={() => this.props.close()}>X</a>
                <Carousel showThumbs={false} showStatus={false}>
                    <div>
                        <img src="https://static.noticiasaominuto.com.br/stockimages/1920/naom_5a4f9bdfb0e6b.jpg"/>
                    </div>
                    <div>
                        <img src="https://s3.portalt5.com.br/imagens/chocolates-saude.jpg?mtime=20180323213413"/>
                    </div>
                    <div>
                        <img src="https://static.noticiasaominuto.com/stockimages/1920/naom_5ab220ab0f15e.jpg?1521623319"/>
                    </div>
                </Carousel>
                <div className="sidebar-info">
                    <h3>{this.props.produto.Nome}</h3>
                    <small>Ref: {this.props.produto.Id}</small>
                    <p className="sidebar-info-desc">{this.props.produto.Descricao}</p>
                </div>
                <Counter></Counter>
                <p className="sidebar-price">R$ {this.props.produto.Preco}</p>
                <button type="button" className="button-primary" onClick={() => { this.props.produto.Quantidade = Number(document.querySelector("#counterValue").textContent); this.props.addToCart(this.props.produto, true)}}>Adicionar no Carrinho</button>
            </aside>
        )
    }
};

export default SidebarContent;