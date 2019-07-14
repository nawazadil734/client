import React , { Component } from 'react';
import Header from './Header';
class SignUp extends Component {
    render() {
        return (
            <div>
                <Header /><br/>
                <div className="ui container">
                    <div className="ui container">
                        <form className="ui form">
                            <input placeholder="Full Name" type="text" className="ui item circular"/><br/><br/><br/>
                            <input placeholder="Email" type="email" className="ui item circular"/><br/><br/><br/>
                            <input placeholder="Password" type="password" className="ui item circular"/><br/><br/><br/>
                            <label>Password must be atleast 6 characters long.</label><br/><br/>
                            <button className="ui button circular purple">Sign Up</button><br/><br/>
                            Already have an account? <a href="/login">Login now ></a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default SignUp;