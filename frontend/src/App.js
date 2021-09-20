 import React, { Component } from 'react';
 import {BrowserRouter,Route} from 'react-router-dom';
  
 import NavBar from './components/NavBar';
 import CreateEmployee from './components/CreateEmployee';
 import EditEmployee from './components/EditEmployee';
 import EmployeeDetails from './components/EmployeeDetails';
 import EmpHome from './components/EmpHome';
 import EmployeeReports from './components/EmployeeReports';
 import HomeA from './components/HomeA';
  

 export default class App extends Component{
  render() {
    return (
      
     
         <BrowserRouter>
           <div className="container">
           <NavBar/>
           <Route path="/Emp" exact component={EmpHome}></Route>
           <Route path="/addEmp" component={CreateEmployee}></Route>
           <Route path="/editEmp/:id" component={EditEmployee}></Route>
           <Route path="/employee/:id" component={EmployeeDetails}></Route>
           <Route path="/reportsEmp" component={EmployeeReports}></Route>
           <Route path="/HomeA" component={HomeA}></Route>
            

           </div>
         </BrowserRouter>
    
    )
  }
}
