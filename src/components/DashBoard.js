import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCommunities, fetchUser } from '../actions/index';
import _ from 'lodash';
import history from '../history';
class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchCommunities();
    }

    renderCommunityList() {
        return (
            _.map(this.props.community, function(list) {
                if(list.group === 'Industry & Work') {
                return (
                    <div key={list.title}>
                        <div className="ui basic blue button" style={{ width: "270px", height: "50px"}}>
                            <div className="ui secondary pointing menu">
                                <img className="ui avatar image" src={list.img} alt={list.title}/>
                                <span><Link to={`/communities/${list.title}`}><b> {list.title}</b></Link></span>
                                <div className="right menu">
                                <label style={{ color:"black"}}>{list.member} Members</label>
                                </div>
                            </div>
                        </div><br/><br/>
                        </div>
                );
                }
            })
        
            
        );
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="ui segment">
                            <div className="ui secondary pointing menu">
                                    <label><b>Communities</b></label>
                                    <div className="right menu">
                                        <Link to="/communities" className="ui green basic button" style={{ height: "35px"}}>See All</Link>
                                    </div>
                            </div>
                            {this.renderCommunityList()}
                        </div>
                    </div>
                    
                    <div className="ui eight wide column segment">
                        
                            <div className="four column centered row">
                                
                                <div className="ui basic black circular button" style={{ width: "650px", height: "65px"}} onClick={ () => history.push("/createPost")}>
                                    <img className="ui mini circular image" src={this.props.auth ? this.props.auth.profilePhoto: ""} alt="dp"/>
                                    <Link to="/createPost" style={{ position: "absolute", top: "40px", left: "110px"}}><h1>Create a Post</h1></Link>
                                </div>
                                
                            </div>


                        <div className="ui segment">
                            <div className="column">
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                            </div>   
                        </div>
                        <div className="ui segment">
                            <div className="column">
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                                <p>Synchronous: A synchronous request blocks the client until operation completes. 
                                    In such case, javascript engine of the browser is blocked.
                                </p>
                                <p>Asynchronous An asynchronous request doesn’t block the client i.e. 
                                    browser is responsive. At that time, user can perform another operations also. 
                                    In such case, javascript engine of the browser is not blocked.
                                </p>
                            </div>   
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui segment">
                                <label>Trending Coummunities</label><hr/><br/>
                                
                                    <div className="ui grid">
                                        <div className="eight wide column">
                                            <div className="ui container">
                                                <img alt="comedy" src=""/>
                                                <Link to="/communities/comedy">Comedy</Link><br/>
                                                103 Members
                                            </div>
                                        </div>
                                        <div className="eight wide column">
                                            <button className="ui circular button">Join</button>
                                        </div>
                                    </div>
                                <br/>

                                
                                    <div className="ui grid">
                                        <div className="eight wide column">
                                            <div className="ui container">
                                                <img alt="comedy" src=""/>
                                                <Link to="/communities/comedy">Comedy</Link><br/>
                                                103 Members
                                            </div>
                                        </div>
                                        <div className="eight wide column">
                                            <button className="ui circular button">Join</button>    
                                        </div>
                                    </div>
                                <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        community: state.community,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { fetchCommunities, fetchUser } )(Dashboard);