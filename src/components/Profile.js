import React , { Component } from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Profile extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div className="ui segment">
                    <div className="ui internally celled grid">
                        <div className="row">
                            <div className="three wide column">
                                <img alt="user" 
                                    src={this.props.auth ? this.props.auth.profilePhoto : user} 
                                    className="ui small circular image"
                                    style={{ width: "250px", height: "250px"}}
                                    />
                            </div>
                            <div className="nine wide column">
                            <h2>ADIL NAWAZ</h2>
                            <label><Link to="/user_credential">Add profile credential</Link></label><br/><br/>
                            <Link to="/settings " className="ui blue basic button">Edit Profile</Link>
                            </div>
                            <div className="four wide column">
                                <div>
                                    0 Posts -- 0 Discussions -- 6 Communities 
                                </div><br/><br/>
                                <div>
                                    <i className="map marker alternate icon"></i>
                                    <Link to="">Add a location credential</Link>
                                </div><br/>
                                <div>
                                    <i className="briefcase icon"></i>
                                    <Link to="">Add work credential</Link>
                                </div><br/>
                                <div>
                                    <i className="graduation cap icon"></i>
                                    <Link to="">Add education credential</Link>
                                </div><br/>
                                <div>
                                    <i className="eye icon"></i>
                                    <Link to="">No Post View<br/>No Discussions View</Link>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="three wide column">
                                <button className="ui blue basic button">Joined July 2019</button><br/><br/>
                                <button className="ui blue basic button">Followers 0</button><br/><br/>
                                <button className="ui blue basic button">Following 0</button><br/><br/>
                                <button className="ui blue basic button">Communities 6</button><br/><br/>
                            </div>
                            <div className="nine wide column">
                                <div className="ui pointing menu">
                                    <div className="item active">
                                        All Posts 0
                                    </div>
                                    <div className="item">
                                        Discussions 0
                                    </div>
                                    <div className="item">
                                        Followers 0
                                    </div>
                                    <div className="item">
                                        Following 0
                                    </div>
                                    </div>
                                    <div className="ui segment">
                                    <p></p>
                                    </div>
                                </div>
                            <div className="four wide column">
                                    <div className="ui segment">
                                    <label>Communities<Link to="/communities">See All</Link></label><br/><br/><hr/><br/>
                                        <div className="ui container">
                                            <img alt="comedy" src=""/>
                                            <Link to="/community/comedy">Comedy</Link><br/>
                                            103 Members
                                        </div><br/>
                                        <div className="ui container">
                                            <img alt="comedy" src=""/>
                                            <Link to="/community/comedy">Comedy</Link><br/>
                                            103 Members
                                        </div><br/>
                                        <div className="ui container">
                                            <img alt="comedy" src=""/>
                                            <Link to="/community/comedy">Comedy</Link><br/>
                                            103 Members
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions )(Profile);