import React from 'react';
import Buttons from './Buttons.js'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js'
import Lista from './APIProdutos.js'
import FloatingButtons from './../../floatingbuttons/index.js'
import Carrinho from './../../carrinho/components/carrinho.js'
import ListaDeProdutos from './ListaDeProdutos.js'
import Ajuda from './Ajuda.js'
import DragScroll from 'react-dragscroll'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Loja extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            produtos: null
        };

        this.carrinho = [];

        this.updateDimensions = this
            .updateDimensions
            .bind(this);
    }
    updateDimensions = (div) => {
        setTimeout(() => {
            let lojabg = document.querySelector(".loja-bg")

            let proporcaoVideo = 1920 / 1080;
            let proporcaoJanela = window.innerWidth / window.innerHeight;

            let windowHeight = window.innerHeight

            let windowWidth = window.innerWidth

            if(proporcaoJanela < proporcaoVideo){
                lojabg.style.height = windowHeight + 'px';
                lojabg.style.width = (proporcaoVideo * windowHeight) + 'px';
                lojabg.style.overflowX = 'auto';
                lojabg.style.overflowY = 'hidden';
            } else if(proporcaoJanela > proporcaoVideo){
                lojabg.style.width = windowWidth + 'px';
                lojabg.style.height = (windowWidth / proporcaoVideo) + 'px';
                lojabg.style.overflowX = 'auto';
                lojabg.style.overflowY = 'hidden';
            }

            let produtos = document.querySelectorAll("#Produtos a")
            produtos.forEach(prod => {
                prod.style.left = (lojabg.offsetWidth * prod.dataset.y / 100) + 'px';
                prod.style.top = (lojabg.offsetHeight * prod.dataset.x / 100) + 'px';
            });
        }, 100);
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions(document.getElementById("btnProdutos"))


                //Carrega Wowzaplayer 
                const script = document.createElement("script");
                script.src = "https://player.vimeo.com/api/player.js";
                document.body.appendChild(script);
                
        
        
                //Inicializa o serviço de STREAM 
                eval(` let promise = setInterval(() => {
                                if(Vimeo != undefined){
                                    
                                    var options = {
                                        url: 'https://player.vimeo.com/video/275642423?autoplay=1&loop=1&mute=1',
                                    playsinline: true
                                    };
                                
                                    var player = new Vimeo.Player('stream', options);
                                
                                    player.setVolume(1);
            
                                    let playbtn = document.querySelector("#playButton");
                                    playbtn.addEventListener("click", function(){
                                            player.play();
                                            document.querySelector(".termos").classList.add("fadeOut");
                                    })
                                    clearInterval(promise);
                                }
                            }, 500); `);

        // // Carrega Wowzaplayer
        // const script = document.createElement("script");
        // script.src = "http://player.wowza.com/player/latest/wowzaplayer.min.js";
        // document.body.appendChild(script);
        
        // // Inicializa o serviço de STREAM
        // eval(`
        // let promise = setInterval(() => {
        //     if(WowzaPlayer != undefined){
        //         WowzaPlayer.create('loja-bg', {
        //                 "license":"PLAY1-dBHE7-TfW9B-w44eM-6tMef-ncU6k",
        //                 "title":"Dengo Streaming",
        //                 "description":"Dengo Shop Stream",
        //                 "sourceURL":"http%3A%2F%2F138.201.110.151%3A1935%2Flive%2Ftest%2Fplaylist.m3u8",
        //                 "autoPlay":true,
        //                 "volume":"75",
        //                 "mute":false,
        //                 "loop":true,
        //                 "audioOnly":false,
        //                 "uiShowQuickRewind":true,
        //                 "uiQuickRewindSeconds":"30"
        //             });

        //             clearInterval(promise);
        //         }
        //     }, 500);
        // `);       
        
    }

    ListaDeProdutos = () => {
        let modal = document.getElementById("Modal");
        ReactDOM.unmountComponentAtNode(modal)
        ReactDOM.render(
            <ListaDeProdutos
            produtos={this.state.produtos}
            closeProdutos={this.CloseModal}
            addToCart={this.adicionarAoCarrinho}/>, modal)
        modal
            .classList
            .remove("d-none");
        // Aqui a gente chama o SideBar e coloca as infos do produto
    }

    Ajuda = () => {
        let modal = document.getElementById("Modal");
        ReactDOM.unmountComponentAtNode(modal)
        ReactDOM.render(
            <Ajuda
            closeAjuda={this.CloseModal}/>, modal)
        modal
            .classList
            .remove("d-none");
    }

    CloseModal = () => {
        let modal = document.getElementById("Modal");
        ReactDOM.unmountComponentAtNode(modal)
        modal
            .classList
            .add("d-none");
        // Aqui a gente chama o SideBar e coloca as infos do produto
    }

    closeSideBar = (sidebar) => {
        if (sidebar !== undefined) 
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))
            }, 300);
      }
    
    setProduto = (p) => {
        this.closeSideBar();
        ReactDOM.render(
            <LeftSideModal
            produto={p}
            addToCart={this.adicionarAoCarrinho}
            close={this.closeSideBar}/>, document.getElementById("ProdutoSideBar"))
        // Aqui a gente chama o SideBar e coloca as infos do produto
    }

    componentWillUpdate(nextProps, nextState) {
        ReactDOM.render(
            <Buttons
            produtos={nextState}
            click={this.setProduto}
            cart={this.AbrirCarrinho}/>, document.getElementById("btnProdutos"), () => this.updateDimensions(document.getElementById("btnProdutos")))
    }

    carregarProdutos = (produtos) => {
        this.setState({produtos})
    }

    AbrirCarrinho = () => {
        this.closeSideBar();
        ReactDOM.render(
            <Carrinho produtos={this.carrinho} close={this.closeSideBar}/>, document.getElementById("ProdutoSideBar"))
        // Aqui a gente chama o SideBar e coloca as infos do produto
    }

    adicionarAoCarrinho = (item, sideBar = false) => {
        this
            .carrinho
            .push(item);
        if (sideBar) 
            this.closeSideBar('a');
        
        toast('✓ PRODUTO INSERIDO COM SUCESSO!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true
        });
    }

    render() {
        return (
            <div id="abc" className='h100'>
                <div className="termos animated">
                    <div className="termos-modal">
                        <div className="termos-modal-texto">Termos e Condições</div>
                        <div className="termos-modal-button">
                            <button type="button" className="btn btn-outline-light btn-fechar" id="playButton">EU ACEITO. VAMOS INICIAR!</button>
                        </div>
                    </div>
                </div>
                <Lista getProduto={this.carregarProdutos}/>
                <div id="ProdutoSideBar"></div>
                <DragScroll
                    className="p-relative ov-hidden h100 dragscroll"
                    height={'100vh'}
                    width={'100vw'}>
                    <div className="loja-bg">
                    <div className="loja-bg" id="stream"></div>
                        <div></div>
                    </div>

                    {/* <iframe className="loja-bg" id="loja-bg" src="https://player.vimeo.com/video/275642423" scrolling="yes"></iframe> */}
                    {/* <div className="loja-bg" id="loja-bg">
                    </div> */}
                    <div id="btnProdutos"></div>
                </DragScroll>
                <div id="Modal" className="d-none"></div>
                <ToastContainer
                    bodyClassName="toastr-produto"
                    progressClassName="toastr-produto-progress"/>
                <FloatingButtons click={this.ListaDeProdutos} ajuda={this.Ajuda}/>
            </div>
        );
    }
}
export default Loja;