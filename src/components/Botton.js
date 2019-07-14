import React from 'react';
import { Link } from 'react-router-dom';
const Bottom = () => {
    return (
        <div className="ui menu">
            <Link to="/about" style={{ margin: '10px', textAlign: "center"}}>About Us</Link>
            <Link to="/discussions" style={{ margin: '10px', textAlign: "center"}}>Discussions</Link>
            <Link to="/club" style={{ margin: '10px', textAlign: "center"}}>A-to-Z Club</Link>
            <Link to="/communities" style={{ margin: '10px', textAlign: "center"}}>Communities</Link>
            Copyright @Adil_Nawaz
        </div>
    );
}

export default Bottom;