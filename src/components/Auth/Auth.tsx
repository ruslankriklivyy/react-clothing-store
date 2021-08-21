import React from 'react';
import { useDispatch } from 'react-redux';

import Registration from '../Registration';
import Login from '../Login';
import { CloseLoginForm, LoginWrapper, RegistartionTitle } from '../../styles/AuthStyle';

import removeSvg from '../../assets/img/cancel.svg';

export interface IAuth {
  show: boolean;
}

interface IAuthProps {
  visibleAuthBlock: boolean;
  setVisibleAuthBlock: (visible: boolean) => void;
}

const Auth: React.FC<IAuthProps> = ({ visibleAuthBlock, setVisibleAuthBlock }) => {
  const dispatch = useDispatch();
  const [visibleLogin, setVisibleLogin] = React.useState(true);

  const setVisible = (visible: boolean) => {
    setVisibleAuthBlock(visible);
  };

  return (
    <LoginWrapper show={visibleAuthBlock}>
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
