import React, { Component } from 'react'
import NavBar from './NavBar'

export default class HomeA extends Component {
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div>
                    <h1>Home</h1>
                </div>
            </div>
        )
    }
}