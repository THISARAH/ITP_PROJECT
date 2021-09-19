import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeRestaurant from './components/HomeRestaurant';
import NavBar from './components/NavBar';
import RestCreatePost from './components/RestCreatePost';
import RestEditPost from './components/RestEditPost';
import RestPostDetails from './components/RestPostDetails';
 
export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div className="container">
           <NavBar/>

        <Route path="/HomeRestaurant" exact component={HomeRestaurant}></Route>
        <Route path="/Restaurantadd" exact component={RestCreatePost}></Route>
        <Route path="/Restaurantedit/:id" exact component={RestEditPost}></Route>
        <Route path="/Restaurantpost/:id" exact component={RestPostDetails}></Route>
           </div>

         </BrowserRouter>
        
      </div>  
    )
  }
}
