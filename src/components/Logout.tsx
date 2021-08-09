import React from 'react';


import { LogoutBtns, LogoutWrapper } from '../styles/LogoutStyle';

export interface ILogout {
  show: boolean;
  setVisibleLogout: (visible: boolean) => void;
  setAuth: (auth: boolean) => void
}

const Logout: React.FC<ILogout> = ({ show, setVisibleLogout, setAuth }) => {

  const onLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
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
