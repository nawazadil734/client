import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Bottom from './Botton';
import Login from './Login';
import DashBoard from './DashBoard';
import SignUp from './SignUp';
// use tab for posts
// use rails to show side posts
class App extends Component {
    render() {
        return (
            <div>
                    <BrowserRouter>
                        <div className="container">
                            <Route path="/login" exact component={Login}/>
                            <Route path="/" exact component={DashBoard}/>
                            <Route path="/signup" exact component={SignUp}/>
                    </div>
                </BrowserRouter>        
            </div>
        );
    }
}
export default App;