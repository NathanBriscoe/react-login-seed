import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {

    constructor(props) {

    super(props);
    // adding properties object and placing it in constructor to initalize right away
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
}

componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
}

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = event => {
    // will have to set the State
    this.setState({ [event.target.id]: event.target.value });
};



onSubmit = event => {
    // prevent react default behaviors on submit
    event.preventDefault();
    // create user object
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history); 

    // When we make requests from React with axios, we don’t want to have to do the following in our requests:
    // axios.post(‘http://localhost:5000/api/users/register');

    // We want to be able to do the following instead.
    // axios.post('/api/users/register');



    // ToDo: add POST call here of registering user
    // where to send this?
    // how to connect register to server?

};

render() {
    const { errors } = this.state;

    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">back</i> Back button
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <p className="grey-text text-darken-1"> Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.name
                                })}
                            />
                            <label htmlFor="name">Name</label>
                            <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email
                                })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password
                                })}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password2
                                })}
                            />
                            <label htmlFor="password2">Confirm Password</label>
                            <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.any.isRequired,
    errors: PropTypes.any.isRequired
};

// This allows us to call this.props.auth or this.props.errors within our Register component.
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect( // The connect() function connects a React component to a Redux store.
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
