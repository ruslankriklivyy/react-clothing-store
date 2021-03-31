import React from 'react';
import styled from 'styled-components';
import removeSvg from '../assets/img/cancel.svg';
import Registration from './Registration';
import {device} from '../utils/deviceMedia';
import Login from "./Login";
import {useDispatch} from "react-redux";

const LoginWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 100px;
  z-index: 800;
  background: #fff;
  width: 350px;
  min-height: 410px;
  border-radius: 25px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  visibility: ${(props: IAuth) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props: IAuth) => (props.show ? '1' : '0')};
  transition: all 0.6s ease;
  @media ${device.laptopL} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${device.mobileL} {
    width: 300px;
  }
`;

const CloseLoginForm = styled.div`
  position: absolute;
  top: 13px;
  right: 15px;
  z-index: 800;
  width: 17px;
  height: 17px;
  opacity: 0.8;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const RegistartionTitle = styled.h2`
  padding-top: 40px;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;

interface IAuth {
  show: boolean;
  visibleAuthBlock: boolean;
  setVisible: (visible: boolean) => void;
}

const Auth: React.FC<IAuth> = ({show, setVisible, visibleAuthBlock}) => {
  const [visibleLogin, setVisibleLogin] = React.useState(true);
  const dispatch = useDispatch();

  return (
    <LoginWrapper show={show}>
      <CloseLoginForm onClick={() => setVisible(false)}>
        <img src={removeSvg} alt="remove svg"/>
      </CloseLoginForm>
      {!visibleLogin && <RegistartionTitle>Регистрация</RegistartionTitle>}
      {
        !visibleLogin ?
          <Registration
            setVisible={setVisible}
            visibleLogin={visibleLogin}
            setVisibleLogin={setVisibleLogin}
            message="Sign up"
          /> : <Login
            dispatch={dispatch}
            setVisible={setVisible}
            visibleLogin={visibleLogin}
            setVisibleLogin={setVisibleLogin}
            message="Sign up"
          />
      }

    </LoginWrapper>
  );
};

export default Auth;
