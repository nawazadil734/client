import React, { Component } from 'react';
import Header from './Header';

class Login extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="ui container">
                    <form className="ui form">
                    Login to A-to-Z<br/>
                    <input type="input" placeholder="Email" className="ui card circular"/><br/>
                    <input type="input" placeholder="Password" className="ui card circular"/><br/>
                    <button className="ui button circular">Login</button><br/>
                    <a href="/forgot" className="ui circular button">Forgot Passward?</a><br/>  
                    New to A-to-Z?<br/>
                    <div className="purple text-white"><a href="/signup" className="ui button right circular purple">Sign Up Now ></a></div>
                    </form>
                </div>

            </div>
        );
    }
}


export default Login;