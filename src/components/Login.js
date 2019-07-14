import React, { Component } from 'react';
import Header from './Header';

class Login extends Component {
    render() {
        return(
            <div className="ui container">
                <Header/>
                <div className="ui container">
                    Login to A-to-Z<br/>
                    <input type="input" placeholder="Email"/>
                    <input type="input" placeholder="Password"/>
                    <button className="ui button circular">Login</button>
                    <div><a href="/forgot">Forgot Passward?</a></div>
                    New to A-to-Z?<br/>
                    <div className="purple text-white"><a href="/signup">Sign Up Now ></a></div>
                </div>

            </div>
        );
    }
}


export default Login;