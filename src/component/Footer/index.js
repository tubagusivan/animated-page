import React from 'react';
import {Container, BoxFooter, FooterUp, FooterBottom} from './style.js';
import nodefluxfooter from '../../assets/nodefluxfooter.svg';
import youTube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';

function LandingPage() {
  return (
    <Container>
      <FooterUp>
        <BoxFooter width="20%" center="center">
          <img src={nodefluxfooter} alt="nodefluxfooter" />
        </BoxFooter>
        <BoxFooter width="20%">
          <span>Company</span>
          <span>About</span>
          <span>Career</span>
          <span>Blog's</span>
        </BoxFooter>
        <BoxFooter width="20%">
          <span>Nodeflux Cloud</span>
          <span>Security & Defense</span>
          <span>Smart City</span>
          <span>Retail</span>
        </BoxFooter>
        <BoxFooter width="20%">
          <span>Product</span>
          <span>Nodeflux Grid</span>
          <span>Nodeflux Cloud</span>
        </BoxFooter>
        <BoxFooter width="18%">
          <span>Location</span>
          <span>Jl. Kemang Timur No.24, RT.7/RW.4, Bangka, Mampang Prpt., Jakarta Selatan,  12730</span>
          <span>(021) 22718184</span>
          <span>hello@nodeflux.io</span>
        </BoxFooter>
      </FooterUp>
      <FooterBottom>
        <BoxFooter width="70%" jccenter="center" style={{paddingLeft:'10%'}}>
          © 2019 All right reserved - nodeflux.io
        </BoxFooter>
        <BoxFooter width="18%" direction="row">
          <img src={instagram} alt="instagram"/>
          <img src={youTube} alt="youTube"/>
          <img src={facebook} alt="facebook"/>
          <img src={linkedin} alt="linkedin"/>
        </BoxFooter>
      </FooterBottom>

    </Container>
  );
}

export default LandingPage;
