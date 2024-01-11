import mainlogo from '../image/mainlogo.png';
import React, { Component } from "react";


export class Nav extends Component {
    render() {
        return (
            <nav>
                <img src={mainlogo} alt="company logo" className="responsive-image" />
                <input type="checkbox" id="click"></input>
                <label for="click" className='menu-btn'>
                    <i className="fas fa-bars">

                    </i>
                </label>
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><button id="btn1">SignUp</button>
                        <button id="btn2">SignIn</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav