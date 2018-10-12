import React from 'react';
import {Animated} from "react-animated-css";

const Passo1 = () => (
    <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
        <h2>COMO A LOJA AO VIVO FUNCIONA</h2>
        <p>Você pode pedir os chocolates Dengo da mesma maneira com que faz em nossas
            lojas físicas, tirando dúvidas direto com nossos especialistas e finalizando sua
            compra como no e-commerce</p>
    </Animated>
);

export default Passo1;