import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';

class CarrinhoContent extends React.Component {
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
        if (this.props.produtos.length > 0) {
            let valorTotal = 0;
            ReactDOM.render(this.props.produtos.map(item => {
                valorTotal += item.Preco * item.Quantidade;
                return (
                    <div className="carrinho-card">
                        <div className="carrinho-card-img">
                            <img alt="imagem do produto" src={item.Imagens[0]}/>
                        </div>
                        <div className="carrinho-card-info">
                            <h5>{item.Nome}</h5>
                            <p>Quantidade: {item.Quantidade}</p>
                            <p>Valor: R$ {item
                                    .Preco
                                    .toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</p>
                        </div>
                    </div>
                );
            }), document.getElementById("ProdutosCarrinho"), (ReactDOM.render(
                <div className="carrinho-card-finalizar">
                <button type="button" className="button-primary">Finalizar Compra</button>
                <p className="m-0">Total: R$ {valorTotal.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}</p>
            </div>, document.getElementById("checkout"))));
        } else {
            ReactDOM.render(
                <div className="carrinho-card">
                <div className="carrinho-card-info">
                    <h5>Seu carrinho está vazio</h5>
                    <p>Adicione alguns produtos para finalizar sua compra</p>
                </div>
            </div>, document.getElementById("ProdutosCarrinho"));
        }
    }

    render() {
        return (
            <aside className="p-relative carrinho-container">
                <a href="#" className="carrinho-btn-close" onClick={() => this.props.close()}>X</a>
                <div id="ProdutosCarrinho"></div>
                <div className="carrinho-checkout" id="checkout"></div>
                <small className="mt-15 d-flex">você será redirecionado para um ambiente seguro</small>
            </aside>
        )
    }
};

export default CarrinhoContent;