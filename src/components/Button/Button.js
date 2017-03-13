import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button className="App-button" onClick={() => this.props.onClick()}>Reload</button>
        );
    }
}

export default Button;
