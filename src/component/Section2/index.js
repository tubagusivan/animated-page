import React from 'react';
import {Container, ImageOne, TextTitle, BoxImage, ProgressBar, NumberProgressBar, FloatBackground, NextPageBox} from './style.js';
import brainwave from '../../assets/brainwave.svg';
import illustrationfr from '../../assets/illustrationfr.svg';
import arrow from '../../assets/arrow.svg';
import arrownextpage from '../../assets/arrownextpage.svg';

function LandingPage() {
  return (
    <Container>
      <ImageOne>
        <img src={brainwave} alt="brainwave"/>
      </ImageOne>
      <TextTitle>
        <span className="textshadow">What We Do</span>
        <div/>
      </TextTitle>
      <BoxImage>
        <img src={illustrationfr} alt="illustrationfr"/>
        <span>1</span>
      </BoxImage>
      <ProgressBar>
        <div/>
      </ProgressBar>
      <NumberProgressBar>
        <span>1/15</span>
      </NumberProgressBar>
      <FloatBackground>
        <div className="title">
          <span className="Face">Face</span> <span className="Recognition">Recognition</span>
        </div>
        <div className="paragraphcontent">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
        </div>
        <div className="more">
          Learn more <img src={arrow} alt="arrow" className="arrow"/>
        </div>
      </FloatBackground>
      <NextPageBox>
        <img src={arrownextpage} alt="arrownextpage" className=""/>
      </NextPageBox>
    </Container>
  );
}

export default LandingPage;
