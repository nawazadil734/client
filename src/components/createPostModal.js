import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost, fetchUser } from '../actions/index';
import { fetchCommunities, photoUpload } from '../actions/index';
import _ from 'lodash';
class Modal extends Component  {

    state = { 
        selectedFile: null
    }

    componentDidMount = async () => {
        await this.props.fetchUser();
        await this.props.fetchCommunities();
    }

    

    renderError({ error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label , type, meta, design}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ""}`;
        return (
            <div className={className} style={{ width: "50%", margin: "2% 15%"}}>
                <input {...input} type={type} autoComplete="off" placeholder={label} style={design}/>
                {this.renderError(meta)}                
            </div>
    )}

    renderList() {
        return (
            _.map(this.props.community, function(list) {
            return (
                <option key={list.title} value={list.title}>{list.title}</option>
            )}
            ))
        
                                    
    }

    render() {
        return ReactDOM.createPortal(
            <div  className="ui dimmer modals visible active">
                <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">Create Post</div>
                    <div className="ui menu" style={{ height: "80px"}}>
                        <img src={this.props.auth ? this.props.auth.profilePhoto : ''}
                            alt="dp"
                            className="ui tiny circular image"   
                            style={{height: "70px", margin: "1% 3%"}} 
                            /><h2>{this.props.auth ? this.props.auth.firstName + ' ' + this.props.auth.lastName : 'Loading'}</h2>
                    </div>
                    <div className="content">
                        <div className="ui card" style={{ width: "110%", margin: "0% 0%"}}>
                            <form onSubmit={this.props.handleSubmit((values) => this.props.createPost)} className="ui error form">
                                <Field name="community" component="select">
                                    <option value="">Select Community</option>
                                    {this.renderList()}  
                                </Field>
                                <Field name="title" component={this.renderInput} label="Title" type="text" design={{ width: "650px"}}/>
                                <div style={{ width: "650px", margin: "0% 15%"}}>
                                <Field name="content" component="textarea" type="text" placeholder="Write something here...."/>
                                </div>

                                {/* <div>
                                <input type="file" onChange={this.handleUploadFile}/>
                                <button onClick={this.fileUploadHandler}>Upload</button>
                                </div> */}
                                <Field name="url" component={this.renderInput} label="Add youtube URL" design={{ width: "650px"}}/>
                                <Link to='/' className="ui button negative" style={{ margin: "1% 15%"}}>Cancel</Link>
                                <button className="ui  green button primary"  type="submit" style={{ margin: "1% 25%"}}>Post</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                {/* style={{margin: "0% 15%", width: "450px", position: "relative"}} */}
            </div>,
            document.querySelector('#modal')
        );
    }
    
};

const validate = (formValues) => {
    const errors = {};

    console.log(formValues);
    if(!formValues.title) {
        errors.title = "Please provide the title";
    }

    if(!formValues.community) {
        errors.community = "Please select a comunity";
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'CreatePost',
    validate: validate
})(Modal);

const mapStateToProps = (state)  => {
    
    return {
        auth: state.auth,
        community : state.community
    }
}

export default connect(mapStateToProps, { createPost, fetchUser, fetchCommunities , createPost})(formWrapped);