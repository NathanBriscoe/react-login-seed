import React, { Component } from "react";
import { Link } from "react-router-dom";

// ToDo: will need to clean up formatting
// ToDo: will need to rename classnames and add styling
class Register extends Component {
  constructor() {

    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

    onChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };

    render() {
        const { errors } = this.state;
        return (
        <div className="containerclassName">
            <div className="rowclassName">
            <div className="className">
                <Link to="/" className="className">
                    <i className="className">keyboard_backspace</i> Back to home
                </Link>
                <div className="className" style={{ paddingLeft: "11.250px" }}>
                    <h4><b>Register</b> below</h4>
                    <p className="className"> Already have an account? <Link to="/login">Log in</Link> </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="className">
                        <input onChange={this.onChange} value={this.state.name} error={errors.name} className="name" type="text" />
                        <label htmlFor="name">Name</label>
                    </div>
                <div className="className">
                    <input onChange={this.onChange} value={this.state.email} error={errors.email} className="emailclassName" type="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="className">
                    <input onChange={this.onChange} value={this.state.password} error={errors.password} className="password" type="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="className">
                    <input onChange={this.onChange} value={this.state.password2} error={errors.password2} className="password2" type="password" />
                    <label htmlFor="password2">Confirm Password</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem"}} type="submit"
                        className="className" >
                        Sign up
                    </button>
                </div>
                </form>
            </div>
            </div>
      </div>
    );
  }
}

export default Register;