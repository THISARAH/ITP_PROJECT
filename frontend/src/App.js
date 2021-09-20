import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import HomeC from './components/HomeC';
// import NavBar from './components/NavBar';
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
           {/* <NavBar/> */}
           <Route path="/" exact component={HomeA}></Route>
           {/* Finance */}
           <Route path="/finance/basicsalary" exact component={BasicSalary}></Route>
           <Route path="/finance/basicsalary/update/:id" exact component={EditBasicSalary}></Route>
           <Route path="/finance/basicsalary/create" exact component={CreateBasicSalary}></Route>
           <Route path="/finance/incomeexpenditure" exact component={IncomeExpenditure}></Route>
           <Route path="/finance/incomeexpenditure/update/:id" exact component={EditIncomeExpenditure}></Route>
           <Route path="/finance/incomeexpenditure/create" exact component={CreateIncomeExpenditure}></Route>
           <Route path="/Home" exact component={HomeC}></Route>
           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}
