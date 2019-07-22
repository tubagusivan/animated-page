import React from 'react';
import {
  Container,
  TextTitle,
  ProgressBar,
  NumberProgressBar,
  FloatBackground,
  NextPageBox,
  ImgDashContent,
  ImgMapContent,
  ImgNotification,
  PreviousPageBox,
  BoxCircle
} from './style.js';
import arrownextpage from '../../assets/arrownextpage.svg';
import arrowpreviouspage from '../../assets/arrowpreviouspage.svg';
import imagedashboard from '../../assets/imgdashboard.png';
import imagemap from '../../assets/imgmap.png';
import imagenotification from '../../assets/imgnotification.png';

function LandingPage() {
  return (
    <Container>
      <TextTitle>
        <span className="textshadow">Solutions</span>
        <div/>
      </TextTitle>
      <ImgDashContent>
        <img src={imagedashboard} alt="imagedashboard" />
        <div />
      </ImgDashContent>
      <ImgMapContent>
        <img src={imagemap} alt="imagemap" />
      </ImgMapContent>
      <ImgNotification>
        <img src={imagenotification} alt="imagenotification" />
      </ImgNotification>
      <ProgressBar>
        <div />
      </ProgressBar>
      <NumberProgressBar>
        <span>1/3</span>
      </NumberProgressBar>
      <FloatBackground>
        <div className="title">
          <span className="Face">Security &</span> <span className="Recognition">Defense</span>
          <div className="line"/>
        </div>
        <div className="paragraphcontent">
          Enhancing defense and security sector by combining following features such as Face Recognition, License Plate Recognition, Crowd and Behavior Analytics, and Time Compression Analysis.
        </div>
      </FloatBackground>
      <NextPageBox>
        <img src={arrownextpage} alt="arrownextpage" />
      </NextPageBox>
      <PreviousPageBox>
        <img src={arrowpreviouspage} alt="arrowpreviouspage" />
      </PreviousPageBox>
      <BoxCircle>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </BoxCircle>
    </Container>
  );
}

export default LandingPage;
