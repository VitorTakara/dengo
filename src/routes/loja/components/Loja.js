import React from 'react';
import {ProdutoSidebar} from './../../sidebar/index.js' 
import Buttons from './Buttons.js'

class Loja extends React.Component {
  constructor(props) {
    super(props);
  }

  onSetSidebarOpen(open) {
    alert()
  }

  render() {
    return (
      <div className="loja-bg h-100">
        <div className='black-screen'>
          <Buttons />
        </div>
      </div>
    );
  }
}
export default Loja;