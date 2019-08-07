import React, { Component } from "react";
import { Link } from "react-router-dom";

// ToDo: will need to clean up formatting
// ToDo: will need to rename classnames and add styling
class Login extends Component {
  constructor() {

    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

    onChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
            return (
                <div className="containerclassName">
                    <div style={{ marginTop: "4rem" }} className="rowclassName">
                        <div className="className">
                            <Link to="/" className="className">
                                <i className="className">keyboard_backspace</i> Back to home
                            </Link>
                            <div className="className" style={{ paddingLeft: "11.250px" }}>
                                <h4><b>Login</b> below</h4>
                                <p className="className">Don't have an account? <Link to="/register">Register</Link>
                                </p>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="className">
                                    <input onChange={this.onChange} value={this.state.email} error={errors.email} className="emailclassName" type="email"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="className">
                                    <input onChange={this.onChange} value={this.state.password} error={errors.password} className="passwordclassName" type="password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="className" style={{ paddingLeft: "11.250px" }}>
                                    <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem"}} type="submit"
                                        className="className">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Login;