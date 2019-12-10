import React, { Component } from 'react'
import './OlivieriPhoto.scss';
import NavbarSecondary from '../Header/NavbarSecondary'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'


export default class OlivieriPhoto extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <NavbarSecondary />
          <div className="center title-text">
            <h4>Olivieri Photo</h4>
          </div>
          <div className="center summary-text">
            <p>
              This is where the project summary will go.
            </p>
          </div>
        
        <SectionOne />
        <SectionTwo />
      </div>
    )
  }
}
