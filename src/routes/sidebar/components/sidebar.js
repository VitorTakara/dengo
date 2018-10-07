import React from 'react';

import SidebarContent from "./sidebar_content.js";

import Sidebar from "react-sidebar";

class LeftSideModal extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        sidebarOpen: true,
        produto: {
          Nome: props.produto.Nome,
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
          sidebar={<SidebarContent produto={ this.props.produto }></SidebarContent>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#ffffffc2", position: "fixed" } }}
        >
        </Sidebar>
      );
    }
  }
export default LeftSideModal;