import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content:flex-end;
`;

const Logo = styled.div`
  flex: 4;
  padding: 33px;
`;
const MenuItem = styled.div`
  padding: 33px 20px;
  :hover {
    background-color: red;
  } & > div {
    position: absolute;
    top: 30px;
    right: ${props => props.right};
    width: 7px;
    height: 4px;
    }
`;

const Menu = styled.div`
  display: flex;
  flex: 6;
  text-align: right;
  justify-content: flex-end;
`;

export {
  Container,
  Logo,
  Menu,
  MenuItem
}
