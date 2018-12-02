import React from 'react';
import {Animated} from "react-animated-css";
import ReactDOM from 'react-dom';
import logo from './../../../images/logo_color_dengo.svg';

class Ajuda extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="h-100 w-100 pos-fixed z-index-2 modal-bg" onClick={() => this.props.closeAjuda()}>
                    <div className="modal-container">
                        <div
                            className="d-flex modal-content justify-content-center flex-column p-3 text-center text-black bg-light">
                              <a
                                 href="#"
                                 className="sidebar-btn-close"
                                 onClick={() => this.props.closeAjuda()}>X</a>
                                 <div><img src={logo} alt="Logo do Dengo" className="w-150px"/></div>
                                 <div className="align-middle p-5 modal-items-container">
                                 <div className="text-center mb-5">
                                 <div className="">
                                    <h4>PRIMEIRA STREAM STORE DO BRASIL</h4>
                                    <p>A loja ao vivo Dengo nasceu com o objetivo de criar uma nova experiência
                                    de compras, mantendo o toque e a proximidade do contato humano ao
                                    mesmo tempo em que utiliza todo o potencial que a tecnologia e a
                                    internet têm a oferecer.</p>

                                    <h4 className="mt-4">COMO A LOJA AO VIVO FUNCIONA</h4>
                                    <p>Você pode pedir os chocolates Dengo da mesma maneira com que faz em
                                    nossas lojas físicas, tirando dúvidas direto com os especialistas e
                                    finalizando sua compra como no e-commerce.</p>

                                    <h4 className="mt-4">CONVERSE DIRETAMENTE COM CHOCOLATIER</h4>
                                    <p>Ao utilizar nosso chat, você terá suas dúvidas respondidas pelo nosso
                                    chocolatier ao vivo. Lembre-se de ativar o som do seu aparelho.
                                    Além disso, você pode selecionar os produtos direto da prateleira para
                                    obter mais informações, e/ou adicioná-lo em seu carrinho de compras.</p>

                                    <h4 className="mt-4">HORÁRIO DE FUNCIONAMENTO</h4>
                                    <p>Nossa loja ao vivo funciona das 10:30h às 21:00h de segunda à sábado. Mas não se preocupe,
                                       você ainda pode conhecer e comprar nossos deliciosos produtos em nossa loja online 24h, clica aqui ó: <a href="http://dengo.com" target="_blank">dengo.com</a></p>

                                    <h4 className="mt-4">PAGAMENTO E ENVIO DOS PRODUTOS</h4>
                                    <p>Você pode comprar os chocolates Dengo usando o PayPal, cartão de
                                    crédito ou xxxx. As taxas de entrega serão calculadas assim que os pedidos
                                    forem finalizados no carrinho de compras (de R$xx).</p>
                                    <p>Seu pedido será enviado via xxxx. Atenção: vendas disponíveis apenas para
                                    território nacional. Todas as taxas e encargos ficam por conta do cliente.</p>

                                    <h4 className="mt-4">FINALIZE SUA COMPRA</h4>
                                    <p>Clique no carrinho para visualizar seus produtos e finalize a compra.
                                    Assim que o pagamento for processado, seu chocolate será embalado e
                                    enviado para você em tempo real.</p>
                              </div>
                           </div>
                           </div>
                     </div>
                  </div>
               </div>
            </Animated>
        );
    }
}

export default Ajuda;
