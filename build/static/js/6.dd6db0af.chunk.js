(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{112:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a(9),r=a(12),c=a(10),i=a(11),s=a(13),l=a(0),u=a.n(l),d=a(36),m=a(37),p=a(7),h=a.n(p),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).showProduto=function(e){alert(),console.log(e)},a.handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){var e=this;h.a.render(this.props.produtos.produtos.map(function(t){return u.a.createElement("a",{href:"#","data-x":t.xy.top,"data-y":t.xy.left,className:"btn-produto",onClick:function(){return e.props.click(t.Produto)},id:t.Produto.Id,style:{top:t.xy.top,left:t.xy.left}},u.a.createElement(d.a,{icon:m.e}))}),document.getElementById("Produtos"))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",{id:"Produtos"}),u.a.createElement("div",{className:"floating-buttons top bg-warning"},u.a.createElement("div",{className:"buttons-right"},u.a.createElement("span",null,u.a.createElement(d.a,{icon:m.f,onClick:function(){return e.props.cart()}})))))}}]),t}(u.a.Component),f=a(48),E=a(41),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={produtos:null},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.myjson.com/bins/ioyn8").then(function(e){return e.json()}).then(function(t){e.props.getProduto(t.items),e.setState({produtos:t.items})},function(e){console.log(e)})}},{key:"render",value:function(){return u.a.createElement("code",{className:"d-none"})}}]),t}(u.a.Component),O=function(){return u.a.createElement(d.a,{icon:m.h})},g=function(){return u.a.createElement(d.a,{icon:m.g})},j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).BtnMute=function(e){a.state.Volume?h.a.render(u.a.createElement(g,null),document.getElementById("btnMute")):h.a.render(u.a.createElement(O,null),document.getElementById("btnMute")),a.setState({Volume:!a.state.Volume})},a.state={Volume:!1},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"floating-buttons bottom"},u.a.createElement("div",{className:"buttons-left"},u.a.createElement("span",null,u.a.createElement(d.a,{icon:m.d})),u.a.createElement("span",{href:"#",onClick:function(){return e.props.click()}},u.a.createElement(d.a,{icon:m.b}))),u.a.createElement("div",{className:"buttons-right"},u.a.createElement("span",null,"PT"),u.a.createElement("span",null,u.a.createElement(d.a,{icon:m.c})),u.a.createElement("span",{onClick:this.BtnMute,id:"btnMute"},u.a.createElement(g,null))))}}]),t}(u.a.Component),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){var e=this;h.a.render(this.props.produtos.map(function(t){return u.a.createElement("div",{className:"text-center mb-5"},u.a.createElement("div",{className:""},u.a.createElement("h4",null,t.Produto.Nome),u.a.createElement("h6",null,t.Produto.Descricao),u.a.createElement("p",{className:"font-weight-bold"},"R$ ",t.Produto.Preco),u.a.createElement("a",{className:"button-primary mt-3",onClick:function(){t.Produto.Quantidade=1,e.props.addToCart(t.Produto)}},"Adicionar ao Carrinho"),u.a.createElement("hr",{className:"mt-5"})))}),document.getElementById("ListaDeProdutos"))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"black-screen pos-fixed z-index-2"},u.a.createElement("div",{className:"modal-container"},u.a.createElement("div",{className:"d-flex modal-content justify-content-center flex-column p-3 text-center text-black bg-light"},u.a.createElement("a",{href:"#",className:"sidebar-btn-close",onClick:function(){return e.props.closeProdutos()}},"X"),u.a.createElement("div",{className:"top-logo top-logo-color"}),u.a.createElement("div",{id:"ListaDeProdutos",className:"align-middle p-5 modal-items-container"}))))}}]),t}(u.a.Component),N=a(94),C=a.n(N),S=a(96),k=(a(106),a(108),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).updateDimensions=function(e){setTimeout(function(){var e=document.querySelector(".loja-bg"),t=document.querySelector("#abc").offsetHeight;e.style.height=t,e.style.width=2394/768*t+"px",document.querySelectorAll("#Produtos a").forEach(function(t){t.style.left=e.offsetWidth*t.dataset.x/100+"px",t.style.top=e.offsetHeight*t.dataset.y/100+"px"})},100)},a.componentDidMount=function(){window.addEventListener("resize",a.updateDimensions)},a.ListaDeProdutos=function(){var e=document.getElementById("Modal");h.a.unmountComponentAtNode(e),h.a.render(u.a.createElement(y,{produtos:a.state.produtos,closeProdutos:a.CloseListaDeProdutos,addToCart:a.adicionarAoCarrinho}),e),e.classList.remove("d-none")},a.CloseListaDeProdutos=function(){var e=document.getElementById("Modal");h.a.unmountComponentAtNode(e),e.classList.add("d-none")},a.closeSideBar=function(e){void 0!=e&&setTimeout(function(){h.a.unmountComponentAtNode(document.getElementById("ProdutoSideBar"))},300)},a.setProduto=function(e){a.closeSideBar(),h.a.render(u.a.createElement(f.a,{produto:e,addToCart:a.adicionarAoCarrinho,close:a.closeSideBar}),document.getElementById("ProdutoSideBar"))},a.carregarProdutos=function(e){a.setState({produtos:e})},a.AbrirCarrinho=function(){a.closeSideBar(),h.a.render(u.a.createElement(E.a,{produtos:a.carrinho,close:a.closeSideBar}),document.getElementById("ProdutoSideBar"))},a.adicionarAoCarrinho=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.carrinho.push(e),t&&a.closeSideBar("a"),Object(S.toast)("\u2713 PRODUTO INSERIDO COM SUCESSO!",{position:"top-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0})},a.state={produtos:null},a.carrinho=[],a.updateDimensions=a.updateDimensions.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(e,t){var a=this;h.a.render(u.a.createElement(b,{produtos:t,click:this.setProduto,cart:this.AbrirCarrinho}),document.getElementById("btnProdutos"),function(){return a.updateDimensions(document.getElementById("btnProdutos"))})}},{key:"render",value:function(){return u.a.createElement("div",{id:"abc",class:"h100"},u.a.createElement(v,{getProduto:this.carregarProdutos}),u.a.createElement("div",{id:"ProdutoSideBar"}),u.a.createElement(C.a,{className:"p-relative ov-hidden h100 dragscroll",height:"100%",width:"100vw"},u.a.createElement("div",{className:"loja-bg"},u.a.createElement("div",{id:"btnProdutos"}))),u.a.createElement("div",{id:"Modal",className:"d-none"}),u.a.createElement(S.ToastContainer,{bodyClassName:"toastr-produto",progressClassName:"toastr-produto-progress"}),u.a.createElement(j,{click:this.ListaDeProdutos}))}}]),t}(u.a.Component));t.default=k},41:function(e,t,a){"use strict";var n=a(8),o=a(9),r=a(12),c=a(10),i=a(11),s=a(13),l=a(0),u=a.n(l),d=(a(33),a(7)),m=a.n(d),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){if(this.props.produtos.length>0){var e=0;m.a.render(this.props.produtos.map(function(t){return e+=t.Preco*t.Quantidade,u.a.createElement("div",{className:"carrinho-card"},u.a.createElement("div",{className:"carrinho-card-img"},u.a.createElement("img",{src:t.Imagens[0]})),u.a.createElement("div",{className:"carrinho-card-info"},u.a.createElement("h5",null,t.Nome),u.a.createElement("p",null,"Quantidade: ",t.Quantidade),u.a.createElement("p",null,"Valor: R$ ",t.Preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}))))}),document.getElementById("ProdutosCarrinho"),m.a.render(u.a.createElement("div",null,u.a.createElement("button",{type:"button",className:"button-primary"},"Finalizar Compra"),u.a.createElement("p",{className:"m-0"},"Total: R$ ",e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}))),document.getElementById("checkout")))}else m.a.render(u.a.createElement("div",{className:"carrinho-card"},u.a.createElement("div",{className:"carrinho-card-info"},u.a.createElement("h5",null,"Seu carrinho est\xe1 vazio"),u.a.createElement("p",null,"Adicione alguns produtos para finalizar sua compra"))),document.getElementById("ProdutosCarrinho"))}},{key:"render",value:function(){var e=this;return u.a.createElement("aside",{className:"p-relative carrinho-container"},u.a.createElement("a",{href:"#",className:"carrinho-btn-close",onClick:function(){return e.props.close()}},"X"),u.a.createElement("div",{id:"ProdutosCarrinho"}),u.a.createElement("div",{className:"carrinho-checkout",id:"checkout"}),u.a.createElement("small",{className:"mt-15 d-flex"},"voc\xea ser\xe1 redirecionado para um ambiente seguro"))}}]),t}(u.a.Component),h=a(34),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={sidebarOpen:!0,produto:{Nome:"Chocolate Amargo 75% 20g",Preco:4.8}},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e}),e||this.props.close("carrinho")}},{key:"render",value:function(){return u.a.createElement(h.a,{sidebar:u.a.createElement(p,{produtos:this.props.produtos,close:this.onSetSidebarOpen}),open:this.state.sidebarOpen,pullRight:!0,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"#fff",position:"fixed"}}})}}]),t}(u.a.Component);t.a=b},48:function(e,t,a){"use strict";var n=a(8),o=a(9),r=a(12),c=a(10),i=a(11),s=a(13),l=a(0),u=a.n(l),d=(a(33),a(49)),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={counter:1},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"minus",value:function(){this.state.counter>1&&this.setState({counter:this.state.counter-1})}},{key:"plus",value:function(){this.setState({counter:this.state.counter+1})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"counter"},u.a.createElement("div",{className:"counter-box counter-box-minus",onClick:function(){return e.minus()}}),u.a.createElement("div",{className:"counter-value",id:"counterValue"},this.state.counter),u.a.createElement("div",{className:"counter-box counter-box-plus",onClick:function(){return e.plus()}}))}}]),t}(u.a.Component),p=a(7),h=a.n(p),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={produtos:null},a.handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad())}},{key:"handleLoad",value:function(){h.a.render(u.a.createElement(d.Carousel,{id:"imagens",showThumbs:!1,showStatus:!1},this.props.produto.Imagens.map(function(e){return u.a.createElement("div",null,u.a.createElement("img",{src:e}))})),document.getElementById("imagens"))}},{key:"render",value:function(){var e=this;return u.a.createElement("aside",{className:"p-relative sidebar-container"},u.a.createElement("a",{href:"#",className:"sidebar-btn-close",onClick:function(){return e.props.close()}},"X"),u.a.createElement("div",{id:"imagens"}),u.a.createElement("div",{className:"sidebar-info"},u.a.createElement("h3",null,this.props.produto.Nome),u.a.createElement("small",null,"Ref: ",this.props.produto.Id),u.a.createElement("p",{className:"sidebar-info-desc"},this.props.produto.Descricao)),u.a.createElement(m,null),u.a.createElement("p",{className:"sidebar-price"},"R$ ",this.props.produto.Preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),u.a.createElement("button",{type:"button",className:"button-primary",onClick:function(){e.props.produto.Quantidade=Number(document.querySelector("#counterValue").textContent),e.props.addToCart(e.props.produto,!0)}},"Adicionar no Carrinho"))}}]),t}(u.a.Component),f=a(34),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={sidebarOpen:!0,produto:{Nome:e.produto.Nome,Preco:4.8}},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e}),e||this.props.close("sidebar")}},{key:"render",value:function(){return u.a.createElement(f.a,{sidebar:u.a.createElement(b,{produto:this.props.produto,addToCart:this.props.addToCart,close:this.onSetSidebarOpen}),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"#ffffffc2",position:"fixed"}}})}}]),t}(u.a.Component);t.a=E}}]);
//# sourceMappingURL=6.dd6db0af.chunk.js.map