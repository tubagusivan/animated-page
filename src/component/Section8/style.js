import styled from 'styled-components';
import Background from '../../assets/pattern1.svg';

const Container = styled.div`
  height:100vh;
  width: 100vw;
  background-image: url(${Background});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  & button {
    width: 157px;
    height: 43px;
    border-radius: 31px;
    box-shadow: 0 2px 16px 2px rgba(198, 86, 255, 0.35);
    background-image: linear-gradient(91deg, #7242d9, #8b0acd);
    border: 3px solid linear-gradient(91deg, #7242d9, #8b0acd);
    color: white;
  }
`;


const TextTitle = styled.div`
  width: 265px;
  height: 52px;
  font-family: 'Work Sans'  ;
  font-size: 38px;
  position:relative;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e0c8ff;
  margin-bottom: 28px;
  margin-top: 18px;
  & > .textshadow {
    text-shadow: -20px -15px 1px rgba(224,200,255,0.1);
  }
  div:last-child{
    width: 128.8px;
    height: 1px;
    background-color: #c789ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
  }
  & > .title {
    font-weight: 600
    span {
      font-wight: 300
    }
  }
`

const TextContent = styled.div`
  width: 289px;
  height: 29px;
  font-family: Hind;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-left: -78px;
  margin-bottom: 46px;
`

const Content = styled.div`
  position: relative;
`

export {
  Container,
  TextTitle,
  TextContent,
  Content
}
