import React from 'react';
import {
  Container,
  TextTitle,
  TextContent,
  Content
} from './style.js';
import map from '../../assets/mapworld.png';
import n from '../../assets/n.svg';

function LandingPage() {
  return (
    <Container>
      <div>
        <TextTitle>
          <span className="textshadow">Reach Us</span>
          <div/>
        </TextTitle>
      </div>
      <div>
        <TextContent>
          <span>Tell us your problem by contacting us</span>
        </TextContent>
      </div>
      <Content>
          <img src={map} alt="map"/>
          <img src={n} alt="n" style={{position:'absolute',left:'45%', top: 100}}/>
          <button className="buttoncontact" style={{position:'absolute',left:'40%', top: 250}}>
            Contact Us
          </button>
      </Content>
    </Container>
  );
}

export default LandingPage;
