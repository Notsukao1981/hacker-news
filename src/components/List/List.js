import React, {Component} from 'react';
import './List.css';

import Button from '../Button/Button';
import Line from './Line/Line';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || "Untitled",
            type: props.type || 0,
            items: []
        }
    }

    /* Loads story items by story type.
       If needed, further segregation byt item.type should be performed with an additional request.
    */
    getStoryItems() {
        const url = `https://hacker-news.firebaseio.com/v0/`;
        let type;
        switch (this.state.type) {
            case 1:
                type = "topstories";
                break;

            case 2:
                type = "beststories";
                break;

            default:
                type = "newstories";
        }
        fetch(`${url}/${type}.json?print=pretty`)
            .then(res => {
                res.json().then(
                    (data) => {
                        this.setState({items: data.slice(0, 5)});
                    }
                );
            }).catch(
                error => {
                    alert("Error! Fetch failed.");
                    console.error("[ERR] Fetch failed due:", error);
                    return false;
                }
            );
    }

    handleReload() {
        this.getStoryItems();
    }

    renderLine(i) {
        return <Line key={i} value={i} />;
    }

    renderLines() {
        const lines = this.state.items.map(
            (line) => {
                return this.renderLine(line);
            }
        );
        return (
            lines
        );
    }

    render() {
        return (
            <div className="App-list-container">
                <h4 className="App-list-title">Top 20 : {this.props.title || this.state.title} ({this.state.items.length})</h4>
                <div className="App-list-controls">
                    <Button onClick={() => this.handleReload()} />
                </div>
                <ul className="App-list">
                    {this.renderLines()}
                </ul>
            </div>
        );
    }
}

export default List;
