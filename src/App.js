import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List/List';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React-ive Hacker-News RSS sneak-peak Feed</h2>
                </div>
                <div className="App-wrapper">
                    <List title="New story items" type={0} />
                    <List title="Top story items" type={1} />
                    <List title="Best story items" type={2} />
                </div>
            </div>
        );
    }
}

export default App;
