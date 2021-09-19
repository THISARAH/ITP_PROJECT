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

// finance
import BasicSalary from './components/finance/BasicSalary';
import EditBasicSalary from './components/finance/EditBasicSalary';
import CreateBasicSalary from './components/finance/CreateBasicSalary';
import IncomeExpenditure from './components/finance/IncomeExpenditure';
import EditIncomeExpenditure from './components/finance/EditIncomeExpenditure';
import CreateIncomeExpenditure from './components/finance/CreateIncomeExpenditure';

//services - sudaraka
import CreateService from './components/CreateService';
import EditService from './components/EditService';
import ServiceDetails from './components/ServiceDetails';
import AllServices from './components/AllServices';


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
           
           {/* Finance */}
           <Route path="/finance/basicsalary" exact component={BasicSalary}></Route>
           <Route path="/finance/basicsalary/update/:id" exact component={EditBasicSalary}></Route>
           <Route path="/finance/basicsalary/create" exact component={CreateBasicSalary}></Route>
           <Route path="/finance/incomeexpenditure" exact component={IncomeExpenditure}></Route>
           <Route path="/finance/incomeexpenditure/update/:id" exact component={EditIncomeExpenditure}></Route>
           <Route path="/finance/incomeexpenditure/create" exact component={CreateIncomeExpenditure}></Route>

           {/* Services */}
           <Route path="/AllServices" exact component={AllServices}></Route>
           <Route path="/addr" component={CreateService}></Route>
           <Route path="/editr/:id" component={EditService}></Route>
           <Route path="/service/:id" component={ServiceDetails}></Route>

           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}
