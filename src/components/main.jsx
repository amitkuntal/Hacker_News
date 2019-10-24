import React, { Component } from 'react';
import Header from './header';
import Stories from './stories';
import Comments from './comments';
import {BrowserRouter,Route} from 'react-router-dom';
class Main extends Component {
    state = {  }
    render() { 
        return (<BrowserRouter>
                <Route  path='/' component={Header}/>
                <Route exact path='/' component={Stories}/>
                <Route exact path='/comment/:itemid' render={props => <Comments {...props}/>} />
                </BrowserRouter>
                );
    }
}
 
export default Main;