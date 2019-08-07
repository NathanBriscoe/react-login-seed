import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="classnamehere">
        <nav className="classnamehere">
          <div className="nav-wrapper white">
            <Link to="/" style={{fontFamily: "fillhere"}} className="classnamefillhere">
              <i className="classmanhere">Landing Page</i>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;