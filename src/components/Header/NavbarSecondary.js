import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../App.scss"

//NEED TO FIX THIS!!!
class NavbarSecondary extends Component {
  render() {
    return (
      <div className="secondary-nav">
        <ul className="nav-links">
          <Link to="/">
            <p><i className="fas fa-arrow-circle-left" />
              <span className="link-text">Home</span></p>
          </Link>
        </ul>
      </div>
    )
  }
}

export default NavbarSecondary;


