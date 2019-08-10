import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
var style = {
    backgroundColor: "whitesmoke",  
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "101%",
}

var phantom = {
  display: 'block',
  padding: '10px',
  height: '25px',
  width: '100%',
}

// { backgroundColor:"orange", color: "white", height:"50px"}


class Bottom extends Component {
    render() {
        return (
            <div style={phantom}>
                <div className="ui secondary  menu" style={style}>
                        <Link to="/aboutus"className="item">About Us</Link>
                        <Link to="/discussion" className="item">Discussions</Link>
                        <Link to="/club" className="item">A-to-Z Club</Link>
                        <Link to="/communities" className="item">Communities</Link>
                    <div className="right menu">
                        <label className="item">Copyright @ YaRaAl</label>
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
export default connect(mapStateToProps)(Bottom);