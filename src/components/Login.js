import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions/index';
import { connect } from 'react-redux';
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
class Login extends Component {
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
        return(
            <div className="ui card" style={{ width: "50%", margin: "2% 25%"}}>
                <form onSubmit={this.props.handleSubmit((values) => this.props.loginUser(values))} className="ui form error">
                    <label><h1><i style={{margin: "0% 15%"}}>Log in to Anlt</i></h1></label>
                    <Field name="email" component={this.renderInput} label="UserName" type="text"/><br/>
                    <Field name="password" component={this.renderInput} label="Password" type="password"/><br/>
                    <button className="ui button primary" type="submit" >Login</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    // if(!formValues.email ) {
    //     errors.email = 'You must enter a Email'
    // }

    if(!re.test(formValues.email)) {
        errors.email = "Please provide a proper email"
    }
    if(!formValues.password) {
        errors.password = 'You must enter a Password'
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'Login',
    validate: validate
})(Login);

export default connect(null, { loginUser })(formWrapped);