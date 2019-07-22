import React from 'react';
import { Container, ImageOne, TextTitle, FloatWrapper, FloatBackground1, FloatBackground2, ImgDashContent1, ImgDashContent2 } from './style.js';
import arrow from '../../assets/arrow.svg';
import illustration from '../../assets/illustration-face.svg';
import imagedashboard from '../../assets/imgdashboard.png';
import fire from '../../assets/fire.jpg';

function LandingPage() {
  return (
    <Container>
      <TextTitle>
        <span className="textshadow">Our Product</span>
        <div />
      </TextTitle>
      <FloatWrapper>
        <FloatBackground1>
          <div className="title">
            <span className="Face">Nodeflux</span> <span className="Recognition">Grid</span>
          </div>
          <ImgDashContent1>
            <img src={imagedashboard} alt="imagedashboard" />
            <div />
          </ImgDashContent1>
          <div className="paragraphcontent">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          </div>
          <div className="more">
            Learn more <img src={arrow} alt="arrow" className="arrow" />
          </div>
        </FloatBackground1>
        <FloatBackground2>
          <div className="title">
            <span className="Face">Nodeflux</span> <span className="Recognition">Grid</span>
          </div>
          <ImgDashContent2>
            <img src={fire} alt="imagedashboard" />
            <div />
          </ImgDashContent2>
          <div className="paragraphcontent">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
          </div>
          <div className="more">
            Learn more <img src={arrow} alt="arrow" className="arrow" />
          </div>
        </FloatBackground2>
        <ImageOne>
          <img src={illustration} alt="brainwave" />
        </ImageOne>
      </FloatWrapper>
    </Container>
  );
}

export default LandingPage;
