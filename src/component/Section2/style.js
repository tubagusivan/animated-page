import styled from 'styled-components';
import floatBackgroundSectionTwo from '../../assets/floatBackgroundSectionTwo.svg';

const Container = styled.div`
  height:100vh;
  width: 100vw;
  background-image: #1f1946;
  background-size: 100%;
  position: relative;
  overflow: hidden;
`;

const Logo = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
`;


const ImageOne = styled.div`
  width: 311px;
  height: 625px;
  position: absolute;
  top: 96px;
`

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
  left: 387px;
  top: 64px;
  & > .textshadow {
    text-shadow: -20px -15px 1px rgba(224,200,255,0.1);
  }
  div:last-child{
    bottom: 0px;
    width: 128.8px;
    height: 1px;
    background-color: #c789ff;
    left: -20px;
    position: absolute;
  }
  & > .title {
    font-weight: 600
    span {
      font-wight: 300
    }
  }
`

const BoxImage = styled.div`
  width: 250px;
  height: 245px;
  border-radius: 8px;
  box-shadow: 0 6px 16px 2px rgba(25, 3, 57, 0.5);
  background-image: linear-gradient(to bottom, #4b1585, #270a52);
  position: absolute;
  left: 387px;
  top: 254px;
  padding: 24px 27px 23px 27px;
  display: flex;
  justify-content: center;
  z-index: 2;
  & > img {
    width: 100%;
    height: 100%;
  }
  & > span {
    position: absolute;
    top: -27px;
    left: 27px;
    font-size: 46px;

  }
`

const ProgressBar = styled.div`
  width: 256px;
  height: 5px;
  background-color: rgba(228, 197, 255, 0.15);
  left: 398px;
  top: 562px;
  position: absolute;
  div: first-child{
    width: 25px;
    height: 5px;
    background-color: #c493ff;
    left: 398px;
    top: 562px;
  }
`

const NumberProgressBar = styled.div`
  position: absolute;
  top: 575px;
  left: 396px;
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
  background-image: url(${floatBackgroundSectionTwo});
  position: absolute;
  top: 208px;
  left: 661px;
  z-index: 1;
  width: 499px;
  height:405px;
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
    width: 450px;
    height: 242px;
    text-shadow: 0 0 1px #e0beff;
    font-family: WorkSans;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.78;
    letter-spacing: 0.26px;
    color: #e0c8ff;
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

export {
  Container,
  Logo,
  ImageOne,
  TextTitle,
  BoxImage,
  ProgressBar,
  NumberProgressBar,
  FloatBackground,
  NextPageBox
}
