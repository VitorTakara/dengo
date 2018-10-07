import React from 'react';

import sidebarContent from "./sidebar_content.js";

import Sidebar from "react-sidebar";

var sectionStyle = {
  backgroundImage: "url(https://i.imgur.com/APIEeGT.jpg)"
};

class LeftSideModal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: true,
        sidebarContent: sidebarContent()
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
         <div className="w-100 h-100" style={ sectionStyle }>
        <Sidebar
          sidebar={this.state.sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#ffffffc2" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
        </div>
      );
    }
  }
export default LeftSideModal;