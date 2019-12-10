import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavbarSecondary extends Component {
  render() {
    return (
      <div className="secondary-nav">
        <ul className="nav-links">
          <Link to="/">
            <li><i class="fas fa-arrow-circle-left" />Home</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default NavbarSecondary;


