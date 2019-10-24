import React,{Component} from 'react';

class Story extends Component {
    state={
        upvote:this.props.story.score,
    }
    incrementScore = ()=>{
       this.setState({upvote:this.state.upvote+1})
    }
    decrementScore = ()=>{
        this.setState({upvote:this.state.upvote-1})
    }
    render() { 
        return (<div className='story' key={this.props.story.item_id}>
               <p className='story-serial'>{this.props.index}</p>
               <div className='votingButtons'>
                   <button className='up-vote' onClick={this.incrementScore}>^</button>
                   <button className='down-vote' onClick={this.decrementScore}>v</button>
               </div>
               <div className='votingCounts'>
               <p className='up-vote-count'>{this.state.upvote}</p>
               </div>
                <a className='story-title' href={'comment/'+this.props.story.item_id}>{this.props.story.title}</a>
             </div> );
    }
}
 
export default Story;