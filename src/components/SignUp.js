import React , { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { signupUser } from '../actions/index';
import { connect } from 'react-redux';
// const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
class SignUp extends Component {

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

        renderInput = ({ input, label , type, meta}) => {
            const className = `field ${meta.error && meta.touched ? 'error' : ""}`;
            return (
                <div className={className} style={{ width: "50%", margin: "2% 15%"}}>
                    <label className="ui label" ><h2>{label}</h2></label>
                    <input {...input} type={type} autoComplete="off" />
                    {this.renderError(meta)}                
                </div>
        )}

    render() {
        return (
            <div className="ui card" style={{ width: "50%", margin: "2% 25%"}}>
                <form onSubmit={this.props.handleSubmit((values) => this.props.signupUser(values))} className="ui error form">
                    <label><h1><i style={{margin: "0% 15%"}}>Create your account</i></h1></label>
                    <Field name="title" component={this.renderInput} label="Title" type="text"/>
                    <Field name="description" component={this.renderInput} label="Description" type="text"/>
                    <button className="ui button primary" type="submit">SignUp</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = "Please provide the title";
    }
    if(!formValues.group) {
        errors.group = "Please provide the group";
    }
    if(!formValues.img) {
        errors.img = "Please provide the image url";
    }
    
    return errors;
}

const formWrapped = reduxForm({
    form: 'SignUp',
    validate: validate
})(SignUp);

export default connect(null, { signupUser})(formWrapped);