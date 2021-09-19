import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import NavBar from './components/NavBar';
import CreateRes from './components/CreateRes';
import EditRes from './components/EditRes';
import ResDetails from './components/ResDetails';
import ViewRes from './components/ViewRes';
import HomeRes from './components/HomeRes';

export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
          <div className="container">
          <NavBar/> 
          <Route path="/" exact component={HomeA}></Route>
          <Route path="/addRes" exact component={CreateRes}></Route>
          <Route path="/editRes/:id" exact component={EditRes}></Route>
          <Route path="/Reserpost/:id" exact component={ResDetails}></Route>        
          <Route path="/vposts" exact component={ViewRes}></Route>
          <Route path="/hres" exact component={HomeRes}></Route>
          
           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}