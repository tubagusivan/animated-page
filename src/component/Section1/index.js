import React from 'react';
import {
  Container,
  Logo,
  Float1,
  Float2,
  Float3,
  Float4,
  Text,
  Border
} from './style.js';
import globe from '../../assets/globe.svg';
import n from '../../assets/n.svg';
import user from '../../assets/user.svg';
import bus from '../../assets/bus.svg';
import topleftBackground from '../../assets/topleftBackground.png';
import toprightBackground from '../../assets/toprightBackground.png';
import bottomleftBackground from '../../assets/bottomleftBackground.png';
import bottomrightBackground from '../../assets/bottomrightBackground.png';
import iconlpr1 from '../../assets/iconlpr1.svg';
import iconlpr2 from '../../assets/iconlpr2.svg';
import iconlpr3 from '../../assets/iconlpr3.svg';
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <Container>
      <Logo>
        <img src={globe} alt="globe"/>
        <img src={n} alt="n" className="smalllogo"/>
      </Logo>
      <Float1>
        <div>
          <img src={topleftBackground} alt="topleftBackground" className="bg"/>
          <div className="title">
            Face
            <span> Recognition</span>
          </div>
          <div className="content">
            <div>
              <div className="title">Total Person</div>
              <div className="value">81032</div>
            </div>
            <div>
              <div className="title">Identified Person</div>
              <div className="value">65112</div>
            </div>
          </div>
        </div>
      </Float1>
      <Float2>
        <div>
          <img src={toprightBackground} alt="toprightBackground" className="bg"/>
          <div className="title">
            Traffic
            <span> Surveilance</span>
          </div>
          <div className="content">
            <div>
              <div className="title">Total Vehicle</div>
              <div className="value">5122</div>
            </div>
            <div>
              <div className="title">Total License Plate</div>
              <div className="value">4232</div>
            </div>
          </div>
        </div>
      </Float2>
      <Float3>
        <div>
          <img src={bottomleftBackground} alt="bottomleftBackground" className="bg"/>
          <div className="title">
            Face
            <span> Detection</span>
          </div>
          <div className="content">
            <div>
              <div className="img"><img src={user} alt=""/></div>
              <div className="gender">Male</div>
              <div className="age">Age 17-20</div>
              <div className="date">Today 20:45</div>
            </div>
            <div>
              <div className="img"><img src={user} alt=""/></div>
              <div className="gender">Male</div>
              <div className="age">Age 17-20</div>
              <div className="date">Today 20:45</div>
            </div>
            <div>
              <div className="img"><img src={user} alt=""/></div>
              <div className="gender">Male</div>
              <div className="age">Age 17-20</div>
              <div className="date">Today 20:45</div>
            </div>
          </div>
        </div>
      </Float3>
      <Float4>
        <div>
          <img src={bottomrightBackground} alt="bottomrightBackground " className="bg"/>
          <div className="title">
            Traffic
            <span> Surveilance</span>
          </div>
          <div className="content">
              <div className="carImg">
                <img src={bus} alt=""/>
              </div>
              <div className="plateImg">
                <img src={iconlpr1} alt=""/>
              </div>
              <div className="data">
                <div className="plate">Male</div>
                <div className="type">Age 17-20</div>
                <div className="date">Today 20:45</div>
              </div>
          </div>
          <div className="content">
              <div className="carImg">
                <img src={bus} alt=""/>
              </div>
              <div className="plateImg">
                <img src={iconlpr2} alt=""/>
              </div>
              <div className="data">
                <div className="plate">Male</div>
                <div className="type">Age 17-20</div>
                <div className="date">Today 20:45</div>
              </div>
          </div>
          <div className="content">
              <div className="carImg">
                <img src={bus} alt=""/>
              </div>
              <div className="plateImg">
                <img src={iconlpr3} alt=""/>
              </div>
              <div className="data">
                <div className="plate">Male</div>
                <div className="type">Age 17-20</div>
                <div className="date">Today 20:45</div>
              </div>
          </div>
        </div>
      </Float4>
      <Text>
        Extending Vision Beyond Imagination
      </Text>
      <Link activeClass="active" className="test1" to="explore" spy={true} smooth={true} duration={500} >
        <Border>
          <span>Explore more</span>
        </Border>
      </Link>
    </Container>
  );
}

export default LandingPage;
