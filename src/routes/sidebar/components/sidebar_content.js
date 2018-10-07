import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Counter from './counter.js';

const Page = () => (
    <aside className="p-relative sidebar-container">
        <div className="sidebar-btn-close">X</div>
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
            <h3>Chocolate Amargo 75% 20g</h3>
            <small>Ref: 6</small>
            <p className="sidebar-info-desc">Chocolate Amargo 75% cacau produzido com o cacau do João Menezes. Porção de 20g.</p>
        </div>
        <Counter></Counter>
        <p className="sidebar-price">R$ 4,80</p>
            <button type="button" className="button-primary">Adicionar no Carrinho</button>
    </aside>

);

export default Page;