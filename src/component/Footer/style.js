import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  background-image: linear-gradient(to top, var(--midnight), var(--dark-indigo-0));
  position: relative;
  overflow: hidden;
`;

const BoxFooter = styled.div`
  width: ${props => props.width};
  display: flex;
  align-items: ${props => props.center ? props.center: "block"}
  justify-content: ${props => props.jccenter ? props.jccenter: "block"}
  flex-wrap:wrap;
  flex-direction: ${props => props.direction ? props.direction: "column"};
  & > span: first-child {
    font-size: 16px;
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
  }
  & span: last-child {

  }
  & > span {
    font-size: 16px;
    font-family: 'Hind', sans-serif;
    margin: 5px 0px;
  }
  & > img {
    margin: 0px 10px;
  }
`

const FooterUp = styled.div`
  padding-top: 50px;
  display: flex;

`
const FooterBottom = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid #431a6d;
`
export {
  Container,
  BoxFooter,
  FooterUp,
  FooterBottom
}
