(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{121:function(e,t,a){e.exports=a.p+"static/media/shopping-basket.b31c8af0.svg"},122:function(e,t,a){e.exports=a.p+"static/media/shopping-cart.e7338b37.svg"},123:function(e,t,a){e.exports=a.p+"static/media/question-circle.ccf2da43.svg"},124:function(e,t,a){e.exports=a.p+"static/media/chat-icon.9aa58a22.svg"},125:function(e,t,a){e.exports=a.p+"static/media/open-book.e0869fb8.svg"},126:function(e,t,a){e.exports=a.p+"static/media/volUp.611698fd.svg"},127:function(e,t,a){e.exports=a.p+"static/media/volDown.be553442.svg"},138:function(e,t){},140:function(e,t){},149:function(e,t){},194:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a(9),r=a(12),c=a(10),i=a(11),s=a(13),l=a(1),d=a.n(l),u=a(55),m=a.n(u),p=a(121),h=a.n(p),b=a(122),f=a.n(b),E=a(7),v=a.n(E),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).showProduto=function(e){alert(),console.log(e)},a.handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){var e=this;v.a.render(this.props.produtos.produtos.map(function(t){return d.a.createElement("a",{href:"#","data-x":t.xy.top,"data-y":t.xy.left,className:"btn-produto",onClick:function(){return e.props.click(t.Produto)},id:t.Produto.Id,style:{top:t.xy.top,left:t.xy.left}},d.a.createElement("img",{src:h.a,className:"icone-basket"}))}),document.getElementById("Produtos"))}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("div",{id:"Produtos"}),d.a.createElement("div",{className:"floating-buttons top bg-warning"},d.a.createElement("div",{className:"buttons-left"},d.a.createElement("span",null,d.a.createElement("img",{className:"logo",src:m.a}))),d.a.createElement("div",{className:"buttons-right"},d.a.createElement("span",{onClick:function(){return e.props.cart()}},d.a.createElement("img",{className:"icone",src:f.a})))))}}]),t}(d.a.Component),g=a(62),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={produtos:null},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.myjson.com/bins/12m1jc").then(function(e){return e.json()}).then(function(t){e.props.getProduto(t.items),e.setState({produtos:t.items})},function(e){console.log(e)})}},{key:"render",value:function(){return d.a.createElement("code",{className:"d-none"})}}]),t}(d.a.Component),N=a(123),C=a.n(N),y=a(124),S=a.n(y),x=a(125),k=a.n(x),P=a(126),A=a.n(P),I=a(127),L=a.n(I),D=a(128),B=a.n(D),w=function(){return d.a.createElement("img",{src:L.a,className:"icone"})},M=function(){return d.a.createElement("img",{src:A.a,className:"icone"})},R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).BtnMute=function(e){a.state.Volume?v.a.render(d.a.createElement(M,null),document.getElementById("btnMute")):v.a.render(d.a.createElement(w,null),document.getElementById("btnMute")),a.setState({Volume:!a.state.Volume})},a.state={Volume:!1},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"floating-buttons bottom"},d.a.createElement(B.a,{effect:"solid",className:"toolTip"}),d.a.createElement("div",{className:"buttons-left"},d.a.createElement("span",{"data-tip":"Ajuda",href:"#",onClick:function(){return e.props.ajuda()}},d.a.createElement("img",{src:C.a,className:"icone"})),d.a.createElement("span",{"data-tip":"Produtos",href:"#",onClick:function(){return e.props.click()}},d.a.createElement("img",{src:k.a,className:"icone"}))),d.a.createElement("div",{className:"buttons-right"},d.a.createElement("span",{"data-tip":"Chat"},d.a.createElement("img",{src:S.a,className:"icone"})),d.a.createElement("span",{"data-tip":"Som",onClick:this.BtnMute,id:"btnMute"},d.a.createElement(M,null))))}}]),t}(d.a.Component),T=a(63),V=a(35),z=a(88),q=a.n(z),F=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){var e=this;v.a.render(this.props.produtos.map(function(t){return d.a.createElement("div",{className:"text-center mb-5"},d.a.createElement("div",{className:""},d.a.createElement("h4",null,t.Produto.Nome),d.a.createElement("h6",null,t.Produto.Descricao),d.a.createElement("p",{className:"font-weight-bold"},"R$ ",t.Produto.Preco),d.a.createElement("a",{className:"button-primary mt-3",onClick:function(){t.Produto.Quantidade=1,e.props.addToCart(t.Produto)}},"Adicionar ao Carrinho"),d.a.createElement("hr",{className:"mt-5"})))}),document.getElementById("ListaDeProdutos"))}},{key:"render",value:function(){var e=this;return d.a.createElement(V.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!0},d.a.createElement("div",{className:"h-100 w-100 pos-fixed z-index-2 modal-bg",onClick:function(){return e.props.closeProdutos()}},d.a.createElement("div",{className:"modal-container"},d.a.createElement("div",{className:"d-flex modal-content justify-content-center flex-column p-3 text-center text-black bg-light"},d.a.createElement("a",{href:"#",className:"sidebar-btn-close",onClick:function(){return e.props.closeProdutos()}},"X"),d.a.createElement("div",null,d.a.createElement("img",{src:q.a,alt:"Logo do Dengo",className:"w-150px"})),d.a.createElement("div",{id:"ListaDeProdutos",className:"align-middle p-5 modal-items-container"})))))}}]),t}(d.a.Component),U=function(e){function t(e){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(V.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!0},d.a.createElement("div",{className:"h-100 w-100 pos-fixed z-index-2 modal-bg",onClick:function(){return e.props.closeAjuda()}},d.a.createElement("div",{className:"modal-container"},d.a.createElement("div",{className:"d-flex modal-content justify-content-center flex-column p-3 text-center text-black bg-light"},d.a.createElement("a",{href:"#",className:"sidebar-btn-close",onClick:function(){return e.props.closeAjuda()}},"X"),d.a.createElement("div",null,d.a.createElement("img",{src:q.a,alt:"Logo do Dengo",className:"w-150px"})),d.a.createElement("div",{className:"align-middle p-5 modal-items-container"},d.a.createElement("div",{className:"text-center mb-5"},d.a.createElement("div",{className:""},d.a.createElement("h4",null,"PRIMEIRA STREAM STORE DO BRASIL"),d.a.createElement("p",null,"A loja ao vivo Dengo nasceu com o objetivo de criar uma nova experi\xeancia de compras, mantendo o toque e a proximidade do contato humano ao mesmo tempo em que utiliza todo o potencial que a tecnologia e a internet t\xeam a oferecer."),d.a.createElement("h4",{class:"mt-4"},"COMO A LOJA AO VIVO FUNCIONA"),d.a.createElement("p",null,"Voc\xea pode pedir os chocolates Dengo da mesma maneira com que faz em nossas lojas f\xedsicas, tirando d\xfavidas direto com os especialistas e finalizando sua compra como no e-commerce."),d.a.createElement("h4",{class:"mt-4"},"CONVERSE DIRETAMENTE COM CHOCOLATIER"),d.a.createElement("p",null,"Ao utilizar nosso chat, voc\xea ter\xe1 suas d\xfavidas respondidas pelo nosso chocolatier ao vivo. Lembre-se de ativar o som do seu aparelho. Al\xe9m disso, voc\xea pode selecionar os produtos direto da prateleira para obter mais informa\xe7\xf5es, e/ou adicion\xe1-lo em seu carrinho de compras."),d.a.createElement("h4",{class:"mt-4"},"HOR\xc1RIO DE FUNCIONAMENTO"),d.a.createElement("p",null,"Nossa loja ao vivo funciona das 10:30h \xe0s 21:00h de segunda \xe0 s\xe1bado. Mas n\xe3o se preocupe, voc\xea ainda pode conhecer e comprar nossos deliciosos produtos em nossa loja online 24h, clica aqui \xf3: ",d.a.createElement("a",{href:"http://dengo.com",target:"_blank"},"dengo.com")),d.a.createElement("h4",{class:"mt-4"},"PAGAMENTO E ENVIO DOS PRODUTOS"),d.a.createElement("p",null,"Voc\xea pode comprar os chocolates Dengo usando o PayPal, cart\xe3o de cr\xe9dito ou xxxx. As taxas de entrega ser\xe3o calculadas assim que os pedidos forem finalizados no carrinho de compras (de R$xx)."),d.a.createElement("p",null,"Seu pedido ser\xe1 enviado via xxxx. Aten\xe7\xe3o: vendas dispon\xedveis apenas para territ\xf3rio nacional. Todas as taxas e encargos ficam por conta do cliente."),d.a.createElement("h4",{class:"mt-4"},"FINALIZE SUA COMPRA"),d.a.createElement("p",null,"Clique no carrinho para visualizar seus produtos e finalize a compra. Assim que o pagamento for processado, seu chocolate ser\xe1 embalado e enviado para voc\xea em tempo real."))))))))}}]),t}(d.a.Component),H=a(177),Q=a.n(H),$=a(179),X=(a(189),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).updateDimensions=function(e){setTimeout(function(){var e=document.querySelector(".loja-bg"),t=document.querySelector("#abc").offsetHeight;e.style.height=t,e.style.width=2394/768*t+"px",document.querySelectorAll("#Produtos a").forEach(function(t){t.style.left=e.offsetWidth*t.dataset.y/100+"px",t.style.top=e.offsetHeight*t.dataset.x/100+"px"})},100)},a.componentDidMount=function(){window.addEventListener("resize",a.updateDimensions)},a.ListaDeProdutos=function(){var e=document.getElementById("Modal");v.a.unmountComponentAtNode(e),v.a.render(d.a.createElement(F,{produtos:a.state.produtos,closeProdutos:a.CloseModal,addToCart:a.adicionarAoCarrinho}),e),e.classList.remove("d-none")},a.Ajuda=function(){var e=document.getElementById("Modal");v.a.unmountComponentAtNode(e),v.a.render(d.a.createElement(U,{closeAjuda:a.CloseModal}),e),e.classList.remove("d-none")},a.CloseModal=function(){var e=document.getElementById("Modal");v.a.unmountComponentAtNode(e),e.classList.add("d-none")},a.closeSideBar=function(e){void 0!==e&&setTimeout(function(){v.a.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))},300)},a.setProduto=function(e){a.closeSideBar(),v.a.render(d.a.createElement(g.a,{produto:e,addToCart:a.adicionarAoCarrinho,close:a.closeSideBar}),document.getElementById("ProdutoSideBar"))},a.carregarProdutos=function(e){a.setState({produtos:e})},a.AbrirCarrinho=function(){a.closeSideBar(),v.a.render(d.a.createElement(T.a,{produtos:a.carrinho,close:a.closeSideBar}),document.getElementById("ProdutoSideBar"))},a.adicionarAoCarrinho=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.carrinho.push(e),t&&a.closeSideBar("a"),Object($.toast)("\u2713 PRODUTO INSERIDO COM SUCESSO!",{position:"top-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0})},a.state={produtos:null},a.carrinho=[],a.updateDimensions=a.updateDimensions.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(e,t){var a=this;v.a.render(d.a.createElement(O,{produtos:t,click:this.setProduto,cart:this.AbrirCarrinho}),document.getElementById("btnProdutos"),function(){return a.updateDimensions(document.getElementById("btnProdutos"))})}},{key:"render",value:function(){return d.a.createElement("div",{id:"abc",class:"h100"},d.a.createElement(j,{getProduto:this.carregarProdutos}),d.a.createElement("div",{id:"ProdutoSideBar"}),d.a.createElement(Q.a,{className:"p-relative ov-hidden h100 dragscroll",height:"100%",width:"100vw"},d.a.createElement("div",{className:"loja-bg"},d.a.createElement("div",{id:"btnProdutos"}))),d.a.createElement("div",{id:"Modal",className:"d-none"}),d.a.createElement($.ToastContainer,{bodyClassName:"toastr-produto",progressClassName:"toastr-produto-progress"}),d.a.createElement(R,{click:this.ListaDeProdutos,ajuda:this.Ajuda}))}}]),t}(d.a.Component));t.default=X},55:function(e,t,a){e.exports=a.p+"static/media/logo_dengo.ed3d6552.svg"},62:function(e,t,a){"use strict";var n=a(8),o=a(9),r=a(12),c=a(10),i=a(11),s=a(13),l=a(1),d=a.n(l),u=(a(37),a(64)),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={counter:1},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"minus",value:function(){this.state.counter>1&&this.setState({counter:this.state.counter-1})}},{key:"plus",value:function(){this.setState({counter:this.state.counter+1})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"counter"},d.a.createElement("div",{className:"counter-box counter-box-minus",onClick:function(){return e.minus()}}),d.a.createElement("div",{className:"counter-value",id:"counterValue"},this.state.counter),d.a.createElement("div",{className:"counter-box counter-box-plus",onClick:function(){return e.plus()}}))}}]),t}(d.a.Component),p=a(7),h=a.n(p),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={produtos:null},a.handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){h.a.render(d.a.createElement(u.Carousel,{id:"imagens",showThumbs:!1,showStatus:!1},this.props.produto.Imagens.map(function(e){return d.a.createElement("div",null,d.a.createElement("img",{alt:"imagem do produto",src:e}))})),document.getElementById("imagens"))}},{key:"render",value:function(){var e=this;return d.a.createElement("aside",{className:"p-relative sidebar-container"},d.a.createElement("a",{href:"#",className:"sidebar-btn-close",onClick:function(){return e.props.close()}},"X"),d.a.createElement("div",{id:"imagens"}),d.a.createElement("div",{className:"sidebar-info"},d.a.createElement("h3",null,this.props.produto.Nome),d.a.createElement("small",null,"Ref: ",this.props.produto.Id),d.a.createElement("p",{className:"sidebar-info-desc"},this.props.produto.Descricao)),d.a.createElement("div",{className:"text-center"},d.a.createElement(m,null),d.a.createElement("p",{className:"sidebar-price"},"R$ ",this.props.produto.Preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),d.a.createElement("button",{type:"button",className:"button-primary",onClick:function(){e.props.produto.Quantidade=Number(document.querySelector("#counterValue").textContent),e.props.addToCart(e.props.produto,!0)}},"Adicionar no Carrinho")))}}]),t}(d.a.Component),f=a(38),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={sidebarOpen:!0,produto:{Nome:e.produto.Nome,Preco:4.8}},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e}),e||this.props.close("sidebar")}},{key:"render",value:function(){return d.a.createElement(f.a,{sidebar:d.a.createElement(b,{produto:this.props.produto,addToCart:this.props.addToCart,close:this.onSetSidebarOpen}," "),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"#ffffff",position:"fixed"}}})}}]),t}(d.a.Component);t.a=E},63:function(e,t,a){"use strict";var n=a(8),o=a(9),r=a(12),c=a(10),i=a(11),s=a(13),l=a(1),d=a.n(l),u=(a(37),a(7)),m=a.n(u),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){if(this.props.produtos.length>0){var e=0;m.a.render(this.props.produtos.map(function(t){return e+=t.Preco*t.Quantidade,d.a.createElement("div",{className:"carrinho-card"},d.a.createElement("div",{className:"carrinho-card-img"},d.a.createElement("img",{alt:"imagem do produto",src:t.Imagens[0]})),d.a.createElement("div",{className:"carrinho-card-info"},d.a.createElement("h5",null,t.Nome),d.a.createElement("p",null,"Quantidade: ",t.Quantidade),d.a.createElement("p",null,"Valor: R$ ",t.Preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}))))}),document.getElementById("ProdutosCarrinho"),m.a.render(d.a.createElement("div",{className:"carrinho-card-finalizar"},d.a.createElement("button",{type:"button",className:"button-primary"},"Finalizar Compra"),d.a.createElement("p",{className:"m-0"},"Total: R$ ",e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}))),document.getElementById("checkout")))}else m.a.render(d.a.createElement("div",{className:"carrinho-card"},d.a.createElement("div",{className:"carrinho-card-info"},d.a.createElement("h5",null,"Seu carrinho est\xe1 vazio"),d.a.createElement("p",null,"Adicione alguns produtos para finalizar sua compra"))),document.getElementById("ProdutosCarrinho"))}},{key:"render",value:function(){var e=this;return d.a.createElement("aside",{className:"p-relative carrinho-container"},d.a.createElement("a",{href:"#",className:"carrinho-btn-close",onClick:function(){return e.props.close()}},"X"),d.a.createElement("div",{id:"ProdutosCarrinho"}),d.a.createElement("div",{className:"carrinho-checkout",id:"checkout"}),d.a.createElement("small",{className:"mt-15 d-flex"},"voc\xea ser\xe1 redirecionado para um ambiente seguro"))}}]),t}(d.a.Component),h=a(38),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={sidebarOpen:!0,produto:{Nome:"Chocolate Amargo 75% 20g",Preco:4.8}},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e}),e||this.props.close("carrinho")}},{key:"render",value:function(){return d.a.createElement(h.a,{sidebar:d.a.createElement(p,{produtos:this.props.produtos,close:this.onSetSidebarOpen}," "),open:this.state.sidebarOpen,pullRight:!0,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"#fff",position:"fixed"}}})}}]),t}(d.a.Component);t.a=b},88:function(e,t,a){e.exports=a.p+"static/media/logo_color_dengo.b8d87d69.svg"}}]);
//# sourceMappingURL=6.2df5a563.chunk.js.map