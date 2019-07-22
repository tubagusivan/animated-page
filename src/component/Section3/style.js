import styled from 'styled-components';
import Background from '../../assets/pattern1.svg';
import floatBackgroundSectionThree from '../../assets/floatBackgroundSectionThree.svg';

const Container = styled.div`
  height:100vh;
  width: 100vw;
  background-image: url(${Background});
  background-size: 100%;
  position: relative;
  overflow: hidden;
`;

const Logo = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
`;


const TextTitle = styled.div`
  width: 265px;
  height: 52px;
  font-family: 'Work Sans'  ;
  font-size: 38px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e0c8ff;
  position: absolute;
  left: 632px;
  top: 80px;
  & > .textshadow {
    text-shadow: -20px -15px 1px rgba(224,200,255,0.1);
  }
  div:last-child{
    bottom: 0px;
    width: 128.8px;
    height: 1px;
    background-color: #c789ff;
    left: 24px;
    position: absolute;
    top: 54px;
  }
  & > .title {
    font-weight: 600
    span {
      font-wight: 300
    }
  }
`

const ProgressBar = styled.div`
  width: 332px;
  height: 5px;
  background-color: rgba(228, 197, 255, 0.15);
  left: 882.5px;
  top: 604px;
  position: absolute;
  div: first-child{
    width: 105px;
    height: 5px;
    background-color: #c493ff;
    left: 398px;
    top: 562px;
  }
`

const NumberProgressBar = styled.div`
  position: absolute;
  top: 620px;
  left: 882px;
  width: 59px;
  height: 28px;
  font-family: WorkSans;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 6px;
  color: #ffffff;
`

const FloatBackground = styled.div`
  background-image: url(${floatBackgroundSectionThree});
  position: absolute;
  top: 254px;
  left: 882.5px;
  z-index: 1;
  width: 262.2px;
  height: 283.4px;
  padding: 20px 20px 20px 50px;
  background-repeat: no-repeat;
  & > .title {
    & > .Face {
     width: 55px;
     height: 28px;
     font-family: 'Work Sans', sans-serif;
     font-size: 24px;
     font-weight: 500;
     font-style: normal;
     font-stretch: normal;
     line-height: normal;
     letter-spacing: normal;
     color: #ffffff;
    }
    & > .line {
      bottom: 0px;
      width: 128.8px;
      height: 3px;
      background-color: #c789ff;
      position: absolute;
      top: 56px;
    }
    & > .Recognition {
      width: 131px;
      height: 28px;
      font-family: 'Work Sans', sans-serif;
      font-size: 24px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
    }
  }
  & > .paragraphcontent {
    width: 275px;
    height: 224px;
    font-family: 'Work Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.78;
    letter-spacing: 0.26px;
    color: #e0c8ff;
    margin-top: 26px;
  }
  & > .more {
    font-family: 'Work Sans', sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #bc8cfb;
    display: flex;
    align-items: center;
    & > .arrow {
      margin-left: 20px;
    }
  }
`

const NextPageBox = styled.div`
  position: absolute;
  top: 381px;
  left: 1228px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to bottom, rgba(228, 197, 255, 0.15), rgba(61, 15, 115, 0.2));
`

const PreviousPageBox = styled.div`
  position: absolute;
  top: 381px;
  left: 232px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to bottom, rgba(228, 197, 255, 0.15), rgba(61, 15, 115, 0.2));
`

const ImgDashContent = styled.div`
  width: 522.1px;
  height: 321.4px;
  object-fit: contain;
  position: absolute;
  top: 231px;
  left: 309.9px;
`

const ImgMapContent = styled.div`
  width: 277px;
  height: 285px;
  object-fit: contain;
  position: absolute;
  top: 334.8px;
  left: 250px;
  }
`

const ImgNotification = styled.div`
  width: 451px;
  height: 85px;
  object-fit: contain;
  position: absolute;
  top: 509.3px;
  left: 363.7px;
}
`

const BoxCircle = styled.div`
  width: 69.4px;
  height: 69.5px;
  position: absolute;
  top: 457.2px;
  left: 346.2px;
  & > div {
    width: 60px;
    height: 60px;
    background-color: rgba(255,0,0,0.2);
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items:center;
    & > div {
      width: 50px;
      height: 50px;
      display:flex;
      background-color: rgba(255,0,0,0.3);
      border-radius: 50%;
      justify-content: center;
      align-items:center;
      & > div {
        width: 40px;
        height: 40px;
        display:flex;
        background-color: rgba(255,0,0,0.4);
        border-radius: 50%;
        justify-content: center;
        align-items:center;
        & > div {
          width: 20px;
          height: 20px;
          opacity: 0.80;
          background-color: rgba(255,0,0,1);
          border-radius: 50%;
        }
      }
    }
  }
`

export {
  Container,
  Logo,
  TextTitle,
  ProgressBar,
  NumberProgressBar,
  FloatBackground,
  NextPageBox,
  PreviousPageBox,
  ImgDashContent,
  ImgMapContent,
  ImgNotification,
  BoxCircle
}
