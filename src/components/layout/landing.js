import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="classnamehere">
        <div className="classnamehere">
          <div className="classnamehere">
            <br />
            <div className="classnamehere">
              <Link to="/register" style={{width: "140px", borderRadius: "3px", letterSpacing: "1.5px"}}
                className="classnamehere">
                Register
              </Link>
            </div>
            <div className="classnamehere">
              <Link to="/login"
                style={{width: "140px", borderRadius: "3px", letterSpacing: "1.5px"}}
                className="classnamehere">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;