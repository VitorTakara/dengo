import React from 'react';

import SidebarContent from "./sidebar_content.js";

import Sidebar from "react-sidebar";

class LeftSideModal extends React.Component {
   constructor(props) {
      super(props);
      console.log(this.props)
      this.state = {
        sidebarOpen: this.props.sidebarOpen,
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
          sidebar={<SidebarContent produto={ this.state.produto }></SidebarContent>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#ffffffc2" } }}
        >
        </Sidebar>
      );
    }
  }
export default LeftSideModal;