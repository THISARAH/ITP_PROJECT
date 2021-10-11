<<<<<<< Updated upstream
=======
//in here we implement our routing side 
>>>>>>> Stashed changes

import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import NavBar from './components/NavBar';

//reservation
import CreateRes from './components/CreateRes';
import EditRes from './components/EditRes';
import ResDetails from './components/ResDetails';
import ViewRes from './components/ViewRes';
import HomeRes from './components/HomeRes';
import Cards from './components/ThisaraClient/Cards.jsx';


//customer
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


export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div className="container">
           <NavBar/>
           <Route path="/" exact component={HomeA}></Route>   

          {/* Reservation */}
          <Route path="/addRes" exact component={CreateRes}></Route>
          <Route path="/editRes/:id" exact component={EditRes}></Route>
          <Route path="/Reserpost/:id" exact component={ResDetails}></Route>        
          <Route path="/vposts" exact component={ViewRes}></Route>
          <Route path="/hres" exact component={HomeRes}></Route>
          <Route path="/reservationClient" exact component={Cards}></Route>

          
          
           {/*Customer*/}
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


           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}