import React, { Component } from 'react';
class Comment extends Component {
    state = { 
            }
    render() { 
        return (<div className='comment' key={this.props.data.item_id}>
                <p className='comment-serial'>{this.props.index}</p>
                <p className='comment-text'>{this.props.data.text}</p>
        </div>);
    }
}
 
export default Comment;