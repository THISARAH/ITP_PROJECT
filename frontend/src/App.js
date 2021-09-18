import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import NavBar from './components/NavBar';
import allCustomer from './components/allCustomer';
import createCustomer from './components/createCustomer';
import editCustomer from './components/editCustomer';
import viewCustomer from './components/viewCustomer';
import generateReport from './components/generateReport';
import customerDetails from './components/customerDetails';
import login from './components/login';
import createRequest from './components/createRequest';
import readRequest from './components/readRequest';


export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div className="container">
           <NavBar/>
           <Route path="/" exact component={HomeA}></Route>
           <Route path= "/allCustomer" exact component={allCustomer}></Route>
           <Route path= "/register" component={createCustomer}></Route>
           <Route path= "/edit/:id" component={editCustomer}></Route>
           <Route path= "/customer/:id" component={viewCustomer}></Route>
           <Route path= "/report" component={generateReport}></Route>
           <Route path= "/customerDetails" component={customerDetails}></Route>
           <Route path= "/login" component={login}></Route>
           <Route path= "/createRequest" component={createRequest}></Route>
           <Route path= "/readRequest" component={readRequest}></Route>
           
           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}
