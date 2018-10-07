import React from 'react';
import Buttons from './Buttons.js'
import ReactDOM from 'react-dom'
import LeftSideModal from './../../sidebar/components/sidebar.js' 

class Loja extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      produto: this.props.produto
    }
  }

  setProduto = ( p ) => {
    console.log( p )
    ReactDOM.render(<LeftSideModal produto={this.p} openSideBar={this.openSideBar} />,document.getElementById("ProdutoSideBar"))
    // Aqui a gente chama o SideBar e coloca as infos do produto
  }

  openSideBar = (  ) => {
    alert( 'works' )
  }

  render() {
    return (
      <div className="loja-bg h-100">
      <div id="ProdutoSideBar"></div>
        <div className='black-screen'>
          <Buttons click={this.setProduto}/>
        </div>
      </div>
    );
  }
}
export default Loja;