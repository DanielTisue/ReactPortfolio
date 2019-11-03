import React, { Component } from 'react';



class NavbarSecondary extends Component {
  render() {
    return (
      <div className="secondary-nav">
        <ul className="nav-links">
          <li><i class="fas fa-arrow-circle-left" />Home</li>
          <li>Next Project
          <i class="fas fa-arrow-circle-right" />
          </li>   
        </ul>
      </div>
    )
  }
}

export default NavbarSecondary;


