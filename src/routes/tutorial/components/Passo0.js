import React from 'react';
import {Animated} from "react-animated-css";

const Passo0 = () => (
   <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
      <h2>BEM-VINDO A LOJA AO VIVO!</h2>
      <p>A loja ao vivo Dengo nasceu com o objetivo de criar uma nova experiência de compras, mantendo o toque e a proximidade do contato humano ao mesmo tempo em que utiliza todo o potencial que a tecnologia e a internet têm a oferecer.</p>
   </Animated>
);

export default Passo0;