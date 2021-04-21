import React from 'react';
import { useDispatch } from 'react-redux';

import Registration from './Registration';
import Login from './Login';

import removeSvg from '../assets/img/cancel.svg';

import { CloseLoginForm, LoginWrapper, RegistartionTitle } from '../styles/AuthStyle';

export interface IAuth {
  show: boolean;
  visibleAuthBlock: boolean;
  setVisible: (visible: boolean) => void;
}

const Auth: React.FC<IAuth> = ({ show, setVisible }) => {
  const [visibleLogin, setVisibleLogin] = React.useState(true);
  const dispatch = useDispatch();

  return (
    <LoginWrapper show={show}>
      <CloseLoginForm onClick={() => setVisible(false)}>
        <img src={removeSvg} alt="remove svg" />
      </CloseLoginForm>
      {!visibleLogin && <RegistartionTitle>Регистрация</RegistartionTitle>}
      {!visibleLogin ? (
        <Registration
          setVisible={setVisible}
          visibleLogin={visibleLogin}
          setVisibleLogin={setVisibleLogin}
          message="Sign up"
        />
      ) : (
        <Login
          dispatch={dispatch}
          setVisible={setVisible}
          visibleLogin={visibleLogin}
          setVisibleLogin={setVisibleLogin}
          message="Log in"
        />
      )}
    </LoginWrapper>
  );
};

export default Auth;
