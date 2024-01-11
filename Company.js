import React, { Component } from "react";

import logo1 from '../image/logo1.png';
import logo2 from '../image/logo2.png';
import logo3 from '../image/logo3.png';
import logo4 from '../image/logo4.png';
import logo5 from '../image/logo5.png';
import logo6 from '../image/logo6.svg';
import logo7 from '../image/logo7.png';


function Company() {
    return (
        <div className="companylogo">
            <img class="logo" src={logo1} alt="" />
            <img class="logo" src={logo2} alt="" />
            <img class="logo" src={logo3} alt="" />
            <img class="logo" src={logo4} alt="" />
            <img class="logo" src={logo5} alt="" />
            <img class="logo" src={logo6} alt="" />
            <img class="logo" src={logo7} alt="" />
        </div>
    )
}

export default Company;