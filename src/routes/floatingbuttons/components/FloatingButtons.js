import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuestionCircle, faBookOpen, faComments, faVolumeUp, faVolumeDown} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'

const BtnVolumeUp = () => (<FontAwesomeIcon icon={faVolumeUp}/>);

const BtnVolumeDown = () => (<FontAwesomeIcon icon={faVolumeDown}/>);

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Volume: false
        };
    }

   render() {
      return (
         <div className="floating-buttons bottom">
            <div className="buttons-left">
               <a href="#"><FontAwesomeIcon icon={faQuestionCircle} /></a>
               <a href="#" onClick={() => this.props.click()}><FontAwesomeIcon icon={faBookOpen} /></a>
            </div>
            <div className="buttons-right">
               <a href="#">PT</a>
               <a href="#"><FontAwesomeIcon icon={faComments} /></a>
               <a href="#" onClick={this.BtnMute} id="btnMute"><BtnVolumeDown /></a>
            </div>
        );
    }
}

export default Page;