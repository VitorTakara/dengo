import React from 'react';

const Page = () => (
   <div className="w-100 h-100">
      <div className="home">
         <div className="d-flex justify-content-center flex-column p-5 home-content">
            <div className="home-logo"></div>
            <div className="align-middle text-center text-white p-5">
               <h2>BEM VINDO A LOJA AO VIVO!</h2>
               <p>A loja ao vivo Dengo nasceu com o objetivo de criar uma nova experiência de compras, 
               mantendo o toque e a proximidade do contato humano ao mesmo tempo em que utiliza todo o 
               potencial que a tecnologia e a internet têm a oferecer.</p>
               <a href="/Tutorial" className="btn btn-outline-light">ENTRAR</a>
            </div>
         </div>
      </div>
   </div>
);

export default Page;
