import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import arrowSvg from '../assets/img/arrow-white.svg';
import removeSvg from '../assets/img/cancel.svg';

const LoginWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 100px;
  z-index: 800;
  background: #fff;
  width: 350px;
  min-height: 400px;
  border-radius: 25px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  visibility: ${(props: ILogin) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props: ILogin) => (props.show ? '1' : '0')};
  transition: all 0.6s ease;
`;

const LoginContent = styled.div`
  padding: 30px;
  form {
    width: 100%;
    height: 100%;
  }
  button {
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 45px;
    img {
      margin-left: 20px;
      width: 20px;
      height: 20px;
    }
  }
`;

const LoginFormItem = styled.div`
  margin-bottom: 25px;
  label {
    display: block;
    font-size: 17px;
    letter-spacing: 1px;
    color: #000;
    opacity: 0.8;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    height: 38px;
    font-size: 16px;
    letter-spacing: 1px;
    background: #f4f6f8;
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 20px;
  }
`;

const LoginOrRegistration = styled.span`
  position: relative;
  display: block;
  letter-spacing: 1px;
  width: 40px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: #000;
  opacity: 0.7;
  margin-top: 40px;
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 13px;
    z-index: 700;
    width: 15px;
    height: 1px;
    background: #000;
  }
  &::after {
    right: -13px;
  }
  &::before {
    left: -13px;
  }
`;

const LoginRegistrationLink = styled.span`
  display: block;
  letter-spacing: 1px;
  font-weight: 500;
  width: 200px;
  margin: 35px auto 0 auto;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
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

interface ILogin {
  show: boolean;
  setVisible: (visible: boolean) => void;
}

const Login: React.FC<ILogin> = ({ show, setVisible }) => {
  const [visibleLogin, setVisibleLogin] = React.useState(true);

  return (
    <>
      <LoginWrapper show={show}>
        <CloseLoginForm onClick={() => setVisible(false)}>
          <img src={removeSvg} alt="remove svg" />
        </CloseLoginForm>
        {!visibleLogin && <RegistartionTitle>Регистрация</RegistartionTitle>}
        <LoginContent>
          <form>
            <LoginFormItem>
              <label htmlFor="email">ЭЛ.ПОЧТА</label>
              <input required autoFocus type="e-mail" name="email" />
            </LoginFormItem>
            <LoginFormItem>
              <label htmlFor="password">ПАРОЛЬ</label>
              <input required type="password" name="password" />
            </LoginFormItem>
            <Button addToCart registration={visibleLogin === false && true} type="text">
              <>
                {visibleLogin ? 'Войти' : 'Зарегистрироваться'}
                <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
              </>
            </Button>
            <LoginOrRegistration>или</LoginOrRegistration>
            <LoginRegistrationLink onClick={() => setVisibleLogin(!visibleLogin)}>
              {visibleLogin ? 'Быстрая регистрация' : 'Войти'}
            </LoginRegistrationLink>
          </form>
        </LoginContent>
      </LoginWrapper>
    </>
  );
};

export default Login;
