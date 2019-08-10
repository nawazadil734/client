import React , { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import SignUp from './SignUp';
import Posts from './Posts';
import Commnunities from './Communities';
import Header from './Header';
import Botton from './Botton';
import Setting from './Setting';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Notifications from './Notifications';
import AboutUs from './AboutUs';
import Club from './Club';
import CommunityPage from './communityPage';
import createPostModal from './createPostModal';
import PostPage from './PostPage';
import Saved from './Saved';
import history from '../history';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Discussions from './Discussions';
// import Spiner from './Spiner';
import '../css/App.css';
// use tab for posts
// use rails to show side posts
class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                    <Router history={history}>
                        <div>
                            <Header/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/" exact component={ this.props.auth ? Dashboard : Landing}/>
                            <Route path="/dashboard" exact component={this.props.auth ? Dashboard :Landing}/>
                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/posts" exact component={Posts} />
                            <Route path="/communities" exact component={Commnunities} />
                            <Route path="/settings" exact component={Setting}/>
                            <Route path="/profile" exact component={Profile}/>
                            <Route path="/discussion" exact component={Discussions}/>
                            <Route path="/notification" exact component={Notifications}/>
                            <Route path="/aboutus" exact component={AboutUs}/>
                            <Route path="/club" exact component={Club}/>
                            <Route path="/communities/:title" exact component={CommunityPage}/>
                            <Route path="/createPost" exact component={createPostModal}/>
                            <Route path="/dashboard/post" exact component={PostPage}/>
                            <Route path="/saved" exact component={Saved}/>
                            <Botton/>
                        </div> 
                    </Router>        
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, actions)(App);