import React, { Component } from 'react'
import NavbarSecondary from '../Header/NavbarSecondary'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default class OlivieriPhoto extends Component {
  render() {
    return (
      <div className="recent-work-page">
        <NavbarSecondary />
        <div className="title-summary-wrapper">
          <div className="page-title center">
            <h4 className="text-muted-title italic">Olivieri Photo</h4>
          </div>
          <div>
            <p className="center">
              This is where the project summary will go.
            </p>
          </div>
        </div>
        <SectionOne />
        <SectionTwo />
      </div>
    )
  }
}
