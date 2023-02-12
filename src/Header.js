import React, { Component } from "react";
import './Header.css'

const Header = function () {
    const headerstyle={
        textAlign:'center',
        padding:20,
        background:'#000',
        color:'#fff',
        textTransform:'uppercase'
    };
    return (

        < div style={headerstyle} >
            Phone directory
        </div >
    )
}

export default Header;