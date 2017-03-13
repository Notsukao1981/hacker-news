import React, {Component} from 'react';
import './Line.css';

class Line extends Component {
    constructor() {
        super();
        this.state = {
            line: {},
            id: null
        };
    }

    componentDidMount() {
        this.handleUpdate(this.props.value);
    }

    handleUpdate(item) {
        const url = `https://hacker-news.firebaseio.com/v0/item/`;
        if (item) {
            fetch(`${url}/${item}.json?print=pretty`)
                .then(res=> {
                    res.json().then(
                        data => {
                            this.setState({line: data});
                        }
                    );
                });
        }
    }

    /* Update line contents whenever item's id changes from the parent List component. */
    componentWillReceiveProps(props) {
        this.handleUpdate(props.value);
    }

    render() {
        const date = new Date(this.state.line.time);
        return (
            <li className="App-line">
                <div className="App-line-date">{date ? date.toDateString() : 'Soon!'}</div>
                <div className="App-line-title">
                    <span className="App-line-score">{this.state.line.score ? this.state.line.score : '?'}</span>
                    <a className="App-line-link" href={this.state.line.url ? this.state.line.url : "#"}>{this.state.line.title}&nbsp;({this.state.line.kids ? this.state.line.kids.length : 0})</a>
                </div>
                <div className="App-line-author">&nbsp;by&nbsp;{this.state.line.by}</div>
            </li>
        );
    }
}

export default Line;
