import React from 'react';
import { useDispatch } from 'react-redux';

import { setAuth } from '../redux/actions/auth';
import { LogoutBtns, LogoutWrapper } from '../styles/LogoutStyle';

export interface ILogout {
  show: boolean;
  setVisibleLogout: (visible: boolean) => void;
}

const Logout: React.FC<ILogout> = ({ show, setVisibleLogout }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem('token');
    dispatch(setAuth(false));
    setVisibleLogout(false);
  };

  return (
    <LogoutWrapper show={show}>
      <h4>Вы хотите выйти с аккаунта?</h4>
      <LogoutBtns>
        <button onClick={() => onLogout()}>Да</button>
        <button onClick={() => setVisibleLogout(false)}>Нет</button>
      </LogoutBtns>
    </LogoutWrapper>
  );
};

export default React.memo(Logout);
