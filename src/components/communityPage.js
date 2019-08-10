import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommunity, fetchCommunities } from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';
class CommunityPage extends Component {

    componentDidMount = async () => {
        await this.props.fetchCommunities();
        await this.props.fetchCommunity();
    }

    renderCommunityList (value) {
        return (
            _.map(this.props.community, function(list) {
                if(list.group === value) {
                return (
                    <div key={list.title}>
                        <div className="ui basic blue button" style={{ width: "280px", height: "50px"}}>
                            <div className="ui secondary pointing menu">
                                <img className="ui avatar image" src={list.img} alt={list.title}/>
                                <span><a href={`/communities/${list.title}`}><b> {list.title}</b></a></span>
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
        console.log(this.props.com);
        return (
            <div>
                <div>
                    <img src="https://alnt.s3.ap-south-1.amazonaws.com/Background/Creative+Backgound.jpg"
                    alt="banner"
                    style={{ height: "160px", width: "1400px", position: "relative"}}
                    />
                    <img className="ui small circular image" 
                        src={this.props.com ? this.props.com.img: ''}
                        alt="logo"
                        style={{ position:"absolute", top: "80px", left: "30px", height: "110px" }}
                        />
                    <label style={{ position:"absolute", top: "110px", left: "200px", width:"100%", color:"white"}}><h1><b>{this.props.match.params.title}</b></h1></label>
                </div>

                <div className="ui segment">
                    <div className="ui grid">

                        <div className="four wide column">
                            <div className="ui segment">
                                <div className="ui black basic button" style={{ width: "280px"}}><b>Related Communities</b></div><br/><hr/>
                                {this.renderCommunityList(this.props.com ? this.props.com.group : 'Socail & Life')}
                            </div>
                        </div>

                        <div className="ui eight wide column segment">
                            <div className="ui segment">
                                Middle
                            </div>
                        </div>

                        <div className="four wide column">
                            <div className="ui segment">
                                <div className="ui basic blue button" style={{ width: "280px"}}>Community Details</div><br/><hr/>
                                <div className="ui basic black button" style={{ width: "280px", height: "50px"}}>
                                        <div className="ui secondary pointing menu">
                                            <img className="ui avatar image" src={this.props.com ? this.props.com.img : ''} alt="dp"/>
                                            <span><Link to={`/communities/${this.props.com ? this.props.com.title : ''}`}><b> {this.props.com ? this.props.com.title : ''}</b></Link></span>
                                            <div className="right menu">
                                            <label style={{ color:"black"}}>{this.props.com ? this.props.com.member : ''} Members</label>
                                            </div>
                                        </div>
                                </div><br/><hr/>
                                    <p className="ui basic black button">
                                        <b>{this.props.com ? this.props.com.description : ""}</b><br/>
                                        <button className="ui basic green button" style={{margin: "3% 25%"}}>Join</button>
                                    </p><br/>
                                
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
        community: state.community,
        com: state.com
    }
}

export default connect(mapStateToProps, { fetchCommunities, fetchCommunity })(CommunityPage);