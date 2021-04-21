import styled from 'styled-components';
import { ILogout } from '../components/Logout';

export const LogoutWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  padding: 30px;
  z-index: 800;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  background-color: #fff;
  visibility: ${(props: ILogout) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props: ILogout) => (props.show ? '1' : '0')};
  transition: all 0.6s ease;
  h4 {
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
  }
`;

export const LogoutBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  button {
    width: 45%;
    height: 40px;
    background-color: #000;
    border: none;
    outline: none;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
  }
`;
