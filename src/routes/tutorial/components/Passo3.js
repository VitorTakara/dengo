import React from 'react';
import {Animated} from "react-animated-css";

const Passo3 = () => (
    <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
        <h2>FINALIZE SUA COMPRA</h2>
        <p>Clique no carrinho para visualizar seus produtos e finalize a compra. Assim
            que o pagamento for processado, seu chocolate será embalado e enviado para você
            em tempo real.</p>
    </Animated>
);

export default Passo3;