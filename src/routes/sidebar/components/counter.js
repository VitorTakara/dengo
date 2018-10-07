import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    minus() {
        if (this.state.counter > 0) 
            this.setState({
                counter: this.state.counter - 1
            });
        }
    
    plus() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div className="counter">
                <div className="counter-box counter-box-minus" onClick={() => this.minus()}></div>
                <div className="counter-value">{this.state.counter}</div>
                <div className="counter-box counter-box-plus" onClick={() => this.plus()}></div>
            </div>
        );
    }
}

export default Page;