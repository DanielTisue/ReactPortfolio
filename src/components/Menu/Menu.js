import React from 'react';
import { bool } from 'prop-types';
import { Link } from "react-scroll";
import { StyledMenu } from './Menu.styled';



const Menu = ({ open }) => {

  return (
    <StyledMenu open={open}>
            <ul className="nav-items">
              <li className="nav-item">
                  <Link 
                    activeClass="active"
                    to="sectionMain"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                      <i className="fas fa-arrow-circle-up fa-2x" />
                    </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="ProjectSection"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <p>RECENT WORK</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="AboutMeSection"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <p>ABOUT ME</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="ContactMeSection"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <i className="fas fa-envelope-square fa-2x" />
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  activeClass="active"
                  to="OtherWorkSection"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <p>OTHER WORK</p>
                </Link>
              </li> */}
            </ul>
    </StyledMenu>  
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;