import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui form">
                <div className="ui secondary menu">
                    <div className="left menu">
                        <a href="/" className="item" style={{textAlign: 'center'}}>A-to-Z</a>
                        <a href="/about" className="item" style={{textAlign: 'center'}}>About</a>
                    </div>
                    <div className="right menu">
                        <a href="/club" className="item">A-to-Z Club</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default Header;