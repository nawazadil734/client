import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return "Waiting";
            case false:
                       return (
                                <div className="ui secondary  menu" style={{ backgroundColor:"orange", color: "white", height:"50px"}}>
                                    <Link to="/" className="item">A-2-Z</Link>
                                    <div className="item">
                                            <div className="ui icon input">
                                                <input type="text" placeholder="Search..."/>
                                                <i className="search link icon"></i>
                                            </div>
                                        </div>
                                    <div className="right menu">
                                        
                                        <Link to="/login" className="item">Login</Link>
                                        <Link to="/discussion" className="item"><i className="comment alternate icon"></i>Discussions</Link>
                                    </div>
                                </div>      
                        );
            default:
                    return (
                                <div className="ui secondary  menu" style={{ backgroundColor:"orange", color: "white", height:"50px"}}>
                                        <Link to="/" className="active item">A-2-Z</Link>
                                    <div className="item">
                                            <div className="ui icon input">
                                                <input type="text" placeholder="Search A-2-Z"/>
                                                <i className="search link icon"></i>
                                            </div>
                                    </div>
                                    <div className="right menu">
                                            <label className="ui simple dropdown item">
                                                <label className="item"><i className="user icon"></i>{this.props.auth.firstName}</label>
                                                    <div className="menu">
                                                        <h3><Link to="/profile"className="header">{this.props.auth.firstName} {this.props.auth.lastName}</Link></h3><hr/>
                                                        <Link to="/profile" className="item">Profile</Link>
                                                        <Link to="communities" className="item">Communities</Link>
                                                        <Link to="/saved" className="item">Saved</Link><hr/>
                                                        <Link to="/settings" className="item" >Settings</Link>
                                                        <a href="/api/logout" className="item">Logout</a><hr/>
                                                        <Link to="/aboutus" className="item" >About Us</Link>
                                                        <Link to="/club" className="item" >A-2-Z Club</Link>
                                                    </div>
                                            </label>
                                            <Link to="dashboard" className="item"><i className="home icon"></i>Home</Link>
                                            <Link to="discussion" className="item"><i className="comment alternate icon"></i>Discussions</Link>
                                            <Link to="/notification" className="item"><i className="bell icon"></i>Notifications</Link>
                                    </div>
                                </div>     
                            );
        }
    }
    
    render() {
        return (
            <div>
                    {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header);