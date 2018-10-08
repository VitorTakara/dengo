import React from 'react';
import SidebarContent from "./carrinho_content.js";
import Sidebar from "react-sidebar";

class Carrinho extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
        sidebarOpen: true,
        produto: {
          Nome: "Chocolate Amargo 75% 20g",
          Preco: 4.8
        }
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
        <Sidebar
          sidebar={<SidebarContent produtos={ this.props.produtos } close={this.props.close}></SidebarContent>}
          open={this.state.sidebarOpen}
          pullRight={true} 
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#fff" } }}
        >
        </Sidebar>
      );
    }
  }
export default Carrinho;