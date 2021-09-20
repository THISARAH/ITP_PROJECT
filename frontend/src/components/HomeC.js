import React, { Component } from 'react'
import NavBarC from './NavBarCus'
import image1 from '../images/defaultBcg.jpeg'
import image2 from '../images/details-3.jpeg'
import image3 from '../images/room-1.jpeg'

export default class HomeA extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: `url(${image1}`, backgroundSize: 'cover' }}>
                <br/>
                <NavBarC/>
                <div>
                    <h1 style={{textAlign: 'center'}}>Welcome to Hotel Paradise</h1>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/>


            </div>
        )
    }
}