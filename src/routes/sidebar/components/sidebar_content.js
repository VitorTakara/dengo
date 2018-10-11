import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Counter from './counter.js';
import ReactDOM from 'react-dom'


class SidebarContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			produtos: null
		};

		this.handleLoad = this.handleLoad.bind(this);
	}

	componentDidMount() {
      window.addEventListener("load", this.handleLoad())
   }
   
   handleLoad(){
      ReactDOM.render(
			<Carousel id="imagens" showThumbs={false} showStatus={false}>
				{this.props.produto.Imagens.map(item => {
            	return (
						<div>
							<img src={item}/>
						</div>
            	);
         	})}
			</Carousel>
         , document.getElementById("imagens")
		);
	}


	render() {
		return (
			<aside className="p-relative sidebar-container">
					<a href="#" className="sidebar-btn-close" onClick={() => this.props.close()}>X</a>
					<div id="imagens"></div>
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