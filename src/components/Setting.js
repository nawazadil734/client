import React , { Component } from 'react';
import { connect } from 'react-redux';
import user from '../images/user.png';
// import Modal from './modal';
class Setting extends Component {
    render() {
        return(
            <div className="ui segment">
            <div className="ui placeholder segment"  style={{ margin: "0% 5%"}}>
                <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui card" style={{margin: "3% 25%"}}>
                                <img alt="user" 
                                    src={this.props.auth ? this.props.auth.profilePhoto : user} 
                                        className="ui small circular image"
                                        style={{margin: "2% 20%", width: "60%"}}
                                    />
                                <input type="file" onChange="fileEvent($event)" className="ui button circular inputfile" id="embedpollfileinput"  style={{margin: "3% 15%"}}/>
                                <button className="ui green basic button"  style={{margin: "3% 15%"}}>Upload Photo</button>
                            </div>
                            <br/>
                                <form className="ui form">
                                    <input value={this.props.auth ? this.props.auth.firstName + " " + this.props.auth.lastName : 'username'} type="text" placeholder="Name" className="ui item circular"/><br/><br/>
                                    <input placeholder="website" type="text" className="ui item circular"/><br/><br/>
                                    <button className="ui blue basic button" style={{margin: "3% 0%"}}>Save</button>
                                </form>         
                        </div>
                    <div className="column" >
                        <div className="ui segemnt">
                            <form className="ui form">
                                <label><h3>Your Bio</h3></label>
                                <p><h4><i>Tell people something about yourself.</i></h4></p>
                                <input type="text" placeholder="Your bio"/>
                                <button class="ui blue basic button" style={{margin: "3% 0%"}}>Save</button>
                            </form>
                            <hr/><br/>
                            <label><h3>Email address</h3></label><br/>
                            <p><i>We will never share your email address or display it publicly.</i></p>
                            <label><b>{this.props.auth ? this.props.auth.email : 'Loading' } </b>
                                <div className="ui label" style={{ backgroundColor: "aqua"}}>
                                    verified
                                </div>
                            </label>
                            <hr/><br/>
                            <label><h3>Password Setting</h3></label><br/>
                            <p><i>If you signed up for A-2-Z using Facebook or Google, </i><a href="/password">create account password</a>.</p>
                            
                                <div className="ui form">
                                    <div>
                                        <label><b>Current Password</b></label><br/><br/>
                                        <input type="password" placeholder="Current PassWord"/><br/><br/>
                                        <label><b>New Password</b></label><br/><br/>
                                        <input type="password" placeholder="New Password"/><br/><br/>
                                        <label><b>Confirm Password</b></label><br/><br/>
                                        <input type="password" placeholder="Confirm Password"/><br/>
                                        <button className="ui blue basic button" style={{margin: "3% 0%"}}>Save</button>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="ui vertical divider"></div>
        </div>
        {/* <Modal/> */}
        </div>
    );
}};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Setting);