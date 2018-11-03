import React, { Component } from 'react'
import './navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li className="active"><a href="sass.html">Home</a></li>
                                <li ><a href="badges.html">New Question</a></li>
                                <li><a href="collapsible.html">Leader Board</a></li>
                            </ul>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><p className="user-name">Hello, Shriram</p></li>
                                <li><a href="badges.html">Logout</a></li>
                            </ul>   
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar