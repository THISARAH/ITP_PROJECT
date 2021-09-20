  
import React, { Component } from 'react'
import NavBar from './NavBar'
import image4 from '../images/backg1.jpg'

export default class HomeA extends Component {
    render() {
        return ( 
            <div className = "container">
            <NavBar/>
            <div className="container-fluid" style={{backgroundImage: `url(${image4})`, backgroundSize: 'cover' }}>
                <br/>
                

                <br/><br/><br/><br/>
                <div style={{fontSize: '50px', textAlign: 'center', color: 'black'}}>
                    Welcome to Hotel Paradise<br/>
                    Management
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            </div>
            </div>
        )
    }
}