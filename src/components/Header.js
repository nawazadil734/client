import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (

            <div className="ui menu">
                <a href="/" className="ui item">A-to-Z</a>
                <a href="/about" className="ui item">About</a>
                <a href="/club" className="ui item">A-to-Z Club</a>
            </div>
        );
    }
}


export default Header;