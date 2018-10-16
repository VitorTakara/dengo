import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookOpen, faComments, faVolumeUp, faVolumeDown} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import questionCircle from './../../../images/question-circle.svg';
import chat from './../../../images/chat.svg';

const BtnVolumeUp = () => (<FontAwesomeIcon icon={faVolumeUp}/>);

const BtnVolumeDown = () => (<FontAwesomeIcon icon={faVolumeDown}/>);

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Volume: false
        };
    }

    BtnMute = (e) => {
        if (!this.state.Volume) {
            ReactDOM.render(
                <BtnVolumeUp/>, document.getElementById("btnMute"));
        } else {
            ReactDOM.render(
                <BtnVolumeDown/>, document.getElementById("btnMute"));
        }
        this.setState({
            Volume: !this.state.Volume
        });
    };

    render() {
        return (
            <div className="floating-buttons bottom">
                <div className="buttons-left">
                    <span><img src={questionCircle} className="icone"/></span>
                    <span href="#" onClick={() => this.props.click()}><FontAwesomeIcon icon={faBookOpen}/></span>
                </div>
                <div className="buttons-right">
                    <span>PT</span>
                    <span><img src={chat} className="icone"/></span>
                    <span onClick={this.BtnMute} id="btnMute"><BtnVolumeDown/></span>
                </div>
            </div>
        );
    }
}

export default Page;