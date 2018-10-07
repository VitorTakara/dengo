import React from 'react';
import {ProdutoSidebar} from './../../sidebar/index.js' 
import Buttons from './Buttons.js'

class Loja extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produto: ''
    }
  }

  setProduto = ( produto ) => {
    console.log( produto )
    this.setState({ produto });
    // Aqui a gente chama o SideBar e coloca as infos do produto
  }

  render() {
    return (
      <div className="loja-bg h-100">
        <div className='black-screen'>
          <Buttons click={this.setProduto}/>
        </div>
      </div>
    );
  }
}
export default Loja;