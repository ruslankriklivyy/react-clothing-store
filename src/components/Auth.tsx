import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Registration from './Registration';
import Login from './Login';

import removeSvg from '../assets/img/cancel.svg';

import { CloseLoginForm, LoginWrapper, RegistartionTitle } from '../styles/AuthStyle';
import { RootState } from '../redux/reducers';
import { setVisibleAuth } from '../redux/actions/auth';

export interface IAuth {
  show: boolean;
}

const Auth = () => {
  const dispatch = useDispatch();
  const { visibleAuth } = useSelector((state: RootState) => state.auth);
  const [visibleLogin, setVisibleLogin] = React.useState(true);

  const setVisible = (visible: boolean) => {
    dispatch(setVisibleAuth(visible));
  };

  return (
    <LoginWrapper show={visibleAuth}>
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

export default React.memo(Auth);
