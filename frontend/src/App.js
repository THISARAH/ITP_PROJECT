import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div className="container">
           <NavBar/>
           <Route path="/" exact component={HomeA}></Route>
           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}
