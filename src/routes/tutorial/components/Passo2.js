import React from 'react';
import {Animated} from "react-animated-css";

const Passo2 = () => (
   <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
      <h2>CONVERSE DIRETAMENTE COM O CHOCOLATIER</h2>
      <p>Ao Utilizar nosso chat, você terá suas dúvidas respondidas pelo nosso chocolatier ao vivo. Lembre-se de ativar o som do seu aparelho.</p>
      <p>Além disso, você pode selecionar os produtos direto da prateleira para obter mais informações e/ou adicioná-lo em seu carrinho de compras</p>
   </Animated>
);

export default Passo2;