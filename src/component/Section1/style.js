import styled from 'styled-components';
import Background from '../../assets/pattern1.svg'

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
  & > .smalllogo {
    justify-content: center;
    position: absolute;
    top: 458px;
  }
`;

const Float1 = styled.div`
  position: absolute;
  top: 137px;
  left: 20%;
  color: #e0c8ff;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    & > .title {
      font-weight: 600;
      span {
        font-weight: 300;
      }
    }
    & > .content {
      display: flex;
      & > div:first-of-type {
        padding: 0 10px 0 0;
      }
      & > div:last-of-type {
        padding: 0 0 0 10px;
      }
      & > div {
        padding: 0 10px;
        .value {
          font-family: 'Dosis', sans-serif;
          text-shadow: 0 0 6px #c789ff;
          font-size: 30px;
        }
      }
    }
  }
`
const Float2 = styled.div`
  position: absolute;
  top: 150px;
  right: 20%;
  color: #e0c8ff;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    & > .title {
      font-weight: 600;
      span {
        font-weight: 300;
      }
    }
    & > .content {
      display: flex;
      & > div:first-of-type {
        padding: 0 10px 0 0;
      }
      & > div:last-of-type {
        padding: 0 0 0 10px;
      }
      & > div {
        padding: 0 10px;
        .value {
          font-family: 'Dosis', sans-serif;
          text-shadow: 0 0 6px #c789ff;
          font-size: 30px;
        }
      }
    }
  }
`
const Float3 = styled.div`
  position: absolute;
  top: 600px;
  left: 10%;
  color: #e0c8ff;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    & > .title {
      font-weight: 600;
      span {
        font-weight: 300;
      }
    }
    & > .content {
      display: flex;
      & > div {
        font-family: 'Dosis', sans-serif;
        padding: 0 10px;
        .img {
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 2px 4px 0 rgba(122, 76, 164, 0.3);
          background-color: #320e61;
          border-radius: 5px;
        }
        .gender {
          font-size: 20px;
          text-shadow: 0 0 6px #c789ff;
        }
        .age {
          color: #c8a6ff;
          font-size: 13px;
        }
        .date {
          font-size: 12px;
          color: #825cc0;
        }
      }
    }
  }
`
const Float4 = styled.div`
  position: absolute;
  top: 400px;
  right: 13%;
  color: #e0c8ff;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    & > .title {
      font-weight: 600;
      span {
        font-weight: 300;
      }
    }
    & > .content {
      margin: 5px 0;
      display: flex;
      & > .plateImg,
      & > .carImg {
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 2px 4px 0 rgba(122, 76, 164, 0.3);
        background-color: #320e61;
        border-radius: 5px;
        margin: 0 3px;
        padding: 3px;
        min-width: 63px;display: flex;
        justify-content: center;
      }
      & > .data {
        font-family: 'Dosis', sans-serif;
        padding: 0 10px;
        .plate {
          font-size: 20px;
          text-shadow: 0 0 6px #c789ff;
        }
        .type {
          color: #c8a6ff;
          font-size: 13px;
        }
        .date {
          font-size: 12px;
          color: #825cc0;
        }
      }
    }
  }
`

const Text = styled.div`
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  font-family: WorkSans;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 2.21px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 762px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Border = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 19.4px;
  border: solid 1.2px #ffffff;
  position: absolute;
  top: 832px;
  left: 46%;
  :hover {
    background-color: red;
  }
  & > span {
    font-family: Dosis;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #ffffff;
    padding: 25px;
  }
`

export {
  Container,
  Logo,
  Float1,
  Float2,
  Float3,
  Float4,
  Text,
  Border
}
