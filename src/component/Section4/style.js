import styled from 'styled-components';
import Background from '../../assets/pattern1.svg';
import floatBackgroundSectionTwo from '../../assets/floatBackgroundSectionTwo.svg';

const Container = styled.div`
  height:100vh;
  width: 100vw;
  background-image: url(${Background});
  background-size: 100%;
  position: relative;
  overflow: hidden;

  .float-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;;
    width: 100%;
  }
`;

const FloatWrapper = styled.div`
  height:100vh;
  width: 100vw;
  /* background-image: #1f1946; */
  background-size: 100%;
  position: relative;
  overflow: hidden;
`

const ImageOne = styled.div`
  width: 311px;
  height: 625px;
  position: absolute;
  top: 96px;
  right: 0;
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
      font-weight: 300
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

const FloatBackground1 = styled.div`
  background-color: #2e2656;
  position: absolute;
  top: 156px;
  z-index: 2;
  width: 450px;
  height: 415px;
  left: 100px;
  padding: 20px 20px 20px 50px;
  background-repeat: no-repeat;
  border-top-left-radius: 50px;
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
    height: 78px;
    text-shadow: 0 0 1px #e0beff;
    font-family: WorkSans;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.78;
    letter-spacing: 0.26px;
    color: #e0c8ff;
  }
  & > .more {
    font-family: 'Work Sans', sans-serif;
    font-size: 15px;
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

const FloatBackground2 = styled.div`
  background-image: url(${floatBackgroundSectionTwo});
  position: absolute;
  top: 248px;
  left: 661px;
  z-index: 1;
  width: 322px;
  height: 309px;
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
    width: 322px;
    height: 52px;
    text-shadow: 0 0 1px #e0beff;
    font-family: WorkSans;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.78;
    letter-spacing: 0.26px;
    color: #e0c8ff;
  }
  & > .more {
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
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

const ImgDashContent1 = styled.div`
  object-fit: contain;
  position: relative;
  right: 125px;

  img {
    width: 456px;
  }
`


const ImgDashContent2 = styled.div`
  object-fit: contain;
  position: relative;
  right: 120px;

  img {
    width: 385px;
    height: 218px;
  }
`

const ImgMapContent = styled.div`
  width: 277px;
  height: 285px;
  object-fit: contain;
  position: absolute;
  top: 334.8px;
  left: 250px;
`

export {
  Container,
  FloatWrapper,
  ImageOne,
  TextTitle,
  ProgressBar,
  NumberProgressBar,
  FloatBackground1,
  FloatBackground2,
  NextPageBox,
  ImgDashContent1,
  ImgDashContent2,
  ImgMapContent
}
