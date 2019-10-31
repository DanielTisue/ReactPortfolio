import React, { Component } from 'react';


export default class ProjectSection extends Component {
  render() {
    return (
      <div className="sectionProjects" id="ProjectSection">
        <div className="project-section-title">
              <h5 className="recent-work">
                RECENT WORK
              </h5>
        </div>
       {/* < Multiple Projects /> */}
        <div className="project-grid">

          <div className="project1">
            <h5>Olivieri<br></br>Photo</h5> 
          </div>

          <div className="project2">
            <h5>Uniq<br></br>Tee</h5>
          </div>

          <div className="project3">
            <h5>Skate<br></br>Spots</h5>
          </div>
        </div> 
      </div>
    )
  }
}

