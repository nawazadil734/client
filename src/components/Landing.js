import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class DashBoard extends Component {
    render() {
        return (
            <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui inverted yellow circular button" style={{textAlign: 'center', backgroundColor:"teal"}}>A - 2 - Z</div> <br/>
                            <i className="circular users icon"></i>A social content platform<br/>
                            <i className="circular users icon"></i>Join your communities<br/>
                            <i className="circular users icon"></i>Discuss in your communities<br/>
                        </div>
                        <div className="column">
                            <div style={{ alignSelf: "center"}}>
                                <div>
                                    <h1 style={{ fontSize:"4vw", fontStyle:"oblique", alignContent:"left"}}>A-to-Z</h1>
                                    <Link to="/login" className="ui button circular purple">Login</Link>
                                </div>
                                <div style={{ textAlign: 'center'}}>
                                <p >A place to talk and have </p>
                                <p>community-based discussions </p>    
                                <p>with like-minded people.</p>
                                <p >A place to talk and have </p>
                                <p>community-based discussions </p>    
                                <p>with like-minded people.</p>
                                <br/>
                                </div>
                                
                                <div className="ui tag labels" style={{ alignSelf: "center"}}>	
                                <div className="ui inverted yellow label" style={{ alignContent: "center"}}>Join A-to-Z today.</div>
                                </div>
                                <div className="ui google plus button"><i className="google icon"></i><a href="/auth/google" style={{ color:"white"}}>Sign in with Google</a></div><br/>
                                <div className="ui facebook button"><i className="facebook icon"></i><a href="/auth/facebook" style={{ color:"white"}}>Sign in with Facebook</a></div><br/>
                                <div className="ui linkedin button"><i className="linkedin icon"></i><a href="/auth/linkedin" style={{ color:"white"}}>Sign in with LinkedIn</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                    </div>
                    
                </div>
        );
    }
}

export default DashBoard;