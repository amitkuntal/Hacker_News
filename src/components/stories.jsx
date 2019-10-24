import React,{Component} from 'react';
import Story from './story'

class Stories extends Component {

    state = { stories:[] }
    async componentDidMount(){
        let Datastories=  await fetch('./hn_data/stories.json')
        Datastories =  await Datastories.json()
       this.setState({stories:Datastories})
    }
    render() { 
        return (<div className='stories'>
                { !this.state.stories?<h1>Loading</h1>:(this.state.stories.map((story,index)=><Story story={story} index={index+1} key={story.item_id}/>))}
                
             </div> );
    }
}
 
export default Stories;