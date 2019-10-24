import React, { Component } from 'react';
import Comment from './comment'
class Comments extends Component {
    
    
      handleChange=(event)=> {
        this.setState({value: event.target.value});
      }

    state = { itemId:this.props.match.params.itemid,
                storyTitle:null,
                comments:Array
            }
    async componentDidMount(){
        let Datastories=  await fetch('./../hn_data/stories.json')
        Datastories =  await Datastories.json()
        let DataStory = Datastories.filter((story)=>story.item_id === parseInt(this.state.itemId))
        let storyComments = await fetch(`./../hn_data/${this.state.itemId}.json`)
        storyComments = await storyComments.json()
        this.setState({storyTitle:DataStory[0].title,comments:storyComments})
        
    }
    addComment =(event)=>{
        console.log(event.target.value)
        let comment={
            "item_id":Math.floor((Math.random() * 99999) + 1),
            "text" :this.state.value,
            "by" :"dbhdsbhsb"
        }
        let comments = this.state.comments;
        comments.push(comment)
        this.setState({comments:comments})
        this.setState({value:""})
        event.preventDefault();
    }
    render() { 
        return ( <div className='story-text'>
             { !this.state.storyTitle?<h1>Loading</h1>:
                <React.Fragment>
                    <h2 >{this.state.storyTitle}</h2><hr/>
                    {this.state.comments.map((comment,index)=><Comment index={index+1} data={comment} key={comment.item_id}/>)}
                    <form onSubmit={this.addComment}>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                        <input type='submit' name='submit'value='Add Comment'/>    
                    </form>
                </React.Fragment>
                
                }
            </div> );
    }
}
 
export default Comments;