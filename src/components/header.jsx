import React, { Component } from 'react';
import './../css/style.css'
class header extends Component {
    state = { title:"Hacker News" }
    render() { 
        return ( <div className="header">
                <h4 className="title">{this.state.title}</h4>
                </div>);
    }
}
 
export default header;