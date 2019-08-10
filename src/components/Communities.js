import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
class Communities extends Component {

    componentDidMount() {
        this.props.fetchCommunities();
    }

    renderArt_Entertainment = () => {
       return (
           _.map(_.filter(this.props.community, function(comp) {
            return comp.group === 'Art & Entertainment'
                    }), function(com) {
               return (
                        <div className="ui card" key={com.title} style={{ margin: "15px 18px" , width: "21%", boxShadow: "10px 10px 1px #9E9E9E"}}>
                            <Link to={`/communities/${com.title}`} key={com.title} className="ui secondary basic button"><h2>{com.title}</h2></Link>
                            
                            <img src={com.img} alt={com.title} style={{width: "242px", height: "200px"}}/>
                            <button className="ui blue basic button">
                                Join
                            </button>
                        </div>
                    )
           })
       );
    }

    renderIndustry_Work = () => {
        return (
            _.map(_.filter(this.props.community, function(comp) {
             return comp.group === 'Industry & Work'
                     }), function(com) {
                return (
                         <div className="ui card" key={com.title} style={{ margin: "15px 18px" , width: "21%", boxShadow: "10px 10px 1px #9E9E9E"}}>
                            <Link to={`/communities/${com.title}`} key={com.title} className="ui secondary basic button"><h2>{com.title}</h2></Link>
                            <img src={com.img} alt={com.title} style={{width: "240px", height: "200px"}}/>
                            <button className="ui blue basic button">Join</button>
                         </div>
                     )
            })
        );
     }

    renderInnovation_Tech = () => {
        return (
            _.map(_.filter(this.props.community, function(comp) {
             return comp.group === 'Innovation & Tech'
                     }), function(com) {
                return (
                         <div key={com.title} className="ui card" style={{ margin: "15px 18px" , width: "21%", boxShadow: "10px 10px 1px #9E9E9E"}}>
                            <Link to={`/communities/${com.title}`} key={com.title} className="ui secondary basic button"><h2>{com.title}</h2></Link>
                            <img src={com.img} alt={com.title} style={{width: "240px", height: "200px"}}/>
                            <button className="ui blue basic button">Join</button>
                         </div>
                     )
            })
        );
     }

     renderLife= () => {
        return (
            _.map(_.filter(this.props.community, function(comp) {
             return comp.group === 'Life'
                     }), function(com) {
                return (
                         <div key={com.title} className="ui card" style={{ margin: "15px 18px" , width: "21%", boxShadow: "10px 10px 1px #9E9E9E"}}>
                            <Link to={`/communities/${com.title}`} key={com.title} className="ui secondary basic button"><h2>{com.title}</h2></Link>
                            <img src={com.img} alt={com.title} style={{width: "240px", height: "200px"}}/>
                            <button className="ui blue basic button">Join</button>
                         </div>
                     )
            })
        );
     }


     renderSociety_People = () => {
        return (
            _.map(_.filter(this.props.community, function(comp) {
             return comp.group === 'Society & People'
                     }), function(com) {
                return (
                         <div key={com.title} className="ui card" style={{ margin: "15px 18px" , width: "21%", boxShadow: "10px 10px 1px #9E9E9E"}}>
                            <Link to={`/communities/${com.title}`} key={com.title} className="ui secondary basic button"><h2>{com.title}</h2></Link>
                            <img src={com.img} alt={com.title} style={{width: "240px", height: "200px"}}/>
                            <button className="ui blue basic button">Join</button>
                         </div>
                     )
            })
        );
     }


    render() { 
        return (
            <div 
                >
            <div className="ui container">
                    <br/><label className="ui red ribbon label">Arts & Entertainment</label><br/><br/>
                        <div className="ui four cards">
                            {this.renderArt_Entertainment() }
                        </div>
                    <br/><label className="ui red ribbon label">Industry & Work</label><br/><br/>
                    <div className="ui four cards">
                        {this.renderIndustry_Work() }
                    </div>
                    <br/><label className="ui red ribbon label">Innovation & Tech</label><br/><br/>
                    <div className="ui four cards">
                        {this.renderInnovation_Tech() }
                    </div>
                    <br/><label className="ui red ribbon label">Life</label><br/><br/>
                    <div className="ui four cards">
                        {this.renderLife() }
                    </div>
                    <br/><label className="ui red ribbon label">Socail & Life</label><br/><br/>
                    <div className="ui four cards">
                        {this.renderSociety_People() }
                    </div>
                    <br/><br/>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        community: state.community
    }
}

export default connect(mapStateToProps, actions)(Communities);
