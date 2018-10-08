import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';


class CarrinhoContent extends React.Component {
    constructor(props) {
        super(props);

        this.produtos = [
            {
                Nome: 'Teste 1',
                Quantidade: 3,
                Preco: 1.1
            },
            {
                Nome: 'Teste 2',
                Quantidade: 5,
                Preco: 16.1
            },
            {
                Nome: 'Teste 3',
                Quantidade: 3,
                Preco: 5.1
            },
            {
                Nome: 'Teste 4',
                Quantidade: 2,
                Preco: 11.1
            }
        ];
  
        this.handleLoad = this.handleLoad.bind(this);
    }
  
    componentDidMount() {
        window.addEventListener('load', this.handleLoad());
    }
    
    handleLoad() {
        if(this.props.produtos.length > 0){
            let valorTotal = 0;
            ReactDOM.render(
                this.props.produtos.map(item => {
                    valorTotal += item.Preco * item.Quantidade;
                    return (
                        <div className="carrinho-card">
                            <div className="carrinho-card-img">
                                <img src="https://picsum.photos/600/600/"/>
                            </div>
                            <div className="carrinho-card-info">
                                <h5>{item.Nome}</h5>
                                <p>Quantidade: {item.Quantidade}</p>
                                <p>Valor: R$ {item.Preco}</p>
                            </div>
                        </div>
                    );
                }), document.getElementById("ProdutosCarrinho"), (
                    ReactDOM.render(
                        <div>
                            <button type="button" className="button-primary">Finalizar Compra</button>
                            <p className="m-0">Total: {valorTotal}</p>
                        </div>
                    , document.getElementById("checkout")))
            );
        }
        else{
            ReactDOM.render(
                    <div className="carrinho-card">
                        <div className="carrinho-card-info">
                            <h5>Seu carrinho está vazio</h5>
                            <p>Adicione alguns produtos para finalizar sua compra</p>
                        </div>
                    </div>
                , document.getElementById("ProdutosCarrinho")
            );
        }
    }

    render() {
        return (
            <aside className="p-relative carrinho-container">
                <a href="#" className="text-primary carrinho-btn-close" onClick={() => this.props.close()}>X</a>
                <div id="ProdutosCarrinho"></div>
                <div className="carrinho-checkout" id="checkout">
                    
                </div>
                <small className="mt-15 d-flex">você será redirecionado para um ambiente seguro</small>
            </aside>
        )
    }
};

export default CarrinhoContent;