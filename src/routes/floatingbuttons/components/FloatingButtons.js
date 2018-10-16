import React from 'react';
import ReactDOM from 'react-dom'
import questionCircle from './../../../images/question-circle.svg';
import chat from './../../../images/chat-icon.svg';
import book from './../../../images/open-book.svg';
import volUp from './../../../images/volUp.svg';
import volDown from './../../../images/volDown.svg';

const BtnVolumeUp = () => (<img src={volUp} className="icone"/>);

const BtnVolumeDown = () => (<img src={volDown} className="icone"/>);

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
                    <span href="#" onClick={() => this.props.click()}><img src={book} className="icone"/></span>
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