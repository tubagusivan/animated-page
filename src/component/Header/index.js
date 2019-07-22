import React from 'react';
import {Container, Menu, MenuItem, Logo} from './style.js';
import NodefluxLogo from '../../assets/nodeflux.png';
import { Link } from 'react-scroll';
import Down from '../../assets/down.svg';


function LandingPage() {
  return (
    <Container>
      <Logo>
        <img src={NodefluxLogo} alt=""/>
      </Logo>
      <Menu>
        <Link activeClass="active" className="test1" to="footer" spy={true} smooth={true} duration={500} ><MenuItem>About Us</MenuItem></Link>
        <Link activeClass="active" className="test1" to="product" spy={true} smooth={true} duration={500} >
          <MenuItem right="356px">
          Product
          <div>
          <img src={Down} alt="Down" />
          </div>
          </MenuItem>
        </Link>
        <MenuItem right="235px">
          Newsroom
          <div>
            <img src={Down} alt="Down" />
          </div>
        </MenuItem>
        <MenuItem>Careers</MenuItem>
        <Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={500} ><MenuItem>Contact Us</MenuItem></Link>
      </Menu>
    </Container>
  );
}

export default LandingPage;
