import React, { Component } from 'react';

class DashBoard extends Component {
    render() {
        return (
            <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column ">
                            <div className="ui button yellow">A-to-Z</div> <br/>
                            <i class="circular users icon"></i>A social content platform<br/>
                            <i class="circular users icon"></i>Join your communities<br/>
                            <i class="circular users icon"></i>Discuss in your communities<br/>

                        </div>
                        <div className="column">
                            <div className="ui item active">A-to-Z</div> 
                            <a className="ui button right circular purple" href="/login">Login</a>
                            A place to talk and have <br/>community-based discussions <br/>with like-minded people.<br/>
                            Join A-to-Z today.<br/><br/><br/>
                            <button className="ui button blue"><i className="facebook square icon"></i>Continue with facebook</button><br/>
                            <button className="ui button red"><i className="google icon"></i>Continue with Google</button><br/>
                            <button className="ui button grey"><i className="envelope outline icon"></i>Continue with Email</button>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                    </div>
                </div>
        );
    }
}

export default DashBoard;