import React, { Component } from 'react'
import NavBarC from './NavBarCus'
import image1 from '../images/defaultBcg.jpeg'
import image2 from '../images/details-3.jpeg'
import image3 from '../images/room-1.jpeg'


export default class HomeA extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover' }}>
                <br/>
                <NavBarC/>

                <br/> <br/><br/><br/><br/>
                <div style={{fontSize: '50px', textAlign: 'center', color: 'black'}}>
                    Welcome to Hotel Paradise
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/>

            </div>
        )
    }
}